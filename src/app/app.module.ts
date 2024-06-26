import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import {HeaderComponent} from "./assignment/pages/header/header.component";
import {DashboardComponent} from "./assignment/pages/main/dashboard/dashboard.component";
import {AddComponent} from './assignment/pages/main/dashboard/assignment/add/add.component';
import {SidbebarComponent} from './assignment/pages/main/sidebar/sidbebar.component';
import {ManageComponent} from "./assignment/pages/main/dashboard/assignment/manage/manage.component";
import {DeleteComponent} from "./assignment/pages/main/dashboard/assignment/delete/delete.component";
import {UpdateComponent} from "./assignment/pages/main/dashboard/assignment/update/update.component";
import {ManageUserComponent} from './assignment/pages/main/dashboard/user/manage/manageUser.component';

import { AppComponent } from './app.component';
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {RouterLink} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from './assignment/pages/login/login.component'
import {AssignmentService} from "./assignment/services/assignment/assignment.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {MenuModule} from "primeng/menu";
import {ChartModule} from "primeng/chart";
import {SplitButtonModule} from "primeng/splitbutton";
import {MessagesService} from "./assignment/services/messages.service";
import {RatingModule} from "primeng/rating";
import {DropdownModule} from "primeng/dropdown";
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import {SidebarModule} from "primeng/sidebar";
import {LoaderComponent} from "./assignment/pages/loader/loader.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NetworkInterceptor} from "./network.interceptor";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import {StepsModule} from "primeng/steps";
import {AddModule} from "./assignment/pages/main/dashboard/assignment/add/add.module";
import {LoginGuard} from "./assignment/guards/login.guard";
import {Authorization} from "./assignment/pages/main/authorization";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'assignments', component: ManageComponent, canActivate: [LoginGuard]},
  {path: 'users', component: ManageUserComponent, canActivate: [LoginGuard]},

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SidbebarComponent,
    ManageComponent,
    DeleteComponent,
    UpdateComponent,
    LoaderComponent,
    ManageUserComponent,
    Authorization,
  ],
    imports: [
        FormsModule,
        BrowserModule,
        PasswordModule,
        CheckboxModule,
        RouterLink,
        ButtonModule,
        RippleModule,
        InputTextModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TableModule,
        MenuModule,
        ChartModule,
        SplitButtonModule,
        RatingModule,
        DropdownModule,
        DataViewModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: false}),
        DividerModule,
        DialogModule,
        SidebarModule,
        ProgressSpinnerModule,
        ToastModule,
        ToolbarModule,
        SelectButtonModule,
        ToolbarModule,
        InputNumberModule,
        RadioButtonModule,
        InputTextareaModule,
        CalendarModule,
        StepsModule,
        AddModule
    ],
  providers: [LoginGuard,AssignmentService, MessagesService,{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
