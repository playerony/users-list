import { render } from '@testing-library/react';

import { AppProvider } from '@context';
import { Record } from './record.component';

import { userMock } from '@mocks';

const wrapComponent = () =>
  render(
    <AppProvider>
      <Record user={userMock} />
    </AppProvider>,
  );

describe('<Record /> Component', () => {
  it('should render without crashing', async () => {
    const { container } = wrapComponent();

    expect(container).toBeInTheDocument();
  });
});
