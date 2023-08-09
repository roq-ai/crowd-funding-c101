import { CapitalRequirementInterface } from 'interfaces/capital-requirement';
import { InvestmentInterface } from 'interfaces/investment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  capital_requirement?: CapitalRequirementInterface[];
  investment?: InvestmentInterface[];
  user?: UserInterface;
  _count?: {
    capital_requirement?: number;
    investment?: number;
  };
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
