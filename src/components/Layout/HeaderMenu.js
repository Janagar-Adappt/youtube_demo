import React from 'react'
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import logo from '../../icons/logo.png'

export const HeaderLogo = [
    {
        icon: <FaIcons.FaBars size={21} />,
        cName: 'header-menu'
    },
    {
        cName: "youtube-logo",
        src: logo
    }
]

export const HeaderInput = [
    {
        icon: <AiIcons.AiOutlineSearch size={22} />
    }
]

export const HeaderVoice = [
    {
        icon: <MdIcons.MdOutlineKeyboardVoice size={25} />,
        cName: "voice-app"
    }
];


export const HeaderMenu = [
    {
        icon: <MdIcons.MdVideoCall size={25} />,
    },
    {
        icon: <MdIcons.MdApps size={25} />,
    },
    {
        icon: <AiIcons.AiFillBell size={25} />,
    },
    {
        cName: "menu-channel-icon",
        src: "http:///unsplash.it/36/36?gravity=center"
    }
]