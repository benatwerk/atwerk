import { Helmet } from "react-helmet-async";
import {
    Tab,
    Tabs,
    Hero,
    HeroTab,
    Card,
    CardTitle,
    CardContent,
} from "@/components";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import uiStyles from "@/ui.module.scss";
import "./Code.scss";
import heroImage1 from "/images/code/marquee-blink.jpg";
import heroImage2 from "/images/code/hero-otter.png";
import githubChatImage from "/images/code/examples-github-chat.jpg";
import githubCodePageImage from "/images/code/examples-github-codepage.jpg";
import linkedinImage from "/images/code/examples-linkedin-header.jpg";

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
                                    I've been a Frontend Developer for 16 years.
                                    I've worked at small start-ups, large
                                    enterprise SaaS companies like Dun &amp;
                                    Bradstreet and consulted at companies like
                                    Blue Origin on the UI Platform Team. I
                                    specialize in JavaScript, React, TypeScript,
                                    and a broad range of modern web
                                    technologies. I’ve led significant projects
                                    transitioning platforms to cutting-edge
                                    frameworks and have a keen eye for detail in
                                    creating accessible, high-performance web
                                    applications.
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
                                    rate starts at $30/hour but is negotiable,
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
                                <ul className={uiStyles.examples}>
                                    <li>
                                        <Card
                                            href="https://github.com/benatwerk"
                                            backgroundStyle={{
                                                backgroundImage: `url(${githubChatImage})`,
                                            }}
                                        >
                                            <CardTitle>
                                                <GithubIcon /> My Github
                                            </CardTitle>
                                            <CardContent>
                                                I only really started adding
                                                projects here recenlty. I hadn't
                                                worked on my own projects for a
                                                while.
                                            </CardContent>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card
                                            href="https://github.com/benatwerk/atwerk"
                                            backgroundStyle={{
                                                backgroundImage: `url(${githubCodePageImage})`,
                                            }}
                                        >
                                            <CardTitle>
                                                <GithubIcon /> This site is
                                                there too
                                            </CardTitle>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card
                                            href="https://www.linkedin.com/in/ben-holland-4a36171/"
                                            backgroundStyle={{
                                                backgroundImage: `url(${linkedinImage})`,
                                            }}
                                        >
                                            <CardTitle>
                                                <LinkedInIcon /> My LinkedIn
                                            </CardTitle>
                                        </Card>
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
