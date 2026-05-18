import { ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';

import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { departments, toolStatuses } from '../types/tool.enums';

import type { Department, ToolStatus } from '../types/tool.enums';

export class QueryToolsDto {
  @ApiPropertyOptional({
    enum: departments,
  })
  @IsOptional()
  @IsIn(departments)
  department?: Department;

  @ApiPropertyOptional({
    enum: toolStatuses,
  })
  @IsOptional()
  @IsIn(toolStatuses)
  status?: ToolStatus;

  @ApiPropertyOptional({ type: Number, example: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  min_cost?: number;

  @ApiPropertyOptional({ type: Number, example: 50 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  max_cost?: number;

  @ApiPropertyOptional({
    example: 'Development',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({
    type: Number,
    example: 1,
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @ApiPropertyOptional({
    type: Number,
    example: 10,
    default: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit = 10;

  @ApiPropertyOptional({
    enum: ['name', 'monthly_cost', 'created_at'],
    default: 'created_at',
  })
  @IsOptional()
  @IsIn(['name', 'monthly_cost', 'created_at'])
  sort_by: 'name' | 'monthly_cost' | 'created_at' = 'created_at';

  @ApiPropertyOptional({
    enum: ['asc', 'desc'],
    default: 'desc',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sort_order: 'asc' | 'desc' = 'desc';
}
