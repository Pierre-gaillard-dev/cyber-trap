import type { FC, HTMLAttributes, ReactNode } from "react";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children, className, ...props }) => {
  return (
    <div className={`flex-1 flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Page;
