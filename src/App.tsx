import { Header } from "./components/header";
import { Layout } from "./components/layout";

function App(): JSX.Element {
	return (
		<Layout>
			<Header name={"Name"} />
		</Layout>
	);
}

export default App;
