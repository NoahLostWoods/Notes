import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  titolo: string = '';
  contenuto: string = '';
  note: { titolo: string, contenuto: string }[] = []; 
  displayedColumns: string[] = ['titolo', 'contenuto'];
  datasource!: any;

  constructor(private dialog: MatDialog, private matTable: MatTableModule) {}

  apriDialog(): void {
    const dialogRef = this.dialog.open(NoteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        this.note.push(result);
        this.datasource = this.note;
      }
    });
  }

  delete(){

  }

}
