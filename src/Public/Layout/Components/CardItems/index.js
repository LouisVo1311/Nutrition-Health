import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import classNames from "classnames/bind";

// Styles
import Buttons from "../Buttons";
import styles from './CardItems.module.scss';

const cx = classNames.bind(styles);

function CardItems() {
    const [valueVF, setValueVF] = useState([])
    const [valueFM, setValueFM] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/fishMeat')
            .then((res) => res.json())
            .then((res) => {
                setValueFM(res);
            })

        fetch('http://localhost:3000/vegefruits')
            .then((res) => res.json())
            .then((res) => {
                setValueVF(res);
            })
    }, [])

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoSpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return (
        <Slider {...settings}>
            {valueVF.map(VF => (
                <div className={cx('slider-items')} key={VF.id}>
                    <div className={cx('items-product-inner')}>
                        <img src={VF.image} className={cx('items-product__img')} />
                        <div className={cx('items-product-label')}>
                            <h4 className={cx('items-product__title')}>{VF.name_product}</h4>
                            <span className={cx('items-product__type')}>{VF.sort}</span>
                        </div>
                        <div className={cx('items-product-interactive')}>
                            <Buttons interactice>
                                <FontAwesomeIcon icon={faHeart} className={cx('items-product__icon')} />
                            </Buttons>
                            <Buttons interactice to={VF.path} className={cx('interactive-icon')}>
                                <FontAwesomeIcon icon={faSearch} className={cx('items-product__icon', 'items-product__search')} />
                            </Buttons>
                        </div>
                    </div>
                </div>
            ))}
            {valueFM.map(FM => (
                <div className={cx('slider-items')} key={FM.id}>
                    <div className={cx('items-product-inner')}>
                        <img src={FM.image} className={cx('items-product__img')} />
                        <div className={cx('items-product-label')}>
                            <h4 className={cx('items-product__title')}>{FM.name_product}</h4>
                            <span className={cx('items-product__type')}>{FM.sort}</span>
                        </div>
                        <div className={cx('items-product-interactive')}>
                            <Buttons interactice>
                                <FontAwesomeIcon icon={faHeart} className={cx('items-product__icon')} />
                            </Buttons>
                            <Buttons interactice to={FM.path} className={cx('interactive-icon')}>
                                <FontAwesomeIcon icon={faSearch} className={cx('items-product__icon', 'items-product__search')} />
                            </Buttons>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default CardItems;