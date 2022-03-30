import { Injectable } from '@nestjs/common';
import { prisma } from 'src/infra/database/prisma';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Injectable()
export class CompanyService {
  create(createCompanyInput: CreateCompanyInput) {
    return 'This action adds a new company';
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
    return `This action updates a #${id} company`;
  }

  remove(id: string) {
    return `This action removes a #${id} company`;
  }
}
