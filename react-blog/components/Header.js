import React from 'react'
import {Row, Col, Menu, Icon} from 'antd'

import '../static/style/components/header.css'

const Header = () => (
    <div className="header">
        {/* type to disable flex */}
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">Ryan Zeng</span>
                <span className="header-txt">I dont like PHP.</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <Icon type="youtube" />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="smile" />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header