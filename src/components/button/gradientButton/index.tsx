import React from 'react';

interface ButtonComponentProps {
    children?: React.ReactNode;
    width?: string;
}

export const ButtonGradient: React.FC<ButtonComponentProps> = ({children, width}) => {

  return (
        <button style={{width: width}} className={`button-gradient rounded-lg h-[41px] text-white gap-[10px] flex items-center justify-center background`}>
          {children}
        </button>
  );
};