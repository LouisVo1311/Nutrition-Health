import { Fragment, useEffect, useState, useRef } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars, faCircleXmark, faRightLong, faSpinner, faTh } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./FM.module.scss";
import { Banner, ProductDetail } from "../../Public/Layout";
import { useDebounce } from "../../hooks";

const cx = classNames.bind(styles);

const banners = { image: 'https://preetheme.com/liton/vegita/assets/img/banner/page.jpg', banner_content: 'Wellcome To Vegita', banner_title: 'Fish & Meat - Fresh' }

function FM({ index }) {
    const [products, setProducts] = useState([])
    const [start, setStart] = useState(false)
    const [showF, setShowF] = useState(false)
    const [showM, setShowM] = useState(false)
    const [showsearchdetail, setShowSearchDetail] = useState(false)
    const [showdetail, setShowDetail] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)


    const debounced = useDebounce(searchValue, 800)

    useEffect(() => {
        fetch('http://localhost:3000/fishMeat')
            .then(res => res.json())
            .then(res => setProducts(res))

        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true)

        fetch(`http://localhost:3000/fishMeat?cb=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [debounced])

    const render = () => {
        return products.map(product => (
            <Col md={4}>
                <div key={product.id} className={cx('product-items')}>
                    <img src={product.image} className={cx('product-items__img')} />
                    <div className={cx('product-info')}>
                        <h4 className={cx('product__title')}>{product.name_product}</h4>
                        <span className={cx('product__type')}>{product.sort}</span>
                    </div>
                </div>
            </Col>
        )
        )
    }

    const renderF = () => {
        return products.map(product => {
            if (product.sort === "Cá tươi") {
                return <Col md={4}>
                    <div key={product.id} className={cx('product-items')}>
                        <img src={product.image} className={cx('product-items__img')} />
                        <div className={cx('product-info')}>
                            <h4 className={cx('product__title')}>{product.name_product}</h4>
                            <span className={cx('product__type')}>{product.sort}</span>
                        </div>
                    </div>
                </Col>
            }
        })
    }

    const renderM = () => {
        return products.map(product => {
            if (product.sort === "Thịt tươi") {
                return <Col md={4}>
                    <div key={product.id} className={cx('product-items')}>
                        <img src={product.image} className={cx('product-items__img')} />
                        <div className={cx('product-info')}>
                            <h4 className={cx('product__title')}>{product.name_product}</h4>
                            <span className={cx('product__type')}>{product.sort}</span>
                        </div>
                    </div>
                </Col>
            }
        })
    }

    const handleFilter = () => {
        setStart(() => !start)
        if (showF) {
            setStart(() => !start)
            setShowF(() => !showF)
        } else if (showM) {
            setStart(() => !start)
            setShowM(() => !showM)
        } else if (showdetail, showsearchdetail) {
            setStart(() => !start)
            setShowSearchDetail(() => !showsearchdetail)
            setShowDetail(() => !showdetail)
        }
    }

    const handleDetail = () => {
        if (!start) {
            setStart(() => !start)
        } else if (showF) {
            setShowF(() => !showF)
        } else if (showM) {
            setShowM(() => !showM)
        }

        setShowSearchDetail(() => !showsearchdetail)
        setShowDetail(() => !showdetail)
    }

    const handleClickF = () => {
        if (!start) {
            setStart(() => !start)
            setShowF(() => !showF)
        } else if (showF) {
            setShowF(() => showF)
        } else if (showM) {
            setShowM(() => !showM)
            setShowF(() => !showF)
        }
    }

    const handleClickM = () => {
        if (!start) {
            setStart(() => !start)
            setShowM(() => !showM)
        } else if (showM) {
            setShowM(() => showM)
        } else if (showF) {
            setShowF(() => !showF)
            setShowM(() => !showM)
        }
    }

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    return (
        <Fragment>

            {/* Banner */}
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
                                <Link to="/" className={cx('navigation__link')}>Products</Link>
                                <FontAwesomeIcon icon={faAngleRight} className={cx('navigation__icon')} />
                            </li>
                            <li className={cx('navigation-items')}>
                                <Link to="/fime" className={cx('navigation__link')}>Fish & Meat - Fresh</Link>
                            </li>
                        </Nav>
                    </Row>
                </Container>
            </section>

            {/* Filter Product */}
            <section className={cx('filter')}>
                <Container>
                    <Row>
                        <Col md={4}>
                        </Col>
                        <Col md={8}>
                            <div className={cx('filter-section')}>
                                {/* Filter */}
                                <ul className={cx('filter-list')}>
                                    <li className={cx('filter-items')} onClick={handleFilter}>
                                        <FontAwesomeIcon icon={faTh} className={cx('filter__icon')} />
                                    </li>
                                    <li className={cx('filter-items')} onClick={handleDetail}>
                                        <span className={cx('filter__title')}> Gợi ý chi tiết sản phẩm dành cho người bệnh</span>
                                    </li>
                                </ul>

                                {/* Search for Disease */}
                                <ul className={cx('search-disease')}>
                                    {showsearchdetail &&
                                        <input
                                            placeholder="Nhập căn bệnh..."
                                            value={searchValue}
                                            spellCheck={false}
                                            ref={inputRef}
                                            onChange={handleChange}
                                            className={cx('search__input-disease')} />
                                    }
                                    {!!searchValue && !loading &&
                                        (<button className={cx('clear')} onClick={handleClear}>
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                        )}

                                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('icon__load')} />}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Products */}
            <section className={cx('products')}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className={cx('category-menu')}>
                                <Navbar.Brand className={cx('cate-menu-head')}>
                                    <h2 className={cx('cate-menu__title')}>
                                        <FontAwesomeIcon icon={faBars} className={cx('cate-title__icon')} />All - Departments
                                    </h2>
                                </Navbar.Brand>
                                <Navbar collapseOnSelect expand="lg" className={cx('cate-menu-wrap')}>
                                    <Navbar.Collapse id="responsive-navbar-nav" className={cx('cate-menu-body')}>
                                        <ul className={cx('cate-menu-list')}>
                                            <li className={cx('cate-menu-items')} onClick={handleClickF}>
                                                <span className={cx('cate-menu__text')} >Cá tươi</span>
                                                <FontAwesomeIcon icon={faRightLong} className={cx('cate-link__icon')} />
                                            </li>
                                            <li className={cx('cate-menu-items')} onClick={handleClickM}>
                                                <span className={cx('cate-menu__text')} >Thịt tươi</span>
                                                <FontAwesomeIcon icon={faRightLong} className={cx('cate-link__icon')} />
                                            </li>
                                        </ul>
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                        </Col>

                        <Col md={8}>
                            <div className={cx('product-nav')}>
                                {!start && render()}
                                {showF && renderF()}
                                {showM && renderM()}

                                {showdetail && searchResult.length > 0 && (
                                    <Fragment>
                                        {searchResult.map(result => (
                                            <ProductDetail key={result.id} data={result} />
                                        ))}
                                    </Fragment>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default FM;