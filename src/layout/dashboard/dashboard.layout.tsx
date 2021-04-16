import { CenterBlockLayout } from '../center-block/center-block.layout';

import { StyledContentWrapper } from './dashboard.styles';
import { DashboardLayoutProps } from './dashboard.types';

export const DashboardLayout = ({ children }: DashboardLayoutProps): JSX.Element => (
  <CenterBlockLayout>
    <StyledContentWrapper>{children}</StyledContentWrapper>
  </CenterBlockLayout>
);
