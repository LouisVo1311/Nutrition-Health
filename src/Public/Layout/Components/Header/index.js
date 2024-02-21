import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Styles
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            {/* Header Info */}
            <Container fluid="lg">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={cx('header-info')}>
                    <Navbar.Collapse id="responsive-navbar-nav" className={cx('header-nav-info')}>
                        <Nav className="ml-auto">
                            <Tippy content="Email" placement="bottom-end">
                                <Nav.Link href="" className={cx('nav-info__items')}>
                                    <FontAwesomeIcon icon={faLocationDot} className={cx('nav-info__icon')} />
                                    <span className={cx('nav-info__text')}>phattaipch9b4@gmail.com</span>
                                </Nav.Link>
                            </Tippy>
                            <Tippy content="Location" placement="right">
                                <Nav.Link href="" className={cx('nav-link', 'nav-info__items')}>
                                    <FontAwesomeIcon icon={faLocationDot} className={cx('nav-info__icon')} />
                                    <span className={cx('nav-info__text')}>Tân Bình, TPHCM</span>
                                </Nav.Link>
                            </Tippy>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link href="" className={cx('nav-info__text')}>Đăng ký</Nav.Link>
                            <Nav className={cx('nav-info__text', 'text-mar')}> | </Nav>
                            <Nav.Link href="" className={cx('nav-info__text')}>Đăng nhập</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            {/* Header Navigation */}
            <Container fluid="lg">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={cx('header-navigation')}>
                    <Navbar.Brand className={cx('header-nav-logo')}>
                        <Tippy content="Trang chủ Vegita" placement="right">
                            <Link to="/">
                                <img src="https://preetheme.com/liton/vegita/assets/img/logo.png" />
                            </Link>
                        </Tippy>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={cx('header-nav-menu')}>
                        <Nav class={cx('nav-menu__list')}>
                            <Nav>
                                <Link to="/introduce" className={cx('nav-menu-page__title')}>Giới thiệu</Link>
                            </Nav>
                            <Nav>
                                <HeadlessTippy interactive
                                    placement="bottom-start"
                                    render={attrs => (
                                        <div className={cx('type-products')} tabIndex="-1" {...attrs}>
                                            <Nav className={cx('type-products-nav')}>
                                                <li className={cx('type-products__items')}>
                                                    <Link to="/vefr" className={cx('type-products__link')}>Vegetable & Fruits - Fresh (Rau củ quả tươi)</Link>
                                                </li>
                                                <li className={cx('type-products__items')}>
                                                    <Link to="/fime" className={cx('type-products__link')}>Fish & Meat - Fresh (Thịt cá tươi)</Link>
                                                </li>
                                            </Nav>
                                        </div>
                                    )}
                                >
                                    <div className={cx('nav-menu-page__title')}>Dành Cho Người Bệnh</div>
                                </HeadlessTippy>
                            </Nav>
                            <Nav>
                                <Link to="/blog" className={cx('nav-menu-page__title')}>Blog Dinh Dưỡng</Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                    {/* <Navbar.Brand className={cx('header-search-nav')}>
                        <Search />
                    </Navbar.Brand> */}
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;