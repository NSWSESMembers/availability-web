import * as React from 'react';

const CheckBox = (props) => {
    const { onChange } = props;
    return <div>
        <input
        type="checkbox"
        name={props.name}
        style={{ marginTop: 16, width: 14, height: 14 }}
        onChange={(event) => onChange(event.target.checked)} />
        <label style={{ marginLeft: 6, fontWeight: 'normal', fontSize: 15 }}>{props.label}</label>
    </div>
}

export default CheckBox;