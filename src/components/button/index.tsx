import React from 'react';
import { Button, Flex } from 'antd';

interface ButtonComponentProps {
    children?: React.ReactNode;
    type: "primary" | "link" | "text" | "default" | "dashed" | undefined;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({type, children, ...rest}) => (
  <Flex gap="small" wrap className='w-full'>
    <Button className='w-full h-full' type={type} {...rest}> {children} </Button>
  </Flex>
);