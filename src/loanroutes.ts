import { Router } from 'express';
import { Loan } from './loan';

const router = Router();

// POST route to create a new loan application
router.post('/loans', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create loan application' });
  }
});

// GET route to fetch all loan applications
router.get('/loans', async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch loans' });
  }
});

export default router;