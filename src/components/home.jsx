import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import linksData from "../linksData";

require("es6-promise").polyfill();
require("isomorphic-fetch");


const ExpandedComponent = ({ data }) => <pre><object>{JSON.stringify(data, null, 2)}</object></pre>;

const columns = [
    {
      name: "Nome",
      selector: "Nome",
    },
    {
      name: "Url",
      selector: "Url Sito",
      //filter: textFilter(),
    },
    {
      name: "Velocità (in secondi)",
      selector: "Velocità Pagina",
      right: true
    },
    {
      name: "Data di Ultima Analisi",
      selector: "Ultima Data di Analisi",
      sortable: true,
      right: true
    }
  ];

export default function Home() {

    /*const [data, setData] = useState([])
    //const [error, setError] = useState("") 
    //RECUPERO DATI
    useEffect(() => {
        fetch('http://localhost:3000/links')
        .then(response => response.json())
        .then(response => console.log(response))
        //.then(json => setData(json))
    },[])*/

    //SEARCH SITI
    //const [search, setSearch] = useState("");
    //const [filterLinks, setFilterLinks] = useState([]);
    
    //setFilterLinks(linksData);

    /*function search(rows) {
      return rows.filter(row => row.id.toLowerCase().indexOf(s) > -1 )
    }*/


    return (
      
        <Card>
        <DataTable
          title="Tabella Links"
          columns={columns}
          data={linksData}
          defaultSortField="title"
          pagination
          //selectableRows
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          direction="auto"
          expandOnRowClicked
          expandableRowsHideExpander
          fixedHeader
          fixedHeaderScrollHeight="auto"
          highlightOnHover
          responsive
          selectableRowsRadio="radio"
          selectableRowsSingle
          subHeaderAlign="right"
          subHeaderWrap
          subHeader
          subHeaderComponent={
            <input type="text" placeholder="Cerca Sito" className="form-control"
            //value={search}
            //onChange={() => setSearch(e.target.value)}
            //filter={textFilter()}
            />
          }  
        />
      </Card>
      );
}