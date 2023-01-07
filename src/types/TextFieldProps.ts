import {FieldSchema} from "./FieldSchema";
import {DefaultProps} from "./DefaultProps";
import {HTMLInputTypeAttribute} from "react";

export type TextFieldProps = FieldSchema & DefaultProps & {
    htmlType?: HTMLInputTypeAttribute
}

export type NumberFieldProps = FieldSchema & DefaultProps & {
    min?: number,
    max?: number,
}

export type ObjectFieldProps = FieldSchema & DefaultProps & {
    properties: Fields,
}

export type SelectFieldProps = FieldSchema & {
    label: string,
    placeholder: string,
    options: string[],
}

export type Field = TextFieldProps | NumberFieldProps | ObjectFieldProps | SelectFieldProps;

export type Fields = Record<string, Field>