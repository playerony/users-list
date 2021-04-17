import { storiesOf } from '@storybook/react';

import { Record } from './record.component';

import { userMock } from '@mocks';

storiesOf('pages/Dashboard/UsersList/Record', module).add('default', () => (
  <Record user={userMock} />
));
