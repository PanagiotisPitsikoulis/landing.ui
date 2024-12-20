import { Spacer } from "@nextui-org/react";
import React from "react";
import { cn } from "../../utils/cn";

export const pageBounds = "lg:px-10 px-6 w-full";
export const breakOutOfContainer = "lg:-mx-10 -mx-6";

/**
 *
 Wraps around the page section of the page, can optionally display a background image.
 */
function PageContainer({
  children,
  classNames,
  className,
}: {
  children: React.ReactNode;
  classNames?: { base?: string; container?: string };
  className?: string;
}) {
  return (
    <main className={cn("flex-grow", pageBounds, className, classNames?.base)}>
      <Spacer y={5} className='hidden lg:block' />
      <div className={cn("flex flex-col gap-10", classNames?.container)}>
        {children}
      </div>
      <Spacer y={60} />
    </main>
  );
}

export default PageContainer;
