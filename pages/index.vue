<template>
    <div>
        <ProfileSection/>
        <ProjectSection/>
        <CommentSection/>
        <Footer/>
    </div>
</template>
  
<script lang="ts">
import ProfileSection from '~~/components/sections/ProfileSection/index.vue';
import ProjectSection from '~~/components/sections/ProjectSection/index.vue';
import CommentSection from '~~/components/sections/CommentSection/index.vue';
import Footer from '~~/components/Footer.vue';

export default ({
    name: "IndexPage",
    components: {
        ProfileSection,
        ProjectSection,
        CommentSection,
        Footer,
    }
})
</script>