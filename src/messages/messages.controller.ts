import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'all messages are here';
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);

    return 'i need id for special message ';
  }
}
