import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="editorial-container py-12 border-t border-border">
      <p className="text-sm text-muted-foreground">
        {t('footer.copyright')}
      </p>
    </footer>
  );
};

export default Footer;
