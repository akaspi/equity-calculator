

function EquityForm() {
    return (
        <>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                               htmlFor="equity-type">
                            Equity Type
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="equity-type">
                                <option>RSU</option>
                                <option>ESOP</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                               htmlFor="income-tax">
                            Income Tax %
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="income-tax" type="number"/>
                    </div>
                    <div className="w-1/2 md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                               htmlFor="conversion-rate">
                            USD / ILS
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="conversion-rate" type="number"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                               htmlFor="total-amount">
                            Amount
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="total-amount" type="number"/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                               htmlFor="sale-price">
                            Sale Price
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="sale-price" type="number"/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                               htmlFor="grant-price">
                            Grant Price
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grant-price" type="number"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0 content-center">
                        <div className="w-full px-3">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span
                                    className="ms-3 text-sm font-medium text-gray-200">Granted over 2 years ago?</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded">
                            Calculate
                        </button>
                    </div>
                </div>
            </form>

            <div className="bg-teal-100 rounded text-teal-900 px-4 py-3 shadow-md"
                 role="alert">
                <p className="text-sm">Make sure you know how these changes affect you.</p>
            </div>
        </>
    )
}

export default EquityForm