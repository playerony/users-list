import { Redirect } from 'react-router-dom';

import { DashboardLayout } from '@layout/dashboard/dashboard.layout';
import { LoadingPage } from '@parts/loading-page/loading-page.component';

import { User } from '@interfaces';

import { useGet } from '@hooks/use-get/use-get.hook';

export const DashboardPage = (): JSX.Element => {
  const [
    {
      state: { isLoading, hasError, results },
    },
  ] = useGet<User[]>('/users');

  if (isLoading) {
    return <LoadingPage />;
  }

  if (hasError) {
    return <Redirect to="/404" />;
  }

  const users = results || [];

  return <DashboardLayout users={users} />;
};
