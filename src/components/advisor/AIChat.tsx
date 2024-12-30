import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card } from '../ui/Card';

export const AIChat: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="p-6 flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-indigo-600 text-white rounded-lg p-4 max-w-[80%]">
              Hello! I'm your AI financial advisor. How can I help you today?
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about your finances..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </Card>
  );
};