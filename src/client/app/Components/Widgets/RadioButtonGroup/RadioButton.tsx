import * as React from 'react';

const RadioButton = (props) => {
    const { setValue } = props;
    return <div style={{ display: 'inline', marginRight: 20 }}>
        <input
        type="radio"
        name={props.name}
        value={props.value}
        style={{ marginTop: 16, width: 14, height: 14 }}
        onChange={() => setValue(props.value)} />
        <label style={{ marginLeft: 6, fontWeight: 'normal', fontSize: 15 }}>{props.label}</label>
    </div>
}

export default RadioButton;