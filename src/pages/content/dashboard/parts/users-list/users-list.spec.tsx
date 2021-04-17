import { render } from '@testing-library/react';

import { AppProvider } from '@context';
import { UsersList } from './users-list.component';

import { usersListMock } from '@mocks';

const wrapComponent = (searchTerm: string = '') =>
  render(
    <AppProvider>
      <UsersList users={usersListMock} searchTerm={searchTerm} />
    </AppProvider>,
  );

describe('<UsersList /> Component', () => {
  it('should render users list', async () => {
    const utils = wrapComponent();

    const usersListRecords = utils.container.getElementsByTagName('li');
    expect(usersListRecords).toHaveLength(10);
  });

  it('should render filtered users list', async () => {
    const utils = wrapComponent('   a    ');

    const usersListRecords = utils.container.getElementsByTagName('li');
    expect(usersListRecords).toHaveLength(7);
  });
});
