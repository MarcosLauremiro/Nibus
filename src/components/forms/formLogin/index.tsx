import React from 'react';
import type { FormProps } from 'antd';
import { Button, Flex, Form, Input, message } from 'antd';
import api from '../../../service/api';
import { useNavigate } from 'react-router';

type FieldType = {
    email?: string;
    password?: string;
};

const StyleImput = "border rounded-lg w-full h-[40px] p-[10px]";

export const FormLogin: React.FC = () => {
    const navigate = useNavigate();

    const login = (values: FieldType) => {
        api.post("/auth", values).then((res) => {
            message.success('Login realizado com sucesso!');
            localStorage.setItem('@bus_token', res.data.acessToken);
            navigate("/dashboard");
        }).catch((err) => {
            message.error("Erro ao realizar login");
            message.error("Verifique suas credenciais");
            console.log(err)
        })
    }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        login(values);
        console.log('Success:', values);
    };

    return (
        <Form
            name="Login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout='vertical'
            className="w-full flex flex-col gap-5"
        >
            <Form.Item<FieldType>
                label="Email de Usuario"
                name="email"
                rules={[{ required: true, message: 'Por favor digite seu email' }]}
                className="m-0"
            >
                <Input type='email' className={StyleImput} />
            </Form.Item>

            <Flex vertical align='end' justify='end'>
                <Form.Item<FieldType>
                    label="Senha"
                    name="password"
                    rules={[{}]}
                    className="m-0 w-full"
                >
                    <Input.Password className={StyleImput} />
                </Form.Item>
                <a href="" className='text-[#377CD9]' >Esqueceu Sua Senha?</a>
            </Flex>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit" className='w-full h-[41px]'>
                    Entrar
                </Button>
                <Flex justify='center' className='mt-[10px]'>
                    <span>Não tem cadastro? <a className='text-[#377CD9]' href="/register">Crie sua Conta</a></span>
                </Flex>
            </Form.Item>
        </Form>
    )
};