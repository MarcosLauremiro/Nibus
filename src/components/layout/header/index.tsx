import { Dropdown, Flex, Input, MenuProps, Space, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import elipse from "../../../assets/Ellipse 176.svg"
import { NotificationIcon } from "../../../utils/icons/NotificationIcon";
import { SearchOutlined } from "@ant-design/icons";
import { DropDownPerfilComponent } from "../../button/dropDownPerfil";

export const HeaderComponent: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items:MenuProps['items']= [
        {
            key: "1",
            label: (
                <h1>Notificação 1</h1>                
            )
        },
        {
            key: "2",
            label: (
                <h1>Notificação 2</h1>                
            )
        }
    ]

    return (
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex items-center pl-[24px] leading-4 ml-[20px]">
            
            <Flex className="ml-10">
                <Input prefix={<SearchOutlined />} placeholder={`Pesquisar`} className="w-[400px] h-[40px] rounded-lg"></Input>
            </Flex>
            <Flex justify="end" align="center" gap={20} className="w-full">
                <span className="border-current rounded-full"><img src={elipse} alt="" /></span>
                <Dropdown
                    trigger={['click']}
                    menu={{items}}
                >
                    <Space>
                        <button><NotificationIcon /></button>
                    </Space>
                </Dropdown>
                <Flex align="center" justify="space-between" className="w-[250px] mr-[20px]">
                    <DropDownPerfilComponent />
                </Flex>
            </Flex>
        </Header>
    )
}