import React, { useState } from "react";
import {
    COST,
    calculateUberFare,
    calculateDifference,
    formatAsDollar,
} from "@/utils/drive";
import uiStyles from "@/ui.module.scss";

const FareCalculator: React.FC = () => {
    const [minutes, setMinutes] = useState<number>(0);
    const [miles, setMiles] = useState<number>(0);

    const handleMinutesChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMinutes(Number(event.target.value));
    };

    const handleMilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMiles(Number(event.target.value));
    };

    const myFare = COST * Math.round(miles);
    const uberFare = calculateUberFare(miles, minutes);
    const difference = calculateDifference(myFare, uberFare);

    return (
        <div className={uiStyles.form}>
            <label htmlFor="minutes">Minutes:</label>
            <input
                id="minutes"
                type="number"
                value={minutes}
                onChange={handleMinutesChange}
            />
            <label htmlFor="miles">Miles:</label>
            <input
                id="miles"
                type="number"
                value={miles}
                onChange={handleMilesChange}
            />
            <p>Uber's Price: {formatAsDollar(uberFare)}</p>
            <p>
                My Price:{" "}
                {difference < 0
                    ? formatAsDollar(myFare)
                    : formatAsDollar(uberFare)}
            </p>
        </div>
    );
};

export default FareCalculator;
