"use client";

import React, { useEffect, useState } from "react";
import { CurrencyConverter } from "../../components/CurrencyConverter";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [conversionRateTo, setConversionRateTo] = useState<number | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [sourceCurrency, setSourceCurrency] = useState<string>("BRL");
  const [targetCurrency, setTargetCurrency] = useState<string>("USD");

  const fetchConversionRates = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${sourceCurrency}-${targetCurrency}`
      );
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      const result = await response.json();
      const rate = result[`${sourceCurrency}${targetCurrency}`].bid;
      setConversionRateTo(parseFloat(rate));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConversionRates();
  }, [sourceCurrency, targetCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      setAmount(input);
    }
  };

  const convertedAmount = conversionRateTo
    ? (parseFloat(amount || "0") * conversionRateTo).toFixed(2)
    : "0.00";

  return (
    <div className="App flex flex-row">
      <CurrencyConverter
        sourceCurrency={sourceCurrency}
        setSourceCurrency={setSourceCurrency}
        amount={amount}
        handleAmountChange={handleAmountChange}
        targetCurrency={targetCurrency}
        setTargetCurrency={setTargetCurrency}
        convertedAmount={convertedAmount}
        loading={loading}
      />
    </div>
    
  );
}
