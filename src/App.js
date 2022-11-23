import React, {useState} from 'react';
import * as XLSX from 'xlsx';

import SearchCep from './Components/CEP/SearchCep';
import ListCEP from './Components/CEP/ListCEP';

import classes from './App.module.css';

const App = () => {
  const [newCEP, setNewCEP] = useState([]);

  const addCEPDataList = (data) => {
    setNewCEP( prevData => {return [...prevData, data]} )
    console.log(newCEP)
  }

  const handleExport = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(newCEP)

    XLSX.utils.book_append_sheet(wb, ws, 'TabelaCEPs')
    XLSX.writeFile(wb, 'NovaTabelaCEPs.xlsx')
  }

  return (
    <>
      <div className={classes.teste}>
        <div className={classes.line}>
          <SearchCep items={newCEP} onGetCEP={addCEPDataList} />
          <ListCEP items={newCEP} onExport={handleExport} />   
        </div>        
      </div>
    </>
  );
}

export default App;
