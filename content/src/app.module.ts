import './boilerplate.polyfill';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import path from 'path';
import type { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';

import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { AuthModule } from './modules/auth/auth.module';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // RouterModule.register([
    //     {
    //       path: '/',
    //       module: AuthModule,
    //     },
    //   ]),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        // console.log({ postgresConfig: configService.postgresConfig })
        configService.postgresConfig,
      dataSourceFactory: async (options: DataSourceOptions) => {
        // console.log('DB init0------',options);

        const dataSource = await new DataSource(options).initialize();

        // console.log('DB init1------',dataSource);
        return dataSource;
      },
      inject: [ApiConfigService],
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ApiConfigService) => ({
        fallbackLanguage: configService.fallbackLanguage,
        loaderOptions: {
          path: path.join(__dirname, '/i18n/'),
          watch: configService.isDevelopment,
        },
      }),
      imports: [SharedModule],
      // parser: I18nJsonParser,
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
      inject: [ApiConfigService],
    }),
    HealthCheckerModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
