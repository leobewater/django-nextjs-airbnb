interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton = ({ label, className, onClick }: CustomButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
