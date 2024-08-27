import React from "react";

interface CurrencyConverterProps {
  sourceCurrency: string;
  setSourceCurrency: (currency: string) => void;
  amount: string;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  targetCurrency: string;
  setTargetCurrency: (currency: string) => void;
  convertedAmount: string;
  loading: boolean;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  sourceCurrency,
  setSourceCurrency,
  amount,
  handleAmountChange,
  targetCurrency,
  setTargetCurrency,
  convertedAmount,
  loading,
}) => (
  <div className="currency-converter  p-12 rounded-2xl flex flex-col md:flex-row items-end  ">
    <div>
      <label htmlFor="sourceCurrency" className="block text-sm font-medium leading-6 text-white">Moeda de Origem: </label>
      <select
        id="sourceCurrency"
        value={sourceCurrency}
        onChange={(e) => setSourceCurrency(e.target.value)}
      >
        <option value="BRL">BRL - Real Brasileiro</option>
        <option value="USD">USD - Dólar Americano</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - Libra Esterlina</option>
        <option value="JPY">JPY - Iene Japonês</option>
      </select>
    </div>

    <div>
      <label htmlFor="amount" className="block text-sm font-medium leading-6 text-white">Valor: </label>
      <input
        id="amount"
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder={`Digite um valor em ${sourceCurrency}`}
      />
    </div>

    <div>
      <label htmlFor="targetCurrency" className="block text-sm font-medium leading-6 text-white">Converter para: </label>
      <select
        id="targetCurrency"
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        <option value="USD">USD - Dólar Americano</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - Libra Esterlina</option>
        <option value="JPY">JPY - Iene Japonês</option>
      </select>
    </div>

    {loading ? (
      <p>Carregando...</p>
    ) : (
      <h2 className=" text-sm font-medium">
        Valor Convertido: {convertedAmount} {targetCurrency}
      </h2>
    )}
  </div>
);
