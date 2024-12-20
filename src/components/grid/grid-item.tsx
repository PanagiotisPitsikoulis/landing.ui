import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import type React from "react";

export interface CardData {
	Link: React.ComponentType<any>;
	href?: string;
	header: {
		title: string;
		subtitle: string;
	};
	image: string;
	footer: {
		customContent?: React.ReactNode;
		appName: string;
		description: string;
		buttonLabel: string;
	};
}

/**
 * Represents a single card component.
 * @param props - Props for the card.
 */
export function GridItem(props: CardData) {
	const { href, header, image, footer } = props;

	return (
		<Card
			shadow={"md"}
			isFooterBlurred={true}
			className="relative h-full w-full"
			as={props.Link}
			href={href ?? ""}
		>
			<CardHeader className="absolute top-0 z-10 flex-col items-start bg-gradient-to-b from-black/50 to-transparent">
				<p className="font-bold text-tiny text-white/60 uppercase">
					{header.subtitle}
				</p>
				<h4 className="font-medium text-white/90 text-xl">{header.title}</h4>
			</CardHeader>
			<Image
				removeWrapper={true}
				alt={header.title}
				className="z-0 h-full w-full object-cover"
				src={image}
			/>
			<CardFooter className="absolute bottom-0 z-10 bg-black/40">
				<div className="flex flex-grow items-center gap-2">
					{footer.customContent && (
						<div className="flex items-center">{footer.customContent}</div>
					)}
					<div className="mx-2 flex flex-col">
						<p className="text-tiny text-white">{footer.appName}</p>
						<p className="line-clamp-2 text-tiny text-white/60">
							{footer.description}
						</p>
					</div>
				</div>
				<Button radius="full" size="sm">
					{footer.buttonLabel}
				</Button>
			</CardFooter>
		</Card>
	);
}
