import "./Form.css";
import FieldText from "../FieldText";
import DropdownList from "../DropdownList";
import Button from "../Button";


const Form = () => {

    const times = [
        'Programação',
        'Backend',
        'Fullstack',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação e Gestão'];

    const onSave = (event) => {
        event.preventDefault();
        console.log('Formulario enviado!');
    }

    return (
        <section class="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <FieldText obrigatory={true} label="Nome" placeholder="Digite seu nome" />
                <FieldText obrigatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList obrigatory={true} label="Times" itens={times} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;