import { cn } from "@/utils/cn";

const Button = ({ size = "md", children, className }) => {
  return (
    <a
      className={cn(
        "bg-primary hover:bg-primary-background hover:text-primary cursor-pointer rounded-md px-4 py-3 text-base text-white transition duration-100 ease-in-out hover:scale-105",
        size === "sm" && "text-sm",
        className,
      )}
    >
      {children}
    </a>
  );
};

export default Button;
