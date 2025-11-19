import { cn } from '@/utils/cn';

const Button = ({ size = 'md', children, className }) => {
  // cn is used to "sum" classNames conditionally
  // Here we say that if size prop is 'sm', then add the className 'text-sm'
  return <button className={cn('bg-primary text-white px-4 text-base py-3 cursor-pointer rounded-md', size === 'sm' && 'text-sm', className)}> {children}</button>;
};

export default Button;
