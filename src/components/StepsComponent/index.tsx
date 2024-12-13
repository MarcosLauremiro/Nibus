import React, { useState } from 'react';
import { Button, Flex, Form, message, Steps } from 'antd';
import { FormUserResgister } from '../forms/formRegister';
import api from '../../service/api';
import { FormCreateUser } from '../forms/formRegister/formUser';
import { FormCompanie } from '../forms/formRegister/formCompanie';

const steps = [
  {
    content: 'personal',
  },
  {
    content: 'firm',
  },
  {
    content: 'finish',
  },
];

export const StepsComponent: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const createUser = async (values: any) => {
    try {
      await api.post('/users', values).then((res) => {
        console.log(res.data);
        message.success('Usuario criado com sucesso!');
        window.localStorage.setItem('@bus_token', res.data.token);
      })
    } catch (err) {
      message.error('Erro ao criar usuario');
      message.error('Verifique suas credenciais');
      console.log(err);
      throw err; 
    }
  };

  const createCompanie = async (values: any) => {
    try {
      const token = localStorage.getItem('@bus_token');
      await api.post("/companies", values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      message.success('Empresa criada com sucesso!');
    } catch (err) {
      message.error('Erro ao criar empresa');
      message.error('Verifique as credenciais');
      console.log(err);
      throw err; 
    }
  };

  const CnpjCompany = async (cnpj: string) => {
    try {
      const token = localStorage.getItem('@bus_token');
      const res = await api.get(`/companies/cnpjs/${cnpj}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      form.setFieldsValue(res.data);
    } catch (err: any) {
      message.error('CNPJ já cadastrado');
      console.log(err);
      throw err; // Re-throw the error to prevent advancing to the next step
    }
  };

  const handleCnpjBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cnpj = e.target.value;
    if (cnpj) {
      await CnpjCompany(cnpj);
    }
  };

  const onFinish = (values: any) => {
    message.success('Processing complete!', values);
  };

  const next = async () => {
    try {
      const values = await form.validateFields();
      if (current === 0) {
        await createUser(values);
      } else if (current === 1) {
        await createCompanie(values);
      }
      setCurrent(current + 1);
    } catch (error) {
      console.log('Validation or creation failed:', error);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item, index) => ({
    key: index.toString(),
    content: item.content,
    title: ''
  }));

  return (
    <>
      <Steps className='px-[20px]' current={current} items={items} />
      <Form onFinish={onFinish} form={form} className="w-full" layout="vertical">
        {current === 0 && <FormCreateUser />}
        {current === 1 && <FormCompanie form={form} handleCnpjBlur={handleCnpjBlur} />}
        {current === 2 && <FormUserResgister step='finish' />}

        <Flex vertical gap={20} style={{ marginTop: 24 }} >
          {current < steps.length - 1 && (
            <Button className='w-full h-[41px]' type="primary" onClick={next}>
              Avancar
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button className='w-full h-[41px]' type="primary" htmlType="submit">
              Finalizar
            </Button>
          )}
          {current > 0 && (
            <Button className='w-full h-[41px]' onClick={prev}>
              Voltar
            </Button>
          )}
        </Flex>
      </Form>
    </>
  );
};

export default StepsComponent;