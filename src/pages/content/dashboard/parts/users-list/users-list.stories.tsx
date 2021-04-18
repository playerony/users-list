import { storiesOf } from '@storybook/react';

import { UsersList } from './users-list.component';

import { usersListMock } from '@mocks';

storiesOf('Design System/Pages/Dashboard/Parts/UsersList', module).add('default', () => (
  <UsersList users={usersListMock} searchTerm="" />
));
