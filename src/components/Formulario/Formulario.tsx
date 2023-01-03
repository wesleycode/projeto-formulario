import {Fields} from "../../types/TextFieldProps";
import {FormProvider, useForm} from "react-hook-form";
import {renderFields} from "../../helpers/RenderFields";

export interface FormProps {
    fields: Fields,
    //onSubmit: SubmitHandler<FieldValues>
}

export function Formulario({fields}: FormProps) {

    const form = useForm();

    return (
        <FormProvider {...form}>
            <form /*onSubmit={form.handleSubmit(onSubmit)}*/>
                {Object.entries(fields).map(renderFields)}
                <button type='submit'>Salvar</button>
            </form>
        </FormProvider>
    );
}