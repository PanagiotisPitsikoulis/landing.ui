import { Button, type ButtonProps } from "@nextui-org/react";
import React from "react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../components/carousel";
import { LandingText } from "../../components/landing-text";
import { cn } from "../../utils/cn";

export type Item = {
	id: number;
	name: string;
	description: string;
	image_link: string;
};

export type FeaturedCarouselProps = {
	Link: React.ComponentType<any>;
	items: Item[];
	buttonProps?: ButtonProps;
	link: {
		href?: string; // Custom href to override default
		prefix?: string; // Prefix for the default href
		suffix?: string; // Suffix for the default href
	};
};

/**
 * Renders the featured carousel section.
 * @param items - The items to display.
 * @param buttonProps - Props for the button.
 * @param link - Props for the link. Can be used to add a prefix or suffix to the item's id, or override it by passing a custom href. Don't add slashes to the prefix or suffix, they will be added automatically.
 */
export function FeaturedCarousel({
	Link,
	items,
	buttonProps,
	link,
}: FeaturedCarouselProps) {
	if (!items || items.length === 0) {
		return null;
	}

	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	// Update current and count when the carousel API changes
	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	// Get the current item
	const currentItem = React.useMemo(() => items[current], [current, items]);

	// Generate the button link
	const buttonHref = React.useMemo(() => {
		if (link.href) {
			return link.href;
		}
		return `${link.prefix || ""}/${currentItem.id}/${link.suffix || ""}`;
	}, [link, currentItem]);

	return (
		<section>
			<div className="flex flex-col-reverse gap-4 lg:flex-row">
				{/* Text Section */}
				<section className="relative flex w-full items-center justify-center rounded-xl p-8 md:p-12 lg:px-16 lg:py-24">
					{/*Image background*/}
					<img
						alt={currentItem.name}
						src={currentItem.image_link}
						className="absolute inset-0 top-0 right-0 bottom-0 left-0 z-0 h-full w-full overflow-clip rounded-xl object-cover"
					/>
					{/*Dark overlay*/}
					<div className="absolute inset-0 top-0 right-0 bottom-0 left-0 z-10 h-full w-full overflow-clip rounded-xl bg-black/40 object-cover backdrop-blur-3xl" />
					<div className="z-20 mx-auto max-w-xl">
						<LandingText
							bottomContent={
								<Button
									as={Link}
									href={buttonHref}
									className="mt-8 rounded-full"
									{...buttonProps}
								>
									{buttonProps?.children || "Book Now"}
								</Button>
							}
							topContent={
								<>
									{/* Dots only for multiple items */}
									{items.length > 1 && (
										<div className="mb-4 flex flex-row gap-1">
											{Array.from({ length: count }).map((_, index) => (
												<span
													key={index}
													className={cn(
														"size-2 rounded-full bg-white/50",
														index === current && "bg-white",
													)}
												/>
											))}
										</div>
									)}
								</>
							}
							orientation={"left"}
							size={"sm"}
							classNames={{
								title: "text-white",
								subtitle: "text-white/80",
							}}
							title={currentItem.name}
							subtitle={`${currentItem.description.slice(0, 80)}...`}
						/>
					</div>
				</section>

				{/* Carousel or single image */}
				{items.length > 1 ? (
					<Carousel className="w-full lg:max-w-sm" setApi={setApi}>
						<CarouselContent>
							{items.map((item, index) => (
								<CarouselItem key={index}>
									<div>
										<img
											alt={item.name}
											src={item.image_link}
											className="h-full w-full rounded-xl object-cover"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				) : (
					<div className="w-full lg:max-w-sm">
						<img
							alt={items[0].name}
							src={items[0].image_link}
							className="h-full w-full rounded-xl object-cover"
						/>
					</div>
				)}
			</div>
		</section>
	);
}
