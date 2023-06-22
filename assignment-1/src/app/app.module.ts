import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';

@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccessAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
