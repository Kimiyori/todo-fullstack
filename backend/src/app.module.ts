import { Module } from '@nestjs/common';
import { SectionModule } from './section/section.module';
import { PrismaModule } from 'nestjs-prisma';
import { ItemModule } from './item/item.module';
@Module({
  imports: [
    SectionModule,
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: {
          log: ['info', 'query'],
        },
        explicitConnect: false,
      }),
    }),
    ItemModule,
  ],
})
export class AppModule {}
