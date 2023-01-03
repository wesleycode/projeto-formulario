import {ObjectFieldProps} from "../../../types/TextFieldProps";
import {renderFields} from "../../../helpers/RenderFields";

export function ObjectField(props: ObjectFieldProps & { name: string }) {

    const {name, label, properties} = props;

    return (
        <div>
            <label>{label}</label>
            {Object.entries(properties).map(([fieldName, objectField], index) => {
                return renderFields([`${name}.${fieldName}`, objectField]);
            })}
        </div>
    );
}