import React from "react";
import { StepsComponent } from "../../components/StepsComponent";
import { Flex } from "antd";
import { Logo } from "../../components/logo";
import { GoogleButton } from "../../components/button/googleButton";

export const Register: React.FC = () => {
    return (
        <Flex vertical className="p-10 bg-[#EFF2EF] w-full h-full">
            <Flex vertical align="center" className="p-10 bg-[#FFFFFF] rounded-lg">
                <Flex gap={18} vertical className="h-full w-[462px]">
                    <Flex vertical align="center" justify="center">
                        <Logo width={174.85} height={46.66}/>
                    </Flex>
                    <Flex gap={8} vertical align="center">
                        <h1 className="text-[36px] font-bold">Realizar Cadastro</h1>
                        <p className="text-[16px] text-[#76767E]">Preencha os informações para realizar seu cadastro</p>
                    </Flex>
                    <Flex vertical align="center" justify="center" className="mb-[20px]">
                        <GoogleButton />
                    </Flex>
                    <Flex gap={15} align="center" justify="center" className="mb-[20px]">
                        <span className="w-[151px] border-solid border" style={{borderColor: "#E2E8F0"}}></span>
                        <p>ou</p>
                        <span className="w-[151px] border-solid border" style={{borderColor: "#E2E8F0"}}></span>
                    </Flex>
                    <StepsComponent />
                </Flex>
            </Flex>
        </Flex>
    )
}