import Flag from "../ui/flag";
import { LOCAL_STORAGE_KEYS } from "../../constants/localstorage";
import { useTranslation } from "react-i18next";

function ToggleLanguage() {
  const { i18n } = useTranslation("translation");

  const language = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = language === "lt" ? "en" : "lt";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, newLanguage);
  };

  return (
    <label className="swap">
      <input
        type="checkbox"
        checked={language === "lt"}
        onChange={toggleLanguage}
      />
      <Flag className="swap-on" size="36" code="LT" />
      <Flag className="swap-off" size="36" code="US" />
    </label>
  );
}

export default ToggleLanguage;
