import axios from 'axios';
import queryString from 'query-string';
import { CapitalRequirementInterface, CapitalRequirementGetQueryInterface } from 'interfaces/capital-requirement';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCapitalRequirements = async (
  query?: CapitalRequirementGetQueryInterface,
): Promise<PaginatedInterface<CapitalRequirementInterface>> => {
  const response = await axios.get('/api/capital-requirements', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCapitalRequirement = async (capitalRequirement: CapitalRequirementInterface) => {
  const response = await axios.post('/api/capital-requirements', capitalRequirement);
  return response.data;
};

export const updateCapitalRequirementById = async (id: string, capitalRequirement: CapitalRequirementInterface) => {
  const response = await axios.put(`/api/capital-requirements/${id}`, capitalRequirement);
  return response.data;
};

export const getCapitalRequirementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/capital-requirements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCapitalRequirementById = async (id: string) => {
  const response = await axios.delete(`/api/capital-requirements/${id}`);
  return response.data;
};
