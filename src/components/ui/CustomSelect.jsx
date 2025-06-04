import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

const CustomSelect = ({
  label,
  value,
  onValueChange,
  options = [],
  required = false,
  placeholder = "Выберите...",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-2 text-gray-700">
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
        </label>
      )}

      <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className="inline-flex items-center justify-between w-full px-2 py-1.5 border border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <span className={value ? "text-primary" : "text-gray-400 py-0.5 text-sm"}>
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        <Select.Icon className="ml-2 text-gray-500">
          <ChevronDown className="w-4 h-4" />
        </Select.Icon>
      </Select.Trigger>


        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={4}
            className="z-50 bg-white rounded-md shadow-lg border border-gray-100 mt-1 w-[var(--radix-select-trigger-width)]"
          >
            <Select.Viewport className="p-1">
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className="text-sm px-3 py-2 cursor-pointer rounded hover:bg-orange-50 flex items-center gap-2 text-gray-800 focus:bg-orange-100 focus:outline-none"
                >
                  <Select.ItemIndicator>
                    <Check className="w-4 h-4 text-orange-500" />
                  </Select.ItemIndicator>
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default CustomSelect;
