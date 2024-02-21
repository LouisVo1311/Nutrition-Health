import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

// Styles
import styles from "./Banner.module.scss"

const cx = classNames.bind(styles);

function Banner({ banners }) {
    return ( 
        <div className={cx('banner-wrap')}>
            <img src={banners.image} className={cx('banner-wrap-image')}/>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={cx('banner-info')}>
                            <h4 className={cx('banner-info__content')}>{banners.banner_content}</h4>
                            <h3 className={cx('banner-info__title')}>{banners.banner_title}</h3>
                        </div>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </Container>
        </div>
     );
}

export default Banner;