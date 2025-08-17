import useLocalStorage from "./useLocalStorage";
import "./Theme.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="Toggle-Theme" data-theme={theme}>
      <div className="container">
        <p>hello</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
