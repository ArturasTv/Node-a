import Flag from "../ui/flag";
import { LOCAL_STORAGE_KEYS } from "../../constants/localstorage";
import { useTranslation } from "react-i18next";

function ToggleLanguage() {
  const { i18n, t } = useTranslation("translation");

  const language = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = language === "lt" ? "en" : "lt";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, newLanguage);
  };

  return (
    <div className="flex items-center space-x-2 ">
      <span className="text-sm">{t("language")}:</span>
      <label className="swap swap-rotate shrink-0">
        <input
          type="checkbox"
          checked={language === "lt"}
          onChange={toggleLanguage}
        />
        <Flag className="swap-on" size="28" code="lt" />
        <Flag className="swap-off" size="28" code="us" />
      </label>
    </div>
  );
}

export default ToggleLanguage;
