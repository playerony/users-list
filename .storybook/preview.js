import { AppProvider } from '@context';

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Raleway:400,500,700&display=swap"
        rel="stylesheet"
      ></link>
    </AppProvider>
  ),
];
