import React, { useState, useEffect } from 'react';
import { CheckSquare, RefreshCw, Wifi, WifiOff } from 'lucide-react';

export default function UtilityView() {
  const [jpy, setJpy] = useState(1000);
  const [rate, setRate] = useState(null); // 初始為 null，代表載入中
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  
  // 行前清單資料
  const [checklist, setChecklist] = useState([
    { id: 1, text: "護照 (有效期6個月以上)", checked: false },
    { id: 2, text: "日文駕照譯本 + 台灣駕照", checked: false },
    { id: 3, text: "Visit Japan Web 填寫", checked: false },
    { id: 4, text: "網卡 / Roaming 開通", checked: false },
    { id: 5, text: "牙刷牙膏 (部分日本飯店不提供)", checked: false },
    { id: 6, text: "行動電源 & 充電線", checked: false },
    { id: 7, text: "暈船藥 (搭乘渡輪用)", checked: false },
  ]);

  // 抓取即時匯率的函式
  const fetchExchangeRate = async () => {
    setIsLoading(true);
    try {
      // 使用免費公開 API (JPY 為基底)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/JPY');
      const data = await response.json();
      
      // 取得對台幣 (TWD) 的匯率
      const currentRate = data.rates.TWD;
      setRate(currentRate);
      
      // 更新時間顯示
      const now = new Date();
      setLastUpdated(`${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`);
      
    } catch (error) {
      console.error("匯率抓取失敗", error);
      // 如果 API 失敗，設回一個保守的預設值 (避免壞掉)
      if (!rate) setRate(0.22); 
    } finally {
      setIsLoading(false);
    }
  };

  // 畫面一載入就執行一次
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="space-y-6 pb-20">
      
      {/* 匯率換算器 */}
      <div className="bg-white rounded-[24px] p-6 shadow-soft relative overflow-hidden">
        {/* 頂部標題列 */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="font-serif font-bold text-lg flex items-center gap-2 text-ink">
            <RefreshCw size={20} className="text-olive" /> 匯率換算
          </h2>
          
          <button 
            onClick={fetchExchangeRate}
            disabled={isLoading}
            className="flex items-center gap-1 text-xs text-olive bg-paper px-2 py-1 rounded-full active:scale-95 transition-transform"
          >
             {isLoading ? <RefreshCw size={12} className="animate-spin" /> : <Wifi size={12} />}
             {isLoading ? "更新中..." : "刷新"}
          </button>
        </div>

        <div className="flex flex-col gap-4 relative z-10">
          {/* 日幣輸入 */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold w-12 text-stone-400 font-serif">JPY</span>
            <input 
              type="number" 
              value={jpy}
              onChange={(e) => setJpy(e.target.value)}
              className="flex-1 bg-paper text-2xl font-mono p-3 rounded-xl border-none focus:ring-2 focus:ring-olive-light outline-none text-ink shadow-inner"
              placeholder="輸入金額"
            />
          </div>

          {/* 箭頭指示 */}
          <div className="flex justify-center text-stone-300 text-sm">
             ↓ 目前匯率: {rate ? rate.toFixed(4) : "..."}
          </div>

          {/* 台幣輸出 */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold w-12 text-stone-400 font-serif">TWD</span>
            <div className="flex-1 bg-olive/10 text-3xl font-mono p-3 rounded-xl text-olive-dark font-bold flex items-center min-h-[60px]">
              {rate ? Math.round(jpy * rate).toLocaleString() : <span className="text-lg text-stone-400">載入中...</span>}
            </div>
          </div>
          
          <p className="text-[10px] text-center text-stone-400 mt-1">
            資料來源: ExchangeRate-API • 更新於 {lastUpdated || "--:--"}
          </p>
        </div>
      </div>

      {/* 行前清單 (保持不變) */}
      <div className="bg-white rounded-[24px] p-6 shadow-soft">
        <h2 className="font-serif font-bold text-lg mb-4 flex items-center gap-2 text-ink">
          <CheckSquare size={20} className="text-sakura" /> 行前準備
        </h2>
        <div className="space-y-3">
          {checklist.map(item => (
            <label key={item.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer select-none">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.checked ? 'bg-olive border-olive text-white' : 'border-stone-300 bg-white'}`}>
                {item.checked && <span className="text-sm font-bold">✓</span>}
              </div>
              <span className={`transition-all ${item.checked ? 'text-stone-300 line-through' : 'text-ink'}`}>{item.text}</span>
              <input type="checkbox" className="hidden" checked={item.checked} onChange={() => toggleCheck(item.id)} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}