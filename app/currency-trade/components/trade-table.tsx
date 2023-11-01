"use client"
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { successMessage } from "@/firebase/success_message";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeartIcon, ClockIcon, CheckCircledIcon } from "@radix-ui/react-icons"
import { useState } from "react";

const trades = [
  {
    id: "1",
    avatarInitials: "SD",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe7hghrOa7uMHngEO7aGkYwae7XXvy_lKNA&usqp=CAU",
    name: 'Sidney',
    trades: '320',
    completion: '100%',
    likes: '99.64%',
    time: '15min',
    price: '₦1,176.20',
    amount: " $3900.00",
    limit: ' 200,000 to 500,000',
    method: 'Bank Transfer',
    action: "Buy",
  },
  {
    id: "2",
    avatarInitials: "JH",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&usqp=CAU",
    name: 'John',
    trades: '150',
    completion: '98%',
    likes: '95.32%',
    time: '20min',
    price: '₦900.50',
    amount: "$2800.00",
    limit: '150,000 to 300,000',
    method:  'Bank Transfer',
    action: "Sell",
  },
  {
    id: "3",
    avatarInitials: "AL",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOhk261OUCvhKzCLpbBFy9H_zvGYydWBWBQ&usqp=CAU",
    name: 'Alice',
    trades: '220',
    completion: '97%',
    likes: '92.14%',
    time: '10min',
    price: '₦1,500.75',
    amount: "$4500.00",
    limit: '100,000 to 250,000',
    method:  'Bank Transfer',
    action: "Buy",
  },
  {
    id: "4",
    avatarInitials: "MB",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe7hghrOa7uMHngEO7aGkYwae7XXvy_lKNA&usqp=CAU",
    name: 'Michael',
    trades: '180',
    completion: '99%',
    likes: '97.50%',
    time: '18min',
    price: '₦1,300.00',
    amount: "$3400.00",
    limit: '250,000 to 500,000',
    method: 'Bank Transfer',
    action: "Sell",
  },
  {
    id: "5",
    avatarInitials: "EC",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgWKMc6KoXJJ7-jw7JZyvmd8TUUL5o4IwGA&usqp=CAU",
    name: 'Emma',
    trades: '280',
    completion: '95%',
    likes: '91.75%',
    time: '12min',
    price: '₦1,000.60',
    amount: "$3100.00",
    limit: '200,000 to 400,000',
    method:  'Bank Transfer',
    action: "Buy",
  },

];




export function TradeTable() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
  const [amount, setAmount] = useState('100')

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Use setTimeout to wait for 6 seconds (6000 milliseconds) and then set isLoading to false
    setTimeout(() => {
        setIsLoading(false);
        setShowNewTeamDialog(false)
        successMessage(`${amount} USD added to your wallet successfully 🎉`)
    }, 6000);
  }
  
  return (
    <div className="">
      {trades.map((trade, index) => (
        <>
         <div className="space-y-3 md:space-y-6 mb-8 pb-4 border-b border-gray-200">
          <div className="space-y-3 md:flex md:space-x-8">
              {/* Name and avatar */}
              <div className="flex space-x-2">
                <Avatar className={"h-6 w-6"}>
                  <AvatarImage src={trade.imgUrl} alt="Avatar" />
                  <AvatarFallback>{trade.avatarInitials}</AvatarFallback>
                </Avatar>
                <p className="text-lg font-medium leading-none">{trade.name}</p>
                <div className="text-red-700 mt-0.5 text-xs" >
                <CheckCircledIcon />
                </div>
              </div>

              {/* Trades and Completion */}
              <div className="flex space-x-4">
                <p className="text-xs text-gray-600 leading-none">{trade.trades} Trades</p>
                <p className="text-xs text-gray-600 leading-none">Completion {trade.completion}</p>
              </div>

              {/* Likes and time */}
              <div className="flex space-x-4">
                <div className="text-xs flex text-gray-400 leading-none">
                  <HeartIcon />
                  <span className="mt-0.5">{trade.likes}</span>
                </div>
                <div className="text-xs flex text-gray-400 leading-none">
                  <ClockIcon /> 
                  <span className="mt-0.5">{trade.time}</span>
                  </div>
              </div>
            </div>

            {/* Amount and Transfer Method */}
            <div className="flex justify-between">
              <p className="text-xl text-gray-800 leading-none">{trade.price}</p>
              <div className="text-xs text-gray-600 leading-none flex space-x-1">
                <span className="mt-1">
                  {trade.method}
                </span>
                <div className="w-1 bg-blue-800"></div>
              </div>
            </div>

            {/* Available Amount And Limit */}
            <div className="flex justify-between">
              <div>
                <p className="text-xs mb-1 mt-2 text-gray-400 leading-none">Available Amount: 
                  <span className="text-gray-600">
                    {trade.amount}
                  </span>
                </p>
                <p className="text-xs text-gray-400 leading-none">Limit: 
                  <span className="text-gray-600">
                    {trade.limit}
                  </span>
                </p>
              </div>

              {/* <Button disabled={isLoading} type="submit" onClick={onSubmit}>
                {isLoading ? (
                  <>
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    <span className="px-3">
                      Processing 
                    </span>
                  </>
                ) : (
                  <span className="px-3">
                    Buy 
                  </span>
                )}
              </Button> */}

             
              <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
                <DialogTrigger asChild>
                  <Button
                  onClick={() => {
                    setShowNewTeamDialog(true)
                  }}
                  >
                    <span className="px-3">
                      Buy 
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {'Buy USD'}
                    </DialogTitle>
                    <DialogDescription>
                    {'It will be added directly into your wallet and you can withdraw into your bank account.'}
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <div className="space-y-4 py-2 pb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">How much do you want to buy in Dollars ($)</Label>
                        <Input id="name" placeholder="100" onChange={(e) => setAmount(e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="plan">Select Bank Account For Transaction</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an account" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="free">
                              <span className="font-medium">Zenith</span> -{" "}
                              <span className="text-muted-foreground">
                                0134526765
                              </span>
                            </SelectItem>
                            <SelectItem value="pro">
                              <span className="font-medium">GTB</span> -{" "}
                              <span className="text-muted-foreground">
                                0986231456
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" onClick={onSubmit}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                      Buy
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
         </div>
        </>
      ))}
    </div>
  )
}
