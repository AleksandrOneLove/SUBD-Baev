import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './table/table.module';
import { CreateModule } from './create/create.module';

@NgModule({
  imports: [CommonModule, TableModule, CreateModule],
  exports: [TableModule, CreateModule],
  declarations: [],
  providers: [],
})
export class PostModule {}