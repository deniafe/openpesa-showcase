import { Metadata } from "next"

import { Navbar } from "@/components/nav-bar"
import { DownloadReport } from "@/components/download-report"
import { RecentTransactions } from "./components/resent-transactions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewTransaction } from "./components/new-transaction"

export const metadata: Metadata = {
  title: "Wallet",
  description: "Example dashboard app built using the components.",
}

export default function WalletPage() {
  return (
    <>
      <div className="flex-col flex">
        <Navbar />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl text-blue-900 font-bold tracking-tight">Wallet</h2>
            {/* <div className="flex items-center space-x-2">
              <DownloadReport />
            </div> */}
           </div>
          
          <NewTransaction />
          
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                You made 21 transactions this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTransactions />
            </CardContent>
          </Card>
         
        </div>

      </div>
    </>
  )
}