import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get()
  findAll(): string {
    return 'Hello book';
  }

  @Post()
  create(): string {
    return 'Create book';
  }
}
