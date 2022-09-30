<template>
    <div class="container" style="padding: 2rem; justify-content: space-between;" id="profile">
        <div/>
        <SectionNavigation activeSection="profile"/>
        <div class="center">
            <ProfilePicture />
            <div class="profile">
            <h1 class="title">
                Simon Maribo <span class="age">(17 y/o)</span>
            </h1>
            <h2 class="profession">
                Self-taught Software Developer 
            </h2>
            </div>
            <div class="socials">
                <SocialButton type="github" link="https://github.com/simonmaribo"/>
                <SocialButton type="facebook" link="https://www.facebook.com/simon.maribo.18"/>
                <SocialButton type="linkedin" link="https://www.linkedin.com/in/simonmaribo"/>
                <SocialButton type="email" link="mailto:simonmaribo@outlook.dk"/>
            </div>
        </div>
        <div class="scroll-arrow-box">
            <a href="#comment" class="scroll-arrow">
                <Icon name="ic:outline-keyboard-arrow-down" size="35px"/>
            </a>
        </div>
    </div>
</template>
  
  
<style scoped>
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profile {
    margin-top: 1rem;
    text-align: center;
}
.title {
    font-size: 25px;
    font-weight: 700;
    color: var(--primary-color);
}
.title .age {
    font-size: 16px;
    font-weight: 500;
}
.profession {
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary-color);
}
.socials {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
.scroll-arrow-box {
    display: flex;
    justify-content: center;
    align-items: center;   
}
.scroll-arrow {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    color: var(--primary-color);
    border-radius: 9999px;
}
.scroll-arrow:hover {
    transform: scale(1.1);
    background-color: #FAF9F6;
}
</style>
  
  
<script lang="ts">
import ProfilePicture from './ProfilePicture.vue';
import SocialButton from './SocialButton.vue';
import SectionNavigation from '../SectionNavigation.vue';
  
export default ({
name: "ProfileSection",
components: {
    ProfilePicture,
    SocialButton,
    SectionNavigation
} 
})
</script>