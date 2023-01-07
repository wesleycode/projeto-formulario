import {Field} from "../types/TextFieldProps";
import {TextField} from "../components/Fields/TextField/TextField";
import {NumberField} from "../components/Fields/NumberField/NumberField";
import {ObjectField} from "../components/Fields/ObjectField/ObjectField";
import {SelectField} from "../components/Fields/SelectField/SelectField";

export function renderFields([name, fieldProps]: [string, Field]) {

    if (fieldProps.type === 'text') {
        return <TextField {...fieldProps} name={name}/>
    }

    if (fieldProps.type === 'number') {
        return <NumberField {...fieldProps} name={name} />
    }

    if (fieldProps.type === 'object') {
        return <ObjectField {...fieldProps} name={name} />
    }

    if (fieldProps.type === 'select') {
        return <SelectField {...fieldProps} name={name} />
    }

    return (
        <div>Tipo de Field desconhecido</div>
    );
}