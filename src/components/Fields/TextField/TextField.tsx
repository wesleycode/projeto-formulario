import {TextFieldProps} from "../../../types/TextFieldProps";

export function TextField(props: TextFieldProps & {name: string}) {

    const { label, htmlType = 'text', name, placeholder} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={htmlType} placeholder={placeholder}></input>
        </div>
    );
}