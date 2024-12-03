import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Features from './Component/Features';
import Priceses from './Component/Priceses';
import Peact from './Component/Peact';
import Angular from './Component/Angular';

var router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/features",
                element:<Features/>,
                children:[
                    {
                        path:"/features/react",
                        element:<Peact></Peact>
                    },
                    {
                        path:"/features/angular",
                        element:<Angular></Angular>
                    }
                ]
               },
               {
                   path:"/price",
                   element:<Priceses></Priceses>
               }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}></RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
