import { IWorkflowStep } from 'app/model/workflow-step.model';

export interface IWorkflow {
    id: number;
    workflowSteps: Array<IWorkflowStep>;
}
