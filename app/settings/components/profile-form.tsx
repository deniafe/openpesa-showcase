"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { successMessage } from "@/firebase/success_message"
import { Icons } from "@/components/icons"
import { useState } from "react"

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Use setTimeout to wait for 6 seconds (6000 milliseconds) and then set isLoading to false
    setTimeout(() => {
        setIsLoading(false);
        successMessage('Profile updated successfully 🎉')
    }, 6000);
  }

  async function onVerify(event: React.SyntheticEvent) {
    event.preventDefault();
    setLoading(true);

    // Use setTimeout to wait for 6 seconds (6000 milliseconds) and then set isLoading to false
    setTimeout(() => {
        setLoading(false);
        successMessage('User verification successful 🎉')
    }, 6000);
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-4 mb-8">
            <Label htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Test User"
              type="name"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label htmlFor="verify">
              Upload Verification Documents
            </Label>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input id="verify" type="file" placeholder="verify" />
              <Button  disabled={loading} variant="outline" type="submit" onClick={onVerify} >
              {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
                Verify
              </Button>
            </div>
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Save Changes
          </Button>
        </div>
      </form>
  )
}