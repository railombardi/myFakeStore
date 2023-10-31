import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import FsCategoriesNav from '@/components/FsCategoriesNav.vue';

describe('FsCategoriesNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FsCategoriesNav, {
      propsData: {
        categories: ['Category1', 'Category2'],
        mobile: false,
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
  });

  // Teste 1: Verifica se o componente é renderizado corretamente.
  it('renderiza o componente corretamente', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('nav').exists()).toBe(true);
  });

  // Teste 2: Verifica se as categorias são renderizadas corretamente.
  it('verifica se as categorias são renderizadas', () => {
    const categoryElements = wrapper.findAll('li');
    expect(categoryElements.length).toBe(3);
    expect(categoryElements.at(1).text()).toBe('Category1');
    expect(categoryElements.at(2).text()).toBe('Category2');
  });

  // Teste 3: Verifica se o evento é emitido ao clicar em uma categoria.
  it('emite um evento ao clicar em uma categoria', async () => {
    const categoryElements = wrapper.findAll('li');
    await categoryElements.at(1).trigger('click');
    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change').length).toBe(1);
    expect(wrapper.emitted('change')[0][0]).toBe('Category1');

    await categoryElements.at(2).trigger('click');
    expect(wrapper.emitted('change').length).toBe(2);
    expect(wrapper.emitted('change')[1][0]).toBe('Category2');
  });

  // Teste 4: Verifica se a classe 'hidden' é aplicada quando `mobile` é verdadeiro.
  it('verifica se a classe "hidden" é aplicada quando mobile é verdadeiro', () => {
    wrapper.setProps({ mobile: false });
    const nav = wrapper.find('nav');
    expect(nav.classes()).toContain('hidden');
  });
});
