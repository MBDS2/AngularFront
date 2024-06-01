import {Component, ElementRef, OnInit} from "@angular/core";
import {MessagesService} from "../../../services/messages.service";
import {Assignment} from "../../../models/assignment";
import {MenuItem} from "../../../interfaces/interfaces";
import {AssignmentService} from "../../../services/assignment/assignment.service";
import {AuthService} from "../../../services/auth/auth.service";
import {FormService} from "../../../services/form.service";

export interface SelectedItem{ label: string, value: string }
export interface StateAssignment {
  onTime: string,
  rendered: string,
  pastTime: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit{
  title = 'frontend';
  items!: MenuItem[];
  sortKey: any;
  assignments!: Assignment[];
  stateAssignement!: { onTime: string; rendered: string; pastTime: string };
  isUserLogged: boolean = false;
  constructor(public formService: FormService, private messagesService: MessagesService, public authService: AuthService, private assignmentService: AssignmentService) {
  }
  ngOnInit(): void {
    this.sortOptions = [
      {label: 'rendu', value: '!rendered'},
      {label: 'non-rendu', value: 'rendered'}
    ];
    this.assignmentService.getAssignments().subscribe(assignments =>{
      this.assignments = assignments;
    });
    this.stateAssignement = {
      onTime: "Devoir en cours",
      rendered: "Devoir rendu",
      pastTime: "Délais du devoir passé"
    }
    this.isUserLogged = this.authService.isUserLogged();
    this.formService.initSortField();
  }
  cours: string [] = ['angular.png', 'base_donnes.png', 'big_data.png','devops.png','data_analyst.png','gestioon_projet.png', 'grails.png',
  'mongodb.png','mysql.png','r.png','statistques.png']

  profs: string[] = ['teacher1.jpg', 'teacher2.jpg', 'teacher3.jpg', 'teacher4.jpg', 'teacher5.jpg', 'teacher6.webp', 'teacher7.webp']

  assignmentLocal!: Assignment[];

  selectedAssignment!: Assignment;

  sortOptions!: SelectedItem[] ;
  displayModal: boolean = false;
  assignmentName!: string;

  isOutOfDeadLine(deadLine: Date): boolean{
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date = year+'-'+month.toString().padStart(2, '0')+'-'+day.toString().padStart(2, '0');
    let currentDate = new Date(date);
    let deaLine = new Date(deadLine);
    return currentDate > deaLine;
  }

  getIntex(size: number): number{
    return Math.floor((Math.random() * size));
  }

  getAssignmentState(deadLine: Date): string{
   if(this.isOutOfDeadLine(deadLine)) return this.stateAssignement.pastTime;
   return this.stateAssignement.onTime;
  }
  getIcon(deadLine: Date): string{
    if(this.isOutOfDeadLine(deadLine)) return 'pi-times-circle red';
    return 'pi-clock orange'
  }

  showModalDialog(assigment: Assignment): void {
    this.selectedAssignment = assigment;
    this.displayModal = true;
  }
  closeModalDialog(): void{
    this.displayModal = false;
  }

  sortByName() {
    this.assignments.filter(assignments => assignments.name == this.assignmentName);
    console.log(this.assignments);
  }

  totalRenderedAssignment(): number {
   return this.assignments.filter(assignment => assignment.rendered).length;
  }

  totalAssignmentInDealine(): number{
    return this.assignments.filter(assignment => !assignment.rendered && assignment.mark !== null && !this.isOutOfDeadLine(assignment.deadLine)).length;
  }

  totalAssignmentOutDealine(): number {

    return this.assignments.filter(assignment => !assignment.rendered && this.isOutOfDeadLine(assignment.deadLine)).length;
  }
  totalAssignments(): number{
    return this.assignments.length;
  }

  rendre(): void {
    this.selectedAssignment.rendered = true;
    this.assignmentService.upDateAssignment(this.selectedAssignment).subscribe(data =>{
      console.log(data)
    })
  }
  isMarked(): boolean{
    return this.selectedAssignment.mark !== null;
  }

}

