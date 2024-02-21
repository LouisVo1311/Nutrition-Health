// Library
import { useEffect, useState, Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

// Styles
import { Buttons, CardItems, News } from "../../Public/Layout";
import Header from "../../Public/Layout/Components/Header";
import styles from './Home.module.scss';
const cx = classNames.bind(styles);


function Home() {
    const [sliders, setSlider] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/slider')
            .then((res) => res.json())
            .then((res) => {
                setSlider(res);
            })
    }, [])

    const renderSlider = () => {
        return sliders.map(slider => (
            <div className={cx('slider-items')} key={slider.id}>
                <div className={cx('slider-image')}>
                    <img src={slider.image} className={cx('slider__img')} />
                </div>
                <div className={cx('slider-content')}>
                    <p className={cx('slider-content__title')}>{slider.titleBrand}
                    </p>
                    <Buttons size_M after_M before_M primary span__text>{slider.nameBtn}</Buttons>
                </div>
            </div>
        ))
    }

    // Slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoSpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Fragment>

            {/* Slider Intro */}
            <section className={cx('intro')}>
                <Container fluid="lg">
                    <Row>
                        <Col lg={12}>
                            <section className={cx('slider')}>
                                <Slider {...settings}>
                                    {renderSlider()}
                                </Slider>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Items Intro */}
            <section className={cx('items-product')}>
                <Container fluid="lg">
                    <Row>
                        <Col lg={12}>
                            <div className={cx('items-intro')}>
                                <div className={cx('items-intro-tiltle')}>
                                    <h2 className={cx('slider-title__text')}>Fresh Products</h2>
                                    <FontAwesomeIcon icon={faLeaf} className={cx('slider-title__icon')} />
                                </div>
                                <CardItems />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Banner */}
            <section className={cx('banner')}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={cx('banner-content')}>
                                <h3 className={cx('banner-content__title')}>Bạn muốn biết một ngày
                                    <br />
                                    ăn bao nhiêu là đủ chất?
                                </h3>
                                <Buttons size_L primary after_L before_L span__text>Tìm hiểu nhanh</Buttons>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact */}
            <section className={cx('contact')}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={cx('contact-content')}>
                                <h4 className={cx('contact-content__title')}>Any Have A Question
                                </h4>
                                <h3 className={cx('contact-content__phone')}> +84 938656258
                                </h3>
                                <Buttons size_M after_M before_M primary span__text>Calling...</Buttons>{' MAKE A CALL'}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* News */}
            <section className={cx('news')}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={cx('items-new')}>
                                <div className={cx('new-tiltle')}>
                                    <h2 className={cx('slider-title__text')}>Blog Dinh Dưỡng</h2>
                                    <FontAwesomeIcon icon={faLeaf} className={cx('slider-title__icon')} />
                                </div>
                                <News />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default Home;
