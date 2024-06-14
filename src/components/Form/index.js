import React, { useState } from 'react';
import "./Form.css";
import FieldText from "../FieldText";
import DropdownList from "../DropdownList";
import Button from "../Button";


const Form = (props) => {

    const team = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ];

    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [image, setImage] = useState('');
    const [teams, setTeams] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        // console.log('Formulario enviado => Nome: ', name, 'Cargo: ', office, 'Imagem: ', image, 'Times: ', teams);
        props.whenCollaboratorsRegistered(
            {
                name,
                office,
                image,
                teams
            }
        )
    }

    return (
        <section class="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <FieldText
                    obrigatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)} />

                <FieldText
                    obrigatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={office}
                    whenChanged={value => setOffice(value)}
                />
                <FieldText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />

                <DropdownList
                    obrigatory={true}
                    label="Times"
                    itens={team}
                    value={teams}
                    whenChanged={value => setTeams(value)} />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;