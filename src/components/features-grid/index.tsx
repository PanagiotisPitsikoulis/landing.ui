import {
	Card,
	CardBody,
	CardHeader,
	Link,
	type LinkProps,
	type SlotsToClasses,
} from "@nextui-org/react";
import { LinkIcon } from "lucide-react";
import type React from "react";
import type { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { cn } from "../../utils/cn";

/**
 * Tailwind Variants configuration for styling slots.
 */
const styles = tv({
	slots: {
		base: "grid grid-cols-1 lg:grid-cols-2 gap-4",
		card: "border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]",
		header: "gap-2 pb-0",
		body: "",
		iconWrapper:
			"flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500",
		title: "text-base font-semibold",
		description: "font-normal text-base text-default-500",
	},
});

export type FeaturesGridSlots = keyof ReturnType<typeof styles>;

export interface Feature extends LinkProps {
	/** Title of the feature card. */
	title: string;
	/** Icon to display in the feature card. */
	icon: ReactNode;
	/** Description text or element. */
	description?: string | ReactNode;
}

interface FeaturesGridProps {
	/** Array of features to display in the grid. */
	features: Feature[];
	/** Custom class names for slots. */
	classNames?: SlotsToClasses<FeaturesGridSlots>;
}

/**FeaturesGrid component for displaying a grid of feature cards.
 * @param features - Array of features to display in the grid.
 * @param classNames - Custom class names for slots.
 * @returns JSX.Element
 * */
export const FeaturesGrid: React.FC<FeaturesGridProps> = ({
	features,
	classNames,
	...props
}) => {
	const slots = styles();

	return (
		<div className={slots.base({ class: classNames?.base })} {...props}>
			{features.map((feat: Feature, index: number) => (
				<Card
					key={`${feat.title}_${index}`}
					isBlurred={true}
					as={feat.href ? Link : "div"}
					//@ts-ignore
					href={feat.href?.length > 0 ? feat.href : undefined}
					className={slots.card({ class: cn(classNames?.card) })}
				>
					{/* Card Header */}
					<CardHeader className={slots.header({ class: classNames?.header })}>
						<div
							className={slots.iconWrapper({
								class: classNames?.iconWrapper,
							})}
						>
							{feat.icon}
						</div>
						<p className={slots.title({ class: classNames?.title })}>
							{feat.title}
						</p>
						{feat.isExternal && <LinkIcon className="size-5" />}
					</CardHeader>

					{/* Card Body */}
					{feat.description && (
						<CardBody className={slots.body({ class: classNames?.body })}>
							<div
								className={slots.description({
									class: classNames?.description,
								})}
							>
								{feat.description}
							</div>
						</CardBody>
					)}
				</Card>
			))}
		</div>
	);
};
