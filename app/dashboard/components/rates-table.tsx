"use client"

import { useEffect, useState } from "react";
import { TriangleUpIcon, TriangleDownIcon } from "@radix-ui/react-icons"

const initialRates = [
  {
   name: 'EUR/USD',
   bid: 1.0547,
   ask: 1.0548,
  },
  {
    name: 'USD/EUR',
    bid: 0.9482,
    ask: 0.9485,
   },
   {
    name: 'USD/JPY',
    bid: 151.20,
    ask: 151.22,
   },
   {
    name: 'JPY/USD',
    bid: 0.0066,
    ask: 0.0066,
   },
   {
    name: 'USD/XAU',
    bid: 0.0005,
    ask: 0.0005,
   },
   {
    name: 'XAU/USD',
    bid: 1983.41,
    ask: 1983.79,
   },
   {
    name: 'USD/BTC',
    bid: 0.0000,
    ask: 0.0000,
   },
   {
    name: 'BTC/USD',
    bid: 34352,
    ask: 34398,
   },
];




export function RatesTable() {
  const [rates, setRates] = useState(initialRates);

  useEffect(() => {
    // Function to generate random bid and ask prices
    const generateRandomPrices = () => {
      const updatedRates = rates.map((rate) => {
        const newBid = rate.bid + (Math.random() - 0.5) * 0.001;
        const newAsk = rate.ask + (Math.random() - 0.5) * 0.001;
        return { ...rate, bid: newBid, ask: newAsk };
      });
      setRates(updatedRates);
    };

    // Update rates every second
    const intervalId = setInterval(generateRandomPrices, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [rates]);

  return (
    <div className="">
      <div className="flex justify-around mb-4">
        <p className="font-bold">Name</p>
        <p className="font-bold">Bid</p>
        <p className="font-bold">Ask</p>
      </div>
      {rates.map((rate, index) => (
        <div key={index} className="flex justify-around py-2 border-b border-gray-100">
          <p>{rate.name}</p>
          <div className={`flex text-${rate.bid > initialRates[index].bid ? 'green-600' : rate.bid < initialRates[index].bid ? 'red-600' : 'gray-700'}`}>
            {rate.bid > initialRates[index].bid ? <TriangleUpIcon /> : rate.bid < initialRates[index].bid ? <TriangleDownIcon /> : '-'}
            <span>{rate.bid.toFixed(4)}</span> 
          </div>
          <p className={`text-${rate.ask > initialRates[index].ask ? 'green-600' : rate.ask < initialRates[index].ask ? 'red-600' : 'gray-700'}`}>
            {rate.ask.toFixed(4)}
          </p>
        </div>
      ))}
    </div>
  );
}