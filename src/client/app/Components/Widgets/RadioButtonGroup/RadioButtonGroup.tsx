import * as React from 'react';

const RadioButtonGroup = (props) => {
    const { name } = props;
    const childrenWithProps = React.Children.map(props.children,
        (child, index) => React.cloneElement(child as React.ReactElement<any>, {
            name: name,
            setValue: (value) => {
                if (props.valueChanged !== null) {
                    props.onValueChanged(value);
                }
            }
        }));

    return <div>
        {childrenWithProps}
    </div>
}

export default RadioButtonGroup;