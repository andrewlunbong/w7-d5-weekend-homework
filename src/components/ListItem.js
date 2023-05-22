import React from 'react';
import './ListItem.css';


const ListItem = ({country}) => {

  
 
  return <option value={country.cca2}>{country.name.common}</option>
}

export default ListItem;