const app = Vue.createApp({
  data() {
    return {
      inputGoals: "",
      goals: []
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoals);
    }
  }
});

app.mount("#user-goals");