import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayOut";
import Home from "./components/pages/Home";
import Services from "./components/pages/Service";
import Contact from "./components/pages/Contact.jsx";
import Login from "./components/pages/Login.jsx";
import Registration from "./components/pages/Registration.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
    },
    {
        path: "/registration",
        element: (
            <PublicRoute>
                <Registration />
            </PublicRoute>
        )
    },
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: "services",
                        element: <Services />
                    },
                    {
                        path: "contact",
                        element: <Contact />
                    }
                ]
            }
        ]
    }
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
};

export default App;

