import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation" 

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathName = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${pathName === '/dashboard' && 'text-gray-900'}`}
      >
        Overview
      </Link>
      <Link
        href="/wallet"
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${pathName === '/wallet' && 'text-gray-900'}`}
      >
        Wallet
      </Link>
      <Link
        href="/currency-trade"
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${pathName === '/currency-trade' && 'text-gray-900'}`}
      >
        Currency Trade
      </Link>
      <Link
        href="/settings"
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${pathName === '/settings' && 'text-gray-900'}`}
      >
        Settings
      </Link>
    </nav>
  )
}