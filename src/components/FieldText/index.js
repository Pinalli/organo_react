import "./FieldText.css";

const FieldText = (props) => {
    const placeholder = `${props.placeholder}`;
    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatory} placeholder={placeholder}/>
        </div>

    );
}

export default FieldText