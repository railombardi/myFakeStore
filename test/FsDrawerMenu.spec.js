import { shallowMount, createLocalVue } from '@vue/test-utils';
import FsDrawerMenu from '@/components/FsDrawerMenu.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const localVue = createLocalVue();
localVue.component('font-awesome-icon', FontAwesomeIcon);

describe('FsDrawerMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FsDrawerMenu, {
      localVue,
      propsData: {
        show: true,
      },
      mocks: {
        $axios: {
          get: jest.fn().mockResolvedValue({ data: ['Category1', 'Category2'] }),
        },
      },
    });
  });

  it('renderiza o componente corretamente', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('translate-x-0');
  });

  it('verifica se o título é renderizado corretamente', () => {
    const title = wrapper.find('.header-title');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('FakeStore');
  });

  it('verifica se as categorias são renderizadas', () => {
    const categoryList = wrapper.find('ul');
    expect(categoryList.exists()).toBe(true);
    const categoryElements = categoryList.findAll('li');
    expect(categoryElements.length).toBe(2);
  });

  it('verifica se o evento closeDrawer é emitido ao clicar no ícone de fechar', async () => {
    const closeButton = wrapper.find('.close-icon');
    await closeButton.trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('verifica se a solicitação para getAllCategories é feita', async () => {
    await wrapper.vm.getAllCategories();
    expect(wrapper.vm.categories).toEqual(['Category1', 'Category2']);
    expect(wrapper.vm.$axios.get).toHaveBeenCalledWith('/products/categories');
  });

  it('verifica se a classe "translate-x-full" é aplicada quando show é falso', async () => {
    await wrapper.setProps({ show: false });
    expect(wrapper.classes()).toContain('translate-x-full');
  });
});