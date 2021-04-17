import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';

import { AppProvider } from '@context';
import { DashboardPage } from './dashboard.page';

const wrapComponent = () =>
  render(
    <AppProvider>
      <DashboardPage />
    </AppProvider>,
  );

describe('<DashboardPage /> Component', () => {
  it('should fetch users list', async () => {
    const utils = wrapComponent();

    await waitFor(() => utils.getByPlaceholderText('Search by user name...'));

    const usersListRecords = utils.container.getElementsByTagName('li');
    expect(usersListRecords).toHaveLength(10);
  });

  it('should filter users list by name', async () => {
    const utils = wrapComponent();

    await waitFor(() => utils.getByPlaceholderText('Search by user name...'));

    const input = utils.getByPlaceholderText('Search by user name...');
    if (!input) {
      return;
    }

    await userEvent.type(input, 'l');
    await waitFor(() => {
      expect(utils.container.getElementsByTagName('li')).toHaveLength(9);
    });

    await userEvent.type(input, 'a');
    await waitFor(() => {
      expect(utils.container.getElementsByTagName('li')).toHaveLength(1);
    });
  });
});
