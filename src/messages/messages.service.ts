import { Post } from '@nestjs/common';
import { MessageRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessageRepository) {}

  async posted() {
    return this.messageRepository.posted();
  }

  async patched() {
    return this.messageRepository.patched();
  }
}
