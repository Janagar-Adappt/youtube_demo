import React from 'react'
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

export const SidebarMenu = [
    {
        title: 'Home',
        icon: <MdIcons.MdHome size={25} />,
        cName: 'menu-item current',
    },
    {
        title: 'Explore',
        icon: <MdIcons.MdOutlineExplore size={23} />,
        cName: 'menu-item'
    },
    {
        title: 'Shorts',
        icon: <MdIcons.MdBackupTable size={23} />,
        cName: 'menu-item'
    },
    {
        title: 'Subscriptions',
        icon: <MdIcons.MdOutlineSubscriptions size={24} />,
        cName: 'menu-item'
    },
]

export const LibraryMenu = [
    {
        title: 'Library',
        icon: <MdIcons.MdOutlineVideoLibrary size={24} />,
        cName: 'menu-item',
    },
    {
        title: 'History',
        icon: <MdIcons.MdHistory size={24} />,
        cName: 'menu-item'
    },
    {
        title: 'Your videos',
        icon: <MdIcons.MdOndemandVideo size={24} />,
        cName: 'menu-item'
    },
    {
        title: 'Watch later',
        icon: <MdIcons.MdOutlineWatchLater size={24} />,
        cName: 'menu-item'
    },
    {
        title: 'Liked videos',
        icon: <AiIcons.AiOutlineLike size={24} />,
        cName: 'menu-item'
    },
    {
        title: 'Show more',
        icon: <MdIcons.MdOutlineExpandMore size={24} />,
        cName: 'menu-item'
    },
]

export const MoreMenu = [
    {
        title: 'Youtube Premium',
        icon: <AiIcons.AiOutlineYoutube size={23} />,
        cName: 'menu-item'
    },
    {
        title: 'Live',
        icon: <FiIcons.FiRadio size={24} />,
        cName: 'menu-item'
    },
]

export const MoreMenus = [
    {
        title: 'Settings',
        icon: <AiIcons.AiOutlineSetting size={23} />,
        cName: 'menu-item'
    },
    {
        title: 'Report history',
        icon: <RiIcons.RiFlagLine size={20} />,
        cName: 'menu-item'
    },
    {
        title: 'Help',
        icon: <FiIcons.FiHelpCircle size={20} />,
        cName: 'menu-item'
    },
]