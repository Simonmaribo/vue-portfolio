<template>
    <button @click="loginWithGoogle(9)">
        <span>Sign in with Google</span>
    </button>
</template>

<script>
    export default {
        name: "GoogleButton",
        methods: {
            loginWithGoogle() {
                var popup = window.open(
                    'http://localhost:3000/api/auth/login',
                    'popUpWindow',
                    'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
                );
                var timeout = setInterval(() => {
                    try {
                        if(popup.location.origin === "http://localhost:3000") {
                            popup.close();
                            this.$emit('authenticated');
                        }
                    } catch (error) {}

                    if(popup.closed) clearInterval(timeout);
                }, 1000);
            }
        }
    }
</script>