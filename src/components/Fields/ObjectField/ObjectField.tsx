import {ObjectFieldProps} from "../../../types/TextFieldProps";
import {renderFields} from "../../../helpers/RenderFields";
import {Box, Text} from "@chakra-ui/react";

export function ObjectField(props: ObjectFieldProps & { name: string }) {

    const {name, label, properties} = props;

    return (
        <Box>
            <Text mb={8}>{label}</Text>
            {Object.entries(properties).map(([fieldName, objectField], index) => {
                return renderFields([`${name}.${fieldName}`, objectField]);
            })}
        </Box>
    );
}