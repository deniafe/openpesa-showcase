"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"
import { useState } from "react"

// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// }

export default function AuthenticationPage() {

  const [authState, setAuthState] = useState<string>('login'); // Initialize state as 'signup'

  const toggleState = () => {
    // Toggle between 'signup' and 'login'
    setAuthState(authState === 'signup' ? 'login' : 'signup');
  };


  return (
    <>
      <div className="container grid relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute text-blue-800 right-4 top-4 md:right-8 md:top-8 cursor-pointer"
          )}
          onClick={toggleState}
        >
          {authState === 'signup' ? 'Login' : 'Signup'}
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-blue-800" />
          <div className="relative z-20 flex items-center text-lg font-medium">
           <Image alt="logo" src="/logo1.png" height={80} width={160} />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Unlock the Power of Secure and Seamless Global Transactions for Your Business with Openpesa Payment API Platform.&rdquo;
              </p>
              <footer className="text-sm">OpenPesa</footer>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl text-blue-900 font-semibold tracking-tight">
              {authState === 'signup' ? 'Create an account' : 'Login to your account'}
              </h1>
              <p className="text-sm text-muted-foreground">
              {authState === 'signup' ? ' Enter your email below to create your account' : ' Enter your email below to login to your account'}
               
              </p>
            </div>
            <UserAuthForm authState={authState} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}