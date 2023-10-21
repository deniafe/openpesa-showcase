"use client"

import * as React from "react"

import { cn, isValidEmail } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { errorMessage } from "@/firebase/error_message"
import { signInWithGooglePopup, signUp } from "@/firebase/signup"
import { createUserDocumentFromAuth } from "@/firebase/create_user"
import { signIn } from "@/firebase/signin"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  authState: string; // Add a state prop
}

export function UserAuthForm({ className, authState, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    if(isLoading) return

    if(!email || !password) {
      return errorMessage('Please enter your email and password')
    }

    if (!isValidEmail(email)) {
      return errorMessage('Email not valid')
    } 

    if (password.length < 6) {
      return errorMessage('Password not valid')
    } 

    setIsLoading(true)

    authState === 'signup' ? signupWithEmail() : signInWithEmail()

  }

  const signUpWithGoogle = async () => {
    setLoading(false)
    const { user } = await signInWithGooglePopup();
    const data = await createUserDocumentFromAuth(user)
    const docError = data?.error

    if (docError) {
      setLoading(false)
      return console.log(docError)
    }

  };

  const signupWithEmail = async () => {

    const { user, error } = await signUp(email, password)

    if (error) {
      setIsLoading(false)
      return console.log(error)
    }

    const data = await createUserDocumentFromAuth(user)
    const docError = data?.error

    if (docError) {
      setIsLoading(false)
      return console.log(docError)
    }

    return setIsLoading(false)
  }

  const signInWithEmail = async () => {

    const { error } = await signIn(email, password)

    if (error) {
      setIsLoading(false)
      return console.log(error)
    }

    return setIsLoading(false)
  }


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label className="sr-only" htmlFor="password">
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {authState === 'signup' ? 'Create an account with Email' : 'Sign In with Email'}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={signUpWithGoogle} variant="outline" type="button" disabled={isLoading}>
        {loading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}