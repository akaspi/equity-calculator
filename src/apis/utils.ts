export function convertToLocale(amount: number, locale: string, currency: string): string {
    const formattedAmount = amount.toLocaleString(locale, {
        style: "currency",
        currency,
    });

    // Insert a space between the currency symbol and the amount
    return formattedAmount.replace(/(\p{Sc})(\d)/u, '$1 $2');
}