import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IWorker } from 'src/app/models/worker.interface';
import { IWorkerCreate } from 'src/app/models/workerCreate.interface';
import { IWorkerUpdate } from 'src/app/models/workerUpdate.inteface';
import { WorkerService } from '../service/worker.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<IWorkerCreate>,
    private workerService: WorkerService,
    @Inject(MAT_DIALOG_DATA) public data: { workerUpdate: IWorkerUpdate }
  ) {}

  public isLoading = false;
  public isEditing = false;

  public newWorkerModel: IWorker | IWorkerUpdate = {} as IWorker;

  ngOnInit(): void {
    this.isEditing = Boolean(this.data && this.data.workerUpdate);
    this.newWorkerModel = this.data.workerUpdate;
  }

  public create(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.handleAfterCreate(
        this.isEditing
          ? this.workerService.put(this.newWorkerModel as IWorkerUpdate)
          : this.workerService.post(this.newWorkerModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<IWorker>) {
    return observable
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((response) => {
        this.dialogRef.close(response);
      });
  }
}