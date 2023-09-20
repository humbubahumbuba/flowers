import { flowersApi } from '@/entities/flower';

const bootstrap = async () => {
  const response = await flowersApi.getFlowers();

  console.log(response);
};

bootstrap();
