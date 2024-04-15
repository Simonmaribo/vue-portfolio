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
            <!--<Project 
                title="PlexHost Dashboard" 
                type="Web App" 
                image="/projects/plexhost-dashboard.png" 
                description="Dashboard made for the Minecraft Hosting provider PlexHost using Pterodactyl."
                :links="{
                    website: 'https://dashboard.plexhost.dk'
                }"
            />-->
            <Project 
                title="Centox" 
                type="Web App" 
                image="/projects/centox2.png" 
                description="Centox is a application/forum for Discord/gaming communities."
                :links="{
                    website: 'https://centox.io?ref=simonmaribo.dk'
                }"
            />
            <Project
                title="Pandoras Box"
                type="Mobile App"
                image="/projects/pandoras-box.png"
                description="An App where people can put questions in a box anonymously."
                :links="{
                    ios: 'https://apps.apple.com/us/app/pandoras-æske/id1642058011',
                    playstore: 'https://play.google.com/store/apps/details?id=com.simonmaribo.pandorabox',
                    website: 'https://pandoras-box-app.vercel.app'
                }"
            />
            <Project
                title="Plan Mates"
                type="IOS App"
                image="/projects/planmates.png"
                description="An app to coordinate preferred dates with friends and Web "
                :links="{
                    ios: 'https://apps.apple.com/us/app/plan-mates/id6449609947',
                    website: 'https://planmate.plexit.group'
                }"
            />
            <Project
                title="McSetups"
                type="Web App"
                image="/projects/mcsetups.png"
                description="Marketplace where users can buy and sell Minecraft Products (Plugins, Maps, Skripts etc.)"
                :links="{
                    website: 'https://mcsetups.dk'
                }"
            />
            <Project
                title="NB-Metal"
                type="Website"
                image="/projects/nbmetal.png"
                description="Webpage for NB-Metal A/S, a metal subcontractor."
                :links="{
                    website: 'https://nb-metal.dk'
                }"
            />
            <Project
                title="Minecraft-list.gg"
                type="Web App"
                image="/projects/minecraft-list.png"
                description="Minecraft server list system with Votifier integration and slot auctions."
                :links="{
                    website: 'https://minecraft-list.gg'
                }"
            />
            <Project
                title="Minecraft Buzz Auctions"
                type="Web App"
                image="/projects/minecraft-buzz.png"
                description="Full auction platform for blind bidding on Minecraft server list slots on Minecraft.buzz"
                :links="{
                    website: 'https://auctions.minecraft.buzz'
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