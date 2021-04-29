export const state = () => ({
  pagesSlugs: []
});

export const mutations = {
  setPagesSlugs(state, slugs) {
    state.pagesSlugs = slugs;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const pagesSlugs = await $sanity
      .fetch('*[_type == "page"].content.slug.current')
      .catch(e => console.error(e));
    commit("setPagesSlugs", pagesSlugs);
  }
};
