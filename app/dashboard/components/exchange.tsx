'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

const currencies = [
  '🇺🇸 USD - $',
  '🇪🇺 EUR - €',
  '🇯🇵 JPY - ¥',
  '🇬🇧 GBP - £',
  '🇨🇳 CNY - ¥',
  '🇨🇭 CHF - Fr',
  '🇿🇦 ZAR - R',
  '🇳🇬 NGN - ₦',
];



const Exchange = () => {
  return (
    <div>
       <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Curency Converter</CardTitle>
            <CardDescription>
              Convert difference currencies with this currency calculator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="space-y-1 w-1/3">
                <div>
                  <Label htmlFor="name">Select Currency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency, index) => (
                        <SelectItem key={index} value={currency}>
                          {currency}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="name">Select Currency</Label>
                  <Input />
                </div>
              </div>

              <div className='mt-8'>
                <ArrowLeftIcon />
                <ArrowRightIcon />
              </div>

              <div className="space-y-1 w-1/3">
                <Label htmlFor="name">Select Currency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency, index) => (
                      <SelectItem key={index} value={currency}>
                        {currency}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
           
          </CardContent>
        </Card>
    </div>
  )
}

export default Exchange