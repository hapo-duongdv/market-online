import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Layout } from 'antd';
import style from './header.css';
import logo from '../../assets/transparent_logo.png';
import {
  HomeOutlined,
  UserOutlined,
  CommentOutlined,
  EllipsisOutlined,
  BellOutlined,
} from '@ant-design/icons';

const HeaderLayout = props => {
  const { Header } = Layout;
  return (
    <Header className={style.header}>
      <Row>
        <Col span={12} offset={6}>
          <Row>
            <Col span={4}>
              <img className={style.logo} src={logo} alt="Chợ tốt" />
            </Col>
            <Col span={20}>
              <Row>
                <Col span={3} offset={1}>
                  <HomeOutlined style={{ fontSize: '20px' }} />
                  <span>Trang chủ</span>
                </Col>
                <Col span={3} offset={1}>
                  <UserOutlined style={{ fontSize: '20px' }} />
                  <span>Tôi bán</span>
                </Col>
                <Col span={3} offset={1}>
                  <CommentOutlined style={{ fontSize: '20px' }} />
                  <span>Chat</span>
                </Col>
                <Col span={3} offset={1}>
                  <BellOutlined style={{ fontSize: '20px' }} />
                  <span>Trò chuyện</span>
                </Col>
                <Col span={3} offset={1}>
                  <EllipsisOutlined style={{ fontSize: '20px' }} />
                  <span>Thêm</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={12} offset={6}>
          search
        </Col>
      </Row>
    </Header>
  );
};
export default HeaderLayout;
