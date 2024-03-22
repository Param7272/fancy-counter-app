/* eslint-disable react/prop-types */
const Button = ({ icon, onClick, className }) => {
  return (
    <button className={`text-2xl ${className}`} onClick={onClick}>
      {icon}
    </button>
  );
};
export default Button;
