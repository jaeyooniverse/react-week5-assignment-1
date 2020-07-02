import { regions } from '../__fixture__/data';

import reducer from './reducer';

import { setInitRegions, selectRegion } from './action';

describe('reducer', () => {
  describe('setInitRegions', () => {
    it('set regions', () => {
      const prevState = {
        regions: [],
      };

      const newState = reducer(prevState, setInitRegions(regions));

      expect(newState.regions).not.toHaveLength(0);
    });
  });

  describe('selectRegion', () => {
    it('shows a mark for a selected region', () => {
      const prevState = {
        selectedRegion: '',
      };

      const newState = reducer(prevState, selectRegion('서울'));

      expect(newState.selectedRegion).toBe('서울');
    });
  });

  describe('selectedCategory', () => {
    it('shows a mark for a selected region', () => {
      const prevState = {
        selectedCategory: '',
      };

      const newState = reducer(prevState, selectCategory('한식'));

      expect(newState.selectedCategory).toBe('한식');
    });
  });



  context('without previousState', () => {
    it('return initState', () => {
      const newState = reducer(undefined, {});

      expect(newState.regions).toHaveLength(0);
      expect(newState.selectedRegion).toBe('');
    });
  });
});
