<template>
  <form @submit.prevent="submitData">
    <section>
      <input type="text" placeholder="Your name" v-model="enteredName" />
      <input type="text" placeholder="Your age" v-model="enteredAge" />
      <button>
          Set User data
      </button>
    </section>
  </form>
</template>

<script>
export default {
    emits:['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('set-data', this.enteredName, this.enteredAge);
        }
    }
};
</script>

<style></style>
