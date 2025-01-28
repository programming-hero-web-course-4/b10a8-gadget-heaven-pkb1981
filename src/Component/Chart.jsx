import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, []);
    return (
        <div>
            <BarChart width={1000} height={400} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product_title" />
                <YAxis dataKey="price" />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#9538E2" />
                <Bar dataKey="rating" fill="#BF87EE"/>
                <Bar dataKey="category" fill="#FF0000"/>
            </BarChart>
        </div >
    );
};

export default Chart;