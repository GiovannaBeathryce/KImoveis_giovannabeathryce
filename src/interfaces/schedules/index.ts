export interface IScheduleRequest {
  userId: string;
  propertyId: string;
  date: string;
  hour: string;
  id: string;
}

export type previewSchedule = Omit<IScheduleRequest, "userId" | "propertyId">;
