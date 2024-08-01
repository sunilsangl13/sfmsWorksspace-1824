import { render } from '@testing-library/react';

import SfmsConponentsUi from './sfms-conponents-ui';

describe('SfmsConponentsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SfmsConponentsUi />);
    expect(baseElement).toBeTruthy();
  });
});
