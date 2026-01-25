import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import portrait from '@/assets/about.jpg';

const About = () => {
  const { t } = useTranslation();

  const experience = t('about.experience.items', { returnObjects: true }) as Array<{
    role: string;
    company: string;
    period: string;
  }>;

  const education = t('about.education.items', { returnObjects: true }) as Array<{
    degree: string;
    institution: string;
    year: string;
  }>;

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Layout>
      <PageTransition>
        <section className="section-spacing">
          <div className="editorial-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-16 md:space-y-24"
            >
              {/* Portrait and Intro - Top Section */}
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 md:gap-16">
                {/* Portrait */}
                <div className="md:order-1">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={portrait}
                      alt="Paul Kremers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Intro Text */}
                <div className="md:order-2 flex flex-col justify-center">
                  <h1 className="display-lg mb-8">{t('about.title')}</h1>
                  <p className="text-lg text-foreground leading-relaxed">
                    {t('about.intro')}
                  </p>
                </div>
              </motion.div>

              {/* Experience and Education - Bottom Sections */}
              <motion.div variants={stagger} className="grid md:grid-cols-2 gap-16 md:gap-24">
                {/* Experience */}

                {/* Education */}
                <motion.div variants={fadeUp}>
                  <h2 className="text-editorial mb-6">
                    {t('about.education.title')}
                  </h2>
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <div key={index}>
                        <h3 className="font-display text-xl">{item.degree}</h3>
                        <p className="text-foreground">
                          {item.institution}
                        </p>
                        <p className="text-sm text-foreground mt-1">
                          {item.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
