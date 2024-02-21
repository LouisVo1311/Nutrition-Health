import { Fragment } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// Styles
import styles from "./Introduce.module.scss";
import { Banner } from "../../Public/Layout";
const cx = classNames.bind(styles)

const banners = { image: 'https://preetheme.com/liton/vegita/assets/img/banner/page.jpg', banner_content: 'Wellcome To Vegita', banner_title: 'Giới Thiệu' }

function Introduce({ index }) {
    return (
        <Fragment>
            {/* Banner Introduce */}
            <Banner key={index} banners={banners} />

            {/* Navigation Pages */}
            <section className={cx('navigation-block')}>
                <Container>
                    <Row>
                        <Nav className={cx('navigation-list')}>
                            <li className={cx('navigation-items')}>
                                <Link to="/" className={cx('navigation__link')}>Trang chủ</Link>
                                <FontAwesomeIcon icon={faAngleRight} className={cx('navigation__icon')} />
                            </li>
                            <li className={cx('navigation-items')}>
                                <Link to="/introduce" className={cx('navigation__link')}>Giới Thiệu</Link>
                            </li>
                        </Nav>
                    </Row>
                </Container>
            </section>

            {/* Message Introduce */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={cx('message-intro')}>
                            <div className={cx('message-intro-title')}>
                                <h1>LỜI GIỚI THIỆU</h1>
                            </div>
                            <div className={cx('message-intro-message')}>
                                <p>
                                    Ngày nay, chất lượng cuộc sống đã được cải thiện, nhu cầu về thực phẩm dinh dưỡng để chăm sóc sức khoẻ ngày càng tăng cao và được chú trọng hơn. Tuy nhiên chất lượng cuộc sống nâng cao khiến khẩu phần ăn, chế độ dinh dưỡng của người Việt có nhiều thay đổi tích cực. Nhưng, trong thời gian gần đây nhiều loại bệnh đang có xu hướng gia tăng như ung thư phổi, cao huyết áp, tiểu đường… đáng buồn hơn là những căn bệnh này cũng có xu hướng trẻ hóa.
                                    Theo đó, thói quen ăn uống sai lầm chiếm tới 30% nguyên nhân gây ra những căn bệnh trên là do quỹ thời gian eo hẹp cũng làm phát sinh các vấn đề thói quen chuộng thức ăn nhanh, tiềm ẩn nhiều nguy cơ mất an toàn vệ sinh thực phẩm, không rõ nguồn gốc và dễ gây ra các bệnh cấp tính nguy hiểm cho con người.
                                </p>
                                <p>
                                    Vì thế mà phần mềm này sẽ giúp cho việc đáp ứng được nhu cầu an toàn sức khoẻ dinh dưỡng của người dùng thông qua việc tìm kiếm, tra cứu và tham khảo các bài viết về các thực phẩm tươi sạch tốt cho người bệnh, những người chú trọng về dinh dưỡng sức khoẻ một cách dễ dàng và dễ dùng.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Introduce;