import { cn } from '@/libs/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'next-view-transitions';
import React, { PropsWithChildren } from 'react';

const buttonVariants = cva(
  'flex items-center transition w-fit ease-in-out uppercase text-sm duration-300 active:scale-[97%] justify-center font-black',
  {
    variants: {
      variant: {
        default: 'bg-green text-white hover:shadow-md',
        pink: 'bg-pink-darker text-white hover:shadow-md',
      },
      size: {
        default: 'h-10 rounded-md px-6 py-4',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
}

const Button = ({
  href,
  children,
  className,
  variant = 'default',
  size = 'default',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Link
      href={href}
      className={cn([
        buttonVariants({
          variant,
          size,
          className,
        }),
      ])}
    >
      {children}
    </Link>
  );
};

export { Button, buttonVariants };
