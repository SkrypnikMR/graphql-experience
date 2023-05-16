import { Logger, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

export const GraphQLClientProvider: Provider = {
  provide: 'GraphQLClient',
  useFactory: (configService: ConfigService) => {
    const backendPort = configService.get<string>('BACKEND_PORT');
    let backendHost = configService.get<string>('BACKEND_HOST');

    if (backendHost === 'backend') {
      backendHost = `http://${backendHost}:`;
    }

    const url = `${backendHost}${backendPort}/graphql`;
    Logger.log(`requests from GraphQLClient to ${url}`);
    return new GraphQLClient(url);
  },
  inject: [ConfigService],
};
