import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {TaskModel} from 'app/modules/shared/models/task.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const TODAY = new Date();
const YESTERDAY = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000

const TASKS: TaskModel[] = [
  {
    ID: 1,
    desc: 'Austin Myers',
    status: 1,
    lastUpdate: TODAY
  },
  {
    ID: 2,
    desc: 'Austin Myers',
    status: 1,
    lastUpdate: YESTERDAY
  }
];

@Injectable()
export class TaskService {
  private apiUrl = 'api/task';

  constructor(private http: HttpClient) {
  }
}

export class MoskTaskService extends TaskService {
  /**
   * GET stub chat rooms
   * @return {TaskModel[]}
   */
  static getMoskTasks(): TaskModel[] {
    return TASKS;
  }
}
