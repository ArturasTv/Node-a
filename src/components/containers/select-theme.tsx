import { ChangeEvent, useLayoutEffect } from "react";
import { LOCALSTORAGE_KEYS } from "../../constants/localstorage";

const THEME_OPTIONS = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

function SelectTheme() {
  const savedTheme = localStorage.getItem(LOCALSTORAGE_KEYS.THEME) || "Theme";

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;

    localStorage.setItem(LOCALSTORAGE_KEYS.THEME, selectedTheme);

    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <select
      onChange={handleThemeChange}
      className="select"
      defaultValue={savedTheme}
    >
      <option disabled>Theme</option>
      {THEME_OPTIONS.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export default SelectTheme;
