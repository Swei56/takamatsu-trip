import React from 'react';
import { guideTips } from '../data';
import { Lightbulb, Gift, Utensils, Info, Flag } from 'lucide-react';

// 根據類別定義顏色與圖示
const getCategoryStyle = (category) => {
  switch (category) {
    case '美食':
      return { color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-200', icon: Utensils };
    case '伴手禮':
      return { color: 'text-sakura', bg: 'bg-red-50', border: 'border-red-200', icon: Gift };
    case '景點':
      return { color: 'text-olive-dark', bg: 'bg-stone-50', border: 'border-stone-200', icon: Flag };
    case '交通':
    case '重要預約':
      return { color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', icon: Info };
    default:
      return { color: 'text-stone-500', bg: 'bg-stone-50', border: 'border-stone-200', icon: Lightbulb };
  }
};

export default function GuideView() {
  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white rounded-[24px] p-6 shadow-soft text-center">
         <h2 className="font-serif text-xl font-bold text-olive-dark mb-2">旅途小貼士</h2>
         <p className="text-xs text-stone-400">AI 導遊為您整理的重點筆記</p>
      </div>

      <div className="grid gap-4">
        {guideTips.map((tip, index) => {
          const style = getCategoryStyle(tip.category);
          const Icon = style.icon;

          return (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl p-5 shadow-sm border-l-4 ${style.border} overflow-hidden`}
            >
              {/* 背景裝飾圓形 */}
              <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-10 ${style.bg.replace('bg-', 'bg-text-')}`}></div>

              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="font-bold text-ink text-lg">{tip.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1 ${style.bg} ${style.color}`}>
                  <Icon size={12} />
                  {tip.category}
                </span>
              </div>
              
              <p className="text-sm text-stone-600 leading-relaxed relative z-10">
                {tip.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}