import { Flex } from "antd"
import React from "react"
import banner from "../../assets/banner.svg"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"

export const DashboardPage: React.FC = () => {
    const user = useSelector((state: RootState) => state.userSlice.user)
    const company = useSelector((state: RootState) => state.companySlice.Company)

    console.log(company)
    return (
        <Flex align="center" className="h-[224px]" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
            <h1 className="text-white px-[20px] text-[32px] text-bold">Bem-Vindo de volta, {user.name}</h1>
        </Flex>
    )
}