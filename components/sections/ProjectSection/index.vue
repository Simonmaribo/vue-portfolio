<template>
    <div class="container projectsection" id="projects">
        <SectionNavigation activeSection="projects"/>
        <div class="center">
            <h1 class="title">Showcase of my <span class="highlight-container"><span class="highlight">best</span></span> projects</h1>
        </div>
        <div class="project-list">

        </div>
    </div>
</template>
  
  
<style scoped>

.project-list {
    display: flex;
}
.projectsection {
    background-color: #f1f6ff;
    justify-content: flex-start;
    align-items: center;
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
    color: var(--primary-color);
}

.highlight-container, .highlight {
  position: relative;
  color: #FFF;
  text-transform: uppercase;
}

.highlight-container {
  display: inline-block;
  margin: 0rem 0.5rem;
}
.highlight-container:before {
  content: " ";
  display: block;
  height: 90%;
  width: 100%;
  margin-left: -5px;
  margin-right: -3px;
  position: absolute;
  background: #0050ff;
  transform: rotate(2deg);
  top: -1px;
  left: -1px;
  border-radius: 20% 25% 28% 24%;
  padding: 8px 3px 0px 10px;
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