// import AppLayout from "./components/layout/AppLayOut";
// import Home from "./components/pages/Home";

// const App = () => {
//     return (
//         <AppLayout>
//             <Home />
//         </AppLayout>
//     );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'icofont/dist/icofont.min.css';
import AppLayout from "./components/layout/AppLayOut";
import Home from "./components/pages/Home";
// import About from "./components/pages/";
// import Doctors from "./components/pages/Doctors";
import Services from "./components/pages/Service";
import Contact from "./components/pages/Contact.jsx";
import Login from "./components/pages/Login.jsx";
import Registration from "./components/pages/Registration.jsx";
// import Blogs from "./pages/Blogs";

const App = () => {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctors />} /> */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration " element={<Registration />} />

                    {/* <Route path="/blogs" element={<Blogs />} /> */}
                </Routes>
            </AppLayout>
        </Router>
    );
};

export default App;
