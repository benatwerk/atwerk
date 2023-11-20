import { Helmet } from "react-helmet";
import {
    CashIcon,
    CashAppIcon,
    VenmoIcon,
    PaypalIcon,
    BitcoinIcon,
} from "@/components/Icons";
import styles from "./Drive.module.scss";
import "./Drive.scss";

const COST = 1.5;
// Albuquerque Uber rates
const baseFare = 1.0; // Base fare for every ride
const costPerMile = 0.85; // Cost per mile
const costPerMinute = 0.13; // Cost per minute
const bookingFee = 2.95; // Booking fee
const minimumFare = 5.95; // Minimum fare for a ride
const cancellationFee = 5.0; // Cancelation fee

function calculateUberFare(miles: number, minutes: number): number {
    // Round miles to the nearest whole number
    const roundedMiles = Math.round(miles);

    // Calculate the fare
    let fare =
        baseFare +
        costPerMile * roundedMiles +
        costPerMinute * minutes +
        bookingFee;

    // Ensure fare is at least the minimum fare
    fare = Math.max(fare, minimumFare);

    return fare;
}

function calculateDifference(amount1: number, amount2: number): number {
    const difference = amount1 - amount2;
    return difference;
}

function formatAsDollar(value: number): string {
    const sign = value < 0 ? "-" : "";
    return `${sign}$${Math.abs(value).toFixed(2)}`;
}

function formatP(p: string) {
    const f = p.replace(/(\d{3})(\d{3})(\d{4})/, ")$1( $2-$3");
    const r = f.split("").reverse().join("");
    return r;
}

function Tcatnoc() {
    const p = formatP(import.meta.env.VITE_P);
    return <span className={styles.p}>{p}</span>;
}

const exampleTrips = [
    { name: "Walmart", miles: 2, minutes: 5 },
    { name: "Airport", miles: 8.6, minutes: 21 },
    { name: "Downtown", miles: 9.1, minutes: 14 },
    { name: "Restaurant", miles: 10, minutes: 15 },
    { name: "Casino", miles: 25, minutes: 28 },
];

function DrivePage() {
    return (
        <>
            <Helmet>
                <title>me@car</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Need a ride?</h1>
                    <h2>I do that</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        I’ve always liked to drive, and I’ve driven for Uber and
                        liked it, so I figured I could keep doing that on my
                        own. If you’ve landed here from one of my cards or a
                        referral, then you obviously know somebody that knows me
                        personally, and that's really what I’m trying to build
                        with my ride service.
                    </p>
                    <p>
                        Since you’ll have my contact information, I’ll be able
                        to give you rides when Ubers are hard to find. I’ll be
                        able to accommodate regular scheduled rides, and I’m
                        available when Uber just doesn’t work for whatever
                        reason. Or if you would just prefer a driver with whom
                        you can have a little more rapport, someone who can
                        accommodate special requests or needs.
                    </p>
                    <p>
                        One of the things that inspired me to offer this service
                        directly is knowing people who work downtown and aren't
                        always comfortable being picked up by Uber from clubs or
                        bars after closing, or can’t get Ubers because of the
                        hours. Friends that have needed rides home from or to
                        performances where they might be in costume, or they're
                        just not comfortable riding with a complete stranger.
                    </p>
                    <p>
                        I also offer discreet and safe rides for people going to
                        and from late-night, LGBTQ, or other venues, where
                        someone might prefer to ride with someone who they know
                        is safe and respectful.
                    </p>
                    <p>
                        I tried to set my rates to approximate Ubers during down
                        hours, so on the cheaper end, but I found this to be
                        impossible because Uber's charges are not only a flat
                        rate based on minutes and miles. It’s also a dynamic
                        rate based on pick-up and drop-off location,
                        availability of other Uber drivers, and who knows what
                        all they do to increase their rates. So I’ve come up
                        with a pretty simple flat rate of {formatAsDollar(COST)}{" "}
                        a mile. That works pretty well for shorter trips within
                        Albuquerque but starts to get more expensive for longer
                        trips, so I will also price match Uber. That way, no
                        matter what, I should always be the better deal.
                    </p>
                    <p>
                        <h3>How Uber works in Albuquerque</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <tr>
                                    <th>Fee Type</th>
                                    <th>Rate</th>
                                </tr>
                                <tr>
                                    <td>Base Fare</td>
                                    <td>{formatAsDollar(baseFare)}</td>
                                </tr>
                                <tr>
                                    <td>Cost Per Minute</td>
                                    <td>{formatAsDollar(costPerMinute)}</td>
                                </tr>
                                <tr>
                                    <td>Cost Per Mile</td>
                                    <td>{formatAsDollar(costPerMile)}</td>
                                </tr>
                                <tr>
                                    <td>Booking Fee</td>
                                    <td>{formatAsDollar(bookingFee)}</td>
                                </tr>
                                <tr>
                                    <td>Minimum Fare</td>
                                    <td>{formatAsDollar(minimumFare)}</td>
                                </tr>
                                <tr>
                                    <td>Cancellation Fee</td>
                                    <td>{formatAsDollar(cancellationFee)}</td>
                                </tr>
                                <tr>
                                    <td>Dynamic Pricing</td>
                                    <td>Variable (based on demand)</td>
                                </tr>
                            </table>
                        </div>
                        Rates may increase during times of high demand to
                        incentivize drivers to meet rider needs. This is known
                        as surge pricing and is based on the number of available
                        drivers versus ride requests, with higher multipliers
                        during peak times.
                    </p>
                    <p>
                        <h3>How I work in Albuquerque</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <tr>
                                    <th>Fee Type</th>
                                    <th>Rate</th>
                                </tr>
                                <tr>
                                    <td>Cost per mile (rounded to nearest)</td>
                                    <td>{formatAsDollar(COST)}</td>
                                </tr>
                                <tr>
                                    <td
                                        colSpan={2}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                        }}
                                    >
                                        <CashIcon title="Cash" size="30" />{" "}
                                        <PaypalIcon title="Paypal" size="24" />{" "}
                                        <VenmoIcon title="Venmo" size="22" />{" "}
                                        <CashAppIcon
                                            title="Cashapp"
                                            size="20"
                                        />{" "}
                                        <BitcoinIcon
                                            title="Bitcoin"
                                            size="20"
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        If you look at that compared to Uber it can get a little
                        dicey. Usually my price is less, but sometimes, it's
                        more. That's why I offer to price match Uber.
                        <div className={styles.tableContainer}>
                            <table>
                                <tr>
                                    <th>Location</th>
                                    <th>Miles</th>
                                    <th>{formatAsDollar(COST)}/mile</th>
                                    <th>Uber's Estimated Lowest Fare</th>
                                    <th>Difference</th>
                                </tr>
                                {exampleTrips.map(
                                    ({ name, miles, minutes }) => {
                                        return (
                                            <tr>
                                                <td>{name}</td>
                                                <td>{miles}</td>
                                                <td>
                                                    {formatAsDollar(
                                                        COST * Math.round(miles)
                                                    )}
                                                </td>
                                                <td>
                                                    {formatAsDollar(
                                                        calculateUberFare(
                                                            miles,
                                                            minutes
                                                        )
                                                    )}
                                                </td>
                                                <td>
                                                    {formatAsDollar(
                                                        calculateDifference(
                                                            COST *
                                                                Math.round(
                                                                    miles
                                                                ),
                                                            calculateUberFare(
                                                                miles,
                                                                minutes
                                                            )
                                                        )
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </table>
                        </div>
                    </p>
                    <p>
                        Feel free to contact me if you have any questions at{" "}
                        <Tcatnoc /> or use the form below.
                    </p>
                    <p>
                        <form
                            action="https://formspree.io/f/meqbwnaz"
                            method="POST"
                        >
                            <div>
                                <label htmlFor="email">Your email:</label>
                                <input id="email" type="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor="message">Your message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                ></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </p>
                </div>
            </div>
        </>
    );
}

export default DrivePage;
