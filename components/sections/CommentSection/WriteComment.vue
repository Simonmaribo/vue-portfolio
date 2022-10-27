<template>
    <div class="review-box">
        <h5>Have you worked with me? Say something nice.</h5>
        <form @submit.prevent="handleSubmit">
          <input class="rating rating--nojs" type="range" max="5" step="1" v-model="rating" required/>
          <textarea class="message" type="text" v-model="message" required placeholder="Your review..."/>
          <div>
            <button type="submit" class="confirm">Confirm</button>
          </div>
        </form>
        <p class="disclaimer"></p>
    </div>
</template>

<style scoped>
.disclaimer {
  font-size: 0.8rem;
  margin-top: 1rem;
  color: rgb(17, 17, 17, 0.5)
}
form {
  display: flex;
  flex-direction: column;
}
.message {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  resize: vertical;
  min-height: 50px;
  max-height: 200px;
}

.confirm {
  cursor: pointer;
  margin: 1rem 1rem 0 0;
  border: none;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  transition: all 100ms ease-in-out;
  border-radius: 5px;

  background-color: rgba(66, 135, 245, 0.3);
  color: #1269bf;
}
.confirm:active {
  color: #1269bf;
  background-color: rgba(66, 135, 245, 0.5);
}

.review-box {
    background-color: rgb(239 246 255);
    border: 1px solid rgb(191 219 254);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 20px;
    width: 100%;
}
.review-box h5 {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(17, 17, 17)
}

.rating {
  cursor: pointer;
  margin: 1rem 1rem 1rem 0;
  background-color: transparent;
  --dir: right;
  --fill:#0050ff;
  --fillbg: rgba(100, 100, 100, 0.35);
  --heart: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"/></svg>');
  --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
  --stars: 5;
  --starsize: 2rem;
  --symbol: var(--star);
  --value: 1;
  --w: calc(var(--stars) * var(--starsize));
  --x: calc(100% * (var(--value) / var(--stars)));
  block-size: var(--starsize);
  inline-size: var(--w);
  position: relative;
  touch-action: manipulation;
  -webkit-appearance: none;
}
.rating::-moz-range-track {
  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--symbol);
}
.rating::-webkit-slider-runnable-track {
  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--symbol);
  -webkit-mask: repeat left center/var(--starsize) var(--symbol);
}
.rating::-moz-range-thumb {
  height: var(--starsize);
  opacity: 0;
  width: var(--starsize);
}
.rating::-webkit-slider-thumb {
  height: var(--starsize);
  opacity: 0;
  width: var(--starsize);
  -webkit-appearance: none;
}

/* NO JS */
.rating--nojs::-moz-range-track {
  background: var(--fillbg);
}
.rating--nojs::-moz-range-progress {
  background: var(--fill);
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--star);
}
.rating--nojs::-webkit-slider-runnable-track {
  background: var(--fillbg);
}
.rating--nojs::-webkit-slider-thumb {
  background-color: var(--fill);
  box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);
  opacity: 1;
  width: 1px;
}
</style>


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
                    if(res.success){
                      this.message = "";
                      this.$emit("comment", res.message);
                      //toaster.success("Your comment has been added!");
                    } else if (res.error) {
                      console.log(res.error);
                      //toaster.error(`Something went wrong! ${res.error}`);
                    }
                }).catch(err => {
                    toaster.error(`${err?.data?.error || 'Something went wrong!'}`);
                })
            }
        }
    }
}
</script>