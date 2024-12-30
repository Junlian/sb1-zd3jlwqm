import React from 'react';
import { Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">AI Financial Advisor</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6" />
          </button>
          <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};