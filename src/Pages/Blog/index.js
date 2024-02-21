import { useEffect, useState, useReducer, useRef } from "react";
import { Fragment } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// Styles
import styles from "./Blog.module.scss";
import { Banner } from "../../Public/Layout";
const cx = classNames.bind(styles)

const banners = { image: 'https://preetheme.com/liton/vegita/assets/img/banner/page.jpg', banner_content: 'Wellcome To Vegita', banner_title: 'Blog Dinh Dưỡng' }

const initState = {
    job: '',
    jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete-job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const reducer = (state, action) => {
    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                job: '',
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)

            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action')
    }
    return newState
}

function Blog({ index }) {
    const [news, setNews] = useState([])
    const [posts, setPosts] = useState([])
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then((res) => res.json())
            .then((res) => {
                setNews(res);
            })

        fetch('http://localhost:3000/posts')
            .then((res) => res.json())
            .then((res) => {
                setPosts(res);
            })
    }, [])

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    const handleClear = () => {
        dispatch(setJob(''))
    }

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
                                <Link to="/blog" className={cx('navigation__link')}>Blog Dinh Dưỡng</Link>
                            </li>
                        </Nav>
                    </Row>
                </Container>
            </section>

            {/* Posts, Comment, News */}
            <section>
                <Container>
                    <Row>

                        {/* Posts */}
                        <Col lg={9}>
                            <section className={cx('posts-news')}>
                                {posts.map((post) => (
                                    <Fragment>
                                        <div className={cx('posts-head')}>
                                            <p className={cx('posts-head__title')}>{post.heading_post}</p>
                                            <p className={cx('posts-head__time')}>{post.time}</p>
                                        </div>
                                        <div className={cx('posts-body')}>
                                            <Fragment>
                                                <p className={cx('posts-body__main-text')}>{post.introduce}</p>
                                                <Row>
                                                    <Col md={4}>
                                                        <p className={cx('posts-body__text')}>{post.introduce_main_1}</p>
                                                    </Col>
                                                    <Col md={8}>
                                                        <img title={post.heading_post} src={post.image_1} width="100%" />
                                                    </Col>
                                                </Row>
                                                <p className={cx('posts-body__text')}>{post.introduce_main_2}</p>
                                            </Fragment>
                                            <h3 className={cx('posts-body__label')}>{post.title_1}</h3>
                                            <Fragment>
                                                <p className={cx('posts-body__text')}>{post.content_main_1}</p>
                                                <p className={cx('posts-body__text')}>{post.content_main_2}</p>
                                                <img title={post.heading_post} src={post.image_2} width="100%" />
                                            </Fragment>
                                            <h3 className={cx('posts-body__label')}>{post.title_2}</h3>
                                            <Fragment>
                                                <h3 className={cx('posts-body__label')}>{post.title_2_1}</h3>
                                                <p className={cx('posts-body__text')}>{post.content_1_a}</p>
                                                <p className={cx('posts-body__text')}>{post.content_1_b}</p>
                                                <p className={cx('posts-body__text')}>{post.content_1_c}</p>
                                            </Fragment>
                                            <Fragment>
                                                <h3 className={cx('posts-body__label')}>{post.title_2_2}</h3>
                                                <p className={cx('posts-body__text')}>{post.content_2_a}</p>
                                                <p className={cx('posts-body__text')}>{post.content_2_b}</p>
                                            </Fragment>
                                            <Fragment>
                                                <h3 className={cx('posts-body__label')}>{post.title_2_3}</h3>
                                                <p className={cx('posts-body__text')}>{post.content_3_a}</p>
                                                <p className={cx('posts-body__text')}>{post.content_3_b}</p>
                                                <p className={cx('posts-body__text')}>{post.content_3_c}</p>
                                            </Fragment>
                                            <fragment>
                                                <h3 className={cx('posts-body__label')}>{post.title_2_4}</h3>
                                                <p className={cx('posts-body__text')}>{post.content_4_a}</p>
                                            </fragment>
                                        </div>
                                    </Fragment>
                                ))}
                            </section>

                            {/* Comments */}
                            <section className={cx('comment')}>
                                <h1>Bình luận</h1>
                                <div className={cx('comment-block')}>
                                    <ul className={cx('comment-list')}>
                                        <li className={cx('comment-items')}>
                                            <span className={cx('comment__text')}>Bài viết thật bổ ích! Cảm ơn page</span>
                                            <FontAwesomeIcon title="Xoá bình luận này" icon={faTrash} className={cx('delete-comment__icon')} />
                                        </li>
                                        {jobs.map((job, index) => (
                                            <li key={index} className={cx('comment-items')}>
                                                <HeadlessTippy
                                                    interactive
                                                    placement="right"

                                                    render={attrs => (
                                                        <FontAwesomeIcon title="Xoá bình luận này" icon={faTrash} className={cx('clear-comment__icon')} onClick={() => dispatch(deleteJob(index))} />
                                                    )}
                                                >
                                                    <span className={cx('comment__text')}>{job}</span>
                                                </HeadlessTippy>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={cx('comment-wrap')}>
                                    <div className={cx('write-comment')}>
                                        <input placeholder="Viết bình luận..." type="text" className={cx('comment__desp')}
                                            value={job}
                                            onChange={(e) => dispatch(setJob(e.target.value))}
                                        />
                                        <div className={cx('upload')}>
                                            <button className={cx('upload__btn-cancel')} onClick={handleClear}
                                            >Huỷ</button>
                                            <button className={cx('upload__btn-up')} onClick={handleSubmit}
                                            >Bình luận</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>

                        {/* News */}
                        <Col lg={3}>
                            <section className={cx('news-wrap')}>
                                <div className={cx('news-head')}>
                                    <h5 className={cx('news-head__title')}>Bài viết mới</h5>
                                    <span className={cx('news-head__line')}></span>
                                </div>
                                <div className={cx('news-body')}>
                                    <Nav className={cx('news-list')}>
                                        {news.map(post => (
                                            <li className={cx('news-body-items')}>
                                                <Link className={cx('news-body__link')} to={post.path}>{post.title_news}</Link>
                                                <span className={cx('news-body__time')}>{post.time_upload}</span>
                                            </li>
                                        ))}
                                    </Nav>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment >
    );
}

export default Blog;