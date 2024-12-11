import { Avatar, Button, Flex, Input, Popover, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { MenuUnfold } from "../../../utils/icons/MenuUnfold";
import { MenuOutfold } from "../../../utils/icons/MenuOutfold";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapsed } from "../../../store/collapsed/CollapsedSlice";
import elipse from "../../../assets/Ellipse 176.svg"
import { NotificationIcon } from "../../../utils/icons/NotificationIcon";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import perfil from "../../../assets/perfil.svg"

export const HeaderComponent: React.FC = () => {

    const collapsed = useSelector((state: RootState) => state.collapseSlice.isCollapsed);
    const dispatch = useDispatch();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex items-center pl-[24px] leading-4">
            <Button
                type="text"
                icon={collapsed ? <MenuUnfold /> : <MenuOutfold />}
                onClick={() => dispatch(toggleCollapsed())}
                className="ml-[-16px]"
            />
            <Flex className="ml-10">
                <Input prefix={<SearchOutlined />} placeholder={`Pesquisar`} className="w-[400px] h-[40px] rounded-lg"></Input>
            </Flex>
            <Flex justify="end" align="center" gap={20} className="w-full">
                <span className="border-current rounded-full"><img src={elipse} alt="" /></span>
                <Popover
                    content={<p>Notificacoes</p>}
                    trigger="click"
                    title="Notificaçoes"
                >
                    <button><NotificationIcon /></button>
                </Popover>
                <Flex align="center" justify="space-between" className="w-[250px] mr-[20px]">
                    <Flex align="center" className="w-full">
                        <Avatar src={<img src={perfil} alt="avatar" />} />
                        <div className="flex flex-col ml-2">
                            <p className="text-[16px] font-bold">Name Completo</p>
                            <p className="text-[14px] font-normal">Empresa</p>
                        </div>
                    </Flex>
                    <Popover 
                    trigger="click"
                    content={<button>Sair</button>}
                    title="Perfil"
                    >
                        <button><DownOutlined /></button>
                    </Popover>
                </Flex>
            </Flex>
        </Header>
    )
}