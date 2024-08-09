import { Button } from "../button";

const NavButton = ({
	label,
	isSelected,
	onClick,
}: {
	label: string;
	isSelected: boolean;
	onClick: () => void;
}) => {
	return (
		<Button
			buttonType={isSelected ? "solid" : "outlined"}
			className="first:mr-[1px]"
			onClick={onClick}
		>
			{label}
		</Button>
	);
};

export { NavButton };
