import Footer from "./Footer";
import Header from "./Header";
import '../../styles/main.css';
import '../../styles/animate.min.css';
import '../../styles/bootstrap.min.css';
import '../../styles/datepicker.css'
import '../../styles/font-awesome.min.css';
import '../../styles/magnific-popup.css';
import '../../styles/nice-select.css';
import '../../styles/normalize.css';
import '../../styles/owl-carousel.css';
import '../../styles/responsive.css';
import '../../styles/slicknav.min.css';
import '../../styles/icofont.css'

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
