export default {
    template: `
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <th>{{id}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{{gameInModal.releaseEU}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{{gameInModal.description}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{{gameInModal.reviewscore}}</th>
        </tr>
    </table>
    `,
    props: ["gameInModal"]
}