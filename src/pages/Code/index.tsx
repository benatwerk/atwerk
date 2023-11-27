import { Helmet } from "react-helmet-async";
import { Tab, Tabs, Hero, HeroTab } from "@/components";
import uiStyles from "@/ui.module.scss";
import "./Code.scss";
import heroImage1 from "/images/code/marquee-blink.jpg";
import heroImage2 from "/images/code/hero-otter.png";

const examplesStyles = {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    whiteSpace: "nowrap" as const,
};

function CodePage() {
    return (
        <>
            <Helmet>
                <title>code@werk</title>
            </Helmet>
            <div className={uiStyles.container}>
                <Hero autoSlideDuration={5000}>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage: `url(${heroImage1})`,
                        }}
                    >
                        <h1>I can code that</h1>
                        <h2>Frontend development</h2>
                    </HeroTab>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage: `url(${heroImage2})`,
                        }}
                    />
                </Hero>
                <Tabs>
                    <Tab label="Frontend coding">
                        <div className={uiStyles.content}>
                            <section>
                                <h2>Frontend Coding</h2>
                                <p>
                                    I'm a Frontend Developer with a passion for
                                    crafting intuitive and dynamic user
                                    experiences. With years of expertise honed
                                    at industry leaders like Blue Origin and Dun
                                    & Bradstreet, I specialize in JavaScript,
                                    React, TypeScript, and a broad range of
                                    modern web technologies. I’ve led
                                    significant projects transitioning platforms
                                    to cutting-edge frameworks and have a keen
                                    eye for detail in creating accessible,
                                    high-performance web solutions.
                                </p>
                                <p>
                                    I understand that every project has unique
                                    needs and budgets, which is why I offer
                                    flexible pricing. For small to medium
                                    businesses, my rate is a competitive
                                    $50/hour, ensuring professional development
                                    services that align with your business
                                    goals. For smaller clients or startups, my
                                    rate is $40/hour—a reflection of my
                                    commitment to supporting growing
                                    enterprises.
                                </p>
                                <p>
                                    I’m also deeply invested in contributing to
                                    causes and projects that resonate with me
                                    personally. For such passion projects, my
                                    rate starts at $30/hour and is negotiable,
                                    as I believe in supporting impactful
                                    initiatives.
                                </p>
                                <p>
                                    For larger contracts requiring comprehensive
                                    expertise, I offer a range from $60 to
                                    $100/hour, depending on the project's scope
                                    and complexity. This tier is reflective of
                                    the depth of my experience and the value I
                                    bring to substantial, intricate projects.
                                </p>
                                <p>
                                    If you’re looking for a developer who not
                                    only brings technical skills to the table
                                    but also a genuine enthusiasm for innovation
                                    and quality, I’d love to hear about your
                                    project. Let’s create something remarkable
                                    together!
                                </p>
                            </section>
                            <section>
                                <h3>Pricing</h3>
                                <div className={uiStyles.tableContainer}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Service Category</th>
                                                <th>Rate ($/hour)</th>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Standard Business Rate</td>
                                                <td>$50</td>
                                                <td>
                                                    Tailored solutions for small
                                                    to medium-sized businesses
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Small Business & Start-Up
                                                </td>
                                                <td>$40</td>
                                                <td>
                                                    Cost-effective rate for
                                                    startups and small
                                                    businesses
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Passion Project Rate</td>
                                                <td>Starting at $30</td>
                                                <td>
                                                    Negotiable for small
                                                    projects, cool causes, and
                                                    passion projects.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Corporate Contract Rate</td>
                                                <td>$60 to $100</td>
                                                <td>
                                                    Scales with project scope
                                                    and complexity
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Custom Quote</td>
                                                <td>Variable</td>
                                                <td>
                                                    For unique projects with
                                                    specific needs
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </Tab>
                    <Tab label="Find me and my code">
                        <div className={uiStyles.content}>
                            <section>
                                <ul>
                                    <li style={examplesStyles}>
                                        <a
                                            href="https://github.com/benatwerk"
                                            target="_new"
                                        >
                                            My github
                                        </a>
                                        <div>
                                            I only really started adding
                                            projects here recenlty. I've been
                                            working so I haven't worked on my
                                            own porjects for a while. But it
                                            seems the job market has changed so
                                            I started adding random projects I
                                            work on here.
                                        </div>
                                        <a
                                            href="https://github.com/benatwerk/atwerk"
                                            target="_new"
                                        >
                                            This site is there.
                                        </a>
                                    </li>
                                    <li style={examplesStyles}>
                                        <a
                                            href="https://www.linkedin.com/in/ben-holland-4a36171/"
                                            target="_new"
                                        >
                                            My linkedin
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default CodePage;
