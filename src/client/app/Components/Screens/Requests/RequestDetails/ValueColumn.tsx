import * as React from 'react';

const ValueColumn = (props) => {
    return <div className="col-xs-12 col-sm-6">
        {props.children}
    </div>
}

export default ValueColumn;