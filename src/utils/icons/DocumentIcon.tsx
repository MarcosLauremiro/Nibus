import React from "react";

interface DocIconProps {
    color?: string;
    size?: number;
}

export const DocumentIcon: React.FC<DocIconProps> = ({ 
    color = "#1E1E24",
    size = 18 
}) => {
    return (
        <svg 
            width={size} 
            height={Math.ceil(size * 21/18)} 
            viewBox="0 0 18 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M15 17.0244L14 17.0244C14 18.6813 12.6569 20.0244 11 20.0244H3C1.34315 20.0244 0 18.6813 0 17.0244V6.02441C0 4.36756 1.34315 3.02441 3 3.02442C3 1.36756 4.34315 0.0244141 6 0.0244141H15C16.6569 0.0244141 18 1.36756 18 3.02441L18 14.0244C18 15.6813 16.6569 17.0244 15 17.0244ZM13 15.0244L12.9985 15.0244L6 15.0244C5.44772 15.0244 5 14.5767 5 14.0244L5 4.02441V3.02442C5 2.47213 5.44772 2.02442 6 2.02442L15 2.02441C15.5523 2.02441 16 2.47213 16 3.02441L16 14.0244C16 14.5767 15.5523 15.0244 15 15.0244H13.0015L13 15.0244ZM2 6.02441C2 5.47213 2.44772 5.02441 3 5.02441L3 14.0244C3 15.6813 4.34315 17.0244 6 17.0244L12 17.0244C12 17.5767 11.5523 18.0244 11 18.0244H3C2.44772 18.0244 2 17.5767 2 17.0244V6.02441ZM8 4.02442C7.44772 4.02442 7 4.47213 7 5.02442C7 5.5767 7.44772 6.02442 8 6.02442H13C13.5523 6.02442 14 5.5767 14 5.02442C14 4.47213 13.5523 4.02442 13 4.02442H8ZM7 8.52442C7 7.97213 7.44772 7.52442 8 7.52442H13C13.5523 7.52442 14 7.97213 14 8.52442C14 9.0767 13.5523 9.52442 13 9.52442H8C7.44772 9.52442 7 9.0767 7 8.52442ZM8 11.0244C7.44772 11.0244 7 11.4721 7 12.0244C7 12.5767 7.44772 13.0244 8 13.0244H13C13.5523 13.0244 14 12.5767 14 12.0244C14 11.4721 13.5523 11.0244 13 11.0244H8Z" 
                fill={color}
            />
        </svg>
    );
}