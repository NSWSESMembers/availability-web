import * as React from 'react';

const TitleColumn = (props) => {
    return <div className="col-xs-12 col-sm-2 text-sm-right">
        <h5 className="alignWithWidget"><strong>{props.title}</strong></h5>
    </div>
}

export default TitleColumn;