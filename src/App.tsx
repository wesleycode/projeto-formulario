import React from 'react'
import {FormProps, Formulario} from "./components/Formulario/Formulario";
import {ChakraProvider} from "@chakra-ui/react";

export function App() {

    const fields: FormProps['fields'] = {
        firstName: {
            type: 'text',
            label: 'Primeiro Nome',
            placeholder: 'Entre com seu nome'
        },
        lastName: {
            type: 'text',
            label: 'Sobre Nome',
            placeholder: 'Entre com seu sobrenome'
        },
        email: {
            type: 'text',
            label: 'E-mail',
            placeholder: 'E-mail'
        },
        country: {
            type: 'select',
            label: 'Selecione seu país de origem',
            placeholder: 'Selecione uma opção',
            options: ['Opção 01', 'Opção 02', 'Opção 03',]
        },
        postalCode: {
            type: 'number',
            label: 'Codigo-Postal',
            placeholder: '000000-000'
        },
        phone: {
            type: 'text',
            label: 'Telefone',
            placeholder: '(00) 0 0000-0000'
        },
        creditCard: {
            type: 'text',
            label: 'Numero do cartão de crédito',
            placeholder: '0000-0000-0000-0000'
        },
        securityCode: {
            type: 'text',
            label: 'Codigo de segurança',
            placeholder: '000'
        },
        // expirationDate: {
        //     type: 'date',
        //     label: 'Data de validade',
        //     placeholder: 'MM / YY'
        // },
        // myObj: {
        //     type: 'object',
        //     label: 'My Object',
        //     properties: {
        //         mySubObject: {
        //             type: 'text',
        //             label: 'My Sub Object',
        //             placeholder: 'Esse é o meu sub objeto',
        //         },
        //         myOtherSubObject: {
        //             type: 'number',
        //             label: 'My Other Sub Object',
        //             placeholder: 'Esse é o meu sub sub objeto',
        //         },
        //     }
        // },
    }

    return (
        <ChakraProvider>
            <Formulario fields={fields}/>
        </ChakraProvider>
    )
}
