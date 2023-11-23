import { HelmetProvider, Helmet } from "react-helmet-async";
import { Navigation } from "./components/";

import "@/App.scss";

function App() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>@werk</title>
                </Helmet>
                <Navigation />
            </HelmetProvider>
        </>
    );
}

export default App;
