import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_2PChnPGyciSw7jwqoCzLs1Mr4EGBGf4Tpl7FL2Z0";


function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setResult(((response.data.data[toCurrency]) * amount).toFixed(2));
    }

    return (
        <div className='currency-div'>
            <div>
                <h3 style={{ fontFamily: "arial" }}>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowRight style={{ fontSize: "20px", marginRight: "10px" }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>

                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>

            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>
            </div>

        </div>
    )
}

export default Currency