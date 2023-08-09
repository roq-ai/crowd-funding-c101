import { StartupInterface } from 'interfaces/startup';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvestmentInterface {
  id?: string;
  amount: number;
  startup_id?: string;
  investor_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvestmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
  investor_id?: string;
}
