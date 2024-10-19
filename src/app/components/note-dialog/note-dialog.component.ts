import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent {
  titolo: string = '';
  contenuto: string = '';

  constructor(private dialogRef: MatDialogRef<NoteDialogComponent>) {}

  aggiungiNota(): void {
    debugger;
    if (this.titolo && this.contenuto) {
      // Passa la nota all'istanza della dialog
      this.dialogRef.close({ titolo: this.titolo, contenuto: this.contenuto });
    }
  }

  chiudiDialog(): void {
    this.dialogRef.close(); // Chiude la dialog senza passare dati
  }
}
