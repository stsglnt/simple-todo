import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatToolbarModule } from '@angular/material';

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
