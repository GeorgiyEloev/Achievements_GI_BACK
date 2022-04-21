import { PartialType } from '@nestjs/mapped-types';
import { CreateDoneDto } from './create-done.dto';

export class UpdateDoneDto extends PartialType(CreateDoneDto) {}
