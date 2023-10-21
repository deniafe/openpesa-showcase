import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { TradeGraph } from "./components/trade-graph"
import { Trade } from "./components/trade"
import { Navbar } from "@/components/nav-bar"

const cardsData = [
  {
    title: 'Total Revenue',
    symbol: '$',
    value: '196.89',
    change: '+20.1% from last month',
    color: 'green-600',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
  },
  {
    title: 'Total Expenses',
    symbol: '€',
    value: '176.23',
    change: '-8.1% from last month',
    color: 'red-600',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
  },
  {
    title: 'Total Exchange',
    symbol: '£',
    value: '109.87',
    change: '+9.0% from last month',
    color: 'green-600',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
  },
  {
    title: 'Total Withdrawals',
    symbol: '₦',
    value: '162.23',
    change: '-7.0% from last month ',
    color: 'red-600',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
  },
];

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function TradePage() {
  return (
    <>
      <div className="flex-col flex">
        <Navbar />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl text-blue-900 font-bold tracking-tight">Currency Excahnge</h2>
            <div className="flex items-center space-x-2">
              {/* <CalendarDateRangePicker /> */}
              {/* <DownloadReport /> */}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          
           {cardsData.map((card, index) => (
              <Card key={index}>
                {/* <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                 
                  <CardTitle className={`text-sm font-medium text-${card.color}`}>{card.title}</CardTitle>
                </CardHeader> */}
                <CardContent className="flex flex-row items-center space-y-4">
                  <div className={`p-2 pt-8 rounded-full text-4xl font-medium text-blue-900`}>
                    {card.symbol}
                  </div>
                  <div>
                    <div className={`text-xl ml-2`}>{card.value}</div>
                    <div className={`flex animate-pulse ml-4 text-${card.color}`}>
                      <p className="text-xs">{card.change}</p>
                      <div className="ml-2 font-bold" >{card.icon}</div>
                    </div>
                    
                  </div>
                
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>NGN / USD</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <TradeGraph />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Buy And Sell Currency</CardTitle>
              </CardHeader>
              <CardContent>
                <Trade />
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </>
  )
}