export function convertToLocale(amount: number, locale: string, currency: string): string {
    return amount.toLocaleString(locale, {
        style: "currency",
        currency,
    });
}