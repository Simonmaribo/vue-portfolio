<template>
    <div class="container projectsection" id="projects">
        <SectionNavigation activeSection="projects"/>
        <div class="center">
            <h1 class="title">Showcase of some <span class="highlight-container"><span class="highlight">projects</span></span></h1>
        </div>
        <div class="project-list">
            <Project 
                title="PlexHost" 
                type="Website" 
                image="/projects/plexhost.png" 
                description="Landing page made for the Minecraft Hosting provider PlexHost."
                :links="{
                    website: 'https://plexhost.dk'
                }"
            />
            <Project 
                title="PlexHost Dashboard" 
                type="Web App" 
                image="/projects/plexhost-dashboard.png" 
                description="Dashboard made for the Minecraft Hosting provider PlexHost using Pterodactyl."
                :links="{
                    website: 'https://dashboard.plexhost.dk'
                }"
            />
            <Project 
                title="Centox" 
                type="Web App" 
                image="/projects/centox.png" 
                description="A self-hosted solution for creating/managing forms and applications."
                :links="{
                    github: 'https://github.com/Simonmaribo/Centox'
                }"
            />
            <Project 
                title="Plexit - Vagtdrab" 
                type="Web App" 
                image="/projects/plexit-lvd.png" 
                description="A funny gimmick website, to show the latest guard who have died on the Minecraft-server Plexit.dk"
                :links="{
                    github: 'https://github.com/Simonmaribo/plexit-latest-killed-guard',
                    website: 'https://vagtdrab.plexit.dk/'
                }"
            />
            <Project
                title="Clubreview"
                type="Upcoming Web App"
                image="/projects/clubreview.png"
                description="A website, where you can review clubs and bars with your own experiences."
                :links="{
                    figma: 'https://www.figma.com/file/OImeGakzIEPfpMgin0be0g/Clubreview?node-id=0%3A1',
                    drawsql: 'https://drawsql.app/teams/maribo/diagrams/clubreview',
                    github: 'https://github.com/Simonmaribo/clubreview'
                }"
            />
            <Project
                title="Pandoras Box"
                type="IOS App"
                image="/projects/pandoras-box.png"
                description="An App where people can put questions in a box anonymously."
                :links="{
                    ios: 'https://apps.apple.com/us/app/pandoras-??ske/id1642058011'
                }"
            />
        </div>
    </div>
</template>
  
<style scoped>

.project-list {
    display: flex;
    padding-top: 2rem;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 1520px;
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
import Project from './Project/Project.vue';

export default ({
name: "ProjectSection",
components: {
    SectionNavigation,
    Project
} 
})
</script>