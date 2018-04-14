<template>
  <div id="app">
    <div class="banner">
      <h1>Ajoneuvotiedot</h1>
      <h2>Suomalaisten tieliikennekäytössä olevien ajoneuvojen tiedot</h2>
      <p>
      Suomessa tieliikennekäytössä olevien ajoneuvojen rekisteröinti-, hyväksyntä- ja tekniset tiedot ajoneuvoluokista M1 ja M1G. Omistajaan viittaavia tietoja ei julkaista (rekisterinumero ja valmistenumero). Hakukentissä voi käyttää % -merkkiä jokerimerkkinä.
      </p>
    </div>

    <div id="app">
        <div class="view-container">
          <vehicle-vuetable></vehicle-vuetable>
          <!--
          <div class="vehicles-listing" v-for="v in vehicles" :key="v.jarnro">
            <div>{{v.ajoneuvoluokkaselite}}</div>
            <div>{{v.ajoneuvoryhmaselite}}</div>
            <div>{{v.merkkiSelvakielinen}}</div>
            <div>{{v.mallimerkinta}}</div>
          </div>-->
        </div>
      </div>

    <div class="bottom">
      <br/>
      <span class="meta">
        tehnyt <a href="https://twitter.com/walokra">@walokra</a>, avoin data: <a href="https://www.trafi.fi/tietopalvelut/avoin_data">TraFi</a> (ladattu 14.4.2018), <a href="https://www.trafi.fi/tietopalvelut/avoin_data/avoimen_datan_lisenssi">lisenssi</a>
      </span>
    </div>
  </div>
</template>

<script>
  // import vehicleService from '../services/vehicles'
  import VehicleVuetable from './VehicleTable'


export default {
  name: 'app',
  components: {
    VehicleVuetable
  }

    // data() {
    //     return {
    //       vehicles: [],
    //       error: ''
    //     }
    //   },
    //
    // created() {
    //     vehicleService.get('vehicles?offset=0&limit=100')
    //     .then(response => {
    //         this.vehicles = response.data
    //     })
    //     .catch(e => {
    //         this.error = e
    //     })
    //   },
  }
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
    margin-top: 200px;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .meta {
    font-size: 14px;
  }
</style>
