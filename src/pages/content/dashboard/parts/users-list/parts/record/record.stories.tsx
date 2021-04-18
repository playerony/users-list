import { storiesOf } from '@storybook/react';

import { Record } from './record.component';

import { userMock } from '@mocks';

storiesOf('Design System/Pages/Dashboard/Parts/UsersList/Parts/Record', module).add(
  'default',
  () => <Record user={userMock} />,
);
