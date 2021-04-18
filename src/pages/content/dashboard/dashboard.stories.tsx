import { storiesOf } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';

import { DashboardPage } from './dashboard.page';

import { usersListMock } from '@mocks';
import { axiosInstance } from '@utils/axios/axios-instance';

storiesOf('Design System/Pages/Dashboard', module).add('default', () => {
  const axiosMock = new MockAdapter(axiosInstance);

  axiosMock.onGet('/users').reply(200, usersListMock);

  return <DashboardPage />;
});
