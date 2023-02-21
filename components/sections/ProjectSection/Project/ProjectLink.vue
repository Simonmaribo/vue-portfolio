<template>
    <a :href="link" target="_blank">
        <div class="link">
            <Icon :name="getEmoji()"/>
        </div>
    </a>
</template>

<style>
    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9999px;
        background-color: rgba(0,0,0,0.5);
        transition: all 0.3s ease;
        height: 50px;
        width: 50px;
        color: #FFF;
        margin: 0rem 0.5rem;
    }
</style>

<script>
    export default {
        name: "ProjectLink",
        props: {
            type: String,
            link: String
        },
        data() {
            return {
                getEmoji: () => {
                    // https://icones.js.org
                    if(this.type === 'website'){
                        return 'mdi:web'
                    } else if(this.type === 'github'){
                        return 'ri:github-line'
                    } else if (this.type === 'figma'){
                        return 'ph:figma-logo'
                    } else if (this.type === 'drawsql'){
                        return "bi:filetype-sql"
                    } else if (this.type === "ios"){
                        return "ic:baseline-apple"
                    }
                }
            }
        }
    }
</script>