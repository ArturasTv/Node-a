import { ChangeEvent, useLayoutEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../../constants/localstorage";
import { THEME_OPTIONS } from "../../constants/themes";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/common";

type Props = {
  className?: string;
};

function SelectTheme({ className }: Props) {
  const { t } = useTranslation();

  const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) || "Theme";

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;

    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, selectedTheme);

    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // TODO: create select component
  return (
    <select
      onChange={handleThemeChange}
      className={cn("select", className)}
      defaultValue={savedTheme}
    >
      <option disabled>{t("theme")}</option>
      {THEME_OPTIONS.map((option) => (
        <option value={option} key={option}>
          {t(`daisyThemes.${option}`)}
        </option>
      ))}
    </select>
  );
}

export default SelectTheme;
