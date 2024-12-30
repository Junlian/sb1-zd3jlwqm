import React from 'react';
import { ArrowUp, ArrowDown, DollarSign } from 'lucide-react';
import { Card } from '../ui/Card';

export const PortfolioSummary: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">$124,500</p>
              </div>
              <DollarSign className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today's Change</p>
                <div className="flex items-center">
                  <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  <p className="text-2xl font-bold text-green-500">+2.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};