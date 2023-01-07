import {Fields} from "../../types/TextFieldProps";
import {FormProvider, useForm} from "react-hook-form";
import {renderFields} from "../../helpers/RenderFields";
import {Box, Button, Flex} from "@chakra-ui/react";

export interface FormProps {
    fields: Fields,
    //onSubmit: SubmitHandler<FieldValues>
}

export function Formulario({fields}: FormProps) {

    const form = useForm();

    return (
        <FormProvider {...form}>
            <form /*onSubmit={form.handleSubmit(onSubmit)}*/>
                <Flex flexDirection='column'>
                    <Box padding='20px'>
                        {Object.entries(fields).map((field) => (renderFields(field)))}
                        <Button type='submit'>Salvar</Button>
                    </Box>
                </Flex>
            </form>
        </FormProvider>
    );
}