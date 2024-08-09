import { Text } from "../text";

const Footer = (): JSX.Element => {
	return (
		<footer className="h-[11px] bg-footer relative w-full flex flex-col">
			<Text
				color="light-gray"
				className="!text-[9px] absolute leading-[10.8px] left-6 -top-3.5 z-[999999]"
			>
				explore
			</Text>
			<div className="flex w-full flex-row items-center h-full pl-6">
				<Text as="span" color="white" className="inline-block !text-[7px]">
					POWERED BY
				</Text>
				<Text as="span" color="white" className="inline-block !text-[7px]">
					&nbsp;
				</Text>

				<Text
					as="span"
					color="white"
					className="inline-block !text-[7px] !leading-[8.4px]"
				>
					sarvan
				</Text>
			</div>
		</footer>
	);
};

export { Footer };
