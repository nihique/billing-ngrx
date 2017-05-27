import { IWorkflowStep } from 'app/model/workflow-step';

export interface IWorkflow {
    id: number;
    workflowSteps: Array<IWorkflowStep>;
}
