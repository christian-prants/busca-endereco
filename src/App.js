import React, {useState} from 'react';

import SearchCep from './Components/CEP/SearchCep';
import ListCEP from './Components/CEP/ListCEP';

import classes from './App.module.css';

const App = () => {
  const [newCEP, setNewCEP] = useState([]);

  const addCEPDataList = (data) => {
    setNewCEP( prevData => {return [...prevData, data]} )
    console.log(newCEP)
  }

  return (
    <>
      <div className={classes.teste}>
      <div className={classes.line}>
        <SearchCep items={newCEP} onGetCEP={addCEPDataList} />
        <ListCEP items={newCEP} />   
      </div>        
      </div>
    </>
  );
}

export default App;
