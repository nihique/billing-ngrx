import { ITaskInQueue } from 'app/model/task-in-queue.model';

export interface ITasksInQueuePaged {
    items: Array<ITaskInQueue>;
}
