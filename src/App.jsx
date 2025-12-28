import React, { useState } from 'react';
import { Map, Calendar, Compass, Briefcase, Calculator } from 'lucide-react';
import ItineraryView from './components/ItineraryView';
import ExploreView from './components/ExploreView';
import GuideView from './components/GuideView';
import UtilityView from './components/UtilityView';

function App() {
  const [activeTab, setActiveTab] = useState('itinerary');

  const renderContent = () => {
    switch (activeTab) {
      case 'itinerary': return <ItineraryView />;
      case 'explore': return <ExploreView />;
      case 'guide': return <GuideView />;
      case 'utility': return <UtilityView />;
      default: return <ItineraryView />;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans pb-24">
      <header className="fixed top-0 w-full bg-paper/90 backdrop-blur-md z-50 px-6 py-4 border-b border-stone-200 shadow-sm">
        <h1 className="text-xl font-serif font-bold text-olive-dark tracking-widest">
          香川・小豆島
          <span className="block text-xs font-sans font-normal text-stone-500 mt-1">2026.02.15 - 02.19</span>
        </h1>
      </header>

      <main className="pt-24 px-4 max-w-md mx-auto">
        {renderContent()}
      </main>

      {/* 底部導覽列 */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 px-6 py-3 pb-6 flex justify-between items-center z-50 text-xs text-stone-400">
        <NavBtn icon={Calendar} label="行程" active={activeTab === 'itinerary'} onClick={() => setActiveTab('itinerary')} />
        <NavBtn icon={Map} label="探索" active={activeTab === 'explore'} onClick={() => setActiveTab('explore')} />
        <NavBtn icon={Compass} label="導遊" active={activeTab === 'guide'} onClick={() => setActiveTab('guide')} />
        <NavBtn icon={Briefcase} label="工具" active={activeTab === 'utility'} onClick={() => setActiveTab('utility')} />
      </nav>
    </div>
  );
}

const NavBtn = ({ icon: Icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-olive-dark' : 'hover:text-stone-600'}`}>
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    <span>{label}</span>
  </button>
);

export default App;