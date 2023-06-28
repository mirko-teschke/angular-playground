import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NativeContentComponent } from './native-content/native-content.component';
import { FdContentComponent } from './fd-content/fd-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    AppComponent,
    NativeContentComponent,
    FdContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThemingModule.withConfig({ defaultTheme: 'sap_horizon', changeThemeOnQueryParamChange: false }),
    FundamentalNgxCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(themingService: ThemingService) {
themingService.init();
}
}
