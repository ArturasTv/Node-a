import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-accent-content py-4">
      <div className="container mx-auto">
        <p className="text-sm">{t("copyright", { currentYear })}</p>
      </div>
    </footer>
  );
}

export default Footer;
