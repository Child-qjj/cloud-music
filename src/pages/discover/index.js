import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from "@/common/local-data";

import { 
    DiscoverWrapper,
    TopMenu
 } from "./style";

export default memo(function QJDiscover( props ) {

    const { route } = props ; 
    return (
        <Fragment>
            <DiscoverWrapper>
                <div className="top wrap-v1">
                    <TopMenu className="menus">
                        {
                            dicoverMenu.map(
                                    (item,index)=>{
                                        return(
                                            <Fragment key = {item.title}>
                                                <li className={item.title}>
                                                    <NavLink to={item.link}><em>{item.title}</em></NavLink>
                                                </li>
                                            </Fragment>
                                        )
                                }
                            )
                        }
                    </TopMenu>
                </div>
            </DiscoverWrapper>
            {renderRoutes(route.routes)}
        </Fragment>
    )
})
