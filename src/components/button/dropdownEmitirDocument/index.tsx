import { Dropdown, Flex, MenuProps, Space } from "antd";
import { RootState } from "../../../store/store";
import { ButtonGradient } from "../gradientButton";
import { PlusIcon } from "../../../utils/icons/PlusIcon";
import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";

export const DropdownEmitirDocumentComponent: React.FC = () => {
    const collapsed = useSelector((state: RootState) => state.collapseSlice.isCollapsed);
    const items: MenuProps['items'] = [
        {
            key: "1",
            label: (
                <Flex justify="space-between">
                    <button>Emitir CTe</button>
                    <RightOutlined />
                </Flex>
            )
        },
        {
            key: "2",
            label: (
                <Flex justify="space-between">
                    <button>Emitir MDFe</button>
                    <RightOutlined />
                </Flex>
            )
        },
        {
            key: "3",
            label: (
                <Flex justify="space-between">
                    <button>Emitir Contrato</button>
                    <RightOutlined />
                </Flex>
            )
        },
    ]

    return (
        <Dropdown trigger={["click"]} menu={{ items }}>
            <Space>
                {collapsed ? <ButtonGradient width='43px'> <PlusIcon /></ButtonGradient> : <ButtonGradient width='208px'><PlusIcon /> Emitir documento</ButtonGradient>}
            </Space>
        </Dropdown>
    )
};