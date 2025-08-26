import React from "react";
// @ts-ignore
import selvageLogo from "../assets/selvage_final_horizon_transparent_svg.svg";

export function Logo() {
  return (
    <div style={{ width: '120px', height: '60px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src={selvageLogo} 
        alt="Selvage Logo" 
        style={{ width: '140px', height: '70px', objectFit: 'cover' }}
      />
    </div>
  );
}