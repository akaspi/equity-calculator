import { useFormik } from "formik";
import * as Yup from "yup";
import NumericInput from "./NumericInput.tsx";
import SelectInput from "./SelectInput.tsx";
import {useEffect} from "react";
import CheckboxInput from "./CheckboxInput.tsx";
import SubmitButton from "./SubmitButton.tsx";
// import {calcRSU102} from "../apis/calculator.ts";
// import {convertToLocale} from "../apis/utils.ts";

const EQUITY_TYPES: string[] = ['RSU', 'ESOP'];

export interface FormResponse {
    equityType: string;
    incomeTax: number;
    conversionRate: number;
    totalAmount: number;
    salePrice: number;
    grantPrice: number;
    grantedOverTwoYearsAgo: boolean
}

interface FormProps {
    onFormSubmit: (response: FormResponse) => void;
}

const EquityForm = ({ onFormSubmit }: FormProps) =>{
    const formik = useFormik({
        initialValues: {
            equityType: 'RSU',
            incomeTax: Number(localStorage.getItem('incomeTax')) || 0,
            conversionRate: Number(localStorage.getItem('conversionRate')) || 0,
            totalAmount: 0,
            salePrice: 0,
            grantPrice: 0,
            grantedOverTwoYearsAgo: true
        },

        onSubmit: (values) => {
            localStorage.setItem('incomeTax', values.incomeTax.toString());
            localStorage.setItem('conversionRate', values.conversionRate.toString());
            onFormSubmit(values);
        },

        validationSchema: Yup.object({
            incomeTax: Yup.number().moreThan(0).required(),
            conversionRate: Yup.number().moreThan(0).required(),
            totalAmount: Yup.number().moreThan(0).required(),
            salePrice: Yup.number().moreThan(0).required(),
            grantPrice: Yup.number().moreThan(0).required(),
        })
    });

    const calculateDisabled = Object.keys(formik.errors).length > 0;

    useEffect(() => {
        void formik.validateForm(formik.values);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <SelectInput value={formik.values.equityType} onChange={formik.handleChange} label="Equity Type"
                                 name="equityType" options={EQUITY_TYPES}/>
                </div>
                <div className="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
                    <NumericInput value={formik.values.incomeTax} onChange={formik.handleChange} label="Income Tax %"
                                  name="incomeTax"/>
                </div>
                <div className="w-1/2 md:w-1/3 px-3">
                    <NumericInput value={formik.values.conversionRate} onChange={formik.handleChange} label="Amount"
                                  name="conversionRate"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <NumericInput value={formik.values.totalAmount} onChange={formik.handleChange} label="Amount"
                                  name="totalAmount"/>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <NumericInput value={formik.values.salePrice} onChange={formik.handleChange} label="Sale Price"
                                  name="salePrice"/>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <NumericInput value={formik.values.grantPrice} onChange={formik.handleChange} label="Grant Price"
                                  name="grantPrice"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0 content-center">
                    <CheckboxInput checked={formik.values.grantedOverTwoYearsAgo} onChange={formik.handleChange}
                                   label="Granted over 2 years ago?" name='grantedOverTwoYearsAgo'/>
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <SubmitButton label="Calculate" disabled={calculateDisabled}/>
                </div>
            </div>
        </form>
    );
}

export default EquityForm;
