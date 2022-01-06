import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: 'localhost:3333',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
