import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './components/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  methods: {
    transform: (data) => {
    var transformed = {}

    // total -- total number of records available
    // per_page -- the number of records returned in this request/page
    // current_page -- the current page of this data chunck
    // last_page -- the last page of this data
    // next_page_url -- URL of the next page
    // prev_page_url -- URL of the previous page
    // from -- the start record of this page
    // to -- the end record of this page

    transformed.pagination = {
      total: data.totalElements,
      per_page: data.pageSize,
      current_page: data.pageNumber,
      last_page: data.totalPages,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url,
      from: data.offset,
      to: data.offset + data.size
    }

    // transformed.mydata = []
    //
    // for (var i=0; i < data.length; i++) {
    //   transformed.mydata.push({
    //     id: data[i].id,
    //     fullname: data[i].name,
    //     email: data[i].email
    //   })
    // }

    return transformed
  }
  }
})
