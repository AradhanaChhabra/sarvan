import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { NavButton } from "./components/NavButton";
import { SearchBar } from "./components/searchBar";
import { ARTWORK_DATA, NAV_BUTTONS, SUB_NAV } from "./data";
import { Text } from "./components/text";
import { ImageCard } from "./components/imageCard";
import { Footer } from "./components/footer";
import clsx from "clsx";

function App(): JSX.Element {
	const [scrollbarVisible, setScrollbarVisible] = useState(false);
	const [selectedNavButton, setSelectedNavButton] = useState<number>(1);

	const handleClick = (i: number) => {
		setSelectedNavButton(i);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (
				Number(document.querySelector(".container")?.scrollHeight) >
				Number(document.querySelector(".container")?.clientHeight)
			) {
				setScrollbarVisible(true);
			} else {
				setScrollbarVisible(false);
			}
		};
		document
			.querySelector(".container")
			?.addEventListener("scroll", handleScroll);
		return () =>
			document
				.querySelector(".container")
				?.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Layout>
			<div
				className={clsx(
					"flex flex-col pt-[18px] pl-[25px] overflow-y-scroll h-[calc(100lvh-11px)] pb-[24px] overflow-x-hidden flex-shrink !w-full container",
					scrollbarVisible ? "scrollbar scrollbar-visible" : ""
				)}
			>
				<Header name={"Name"} />
				<SearchBar className="mt-[21px] mb-[42px]" />

				<div className="flex flex-row phone:gap-[21px] justify-between mb-[23px] w-full">
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

				<div className="grid grid-cols-[162.08px,164px] justify-between gap-x-[13.9px] gap-y-[47px]">
					{ARTWORK_DATA.map((artwork, i) => (
						<ImageCard key={i} {...artwork} />
					))}
				</div>
			</div>

			<Footer />
		</Layout>
	);
}

export default App;
