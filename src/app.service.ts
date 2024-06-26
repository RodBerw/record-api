import { Injectable } from '@nestjs/common';
import { Message } from './models/Message';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {
  public constructor(
    @InjectModel(Message)
    private message : typeof Message,
  ) {}

  public async selectMessage(user_id_send: number) {
    return user_id_send
      ? await this.message.findAll({
          where: {
            user_id_send: user_id_send,
          },
        })
      : await this.message.findAll();
  }

  public async createMessage(body: any) {
    try {
      console.log(body)
      const newMessage = await this.message.create(body);
      return {message: 'ok', newMessage};
    } catch (error) {
      console.error('Error creating message:', error);
      throw new Error('Could not create message');
    }
  }
}
