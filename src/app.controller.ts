import { Controller, Get, HttpCode, HttpStatus, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';

@ApiTags("healt check")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  async getHello()  {
    return await this.appService.getOk();
  }
}
