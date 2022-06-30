import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  public sendComment(){
    this.activeModal.close('Send comments');
    this.toastr.success('','El comentario se ha agregado correctamente');
  }

}
