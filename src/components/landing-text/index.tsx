import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";
import { cn } from "../../utils/cn";

const landingTextStyles = cva("flex flex-col gap-6", {
	variants: {
		orientation: {
			left: "items-start text-left",
			center: "items-center text-center",
			right: "items-end text-left",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
	},
	defaultVariants: {
		orientation: "center",
		size: "md",
	},
});

const titleStyles = cva("font-extrabold text-foreground capitalize", {
	variants: {
		size: {
			sm: "w-full text-3xl sm:w-3/4 sm:text-4xl md:w-2/3 md:text-5xl",
			md: "w-full text-5xl sm:w-2/3 sm:text-6xl md:w-1/2 md:text-7xl",
			lg: "w-full text-7xl sm:w-1/2 sm:text-8xl md:w-1/3 md:text-9xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const subtitleStyles = cva("font-normal text-foreground-700", {
	variants: {
		size: {
			sm: "w-full text-base sm:w-3/4 sm:text-lg md:w-2/3 md:text-xl",
			md: "w-full text-lg sm:w-2/3 sm:text-xl md:w-1/2 md:text-2xl",
			lg: "w-full text-xl sm:w-1/2 sm:text-2xl md:w-1/3 md:text-3xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type LandingTextProps = {
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	topContent?: React.ReactNode;
	bottomContent?: React.ReactNode;
	className?: string;
	classNames?: {
		container?: string;
		title?: string;
		subtitle?: string;
		topContent?: string;
		bottomContent?: string;
	};
} & VariantProps<typeof landingTextStyles>;

/**
 * LandingText component for the main section of a page with announcements,
 * headings, and call-to-action buttons.
 */
export const LandingText: React.FC<LandingTextProps> = ({
	title,
	subtitle,
	topContent,
	bottomContent,
	orientation,
	size,
	className,
	classNames = {},
}) => {
	return (
		<div
			className={cn(
				landingTextStyles({ orientation, size }),
				className,
				classNames.container,
			)}
		>
			{topContent && (
				<div className={cn("mb-4", classNames.topContent)}>{topContent}</div>
			)}
			{title && (
				<h1 className={cn(titleStyles({ size }), classNames.title)}>{title}</h1>
			)}
			{subtitle && (
				<h3 className={cn(subtitleStyles({ size }), classNames.subtitle)}>
					{subtitle}
				</h3>
			)}
			{bottomContent && (
				<div className={cn("mt-4", classNames.bottomContent)}>
					{bottomContent}
				</div>
			)}
		</div>
	);
};
