import {NumberFieldProps} from "../../../types/TextFieldProps";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";

export function NumberField(props: NumberFieldProps & { name: string }) {

    const {label, name, placeholder, min, max} = props;

    return (
        <FormControl mb={5}>
            <FormLabel>{label}</FormLabel>
            <Input
                id={name}
                type='number'
                variant='filled'
                placeholder={placeholder}
                min={min}
                max={max}
            />
            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
        </FormControl>
    );
}