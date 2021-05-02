import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  PictureOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import React from "react";

export default function Navigation() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">
          <HomeOutlined style={{ fontSize: "1.5rem", color: "grey" }} />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/image">
          <PictureOutlined style={{ fontSize: "1.5rem", color: "grey" }} />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/video">
          <VideoCameraAddOutlined
            style={{ fontSize: "1.5rem", color: "grey" }}
          />
        </Link>
      </Menu.Item>
    </Menu>
  );
}
