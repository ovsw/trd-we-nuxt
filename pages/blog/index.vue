<template>
  <div>
    <PageHeader
      title="Blog"
      longTitle="Tutoriale, Stiri, Noutăți 3D"
      intro=""
    />

    <PostsListing :posts="posts" :showHeader="false" />

    <!-- <SectionsRenderer :sections="page.content.sections1" /> -->
  </div>
</template>

<script>
const query = /* groq */ `
{ 
  "posts": *[_type == 'post'] [0..2] | order(content.date desc)
}
`;

export default {
  name: "Page",
  scrollToTop: true,

  asyncData({ $sanity, params, payload }) {
    const sanityCall = $sanity.fetch(query);
    // console.log("🎈 asyncData: called", sanityCall);
    return sanityCall;
  }
};
</script>

<style lang="scss" scoped></style>
