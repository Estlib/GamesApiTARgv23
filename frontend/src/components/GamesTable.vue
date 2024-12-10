<script>
export default {
    name: "GamesTable",
    props: {
        items: {}
    }
}
</script>

<template>    
    <body>
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                <th>Game Name</th>
                <th>Description</th>
                <th>Release Date EU</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.releaseDateEU }}</td>
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>