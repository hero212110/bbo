<template>
  <v-dialog
    v-model="currSearchDialog"
    max-width="600"
    @click:outside="setSearchModal"
  >
    <v-card class="wrapper">
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="title black--text pl-0">
          詳細搜尋
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="black" icon @click="setSearchModal">
          <v-icon>fas fa-times</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card-text>
        <v-row>
          <v-col cols="12" sm="4" class="side">
            <ul class="tab-list">
              <li
                v-for="tab in tabList"
                :key="tab.id"
                :class="{ active: tab.id == currTab.id }"
                @click="currTab = tab"
              >
                {{ tab.text }}
              </li>
            </ul>
          </v-col>
          <v-col
            cols="12"
            sm="8"
            class="main"
            :class="{ filtered: !showTitle }"
          >
            <p v-if="showTitle" class="title">
              {{ currTab.text }}
            </p>

            <div v-if="currTab.id == 'name'">
              <v-text-field
                v-model="form.name"
                label="球員名稱"
                solo
                dense
                clearable
              ></v-text-field>
            </div>

            <div v-if="currTab.id == 'ovr'">
              <v-range-slider
                v-model="form.ovr"
                :min="database.ovr[0]"
                :max="database.ovr[1]"
              >
                <template v-slot:prepend>
                  <span class="slider-txt">{{ form.ovr[0] }}</span>
                </template>
                <template v-slot:append>
                  <span class="slider-txt">{{ form.ovr[1] }}</span>
                </template>
              </v-range-slider>
            </div>

            <div v-if="currTab.id == 'year'">
              <v-range-slider
                v-model="form.year"
                :min="database.year[0]"
                :max="database.year[1]"
              >
                <template v-slot:prepend>
                  <span class="slider-txt">{{ form.year[0] }}</span>
                </template>
                <template v-slot:append>
                  <span class="slider-txt">{{ form.year[1] }}</span>
                </template>
              </v-range-slider>
            </div>

            <div v-if="currTab.id == 'weather'">
              <ul class="filter-list">
                <li
                  v-for="item in database.weather"
                  :key="item.id"
                  :class="{ active: form.weather.includes(item.id) }"
                  @click="changeList(item)"
                >
                  <div>
                    <span> {{ item.text }}</span>
                  </div>
                  <v-icon v-if="item.icon" :style="{ color: item.color }">{{
                    item.icon
                  }}</v-icon>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions style="margin-top: 50px">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" text @click="doSearch"> 搜尋 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import weatherJSON from '@/static/data/form/weather'
export default {
  props: {
    searchDialog: { type: Boolean, default: false },
  },
  data() {
    return {
      currTab: { id: 'name', text: '名稱' },
      tabList: [
        { id: 'name', text: '球員名' },
        { id: 'team', text: '球團' },
        { id: 'field', text: '位置' },
        { id: 'ovr', text: 'OVR' },
        { id: 'year', text: '年度' },
        { id: 'weather', text: '氣候' },
      ],
      form: {
        name: '',
        team: [],
        field: [],
        ovr: [],
        year: [],
        weather: [],
      },
      database: {
        name: '',
        team: [],
        field: [],
        ovr: [56, 92],
        year: [2007, 2020],
        weather: weatherJSON,
      },
    }
  },
  computed: {
    currSearchDialog: {
      get() {
        return this.searchDialog
      },
      set() {
        return false
      },
    },
    showTitle() {
      let arr = ['name', 'ovr', 'year']
      return arr.includes(this.currTab.id)
    },
  },
  methods: {
    setSearchModal() {
      this.$emit('setSearchModal', false)
      this.resetField()
    },
    doSearch() {
      console.log(this.form)
    },
    resetField() {
      this.form.ovr = []
      this.form.ovr.push(this.database.ovr[0])
      this.form.ovr.push(this.database.ovr[1])
      this.form.year = []
      this.form.year.push(this.database.year[0])
      this.form.year.push(this.database.year[1])
      this.form.weather = []
    },
    changeList(item) {
      console.log(item)
      if (this.form.weather.includes(item.id)) {
      } else {
        this.form.weather.push(item.id)
      }
    },
  },
  mounted() {
    this.resetField()
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background: linear-gradient(45deg, #cbd0d4, #919aa9);
  .side {
    .tab-list {
      padding-left: 0;
      list-style: none;
      > li {
        margin-top: 5px;
        padding: 10px 10px;
        font-size: 14px;
        cursor: pointer;
        background: #5b5b5b;
        color: white;
        &.active {
          background: #e0e0e0;
          color: black;
        }
      }
    }
  }
  .main {
    background: linear-gradient(45deg, #cfd4d8, #b4bbc5);
    &.filtered {
      padding: 0;
    }
    .title {
      color: black;
      font-size: 16px;
      font-weight: bold;
      padding-left: 3px;
      position: relative;
      &::before {
        content: '|';
        position: absolute;
        left: -6px;
        top: -2px;
      }
    }
    .slider-txt {
      background: white;
      color: black;
      padding: 2px 4px;
    }
    .filter-list {
      padding-left: 0;
      list-style: none;
      > li {
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        &:hover,
        &.active {
          background: white;
        }
      }
    }
  }
}
</style>
