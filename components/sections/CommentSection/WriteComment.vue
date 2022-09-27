<template>
    <form @submit.prevent="handleSubmit">
        <label>Message:</label>
        <input type="text" v-model="message" required/>
    </form>
</template>

<script>

//import { createToaster } from "@meforma/vue-toaster";
//const toaster = createToaster();

export default {
    name: "WriteComment",
    data() {
        return {
            message: "",
            rating: 5
        }
    },
    methods: {
        async handleSubmit() {
            if (this.message.length > 0) {
                $fetch('/api/message', {
                    method: 'POST',
                    body: JSON.stringify({
                        text: this.message,
                        rating: this.rating
                    })
                }).then(res => {
                    this.message = "";
                    if(res.success){
                        this.$emit("comment", res.message);
                        //toaster.success("Your comment has been added!");
                    } else if (res.error) {
                        console.log(res.error);
                        //toaster.error(`Something went wrong! ${res.error}`);
                    }
                }).catch(err => {
                    this.message = "";
                    toaster.error(`${err?.data?.error || 'Something went wrong!'}`);
                })
            }
        }
    }
}
</script>