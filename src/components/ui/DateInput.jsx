import { useState, useRef, useEffect } from "react";
import { format, parse, isValid } from "date-fns";
import { ru } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ChevronDown } from "lucide-react";

const DateInput = ({ label, value, onChange, required = false }) => {
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef(null);

  const handleMaskedInput = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 8);
    const masked = raw
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2}\.\d{2})(\d)/, "$1.$2");
    onChange({ target: { value: masked } });
  };

  const parsedDate = parse(value, "dd.MM.yyyy", new Date());
  const selectedDate = isValid(parsedDate) ? parsedDate : undefined;

  const handleDaySelect = (date) => {
    if (!date) return;
    const formatted = format(date, "dd.MM.yyyy");
    onChange({ target: { value: formatted } });
    setShowPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mb-4 relative" ref={ref}>
      {label && (
        <label className="block text-sm mb-2 text-gray-700">
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleMaskedInput}
          onFocus={() => setShowPicker(true)}
          placeholder="дд.мм.гггг"
          inputMode="numeric"
          className="w-full text-base placeholder:text-sm px-3 py-1.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="button"
          onClick={() => setShowPicker((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
          tabIndex={-1}
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {showPicker && (
        <div className="absolute z-50 mt-2 p-2 bg-white shadow-md rounded w-full">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDaySelect}
            locale={ru}
            captionLayout="dropdown"
            fromYear={1950}
            toYear={2025}
            classNames={{
                nav_button:
                "text-orange-500 hover:bg-orange-100 transition rounded p-1.5 disabled:opacity-50 disabled:cursor-not-allowed",
            }}
            modifiersClassNames={{
                selected: "bg-orange-500 text-white hover:bg-orange-600 rounded-full",
            }}
            />


        </div>
      )}
    </div>
  );
};

export default DateInput;
