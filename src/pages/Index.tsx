import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/ui/PageTransition';
import { ArrowRight } from 'lucide-react';
import homeImage from '@/assets/home.jpeg';

const Index = () => {
  const { t } = useTranslation();

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Layout>
      <PageTransition>
        <section className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="editorial-container section-spacing w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* LEFT: TEXT CONTENT */}
              <div className="max-w-4xl">
                <motion.p
                  variants={fadeUp}
                  className="text-editorial-muted mb-6"
                >
                  {t('home.greeting')}
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="display-xl mb-6"
                >
                  {t('home.name')}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-8"
                >
                  {t('home.title')}
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg md:text-xl text-foreground max-w-2xl mb-16 leading-relaxed"
                >
                  {t('home.tagline')}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                >
                  <Link
                    to="/work"
                    className="btn-editorial-outlined group"
                  >
                    {t('home.viewWork')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/about"
                    className="btn-editorial group inline-flex items-center gap-2"
                  >
                    {t('home.aboutMe')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/contact"
                    className="btn-editorial group inline-flex items-center gap-2"
                  >
                    {t('home.getInTouch')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* RIGHT (DESKTOP) / BOTTOM (MOBILE): IMAGE */}
              <motion.div
                variants={fadeUp}
                className="flex justify-center lg:justify-end mt-16 lg:mt-0"
              >
                <img
                  src={homeImage}
                  alt="Home illustration"
                  className="
    w-full
    max-w-sm
    md:max-w-md
    lg:max-w-sm
    xl:max-w-md
    object-contain
  "
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;

