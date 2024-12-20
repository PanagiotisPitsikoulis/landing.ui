import { type VariantProps, cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export interface AnimatedGridProps extends VariantProps<typeof gridStyles> {
	images: string[];
	className?: string;
	classNames?: {
		container?: string;
		image?: string;
	};
	shuffleInterval?: number;
	disableAnimation?: boolean;
}

const gridStyles = cva("grid grid-cols-2 gap-4 lg:grid-cols-4");

const imageStyles = cva("aspect-square rounded-lg object-cover shadow-md");

/**
 * AnimatedImageGrid component for displaying a grid of images with animations.
 * @param images - The images to display.
 * @param columns - The number of columns for the grid.
 * @param className - The class name for the container.
 * @param classNames - The class names for the container and image.
 * @param shuffleInterval - The interval for shuffling the images (in milliseconds).
 * @param disableAnimation - Whether to disable the animation.
 */
export const AnimatedImageGrid: React.FC<AnimatedGridProps> = ({
	images,
	className,
	classNames = {},
	shuffleInterval = 3000,
	disableAnimation = false,
}) => {
	const [shuffledImages, setShuffledImages] = useState(images);

	useEffect(() => {
		if (disableAnimation) {
			return;
		}

		const interval = setInterval(() => {
			setShuffledImages((prev) => {
				const shuffled = [...prev];
				for (let i = shuffled.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
				}
				return shuffled;
			});
		}, shuffleInterval);

		return () => clearInterval(interval);
	}, [images, shuffleInterval, disableAnimation]);

	return (
		<div className={cn(gridStyles(), classNames.container, className)}>
			<AnimatePresence>
				{shuffledImages.map((image, index) => (
					<motion.div
						key={image} // Ensure keys are stable
						layout={true} // Apply layout animations for smooth transitions
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className={cn(
							"relative flex items-center justify-center",
							classNames.image,
						)}
					>
						<img
							width={500}
							height={500}
							src={image}
							alt={`Image ${index + 1}`}
							className={cn("z-20", imageStyles(), classNames.image)}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};
