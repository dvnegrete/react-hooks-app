import { ChangeEvent, useState } from "react";

type FormFields = {
    [key: string]: string;
};

export const useForm = <T extends FormFields>( initialForm: T ) => {
    const [ formState, setFormState ] = useState(initialForm);

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>)=> {
        const { name, value,  } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () =>{
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}