export type RiskLevel = 'conservative' | 'moderate' | 'aggressive';
export type GoalCategory = 'retirement' | 'savings' | 'investment' | 'debt' | 'education';
export type InvestmentType = 'stocks' | 'bonds' | 'crypto' | 'realestate' | 'mutual_funds';
export type InvestmentStatus = 'active' | 'completed' | 'cancelled';
export type AdviceCategory = 'investment' | 'savings' | 'budgeting' | 'debt' | 'tax';

export interface User {
  id: string;
  name: string;
  email: string;
  financialGoals: FinancialGoal[];
  riskTolerance: RiskLevel;
  investmentHistory: Investment[];
  monthlyIncome: number;
  expenses: Expense[];
}

export interface FinancialGoal {
  id: string;
  title: string;
  targetAmount: number;
  deadline: Date;
  progress: number;
  category: GoalCategory;
}

export interface Investment {
  id: string;
  type: InvestmentType;
  amount: number;
  date: Date;
  returns: number;
  status: InvestmentStatus;
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: Date;
  recurring: boolean;
}

export interface FinancialAdvice {
  id: string;
  timestamp: Date;
  query: string;
  response: string;
  category: AdviceCategory;
  relatedResources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: string;
}

export interface PricePoint {
  date: Date;
  value: number;
}