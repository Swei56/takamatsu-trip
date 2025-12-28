import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { savedSpots } from '../data';
import { List, Map as MapIcon, MapPin, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// --- Leaflet Icon Fix (解決預設圖標破圖問題) ---
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;
// ---------------------------------------------

export default function ExploreView() {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'

  // 定義地圖中心點 (預設在高松市區附近)
  const defaultCenter = [34.342, 134.045];

  return (
    <div className="space-y-4 h-full">
      {/* 切換開關 (Segmented Control) */}
      <div className="bg-white p-1 rounded-2xl shadow-sm border border-stone-100 flex">
        <button
          onClick={() => setViewMode('list')}
          className={`flex-1 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            viewMode === 'list' 
              ? 'bg-olive text-white shadow-md' 
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          <List size={18} /> 列表
        </button>
        <button
          onClick={() => setViewMode('map')}
          className={`flex-1 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            viewMode === 'map' 
              ? 'bg-olive text-white shadow-md' 
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          <MapIcon size={18} /> 地圖
        </button>
      </div>

      {/* 列表模式 */}
      {viewMode === 'list' && (
        <div className="grid gap-4 pb-20">
          {savedSpots.map((spot) => (
            <div key={spot.id} className="bg-white rounded-[20px] p-4 shadow-soft flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-olive flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-ink">{spot.name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${
                    spot.type === 'food' ? 'text-orange-500 border-orange-200' : 'text-blue-500 border-blue-200'
                  }`}>
                    {spot.type === 'food' ? '餐廳' : '景點'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2 mb-3">
                  {spot.tags.map(tag => (
                    <span key={tag} className="text-xs text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* 外部連結按鈕 - 開啟 Google Maps */}
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-olive hover:text-olive-dark bg-olive/10 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Navigation size={12} /> 導航
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 地圖模式 */}
      {viewMode === 'map' && (
        <div className="h-[65vh] w-full rounded-[24px] overflow-hidden shadow-soft border border-white relative z-0">
          <MapContainer 
            center={defaultCenter} 
            zoom={10} 
            style={{ height: '100%', width: '100%' }}
            zoomControl={false} // 為了美觀，可以關閉預設縮放控制，改用手勢
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {savedSpots.map((spot) => (
              <Marker key={spot.id} position={[spot.lat, spot.lng]}>
                <Popup className="custom-popup">
                  <div className="text-center">
                    <h3 className="font-bold text-base mb-1">{spot.name}</h3>
                    <div className="flex justify-center gap-1">
                        {spot.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs bg-gray-100 px-1 rounded text-gray-600">{tag}</span>
                        ))}
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="block mt-2 text-olive font-bold text-sm"
                    >
                      開啟導航
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
}