import { Flex, Form, Input } from 'antd';

export const FormCreateUser: React.FC = () => {

    const [form] = Form.useForm();

    const validatePassword = (_: any, value: string) => {
        if (!value || form.getFieldValue("password") === value) {
            return Promise.resolve();
        }
        return Promise.reject("As senhas não coincidem");
    }

    const StyleImput = "border rounded-lg w-full h-[40px] p-[10px]";
    return (
        <Form form={form} layout="vertical">
            <Flex vertical gap={20}>
                <h1 className="text-[16px] font-bold">Informações Pessoais</h1>
                <Form.Item
                    name="name"
                    label="Nome Completo"
                    className="m-0"
                    rules={[{ required: true, message: 'Por favor, insira o nome completo!' }]}
                >
                    <Input className={StyleImput} placeholder="Lucas Carvalho" />
                </Form.Item>
                <Form.Item
                    name="cpf"
                    label="CPF"
                    className="m-0"
                    rules={[{ required: true, message: 'Por favor, insira o CPF!' }]}
                >
                    <Input className={StyleImput} placeholder="000.000.000-00" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    className="m-0 text-[14px]"
                    rules={[{ required: true, message: 'Por favor, insira o email!' }]}
                >
                    <Input className={StyleImput} placeholder="lucas@gmail.com" />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Telefone"
                    className="m-0 text-[14px]"
                    rules={[{ required: true, message: 'Por favor, insira o telefone!' }]}
                >
                    <Input className={StyleImput} placeholder="(00) 00000-0000" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Senha"
                    className="m-0"
                    rules={[
                        { required: true, message: 'Por favor, insira a senha!' },
                        { min: 6, message: 'A senha deve ter no mínimo 6 caracteres' }
                    ]}
                >
                    <Input.Password className={StyleImput} type="password" placeholder="**************" />
                </Form.Item>
                <Form.Item
                    name="confirmacaoSenha"
                    label="Confirmação de Senha"
                    className="m-0"
                    rules={[
                        { required: true, message: 'Por favor, insira a confirmação de senha!' },
                        { validator: validatePassword },
                        { min: 6, message: 'A senha deve ter no mínimo 6 caracteres' }
                    ]}
                >
                    <Input.Password className={StyleImput} type="password" placeholder="**************" />
                </Form.Item>
            </Flex>
        </Form>
    )
}