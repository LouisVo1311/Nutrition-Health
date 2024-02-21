import { Container, Nav, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from './Footer.module.scss'


const cx = classNames.bind(styles)

function Footer() {
    const [copyright, setCopyRight] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/copyright')
            .then(res => res.json())
            .then(res => setCopyRight(res))

    }, [])
    return (
        <section className={cx('footer')}>
            <Container>
                <Row className={cx('footer-flex')}>
                    <Col md={5}>
                        <section className={cx('footer-main')}>
                            <div className={cx('footer__logo')}>
                            </div>
                            <div className={cx('footer-desp')}>
                                <p className={cx('desc__text', 'display-color')}>Vegita sẽ giúp đáp ứng được nhu cầu an toàn sức khoẻ dinh dưỡng của người dùng thông qua việc tìm kiếm, tra cứu và tham khảo các bài viết về các thực phẩm tươi sạch tốt cho người bệnh, những người chú trọng về dinh dưỡng sức khoẻ một cách dễ dàng và dễ dùng.</p>
                            </div>
                            <div>
                                <h3 className={cx('footer-social', 'display-color')}>Follow Us</h3>
                                <Nav>
                                    <li>
                                        <Link className={cx('display-color')}></Link>
                                    </li>
                                    <li>
                                        <Link className={cx('display-color')}></Link>
                                    </li>
                                    <li>
                                        <Link className={cx('display-color')}></Link>
                                    </li>
                                </Nav>
                            </div>
                        </section>
                    </Col>
                    <Col md={2}>
                        <section>
                            <div className={cx('footer-head-title')}>
                                <h3 className={cx('head-title__text')}>Quick Links</h3>
                            </div>
                            <Nav className={cx('footer-body-list')}>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>Trang chủ</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>Giới Thiệu</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>Dành Cho Người Bệnh</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>Blog Dinh Dưỡng</Link>
                                </li>
                            </Nav>
                        </section>
                    </Col>
                    <Col md={2}>
                        <section className={cx('footer-left')}>
                            <div className={cx('footer-head-title')}>
                                <h3 className={cx('head-title__text')}>Categories</h3>
                            </div>
                            <Nav className={cx('footer-body-list')}>
                                <li className={cx('footer-body-items')}>
                                    <Link to="/vefr" className={cx('footer-body__link', 'display-color')}>Vegetable & Fruits - Fresh</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link to="/fime" className={cx('footer-body__link', 'display-color')}>Fish & Meat - Fresh</Link>
                                </li>
                            </Nav>
                        </section>
                    </Col>
                    <Col md={2}>
                        <section className={cx('footer-left')}>
                            <div className={cx('footer-head-title')}>
                                <h3 className={cx('head-title__text')}>Contact Info</h3>
                            </div>
                            <Nav className={cx('footer-body-list')}>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>Ho Chi Minh City - VietNam</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}></Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__social')}>Email:</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>phattaipch9b4@gmail.com</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__social')}>Support:</Link>
                                </li>
                                <li className={cx('footer-body-items')}>
                                    <Link className={cx('footer-body__link', 'display-color')}>+84 938656258</Link>
                                </li>
                            </Nav>
                        </section>
                    </Col>
                </Row>
                <Row className={cx('footer-line')}>
                    <div className={cx('footer-bottom')}>
                        <div className={cx('copyright')}>
                            <h5 className={cx('footer-bottom-co', 'display-color')}>Copyright @2023</h5>{copyright.map(name => (
                                <h5 className={cx('display-color')} key={name.id}>{name.namecopy}</h5>
                            ))}
                        </div>
                        <h5 className={cx('footer-bottom-co', 'display-color')}>Terms & Condition | Privacy | Support</h5>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;