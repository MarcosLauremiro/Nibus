import {Flex, Form, Select } from "antd";
import React from "react";

interface FormUserResgisterProps {
    step?: "personal" | "firm" | "confirmation" | "finish";
}

export const FormUserResgister: React.FC<FormUserResgisterProps> = ({ step }) => {

    return (
        <>
            {step === "finish" && (
                <Flex vertical gap={20}>
                    <h1 className="text-[16px] font-bold" >Sucesso! Para completar seu cadastro, escolha uma das opções abaixo:</h1>
                    <p>Principal serviço:</p>
                    <Form.Item name="principalServico">
                        <Select placeholder="Selecione" />
                    </Form.Item>
                </Flex>
            )}
        </>
    );
};