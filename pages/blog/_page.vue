<template>
  <div>
    <PageHeader
      :title="page.content.title"
      :longTitle="page.content.longTitle"
      :intro="page.content.excerpt"
    />

    <SectionsRenderer :sections="page.content.sections1" />
  </div>
</template>

<script>
const query = /* groq */ `
{ 
  "page": *[(_type == 'post') && content.slug.current == $slug][0] {
          ...,
          content {
  					...,
          }
        }
}
`;

export default {
  name: "Post",

  validate({ params, store, query }) {
    // console.log('params:', params)
    // If FALSE redirect to 404 page
    return (
      query.preview === "true" || store.state.postsSlugs.includes(params.page)
    );
  },

  asyncData({ $sanity, params, payload }) {
    if (payload) {
      return { page: payload };
    }
    return $sanity.fetch(query, {
      slug: params.page
    });
  }
};
</script>

<style lang="scss" scoped></style>
