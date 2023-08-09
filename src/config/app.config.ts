interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Investor'],
  tenantName: 'Startup',
  applicationName: 'Crowd Funding',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
