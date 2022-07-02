import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-obra-detail',
  templateUrl: './obra-detail.component.html',
  styleUrls: ['./obra-detail.component.scss']
})
export class ObraDetailComponent implements OnInit, OnDestroy {
  public title: string = "Remodelacíon Lanús Boleterias Tren Roca | 12345";
  public icon: string = "truck";
  public titleColor: string = "green";
  public id!: number;
  private routeSb = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSb = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id'], 10);
    });
  }
  ngOnDestroy(): void {
    this.routeSb.unsubscribe();
  }

  backStep() {
    this.router.navigate([`/pages/mis-obras`]);
  }


}
