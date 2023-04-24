import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
import Mode from '../common/Mode'
import Lang from "../pages/Lang";


const Navs = () => {
    //  const navigate = useNavigate();
    //  const { t } = useTranslation();
        const [mode, setMode] = useState(localStorage.getItem("mode"));
   useEffect(() => {
     document.body.className = mode;
   }, [mode]);

  return (
    <>
      <div className="lines">
     
          <Lang />
    
     
          <Mode modedata={mode} setModedata={setMode} />
     
      </div>
    </>
  );
}

export default Navs
