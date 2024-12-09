import React from "react"
import googleIcon from "../../assets/icons8-google.svg"

interface GoogleIconProps {
    size?: string | number | undefined;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({size}) => {
    return(
        <img style={{width: size}} src={googleIcon} alt="google" />
    )
}