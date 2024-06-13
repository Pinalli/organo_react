import "./Form.css";
import FieldText from "../FieldText";
import DropdownList from "../DropdownList";



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

    return (
        <section class="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <FieldText label="Nome" placeholder="Digite seu nome" />
                <FieldText label="Cargo" placeholder="Digite seu cargo" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Times"  itens={times} />
            </form>
        </section>
    )
}

export default Form;