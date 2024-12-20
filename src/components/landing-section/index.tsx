import type { VariantProps } from "@nextui-org/react";
import { cva } from "class-variance-authority";
import type React from "react";
import { useIsMobile } from "../../hooks";
import { cn } from "../../utils/cn";
import {
	AnimatedWrapper,
	type AnimatedWrapperProps,
} from "../animated-wrapper";
import { LandingText, type LandingTextProps } from "../landing-text";

export interface LandingSectionProps
	extends VariantProps<typeof landingSectionStyles> {
	landingTextProps: LandingTextProps;
	content?: React.ReactNode;
	contentBottom?: boolean;
	className?: string;
	classNames?: {
		container?: string;
		contentWrapper?: string;
		textWrapper?: string;
	};
	animatedWrapperProps?: {
		animatedWrapperPropsContainer?: Partial<AnimatedWrapperProps>;
		animatedWrapperPropsText?: Partial<AnimatedWrapperProps>;
		animatedWrapperPropsContent?: Partial<AnimatedWrapperProps>;
	};
}

const landingSectionStyles = cva("py-20 max-lg:py-5", {
	variants: {
		orientation: {
			left: "items-end justify-between text-left",
			center: "items-center text-center",
			right: "items-end justify-between text-left",
		},
	},
	defaultVariants: {
		orientation: "center",
	},
});

const contentAlignmentStyles = cva("", {
	variants: {
		orientation: {
			left: "flex-row",
			center: "flex-col",
			right: "flex-row-reverse",
		},
	},
	defaultVariants: {
		orientation: "left",
	},
});

/**
 * LandingSection component that wraps LandingText with a styled section and optional content.
 * @param orientation - The orientation of the section and LandingText.
 * @param className - Additional class for the section container.
 * @param classNames - Classnames for specific parts of the section.
 * @param landingTextProps - Props to pass to the LandingText component.
 * @param content - Optional ReactNode to render alongside the text.
 * @param contentBottom - When true, renders the content at the bottom.
 * @param animatedWrapperProps - Props to pass to the AnimatedWrapper components.
 * @returns JSX.Element
 */
export const LandingSection: React.FC<LandingSectionProps> = ({
	orientation,
	className,
	classNames = {},
	landingTextProps,
	content,
	contentBottom = false,
	animatedWrapperProps,
}) => {
	const isMobile = useIsMobile();
	const renderContentBottom = isMobile || contentBottom;

	return (
		<AnimatedWrapper
			{...animatedWrapperProps?.animatedWrapperPropsContainer}
			className={cn(
				landingSectionStyles({ orientation }),
				"flex overflow-hidden",
				renderContentBottom
					? "flex-col items-start"
					: contentAlignmentStyles({ orientation }),
				classNames.container,
				className,
			)}
		>
			<AnimatedWrapper {...animatedWrapperProps?.animatedWrapperPropsText}>
				<LandingText
					{...landingTextProps}
					orientation={
						isMobile
							? orientation === "right"
								? "left"
								: orientation
							: orientation
					}
				/>
			</AnimatedWrapper>
			{content && (
				<AnimatedWrapper
					{...animatedWrapperProps?.animatedWrapperPropsContent}
					className={cn(
						!(isMobile || contentBottom) && "w-[50vw]",
						isMobile && "flex h-fit items-start justify-start",
						renderContentBottom ? "mt-12 w-full" : "ml-4",
						classNames.contentWrapper,
					)}
				>
					{content}
				</AnimatedWrapper>
			)}
		</AnimatedWrapper>
	);
};
