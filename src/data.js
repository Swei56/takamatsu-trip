export const itinerary = [
  {
    date: "2026-02-15",
    day: "Day 1",
    title: "抵達與移動",
    events: [
      { time: "12:20", type: "transport", title: "抵達高松機場 (JX300)", icon: "plane" },
      { time: "13:30", type: "transport", title: "Times租車 取車", icon: "car", note: "記得檢查車況與導航" },
      { time: "16:10", type: "transport", title: "高松港搭乘渡輪", icon: "ship", note: "前往小豆島土庄港" },
      { time: "18:00", type: "hotel", title: "Check-in 小豆島国際ホテル", icon: "hotel", note: "享受溫泉與海景" },
    ]
  },
  {
    date: "2026-02-16",
    day: "Day 2",
    title: "小豆島探索",
    events: [
      { time: "09:30", type: "sight", title: "寒霞溪纜車", icon: "mountain", note: "日本三大溪谷美景" },
      { time: "13:00", type: "sight", title: "丸金醬油紀念館", icon: "map-pin", note: "必吃醬油冰淇淋" },
      { time: "17:00", type: "hotel", title: "Check-in 海音真里", icon: "hotel", note: "高級溫泉旅館體驗" },
      { time: "19:30", type: "food", title: "海音真里 晚餐", icon: "utensils", note: "橄欖會席料理" },
    ]
  },
  // ... 為了節省篇幅，請依此類推 Day 3, 4, 5
  {
    date: "2026-02-17",
    day: "Day 3",
    title: "橄欖與庭園",
    events: [
      { time: "10:00", type: "sight", title: "小豆島橄欖公園", icon: "camera", note: "魔女宅急便掃把拍照" },
      { time: "12:20", type: "transport", title: "土庄港搭乘渡輪", icon: "ship", note: "返回高松" },
      { time: "15:00", type: "sight", title: "栗林公園", icon: "tree", note: "米其林三星美景" },
      { time: "18:00", type: "hotel", title: "Check-in JR Clement Inn", icon: "hotel" },
    ]
  },
  {
    date: "2026-02-18",
    day: "Day 4",
    title: "藝術與漩渦",
    events: [
      { time: "12:00", type: "sight", title: "鳴門漩渦 (うずしお汽船)", icon: "waves", note: "注意潮汐時間" },
      { time: "14:00", type: "sight", title: "大塚國際美術館", icon: "palette", note: "米開朗基羅大廳" },
      { time: "19:00", type: "hotel", title: "JR Clement Inn", icon: "hotel" },
    ]
  },
  {
    date: "2026-02-19",
    day: "Day 5",
    title: "歸途",
    events: [
      { time: "13:00", type: "transport", title: "Times租車 還車", icon: "car" },
      { time: "13:20", type: "transport", title: "高松機場 (JX301)", icon: "plane", note: "最後採買伴手禮" },
    ]
  }
];

export const savedSpots = [
  // --- 景點 (Sight) ---
  {
    id: 1,
    name: "四國村 (四國民家博物館)",
    type: "sight",
    lat: 34.3467,
    lng: 134.1130,
    tags: ["高松", "博物館", "古民家", "安藤忠雄"]
  },
  {
    id: 2,
    name: "屋島",
    type: "sight",
    lat: 34.3524,
    lng: 134.1009,
    tags: ["高松", "夕陽", "展望台", "丟瓦片"]
  },
  {
    id: 3,
    name: "道の駅 くるくるなると",
    type: "sight",
    lat: 34.1635,
    lng: 134.5955,
    tags: ["鳴門", "伴手禮", "地瓜甜點", "休息站"]
  },
  {
    id: 4,
    name: "天使之路",
    type: "sight",
    lat: 34.4735,
    lng: 134.1876,
    tags: ["小豆島", "戀人聖地", "潮汐限定"]
  },
  {
    id: 5,
    name: "ダイダラウルトラボウ",
    type: "sight",
    lat: 34.4920,
    lng: 134.2340,
    tags: ["小豆島", "藝術祭", "巨人雕塑", "神話"]
  },
  {
    id: 6,
    name: "Regent in Olives",
    type: "sight",
    lat: 34.4605,
    lng: 134.2830,
    tags: ["小豆島", "藝術祭", "橄欖林", "拍照"]
  },
  {
    id: 7,
    name: "小豆島橄欖公園",
    type: "sight",
    lat: 34.4776,
    lng: 134.2870,
    tags: ["小豆島", "魔女宅急便", "風車", "希臘風"]
  },
  {
    id: 8,
    name: "二十四之瞳電影村",
    type: "sight",
    lat: 34.4398,
    lng: 134.3462,
    tags: ["小豆島", "電影場景", "復古", "海景"]
  },

  // --- 餐廳 (Food) - 小豆島 ---
  {
    id: 9,
    name: "MORIKUNI ベーカリー",
    type: "food",
    lat: 34.4402,
    lng: 134.3115,
    tags: ["小豆島", "麵包", "酒粕", "古民家"]
  },
  {
    id: 10,
    name: "創作料理 ウチンク",
    type: "food",
    lat: 34.4715,
    lng: 134.1830,
    tags: ["小豆島", "居酒屋", "在地食材"]
  },
  {
    id: 11,
    name: "Minori Gelato",
    type: "food",
    lat: 34.4682,
    lng: 134.2468,
    tags: ["小豆島", "義式冰淇淋", "水果"]
  },
  {
    id: 12,
    name: "TODAY IS THE DAY",
    type: "food",
    lat: 34.4695,
    lng: 134.1850,
    tags: ["小豆島", "咖啡", "海景", "早午餐"]
  },
  {
    id: 13,
    name: "こまめ食堂 (Komame)",
    type: "food",
    lat: 34.5050,
    lng: 134.2255,
    tags: ["小豆島", "梯田", "飯糰", "熱門店"]
  },
  {
    id: 14,
    name: "燒肉 道草",
    type: "food",
    lat: 34.4820,
    lng: 134.2405,
    tags: ["小豆島", "燒肉", "橄欖牛"]
  },
  {
    id: 15,
    name: "井上誠耕園 忠左衛門",
    type: "food",
    lat: 34.4710,
    lng: 134.2580,
    tags: ["小豆島", "橄欖油", "義大利麵", "景觀"]
  },
  {
    id: 16,
    name: "OASIS -オアシス-",
    type: "food",
    lat: 34.4725,
    lng: 134.1840,
    tags: ["小豆島", "披薩", "義式料理"]
  },
  {
    id: 17,
    name: "そうめんや木箱",
    type: "food",
    lat: 34.4925,
    lng: 134.2650,
    tags: ["小豆島", "素麵", "傳統工藝"]
  },
  {
    id: 18,
    name: "日本料理 島活",
    type: "food",
    lat: 34.4855,
    lng: 134.2450,
    tags: ["小豆島", "海鮮", "生魚片", "定食"]
  },
  {
    id: 19,
    name: "さぬきうどん 來家",
    type: "food",
    lat: 34.4740,
    lng: 134.1825,
    tags: ["小豆島", "烏龍麵", "自助式"]
  },
  {
    id: 20,
    name: "海鮮料理 かりえん",
    type: "food",
    lat: 34.4550,
    lng: 134.3180,
    tags: ["小豆島", "海鮮丼", "在地人推薦"]
  },
  {
    id: 21,
    name: "Ristorante FIORE",
    type: "food",
    lat: 34.4815,
    lng: 134.2480,
    tags: ["小豆島", "義式料理", "景觀餐廳"]
  },

  // --- 餐廳 (Food) - 高松市區 ---
  {
    id: 22,
    name: "Umie",
    type: "food",
    lat: 34.3512,
    lng: 134.0538,
    tags: ["高松", "北浜Alley", "文青咖啡", "海景"]
  },
  {
    id: 23,
    name: "北浜えびす 海鮮食堂",
    type: "food",
    lat: 34.3515,
    lng: 134.0535,
    tags: ["高松", "北浜Alley", "海鮮丼", "午餐"]
  },
  {
    id: 24,
    name: "烏龍麵 川福 本店",
    type: "food",
    lat: 34.3435,
    lng: 134.0505,
    tags: ["高松", "烏龍麵", "老店", "宵夜"]
  },
  {
    id: 25,
    name: "喫茶 城の眼",
    type: "food",
    lat: 34.3465,
    lng: 134.0485,
    tags: ["高松", "建築設計", "復古喫茶", "早餐"]
  },
  {
    id: 26,
    name: "明神丸 高松店",
    type: "food",
    lat: 34.3450,
    lng: 134.0515,
    tags: ["高松", "鰹魚半敲燒", "藁燒", "居酒屋"]
  },
  {
    id: 27,
    name: "オステリア エンネ",
    type: "food",
    lat: 34.3425,
    lng: 134.0490,
    tags: ["高松", "義大利麵", "約會", "餐酒館"]
  },
  {
    id: 28,
    name: "骨付鳥 一鶴 高松店",
    type: "food",
    lat: 34.3446,
    lng: 134.0522,
    tags: ["高松", "骨付鳥", "必吃", "排隊名店"]
  },
  {
    id: 29,
    name: "讃岐つけ麺 寒川",
    type: "food",
    lat: 34.3430,
    lng: 134.0510,
    tags: ["高松", "沾麵", "烏龍麵", "宵夜"]
  },
  {
    id: 30,
    name: "三ッ矢亭",
    type: "food",
    lat: 34.3440,
    lng: 134.0500,
    tags: ["高松", "漢堡排", "洋食", "鐵板料理"]
  },
  {
    id: 31,
    name: "和食 渡辺",
    type: "food",
    lat: 34.3385,
    lng: 134.0550,
    tags: ["高松", "懷石料理", "海鮮", "高級"]
  },
  {
    id: 32,
    name: "Coffee Lounge ito",
    type: "food",
    lat: 34.3420,
    lng: 134.0480,
    tags: ["高松", "老派喫茶", "早餐", "紅絨布椅"]
  },
  {
    id: 33,
    name: "大衆焼肉 しんすけ",
    type: "food",
    lat: 34.3415,
    lng: 134.0515,
    tags: ["高松", "燒肉", "黑毛和牛", "內臟鍋"]
  },
  {
    id: 34,
    name: "南珈琲店",
    type: "food",
    lat: 34.3405,
    lng: 134.0495,
    tags: ["高松", "自家烘焙", "早餐", "老店"]
  },
  {
    id: 35,
    name: "ぴこぴこ精肉店 瓦町",
    type: "food",
    lat: 34.3395,
    lng: 134.0520,
    tags: ["高松", "燒肉", "包廂", "精緻"]
  },
  {
    id: 36,
    name: "さか枝うどん 本店",
    type: "food",
    lat: 34.3400,
    lng: 134.0450,
    tags: ["高松", "烏龍麵", "自助式", "早晨"]
  },
  {
    id: 37,
    name: "不二ベーカリー レトロ",
    type: "food",
    lat: 34.3480,
    lng: 134.0380,
    tags: ["高松", "麵包", "復古", "昭和風"]
  },
  {
    id: 38,
    name: "Jaraku Coffee (林町)",
    type: "food",
    lat: 34.3050,
    lng: 134.0650,
    tags: ["高松郊區", "咖啡", "鬆餅", "可可"]
  },
  {
    id: 39,
    name: "海鮮食堂 じゃこや",
    type: "food",
    lat: 34.3470,
    lng: 134.1140,
    tags: ["高松", "道の駅", "海鮮丼", "天婦羅"]
  },
  {
    id: 40,
    name: "Café de la chouette",
    type: "food",
    lat: 34.3250,
    lng: 134.0550,
    tags: ["高松", "法式", "甜點", "咖啡"]
  },

  // --- 餐廳 (Food) - 鳴門/德島 ---
  {
    id: 41,
    name: "活魚料理 びんび家",
    type: "food",
    lat: 34.2050,
    lng: 134.6280,
    tags: ["鳴門", "必吃名店", "海鮮", "ハマチ"]
  },
  {
    id: 42,
    name: "味処 あらし",
    type: "food",
    lat: 34.1850,
    lng: 134.6100,
    tags: ["鳴門", "鯛魚飯", "海鮮", "排隊店"]
  },
  {
    id: 43,
    name: "鯛丸海月",
    type: "food",
    lat: 34.2380,
    lng: 134.6400,
    tags: ["鳴門", "海景", "鯛魚", "旅館料理"]
  }
];

export const guideTips = [
  { title: "醬油冰淇淋", category: "美食", content: "丸金醬油紀念館的醬油冰淇淋是必吃，鹹甜口感很特別！" },
  { title: "天使之路潮汐", category: "景點", content: "天使之路每天只有兩次退潮時會浮現，出發前務必查詢當日潮汐表。" },
  { title: "橄欖油", category: "伴手禮", content: "井上誠耕園或橄欖公園的高級橄欖油是送禮首選。" },
  { title: "租車注意", category: "交通", content: "Times租車需要準備台灣駕照 + 日文譯本，不要只帶國際駕照。" },
  { title: "大塚美術館", category: "攻略", content: "館內非常大，全程走完約需4公里，建議穿好走的鞋子。" },
];