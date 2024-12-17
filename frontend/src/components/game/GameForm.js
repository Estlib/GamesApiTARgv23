export default {
    template: `
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <th>{{id}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th><input :value="name" @input="$emit('update:name', $event.target.value)"/></th>
        </tr>
        <tr>
            <th>releaseEU</th>
            <th><input :value="releaseEU" @input="$emit('update:releaseEU', $event.target.value)"/></th>
        </tr>
        <tr>
            <th>description</th>
            <th><input :value="description" @input="$emit('update:description', $event.target.value)"/></th>
        </tr>
        <tr>
            <th>reviewscore</th>
            <th><input :value="reviewscore" @input="$emit('update:reviewscore', $event.target.value)"/></th>
        </tr>
    </table>
    `,
    props: ["id", "name", "releaseEU", "description", "reviewscore"],
    emits: ["update:name", "update:releaseEU", "update:description", "update:reviewscore"]
}