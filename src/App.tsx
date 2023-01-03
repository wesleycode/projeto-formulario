import React from 'react'
import {FormProps, Formulario} from "./components/Formulario/Formulario";

export function App() {

    const fields: FormProps['fields'] = {
        name: {
            type: 'text',
            label: 'Nome',
            placeholder: 'Digite seu nome aqui'
        },
        email: {
            type: 'text',
            label: 'E-mail'
        },
        count: {
            type: 'number',
            label: 'Count',
            placeholder: 'Coloque seu numero aqui'
        },
        myObj: {
            type: 'object',
            label: 'My Object',
            properties: {
                mySubObject: {
                    type: 'text',
                    label: 'My Sub Object',
                    placeholder: 'Esse é o meu sub objeto',
                },
                myOtherSubObject: {
                    type: 'number',
                    label: 'My Other Sub Object',
                    placeholder: 'Esse é o meu sub sub objeto',
                },
            }
        },
    }

    return (
        <Formulario fields={fields} />
    )
}
