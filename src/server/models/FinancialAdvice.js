import mongoose from 'mongoose';

const financialAdviceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  query: {
    type: String,
    required: true
  },
  advice: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['investment', 'savings', 'budgeting', 'debt', 'tax'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('FinancialAdvice', financialAdviceSchema);