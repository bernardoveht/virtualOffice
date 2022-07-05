import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TaskComponent } from './components/task/task.component';
import { NewsComponent } from './components/news/news.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LineTitleComponent } from './components/line-title/line-title.component';
import { DescriptionModalComponent } from './components/modals/description-modal/description-modal.component';
import { CommentModalComponent } from './components/modals/comment-modal/comment-modal.component';

import { ExpedienteComponent } from "./components/expediente/expediente.component";
import { GraphicDataComponent } from './components/graphic-data/graphic-data.component';
import { RouterModule } from "@angular/router";
import { NgChartsModule } from 'ng2-charts';
import { PaginationGridComponent } from './components/pagination-grid/pagination-grid.component';
import { AmountInformationComponent } from "./components/amount-information/amount-information.component";
import { ModalDetailComponent } from "./components/modals/modal-detail/modal-detail.component";
import { LineChartsDataComponent } from './components/line-charts-data/line-charts-data.component';
/**
 * List of modules to export
 */
 const MODULES_EXPORTED: never[] = [];

 /**
  * List of external modules to export
  */
 const EXTERNAL_MODULES_EXPORTED: never[] = [];

 /**
  * List of components to export
  */
 const COMPONENTS_EXPORTED = [
  BreadcrumbComponent,
  MenuComponent,
  TaskComponent,
  NewsComponent,
  CalendarComponent,
  NavbarComponent,
  CommentModalComponent,
  DescriptionModalComponent,
  LineTitleComponent,
  AmountInformationComponent,
  ExpedienteComponent,
  GraphicDataComponent,
  PaginationGridComponent,
  ModalDetailComponent,
  LineChartsDataComponent
 ];

 @NgModule({
   declarations: [COMPONENTS_EXPORTED],
   imports: [CommonModule,NgbDatepickerModule,RouterModule,NgChartsModule],
   exports: [COMPONENTS_EXPORTED],
   providers: []
 })
 export class SharedModule {}
