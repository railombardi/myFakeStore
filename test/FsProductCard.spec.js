import { shallowMount } from '@vue/test-utils';
import FsProductCard from '@/components/FsProductCard.vue';

describe('FsProductCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FsProductCard, {
      propsData: {
        product: {
          image: 'product-image-url.jpg',
          title: 'Product Title',
          category: 'Category Name',
          price: 99.99,
        },
      },
    });
  });

  it('renderiza o componente corretamente', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('verifica se a imagem é renderizada corretamente', () => {
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
    expect(image.attributes('src')).toBe('product-image-url.jpg');
  });

  it('verifica se o título é renderizado corretamente', () => {
    const title = wrapper.find('.font-bold');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Product Title');
  });

  it('verifica se a categoria e o preço são renderizados corretamente', () => {
    const category = wrapper.findAll('span').at(1);
    const price = wrapper.findAll('span').at(2);
    expect(category.text()).toBe('Category Name');
    expect(price.text()).toBe('$99.99');
  });
});
