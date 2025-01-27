import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Root from './Component/Root';
import Errorpage from './Component/Errorpage';
import Home from './Home';
import Dashboard from './Component/Dashboard';
import Statistic from './Component/Statistic';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <Errorpage></Errorpage>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path:'statistic',
				element:<Statistic></Statistic>
			},
			{
				path:'dashboard',
				element:<Dashboard></Dashboard>
			},

		]
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
