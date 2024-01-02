import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { MessageDto } from './message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;
  constructor(messageService: MessagesService) {
    this.messageService = messageService;
  }

  @Get()
  getMessages(): string {
    return 'hello messages';
  }

  @Get('/:id')
  getMessagesbyId(@Param('id') id: string): string {
    console.log(id);
    throw new NotFoundException('knfkndfnkdf');
    return 'hello messages';
  }

  @Post()
  postMessages(@Body() body: MessageDto): string {
    console.log(body);
    return 'post messages';
  }

  @Patch()
  async patchMessages(@Body() body: any): Promise<string> {
    console.log(body);
    const result = await this.messageService.patched();
    return result;
  }
}
