import React from 'react'
import './Sidebar.css'

import { SidebarMenu, LibraryMenu, MoreMenu, MoreMenus } from "./SidebarMenu";

const Sidebar = () => {
    return (
        <div className="side-bar">
            <ul>
                {SidebarMenu.map((item, index) => {
                    return (
                        <li className={item.cName} key={index} >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <ul>
                {LibraryMenu.map((item, index) => {
                    return (
                        <li className={item.cName} key={index} >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <ul>
                {MoreMenu.map((item, index) => {
                    return (
                        <li className={item.cName} key={index} >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <ul>
                {MoreMenus.map((item, index) => {
                    return (
                        <li className={item.cName} key={index} >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <hr />

        </div>
    )
}

export default Sidebar