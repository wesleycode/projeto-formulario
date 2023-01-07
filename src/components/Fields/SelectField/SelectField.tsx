import {FormControl, FormLabel, Select} from "@chakra-ui/react";
import {SelectFieldProps} from "../../../types/SelectProps";

export function SelectField(props: SelectFieldProps & { name: string }) {

    const {placeholder, options, label} = props;

    return (
        <FormControl mb={5}>
            <FormLabel>{label}</FormLabel>
            <Select variant='filled' placeholder={placeholder}>
                {
                    options.map((item,index) => {
                        return <option key={index} value={item}>{item}</option>
                    })
                }
            </Select>
        </FormControl>
    );
}