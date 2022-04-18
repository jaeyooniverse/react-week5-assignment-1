import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
    categories,
    restaurants,
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setLocations',
    payload: { locations },
  });

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('양천주가')).not.toBeNull();
});
