import React, { useState, useEffect } from 'react';
import { CheckSquare, RefreshCw } from 'lucide-react';

export default function UtilityView() {
  const [jpy, setJpy] = useState(1000);
  const [rate, setRate] = useState(0.215); // 預設匯率，可串接 API
  
  const checklistItems = [
    { id: 1, text: "護照 (有效期6個月以上)", checked: false },
    { id: 2, text: "日文駕照譯本 + 台灣駕照", checked: false },
    { id: 3, text: "Visit Japan Web 填寫", checked: false },
    { id: 4, text: "網卡 / Roaming 開通", checked: false },
    { id: 5, text: "牙刷牙膏 (部分日本飯店不提供)", checked: false },
    { id: 6, text: "行動電源 & 充電線", checked: false },
  ];

  const [checklist, setChecklist] = useState(checklistItems);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="space-y-6">
      {/* 匯率換算器 */}
      <div className="bg-white rounded-[24px] p-6 shadow-soft">
        <h2 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
          <RefreshCw size={20} className="text-olive" /> 匯率換算
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold w-12 text-stone-400">JPY</span>
            <input 
              type="number" 
              value={jpy}
              onChange={(e) => setJpy(e.target.value)}
              className="flex-1 bg-paper text-2xl font-mono p-3 rounded-xl border-none focus:ring-2 focus:ring-olive-light outline-none"
            />
          </div>
          <div className="flex justify-center text-stone-300">↓</div>
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold w-12 text-stone-400">TWD</span>
            <div className="flex-1 bg-stone-100 text-2xl font-mono p-3 rounded-xl text-ink font-bold">
              {Math.round(jpy * rate)}
            </div>
          </div>
          <p className="text-xs text-center text-stone-400 mt-2">目前匯率約: {rate}</p>
        </div>
      </div>

      {/* 行李清單 */}
      <div className="bg-white rounded-[24px] p-6 shadow-soft">
        <h2 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
          <CheckSquare size={20} className="text-sakura" /> 行前準備
        </h2>
        <div className="space-y-3">
          {checklist.map(item => (
            <label key={item.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${item.checked ? 'bg-olive border-olive text-white' : 'border-stone-300'}`}>
                {item.checked && <span className="text-sm">✓</span>}
              </div>
              <span className={`${item.checked ? 'text-stone-400 line-through' : 'text-ink'}`}>{item.text}</span>
              <input type="checkbox" className="hidden" checked={item.checked} onChange={() => toggleCheck(item.id)} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}