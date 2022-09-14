<template>
    <div class="container projectsection" id="projects">
        <SectionNavigation activeSection="projects"/>
        <div class="center">
            <h1 class="title">Showcase of my <span class="highlight">best</span> projects</h1>
        </div>
    </div>
</template>
  
  
<style scoped>

.projectsection {
    background-color: #edf2f8;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
}
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    text-align: center;
    color: rgba(12, 21, 29);
}
.title .highlight {
    color: #0050ff;
    text-transform: uppercase;
}
</style>
  
  
<script lang="ts">
import SectionNavigation from '../SectionNavigation.vue';
  
export default ({
name: "ProjectSection",
components: {
    SectionNavigation
} 
})
</script>