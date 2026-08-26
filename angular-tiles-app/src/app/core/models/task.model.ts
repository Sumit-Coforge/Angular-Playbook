export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
  createdAt: Date;
}
