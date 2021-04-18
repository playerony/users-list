import { Router } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';

import { AppProvider } from '@context';
import { DashboardPage } from './dashboard.page';

import { usersListMock } from '@mocks';
import { axiosInstance } from '@utils/axios/axios-instance';

const history = createMemoryHistory();

const wrapComponent = () =>
  render(
    <Router history={history}>
      <AppProvider>
        <DashboardPage />
      </AppProvider>
    </Router>,
  );

describe('<DashboardPage /> Component', () => {
  const axiosMock = new MockAdapter(axiosInstance);

  it('should fetch users list', async () => {
    axiosMock.onGet('/users').reply(200, usersListMock);

    const utils = wrapComponent();

    await waitFor(() => utils.getByPlaceholderText('Search by user name...'));

    expect(history.location.pathname).toEqual('/');

    const usersListRecords = utils.container.getElementsByTagName('li');
    expect(usersListRecords).toHaveLength(10);
  });

  it('should filter users list by name', async () => {
    axiosMock.onGet('/users').reply(200, usersListMock);

    const utils = wrapComponent();

    await waitFor(() => utils.getByPlaceholderText('Search by user name...'));

    expect(history.location.pathname).toEqual('/');

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

  it('should catch API call error', async () => {
    axiosMock.onGet('/users').networkError();

    wrapComponent();

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/404');
    });
  });
});
