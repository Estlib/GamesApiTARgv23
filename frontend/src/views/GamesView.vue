<script>
import GamesTable from '../components/GamesTable.vue';
export default{
    components: { GamesTable },
    data() {
        return {
            allGames: []
        }
    },
    async created() {
        this.allGames = await (await fetch('http://localhost:8080/games')).json();
        /* console.log("called from gamesview");  // for debugging purposes */
    }
}
</script>

<template>
    <main>
        <GamesTable :items=allGames />
    </main>
</template>

<style scoped></style>