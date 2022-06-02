import React from "react";

//PROVA DI POPOLAMENTO CON LIBRERIA DIFFERENTE DA QUELLA IN USO, 
//IL PROBLEMA STA NEL TIPO DI OGGETTO CHE DEVE ESSERE TYPESCRIPT

export default function Datatables({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    return <table cellPadding={0} cellSpacing={0}>

        <thead>
            <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>

        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                columns.map(column => <td>{row}</td>)
                }
            </tr>)}
        </tbody>
    </table>
}