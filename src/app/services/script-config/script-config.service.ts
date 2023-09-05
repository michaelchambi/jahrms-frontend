import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptConfigService {

  constructor(
    private toast: ToastrService
  ) { }

  successAlert(message: any) {
    this.toast.success(message, 'Success');
  }

  errorAlert(message: any) {
    this.toast.error(message, 'Error');
  }

  warningAlert(message: any) {
    this.toast.warning(message, 'Warning');
  }

  datatable() {
    setTimeout(() => {
      $('#dataTables').DataTable({
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu: [10, 25, 50, 100],
        // dom: 'Bfrtip',
        // buttons: [
        //   'copy', 'csv', 'excel', 'print'
        //   'excel', 'print'
        // ],
      });
    }, 1);
  }


  destroryDatatable() {
    setTimeout(() => {
      $('#dataTables').dataTable().fnDestroy();
    }, 1);

  }




}
