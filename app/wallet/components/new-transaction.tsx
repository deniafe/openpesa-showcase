"use client"
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icons"
import { useState } from "react";
import { successMessage } from "@/firebase/success_message";

export function NewTransaction() {

  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
  const [transactionType, setTransactionType] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Use setTimeout to wait for 6 seconds (6000 milliseconds) and then set isLoading to false
    setTimeout(() => {
        setIsLoading(false);
        setShowNewTeamDialog(false)
        successMessage('Transaction completed successfully 🎉')
    }, 6000);
  }


  return (
    <>
     <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <div className="flex items-end justify-between space-y-16">
        <div>
        <CardDescription>
          Total Balance
        </CardDescription>
          <h2 className="text-3xl mt-4 text-gray-700">$120.480 </h2>
        </div>
        
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                // onClick={() => table.resetColumnFilters()}
                className="h-8 px-2 mt--8 lg:px-3"
              >
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Transaction
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DialogTrigger asChild>
                <DropdownMenuItem 
                   onClick={() => {
                    setTransactionType('add')
                    setShowNewTeamDialog(true)
                  }}
                 >
                  <span>Add Funds</span>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogTrigger asChild>
                <DropdownMenuItem 
                   onClick={() => {
                    setTransactionType('withdraw')
                    setShowNewTeamDialog(true)
                  }}
                 >
                  <span>Withdraw Funds</span>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>


        </div>
      </div>
      <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {transactionType === 'add' ? 'Add Funds' : 'Withdraw Funds'}
              </DialogTitle>
              <DialogDescription>
              {transactionType === 'add' ? ' Add funds to your openpesa account.' : 'Withdraw funds from your openpesa account'}
              </DialogDescription>
            </DialogHeader>
            <div>
              <div className="space-y-4 py-2 pb-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Amount in Naira (₦)</Label>
                  <Input id="name" placeholder="10000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plan">Select Bank Account</Label>
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
                Continue
              </Button>
            </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}