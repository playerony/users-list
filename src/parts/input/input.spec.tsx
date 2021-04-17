import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProvider } from '@context';
import { Input } from './input.component';
import { InputProps } from './input.types';

const wrapComponent = (props: InputProps = {}) =>
  render(
    <AppProvider>
      <Input {...props} />
    </AppProvider>,
  );

describe('<Input /> Component', () => {
  it('render and type something', async () => {
    const { container } = wrapComponent();

    const input = container.getElementsByTagName('input')[0];
    if (!input) {
      return;
    }

    await fireEvent.mouseDown(input);
    await userEvent.type(input, 'test');

    expect(input.value).toEqual('test');
  });
});
