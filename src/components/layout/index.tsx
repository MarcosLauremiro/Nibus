import React, { useContext, useEffect } from 'react';
import { Layout } from 'antd';
import { SideComponent } from './side';
import { HeaderComponent } from './header';
import { AuthContext } from '../../provider/AuthContext';
import { CompanyContext } from '../../provider/CompanyContext';

const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  const {loginSession} = useContext(AuthContext)
  const {getCompany} = useContext(CompanyContext)

  useEffect(() => {
    loginSession ()
    getCompany()
  },[])

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