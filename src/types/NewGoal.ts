import { z } from 'zod';

export const GoalFormSchema = z.object({
    goalName: z.string().min(3, 'Minimum 3 characters').max(50, 'Maximum 50 characters'),
    category: z.string().min(1, 'Select a category'),
    startDate: z.string().min(1, 'Please select a start date'),
    endDate: z.string().min(1, 'Please select an end date')
}).refine(data => new Date(data.startDate) < new Date(data.endDate), {
    message: 'End date must be later than start date',
    path: ['endDate']
});

export type GoalForm = z.infer<typeof GoalFormSchema>