<template>
  <div>
    <Hero />
    <Partners />
    <SectionsRenderer :sections="siteHome.content.sections.sections" />
    <PostsListing :posts="featuredPosts" />
  </div>
</template>

<script>
const query = /* groq */ `
{
  "siteHome": *[_type == 'siteHome'] {
    ...,
    content {
      sections {
        sections[]{
  				...,
  				_type == 'testimonialsSection' => {
  					...,
  					testimonials[]->{
              ...
            }
					}
				}
      }
    }
  }[0],
  "featuredPosts": *[_type == 'post'] [0..2] | order(content.date desc)
}
`;

export default {
  name: "siteHome",
  asyncData({ $sanity }) {
    const sanityCall = $sanity.fetch(query);
    // console.log("🎈 asyncData: called", sanityCall);
    return sanityCall;
  }
};
</script>

<style></style>
