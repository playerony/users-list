import { ReactNode } from 'react';

import { ThemeProvider } from '@context/theme/theme.provider';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => <ThemeProvider>{children}</ThemeProvider>;
