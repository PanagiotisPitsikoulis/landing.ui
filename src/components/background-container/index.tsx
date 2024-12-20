import type React from "react";
import { cn } from "../../utils/cn";

export type BackgroundContainerProps = {
	children: React.ReactNode;
	background?: string;
	className?: string;
	classNames?: {
		container?: string;
		background?: string;
		content?: string;
	};
};

/**
 * A container component that adds a background image to its children.
 * @param background - The background image URL.
 * @param className - Additional class for the container.
 * @param classNames - Classnames for specific parts of the container.
 * @returns JSX.Element
 */
function BackgroundContainer({
	children,
	background = "/gradients/looper-pattern.svg",
	className,
	classNames = {},
}: BackgroundContainerProps) {
	return (
		<div
			className={cn(
				"relative overflow-visible",
				className,
				classNames.container,
			)}
		>
			{/* Dynamic Background */}
			<div
				className={cn(
					"pointer-events-none absolute inset-0 select-none bg-center bg-cover",
					classNames.background,
				)}
				style={
					background ? { backgroundImage: `url('${background}')` } : undefined
				}
			/>

			{/* Children */}
			<div className={cn("relative z-10", classNames.content)}>{children}</div>
		</div>
	);
}

export default BackgroundContainer;
