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
  // 這裡放入你提供的「其他地點」
  { id: 1, name: "四國村", type: "sight", lat: 34.3467, lng: 134.1130, tags: ["博物館", "古民家"] },
  { id: 2, name: "天使之路", type: "sight", lat: 34.4735, lng: 134.1876, tags: ["戀人聖地", "潮汐"] },
  { id: 3, name: "Minori Gelato", type: "food", lat: 34.4682, lng: 134.2468, tags: ["冰淇淋", "小豆島"] },
  { id: 4, name: "骨付鳥 一鶴", type: "food", lat: 34.3446, lng: 134.0522, tags: ["名物", "雞腿"] },
  // ... 可以自行添加更多經緯度
];

export const guideTips = [
  { title: "醬油冰淇淋", category: "美食", content: "丸金醬油紀念館的醬油冰淇淋是必吃，鹹甜口感很特別！" },
  { title: "天使之路潮汐", category: "景點", content: "天使之路每天只有兩次退潮時會浮現，出發前務必查詢當日潮汐表。" },
  { title: "橄欖油", category: "伴手禮", content: "井上誠耕園或橄欖公園的高級橄欖油是送禮首選。" },
  { title: "租車注意", category: "交通", content: "Times租車需要準備台灣駕照 + 日文譯本，不要只帶國際駕照。" },
  { title: "大塚美術館", category: "攻略", content: "館內非常大，全程走完約需4公里，建議穿好走的鞋子。" },
];