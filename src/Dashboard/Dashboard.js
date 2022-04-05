import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, AreaChart, Area } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 200000,
            "sell": 241,
            "revenue": 50401
        },
        {
            "month": "Apr",
            "investment": 400000,
            "sell": 423,
            "revenue": 74500
        },
        {
            "month": "May",
            "investment": 600000,
            "sell": 726,
            "revenue": 107010
        },
        {
            "month": "Jun",
            "investment": 700000,
            "sell": 529,
            "revenue": 404050
        },
        {
            "month": "Jul",
            "investment": 700000,
            "sell": 601,
            "revenue": 409000
        },
        {
            "month": "Aug",
            "investment": 500000,
            "sell": 670,
            "revenue": 100000
        }
    ]
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-22 xl:mt-24 xl:mb-18'>
            <LineChart width={400} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="month" stroke="#8884d8" />
                <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
            </LineChart>

            <BarChart width={400} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>

            <AreaChart width={400} height={350} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>


        </div>
    );
};

export default Dashboard;