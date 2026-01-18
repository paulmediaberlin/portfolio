import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface MediaItemProps {
  src: string;
  title: string;
  year: string;
  description: string;
  index: number;
  type?: 'image' | 'video';
  poster?: string;
}

const MediaItem = ({
  src,
  title,
  year,
  description,
  index,
  type = 'image',
  poster,
}: MediaItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, once: false });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  const direction = index % 2 === 0 ? 'left' : 'right';

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -40 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };


  const MuteIcon = ({ muted }: { muted: boolean }) => (
    muted ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
        <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" />
        <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" />
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
        <path d="M15 9a4 4 0 010 6" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  );
  /** Play / pause based on scroll visibility */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      className="group"
    >
      <div className="media-item mb-6 flex items-center justify-center relative">
        {type === 'video' ? (
          <div
            className="relative"
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              className="max-h-[80vh] cursor-pointer"
              onClick={() => {
                setMuted((m) => !m);
              }}
            />

            {/* Sound affordance */}

            <button
              type="button"
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              onClick={() => setMuted((m) => !m)}
              className="
    absolute bottom-4 right-4
    bg-black/50 text-white
    rounded-full p-2
    backdrop-blur
    opacity-60
    hover:opacity-100
    transition
  "
            >
              <MuteIcon muted={muted} />
            </button>

          </div>
        ) : (
          <img
            src={src}
            alt={title}
            loading="lazy"
            className="max-h-[80vh]"
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl">
            {description}
          </p>
        </div>
        <span className="text-editorial-muted shrink-0">{year}</span>
      </div>
    </motion.div>
  );
};

export default MediaItem;

