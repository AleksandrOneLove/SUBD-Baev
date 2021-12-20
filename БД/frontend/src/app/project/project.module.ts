import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WorkerService } from './posts/service/worker.service';
import { TableModule } from './posts/table/table.module';
import { PostModule } from './posts/post.module';
import { ConfirmationDialogModule } from './dialog/confirmationDialog.module';
import { ConfirmationDialogComponent } from './dialog/confirmationDialog.component';


@NgModule({
  imports: [
    CommonModule,
    PostModule,
    ConfirmationDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatProgressBarModule,
  ],
  exports: [PostModule, ConfirmationDialogModule],
  declarations: [ConfirmationDialogComponent],
  entryComponents: [ConfirmationDialogComponent],
  providers: [WorkerService],
})
export class ProjectModule {}