import { Helmet } from "react-helmet";
import { Navigation } from "./components/";

import "@/App.scss";

function App() {
    return (
        <>
            <Helmet>
                <title>@werk</title>
            </Helmet>
            <Navigation />
        </>
    );
}

export default App;
