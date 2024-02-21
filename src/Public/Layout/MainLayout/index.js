import classNames from "classnames/bind";

// Styles
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles)


function MainLayout({ children }) {
    return ( 
        <div className={cx('app')}>
            {/* Header */}
            <Header />

            {/* Container */}
            <div className="Container">
                {children}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default MainLayout;