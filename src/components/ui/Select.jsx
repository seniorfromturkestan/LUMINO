const Select = ({ label, value, onChange, options = [], required = false }) => {
    return (
      <div>
        {label && (
          <label className="block text-sm mb-2">
            {required && <span className="text-red-500 mr-1">*</span>}
            {label}
          </label>
        )}
        <select
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-sm bg-white text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
export default Select;
  