import React from 'react';

type InputProps = {
    value:string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props:InputProps) => {
    return (
        <div>
            <input value={props.value} onChange={(event)=>props.handleChange(event)}></input>
        </div>
    );
};

export default Input;