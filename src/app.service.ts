import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { response } from 'express';
import { STATUS_CODES } from 'http';

@Injectable()

export class AppService {
  getOk() {
    new Logger.log("AppService")
    return  response.status(HttpStatus.OK).send("OK!!");
  }
}
