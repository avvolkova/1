import React from 'react'
import './App.css';
import Faculty from './faculty/Faculty';


function App() {
    const university = {
        university: "MSU",
        faculty1: {name: "math", dean: "Василий Иванович"},
        faculty2: {name: "management", dean: "Виктор Петрович"}
    }

    const style = {display: 'flex', justifyContent: 'center'};
    return (
        <>
            <h1>"MSU"</h1>
            <div style={style}>
                <Faculty style={{...style, border: '3px solid grey', padding: '30px'}} fac={university.faculty1}/>
                <Faculty style={{...style, border: '3px solid blue', padding: '30px'}} fac={university.faculty2}/>
            </div>
        </>
    );
}

export default App;
