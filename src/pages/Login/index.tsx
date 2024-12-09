import React from "react";
import { Flex } from "antd";
import cover from "../../assets/Cover.svg";
import { Logo } from "../../components/logo";
import { GoogleButton } from "../../components/button/googleButton";
import { FormLogin } from "../../components/forms/formLogin";

export const LoginPage: React.FC = () => {
    return (
        <Flex vertical className="p-10 bg-[#EFF2EF] w-screen h-screen">
            <Flex vertical align="end" className="h-full rounded-lg bg-no-repeat bg-center" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}>
                <Flex
                    gap={18}
                    vertical
                    align="center"
                    justify="center"
                    className="h-full w-[462px] bg-[#FFFFFF] rounded-e-lg"
                >
                    <Flex vertical align="center" justify="center">
                        <Logo width={174.85} height={46.66} />
                    </Flex>
                    <Flex gap={8} vertical align="center">
                        <h1 className="text-[36px] font-bold">Fazer Login</h1>
                        <p className="text-[16px] text-[#76767E]">Digite suas credenciais para entrar.</p>
                    </Flex>
                    <Flex vertical align="center" justify="center" className="mb-[20px]">
                        <GoogleButton />
                    </Flex>
                    <Flex gap={15} align="center" justify="center" className="mb-[20px]">
                        <span className="w-[151px] border-solid border" style={{ borderColor: "#E2E8F0" }}></span>
                        <p>ou</p>
                        <span className="w-[151px] border-solid border" style={{ borderColor: "#E2E8F0" }}></span>
                    </Flex>
                    <Flex gap={20} align="center" justify="center" className="w-[352px]">
                        <FormLogin />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}