import React, { memo , Fragment } from 'react'

//
import { footerLogos , footerLinks } from "@/common/local-data";


//
import { 
    FooterLeft,
    FooterRight,
    FooterWrapper
} from "./style";

export default memo(function QJAppFooter() {
    return (
        <FooterWrapper>
            <div className="wrap-v2 content">
            <FooterLeft className="left">
                <p className="link">
                    {
                        footerLinks.map((item,index)=>{
                            return(
                                <Fragment key={item.title}>
                                    <a href={item.link} target="_blank" className="item s-fc4" rel="noopener noreferrer">{item.title}</a>
                                    <span className="line">|</span> 
                                </Fragment>
                            )
                        })
                    }
                </p>
                <p className="right s-fc3">
                    <span className="sep span">网易公司版权所有©1997-2020</span>
                    <span className="span">杭州乐读科技有限公司运营：</span>
                    <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" className="alink s-fc3" rel="noopener noreferrer">浙网文[2018]3506-263号</a>
                </p>
                <p className="contact s-fc3">
                    <span className="sep span">违法和不良信息举报电话：0571-89853516</span>
                    <span className="span">举报邮箱：</span>
                    <a className="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
                </p>
                <p className="right s-fc3">
                    <span className="sep span">粤B2-20090191-18</span>
                    <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className="alink s-fc3">工业和信息化部备案管理系统网站</a>
                </p>
            </FooterLeft>
            <FooterRight className="right">
                {
                    footerLogos.map((unit,index)=>{
                       return(
                            <Fragment key={unit.name}>
                                <li className="unit">
                                    <a href={unit.link} className={ "logo "+unit.name } target="_blank" rel="noopener noreferrer">Logo</a>
                                    <span className={ "text "+unit.tt }></span>
                                </li>
                            </Fragment>
                       )
                    })
                }
            </FooterRight>
            </div>
        </FooterWrapper>
    )
})
