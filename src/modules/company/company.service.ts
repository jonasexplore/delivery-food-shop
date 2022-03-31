import { Injectable } from '@nestjs/common';
import { prisma } from 'src/infra/database/prisma';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Injectable()
export class CompanyService {
  create(createCompanyInput: CreateCompanyInput) {
    return prisma.company.create({
      data: createCompanyInput,
    });
  }

  findAll() {
    return prisma.company.findMany();
  }

  findOne(id: string) {
    return prisma.company.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateCompanyInput: UpdateCompanyInput) {
    return prisma.company.update({
      where: {
        id,
      },
      data: updateCompanyInput,
    });
  }

  remove(id: string) {
    return prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
