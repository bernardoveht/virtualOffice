import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DescriptionModalComponent } from '../modals/description-modal/description-modal.component';
import { CommentModalComponent } from '../modals/comment-modal/comment-modal.component';
import { ModalDetailComponent } from '../modals/modal-detail/modal-detail.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public title: string = "Tareas";

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  viewModal(id: number) {
    const modalRef = this.modalService.open(ModalDetailComponent, {
      windowClass: 'modal-green-light',
      size: 'lg',
      centered: true
    })
    modalRef.componentInstance.color = 'green-light';
    modalRef.componentInstance.title = 'Tarea';
    modalRef.componentInstance.icon = 'list-check';
    modalRef.componentInstance.data = {
      id
    };
  }

  commentsModal() {
    this.modalService.open(CommentModalComponent, {
      centered: true
    })
  }

}
