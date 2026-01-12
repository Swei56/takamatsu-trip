import React from 'react';
import { itinerary } from '../data';
import { Plane, Car, Ship, Hotel, Utensils, Mountain, Camera, MapPin, Waves, Palette, TreePalm } from 'lucide-react';

const iconMap = {
  plane: Plane, car: Car, ship: Ship, hotel: Hotel, utensils: Utensils,
  mountain: Mountain, camera: Camera, 'map-pin': MapPin, waves: Waves, palette: Palette, tree: TreePalm
};

export default function ItineraryView() {
  return (
    <div className="space-y-8">
      {itinerary.map((day, index) => (
        <div key={index} className="relative">
          {/* 日期標頭 */}
          <div className="flex items-baseline gap-3 mb-4 sticky top-20 z-30 py-2">
            <span className="text-3xl font-serif font-bold text-olive-dark">{day.day}</span>
            <span className="text-sm font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded-full">{day.date}</span>
          </div>
          
          <div className="bg-white rounded-[24px] p-6 shadow-soft border border-stone-50 relative overflow-hidden">
             {/* 裝飾線條 */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-stone-100"></div>
            
            <div className="space-y-8 relative">
              {day.events.map((event, i) => {
                const Icon = iconMap[event.icon] || MapPin;
                return (
                  <div key={i} className="flex gap-4 relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-paper border border-stone-200 flex items-center justify-center text-olive shadow-sm mt-1">
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-ink text-lg">{event.title}</h3>
                        <span className="text-xs font-mono text-stone-400 bg-stone-50 px-1 rounded">{event.time}</span>
                      </div>
                      {event.note && (
                        <p className="text-sm text-stone-500 bg-stone-50 p-2 rounded-lg mt-1 inline-block border-l-2 border-sakura">
                          {event.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}