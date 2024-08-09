import clsx from "clsx";

type TTextTag = "p" | "span";

interface ITextProps {
	as?: TTextTag;
	children: React.ReactNode;
	color?: TTextColors;
	size?: TTextSizes;
	bold?: boolean;
	className?: string;
}

export type TTextSizes = "small" | "medium" | "large";

export type TTextColors = "black" | "light-gray" | "white" | "red";

export const COLORS: Record<TTextColors, string> = {
	black: "text-black",
	"light-gray": "text-black text-opacity-50",
	white: "text-white",
	red: "text-new-red",
};

const SIZES: Record<TTextSizes, string> = {
	small: "text-sm",
	medium: "text-lg",
	large: "text-xl",
};

export const Text = ({
	as: TextType = "p",
	children,
	className,
	color = "black",
	size = "medium",
	bold = false,
	...props
}: ITextProps): JSX.Element => {
	return (
		<TextType
			{...props}
			className={clsx(
				"font-syne",
				COLORS[color],
				bold && "font-bold",
				"truncate",
				SIZES[size],
				className
			)}
		>
			{children}
		</TextType>
	);
};
