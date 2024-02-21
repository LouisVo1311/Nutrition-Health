import classNames from 'classnames/bind'

// Styles
import styles from './ProductDetail.module.scss'
const cx = classNames.bind(styles)


function ProductDetail({ data }) {
    return (
        <div className={cx('product-items')}>
            <img src={data.image} className={cx('product-items__img')} />
            <div className={cx('product-info')}>
                <div className={cx('product-detail-head')}>
                    <h4 className={cx('product__title')}>{data.name_product}</h4>
                    <span className={cx('product__type')}>{data.sort}</span>
                </div>
                <div className={cx('product-detail-body')}>
                    <p className={cx('product-detail__content')}>{data.content}</p>
                    <div className={cx('product-detail__content')}>
                        <span className={cx('content__label')}>Tác dụng:</span>
                        <span className={cx('content__text')}>{data.uses}</span>
                    </div>
                </div>
                <div className={cx('product-detail-foot')}>
                    <h2 className={cx('foot-title')}>Thông tin dinh dưỡng</h2>
                    <li className={cx('foot-items')}>
                        <span className={cx('foot-items__label')}>Giá trị dinh dưỡng</span>
                        <span className={cx('foot-items__text')} > {data.value_nutritions}</span>
                    </li>
                    <li className={cx('foot-items')}>
                        <span className={cx('foot-items__label')}>Calories (kcal)</span>
                        <span className={cx('foot-items__text')}>{data.calories}</span>
                    </li>
                    <li className={cx('foot-items')}>
                        <span className={cx('foot-items__label')}>Lipid</span>
                        <span className={cx('foot-items__text')}>{data.lipid}</span>
                    </li>
                    <li className={cx('foot-items')}>
                        <span className={cx('foot-items__label')}>Protein</span>
                        <span className={cx('foot-items__text')}>{data.protein}</span>
                    </li>
                    <li className={cx('foot-items')}>
                        <span className={cx('foot-items__label')}>Vitamin C</span>
                        <span className={cx('foot-items__text')}>{data.vitaminC}</span>
                    </li>
                    <li className={cx('foot-items')}>
                        <span className={cx('foot-items__label')}>Vitamin B</span>
                        <span className={cx('foot-items__text')}>{data.vitaminB}</span>
                    </li>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail