<script>
export default {
    name: "GamesTable",
    props: {
        items: Array
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
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>                    
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>