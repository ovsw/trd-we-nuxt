export const state = () => ({
  pagesSlugs: [],
  postsSlugs: []
});

export const mutations = {
  setPagesSlugs(state, slugs) {
    state.pagesSlugs = slugs;
  },
  setPostsSlugs(state, slugs) {
    state.postsSlugs = slugs;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const pagesSlugs = await $sanity
      .fetch('*[_type == "page"].content.slug.current')
      .catch(e => console.error(e));
    commit("setPagesSlugs", pagesSlugs);

    const postsSlugs = await $sanity
      .fetch('*[_type == "post"].content.slug.current')
      .catch(e => console.error(e));
    commit("setPostsSlugs", postsSlugs);
  }
};
