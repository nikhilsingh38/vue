function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0

        }
    },
    computed: {
        monsterBarStyle() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyle() {
            return { width: this.playerHealth + "%" };
        }

    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
        },
        attackPlayer() {

            const attackValue = getRandomValue(7, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }
});

app.mount("#game");