import { Helmet } from "react-helmet-async";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>home@werk</title>
            </Helmet>
            <div>Welcome to the Home Page!</div>
        </>
    );
}

export default HomePage;
