import { render } from '@testing-library/react';

import { AppProvider } from '@context';
import { LoadingPage } from './loading-page.component';

const wrapComponent = () =>
  render(
    <AppProvider>
      <LoadingPage />
    </AppProvider>,
  );

describe('<LoadingPage /> Component', () => {
  it('should render without crashing', async () => {
    const { container } = wrapComponent();

    expect(container).toBeInTheDocument();
  });
});
