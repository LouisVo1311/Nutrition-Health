import { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// Styles
import styles from './News.module.scss';

const cx = classNames.bind(styles);

function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then((res) => res.json())
            .then((res) => {
                setNews(res);
        })
    }, [])

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoSpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
    }; 

    return ( 
        <Slider {...settings}>
            {news.map(post => (
                <div className={cx('slider-items')} key={post.id}>
                    <div className={cx('news-inner')}>
                        <div className={cx('news-items-head')}>
                            <img src={post.image} className={cx('news-items__img')}/>
                        </div>
                        <div key={post.id} className={cx('news-items-body')}>
                            <div className={cx('news-items__current')}>
                                <FontAwesomeIcon icon={faCalendarAlt} className={cx('slider-title__icon')} />
                                <span className={cx('news-items__time')}>{post.time_upload}</span>
                            </div>
                            <Link to={post.path} className={cx('news-items-title')}>{post.title_news}</Link>
                            <p className={cx('news-items-conent')}>{post.content_new}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default News;