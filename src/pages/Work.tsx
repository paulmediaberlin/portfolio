import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import MediaItem from '@/components/work/MediaItem';

import work1 from '@/assets/works/work-1.jpg';
import work2 from '@/assets/works/work-2.jpg';
import work3 from '@/assets/works/work-3.jpg';
import work4 from '@/assets/works/work-4.jpg';
import work5 from '@/assets/works/work-5.jpg';
import work6 from '@/assets/works/work-6.jpg';
import work7 from '@/assets/works/work-7.jpg';
import work8 from '@/assets/works/work-8.jpg';

const Work = () => {
  const { t } = useTranslation();

  const works = t('work.works', { returnObjects: true }) as Array<{
    title: string;
    year: string;
    description: string;
  }>;

  const images = [work1, work2, work3, work4, work5, work6, work7, work8];

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
              <h1 className="display-lg mb-6">{t('work.title')}</h1>
              <p className="text-foreground text-lg max-w-xl">
                {t('work.subtitle')}
              </p>
            </motion.div>

            {/* Works Grid */}
            <div className="space-y-24 md:space-y-32">
              {works.map((work, index) => (
                <MediaItem
                  key={index}
                  src={images[index]}
                  title={work.title}
                  year={work.year}
                  description={work.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Work;
