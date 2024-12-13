import { Flex, Form, Input } from "antd"
import { ButtonGradient } from "../../../components/button/gradientButton";

export const ListCarPage: React.FC = () => {

    const StyleImput = "border rounded-lg w-full h-[40px] p-[10px]";

    // {
    // "plate": "string",
    // "state": "string",
    // "vehicleWeight": 0,
    // "vehicleType": "TRACTION",
    // "bodyTypeId": "string", PERGUNTAR
    // "involvedId": "string", PERGUNTAR
    // "companyId": "string" PERGUNTAR
    // }

    return (
        <Flex gap={50} vertical align="center" justify="center" className="h-full">
            <Flex vertical className="w-[446px]">
                <h1 className="text-[36px] font-[700] text-e">Novo Veículo</h1>
                <p>Preencha as informações para cadastar um novo veículo</p>
            </Flex>
            <Form className="w-[446px]" layout="vertical" title="Informações do Veículo">
                <Form.Item
                    label="Placa do Veículo"
                    name="NameOwner"
                    rules={[{ required: true, message: 'Por favor digite a placa do Veículo' }]}
                    className="m-0"
                >
                    <Input className={StyleImput} />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="state"
                    rules={[{ required: true, message: 'Por favor digite o Status do veiculo' }]}
                    className="m-0"
                >
                    <Input className={StyleImput} />
                </Form.Item>

                <Form.Item
                    label="Peso do Veículo"
                    name="vehicleWeight"
                    rules={[{ required: true, message: 'Por favor digite o Peso do Veículo' }]}
                    className="m-0"
                >
                    <Input className={StyleImput} />
                </Form.Item>
                <Form.Item
                    label="Peso do Veículo"
                    name="vehicleWeight"
                    rules={[{ required: true, message: 'Por favor digite o Peso do Veículo' }]}
                    className="m-0"
                >
                    <ButtonGradient width="446px">Salvar</ButtonGradient>
                </Form.Item>
            </Form>
        </Flex>
    )
}