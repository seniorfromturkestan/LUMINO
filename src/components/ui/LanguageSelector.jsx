import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

const LanguageSelector = ({ value, onValueChange }) => {
  const options = [
    { value: "kz", label: "Казахский" },
    { value: "ru", label: "Русский" },
    { value: "en", label: "Английский" },
  ];

  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="inline-flex items-center justify-center space-x-1 px-2 py-1 border border-gray-300 rounded-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <div className="flex items-center space-x-1">
          <div className="w-6 h-4 bg-blue-500 rounded-sm" />
          <div className="w-6 h-4 bg-yellow-400 rounded-sm -ml-1" />
          <ChevronDown className="w-4 h-4" />
        </div>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={4}
          className="z-50 bg-white rounded-md shadow-lg border border-gray-100 mt-1 w-[160px]"
        >
          <Select.Viewport className="p-1">
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className="text-sm px-3 py-2 cursor-pointer rounded hover:bg-orange-50 flex items-center gap-2 text-gray-800 focus:bg-orange-100 focus:outline-none"
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LanguageSelector;
