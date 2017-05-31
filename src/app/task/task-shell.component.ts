import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { State } from './../state.service';
import { ITask } from 'app/model/task.model';
import { IBillingConfiguration, TaskType, IValidator } from 'app/model/billing-configuration.model';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';
import { chain, map, get, set, some, cloneDeep, Dictionary, assign } from 'lodash';

@Component({
    selector: 'task-shell',
    templateUrl: './task-shell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskShellComponent implements OnInit {
    public taskMode = 'edit';
    public taskTypeName = 'Transport';
    public task: ITask;
    public tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor(
        private state: State
    ) { }

    ngOnInit() {
        this.task = this.state.task;
        this.tfMergeGroupOptions = this.buildTfMergeGroupOptions(this.task, this.state.configuration);
    }

    fieldChanged(event: IFieldChangedEvent): void {
        const oldValue = get(this.state.task, event.field);

        // change Task
        const newTask = cloneDeep(this.task);
        set<ITask>(newTask, event.field, event.value);
        this.state.task = this.task = newTask;

        // change appropriate TfMergeGroupOptions
        const newTfMergeGroupOptions = cloneDeep(this.tfMergeGroupOptions);
        newTfMergeGroupOptions[event.field].value = event.value;
        this.state.tfMergeGroupOptions = this.tfMergeGroupOptions = newTfMergeGroupOptions;

        const newValue = get(this.state.task, event.field);
        console.log(`Field '${event.field}' changed from '${oldValue}' to '${newValue}'.`);
    }

    private buildTfMergeGroupOptions(
        task: ITask,
        configuration: IBillingConfiguration):
        Dictionary<ITfMergeGroupOptions> {

        return chain(configuration.tasks[0].fields)
            .map(config => <ITfMergeGroupOptions> {
                field: config.key,
                label: config.label,
                value: get(task, config.key),
                hasFeedback: true,
                hasSuccess: true,
                hasError: false,
                hasWarning: false,
                isFieldRequired: some<IValidator>(config.validators, x => x.type === 'RequiredValidator')
            })
            .keyBy(x => x.field)
            .value();
    }
}

export interface IFieldChangedEvent {
    field: string;
    value: any;
}
