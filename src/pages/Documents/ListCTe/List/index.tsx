import React, { useEffect, useState } from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    cte: string;
    dataEmissao: string;
    remetente: string;
    valor: string;
    veiculo: string;
    statusPagamento: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '#CTE',
        dataIndex: 'cte',
        key: 'cte',
    },
    {
        title: 'Data de Emissão',
        dataIndex: 'dataEmissao',
        key: 'dataEmissao',
    },
    {
        title: 'Remetente',
        dataIndex: 'remetente',
        key: 'remetente',
    },
    {
        title: 'Valor',
        dataIndex: 'valor',
        key: 'valor',
    },
    {
        title: 'Veículo',
        dataIndex: 'veiculo',
        key: 'veiculo',
    },
    {
        title: 'Status Pagamento',
        dataIndex: 'statusPagamento',
        key: 'statusPagamento',
    },
    {
        title: 'Editar',
        key: 'edit',
        render: (_, record) => (
            <Space size="middle">
                <Button type="link">Editar</Button>
            </Space>
        ),
    },
];

const fakeDataUrl = `https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo`;

export const ListCTeComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const formattedData = res.results.map((item: any, index: number) => ({
                    key: index.toString(),
                    cte: `CTE-${index + 1}`,
                    dataEmissao: new Date().toLocaleDateString(),
                    remetente: `${item.name.first} ${item.name.last}`,
                    valor: `$${(Math.random() * 1000).toFixed(2)}`,
                    veiculo: `Veículo ${index + 1}`,
                    statusPagamento: Math.random() > 0.5 ? 'Pago' : 'Pendente',
                }));
                setData(formattedData);
                setLoading(false);
            });
    }, []);

    return (
        <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={false}
            bordered
            title={() => 'Lista de CTe'}
        />
    );
};