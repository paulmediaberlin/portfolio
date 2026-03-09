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

  const paragraphs = t('about.intro').split('\n').filter(Boolean);

  const meta = [
    { label: t('about.meta.locationLabel'), value: t('about.meta.location') },
    { label: t('about.meta.roleLabel'), value: t('about.meta.role') },
    { label: t('about.meta.clientsLabel'), value: t('about.meta.clients') },
  ];

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
              className="space-y-20 md:space-y-28"
            >
              {/* Portrait + Narrative */}
              <motion.div
                variants={fadeUp}
                className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_360px]"
              >
                {/* Text column */}
                <div className="space-y-8 lg:space-y-10">
                  <h1 className="display-lg">{t('about.title')}</h1>

                  <div className="space-y-6 max-w-3xl text-lg leading-relaxed text-foreground">
                    {paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  <div className="border-l-2 border-foreground/40 pl-4 text-foreground/90 italic text-lg max-w-2xl">
                    {t('about.quote')}
                  </div>
                </div>

                {/* Portrait */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={portrait}
                      alt="Paul Kremers"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Experience & Education */}
              <motion.div variants={stagger} className="grid md:grid-cols-2 gap-12 md:gap-16">
                <motion.div variants={fadeUp} className="space-y-6">
                  <h2 className="text-editorial mb-2">{t('about.experience.title')}</h2>
                  <div className="space-y-5">
                    {experience.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <h3 className="font-display text-xl text-foreground">{item.role}</h3>
                        <p className="text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-editorial-muted">{item.period}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-6">
                  <h2 className="text-editorial mb-2">{t('about.education.title')}</h2>
                  <div className="space-y-5">
                    {education.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <h3 className="font-display text-xl text-foreground">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-editorial-muted">{item.year}</p>
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
