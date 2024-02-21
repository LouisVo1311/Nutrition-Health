import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./FindItems.module.scss";
const cx = classNames.bind(styles)

function FindItems({ data }) {

    return (
        <Link to={data.path} className={cx('items-product-inner')}>
            <img src={data.image} className={cx('items-product__img')} />
            <div className={cx('items-product-label')}>
                <h4 className={cx('items-product__title')}>{data.name_product}</h4>
                <span className={cx('items-product__type')}>{data.sort}</span>
            </div>
        </Link>
    )
}

export default FindItems