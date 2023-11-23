import { Helmet } from "react-helmet-async";
import { Tab, Tabs, Hero, HeroTab } from "@/components";
import uiStyles from "@/ui.module.scss";
import "./Video.scss";

function VideoPage() {
    return (
        <>
            <Helmet>
                <title>video@werk</title>
            </Helmet>
            <div className={uiStyles.container}>
                <Hero autoSlideDuration={5000}>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage:
                                "url(/images/video/adobe-premiere-01.png)",
                        }}
                    >
                        <h1>I can edit that</h1>
                        <h2>Video Editing Services</h2>
                    </HeroTab>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage:
                                "url(/images/video/background-funboyz.png)",
                        }}
                    >
                        <h1>Uploading wherever</h1>
                        <h2>I can upload it to you</h2>
                        <h3>or for you</h3>
                    </HeroTab>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage:
                                "url(/images/video/background-schedule.png)",
                        }}
                    >
                        <h1>Help with scheduling</h1>
                        <h2>Video Management Services</h2>
                    </HeroTab>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage:
                                "url(/images/video/cryptids-hero.png)",
                        }}
                    />
                </Hero>
                <Tabs>
                    <Tab label="Video Editing">
                        <div className={uiStyles.content}>
                            <section>
                                <h2>Video Editing Services</h2>
                                <p>
                                    I privide no-frills video editing, just
                                    simple, affordable and quick. I specialize
                                    in basic video editing perfect for content
                                    creators that need to save time, small
                                    businesses, and personal projects. Please
                                    note that my services are focused on basic
                                    editing and do not include advanced special
                                    effects or complex post-production
                                    techniques.
                                </p>
                                <p>
                                    My pricing is simple: I charge a flat rate
                                    for every 15 minutes of raw footage,
                                    ensuring that you only pay for what you
                                    need. Additional services are available for
                                    a modest fee, allowing for customization to
                                    meet your specific needs.
                                </p>
                                <p>
                                    I pride myself on offering a video editing
                                    service that is as discreet as it is
                                    professional. No matter the content, my
                                    approach is nonjudgmental and respectful of
                                    your creative expression. I'm committed to
                                    maintaining your privacy and providing a
                                    secure service where all content is handled
                                    with the utmost confidentiality.{" "}
                                </p>
                            </section>
                            <section>
                                <h3>Pricing</h3>
                                <div className={uiStyles.tableContainer}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Service</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Basic Editing (per 15
                                                    minutes of footage)
                                                </td>
                                                <td>$30</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Additional Services (per
                                                    extra)
                                                </td>
                                                <td>$10</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    Additional services are
                                                    anything beyond basic
                                                    editing, and we can discuss
                                                    this as needed. Whether it's
                                                    a technique I already know
                                                    or a new skill - I can do it
                                                    or learn it.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section>
                                <h3>Basic Video Editing Package Includes</h3>
                                <div className={uiStyles.tableContainer}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Trimming & Cutting</td>
                                                <td>
                                                    Removing unwanted sections
                                                    to focus on the best moments
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Simple Transitions</td>
                                                <td>
                                                    Adding clean and seamless
                                                    transitions between scenes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Basic Color Grading</td>
                                                <td>
                                                    Enhancing the overall look
                                                    with color correction for a
                                                    professional finish
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Audio Adjustment</td>
                                                <td>
                                                    Basic sound improvements,
                                                    including volume leveling
                                                    and noise reduction
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Multicamera Editing</td>
                                                <td>
                                                    Synchronizing and editing
                                                    footage from multiple
                                                    cameras
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Title & Credits Addition
                                                </td>
                                                <td>
                                                    Inserting opening titles,
                                                    closing credits, and text
                                                    overlays
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Format Conversion</td>
                                                <td>
                                                    Ensuring the final video is
                                                    in the desired file format
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Basic Overlay Effects</td>
                                                <td>
                                                    Including simple graphic
                                                    overlays like logos or
                                                    lower-thirds
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Export & Delivery</td>
                                                <td>
                                                    Finalizing the video in the
                                                    required resolution and
                                                    format, ready for upload
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section>
                                <p>
                                    In line with my commitment to privacy and
                                    security, I operate with a clear storage
                                    policy: clients are responsible for
                                    providing their preferred cloud storage
                                    solution where I will upload the completed
                                    work. Once the project is delivered, I do
                                    not keep any files on my cloud to ensure
                                    your content remains in your control. This
                                    approach guarantees that you have immediate
                                    and exclusive access to your videos, and it
                                    supports my principle of offering a service
                                    that upholds client confidentiality above
                                    all.
                                </p>
                            </section>
                        </div>
                    </Tab>
                    <Tab label="Video Management">
                        <div className={uiStyles.content}>
                            <section>
                                <h3>Video Managment</h3>
                            </section>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default VideoPage;
