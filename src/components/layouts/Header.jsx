import React from 'react';
import LanguageDropDown from '../LanguageDropDown';
import { Bell, MapPin, ChevronDown, User } from 'lucide-react';
import icon from '../../assets/icon.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-primary shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-3 text-white">
                <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <img src={icon} alt="icon" className='h-10'/>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8 ml-20">
                        <Link to='/testing' className="font-medium">Тест</Link>
                        <Link to='/lists' className="font-medium">Лист</Link>
                    </nav>
                </div>

               

                <div className="flex items-center space-x-4">
                    <button className="p-2">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div>|</div>
                        
                    <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Алматы</span>
                    </div>
                    <div>|</div>
                    <button className="p-2">
                        <LanguageDropDown />
                    </button>

                    <div>|</div>

                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm">Аскар Абаев</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;