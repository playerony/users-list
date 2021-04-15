import { Input } from '@parts/input/input.component';
import { BigHeading } from '@parts/big-heading/big-heading.component';

import { CenterBlockLayout } from '../center-block/center-block.layout';

import { StyledContentWrapper } from './dashboard.styles';

export const DashboardLayout = (): JSX.Element => (
  <CenterBlockLayout>
    <StyledContentWrapper>
      <BigHeading>Users list</BigHeading>
      <Input placeholder="Search by user name..." />
    </StyledContentWrapper>
  </CenterBlockLayout>
);
