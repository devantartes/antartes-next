import type { ButtonHTMLAttributes } from "react";

export function ButtonBG({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-primary cursor-pointer text-black px-4 py-2 rounded-2xl text-[16px] hover:shadow-[0px_0px_15px_0px_#7FFBAE] transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
