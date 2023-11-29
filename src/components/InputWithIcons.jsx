// InputWithIcons.js
import React from 'react';

const InputWithIcons = ({ leadingIcon, trailingIcon, type, placeholder,name, value, onChange}) => {
    return (
        <div className="mb-1 flex justify-around items-center rounded-lg bg-slate-100 px-3 py-3 text-sm">

            {leadingIcon}

            <input
                className="focus: w-full bg-inherit  outline-none"
                type={type ? type : 'text'}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />

            {trailingIcon}
        </div>
    );
};

export default InputWithIcons;
