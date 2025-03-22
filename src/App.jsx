// import React from "react";
// import {
//     createBrowserRouter,
//     createRoutesFromElements,
//     Route,
//     RouterProvider,
//     Navigate,
//     Outlet
// } from "react-router-dom";

// import 'icofont/dist/icofont.min.css';
// import AppLayout from "./components/layout/AppLayOut";
// import Home from "./components/pages/Home";
// import Services from "./components/pages/Service";
// import Contact from "./components/pages/Contact.jsx";
// import Login from "./components/pages/Login.jsx";
// import Registration from "./components/pages/Registration.jsx";
// import ErrorPage from "./components/pages/ErrorPage.jsx"; // You can replace this if you have one
// import { Toaster } from 'react-hot-toast';
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import PublicRoute from "./components/PublicRoute.jsx";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route path="/login" element={
//                 <PublicRoute>
//                     <Login />
//                 </PublicRoute>
//             } />
//             <Route path="/registration" element={
//                 <PublicRoute>
//                     <Registration />
//                 </PublicRoute>
//             } />

//             {/* App Layout with children */}
//             <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
//                 {/* Protected Routes */}
//                 <Route element={<ProtectedRoute />}>
//                     <Route index element={<Home />} />
//                     <Route path="services" element={<Services />} />
//                     <Route path="contact" element={<Contact />} />
//                 </Route>
//             </Route>
//         </>
//     )
// );

// const App = () => {
//     return (
//         <>
//             <RouterProvider router={router} />
//             <Toaster />
//         </>
//     );
// };


// // const App = () => {
// //     const router = createBrowserRouter([
// //         {
// //             path: "/",
// //             element: <Home />
// //         },
// //         {
// //             path: "/login",
// //             element: <Login />
// //         },
// //         {
// //             path: "/registration",
// //             element: <Registration />
// //         },
// //         {
// //             path: "/",
// //             element: <AppLayout />,
// //             errorElement: <ErrorPage />,
// //             children: [
// //                 {
// //                     path: '/',
// //                     element: <ProtectedRoute><Home /></ProtectedRoute>
// //                 },
// //                 {
// //                     path: "/services",
// //                     element: <ProtectedRoute><Services /></ProtectedRoute>,
// //                 },
// //                 {
// //                     path: "/contact",
// //                     element: <ProtectedRoute><Contact /></ProtectedRoute>,
// //                 },
// //             ]
// //         }
// //     ]);

// //     return (
// //         <>
// //             <RouterProvider router={router} />
// //             <Toaster />
// //         </>
// //     );
// // }

// export default App;

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

