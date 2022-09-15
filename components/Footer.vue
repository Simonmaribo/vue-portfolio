<template>
    <div class="footer">
        <p>Made with <span class="heart">❤</span> by <a href="https://github.com/Simonmaribo/vue-portfolio" target="_blank">Simon Maribo</a></p>
    </div>
</template>

<style scoped>
    .footer {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .footer p {
        font-weight: 500;
        color: var(--primary-color);
    }
    .footer p .heart {
        color: #e25555;
    }
    .footer p a {
        font-weight: 700;
        color: var(--primary-color);
        text-decoration: none;
    }
</style>

<script lang="ts">
export default {
    name: "Footer"
}
</script>