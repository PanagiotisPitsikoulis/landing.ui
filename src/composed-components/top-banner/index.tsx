import { ArrowRightIcon } from "lucide-react";
import { useEffect } from "react";
import emitter from "../../hooks/emitter";
import { cn } from "../../utils/cn";

export type TopBannerProps = {
	pathName: string;
	/** Current language for localized paths. */
	/** Array of path-based banner configurations. */
	pathsData: {
		path: string;
		gradientClassName?: string;
		emoji?: string;
		primaryText?: string;
		primaryLink?: {
			href: string;
			label: string;
		};
		secondaryLink?: {
			href: string;
		};
	}[];
	/** Object defining style slots for customization. */
	classNames?: {
		base?: string;
		gradientShapeLeft?: string;
		gradientShapeRight?: string;
		contentContainer?: string;
		secondaryLink?: string;
		primaryLinkContainer?: string;
		primaryLinkBackground?: string;
		primaryLinkText?: string;
		arrowIcon?: string;
	};
};

/**
 * Banner component displaying localized announcements or call-to-action links,
 * with dynamic gradient backgrounds and scroll-based visibility control.
 * @param pathsData - The data for the paths.
 * @param pathName - The current path.
 * @param classNames - The class names for the banner.
 * @returns JSX.Element
 */
export const TopBanner = ({
	pathsData,
	pathName,
	classNames,
}: TopBannerProps) => {
	// Find the content data for the current path
	const currentPathData = pathsData?.find((item) =>
		pathName?.includes(item.path),
	);

	useEffect(() => {
		if (!currentPathData) {
			return;
		}

		const handleScroll = () => {
			if (window.scrollY < 48) {
				emitter.emit("bannerVisibilityChange", "visible");
			} else {
				emitter.emit("bannerVisibilityChange", "hidden");
			}
		};

		// Add scroll listener
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentPathData]);

	// If no content data is found for the current path, hide the banner
	if (!currentPathData) {
		return null;
	}

	const {
		emoji = "🚀",
		primaryText,
		primaryLink,
		secondaryLink,
		gradientClassName = "from-[#ff80b5] to-[#9089fc] dark:from-[#F54180] dark:to-[#338EF7]",
	} = currentPathData;

	return (
		<div
			className={cn(
				"relative isolate z-50 flex items-center gap-x-6 overflow-hidden border-divider border-b-1 bg-background px-6 py-2 sm:px-3.5 sm:before:flex-1",
				classNames?.base,
			)}
		>
			{/* Background Shapes */}
			<div
				aria-hidden="true"
				className={cn(
					"-z-10 -translate-y-1/2 absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] transform-gpu blur-2xl",
					classNames?.gradientShapeLeft,
				)}
			>
				<div
					className={cn(
						"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r opacity-20 dark:opacity-10",
						gradientClassName,
					)}
					style={{
						clipPath:
							"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
					}}
				/>
			</div>
			<div
				aria-hidden="true"
				className={cn(
					"-z-10 -translate-y-1/2 absolute top-1/2 left-[max(45rem,calc(50%+8rem))] transform-gpu blur-2xl",
					classNames?.gradientShapeRight,
				)}
			>
				<div
					className={cn(
						"aspect-[577/310] w-[36.0625rem] opacity-30 dark:opacity-20",
						gradientClassName,
					)}
					style={{
						clipPath:
							"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
					}}
				/>
			</div>

			{/* Content */}
			<div
				className={cn(
					"flex w-full items-center justify-between gap-x-3 md:justify-center",
					classNames?.contentContainer,
				)}
			>
				{secondaryLink && (
					<a
						className={cn(
							"flex items-end text-foreground text-small transition-opacity hover:opacity-80 sm:text-[0.93rem]",
							classNames?.secondaryLink,
						)}
						href={secondaryLink.href}
						rel="noopener noreferrer"
					>
						<span aria-label="emoji" role="img">
							{emoji}
						</span>
						<span
							className="inline-flex animate-text-gradient bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] bg-clip-text font-medium text-transparent md:ml-1 dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]"
							style={{
								fontSize: "inherit",
								backgroundSize: "200%",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
							}}
						>
							{primaryText}
						</span>
					</a>
				)}
				{primaryLink && (
					<a
						className={cn(
							"group relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-[1px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
							classNames?.primaryLinkContainer,
						)}
						href={primaryLink.href}
					>
						<span
							className={cn(
								"absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]",
								classNames?.primaryLinkBackground,
							)}
						/>
						<div
							className={cn(
								"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 font-medium text-foreground text-sm backdrop-blur-3xl transition-background group-hover:bg-background/70",
								classNames?.primaryLinkText,
							)}
						>
							{primaryLink.label}
							<ArrowRightIcon
								aria-hidden="true"
								className={cn(
									"outline-none transition-transform group-hover:translate-x-0.5 [&>path]:stroke-[2px]",
									classNames?.arrowIcon,
								)}
								width={16}
							/>
						</div>
					</a>
				)}
			</div>
		</div>
	);
};
