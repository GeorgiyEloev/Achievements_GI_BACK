import { Injectable } from '@nestjs/common';
import { CreateDoneDto } from './dto/create-done.dto';
import { UpdateDoneDto } from './dto/update-done.dto';

@Injectable()
export class DoneService {
  create(createDoneDto: CreateDoneDto) {
    return 'This action adds a new done';
  }

  findAll() {
    return `This action returns all done`;
  }

  findOne(id: number) {
    return `This action returns a #${id} done`;
  }

  update(id: number, updateDoneDto: UpdateDoneDto) {
    return `This action updates a #${id} done`;
  }

  remove(id: number) {
    return `This action removes a #${id} done`;
  }
}
