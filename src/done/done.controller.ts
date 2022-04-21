import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoneService } from './done.service';
import { CreateDoneDto } from './dto/create-done.dto';
import { UpdateDoneDto } from './dto/update-done.dto';

@Controller('done')
export class DoneController {
  constructor(private readonly doneService: DoneService) {}

  @Post()
  create(@Body() createDoneDto: CreateDoneDto) {
    return this.doneService.create(createDoneDto);
  }

  @Get()
  findAll() {
    return this.doneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoneDto: UpdateDoneDto) {
    return this.doneService.update(+id, updateDoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doneService.remove(+id);
  }
}
