import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import MediaItem from '@/components/work/MediaItem';
import { videos } from '@/data/works';
import i18n from '@/i18n';

const Videos = () => {
  const { t } = useTranslation();
  const lang = (i18n.language?.slice(0, 2) ?? 'en') as 'en' | 'de';

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

            {/* Videos Grid */}
            <div className="space-y-24 md:space-y-32">
              {videos.map((item, index) => {
                const text = item.text[lang] ?? item.text.en;
                return (
                  <MediaItem
                    key={item.id}
                    src={item.src}
                    alt={text.alt}
                    title={text.title}
                    year={item.year}
                    description={text.description}
                    type={item.type}
                    poster={item.poster}
                    index={index}
                  />
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
