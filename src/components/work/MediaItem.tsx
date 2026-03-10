import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useActiveVideo } from '@/components/work/ActiveVideoContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface MediaItemProps {
  id?: string;
  src: string;
  alt: string;
  title: string;
  year: string;
  description: string;
  index: number;
  type?: 'image' | 'video' | 'portrait';
  poster?: string;
  hideMeta?: boolean;
  interactionMode?: 'autoPlay' | 'hoverControlled';
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
  id,
  src,
  alt,
  title,
  year,
  description,
  index,
  type = 'image',
  poster,
  hideMeta,
  interactionMode = 'autoPlay',
}: MediaItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, once: false });

  const activeVideo = useActiveVideo();
  const activeId = activeVideo?.activeId ?? null;
  const setActive = activeVideo?.setActive;
  const clearActive = activeVideo?.clearActive;
  const mediaId = id ?? src;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isVideoType = type === 'video' || type === 'portrait';

  const [muted, setMuted] = useState(true);
  const [needsUserPlay, setNeedsUserPlay] = useState(false);
  const [shouldLoadImage, setShouldLoadImage] = useState(isVideoType);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

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
    if (isVisible) void tryPlay();
  };

  // Autoplay modes
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isVideoType) return;

    const isHoverControlled = interactionMode === 'hoverControlled';

    if (!isVisible) {
      v.pause();
      if (isHoverControlled && activeId === mediaId) {
        clearActive?.(mediaId);
      }
      return;
    }

    if (isHoverControlled) {
      if (prefersReducedMotion) return;
      const shouldPlay = activeId === mediaId;
      if (shouldPlay) {
        void tryPlay();
      } else {
        v.pause();
      }
      return;
    }

    // Default autoplay mode (used on /videos)
    if (!isMobile) {
      void tryPlay();
    }
  }, [interactionMode, isVisible, isMobile, muted, isVideoType, activeId, mediaId, clearActive, prefersReducedMotion]);

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
    await tryPlay();
  };

  const handleMouseEnter = () => {
    if (!isVideoType || interactionMode !== 'hoverControlled') return;
    setActive?.(mediaId);
  };

  const handleMouseLeave = () => {
    if (!isVideoType || interactionMode !== 'hoverControlled') return;
    clearActive?.(mediaId);
  };

  const handleFocus = () => {
    if (!isVideoType || interactionMode !== 'hoverControlled') return;
    setActive?.(mediaId);
  };

  const handleBlur = () => {
    if (!isVideoType || interactionMode !== 'hoverControlled') return;
    clearActive?.(mediaId);
  };

  const handlePointerDown = () => {
    if (!isVideoType || interactionMode !== 'hoverControlled') return;
    if (isMobile) {
      setActive?.(mediaId);
    }
  };

  const handleVideoClick = async () => {
    if (!isVideoType) return;

    if (interactionMode === 'hoverControlled' && activeId !== mediaId) {
      setActive?.(mediaId);
      await tryPlay();
      return;
    }

    await handleToggleMute();
  };

  useEffect(() => {
    if (isVideoType) return;
    if (shouldLoadImage) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldLoadImage(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadImage(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px', threshold: 0 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVideoType, shouldLoadImage, ref]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPointerDown={handlePointerDown}
    >
      <div className="media-item mb-6 flex items-center justify-center relative">
        {isVideoType ? (
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              muted
              autoPlay={interactionMode === 'autoPlay'}
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={handleLoadedMetadata}
              onClick={handleVideoClick}
              className="max-h-[80vh] w-full object-contain"
            />

            <div
              className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white opacity-80 transition group-hover:opacity-100"
              aria-hidden
            >
              <PlayIcon />
            </div>

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
          <img
            src={shouldLoadImage ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='}
            data-src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="max-h-[80vh]"
          />
        )}
      </div>

      {!hideMeta && (title || description || year) && (
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <div>
            {title && <h3 className="font-display text-2xl md:text-3xl">{title}</h3>}
            {description && <p className="text-muted-foreground mt-2 max-w-xl">{description}</p>}
          </div>
          {year && <span className="text-editorial-muted shrink-0">{year}</span>}
        </div>
      )}
    </motion.div>
  );
};

export default MediaItem;
