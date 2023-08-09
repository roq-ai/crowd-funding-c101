import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { capitalRequirementValidationSchema } from 'validationSchema/capital-requirements';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.capital_requirement
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCapitalRequirementById();
    case 'PUT':
      return updateCapitalRequirementById();
    case 'DELETE':
      return deleteCapitalRequirementById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCapitalRequirementById() {
    const data = await prisma.capital_requirement.findFirst(convertQueryToPrismaUtil(req.query, 'capital_requirement'));
    return res.status(200).json(data);
  }

  async function updateCapitalRequirementById() {
    await capitalRequirementValidationSchema.validate(req.body);
    const data = await prisma.capital_requirement.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCapitalRequirementById() {
    const data = await prisma.capital_requirement.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
