import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule, TreeModule, TreeNode} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { TreeService } from './services/tree.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TreeModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
