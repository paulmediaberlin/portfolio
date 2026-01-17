import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

interface MediaItemProps {
  src: string;
  title: string;
  year: string;
  description: string;
  index: number;
  type?: 'image' | 'video';
  poster?: string;
}

const MediaItem = ({ src, title, year, description, index, type = 'image', poster }: MediaItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, once: true });
  const [isPlaying, setIsPlaying] = useState(false);
  
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

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      className="group"
    >
      <div className="media-item aspect-[4/3] md:aspect-[16/10] mb-6 bg-muted">
        {type === 'video' ? (
          <video
            src={src}
            poster={poster}
            muted
            playsInline
            onClick={handleVideoClick}
            className="cursor-pointer"
          />
        ) : (
          <img
            src={src}
            alt={title}
            loading="lazy"
          />
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
