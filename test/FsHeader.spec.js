import { shallowMount, createLocalVue  } from '@vue/test-utils';
import FsHeader from '@/components/FsHeader.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const localVue = createLocalVue();
localVue.component('font-awesome-icon', FontAwesomeIcon);

describe('FsHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FsHeader, {
      localVue
    });
  });

  it('renderiza o componente corretamente', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('verifica se o título é renderizado corretamente', () => {
    const title = wrapper.find('.header-title');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('FakeStore');
  });

  it('verifica se o menu é ocultado por padrão', () => {
    const drawerMenu = wrapper.findComponent({ name: 'FsDrawerMenu' });
    expect(drawerMenu.props('show')).toBe(false);
  });

  it('verifica se o menu é exibido após clicar no ícone de menu', async () => {
    const menuIcon = wrapper.find('.menu-icon');
    await menuIcon.trigger('click');
    const drawerMenu = wrapper.findComponent({ name: 'FsDrawerMenu' });
    expect(drawerMenu.props('show')).toBe(true);
  });
});
