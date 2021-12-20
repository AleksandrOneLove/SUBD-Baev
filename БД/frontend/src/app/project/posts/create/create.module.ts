import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  exports: [
    CreateComponent,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
})
export class CreateModule {}