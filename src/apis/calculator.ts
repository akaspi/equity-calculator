interface SaleData {
  totalAmount: number;
  salePrice: number;
}

interface Taxes {
  incomeTax: number;
  capitalGainTax: number;
  surTax: number;
}

interface Fees {
  serviceFee: number;
}

export function calcFees(saleData: SaleData, fees: Fees): number {
  const grossValue = saleData.totalAmount * saleData.salePrice;
  return grossValue * fees.serviceFee;
}

export function calcRSU102(
  saleData: SaleData,
  taxes: Taxes,
  grantPrice: number
): number {
  const incomeTaxPerUnit = grantPrice * (taxes.incomeTax + taxes.surTax);
  const capitalGainTaxPerUnit =
    (saleData.salePrice - grantPrice) * (taxes.capitalGainTax + taxes.surTax);
  const netPerUnit =
    saleData.salePrice - incomeTaxPerUnit - capitalGainTaxPerUnit;

  return netPerUnit * saleData.totalAmount;
}

export function calcRSU(saleData: SaleData, taxes: Taxes): number {
  const incomeTaxPerUnit =
    saleData.salePrice * (taxes.incomeTax + taxes.surTax);
  const netPerUnit = saleData.salePrice - incomeTaxPerUnit;

  return netPerUnit * saleData.totalAmount;
}

export function calcESOP102(
  saleData: SaleData,
  taxes: Taxes,
  grantPrice: number
): number {
  const capitalGainTaxPerUnit =
    (saleData.salePrice - grantPrice) * (taxes.capitalGainTax + taxes.surTax);
  const netPerUnit = saleData.salePrice - capitalGainTaxPerUnit;

  return netPerUnit * saleData.totalAmount;
}
