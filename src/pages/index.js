import React from 'react';
import 'antd/dist/antd.css';
import style from './index.css';
import { Layout, Breadcrumb } from 'antd';
import HeaderLayout from '@/components/HomePage/header';

export default function() {
  const { Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <HeaderLayout />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={style.content}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}
