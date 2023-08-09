const mapping: Record<string, string> = {
  'capital-requirements': 'capital_requirement',
  investments: 'investment',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
