import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {

  public users : any = [];

  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Contact', 'City', 'Role', 'Actions'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService,public dialog: MatDialog) {}

  ngOnInit(): void {
   this.api.getAllUser()
   .subscribe(res=>{
    this.users= res
    console.log(this.users[0].isApproved);
    
    this.dataSource = new MatTableDataSource(res)
    
   }) 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: number){ console.log(id);
    // this.dialog.open(DeleteDialogComponenet,{width: '250px'});
  this.api.deleteUser(id)
  .subscribe({
     next:(res)=>{ this.api.getAllUser().subscribe(res=>{
       this.dataSource = new MatTableDataSource(res)
      
      })},
     error:()=>{}
    })
  }

  approve(id :number,body : any) {
    this.api.clientApproved(id, body)
    .subscribe()
    console.log(id);
    
  }
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
  
})
export class DeleteDialogComponenet {}
