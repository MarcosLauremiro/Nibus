import React from 'react';
import { AppstoreOutlined, CustomerServiceOutlined, DollarOutlined, FilePdfOutlined, PlusCircleOutlined, SettingOutlined, TeamOutlined, TruckOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Flex, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleCollapsed } from '../../../store/collapsed/CollapsedSlice';
import { Logo, LogoSlim } from '../../logo';
import { DropdownEmitirDocumentComponent } from '../../button/dropdownEmitirDocument';
import { MenuUnfold } from '../../../utils/icons/MenuUnfold';
import { MenuOutfold } from '../../../utils/icons/MenuOutfold';

type MenuItem = Required<MenuProps>['items'][number];

const iconSize: object = { fontSize: "20px" }

const items: MenuItem[] = [
  {
    key: "gro",
    label: 'Menu',
    type: 'group',
    children: [
      {
        key: 'sub1',
        label: 'Dashboard',
        icon: <AppstoreOutlined style={iconSize} />,
      },
      {
        key: 'sub2',
        label: 'Emissões',
        icon: <PlusCircleOutlined style={iconSize} />,
        children: [
          { key: '5', label: 'Emitir CTe' },
          { key: '6', label: 'Emitir MDFe' },
          { key: '7', label: 'Emitir Contrato' },
        ],
      },
      {
        key: 'sub3',
        label: 'Documentos',
        icon: <FilePdfOutlined style={iconSize} />,
        children: [
          { key: '8', label: 'Listar CTe' },
          { key: '9', label: 'Listar MDFe' },
          { key: '10', label: 'Emitir Contratos' },
        ],
      }, {
        key: 'sub4',
        label: 'Financeiro',
        icon: <DollarOutlined style={iconSize} />,
        children: [
          { key: '11', label: 'Receitas' },
          { key: '12', label: 'Despesas' },
          { key: '13', label: 'Relatórios' },
        ],
      },
      {
        key: 'sub5',
        label: 'Envolvidos',
        icon: <TeamOutlined style={iconSize} />,
        children: [
          { key: '14', label: 'Listar Envolvidos' },
          { key: '15', label: 'Novo Envolvido' },
        ],
      },
      {
        key: 'sub6',
        label: 'Veículos',
        icon: <TruckOutlined style={iconSize} />,
        children: [
          { key: '16', label: 'Listar Veículos' },
          { key: '17', label: 'Novos Veículos' },
        ],
      },
    ]
  },

  {
    key: 'pla',
    label: 'Plataforma',
    type: 'group',
    children: [
      { key: '18', label: 'Suporte', icon: <CustomerServiceOutlined style={iconSize} /> },
      { key: '19', label: 'Configurações', icon: <SettingOutlined style={iconSize} /> },
    ],
  },
];

export const SideComponent: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const collapsed = useSelector((state: RootState) => state.collapseSlice.isCollapsed);
  const dispatch = useDispatch();
  const classButton = collapsed ? 'ml-[-16px] absolute mt-[20px] left-[80px]' : 'ml-[-16px] absolute mt-[20px] left-[240px]';

  return (
    <Sider className='flex flex-col h-screen align-center justify-center' width={240} theme='light' collapsible collapsed={collapsed} onCollapse={() => dispatch(toggleCollapsed())}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfold /> : <MenuOutfold />}
        onClick={() => dispatch(toggleCollapsed())}
        className={`${classButton}`}
      />
      <Flex vertical gap={50} justify='center' align='center' className='mt-[20px]'>
        {collapsed ? <LogoSlim width={44} /> : <Logo />}
        <DropdownEmitirDocumentComponent />
      </Flex>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};