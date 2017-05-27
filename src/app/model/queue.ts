import { ITasksPaged } from 'app/model/tasks-paged';

export interface IQueue {
    id: number;
    name: string;
    tasksPaged: ITasksPaged;
}
