import { twMerge } from "tailwind-merge";

interface ReusableButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  classNames?: string;
  type?: "button" | "submit" | "reset"; // ✅ added type
}

const Button: React.FC<ReusableButtonProps> = ({
  label,
  variant = "secondary",
  onClick,
  classNames = "",
  type = "button", // ✅ default to "button"
}) => {
  const baseClasses =
    "text-lg font-Jost font-semibold bg-gradient-primary cursor-pointer flex items-center gap-1 justify-center transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 p-[1px]";

  const variantClasses =
    variant === "primary"
      ? "bg-primary-20 text-white border-transparent px-4 py-4"
      : "";

  return (
    <button
      type={type} // ✅ applied here
      onClick={onClick}
      className={twMerge(`${baseClasses} ${variantClasses}`, classNames) }
    >
      {label}
    </button>
  );
};

export default Button;
