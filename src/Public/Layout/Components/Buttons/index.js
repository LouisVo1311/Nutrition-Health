import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from './Buttons.module.scss'

const cx = classNames.bind(styles)

function Buttons({ to, href, onClick, children, size_S, size_M, size_L, after_M, before_M, after_L, before_L, primary, secondary, third, info, span__text, interactice, borderRadius}) {
    
    const [theme, setTheme] = useState(false)

    const handleClick = () => {
        setTheme(theme => !theme)
    }

    let toggleClassCheck = theme ? 'active' : null;
    
    let Comp = 'button'

    const props = {
        onClick
    }

    const classes = cx('btn', `${toggleClassCheck}`,{
        primary,
        secondary,
        third,
        info,
        size_S,
        size_M,
        size_L,
        after_M, 
        before_M,
        after_L, 
        before_L,
        span__text,
        interactice,
        borderRadius
    })

    if(to) {
        props.to = to
        Comp = Link
    }

    else if (href) {
        props.href = href
        Comp = 'a'
    }

    return ( 
        <Comp className={classes} {...props} onClick={handleClick}>{children}</Comp>
    );
}

export default Buttons;