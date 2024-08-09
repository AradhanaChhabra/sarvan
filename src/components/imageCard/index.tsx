import clsx from "clsx";
import { Text } from "../text";
import { TArtwork } from "../../data";
import { Button } from "../button";

const COLOR: Record<TArtwork, string> = {
	Painting: "bg-painting",
	Drawing: "bg-drawing",
	Video: "bg-video",
	Sculpture: "bg-sculpture",
};

const ImageCard = ({
	image,
	name,
	type,
}: {
	image: string;
	name: string;
	type: TArtwork;
}) => {
	return (
		<div className="flex flex-col">
			<img
				src={`${process.env.PUBLIC_URL}/assets/${image}`}
				alt={name}
				className="w-full h-full mb-[13px]"
			/>

			<div className="flex flex-row justify-between items-center">
				<Text size="regular-bold">{name}</Text>

				{/* circle  */}
				<div
					className={clsx("w-[13px] h-[13px] rounded-full", COLOR[type])}
				></div>
			</div>

			<Text color="dark-gray" size="regular" className="leading-4 mb-2.5">
				{type}
			</Text>

			<Button buttonType="solid" className="min-h-[21px] max-w-[67px]">
				select
			</Button>
		</div>
	);
};

export { ImageCard };
