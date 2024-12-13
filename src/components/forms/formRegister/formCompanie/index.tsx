import React from 'react';
import { Form, Input } from 'antd';

interface FormCompanieProps {
  form: any;
  handleCnpjBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormCompanie: React.FC<FormCompanieProps> = ({ form, handleCnpjBlur }) => {
  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="cnpj"
        label="CNPJ"
        rules={[{ required: true, message: 'Por favor, insira o CNPJ!' }]}
      >
        <Input onBlur={handleCnpjBlur} />
      </Form.Item>
      <Form.Item
        name="companyName"
        label="Nome da Empresa"
        rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fantasyname"
        label="Nome Fantasia"
        rules={[{ required: true, message: 'Por favor, insira o nome fantasia!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Por favor, insira o email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="stateRegistration"
        label="Inscrição Estadual"
        rules={[{ required: true, message: 'Por favor, insira a inscrição estadual!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rntrc"
        label="RNTRC"
        rules={[{ required: true, message: 'Por favor, insira o RNTRC!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="postalCode"
        label="CEP"
        rules={[{ required: true, message: 'Por favor, insira o CEP!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="Cidade"
        rules={[{ required: true, message: 'Por favor, insira a cidade!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="state"
        label="Estado"
        rules={[{ required: true, message: 'Por favor, insira o estado!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="road"
        label="Rua"
        rules={[{ required: true, message: 'Por favor, insira a rua!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="number"
        label="Número"
        rules={[{ required: true, message: 'Por favor, insira o número!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};