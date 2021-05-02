import { Menu } from 'antd'
import {HomeOutlined, PictureOutlined, VideoCameraAddOutlined} from '@ant-design/icons'
import React from 'react'

export default function Navigation() {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <HomeOutlined style={{fontSize:"1.5rem", color:"grey"}} />
            </Menu.Item>
            <Menu.Item>
                <PictureOutlined style={{fontSize:"1.5rem", color:"grey"}}/>
            </Menu.Item>
            <Menu.Item>
            <VideoCameraAddOutlined style={{fontSize:"1.5rem", color:"grey"}} />
            </Menu.Item>
        </Menu>

    )
}
