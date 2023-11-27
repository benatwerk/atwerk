import { Helmet } from "react-helmet-async";
import ridiculousStyles from "@/ridiculous.module.scss";
import "./Home.scss";

const marqueeTagStyle = { color: "red" };
const blinkTagStyle = { color: "lightgoldenrodyellow" };

function HomePage() {
    return (
        <>
            <Helmet>
                <title>home@werk</title>
            </Helmet>
            <code>
                <div className={ridiculousStyles.marquee}>
                    <span style={marqueeTagStyle}>&lt;marquee&gt;</span>
                    <span style={blinkTagStyle}>&lt;blink&gt;</span>
                    <span className={ridiculousStyles.blink}>
                        Welcome to my site!
                    </span>
                    <span style={blinkTagStyle}>&lt;/blink&gt;</span>
                    <span style={marqueeTagStyle}>&lt;/marquee&gt;</span>
                </div>
            </code>
        </>
    );
}

export default HomePage;
