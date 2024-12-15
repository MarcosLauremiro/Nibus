import React from 'react';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Flex, Space } from 'antd';
import perfil from '../../../assets/perfil.svg';
import { useNavigate } from 'react-router';

export const DropDownPerfilComponent: React.FC = () => {
    const navigate = useNavigate();

    const changeLogout = () => {
        console.log('Logout');
        window.localStorage.clear();
        navigate('/login');

    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Flex vertical>
                    <span>Admin@Nimbus.com.br</span>
                    <span>Banco: 360 - NuBank S.A</span>
                    <span>Agencia: 0001 - Conta 532343-0</span>
                </Flex>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: (
                <button >
                    Minha conta
                </button>
            ),
            icon: <UserOutlined />,
        },
        {
            key: '3',
            label: (
                <button onClick={changeLogout}>
                    Desconectar
                </button>
            ),
            icon: <LogoutOutlined />,
        },
    ];
    
    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <Flex align="center" justify='space-between' className="w-full">
                <Flex>
                    <Avatar src={<img src={perfil} alt="avatar" />} />
                    <div className="flex flex-col ml-2">
                        <p className="text-[16px] font-bold">Name Completo</p>
                        <p className="text-[14px] font-normal">Empresa</p>
                    </div>
                </Flex>
                <Space>
                    <DownOutlined />
                </Space>
            </Flex>
        </Dropdown>
    )
};