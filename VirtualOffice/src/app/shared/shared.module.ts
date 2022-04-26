import { NgModule } from "@angular/core";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";

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
  BreadcrumbComponent
 ];

 @NgModule({
   declarations: [COMPONENTS_EXPORTED],
   imports: [],
   exports: [COMPONENTS_EXPORTED],
   providers: []
 })
 export class SharedModule {}
