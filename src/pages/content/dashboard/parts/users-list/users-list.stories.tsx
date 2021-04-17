import { storiesOf } from '@storybook/react';

import { UsersList } from './users-list.component';

import { usersListMock } from '@mocks';

storiesOf('pages/Dashboard/UsersList', module).add('default', () => (
  <UsersList users={usersListMock} searchTerm="" />
));
