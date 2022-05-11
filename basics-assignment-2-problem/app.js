const app = Vue.createApp({
  data() {
    return {
      name: "Nikhil's page",
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.name + " landed");
    },
    saveData(event) {
      this.userInput = event.target.value;
    },
    confirmedData() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
