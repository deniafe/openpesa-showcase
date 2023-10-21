"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { successMessage } from "@/firebase/success_message"
import { Icons } from "@/components/icons"
import { useState } from "react"

const currencies = [
  'USD - $',
  'EUR - €',
  'JPY - ¥',
  'GBP - £',
  'CNY - ¥',
  'CHF - Fr',
  'ZAR - R',
  'NGN - ₦',
];


export function Trade() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Use setTimeout to wait for 6 seconds (6000 milliseconds) and then set isLoading to false
    setTimeout(() => {
        setIsLoading(false);
        successMessage('Transaction completed successfully 🎉')
    }, 6000);
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">BUY</TabsTrigger>
        <TabsTrigger value="password">SELL</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardDescription>
             {`Buy Currency`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
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
            <div className="space-y-1">
              <Label htmlFor="username">Amount</Label>
              <Input id="username" />
            </div>
          </CardContent>
          <CardFooter>
          <Button disabled={isLoading} type="submit" onClick={onSubmit}>
          {isLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </>
            ) : (
              'Buy Now'
            )}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardDescription>
              {`Sell Currency.`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Select Currency</Label>
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
            <div className="space-y-1">
              <Label htmlFor="new">Amount</Label>
              <Input id="new" type="text" />
            </div>
          </CardContent>
          <CardFooter>
          <Button disabled={isLoading} type="submit" onClick={onSubmit}>
             {isLoading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                'Sell Now'
              )}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
