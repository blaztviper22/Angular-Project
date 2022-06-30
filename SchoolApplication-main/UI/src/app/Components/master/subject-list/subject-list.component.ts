import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';


// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   fruit: string;
// }
export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'English'},
  {id: 2, name:  'Maths'},
  {id: 3, name:  'History'},
  {id: 4, name:  'Geography'}
];


/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];



@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent {

  displayedColumns: string[] = ['id', 'name', 'action'];
//dataSource = ELEMENT_DATA;

@ViewChild(MatTable,{static:true}) table: MatTable<any> | undefined;
  //displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  // dataSource: MatTableDataSource<UsersData>=ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    //const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(users);
  this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

    
  }


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


/** Builds and returns a new User. */
//  createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }


//copied code



  openDialog(action: any,obj :any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    var d = new Date();
    debugger;
    this.dataSource.data.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table?.renderRows();
    
  }
  updateRowData(row_obj:any){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj:any){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
