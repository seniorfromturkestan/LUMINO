import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const flags = {
  kz: "https://flagcdn.com/w40/kz.png",
  ru: "https://flagcdn.com/w40/ru.png",
  en: "https://flagcdn.com/w40/us.png",
};

const labels = {
  kz: "Казахский",
  ru: "Русский",
  en: "Английский",
};

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("ru");
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setOpen(false);
    console.log("Выбран язык:", lang);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 px-2 py-1 rounded-sm cursor-pointer"
      >
        <img src={flags[language]} alt={language} className="w-6 h-4 rounded-xs object-cover" />
        <ChevronDown className="w-4 h-4 " />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-200 text-primary rounded shadow-md z-50 w-40 text-sm">
          {Object.entries(flags).map(([key, url]) => (
            <div
              key={key}
              onClick={() => handleSelect(key)}
              className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 cursor-pointer flex items-center space-x-2"
            >
              <img src={url} alt={key} className="w-5 h-3 object-cover rounded-xs" />
              <span>{labels[key]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
