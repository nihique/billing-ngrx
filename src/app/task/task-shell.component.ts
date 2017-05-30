import { Component, OnInit, Input } from '@angular/core';
import { State } from './../state.service';
import { ITask } from 'app/model/task';
import { IBillingConfiguration, TaskType } from 'app/model/billing-configuration';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'task-shell',
    templateUrl: './task-shell.component.html',
})
export class TaskShellComponent implements OnInit {
    public taskMode = 'edit';
    public taskTypeName = 'Transport';
    public task: ITask;
    public tfMergeGroupOptions: Map<string, ITfMergeGroupOptions>;

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
        Map<string, ITfMergeGroupOptions> {
        const options = new Map<string, ITfMergeGroupOptions>();
        return options;
    }
}
