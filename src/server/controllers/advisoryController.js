import { generateFinancialAdvice } from '../services/openaiService.js';
import FinancialAdvice from '../models/FinancialAdvice.js';
import User from '../models/User.js';

export const getAdvice = async (req, res) => {
  try {
    const { query, category } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userContext = {
      riskTolerance: user.riskTolerance,
      monthlyIncome: user.monthlyIncome
    };

    const advice = await generateFinancialAdvice(query, userContext);

    const financialAdvice = new FinancialAdvice({
      userId,
      query,
      advice,
      category
    });

    await financialAdvice.save();

    res.json({ advice });
  } catch (error) {
    console.error('Advisory controller error:', error);
    res.status(500).json({ message: 'Error generating advice' });
  }
};