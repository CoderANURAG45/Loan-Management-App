import mongoose, { Schema, Document } from 'mongoose';

// Define Loan Application Schema
interface ILoan extends Document {
  fullName: string;
  loanAmount: number;
  loanTenure: number;
  employmentStatus: string;
  employmentAddress: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedDate: Date;
}

const loanSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  loanTenure: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  appliedDate: { type: Date, default: Date.now },
});

export const Loan = mongoose.model<ILoan>('Loan', loanSchema);