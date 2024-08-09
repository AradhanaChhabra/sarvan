import React from "react";
import { TTextColors, TTextSizes, Text } from "../text";
import clsx from "clsx";

export type TButtonTypes = "solid" | "outlined";

const COLORS: Record<TButtonTypes, string> = {
	solid:
		"bg-black hover:bg-gray-800 active:bg-gray-900 focus:bg-gray-900 border-none",
	outlined:
		"bg-white hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-300 border-thin border-black",
};

const TEXT_COLORS: Record<TButtonTypes, TTextColors> = {
	solid: "white",
	outlined: "black",
};

interface IButtonProps {
	buttonType?: TButtonTypes;
	disabled?: boolean;
	onClick?: (
		e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
	) => void;
	children: React.ReactNode;
	textSize?: TTextSizes;
	className?: string;
}

const Button = ({
	buttonType = "solid",
	disabled = false,
	onClick,
	children,
	textSize = "regular",
	className,
	...props
}: IButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			disabled={disabled}
			className={clsx(
				"focus:outline-none flex select-none items-center text-regular whitespace-nowrap rounded-large w-[70px] min-w-[67px] h-[26px]",
				disabled && "cursor-not-allowed opacity-30",
				COLORS[buttonType],
				className
			)}
			onClick={onClick}
		>
			<div className="flex h-full w-full items-center justify-center">
				<Text color={TEXT_COLORS[buttonType]} size={textSize}>
					{children}
				</Text>
			</div>
		</button>
	);
};

export { Button };
