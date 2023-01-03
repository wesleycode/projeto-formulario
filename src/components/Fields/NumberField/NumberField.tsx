import {NumberFieldProps, TextFieldProps} from "../../../types/TextFieldProps";

export function NumberField(props: NumberFieldProps & { name: string }) {

    const {label, name, placeholder, min, max} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type='number'
                placeholder={placeholder}
                min={min}
                max={max}
            />
        </div>
    );
}