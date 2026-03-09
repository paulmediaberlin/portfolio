import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import MediaItem from '@/components/work/MediaItem';
import { images } from '@/data/works';

const Images = () => {
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
              <h1 className="display-lg mb-6">{t('images.title')}</h1>
              <p className="text-foreground text-lg max-w-xl">
                {t('images.subtitle')}
              </p>
            </motion.div>

            {/* Images Grid */}
            <div className="space-y-24 md:space-y-32">
              {images.map((item, index) => {
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

export default Images;
