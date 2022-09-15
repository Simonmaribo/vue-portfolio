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
                getEmoji(){
                    console.log(this.type)
                    if(this.type === 'website'){
                        return 'mdi:web'
                    } else if(this.type === 'github'){
                        return 'ri:github-line'
                    }
                }
            }
        }
    }
</script>