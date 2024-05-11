import style from './MyInput.module.scss'
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

const MyInput = ({ name, text, type, defaultValue, mask, maskChar, required, placeholder }) => {
   const [value, setValue] = useState(defaultValue || '');
   useEffect(() => {
      setValue(defaultValue || '');
   }, [defaultValue]);

   return (
      <>
         {/* <label className={style.label}>
            {text}
         </label> */}
         <input
            // mask={'+7 (999) 999 99-99'}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={style.input}
         >
         </input>
      </>
   );
};

export default MyInput;
