// "use client"

// import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

// // const data = [
// //   {
// //     name: 'Jan',
// //     uv: 4000,
// //     pv: 2400,
// //     amt: 2400,
// //   },
// //   {
// //     name: 'Feb',
// //     uv: 3000,
// //     pv: 1398,
// //     amt: 2210,
// //   },
// //   {
// //     name: 'Mar',
// //     uv: 2000,
// //     pv: 9800,
// //     amt: 2290,
// //   },
// //   {
// //     name: 'Apr',
// //     uv: 2780,
// //     pv: 3908,
// //     amt: 2000,
// //   },
// //   {
// //     name: 'May',
// //     uv: 1890,
// //     pv: 4800,
// //     amt: 2181,
// //   },
// //   {
// //     name: 'Jun',
// //     uv: 2390,
// //     pv: 3800,
// //     amt: 2500,
// //   },
// //   {
// //     name: 'Jul',
// //     uv: 3490,
// //     pv: 4300,
// //     amt: 2100,
// //   },
// //   {
// //     name: 'Aug',
// //     uv: 4000,
// //     pv: 2400,
// //     amt: 2400,
// //   },
// //   {
// //     name: 'Sep',
// //     uv: 3000,
// //     pv: 1398,
// //     amt: 2210,
// //   },
// //   {
// //     name: 'Oct',
// //     uv: 2000,
// //     pv: 9800,
// //     amt: 2290,
// //   },
// //   {
// //     name: 'Nov',
// //     uv: 2780,
// //     pv: 3908,
// //     amt: 2000,
// //   },
// //   {
// //     name: 'Dec',
// //     uv: 1890,
// //     pv: 4800,
// //     amt: 2181,
// //   },
// // ];

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];


// export function TradeGraph() {
//   return (
//     // <ResponsiveContainer>
//     //   <AreaChart
//     //     data={data}
//     //     margin={{
//     //       top: 10,
//     //       right: 30,
//     //       left: 0,
//     //       bottom: 0, 
//     //     }}
//     //   >
//     //     {/* <CartesianGrid strokeDasharray="3 3" /> */}
//     //     <XAxis dataKey="name" />
//     //     <YAxis />
//     //     <Tooltip />
//     //     <Area type="monotone" dataKey="uv" stroke="#1e40af" fill="#b2c0ec" />
//     //   </AreaChart>
//     // </ResponsiveContainer>

//     <ResponsiveContainer width="100%" height="100%">
//       <AreaChart
//         width={500}
//         height={400}
//         data={data}
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//       </AreaChart>
//     </ResponsiveContainer>
//   )
// }


"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function TradeGraph() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis
          dataKey="name"
          // stroke="#888888"
          // fontSize={12}
          // tickLine={false}
          // axisLine={false}
        />
        <YAxis
          // fontSize={12}
          // tickLine={false}
          // axisLine={false}
          // tickFormatter={(value: any) => `$${value}`}
        />
        <Area dataKey="total" stroke="#1e40af" fill="#c6c3f9" />
      </AreaChart>
    </ResponsiveContainer>
  )
}