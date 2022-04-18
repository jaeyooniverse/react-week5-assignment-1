import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import LocationsContainer from './LocationsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsListContainer from './RestaurantsListContainer';

import {
  setLocations,
  setCategories,
  setRestaurants,
} from './actions';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocations(locations));
  }, []);

  useEffect(() => {
    dispatch(setCategories(categories));
  }, []);

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <h2>Location</h2>
      <LocationsContainer />
      <h2>Category</h2>
      <CategoriesContainer />
      <h2>Restaurants</h2>
      <RestaurantsListContainer />
    </>
  );
}
