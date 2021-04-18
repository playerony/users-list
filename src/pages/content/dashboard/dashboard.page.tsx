import { FormEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { UsersList } from './parts';
import { DashboardLayout } from '@layout';
import { Input, BigHeading, LoadingPage } from '@parts';

import { User } from '@interfaces';
import { useGet, useDebounce } from '@hooks';

export const DashboardPage = (): JSX.Element => {
  const { isLoading, hasError, results: users } = useGet<User[]>('/users');

  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (hasError) {
    return <Redirect to="/404" />;
  }

  const onInputChange = (event: FormEvent<HTMLInputElement>): void =>
    setSearchTerm(event.currentTarget.value);

  return (
    <DashboardLayout>
      <BigHeading>users list</BigHeading>
      <Input onChange={onInputChange} placeholder="Search by user name..." />
      <UsersList users={users || []} searchTerm={debouncedSearchTerm} />
    </DashboardLayout>
  );
};
