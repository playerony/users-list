import { useState, FormEvent } from 'react';

import { Input } from '@parts/input/input.component';
import { UsersList } from './parts/users-list/users-list.component';
import { BigHeading } from '@parts/big-heading/big-heading.component';
import { CenterBlockLayout } from '../center-block/center-block.layout';

import { StyledContentWrapper } from './dashboard.styles';
import { DashboardLayoutProps } from './dashboard.types';

export const DashboardLayout = ({ users }: DashboardLayoutProps): JSX.Element => {
  const [searchFor, setSearchFor] = useState<string>('');

  const onInputChange = (event: FormEvent<HTMLInputElement>): void =>
    setSearchFor(event.currentTarget.value);

  return (
    <CenterBlockLayout>
      <StyledContentWrapper>
        <BigHeading>Users list</BigHeading>
        <Input value={searchFor} onChange={onInputChange} placeholder="Search by user name..." />
        <UsersList users={users} searchFor={searchFor} />
      </StyledContentWrapper>
    </CenterBlockLayout>
  );
};
