import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { AppProvider } from '@context';

import { App } from './app';

const wrapComponent = () =>
  render(
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>,
  );

describe('<App /> Component', () => {
  it('should render without crashing', () => {
    const { container } = wrapComponent();

    expect(container).toBeInTheDocument();
  });
});
