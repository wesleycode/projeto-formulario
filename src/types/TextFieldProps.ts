import {FieldSchema} from "./FieldSchema";
import {DefaultProps} from "./DefaultProps";
import {HTMLInputTypeAttribute} from "react";

export type TextFieldProps = FieldSchema & DefaultProps & {
    type: 'text',
    htmlType?: HTMLInputTypeAttribute
}

export type NumberFieldProps = FieldSchema & DefaultProps & {
    type: 'number',
    min?: number,
    max?: number,
}

export type ObjectFieldProps = FieldSchema & DefaultProps & {
    type: 'object',
    properties: Fields,
}

export type Field = TextFieldProps | NumberFieldProps | ObjectFieldProps;

export type Fields = Record<string, Field>