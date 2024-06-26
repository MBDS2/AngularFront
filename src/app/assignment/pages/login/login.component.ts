import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {AssignmentService} from "../../services/assignment/assignment.service";
import {Assignment} from "../../models/assignment";
import {Router} from "@angular/router";
import {Toast} from "primeng/toast";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit{
  password!: string;
  remembered: boolean = true;
  email?: String;
  message!: string;
  private assignments?: Assignment[];
  @ViewChild('toast')toast!: any;
  displayModalLogin: boolean = false;
  displayModalPassword: boolean = false;
  constructor(private authService: AuthService, private assignmentService: AssignmentService, private route: Router) {
  }

  ngAfterViewInit(): void {
        this.toast = Toast;
    }

  onSubmit() {
    this.authService.makeSession({email: this.email, password: this.password}).subscribe(data => {
     if(data.msg.startsWith('bearer')){
       localStorage.setItem('token', data.msg);
       this.route.navigate(['dashboard']).then(err => console.log(err))
     }else {
       this.message = data.msg;
       this.displayModalLogin = true;
     }
    });
  }

  onForgetPassword() {
    this.displayModalPassword = true;
  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments)
  }


  closeModalLogin() {
    this.displayModalLogin = false;
  }

  closeModalPassword() {
    this.displayModalPassword = false;
  }
}
