import "./FieldText.css";

const FieldText = (props) => {
    const placeholder = `${props.placeholder}`;
    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholder}/>
        </div>

    );
}

export default FieldText