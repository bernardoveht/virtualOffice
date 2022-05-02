import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TaskComponent } from './components/task/task.component';
import { NewsComponent } from './components/news/news.component';
import { CalendarComponent } from './components/calendar/calendar.component';

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
  CalendarComponent
 ];

 @NgModule({
   declarations: [COMPONENTS_EXPORTED],
   imports: [CommonModule],
   exports: [COMPONENTS_EXPORTED],
   providers: []
 })
 export class SharedModule {}
