import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Flex, Form, Input } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const StyleImput = "border rounded-lg w-full h-[40px] p-[10px]";

export const FormLogin: React.FC = () => (
    <Form
        name="Login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
        className="w-full flex flex-col gap-5"
    >
        <Form.Item<FieldType>
            label="Nome de Usuario"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className="m-0"
        >
            <Input className={StyleImput} />
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
);