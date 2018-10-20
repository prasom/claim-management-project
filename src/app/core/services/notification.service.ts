import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  private openSnackBar(message, action?: string, type?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: type
    });
  }

  public showInfo(message) {
    this.openSnackBar(message, '', 'snack-bar--success');
  }

  public showError(message) {
    this.openSnackBar(message, '', 'snack-bar--error');
  }


}
