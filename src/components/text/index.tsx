import clsx from "clsx";

type TTextTag = "p" | "span";

interface ITextProps {
	as?: TTextTag;
	children: React.ReactNode;
	truncate?: boolean;
	color?: TTextColors;
	size?: TTextSizes;
	bold?: boolean;
	className?: string;
}

export type TTextSizes =
	| "small"
	| "medium"
	| "large"
	| "extraSmall"
	| "regular-bold"
	| "regular";

export type TTextColors =
	| "black"
	| "light-gray"
	| "white"
	| "gray"
	| "dark-gray";

export const COLORS: Record<TTextColors, string> = {
	black: "text-black",
	"light-gray": "text-black text-opacity-35",
	gray: "text-black text-opacity-60",
	white: "text-white",
	"dark-gray": "text-black text-opacity-80",
};

const SIZES: Record<TTextSizes, string> = {
	extraSmall: "text-extra-small",
	small: "text-sm",
	regular: "text-regular",
	"regular-bold": "text-regular-bold",
	medium: "text-lg",
	large: "text-xl",
};

export const Text = ({
	as: TextType = "p",
	children,
	className,
	color = "black",
	size = "medium",
	truncate,
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
				truncate && "truncate",

				SIZES[size],
				className
			)}
		>
			{children}
		</TextType>
	);
};
