import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { AppProvider } from '@context/app/app.provider';

import { App } from './app';

const wrapComponent = (props = {}) => {
  const defaultProps = {};

  return render(
    <Router>
      <AppProvider>
        <App {...defaultProps} {...props} />
      </AppProvider>
    </Router>,
  );
};

describe('<App /> Component', () => {
  test('should render without crashing', () => {
    const { container } = wrapComponent();

    expect(container).toBeInTheDocument();
  });
});
