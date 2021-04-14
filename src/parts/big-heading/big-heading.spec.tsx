import { render, screen } from '@testing-library/react';

import { BigHeading } from './big-heading.component';
import { AppProvider } from '@context/app/app.provider';

describe('<BigHeading /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test label';

    render(
      <AppProvider>
        <BigHeading>{label}</BigHeading>
      </AppProvider>,
    );

    const items = await screen.findAllByText(label);
    expect(items).toHaveLength(1);
  });
});
