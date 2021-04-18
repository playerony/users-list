import { CenterBlockLayout } from '../center-block/center-block.layout';

import { DashboardLayoutProps } from './dashboard.types';
import { StyledContentWrapper } from './dashboard.styles';

export const DashboardLayout = ({ children }: DashboardLayoutProps): JSX.Element => (
  <CenterBlockLayout>
    <StyledContentWrapper>{children}</StyledContentWrapper>
  </CenterBlockLayout>
);
