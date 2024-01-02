import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/g1')
  getbbHello(): string {
    return 'g1';
  }

  @Post('/g1')
  postbbHello(): string {
    return 'posted';
  }
}
