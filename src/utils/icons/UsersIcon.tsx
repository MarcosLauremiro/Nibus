import React from "react";

interface UsersIconProps {
    color?: string;
    size?: number;
}

export const UsersIcon: React.FC<UsersIconProps> = ({ 
    color = "#1E1E24",
    size = 16 
}) => {
    return (
        <svg 
            width={size} 
            height={Math.ceil(size * 17/16)} 
            viewBox="0 0 16 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M5 3.02441C5.73894 3.02441 6.43108 3.22479 7.02506 3.57416C7.24878 1.57698 8.94308 0.0244141 11 0.0244141C13.2091 0.0244141 15 1.81528 15 4.02441C15 5.14348 14.5405 6.15522 13.7998 6.8812C15.1274 7.78011 16 9.30036 16 11.0244V12.1673V15.0244C16 15.5767 15.5523 16.0244 15 16.0244C14.4477 16.0244 14 15.5767 14 15.0244V12.1673V11.0244C14 9.36756 12.6569 8.02441 11 8.02441C9.34315 8.02441 8 9.36756 8 11.0244V12.1673V15.0244C8 15.5767 7.55228 16.0244 7 16.0244C6.44771 16.0244 6 15.5767 6 15.0244V12.1673V11.0244L5 11.0244H3.57143C2.70355 11.0244 2 11.728 2 12.5958V15.0244C2 15.5767 1.55228 16.0244 1 16.0244C0.447715 16.0244 0 15.5767 0 15.0244V12.5958C0 11.2529 0.741237 10.0831 1.83691 9.47316C1.31228 8.79648 1 7.94692 1 7.02441C1 4.81528 2.79086 3.02441 5 3.02441ZM5 9.02441C6.10457 9.02441 7 8.12898 7 7.02441C7 5.91984 6.10457 5.02441 5 5.02441C3.89543 5.02441 3 5.91984 3 7.02441C3 8.12898 3.89543 9.02441 5 9.02441ZM11 6.02441C12.1046 6.02441 13 5.12898 13 4.02441C13 2.91984 12.1046 2.02441 11 2.02441C9.89543 2.02441 9 2.91984 9 4.02441C9 5.12898 9.89543 6.02441 11 6.02441Z" 
                fill={color}
            />
        </svg>
    );
}