export const state = () => ({
  pagesSlugs: [],
  postsSlugs: [],
  staffSlugs: []
});

export const mutations = {
  setPagesSlugs(state, slugs) {
    state.pagesSlugs = slugs;
  },
  setPostsSlugs(state, slugs) {
    state.postsSlugs = slugs;
  },
  setStaffSlugs(state, slugs) {
    state.staffSlugs = slugs;
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

    const staffSlugs = await $sanity
      .fetch('*[_type == "staffMember"].content.slug.current')
      .catch(e => console.error(e));
    commit("setStaffSlugs", staffSlugs);
  }
};
