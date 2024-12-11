import React from "react";

interface SettingIconProps {
    color?: string;
    size?: number;
}

export const SuportIcon: React.FC<SettingIconProps> = ({ 
    color = "#1E1E24",
    size = 20 
}) => {
    return (
        <svg 
            width={size} 
            height={Math.ceil(size * 21/20)} 
            viewBox="0 0 20 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M10 0.0244141C5.23061 0.0244141 2.42702 3.57981 2.04498 7.17962C0.856353 7.57849 0 8.70145 0 10.0244V12.0244C0 13.6813 1.34315 15.0244 3 15.0244C4.65685 15.0244 6 13.6813 6 12.0244V10.0244C6 8.84175 5.31565 7.81892 4.32134 7.33033C4.58547 4.74857 6.33141 2.02441 10 2.02441C13.6686 2.02441 15.4145 4.74858 15.6787 7.33033C14.6844 7.81892 14 8.84175 14 10.0244V12.0244C14 12.9129 14.3863 13.7112 15 14.2605V15.6448C15 16.959 13.9346 18.0244 12.6204 18.0244H12C11.4477 18.0244 11 18.4721 11 19.0244C11 19.5767 11.4477 20.0244 12 20.0244H12.6204C15.0392 20.0244 17 18.0636 17 15.6448V15.0244C18.6569 15.0244 20 13.6813 20 12.0244V10.0244C20 8.70145 19.1436 7.57849 17.955 7.17963C17.573 3.57981 14.7694 0.0244141 10 0.0244141ZM4 10.0244C4 9.47213 3.55228 9.02441 3 9.02441C2.44772 9.02441 2 9.47213 2 10.0244V12.0244C2 12.5767 2.44772 13.0244 3 13.0244C3.55228 13.0244 4 12.5767 4 12.0244V10.0244ZM17 9.02441C17.5523 9.02441 18 9.47213 18 10.0244V12.0244C18 12.5767 17.5523 13.0244 17 13.0244C16.4477 13.0244 16 12.5767 16 12.0244V10.0244C16 9.47213 16.4477 9.02441 17 9.02441Z" 
                fill={color}
            />
        </svg>
    );
}