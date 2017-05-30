import { Component, OnInit, Input } from '@angular/core';
import { State } from './../state.service';
import { ITask } from 'app/model/task';
import { IBillingConfiguration, TaskType } from 'app/model/billing-configuration';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';
import { chain, map, get, Dictionary } from 'lodash';

@Component({
    selector: 'task-shell',
    templateUrl: './task-shell.component.html',
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
            })
            .keyBy(x => x.field)
            .value();
    }
}
