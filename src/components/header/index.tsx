import { SendMessageIcon } from "../../icons/sendMessageIcon";
import { Icon } from "../icon";
import { Text } from "../text";

const Header = ({ name }: { name: string }): JSX.Element => {
	return (
		<div className="flex flex-row w-full justify-between bg-red items-center">
			<Icon icon={SendMessageIcon} />
			<div className="flex flex-col justify-start pr-3">
				<Text bold size="large">
					Welcome,
				</Text>
				<Text bold size="large">
					{name}
				</Text>
			</div>
		</div>
	);
};

export { Header };
