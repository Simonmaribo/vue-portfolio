<template>
    <div class="navigation">
        <a href="#profile" class="navigation-item" :class="{ active: isActive(activeSection, `profile`)}"/>
        <a href="#projects" class="navigation-item" :class="{ active: isActive(activeSection, `projects`)}"/>
        <!--<a href="#comment" class="navigation-item" :class="{ active: isActive(activeSection, `comment`)}"/>-->
    </div>
</template>


<style>

.navigation {
    position: absolute;
    right: 0;
    z-index: 5;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.navigation-item {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin: 0.5rem;
    transition: background-color 200ms ease-in-out;
    background-color: #cbcbcb;
} 
.navigation-item:hover {
    background-color: var(--secondary-color);
}
.active {
    background-color: var(--secondary-color) !important;
}
@media (max-width: 500px){
    .navigation {
        display: none;
    }
}
</style>


<script lang="ts">
export default {
    name: "SectionNavigation",
    props: {
        activeSection: String
    },
    data() {
        return {
            isActive(current: string, value: string) {
                return current == value;
            }
        }
    }
}
</script>