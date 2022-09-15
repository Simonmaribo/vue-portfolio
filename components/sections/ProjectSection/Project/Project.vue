<template>
    <div class="project">
        <div class="image">
            <div class="project-type">
                <p>{{type}}</p>
            </div>
            <img :src="image" :alt="title"/>
            <div class="hover">
                
            </div>
        </div>
        <div class="information">
            <h3 class="title">{{title}}</h3>
            <p class="description">{{description}}</p>
        </div>
    </div>
</template>

<style scoped>
.project {
    padding: 1rem;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease;
    max-width: 496px;
}
.project:hover {
    box-shadow: 0 0 15px rgb(0 0 0 / 20%);
}
.project .image .hover {
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.project:hover .image .hover {
    opacity: 1;
}

.project .image {
    display: flex;
    justify-content: center;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 270px;
    width: 100%;
}
.project .image img {
    object-fit: cover;
    height: 100%;
    width: 100%;  
}
.project-type {
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    padding: 0.1rem 0.5rem;
    position: absolute;
    top: -5px;
    z-index: 2;
}
.project-type p {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 15px;
}

.information {
    margin-top: 1rem;
    user-select: none;
}
.information .title {
    text-align: center;
    font-size: 25px;
    color: var(--primary-color)
}   

.information .description {
    color: #6c757d;
    font-size: 14px;
    font-weight: 400;
}
</style>

<script>
import ProjectLink from "./ProjectLink.vue"
export default {
    name: "Project",
    props: {
        title: String,
        type: String,
        image: String,
        description: String
    },
    components: {
        ProjectLink
    }
}
</script>