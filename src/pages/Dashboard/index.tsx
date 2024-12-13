import { Flex } from "antd"
import React from "react"
import banner from "../../assets/banner.svg"

export const DashboardPage: React.FC = () => {
    return (
        <Flex align="center" className="h-[224px]" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
            <h1 className="text-white px-[20px] text-[32px] text-bold">Bem-Vindo de volta, nome de usuario</h1>
        </Flex>
    )
}