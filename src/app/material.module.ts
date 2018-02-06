import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
