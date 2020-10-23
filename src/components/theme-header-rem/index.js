import React, { Fragment, memo } from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'


import { 
    HeaderWrapper,
 } from './style'

const QJThemeHeaderR =  memo(function (props) {

    const { title , keywords = [] , url} = props;

    let tab;
     if (keywords.length === 0) {
        tab =  undefined
    }
    else {
        tab = (
            <div className="keyword">
                {
                    keywords.map((item,index)=>{
                        return (
                            <Fragment key={item.link}>
                                <NavLink to={item.link} className="s-fc3" >{item.title}</NavLink>
                                <span className="line">|</span>
                            </Fragment>
                        )
                    })
                }
            </div>
        ) 
    }

    return (
        <HeaderWrapper className="sprite_03">
            <div className="left">
                <NavLink to={url} className="title">{title}</NavLink>
                {tab}
            </div>
            <span className="more">
                <NavLink to={url}>更多</NavLink>
                <i className="sprite_03 bg">&nbsp;</i>
            </span>
        </HeaderWrapper>
    )
})

QJThemeHeaderR.propTypes={
    title:PropTypes.string.isRequired,
    keywords:PropTypes.array,
    url:PropTypes.string.isRequired
}
QJThemeHeaderR.defaultProps ={
    keywords : [] 
}

export default QJThemeHeaderR ;