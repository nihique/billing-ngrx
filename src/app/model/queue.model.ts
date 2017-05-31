import { ITasksInQueuePaged } from 'app/model/tasks-in-queue-paged';

export interface IQueue {
    id: number;
    name: string;
    tasksInQueuePaged: ITasksInQueuePaged;
}
