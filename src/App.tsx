import './App.css'
import EquityForm, {FormResponse} from "./components/EquityForm.tsx";
import ResultBox from "./components/ResultBox.tsx";
import { useState} from "react";
import {calcRSU102} from "./apis/calculator.ts";
import {convertToLocale} from "./apis/utils.ts";

function App() {
    const [showResult, setShowResult] = useState(false);
    const [resultText, setResultText] = useState('')
    const onFormSubmit = (formResponse: FormResponse) => {
        const res = calcRSU102({totalAmount: formResponse.totalAmount, salePrice: formResponse.salePrice}, {incomeTax: formResponse.incomeTax / 100, surTax: 0.03, capitalGainTax: 0.25}, formResponse.grantPrice);
        const resInILS = convertToLocale(res * formResponse.conversionRate, 'en-US', 'ILS');
        setResultText(resInILS);
        setShowResult(true);
    }

    const onBoxClose = () => {
        setShowResult(false);
        setResultText('');
    }

    return (
        <>
            <EquityForm onFormSubmit={onFormSubmit} />
            <div className={`transition-opacity duration-300 ease-in-out ${showResult ? 'opacity-100' : 'opacity-0'}`}>
                <ResultBox value={resultText} onClose={onBoxClose} />
            </div>
        </>
    )
}

export default App
