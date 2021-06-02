import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

describe('buttonList', () => {
  context('when nothing is selected', () => {
    it('renders buttons with name', () => {
      const names = [1, 2, 3, 4];
      const handleClick = jest.fn();
      const selected = null;

      const { getAllByRole, queryByText } = render(
        <ButtonList
          names={names}
          onClick={handleClick}
          selected={selected}
        />,
      );

      expect(getAllByRole('button')).toHaveLength(names.length);
      expect(queryByText(/(V)/)).not.toBeInTheDocument();
    });
  });

  context('when something is selected', () => {
    it('renders buttons and adds (V) to selected one', () => {
      const names = [1, 2, 3, 4];
      const handleClick = jest.fn();
      const selected = 1;

      const { getAllByRole, getByText } = render(
        <ButtonList
          names={names}
          onClick={handleClick}
          selected={selected}
        />,
      );

      expect(getAllByRole('button')).toHaveLength(names.length);
      expect(getByText(/(V)/)).toBeInTheDocument();
    });
  });
});
