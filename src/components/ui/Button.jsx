const Button = ({ children, onClick, type = "button", disabled = false }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="w-full bg-[#F76331] cursor-pointer hover:bg-orange-600 text-white font-normal py-2 px-4 rounded-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    );
  };

export default Button;