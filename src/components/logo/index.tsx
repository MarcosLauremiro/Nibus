import React from "react";
import LogoMarca from "../../assets/Logo.svg";

interface LogoProps {
    width?: string | number | undefined;
    height?: string | number | undefined;
}

export const Logo: React.FC<LogoProps> = ({width, height}) => {

    return(
      <img
        src={LogoMarca}
        alt="Logo"
        className="flex items-center justify-center"
        style={{width: width, height: height}}
      />

    )
}