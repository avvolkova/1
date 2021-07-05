import React from 'react'
import Dean from "../dean/Dean";

const Faculty = ({fac, style}) => {
    console.log(fac)
    return (
        <div style={style}>
            <div>{fac.name}</div>
            <Dean style={{...style, padding: '5px'}} dean={fac.dean}
            />
        </div>
    )
}


export default Faculty



