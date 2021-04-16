import React from 'react';

import { Record } from './parts/record/record.component';

import { compareWordsWithoutAccents } from '@functions';

import { UsersListProps } from './users-list.types';
import { StyledWrapper } from './users-list.styles';

export const UsersList = ({ users, searchFor }: UsersListProps): JSX.Element => {
  const filteredUsers = users.filter((user) => compareWordsWithoutAccents(user.name, searchFor));

  const noData = !users.length;
  const noFilteredRecords = !filteredUsers.length;

  return (
    <StyledWrapper centerContent={noData || noFilteredRecords}>
      {filteredUsers.length
        ? React.Children.toArray(filteredUsers.map((user) => <Record user={user} />))
        : null}
      {noData ? <h1>no data</h1> : null}
      {noFilteredRecords ? <h1>no records</h1> : null}
    </StyledWrapper>
  );
};
