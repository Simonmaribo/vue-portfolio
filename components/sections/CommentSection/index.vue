<template>
    <div class="container extend" id="comment">
        <SectionNavigation activeSection="comment"/>
        <h1 class="title">Reviews of my work</h1>
        <div class="comment">
            <div v-if="!authenticated">
                <LoginWithGoogle @authenticated.once="setAuthenticated"/>
            </div>
            <div v-else>
                <WriteComment @comment="addNewComment"/>
            </div>
        </div>
        <div class="messages">
            <div class="row" v-for="row in rows" :key="row">
                <div v-for="message in row" :key="message.googleId" class="message">
                    <Message
                        :avatar="message.avatarUrl"
                        :name="message.name"
                        :text="message.text"
                        :rating="message.rating"
                        :timestamp="message.createdAt"
                        :title="message.title"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.message {
    width: 100%;
}
.extend {
    background: #fff;
    padding: 2rem; 
    gap: 2rem
}

.messages {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
}

.row {
    flex-grow: 1;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.comment {
    display: flex;
    justify-content: center;
}

.title {
    text-align: center;
    color: var(--primary-color);
}

@media screen and (max-width: 1500px) {
    .row {
        display: none;
        width: 100%;
    }
    .row:nth-child(1){
        display: flex;
    }
    .row:nth-child(2){
        display: flex;
    }
}
@media screen and (max-width: 750px) {
    .row:nth-child(2){
        display: none;
    }
}

</style>
  
  
<script lang="ts">
import SectionNavigation from '../SectionNavigation.vue';
import LoginWithGoogle from './LoginWithGoogle.vue';
import Message from './Message.vue';
import WriteComment from './WriteComment.vue';
  
export default ({
    name: "CommentSection",
    components: {
        SectionNavigation,
        LoginWithGoogle,
        Message,
        WriteComment
    },
    data() {
        return {
            authenticated: false,
            rows: {
                1: [],
                2: [],
                3: [],
                4: []
            },
            messages: []
        }
    },
    methods: {
        setAuthenticated() {
            this.authenticated = true;
        },
        addNewComment(message) {
            this.messages.unshift(message);
            this.loadRows();
        },
        fetchMessages() {
            $fetch('/api/messages').then((data) => {
                this.messages = data.messages;
                this.loadRows();
                console.log(this.rows)
            });
        },
        loadRows() {
            this.messages.sort((a, b) => {
                return b.rating - a.rating;
            });

            var i = 1;
            this.messages.forEach((message) => {
                this.rows[i].push(message);
                i++;
                if (i > 4) {
                    i = 1;
                }
            });
        }
    },
    mounted() {
        this.fetchMessages();    }
})
</script>