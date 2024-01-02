import { Helmet } from "react-helmet-async";
import {
    CashIcon,
    CashAppIcon,
    VenmoIcon,
    PaypalIcon,
    BitcoinIcon,
} from "@/components/Icons";
import {
    Tabs,
    Tab,
    Tcatnoc,
    Hero,
    HeroTab,
    FareCalculator,
} from "@/components/";
import {
    COST,
    baseFare,
    costPerMile,
    costPerMinute,
    minimumFare,
    bookingFee,
    cancellationFee,
    calculateDifference,
    calculateUberFare,
    formatAsDollar,
} from "@/utils/drive";
import uiStyles from "@/ui.module.scss";
import "./Drive.scss";
import heroImage1 from "/images/drive/drive-background-04.jpg";

const exampleTrips = [
    { name: "Walmart", miles: 2, minutes: 5 },
    { name: "Airport", miles: 8.6, minutes: 21 },
    { name: "Downtown", miles: 9.1, minutes: 14 },
    { name: "Restaurant", miles: 10, minutes: 15 },
    { name: "Casino", miles: 25, minutes: 28 },
];

function renderContactForm() {
    return (
        <>
            <form
                className={uiStyles.form}
                action="https://formspree.io/f/meqbwnaz"
                method="POST"
            >
                <div>
                    <label htmlFor="email">Your email:</label>
                    <input required id="email" name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="phone">Your phone:</label>
                    <input id="phone" name="phone" type="tel" />
                </div>
                <div>
                    <label htmlFor="message">Your message:</label>
                    <textarea required id="message" name="message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </>
    );
}

function DrivePage() {
    return (
        <>
            <Helmet>
                <title>me@car</title>
            </Helmet>
            <div className={uiStyles.container}>
                <Hero>
                    <HeroTab
                        backgroundStyle={{
                            backgroundImage: `url(${heroImage1})`,
                        }}
                    >
                        <h1>Need a ride?</h1>
                        <h2>I do that</h2>
                    </HeroTab>
                </Hero>
                <Tabs>
                    <Tab label="Better than Uber">
                        <div className={uiStyles.content}>
                            <section>
                                <h3>How I work in Albuquerque</h3>
                                <div className={uiStyles.tableContainer}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Fee Type</th>
                                                <th>Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Cost per mile (rounded to
                                                    nearest)
                                                </td>
                                                <td>{formatAsDollar(COST)}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: 10,
                                                        }}
                                                    >
                                                        <CashIcon
                                                            title="Cash"
                                                            size="30"
                                                        />{" "}
                                                        <PaypalIcon
                                                            title="Paypal"
                                                            size="24"
                                                        />{" "}
                                                        <VenmoIcon
                                                            title="Venmo"
                                                            size="22"
                                                        />{" "}
                                                        <CashAppIcon
                                                            title="Cashapp"
                                                            size="20"
                                                        />{" "}
                                                        <BitcoinIcon
                                                            title="Bitcoin"
                                                            size="20"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section>
                                Call me at <Tcatnoc /> or use the form below to
                                contact me about a ride.
                                {renderContactForm()}
                            </section>
                            <section>
                                <h3>How Uber works in Albuquerque</h3>
                                <div className={uiStyles.tableContainer}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Fee Type</th>
                                                <th>Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Base Fare</td>
                                                <td>
                                                    {formatAsDollar(baseFare)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cost Per Minute</td>
                                                <td>
                                                    {formatAsDollar(
                                                        costPerMinute
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cost Per Mile</td>
                                                <td>
                                                    {formatAsDollar(
                                                        costPerMile
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Booking Fee</td>
                                                <td>
                                                    {formatAsDollar(bookingFee)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Minimum Fare</td>
                                                <td>
                                                    {formatAsDollar(
                                                        minimumFare
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cancellation Fee</td>
                                                <td>
                                                    {formatAsDollar(
                                                        cancellationFee
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dynamic Pricing</td>
                                                <td>
                                                    Variable (based on demand)
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                Rates may increase during times of high demand
                                to incentivize drivers to meet rider needs. This
                                is known as surge pricing and is based on the
                                number of available drivers versus ride
                                requests, with higher multipliers during peak
                                times.
                            </section>
                            <section>
                                I tried to set my rates to approximate Ubers
                                during down hours, so on the cheaper end, but I
                                found this to be impossible because Uber's
                                charges are not only a flat rate based on
                                minutes and miles. It’s also a dynamic rate
                                based on pick-up and drop-off location,
                                availability of other Uber drivers, and who
                                knows what all they do to increase their rates.
                                So I’ve come up with a pretty simple flat rate
                                of {formatAsDollar(COST)} a mile. That works
                                pretty well for shorter trips within Albuquerque
                                but starts to get more expensive for longer
                                trips, so I will also price match Uber. That
                                way, no matter what, I should always be the
                                better deal.
                            </section>
                            <section>
                                If you look at that compared to Uber it can get
                                a little dicey. Usually my price is less, but
                                sometimes, it's more. That's why I offer to
                                price match Uber.
                                <div className={uiStyles.tableContainer}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Location</th>
                                                <th>Miles</th>
                                                <th>
                                                    {formatAsDollar(COST)}/mile
                                                </th>
                                                <th>
                                                    Uber's Estimated Lowest Fare
                                                </th>
                                                <th>Difference</th>
                                                <th>
                                                    My Price after price
                                                    matching
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {exampleTrips.map(
                                                ({ name, miles, minutes }) => {
                                                    const myFare =
                                                        COST *
                                                        Math.round(miles);
                                                    const uberFare =
                                                        calculateUberFare(
                                                            miles,
                                                            minutes
                                                        );
                                                    const difference =
                                                        calculateDifference(
                                                            myFare,
                                                            uberFare
                                                        );
                                                    return (
                                                        <tr
                                                            key={`exampleTrips-${name}`}
                                                        >
                                                            <td>{name}</td>
                                                            <td>{miles}</td>
                                                            <td>
                                                                {formatAsDollar(
                                                                    myFare
                                                                )}
                                                            </td>
                                                            <td>
                                                                {formatAsDollar(
                                                                    uberFare
                                                                )}
                                                            </td>
                                                            <td>
                                                                {formatAsDollar(
                                                                    difference
                                                                )}
                                                            </td>
                                                            <td>
                                                                {difference < 0
                                                                    ? formatAsDollar(
                                                                          myFare
                                                                      )
                                                                    : formatAsDollar(
                                                                          uberFare
                                                                      )}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section>
                                <h3>Calculate your own fare</h3>
                                <FareCalculator />
                            </section>
                            <section>
                                Feel free to contact me if you have any
                                questions using the form below or at <Tcatnoc />
                                {renderContactForm()}
                            </section>
                        </div>
                    </Tab>
                    <Tab label="About me">
                        <div className={uiStyles.content}>
                            <section>
                                Are you looking for someone you can call
                                immediately and not worry about having Uber
                                cancel on you or wonder who your driver will be?
                                Have someone consistent to pick you up that will
                                meet or beat Uber’s rates.
                            </section>
                            <section>
                                Since you’ll have my contact information, I’ll
                                be able to give you rides when Ubers are hard to
                                find. I’ll be able to accommodate regular
                                scheduled rides, and I’m available when Uber
                                just doesn’t work for whatever reason. Or if you
                                would just prefer a driver with whom you can
                                have a little more rapport, someone who can
                                accommodate special requests or needs.
                            </section>
                            <section>
                                One of the things that inspired me to offer this
                                service directly is knowing people who work
                                downtown and aren't always comfortable being
                                picked up by Uber from clubs or bars after
                                closing, or can’t get Ubers because of the
                                hours. Friends that have needed rides home from
                                or to performances where they might be in
                                costume, or they're just not comfortable riding
                                with a complete stranger.
                            </section>
                            <section>
                                I also offer discreet and safe rides for people
                                going to and from late-night, LGBTQ, or other
                                venues, where someone might prefer to ride with
                                someone who they know is safe and respectful.
                            </section>
                            <section>
                                Call me at <Tcatnoc /> or use the form below to
                                contact me about a ride.
                                {renderContactForm()}
                            </section>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default DrivePage;
