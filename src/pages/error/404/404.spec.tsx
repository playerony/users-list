import { render } from '@testing-library/react';

import { AppProvider } from '@context';
import { NotFoundPage } from './404.page';

const wrapComponent = () =>
  render(
    <AppProvider>
      <NotFoundPage />
    </AppProvider>,
  );

describe('<NotFoundPage /> Page', () => {
  it('should render with proper error code', async () => {
    const { getByText } = wrapComponent();

    const result = getByText('404');
    expect(result).toBeInTheDocument();
  });
});
