import { flowersApi } from '@/entities/flower';

const bootstrap = async () => {
  const response = await flowersApi.getFlowers();
  const template = document.getElementById(
    'hero-product'
  ) as HTMLTemplateElement | null;
  const products = document.getElementById('hero-products');

  if (!template || !products) {
    return;
  }

  response.forEach((flower) => {
    const clone = template.content.cloneNode(true) as HTMLElement;

    const title = clone.querySelector('.j-product-title')!;
    const image = clone.querySelector('.j-product-image')!;

    title.innerHTML = title.innerHTML.replace('{{name}}', flower.common_name);
    image.setAttribute('src', flower.cover_image);

    products.appendChild(clone);
  });
};

bootstrap();
