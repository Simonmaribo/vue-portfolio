<template>
    <a class="button" :href="link" target="_blank">
        <Icon :name="getEmoji()"/>
        <p>{{type}}</p>
    </a>
</template>

<style scoped>
    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        border-radius: 5px;
        padding: 0.4rem 2rem;
        cursor: pointer;
        color: #000;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        border: 2px solid #fff;
    }
    .button:hover {
        background-color: #FAF9F6;
    }
    .button:focus {
        border: 2px solid var(--secondary-color);
    }
    .button p {
        font-weight: 500;
        text-transform: capitalize;
    }
</style>

<script>
export default {
    name: "SocialButton",
    props: {
        type: String,
        link: String
    },
    data() {
        return {
            getEmoji: () => {
                switch(this.type){
                    // https://icones.js.org
                    case "github":
                        return "ri:github-line";
                    case "facebook":
                        return "raphael:facebook"
                    case "linkedin":
                        return "raphael:linkedin"
                    case "email":
                        return "ic:baseline-alternate-email"
                }
            }
        }
    }
}

</script>