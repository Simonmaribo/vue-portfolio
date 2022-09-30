<template>
    <div class="login-box">
        <h5>Have you worked with me? Say something nice.</h5>
        <div style="display: flex;">
          <div class="login-button" @click="loginWithGoogle()">
            <span>Login</span>
          </div>
        </div>
        <p class="disclaimer"></p>
    </div>
</template>

<style scoped>
.disclaimer {
    font-size: 0.8rem;
    margin-top: 1rem;
    color: rgb(17, 17, 17, 0.5)
}
.login-box {
    background-color: rgb(239 246 255);
    border: 1px solid rgb(191 219 254);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    padding: 20px;
    width: 100%;
}
.login-box h5 {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(17, 17, 17)
}

.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem 2.5rem;
  border-radius: 5px;
  border: 1px solid ;
  background-color: rgb(239 250 255);
  border: 1px solid rgb(191 219 254);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.login-button:hover {
  background-color: #fff;
}
.login-button span {
  color: rgb(17, 17, 17);
  font-weight: 700;
}

</style>

<script>

export default {
    name: "GoogleButton",
    setup() {
        const config = useRuntimeConfig();
        return { config }
    },
    methods: {
        loginWithGoogle() {
            var popup = window.open(
                `${this.config.public.baseUrl}/api/auth/login`,
                'popUpWindow',
                'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
            );
            var timeout = setInterval(() => {
                try {
                    if(popup.location.origin === this.config.public.baseUrl) {
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