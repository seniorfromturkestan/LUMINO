import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, MapPin, User, Menu, X } from 'lucide-react';
import LanguageDropDown from '../LanguageDropDown';
import icon from '../../assets/icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 text-white">
        <div className="flex items-center">
          <img src={icon} alt="icon" className="h-10" />
          <nav className="hidden md:flex items-center space-x-8 ml-10">
            <Link to="/testing" className="font-medium hover:opacity-80 transition">Тест</Link>
            <Link to="/lists" className="font-medium hover:opacity-80 transition">Лист</Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2">
            <Bell className="w-5 h-5" />
          </button>
          <div>|</div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Алматы</span>
          </div>
          <div>|</div>
          <LanguageDropDown />
          <div>|</div>
          <Link to="/profile" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm">Аскар Абаев</span>
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {isMenuOpen && (
        <div
            className={`md:hidden px-4 pb-6 pt-4 bg-primary text-white space-y-6 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <nav className="flex flex-col space-y-2">
            <Link
                to="/testing"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 text-center text-xl border-b border-white/10 rounded hover:bg-white/10 transition font-medium"
            >
                Тест
            </Link>
            <Link
                to="/lists"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 text-center text-xl border-b border-white/10 hover:bg-white/10 transition font-medium"
            >
                Лист
            </Link>
            </nav>

            <div className="flex items-center justify-center gap-3 px-1 text-xl border-b border-white/10">
                <Bell className="w-5 h-5" />
                <span>Уведомления</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-1 text-xl border-b border-white/10">
                <MapPin className="w-5 h-5" />
                <span>Алматы</span>
            </div>

            <Link to="/profile" onClick={() => setIsMenuOpen(false)} 
                className="flex items-center justify-center gap-3 px-1 text-xl">
                <div className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                </div>
                <span>Аскар Абаев</span>
            </Link>
        </div>
        )}

    </header>
  );
};

export default Header;
