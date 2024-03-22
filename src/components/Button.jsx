/* eslint-disable react/prop-types */
const Button = ({ icon, onClick, className, onkeydown }) => {
  return (
    <button
      className={`text-2xl ${className}`}
      onClick={onClick}
      onKeyDown={onkeydown}
    >
      {icon}
    </button>
  );
};
export default Button;
