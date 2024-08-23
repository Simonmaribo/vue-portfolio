<template>
    <div class="container projectsection" id="projects">
        <SectionNavigation activeSection="projects"/>
        <div class="center">
            <h1 class="title">Showcase of some <span class="highlight-container"><span class="highlight">projects</span></span></h1>
        </div>
        <div class="project-list">
            <!-- 2024 -->
            <Project
                title="Toolbird"
                type="Web App"
                image="/projects/toolbird.png"
                description="Privacy-focused Web Analytics. Track your website visitors without compromising their privacy. Paid alternative to Google Analytics."
                :links="{
                    website: 'https://toolbird.io'
                }"
            />

            <!-- 2024 -->
            <Project 
                title="Pushify" 
                type="Web App & iOS App" 
                image="/projects/pushify.png" 
                description="Open Source Push Notification Service. Send Push Notifications to your Phone without the hassle of publishing a Mobile App. Useful for logging, monitoring and alerts."
                :links="{
                    website: 'https://pushify.net',
                    github: 'https://github.com/simonmaribo/pushify',
                    ios: 'https://apps.apple.com/dk/app/pushify-notifications/id6517357435'
                }"
            />


            <!-- 2023 -->
            <Project 
                title="Centox" 
                type="Web App" 
                image="/projects/centox2.png" 
                description="Centox is a application/forum for Discord/gaming communities."
                :links="{
                    website: 'https://centox.io?ref=simonmaribo.dk'
                }"
            />

            <!-- 2022 -->
            <Project 
                title="PlexHost" 
                type="Website" 
                image="/projects/plexhost.png" 
                description="Landing page made for the Minecraft Hosting provider PlexHost."
                :links="{
                    website: 'https://plexhost.dk'
                }"
            />

            <!-- 2022 -->
            <Project
                title="Pandoras Box"
                type="Mobile App"
                image="/projects/pandoras-box.png"
                description="Annonymous Questions for your friends at pre-parties. Expose some of the secrets in the group."
                :links="{
                    ios: 'https://apps.apple.com/us/app/pandoras-æske/id1642058011',
                    playstore: 'https://play.google.com/store/apps/details?id=com.simonmaribo.pandorabox',
                    website: 'https://pandoras-box-app.vercel.app'
                }"
            />

            <!-- 2024 -->
            <Project
                title="Plan Mates"
                type="IOS App"
                image="/projects/planmates.png"
                description="An app to coordinate preferred dates with friends. Web Interface, so you don't need to download the app."
                :links="{
                    ios: 'https://apps.apple.com/us/app/plan-mates/id6449609947',
                    website: 'https://planmate.plexit.group'
                }"
            />

            <!-- 2023 -->
            <Project
                title="McSetups"
                type="Web App"
                image="/projects/mcsetups.png"
                description="Marketplace where users can buy and sell Minecraft Products (Plugins, Maps, Skripts etc.)"
                :links="{
                    website: 'https://mcsetups.dk'
                }"
            />

            <!-- 2023 -->
            <Project
                title="NB-Metal"
                type="Website"
                image="/projects/nbmetal.png"
                description="Webpage for NB-Metal A/S, a metal subcontractor."
                :links="{
                    website: 'https://nb-metal.dk'
                }"
            />

            <!-- 2024 -->
            <Project
                title="Minecraft-list.gg"
                type="Web App"
                image="/projects/minecraft-list.png"
                description="Minecraft Server List system with Votifier integration and slot auctions."
                :links="{
                    website: 'https://minecraft-list.gg'
                }"
            />

            <!-- 2024 -->
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