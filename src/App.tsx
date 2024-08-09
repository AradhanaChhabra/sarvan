import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { SearchBar } from "./components/searchBar";

function App(): JSX.Element {
	return (
		<Layout>
			<Header name={"Name"} />
			<SearchBar className="mt-[21px] mb-[42px]" />
		</Layout>
	);
}

export default App;
