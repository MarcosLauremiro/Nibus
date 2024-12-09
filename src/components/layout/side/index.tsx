import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { Logo } from '../../logo';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleCollapsed } from '../../../store/collapsed/CollapsedSlice';
import type { MenuProps } from 'antd';
import {
  PlusCircleOutlined,
  TruckOutlined,
  AppstoreOutlined,
  DollarOutlined,
  DiffOutlined,
  TeamOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type: 'item',
  } as MenuItem;
}

const iconSize:object = {fontSize: "20px"}

const menuItems: MenuItem[] = [
  getItem('Dashboard', '1', <AppstoreOutlined style={iconSize}/>),
  getItem('Emissões', '2', <PlusCircleOutlined style={iconSize}/>, [
    getItem('Emitir CTe', '2.1'),
    getItem('Emitir MDFe', '2.2'),
    getItem('Emitir Contrato', '2.3'),
  ]),
  getItem('Documentos', '3', <DiffOutlined style={iconSize}/>, [
    getItem('Listar CTe', '3.1'),
    getItem('Listar MDFe', '3.2'),
    getItem('Emitir Contratos', '3.3'),
  ]),
  getItem('Financeiro', '4', <DollarOutlined style={iconSize}/>, [
    getItem('Receitas', '4.1'),
    getItem('Despesas', '4.2'),
    getItem('Relatórios', '4.3'),
  ]),
  getItem('Envolvidos', '5', <TeamOutlined style={iconSize}/>, [
    getItem('Listar Envolvidos', '5.1'),
    getItem('Novo Envolvido', '5.2'),
  ]),
  getItem('Veículos', '6', <TruckOutlined style={iconSize}/>, [
    getItem('Listar Veículos', '6.1'),
    getItem('Novos Veículos', '6.2'),
  ]),
];

const plataformaItems: MenuItem[] = [
  getItem('Suporte', '7', <AppstoreOutlined />),
  getItem('Configurações', '8', <AppstoreOutlined />),
];

export const SideComponent: React.FC = () => {
  const collapsed = useSelector((state: RootState) => state.collapseSlice.isCollapsed);
  const dispatch = useDispatch();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => dispatch(toggleCollapsed())}>
      <div className="demo-logo-vertical flex items-center justify-center" />
      <Logo />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.ItemGroup key="menu" title="Menu">
          {menuItems.map((item) =>
            item ? (
              'icon' in item ? (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ) : null) : null
          )}
        </Menu.ItemGroup>
        <Menu.ItemGroup key="plataforma" title="Plataforma">
          {plataformaItems.map((item) => (
            item ? (
              'icon' in item ? (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ) : null
            ) : null
          ))}
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};
