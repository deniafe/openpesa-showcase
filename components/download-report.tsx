"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Icons } from "@/components/icons"
import { successMessage } from "@/firebase/success_message"


export function DownloadReport() {

  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Use setTimeout to wait for 6 seconds (6000 milliseconds) and then set isLoading to false
    setTimeout(() => {
        setIsLoading(false);
        setShowNewTeamDialog(false)
        successMessage('Report exported successfully 🎉')
    }, 6000);
  }

  return (
    <>
       <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
         <DialogTrigger asChild>
            <Button onClick={onSubmit}>
              {isLoading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Downloading Report
                </>
              ) : (
                'Download Report'
              )}
            </Button>

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create team</DialogTitle>
              <DialogDescription>
                Add a new team to manage products and customers.
              </DialogDescription>
            </DialogHeader>
            <div>
              <div className="space-y-4 py-2 pb-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Team name</Label>
                  <Input id="name" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plan">Subscription plan</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">
                        <span className="font-medium">Free</span> -{" "}
                        <span className="text-muted-foreground">
                          Trial for two weeks
                        </span>
                      </SelectItem>
                      <SelectItem value="pro">
                        <span className="font-medium">Pro</span> -{" "}
                        <span className="text-muted-foreground">
                          $9/month per user
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
              <Button type="submit">Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </>
  )
}