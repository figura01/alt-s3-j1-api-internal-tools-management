import { Injectable } from '@nestjs/common';
import { Tool } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ToolsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Tool[]> {
    return this.prisma.tool.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
