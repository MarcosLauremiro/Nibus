import React from 'react';
import { Layout } from 'antd';
import { SideComponent } from './side';
import { HeaderComponent } from './header';

const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Layout>
      <SideComponent />
      <Layout className='bg-slate-200'>
        <HeaderComponent />
        <Content
          className='ml-[20px] bg-white'
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};