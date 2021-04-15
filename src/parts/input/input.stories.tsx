import { storiesOf } from '@storybook/react';

import { Input } from './input.component';

storiesOf('Input', module)
  .add('without placeholder', () => <Input onClick={() => console.log('click!')} />)
  .add('with placeholder', () => (
    <Input onClick={() => console.log('click!')} placeholder="placeholder" />
  ))
  .add('with value', () => <Input value="value" onClick={() => console.log('click!')} />);
