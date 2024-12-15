import React, { useContext } from 'react';
import type { FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';
import { AuthContext } from '../../../provider/AuthContext';

type FieldType = {
    email?: string;
    password?: string;
};

const StyleImput = "border rounded-lg w-full h-[40px] p-[10px]";

export const FormLogin: React.FC = () => {
    const {login} = useContext(AuthContext);

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