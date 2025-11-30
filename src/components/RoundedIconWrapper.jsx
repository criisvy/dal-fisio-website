import { cn } from "@/utils/cn";


const RoundedIconWrapper = ({ children, className }) => {
  return (
    <div className={cn("rounded-full h-fit  bg-primary-background  p-3 flex justify-center items-center", className)}>
      {children}
    </div>
  );
};

export default RoundedIconWrapper;
