import { Menu, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div``

type MenuItem = Required<MenuProps>['items'][number];

function getMenuItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

export const Header = () => {

    const menuItems = [
        getMenuItem('Flow', 1),
        getMenuItem('Accounts', 2),
        getMenuItem('Transaction', 3),
        getMenuItem('Tools', 4)
    ] 

    return(
        <>
            <Menu items={menuItems} defaultSelectedKeys={['1']} mode="horizontal"/>
        </>
    )
}