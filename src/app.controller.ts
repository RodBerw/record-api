import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('message')
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public getMessage(@Query('id') id: number) {
    return this.appService.selectMessage(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public createMessage(@Body() body): object {
    return this.appService.createMessage(body);
  }
}
