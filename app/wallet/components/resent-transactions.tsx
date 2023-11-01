import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const transactions = [
  {
    invoice: "INV005",
    amount: "-₦1,999.00",
    action: "Send",
    date: "2023-01-15 10:30 AM",
    status: "successful",
  },
  {
    invoice: "INV007",
    amount: "+₦39.00",
    action: "Receive",
    date: "2023-01-14 02:45 PM",
    status: "unsuccessful",
  },
  {
    invoice: "INV008",
    amount: "-₦1,299.00",
    action: "Send",
    date: "2023-01-13 09:15 AM",
    status: "successful",
  },
  {
    invoice: "INV009",
    amount: "+₦299.00",
    action: "Receive",
    date: "2023-01-12 05:20 PM",
    status: "successful",
  },
  {
    invoice: "INV010",
    amount: "-₦899.00",
    action: "Send",
    date: "2023-01-11 11:55 AM",
    status: "unsuccessful",
  },
  {
    invoice: "INV011",
    amount: "+₦499.00",
    action: "Receive",
    date: "2023-01-10 03:30 PM",
    status: "successful",
  },
  {
    invoice: "INV012",
    amount: "-₦2,199.00",
    action: "Send",
    date: "2023-01-09 01:10 PM",
    status: "successful",
  },
  {
    invoice: "INV013",
    amount: "+₦999.00",
    action: "Receive",
    date: "2023-01-08 08:45 AM",
    status: "successful",
  },
];




export function RecentTransactions() {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.invoice}>
            <TableCell className="font-medium" >{transaction.invoice}</TableCell>
            <TableCell className="text-gray-600" >{transaction.action}</TableCell>
            <TableCell className="text-gray-400" >{transaction.date}</TableCell>
            <TableCell className={`${transaction.status === 'successful' ? 'text-green-600 font-medium' : 'text-red-700 font-medium'}`} >{transaction.status}</TableCell>
            <TableCell className="text-right">{transaction.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
