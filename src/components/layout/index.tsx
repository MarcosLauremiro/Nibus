import React from 'react';
import { Layout, theme } from 'antd';
import { SideComponent } from './side';
import { HeaderComponent } from './header';

const { Header, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();



  return (
    <Layout>
      <SideComponent/>
      <Layout>
        <HeaderComponent />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};