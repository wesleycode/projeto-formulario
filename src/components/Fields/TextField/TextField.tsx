import {TextFieldProps} from "../../../types/TextFieldProps";
import {Box, FormControl, FormHelperText, FormLabel, Input, Text} from "@chakra-ui/react";

export function TextField(props: TextFieldProps & { name: string }) {

    const {label, htmlType = 'text', name, placeholder} = props;

    return (
        <FormControl mb={5}>
            <FormLabel>{label}</FormLabel>
            <Input id={name} type={htmlType} variant='filled' placeholder={placeholder}/>
            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
        </FormControl>
    );
}