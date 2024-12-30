import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { PortfolioSummary } from '../components/dashboard/PortfolioSummary';
import { AIChat } from '../components/advisor/AIChat';

export const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <PortfolioSummary />
        </div>
        <div className="col-span-1">
          <AIChat />
        </div>
      </div>
    </DashboardLayout>
  );
};