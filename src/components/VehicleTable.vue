<template>
  <div class="ui">
  <vuetable ref="vuetable"
   api-url="http://localhost:8080/vehicledata-ws/v1/vehicles"
   :fields="['ajoneuvoluokkaselite',
'ensirekisterointipvm',
'ajoneuvoryhmaselite',
'ajoneuvonkayttoselite',
'variantti',
'versio',
'kayttoonottopvm',
'variselite',
'ovienLukumaara',
'korityyppiselite',
'ohjaamotyyppiselite',
'istumapaikkojenLkm',
'omamassa',
'teknSuurSallKokmassa',
'tieliikSuurSallKokmassa',
'ajonKokPituus',
'ajonLeveys',
'ajonKorkeus',
'kayttovoimaselite',
'iskutilavuus',
'suurinNettoteho',
'sylintereidenLkm',
'ahdin',
'sahkohybridi',
'merkkiSelvakielinen',
'mallimerkinta',
'vaihteisto',
'vaihteidenLkm',
'kaupallinenNimi',
'voimanvalJaTehostamistapaselite',
'tyyppihyvaksyntanro',
'yksittaisKayttovoima',
'kuntaselite',
'co2',
'matkamittarilukema',
'alue',
'valmistenumero2',
'jarnro'
]"
   data-path="content"
   pagination-path="pageable"
   @vuetable:pagination-data="onPaginationData"
  >
  </vuetable>
  <vuetable-pagination ref="pagination"
    @vuetable-pagination:change-page="onChangePage"
  ></vuetable-pagination>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePaginationDropdown'

export default {
  components: {
    Vuetable,
    VuetablePagination
  },
  methods: {
    //...
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
}
</script>
