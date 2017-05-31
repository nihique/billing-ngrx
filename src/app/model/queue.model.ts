import { ITasksInQueuePaged } from 'app/model/tasks-in-queue-paged.model';

export interface IQueue {
    id: number;
    name: string;
    tasksInQueuePaged: ITasksInQueuePaged;
}
