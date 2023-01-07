import {FieldSchema} from "./FieldSchema";

export type SelectFieldProps = FieldSchema & {
    label: string,
    placeholder: string,
    options: string[],
}