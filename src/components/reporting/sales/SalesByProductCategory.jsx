import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from 'recharts';

const data = [
  { revenue: 10400, subscription: 240 },
  { revenue: 14405, subscription: 300 },
  { revenue: 9400, subscription: 200 },
  { revenue: 8200, subscription: 278 },
  { revenue: 7000, subscription: 189 },
  { revenue: 9600, subscription: 239 },
  { revenue: 11244, subscription: 278 },
  { revenue: 26475, subscription: 189 },
];

const themes = [
  {
    name: 'light',
    cssVars: {
      light: {
        primary: '200, 100%, 50%',
      },
      dark: {
        primary: '200, 100%, 50%',
      },
    },
  },
  // Add more themes as necessary
];



export default function SalesByProductCategory() {
  return (
    <div className="w-full">
      <div className=" p-2">
        <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="card-title text-base font-normal">Total Revenue</h2>
        </div>
        <div className="card-content">
          <div className="text-2xl font-bold">$15,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          <div className="h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
