import { useState } from "react";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { NavButton } from "./components/NavButton";
import { SearchBar } from "./components/searchBar";
import { ARTWORK_DATA, NAV_BUTTONS, SUB_NAV } from "./data";
import { Text } from "./components/text";
import { ImageCard } from "./components/imageCard";

function App(): JSX.Element {
	const [selectedNavButton, setSelectedNavButton] = useState<number>(1);

	const handleClick = (i: number) => {
		setSelectedNavButton(i);
	};
	return (
		<Layout>
			<Header name={"Name"} />
			<SearchBar className="mt-[21px] mb-[42px]" />

			<div className="flex flex-row gap-[21px] mb-[23px] max-w-[87%]">
				{NAV_BUTTONS.map((label, i) => (
					<NavButton
						key={label}
						label={label}
						isSelected={selectedNavButton === i}
						onClick={() => handleClick(i)}
					/>
				))}
			</div>

			<div className="flex flex-row gap-[49px] px-[19px] pb-[37px]">
				{SUB_NAV.map((label, i) => (
					<Text key={i} size="regular" color="gray" className="text-nowrap">
						{label}
					</Text>
				))}
			</div>

			<div className="grid grid-cols-[162.08px,164px] justify-between gap-y-[47px]">
				{ARTWORK_DATA.map((artwork, i) => (
					<ImageCard key={i} {...artwork} />
				))}
			</div>
		</Layout>
	);
}

export default App;
