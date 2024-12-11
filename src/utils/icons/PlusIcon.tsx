import React from "react";

interface PlusIconProps {
    color?: string;
    size?: number;
}

export const PlusIcon: React.FC<PlusIconProps> = ({ 
    color = "#FFFFFF",
    size = 21 
}) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 21 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_863_3428)">
                <path d="M10.5 0.186523C8.46466 0.186523 6.47505 0.790065 4.78275 1.92083C3.09044 3.05159 1.77145 4.65878 0.99257 6.53917C0.213687 8.41956 0.00989619 10.4887 0.406967 12.4849C0.804038 14.4811 1.78414 16.3147 3.22332 17.7539C4.66251 19.1931 6.49615 20.1732 8.49236 20.5703C10.4886 20.9674 12.5577 20.7636 14.4381 19.9847C16.3185 19.2058 17.9257 17.8868 19.0564 16.1945C20.1872 14.5022 20.7907 12.5126 20.7907 10.4773C20.7878 7.7489 19.7026 5.13312 17.7734 3.20387C15.8441 1.27462 13.2284 0.189474 10.5 0.186523V0.186523ZM10.5 19.0529C8.80388 19.0529 7.14587 18.5499 5.73562 17.6076C4.32537 16.6653 3.22621 15.326 2.57714 13.759C1.92807 12.192 1.75824 10.4678 2.08914 8.80425C2.42003 7.14074 3.23678 5.61271 4.4361 4.41339C5.63542 3.21407 7.16345 2.39732 8.82696 2.06643C10.4905 1.73553 12.2147 1.90536 13.7817 2.55443C15.3487 3.2035 16.688 4.30266 17.6304 5.71291C18.5727 7.12317 19.0756 8.78117 19.0756 10.4773C19.0731 12.7509 18.1688 14.9307 16.5611 16.5384C14.9534 18.1461 12.7736 19.0504 10.5 19.0529ZM14.7878 10.4773C14.7878 10.7047 14.6974 10.9228 14.5366 11.0837C14.3758 11.2445 14.1577 11.3348 13.9302 11.3348H11.3575V13.9075C11.3575 14.135 11.2672 14.3531 11.1064 14.5139C10.9455 14.6747 10.7274 14.7651 10.5 14.7651C10.2725 14.7651 10.0544 14.6747 9.89359 14.5139C9.73277 14.3531 9.64242 14.135 9.64242 13.9075V11.3348H7.06973C6.84229 11.3348 6.62417 11.2445 6.46334 11.0837C6.30252 10.9228 6.21217 10.7047 6.21217 10.4773C6.21217 10.2498 6.30252 10.0317 6.46334 9.87088C6.62417 9.71006 6.84229 9.61971 7.06973 9.61971H9.64242V7.04702C9.64242 6.81958 9.73277 6.60146 9.89359 6.44063C10.0544 6.27981 10.2725 6.18946 10.5 6.18946C10.7274 6.18946 10.9455 6.27981 11.1064 6.44063C11.2672 6.60146 11.3575 6.81958 11.3575 7.04702V9.61971H13.9302C14.1577 9.61971 14.3758 9.71006 14.5366 9.87088C14.6974 10.0317 14.7878 10.2498 14.7878 10.4773Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_863_3428">
                    <rect width="20.5815" height="20.5815" fill="white" transform="translate(0.209229 0.186523)"/>
                </clipPath>
            </defs>
        </svg>
    );
}