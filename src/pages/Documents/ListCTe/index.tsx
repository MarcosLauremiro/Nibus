import { Flex, Input } from "antd"
import React from "react"
import banner from "../../../assets/banner.svg"
import { ListCTeComponent } from "./List"
import { ButtonGradient } from "../../../components/button/gradientButton"

export const ListCte: React.FC = () => {
    return (
        <Flex vertical>
            <Flex align="center" className="h-[224px]" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
                <h1 className="text-white px-[20px] text-[32px] text-bold">Lista de CTe</h1>
                <p className="text-white px-[20px]" > Mostrand todas as emissões de CTe</p>
            </Flex>
            <Flex justify="space-between" align="center" className="px-[20px] py-[20px]">
                <Flex vertical>
                    <h1>Ultimas CTe</h1>
                    <p>35 Novas neste mês</p>
                </Flex>
                <Flex>
                    <ButtonGradient>Emitir CTe</ButtonGradient>
                </Flex>
            </Flex>
            <Flex justify="space-between" align="center" className="px-[20px] py-[20px]">
                <Input className="w-[200px]" placeholder="Pesquisar" />
                <Flex gap={20}>
                    <button>Filtros</button>
                    <button>Outubro</button>
                </Flex>
            </Flex>
            <ListCTeComponent />
        </Flex>
    )
}