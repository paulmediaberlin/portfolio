import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

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
        <section className="section-spacing min-h-[calc(100vh-12rem)] flex items-center">
          <div className="editorial-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-editorial-muted mb-6"
              >
                {t('contact.subtitle')}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="display-lg mb-8"
              >
                {t('contact.title')}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed mb-16"
              >
                {t('contact.intro')}
              </motion.p>

              <motion.div variants={stagger} className="space-y-10">
                {/* Email */}
                <motion.div variants={fadeUp} className="flex gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                  <div>
                    <p className="text-editorial-muted mb-2">{t('contact.email')}</p>
                    <a
                      href={`mailto:${t('contact.emailValue')}`}
                      className="font-display text-2xl editorial-link"
                    >
                      {t('contact.emailValue')}
                    </a>
                  </div>
                </motion.div>

                {/* Studio */}
                <motion.div variants={fadeUp} className="flex gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                  <div>
                    <p className="text-editorial-muted mb-2">{t('contact.studio')}</p>
                    <p className="font-display text-2xl">
                      {t('contact.studioValue')}
                    </p>
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

export default Contact;
