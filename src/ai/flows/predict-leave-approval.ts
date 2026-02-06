'use server';

/**
 * @fileOverview An AI agent to predict leave request approval based on team needs and historical data.
 *
 * - predictLeaveApproval - A function that predicts whether a leave request should be automatically approved.
 * - PredictLeaveApprovalInput - The input type for the predictLeaveApproval function.
 * - PredictLeaveApprovalOutput - The return type for the predictLeaveApproval function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictLeaveApprovalInputSchema = z.object({
  employeeId: z.string().describe('The ID of the employee requesting leave.'),
  startDate: z.string().describe('The start date of the leave request (YYYY-MM-DD).'),
  endDate: z.string().describe('The end date of the leave request (YYYY-MM-DD).'),
  leaveType: z.string().describe('The type of leave requested (e.g., vacation, sick leave).'),
  teamId: z.string().describe('The ID of the team the employee belongs to.'),
  reason: z.string().describe('The reason for the leave request.'),
});
export type PredictLeaveApprovalInput = z.infer<typeof PredictLeaveApprovalInputSchema>;

const PredictLeaveApprovalOutputSchema = z.object({
  shouldApprove: z.boolean().describe('Whether the leave request should be automatically approved.'),
  reason: z.string().describe('The reason for the prediction, including staffing levels and historical data insights.'),
});
export type PredictLeaveApprovalOutput = z.infer<typeof PredictLeaveApprovalOutputSchema>;

export async function predictLeaveApproval(input: PredictLeaveApprovalInput): Promise<PredictLeaveApprovalOutput> {
  return predictLeaveApprovalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictLeaveApprovalPrompt',
  input: {schema: PredictLeaveApprovalInputSchema},
  output: {schema: PredictLeaveApprovalOutputSchema},
  prompt: `You are an AI assistant that predicts whether a leave request should be automatically approved.

  Analyze the following leave request details and historical team data to determine if the request should be approved.

  Employee ID: {{{employeeId}}}
  Start Date: {{{startDate}}}
  End Date: {{{endDate}}}
  Leave Type: {{{leaveType}}}
  Team ID: {{{teamId}}}
  Reason: {{{reason}}}

  Consider team staffing levels, historical leave patterns, and the reason for the leave.

  Provide a clear explanation for your decision, including insights into potential staffing shortages or impacts on team productivity.

  Based on your analysis, determine whether the leave request should be automatically approved.

  Format your response as a JSON object with "shouldApprove" (boolean) and "reason" (string) fields.
`,
});

const predictLeaveApprovalFlow = ai.defineFlow(
  {
    name: 'predictLeaveApprovalFlow',
    inputSchema: PredictLeaveApprovalInputSchema,
    outputSchema: PredictLeaveApprovalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
