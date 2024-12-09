import { Button, Flex, Form, Input, Select } from "antd";
import React from "react";

interface FormUserResgisterProps {
    step?: "personal" | "firm" | "confirmation" | "finish";
}

export const FormUserResgister: React.FC<FormUserResgisterProps> = ({ step }) => {
    const StyleImput = "border rounded-lg w-full h-[40px] p-[10px]";

    return (
        <>
            {step === "personal" && (
                <Flex vertical gap={20}>
                    <h1 className="text-[16px] font-bold">Informações Pessoais</h1>
                    <Form.Item
                        name="nomeCompleto"
                        label="Nome Completo"
                        className="m-0"
                    >
                        <Input className={StyleImput} placeholder="Lucas Carvalho" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        className="m-0 text-[14px]"
                    >
                        <Input className={StyleImput} type="email" placeholder="lucas@gmail.com" />
                    </Form.Item>
                    <Form.Item
                        name="senha"
                        label="Senha"
                        className="m-0"
                    >
                        <Input className={StyleImput} type="password" placeholder="**************" />
                    </Form.Item>
                    <Form.Item
                        name="confirmacaoSenha"
                        label="Confirmação de Senha"
                        className="m-0"
                    >
                        <Input className={StyleImput} type="password" placeholder="**************" />
                    </Form.Item>
                </Flex>
            )}
            {step === "firm" && (
                <Flex vertical gap={20}>
                    <h1 className="text-[16px] font-bold">Informações Empresariais</h1>
                    <Form.Item
                        name="cnpj"
                        label="CNPJ"
                        className="m-0 text-[14px]"
                    >
                        <Input className={StyleImput} placeholder="00.000.000/0000-00" />
                    </Form.Item>
                    <Form.Item
                        name="razaoSocial"
                        label="Razão Social"
                        className="m-0"
                    >
                        <Input className={StyleImput} placeholder="Lucas Carvalho Ltda" />
                    </Form.Item>
                    <Form.Item
                        name="setorEmpresa"
                        label="Setor da Empresa"
                        className="m-0"
                    >
                        <Input className={StyleImput} placeholder="Tecnologia" />
                    </Form.Item>
                    <Form.Item
                        name="numeroFuncionarios"
                        label="Número de Funcionários"
                        className="m-0"
                    >
                        <Input className={StyleImput} type="number" placeholder="10" />
                    </Form.Item>
                    <Form.Item
                        name="enderecoCompleto"
                        label="Endereço Completo"
                        className="m-0"
                    >
                        <Input className={StyleImput} placeholder="Rua dos Bobos, 0" />
                    </Form.Item>
                    <Form.Item
                        name="celular"
                        label="Celular"
                        className="m-0"
                    >
                        <Input className={StyleImput} placeholder="(00) 00000-0000" />
                    </Form.Item>
                </Flex>
            )}
            {step === "confirmation" && (
                <Flex vertical gap={20}>
                    <h1 className="text-[16px] font-bold">Codigo de Confirmação</h1>
                    <p>Digite o codigo recebido em seu numero *numero*</p>
                    <Form.Item name="codigoConfirmacao">
                        <Flex justify="space-between" gap={10}>
                            <Input className="border w-[290px] rounded-lg h-[40px] p-[10px]" placeholder="000000" />
                            <Button className="h-[41px] w-[152px]">Reenviar Codigo</Button>
                        </Flex>
                    </Form.Item>
                </Flex>
            )}
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