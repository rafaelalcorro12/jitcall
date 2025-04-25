import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@shared/services/loading/loading.service';
import { Observable } from 'rxjs';

@Component({

	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
	standalone: false

}) export class LoadingComponent implements OnInit {

	public isLoading$: Observable<boolean> = this.loadingService.isLoading$;

	public constructor(private loadingService: LoadingService) {}

	public ngOnInit(): void {}

}