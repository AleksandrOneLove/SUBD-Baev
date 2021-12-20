import { Component, OnInit } from '@angular/core';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IWorker } from './models/worker.interface';
import { WorkerService } from './project/posts/service/worker.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
