import React from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/darkmode/darkModeSlice';
import { toggleCollapsed } from '../../store/collapsed/CollapsedSlice';
import { RootState } from '../../store/store';
import { SideComponent } from './side';

const { Header, Content } = Layout;

export const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isdarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  return (
    <Layout>
      <SideComponent/>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={isdarkMode ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => dispatch(toggleCollapsed())}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Button onClick={() => dispatch(toggleDarkMode())}>color</Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};