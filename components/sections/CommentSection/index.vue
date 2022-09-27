<template>
    <div class="container extend" id="comment">
        <SectionNavigation activeSection="comment"/>
        <div class="messages">
            <div v-for="message in messages" :key="message.googleId">
                <Message
                    :avatar="message.avatarUrl"
                    :name="message.name"
                    :text="message.text"
                    :rating="message.rating"
                    :timestamp="message.createdAt"
                />
            </div>
        </div>
        <div class="comment">
            <div v-if="!authenticated">
                <LoginWithGoogle @authenticated.once="setAuthenticated"/>
            </div>
            <div v-else>
                <WriteComment @comment="addNewComment"/>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.extend {
    background: #fff;
    padding: 2rem; 
    gap: 2rem
}

.messages {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.comment {
    display: flex;
    justify-content: center;
    padding: 2rem;
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
            messages: []
        }
    },
    methods: {
        setAuthenticated() {
            this.authenticated = true;
        },
        addNewComment(message) {
            this.messages.unshift(message);
        },
        fetchMessages() {
            $fetch('/api/messages').then((data) => {
                this.messages = data.messages;
            });
        }
    },
    mounted() {
        this.fetchMessages();
    }
})
</script>