import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from './fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = (name = '') => render(
    <Regions
      regions={regions}
      regionName={name}
      onClick={handleClick}
    />,
  );

  it('show all regions', () => {
    const { getByText } = renderRegions();

    regions.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });

  context('click region', () => {
    it('calls handleClick function', () => {
      const { getByText } = renderRegions();

      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalled();
    });

    it('be marked check', () => {
      const { getByText } = renderRegions();

      fireEvent.click(getByText('서울'));

      const { container } = renderRegions('서울');

      expect(container).toHaveTextContent('서울(V)');
    });
  });
});
