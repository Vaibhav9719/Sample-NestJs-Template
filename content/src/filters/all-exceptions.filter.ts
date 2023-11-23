import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpException } from '@nestjs/common';
import type { Response } from 'express';
import { I18nService } from 'nestjs-i18n';
// import path from 'path';

@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly i18n: I18nService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const message = exception.getResponse() as {
      key: string;
      args: Record<string, unknown>;
    };
    // console.log(`Current directory: ${process.cwd()}`, statusCode, '--------------err');

    // message = await this.i18n.translate(message.key, {
    //   lang: ctx.getRequest().i18nLang,
    //   args: message.args,
    // });
    // message = 'err' as any;
    response.status(statusCode).json({ statusCode, message });
  }
}
