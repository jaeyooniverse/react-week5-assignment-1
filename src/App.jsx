import React, { useState } from 'react';

import Locations from './Locations';
import Categories from './Categories';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';

export default function App() {
  const [state, setState] = useState({
    selectedlocationname: '',
    selectedcategoryname: '',
  });

  const { selectedlocationname, selectedcategoryname } = state;

  function handleClickLocation(event) {
    setState({
      ...state,
      selectedlocationname: event.target.value,
    });
  }

  function handleClickCategory(event) {
    setState({
      ...state,
      selectedlocationname: event.target.value,
    });
  }

  return (
    <div>
      <Locations
        locations={locations}
        onClick={handleClickLocation}
        selectedlocationname={selectedlocationname}
      />
      <Categories
        categories={categories}
        onClick={handleClickCategory}
        selectedcategoryname={selectedcategoryname}
      />
    </div>
  );
}
