import { User } from '@interfaces/user.interface';

export interface UsersListProps {
  users: User[];
  searchTerm: string;
}
