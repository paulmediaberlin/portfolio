import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
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

const MuteIcon = ({ muted }: { muted: boolean }) =>
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
  );

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
  </svg>
);

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
  const [needsUserPlay, setNeedsUserPlay] = useState(false);

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  }, []);

  const direction = index % 2 === 0 ? 'left' : 'right';

  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const tryPlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      // Ensure the element state matches React state before playing
      v.muted = muted;
      await v.play();
      setNeedsUserPlay(false);
    } catch {
      // Autoplay blocked by browser policy/settings
      setNeedsUserPlay(true);
    }
  };

  // Attempt autoplay after metadata is ready (helps Firefox/Safari timing)
  const handleLoadedMetadata = () => {
    // Only attempt automatically when in view
    if (isVisible) void tryPlay();
  };

  // Desktop: play/pause based on visibility.
  // Mobile/iOS: don't rely on scroll-trigger play (often blocked), but we can still pause when leaving.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || type !== 'video') return;

    if (!isVisible) {
      v.pause();
      return;
    }

    if (!isMobile) {
      void tryPlay();
    }
  }, [isVisible, isMobile, muted, type]);

  const handleToggleMute = async () => {
    const v = videoRef.current;
    if (!v) return;

    const next = !muted;
    setMuted(next);
    v.muted = next;

    // If user unmutes, some browsers require play() again tied to the click
    if (!next) {
      try {
        await v.play();
        setNeedsUserPlay(false);
      } catch {
        setNeedsUserPlay(true);
      }
    }
  };

  const handleUserPlay = async () => {
    // User gesture -> should succeed across Safari/Chrome/Firefox
    await tryPlay();
  };

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
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              muted={muted}              // ✅ IMPORTANT: bind to state (fixes unmute)
              autoPlay                   // ✅ allow autoplay where permitted
              loop
              playsInline
              preload="auto"
              className="max-h-[80vh] w-full object-contain"
              onLoadedMetadata={handleLoadedMetadata}
            />

            {/* If autoplay is blocked, show a tap-to-play affordance */}
            {needsUserPlay && (
              <button
                type="button"
                aria-label="Play video"
                onClick={handleUserPlay}
                className="
                  absolute inset-0 m-auto
                  h-14 w-14
                  bg-black/50 text-white
                  rounded-full
                  flex items-center justify-center
                  backdrop-blur
                  opacity-90 hover:opacity-100
                  transition
                "
                style={{ pointerEvents: 'auto' }}
              >
                <PlayIcon />
              </button>
            )}

            {/* Mute/unmute button */}
            <button
              type="button"
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              onClick={handleToggleMute}
              className="
                absolute bottom-4 right-4
                bg-black/50 text-white
                rounded-full p-2
                backdrop-blur
                opacity-70 hover:opacity-100
                transition
              "
              style={{ pointerEvents: 'auto' }}
            >
              <MuteIcon muted={muted} />
            </button>
          </div>
        ) : (
          <img src={src} alt={title} loading="lazy" className="max-h-[80vh]" />
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl">{description}</p>
        </div>
        <span className="text-editorial-muted shrink-0">{year}</span>
      </div>
    </motion.div>
  );
};

export default MediaItem;

