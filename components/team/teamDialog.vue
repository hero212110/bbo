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
        <v-btn color="black" icon @click="close">
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
              filtered: currTab.id == 'team',
              scrolled: currTab.id == 'team',
            }"
          >
            <p v-if="currTab.id == 'amount'" class="content-title">
              設定隊伍年度,球員人數
            </p>

            <div v-if="currTab.id == 'amount'">
              <v-select
                label="隊伍年度"
                prepend-icon="fas fa-baseball-ball"
                dense
                solo
                v-model="team_year"
                :items="database.year"
              >
                <template v-if="team_year" v-slot:append>年</template>
              </v-select>
              <v-select
                label="相同隊伍球員人數"
                prepend-icon="fas fa-baseball-ball"
                dense
                solo
                v-model="same_team_players"
                :items="database.same_team_players"
              >
                <template v-if="same_team_players" v-slot:append>人</template>
              </v-select>
              <v-select
                label="相同年度球員人數"
                prepend-icon="fas fa-baseball-ball"
                dense
                solo
                v-model="same_year_players"
                :items="database.same_year_players"
              >
                <template v-if="same_year_players" v-slot:append>人</template>
              </v-select>
            </div>

            <div v-if="currTab.id == 'team'">
              <ul class="filter-list">
                <li
                  v-for="item in database.team"
                  :key="item.id"
                  :class="{ active: player.basicTeam.id == item.id }"
                  @click="updateBasicTeam(item)"
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
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import teamJSON from '@/static/data/form/team'
export default {
  data() {
    return {
      currTab: { id: 'team', text: '球團' },
      tabList: [
        { id: 'team', text: '球團' },
        { id: 'amount', text: '年度/球員人數' },
      ],
      database: {
        team: teamJSON,
        year: [],
        same_team_players: [0, 24, 28],
        same_year_players: [0, 15, 20, 24, 28],
      },
    }
  },
  computed: {
    ...mapState(['player']),
    team_year: {
      get() {
        return this.$store.state.player.basicYear.id
      },
      set(val) {
        this.$store.commit('player/UPDATE_TEAM_YEAR', val)
      },
    },
    same_team_players: {
      get() {
        return this.$store.state.player.basicTeam.val
      },
      set(val) {
        this.$store.commit('player/UPDATE_SAME_TEAM_PLAYERS', val)
      },
    },
    same_year_players: {
      get() {
        return this.$store.state.player.basicYear.val
      },
      set(val) {
        this.$store.commit('player/UPDATE_SAME_YEAR_PLAYERS', val)
      },
    },
  },
  methods: {
    close() {
      this.$store.commit('player/SET_BASIC_DIALOG', false)
    },
    resetField() {
      this.currTab = JSON.parse(JSON.stringify({ id: 'team', text: '球團' }))
      this.$store.commit('player/RESET_BASIC_TEAM')
    },
    updateBasicTeam(val) {
      this.$store.commit('player/UPDATE_BASIC_TEAM', val)
    },
  },
  mounted() {
    for (let i = 2007; i <= 2020; i++) {
      this.database.year.push(i)
    }
    this.database.team[0].text = '此團隊沒有特徵'
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
      font-size: 18px;
      font-weight: bold;
      padding-left: 10px;
      position: relative;
      &::before {
        content: '|';
        position: absolute;
        left: 0px;
        top: 0px;
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
