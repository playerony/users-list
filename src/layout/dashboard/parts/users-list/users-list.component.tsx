import React from 'react';

import { Record } from './parts/record/record.component';

import { UsersListProps } from './users-list.types';
import { StyledWrapper } from './users-list.styles';

export const UsersList = ({ users, searchFor }: UsersListProps): JSX.Element => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchFor.toLowerCase()),
  );

  return (
    <StyledWrapper>
      {React.Children.toArray(filteredUsers.map((user) => <Record user={user} />))}
    </StyledWrapper>
  );
};
