import { ReactNode } from 'react';

import { ThemeProvider } from '@context';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => <ThemeProvider>{children}</ThemeProvider>;
