"use server";

import { z } from "zod";
import { predictLeaveApproval } from "@/ai/flows/predict-leave-approval";

const LeaveRequestSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  leaveType: z.string().min(1, "Leave type is required."),
  reason: z.string().min(10, "Reason must be at least 10 characters."),
});

type State = {
  success: boolean;
  message: string;
  prediction?: {
    shouldApprove: boolean;
    reason: string;
  };
};

export async function handleLeaveRequest(
  prevState: State,
  formData: FormData
): Promise<State> {
  const data = Object.fromEntries(formData);
  const validatedFields = LeaveRequestSchema.safeParse({
    startDate: new Date(data.startDate as string),
    endDate: new Date(data.endDate as string),
    leaveType: data.leaveType,
    reason: data.reason,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }
  
  try {
    const { startDate, endDate, leaveType, reason } = validatedFields.data;

    // In a real app, these would come from the user's session
    const employeeId = "EMP123";
    const teamId = "TEAM456";

    const prediction = await predictLeaveApproval({
      employeeId,
      teamId,
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      leaveType,
      reason,
    });

    return {
      success: true,
      message: "Leave request submitted successfully for AI review.",
      prediction,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
}
