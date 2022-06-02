<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "Nik Singh",
                age: 27
            }
        }
    },
    methods: {
           setUserData(name, age) {
              this.user = {
                  name: name,
                  age: age
              }
           }
    }
}
</script>

<style>
section {
  margin: 2 rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid black;
}
</style>
