# BBO-Pro-admin

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


# Main Data 
## All data belongs to <span style="color:red"> netmarble Joybomb</span> and <span style="color:red">netmarble Npark</span>
### 1. Conversion Table

- path : @/static/data/common/id.json

```
{
  "p-sa": "力量速度A型",
  "p-sb": "力量速度B型",
  "p-da": "力量守備A型",
  "p-db": "力量守備B型",
  "p-ta": "力量傳球A型",
  "p-tb": "力量傳球B型",
  "c-sa": "擊球速度A型",
  "c-sb": "擊球速度B型",
  "c-da": "擊球守備A型",
  "c-db": "擊球守備B型",
  "c-ta": "擊球傳球A型",
  "c-tb": "擊球傳球B型",
  "dh": "指定打擊",
  "c": "捕手",
  "1b": "1壘手",
  "2b": "2壘手",
  "3b": "3壘手",
  "ss": "游擊手",
  "lf": "左外野手",
  "cf": "中堅手",
  "rf": "右外野手",
  "l-l": "左投/左打",
  "l-r": "左投/右打",
  "r-r": "右投/右打",
  "r-l": "右投/左打",
  "l-d": "左投/兩打",
  "r-d": "右投/兩打",
  "brothers": "兄弟象",
  "ctbc_brothers": "中信兄弟",
  "lions": "統一 7-ELEVEN 獅",
  "fubon": "富邦悍將",
  "sinon": "興農牛",
  "eda": "義大犀牛",
  "rakuten": "樂天桃猿",
  "lamigo": "LAMIGO桃猿",
  "lanew": "LANEW熊",
  "media": "米迪亞暴龍"
}

```

### 2. player data

- path : @/static/data/player/${year}.json

```
[
  {
    "id": "2020-ctbc_brothers-1",
    "team": "ctbc_brothers",
    "year": "2020",
    "name": "吳東融",
    "type": "c-sa",
    "side": "r-r",
    "field": "2b",
    "weather": "snow",
    "ovr": 80,
    "power": 76,
    "contact": 79,
    "base_speed": 84,
    "defense_speed": 81,
    "defense_range": 78,
    "throw_power": 77,
    "throw_skill": 75,
    "dex": 78
  }
]

```
---