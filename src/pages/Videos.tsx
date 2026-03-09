import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import MediaItem from '@/components/work/MediaItem';
import { videoGroups } from '@/data/works';

const Videos = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? 'en').slice(0, 2) as 'en' | 'de';

  return (
    <Layout>
      <PageTransition>
        <section className="section-spacing">
          <div className="editorial-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-20 md:mb-32"
            >
              <h1 className="display-lg mb-6">{t('videos.title')}</h1>
              <p className="text-foreground text-lg max-w-xl">
                {t('videos.subtitle')}
              </p>
            </motion.div>

            {/* Video Groups */}
            <div className="space-y-24 md:space-y-32">
              {videoGroups.map((group, groupIndex) => {
                const title = group.title[lang] ?? group.title.en;
                const description = group.description[lang] ?? group.description.en;
                const item = group.items[0];

                return (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: groupIndex * 0.05 }}
                    className="space-y-8"
                  >
                    <div className="space-y-3">
                      <h2 className="display-md">{title}</h2>
                      <p className="text-muted-foreground max-w-3xl">{description}</p>
                    </div>

                    {item && (
                      <MediaItem
                        key={item.id}
                        src={item.src}
                        alt={item.alt ?? title}
                        title=""
                        year=""
                        description=""
                        type={item.type}
                        poster={item.poster}
                        index={0}
                        hideMeta
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Videos;
