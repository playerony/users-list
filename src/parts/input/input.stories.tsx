import { storiesOf } from '@storybook/react';

import { Input } from './input.component';

storiesOf('Design System/Parts/Input', module).add('default', () => (
  <Input placeholder="Input text..." />
));
