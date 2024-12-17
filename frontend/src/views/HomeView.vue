<script >
import GamesTable from '@/components/GamesTable.vue';
import GameDetailsModal from '@/components/GameDetailsModal';
import NewObjectModal from '@/components/NewObjectModal';
import GameForm from '@/components/game/GameForm';
import bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.js" //
export default {
  template:`
  <button class="btn btn-secondary" @click="newGame">New Game</button>
  
  <GamesTable :key="update" @showModal="openModal"/>
  <GameDetailsModal @gameUpdated="updateView" :gameInModal="gameInModal"/>
  <NewObjectModal id="newGameModal" @save="saveNewGame">
    <GameForm 
      v-model:name="gameInModal.name" 
      v-model:releaseEU="releaseEU"
      v-model:description="description"
      v-model:reviewscore="reviewscore" />
    <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
  </NewObjectModal>
  
  `,
  components: { 
    GamesTable,
    GameDetailsModal,
    NewObjectModal,
    GameForm
  },
  data() {
    return {
      allGames: [],
      update: 0,
      gameInModal: {id:"", name:"", releaseEU: "", description:"", reviewscore:"",},
      newGameModal: {},
      error: ""
    }
  },
  methods: {
    async created(){
    this.allGames = await (await fetch('http://localhost:8080/games')).json()
    },
    openModal(game){
      this.gameInModal = game
      let gameDetailsModal = new bootstrap.Modal(document.getElementById("gameDetailsModal"))
      gameDetailsModal.show()
    },
    newGame(){
      this.error =""
      this.gameInModal = {}
      this.newGameModal = new bootstrap.Modal(document.getElementById("newGameModal"))
      this.newGameModal.show()
    },
    updateView(game){
      this.update++
      this.gameInModal = game
    },
    async saveNewGame(){
      console.log("Saving new game: ", this.gameInModal)
      const rawResponse = await fetch(this.API_URL + "/games/", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.gameInModal)
      })
      if (rawResponse.ok) {
        this.newGameModal.hide()
        this.update++
      }
      else {
        const errorResponse = await rawResponse.json()
        this.error = errorResponse.error
      }
    }
  }

}
</script>

<!-- <template>
  <div>
    <GamesTable :items="allGames"  />
  </div>
</template> -->