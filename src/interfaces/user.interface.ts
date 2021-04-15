import { Address } from './address.interface';
import { Company } from './company.interface';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;

  address: Address;
  company: Company;
}
