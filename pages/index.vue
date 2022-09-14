<template>
    <div>
        <ProfileSection/>
        <ProjectSection/>
    </div>
</template>
  
<script lang="ts">
import ProfileSection from '~~/components/sections/ProfileSection/index.vue';
import ProjectSection from '~~/components/sections/ProjectSection/index.vue';
export default ({
  name: "IndexPage",
  components: {
    ProfileSection,
    ProjectSection
} 
})
</script>