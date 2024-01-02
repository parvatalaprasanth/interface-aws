import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
  async posted() {
    return 'post from repo';
  }

  async patched() {
    return 'patch from repo';
  }
}
