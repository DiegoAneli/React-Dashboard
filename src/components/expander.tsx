import * as React from 'react';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';

//E' STATA FATTA UNA PROVA CON UN EXPANDER, OVVERO UNA SEZIONE AGGIUNTIVA DELLA ROW, 
//MA IL DATO RECUPERATO DAL JSON HA BISOGNO DI UN INTERFACCIA DEDICATA
//AL MOMENTO NON è COLLEGATO AL PROGETTO


interface Row {
    title: string;
    director: string;
    year: string;
}

interface Props extends ExpanderComponentProps<Row> {

    someTitleProp?: string;
}

const ExpandableRowComponent: React.FC<Props> = ({ data, someTitleProp }) => {
    return (
        <>
            <p>{someTitleProp}</p>
            <p>{data.title}</p>
            <p>{data.director}</p>
            <p>{data.year}</p>
        </>
    );
};
