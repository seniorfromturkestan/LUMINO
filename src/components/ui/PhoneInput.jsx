const PhoneInput = ({ label, value, onChange, required = false }) => {
    const handlePhoneChange = (e) => {
      let input = e.target.value;
  
      input = input.replace(/[^\d+]/g, "");
  
      if (!input.startsWith("+7")) {
        input = "+7" + input.replace(/^\\+?7?/, "");
      }
  
      if (input.length > 12) {
        input = input.slice(0, 12); 
      }
  
      onChange({ target: { value: input } });
    };
  
    const handleKeyDown = (e) => {
      if ((e.key === "Backspace" || e.key === "Delete") && e.target.selectionStart <= 2) {
        e.preventDefault();
      }
    };
  
    return (
      <div className="mb-4">
        <label className="block text-sm mb-2 text-gray-700">
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
        </label>
        <input
          type="tel"
          value={value}
          placeholder="+7"
          onChange={handlePhoneChange}
          onKeyDown={handleKeyDown}
          className="w-full text-base px-3 py-1.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
    );
  };
export default PhoneInput;  