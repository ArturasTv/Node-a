import { ChangeEvent, useLayoutEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../../constants/localstorage";
import { THEME_OPTIONS } from "../../constants/themes";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/common";
import Select from "../ui/select";

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
  }, [savedTheme]);

  return (
    <Select
      onChange={handleThemeChange}
      className={cn("select", className)}
      defaultValue={savedTheme}
    >
      <Select.Option disabled>{t("theme")}</Select.Option>
      {THEME_OPTIONS.map((option) => (
        <Select.Option value={option} key={option}>
          {t(`daisyThemes.${option}`)}
        </Select.Option>
      ))}
    </Select>
  );
}

export default SelectTheme;
