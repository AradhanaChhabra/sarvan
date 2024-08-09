export const NAV_BUTTONS: string[] = ["Home", "Explore", "Create", "Settings"];

export type TArtwork = "Painting" | "Drawing" | "Sculpture" | "Video";

export const ARTWORK_DATA: Array<{
	image: string;
	name: string;
	type: TArtwork;
}> = [
	{
		image: "one.png",
		name: "Somnia, 2010",
		type: "Painting",
	},
	{
		image: "two.png",
		name: "Solar Serenity, 2022",
		type: "Drawing",
	},
	{
		image: "three.png",
		name: "The Shipwrecked, 2013",
		type: "Video",
	},
	{
		image: "four.png",
		name: "Mirage, 20222",
		type: "Sculpture",
	},
];

export const SUB_NAV = ["collection", "type", "year", "virtual gallery"];
