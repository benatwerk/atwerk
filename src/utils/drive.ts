export const COST = 1.5;
// Albuquerque Uber rates
export const baseFare = 1.0; // Base fare for every ride
export const costPerMile = 0.85; // Cost per mile
export const costPerMinute = 0.13; // Cost per minute
export const bookingFee = 2.95; // Booking fee
export const minimumFare = 5.95; // Minimum fare for a ride
export const cancellationFee = 5.0; // Cancelation fee

export function calculateUberFare(miles: number, minutes: number): number {
    // Calculate the fare
    let fare =
        baseFare + costPerMile * miles + costPerMinute * minutes + bookingFee;

    // Ensure fare is at least the minimum fare
    fare = Math.max(fare, minimumFare);

    return fare;
}

export function calculateDifference(amount1: number, amount2: number): number {
    const difference = amount1 - amount2;
    return difference;
}

export function formatAsDollar(value: number): string {
    if (Math.abs(value).toFixed(2) === "0.00") {
        return `$0.00`;
    }
    const sign = value < 0 ? "-" : "";
    return `${sign}$${Math.abs(value).toFixed(2)}`;
}
