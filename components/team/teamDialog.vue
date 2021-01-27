<template>
  <v-dialog v-model="player.basicDialog" max-width="600">
    <v-card class="wrapper">
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="title black--text pl-0">
          <div class="form-title">
            <v-icon>fas fa-star</v-icon>
            <span>設定隊伍</span>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="black" icon>
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
            :class="{
              filtered: !isNotSelection,
              scrolled: currTab.id == 'field' || currTab.id == 'type',
            }"
          >
            <p v-if="isNotSelection" class="content-title">
              {{ currTab.text }}
            </p>

            <div v-if="currTab.id == 'name'">
               <v-select
                label="隊伍年度"
                prepend-icon="fas fa-users"
                dense
                solo
              ></v-select>
              <v-select
                label="相同隊伍球員人數"
                prepend-icon="fas fa-users"
                dense
                solo
              ></v-select>
              <v-select
                label="相同年度球員人數"
                prepend-icon="fas fa-users"
                dense
                solo
              ></v-select>
            </div>

            <div v-if="currTab.id == 'team'">
              <ul class="filter-list">
                <li
                  v-for="item in database.team"
                  :key="item.id"
                  :class="{ active: form.team.includes(item.id) }"
                  @click="changeList(item)"
                >
                  <div>
                    <v-icon class="check-circle">fas fa-circle</v-icon>
                    <span> {{ item.text }}</span>
                  </div>

                  <template v-if="item.img">
                    <img
                      :src="
                        require(`../../static/images/common/${item.img}.png`)
                      "
                      alt=""
                    />
                  </template>
                  
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions style="margin-top: 50px">
      
        <v-spacer></v-spacer>
        <v-btn color="warning" class="ma-2 white--text" @click="resetField">
          <v-icon left>fas fa-sync-alt</v-icon>
          <span>重置</span>
        </v-btn>
        <v-btn color="success" class="ma-2 white--text" @click="doSearch">
          <v-icon left>fas fa-save</v-icon>
          <span>保存</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import teamJSON from '@/static/data/form/team'
import fieldJSON from '@/static/data/form/field'
import weatherJSON from '@/static/data/form/weather'
import typeJSON from '@/static/data/form/type'
export default {
  props: {
    searchDialog: { type: Boolean, default: false },
  },
  data() {
    return {
      save: false,
      currTab: { id: 'team', text: '球團' },
      tabList: [
        { id: 'team', text: '球團' },
        { id: 'name', text: '年度/球員人數' },
      ],
      form: {
        name: '',
        team: [],
        field: [],
        ovr: [],
        year: [],
        weather: [],
        type: [],
      },
      database: {
        name: '',
        team: teamJSON,
        field: fieldJSON,
        ovr: [56, 92],
        year: [2007, 2020],
        weather: weatherJSON,
        type: typeJSON,
      },
    }
  },
  computed: {
    ...mapState(['player']),
    currSearchDialog: {
      get() {
        return this.searchDialog
      },
      set() {
        return false
      },
    },
    isNotSelection() {
      let arr = ['name', 'ovr', 'year']
      return arr.includes(this.currTab.id)
    },
  },
  methods: {
    setSearchModal() {
      this.$emit('setSearchModal', false)
      this.save || this.resetField()
    },
    doSearch() {
      this.$store.commit('player/SET_LOADING', true)
      this.$store.commit('player/CLEAR_PLAYER_LIST')
      this.$store.dispatch('player/fetchPlayerList', this.form)
      this.save || this.resetField()
      this.$emit('setSearchModal', false)
    },
    resetField() {
      this.currTab = JSON.parse(JSON.stringify({ id: 'name', text: '名稱' }))
      this.form.name = ''
      this.form.team = ['all']
      this.form.field = ['all']
      this.form.ovr = []
      this.form.ovr.push(this.database.ovr[0])
      this.form.ovr.push(this.database.ovr[1])
      this.form.year = []
      this.form.year.push(this.database.year[0])
      this.form.year.push(this.database.year[1])
      this.form.weather = ['all']
      this.form.type = ['all']
    },
    changeList(item) {
      let currId = this.currTab.id
      //移除選擇項
      if (this.form[currId].includes(item.id)) {
        let index = this.form[currId].indexOf(item.id)
        this.form[currId].splice(index, 1)
        //選擇項皆未選取時 => 設置為all
        if (this.form[currId].length == 0) {
          this.form[currId].push('all')
        }
      }
      //新增選擇項
      else {
        //新增項為all時 => 移除其他項
        if (item.id == 'all') {
          this.form[currId] = ['all']
        } else {
          //只有all被選取時 => 移除all 再新增其他項
          if (
            this.form[currId].length == 1 &&
            this.form[currId].includes('all')
          ) {
            this.form[currId] = []
          }
          this.form[currId].push(item.id)
        }
      }
    },
  },
  mounted() {
    this.save || this.resetField()
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background: linear-gradient(45deg, #cbd0d4, #919aa9);
  .form-title {
    padding-left: 8px;
  }
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
    &.scrolled {
      max-height: 354px;
      overflow-y: scroll;
    }
    &.filtered {
      padding: 0;
    }
    .content-title {
      color: black;
      font-size: 20px;
      font-weight: bold;
      padding-left: 10px;
      position: relative;
      &::before {
        content: '|';
        position: absolute;
        left: 0px;
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
        align-items: center;
        cursor: pointer;
        > img {
          max-width: 11%;
          max-height: 38px;
        }
        &.active {
          background: white;
          > div .check-circle {
            color: #dfb63a;
          }
        }
      }
    }
  }
  .save-icon {
    display: none;
    @media screen and(max-width: 500px) {
      display: inline-block;
    }
  }
  .save-txt {
    pointer-events: none;
    font-weight: 600;
    display: inline-block;
    @media screen and(max-width: 500px) {
      display: none;
    }
  }
}
</style>
