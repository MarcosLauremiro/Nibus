import { ConfigProvider } from "antd"
import React from "react"

interface ConfigureAntdThemeProps {
    children: React.ReactNode;
}

export const ConfigureAntdTheme: React.FC<ConfigureAntdThemeProps> = ({ children }) => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'transparent', // Transparente para evitar cores fixas
                    fontFamily: '"Plus Jakarta Sans", sans-serif', // Fonte personalizada
                    colorBgLayout: 'transparent'
                },
            }}
        >
            <style>
                {`
                    /* Botão primário com gradiente */
                    :where(.css-dev-only-do-not-override-tnivdb).ant-steps .ant-steps-item-process .ant-steps-item-icon, :where(.css-dev-only-do-not-override-tnivdb).ant-steps .ant-steps-item-finish .ant-steps-item-icon, .ant-btn-primary {
                        background: linear-gradient(90deg, #3CDA91, #3676DD);
                        border: none;
                        color: #fff;
                    }

                    :where(.css-dev-only-do-not-override-tnivdb).ant-btn-variant-solid:not(:disabled):not(.ant-btn-disabled):hover,.ant-btn-primary:hover {
                        background: linear-gradient(90deg,  #3676DD, #3CDA91);
                        border: none;
                        color: #fff;
                    }

                    .ant-btn-primary:focus {
                        background: linear-gradient(90deg, #3676DD, #3CDA91);
                        border: none;
                        color: #fff;
                        box-shadow: 0 0 0 2px rgba(55, 118, 221, 0.5);
                    }

                    .ant-btn-primary:active {
                        background: linear-gradient(90deg, #3676DD, #3CDA91);
                        border: none;
                        color: #fff;
                    }

                    .ant-btn-primary[disabled] {
                        background: linear-gradient(90deg, #d3d3d3, #c0c0c0);
                        color: rgba(255, 255, 255, 0.6);
                        border: none;
                    }

                    :where(.css-dev-only-do-not-override-tnivdb).ant-steps .ant-steps-item-wait .ant-steps-item-icon {
                        background: transparent;
                    }

                    :where(.css-dev-only-do-not-override-tnivdb).ant-steps .ant-steps-item-title::after {
                        height: 6px;
                        width: 50px;
                        border-radius: 40px;
                    }
                    :where(.css-dev-only-do-not-override-tnivdb).ant-steps .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after {
                        background: linear-gradient(90deg, #3CDA91, #3676DD);
                    }
                    :where(.css-dev-only-do-not-override-tnivdb).ant-steps .ant-steps-item-finish .ant-steps-item-icon >.ant-steps-icon {
                        color: #fff;
                    }
                    :where(.css-dev-only-do-not-override-tnivdb).ant-btn-color-primary {
                        box-shadow: none;
                    }
                    :where(.css-dev-only-do-not-override-tnivdb).ant-form-item .ant-form-item-label >label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
                        display: none;
                    }
                `}
            </style>
            {children}
        </ConfigProvider>
    );
}