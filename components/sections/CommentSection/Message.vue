<template>
    <div class="card">
        <div class="content">
            <div class="user">
                <div class="avatar-container">
                    <img class="avatar" :src="avatar" alt="Profile Image"/>
                </div>
                <div>
                    <p class="name">{{name}}</p>
                    <p class="title">{{title}}</p>
                </div>
            </div>
            <div class="text">{{text}}</div>
            <div class="footer">
                <div class="stars" :style="{ color: getStarColor}">
                    <div v-for="(item, index) in stars" :key="index">
                        <Icon :name="item.filled ? 'material-symbols:star' : 'material-symbols:star-outline-rounded'"/>
                    </div>
                </div>
                <div class="timestamp">
                    {{formattedTimestamp}}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #fff;
    border: 1px solid rgb(229, 231, 235);
    border-radius: 0.5rem;
    padding: 16px;
}

.card .content {
    display: flex;
    flex-flow: stretch;
    flex-direction: column;
    gap: 0.5rem;
}

.user {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
}
.user .name {
    font-weight: 500;
    font-size: 1.1rem;
    color: #26272e;

}
.user .title {
    font-size: 0.8rem;
    color: #6b7280;
}

.user .avatar-container {
    position: relative;
    flex-shrink: 0;
    border-radius: 9999px;

}
.user .avatar-container .avatar {
    width: 42px;
    height: 42px;
    border-radius: 9999px;
    -webkit-border-radius: 9999px;
    -moz-border-radius: 9999px;
    user-select: none;
}

.text {
    font-size: 0.85rem;
    color: #374151; 
}
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.stars {
    display: flex;
    gap: 0.1rem;
    color: #0050ff;
}

.timestamp {
    font-size: 0.75rem;
    color: #374151;
}

@media screen and (max-width: 1000px) {
    .footer {
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
    }
}

</style>

<script>
import dayjs from 'dayjs/esm/index.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';

export default {
    name: "Message",
    props: {
        avatar: String,
        name: String,
        text: String,
        rating: Number,
        timestamp: String,
        title: String
    },
    computed: {
        stars() {
            var stars = [];
            for(var i = 0; i < 5; i++) {
                stars.push({
                    filled: i < this.rating
                });
            }
            return stars;
        },
        formattedTimestamp() {
            return dayjs(new Date(this.timestamp)).format("D MMMM YYYY")
        },
        getStarColor() {
            if(this.rating == 5){
                return "#18b67a"
            } else if(this.rating == 4){
                return "#73cf12"
            } else if (this.rating == 3){
                return "#ffce00"
            } else if (this.rating == 2){
                return "#fe8622"
            } else {
                return "#fd3722 "
            }
        }
    },
}
</script>