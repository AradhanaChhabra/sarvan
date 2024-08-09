import clsx from "clsx";
import { Icon } from "../icon";
import { SearchIcon } from "../../icons/searchIcon";
import { Text } from "../text";

const SearchBar = ({ className }: { className?: string }): JSX.Element => {
	return (
		<div
			className={clsx(
				"flex flex-row justify-between bg-red items-center rounded-large border w-40 border-light-gray pr-[0.573rem] pt-[2px] pb-[3px] pl-[7px] h-[21px]",
				className
			)}
		>
			<Text size="extraSmall" color="light-gray">
				search by artwork, artist name ...
			</Text>

			<Icon icon={SearchIcon} size="small" />
		</div>
	);
};

export { SearchBar };
