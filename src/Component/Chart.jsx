import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    return (
        <div>
            <BarChart width={500} height={400} data={'/public/gadgets.json'}></BarChart>
        </div>
    );
};

export default Chart;