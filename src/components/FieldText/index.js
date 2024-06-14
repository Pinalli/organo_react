
import "./FieldText.css";

const FieldText = (props) => {

    const placeholder = `${props.placeholder}`;

    const whenTyping = (event) => {
        props.whenChanged(event.target.value); 
    }

    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyping} required={props.obrigatory} placeholder={placeholder} />
        </div>

    );
}

export default FieldText