import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { IWorker } from 'src/app/models/worker.interface';
import { IWorkerUpdate } from 'src/app/models/workerUpdate.inteface';
import { CreateComponent } from '../create/create.component';
import { WorkerService } from '../service/worker.service';
import * as _ from 'lodash';
import { ConfirmationDialogComponent } from '../../dialog/confirmationDialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(
    private workerService: WorkerService,
    private matDialog: MatDialog
  ) {}

  public isLoading = false;

  private workerData = new BehaviorSubject<IWorker[]>([]);

  ngOnInit() {
    this.isLoading = true;
    this.workerService
      .getAll()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((workerListItem) => this.workerData.next(workerListItem));
  }

  displayedColumns: string[] = [
    'id',
    'firstname',
    'secondname',
    'birthday',
    'companyName',
    'position',
    'applyDate',
    'action',
  ];

  public getWorker(): Observable<IWorker[]> {
    return this.workerData.asObservable();
  }

  create() {
    const ref = this.matDialog.open(CreateComponent, {
      width: '450px',
    });

    ref.afterClosed().subscribe((worker: IWorker) => {
      if (worker) {
        const list = this.workerData.getValue();
        list.push(worker);
        this.workerData.next(_.cloneDeep(list));
      }
    });
  }

  update(workerUpd: IWorkerUpdate) {
    const ref = this.matDialog.open(CreateComponent, {
      width: '600px',
      data: { workerUpdate: workerUpd },
    });

    ref.afterClosed().subscribe((editedWorker: IWorker) => {
      if (editedWorker) {
        const list = this.workerData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedWorker.id
        );
        list[postIndex] = editedWorker;

        this.workerData.next(_.cloneDeep(list));
      }
    });
  }

  delete(worker: IWorker) {
    const ref = this.matDialog.open(ConfirmationDialogComponent);

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.isLoading = true;
        this.workerService
          .remove(worker.id)
          .pipe(finalize(() => (this.isLoading = false)))
          .subscribe(() => {
            const list = this.workerData.getValue();
            _.remove(list, (post) => post.id === worker.id);
            this.workerData.next(_.cloneDeep(list));
          });
      }
    });
  }
}