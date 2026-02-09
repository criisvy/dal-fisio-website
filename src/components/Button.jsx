import { cn } from "@/utils/cn";

const Button = ({ size = "md", children, className, ...props }) => {
  const sizes = {
    sm: "text-sm px-3 py-2",
    md: "px-4 py-3",
    icon: "h-10 w-10 p-0 flex items-center justify-center",
  };

  return (
    <button
      type="button"
      {...props}
      className={cn(
        "bg-primary hover:bg-primary-background hover:text-primary cursor-pointer rounded-md px-4 py-3 text-base text-white transition duration-100 ease-in-out hover:scale-105 disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
