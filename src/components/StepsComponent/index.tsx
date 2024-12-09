import React, { useState } from 'react';
import { Button, Flex, Form, message, Steps } from 'antd';
import { FormUserResgister } from '../forms/formRegister';


const steps = [
  {
    content: (<FormUserResgister step='personal' />),
  },
  {
    content: (<FormUserResgister step='firm' />),
  },
  {
    content: (<FormUserResgister step='confirmation' />),
  },
  {
    content: (<FormUserResgister step='finish' />),
  },
];

export const StepsComponent: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const onFinish = (values: any) => {
    const allValues = { ...formData, ...values };
    console.log('Received values:', allValues);
    message.success('Processing complete!');
  };

  const next = () => {
    form.validateFields().then((values) => {
      setFormData({ ...formData, ...values });
      setCurrent(current + 1);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
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
        <div>
          {steps[current].content}
        </div>

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