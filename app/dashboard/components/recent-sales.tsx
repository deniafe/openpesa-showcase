"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales() {
  const salesData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      avatarInitials: "SC",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4m5APM4w-uVWMPR9nKN2pM6bTjUqoNP8wPQ&usqp=CAU"
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      avatarInitials: "JL",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&usqp=CAU"
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
      avatarInitials: "IN",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOhk261OUCvhKzCLpbBFy9H_zvGYydWBWBQ&usqp=CAU"
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
      avatarInitials: "WK",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe7hghrOa7uMHngEO7aGkYwae7XXvy_lKNA&usqp=CAU"
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
      avatarInitials: "SD",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgWKMc6KoXJJ7-jw7JZyvmd8TUUL5o4IwGA&usqp=CAU"
    },
  ];

  return (
    <div className="space-y-8">
      {salesData.map((sale, index) => (
        <>
          <div className="flex items-center" key={index}>
            <Avatar className={index === 0 ? "h-8 w-8" : "flex h-9 w-9 items-center justify-center space-y-0 border"}>
              <AvatarImage src={sale.imgUrl} alt="Avatar" />
              <AvatarFallback>{sale.avatarInitials}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <div className="hidden md:block ml-auto font-medium">{sale.amount}</div>
          </div>
          <div className="md:hidden ml-auto font-medium">{sale.amount}</div>
        </>
      ))}
    </div>
  )
}
