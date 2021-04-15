import { storiesOf } from '@storybook/react';

import { BigHeading } from './big-heading.component';

storiesOf('BigHeading', module)
  .add('with text', () => <BigHeading>With text</BigHeading>)
  .add('with emoji', () => <BigHeading>😳 🥵 🥶 😱</BigHeading>);
