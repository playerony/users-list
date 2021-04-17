import { storiesOf } from '@storybook/react';

import { Record } from './record.component';

import { userMock } from '@mocks';

storiesOf('UI/Record', module).add('default', () => <Record user={userMock} />);
