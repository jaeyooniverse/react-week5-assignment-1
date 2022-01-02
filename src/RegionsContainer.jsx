// import RegionsContainer from './RegionsContainer';
// import CategoriesContainer from './CategoriesContainer';
// import RestaurantsContainer from './RestaurantsContainer';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => state);

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
  }

  return (
    <ul>
      {regions && regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion && region.id === selectedRegion.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
