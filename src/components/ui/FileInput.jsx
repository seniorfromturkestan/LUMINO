import { useState } from "react";

const FileInput = ({ label, subLabel, onChange, accept, multiple = false, required = false }) => {
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFileNames(files.map((file) => file.name));
    onChange(e);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm mb-2 text-gray-700">
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
          {subLabel && <span className="ml-1 text-gray-400">({subLabel})</span>}
        </label>
      )}

      <input
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleFileChange}
        className="block file:w-full text-sm file:text-secondary file:mr-4 file:py-2 file:px-3 file:border file:rounded-sm file:border-gray-300 file:bg-white file:text-sm file:font-medium file:hover:bg-orange-50"
      />

      {fileNames.length > 0 && (
        <ul className="mt-1 text-sm text-secondary list-disc list-inside">
          {fileNames.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileInput;
