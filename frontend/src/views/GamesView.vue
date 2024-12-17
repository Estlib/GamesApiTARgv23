<script>
import GamesTable from '../components/GamesTable.vue';
export default{
    name: "GamesTable",
    components: { GamesTable },
    data() {
        return {
            allGames: []
        }
    },
    async created() {
        this.allGames = await (await fetch('http://localhost:8080/games')).json();
    }
}
</script>

<template>
    <main>
        <GamesTable :items=allGames />
    </main>
</template>

<style scoped></style>