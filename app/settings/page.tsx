import { Metadata } from "next"

import { Navbar } from "@/components/nav-bar"
import { ProfileForm } from "./components/profile-form"

export const metadata: Metadata = {
  title: "Settings",
  description: "Example dashboard app built using the components.",
}

export default function WalletPage() {
  return (
    <>
      <div className="flex-col flex">
        <Navbar />
        <div className="space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl text-blue-900 font-bold tracking-tight">User Settings</h2>
            {/* <div className="flex items-center space-x-2">
              <DownloadReport />
            </div> */}
          </div>
          <div className="flex pt-8" >
            <div className="w-5/6 md:w-2/3">
              <ProfileForm />
            </div>
          </div>
          
        </div>

      </div>
    </>
  )
}