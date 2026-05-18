import { PartialType } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';
import { CreateToolDto } from './create-tool.dto';
import { toolStatuses } from '../types/tool.enums';
import type { ToolStatus } from '../types/tool.enums';

export class UpdateToolDto extends PartialType(CreateToolDto) {
  @ApiPropertyOptional({
    enum: toolStatuses,
    example: 'deprecated',
  })
  @IsOptional()
  @IsIn(['active', 'deprecated', 'trial'])
  status?: ToolStatus;
}
