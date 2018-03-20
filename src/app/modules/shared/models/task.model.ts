enum Statuses {
  Backlog = 0,
  SelectedForDevelopment = 1,
  InProgress = 2,
  Done = 3
}

export interface TaskModel {
  ID: number;
  desc: string;
  status: Statuses;
  lastUpdate: Date;
}
