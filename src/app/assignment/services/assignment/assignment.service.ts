import { Injectable, OnInit } from "@angular/core";
import { Assignment } from "../../models/assignment";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { URL } from "../../utils/utils";

export interface ConfigAssignment {
  modalOpened: boolean,
  assignment: any
}

@Injectable()
export class AssignmentService implements OnInit {
  configAssignmentToDelete!: ConfigAssignment;
  configAssignmentToEdit!: ConfigAssignment;
  configAssignmentToAdd!: ConfigAssignment;
  assignments!: any[];
  assignmentsPrepared!: Assignment[];
  assignmentTemp!: Assignment;
  URL!: string;
  prefix: string = "/assignments";

  constructor(private http: HttpClient) {
    this.URL = URL;
  }

  getAssignmentsLocal(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${URL}/assignments`);
  }

  ngOnInit(): void {
    this.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.URL + this.prefix);
  }

  generateId(): string {
    let id = 'avd' + Date.now();
    return id;
  }

  getOneAssignment(idAssignment: String): Observable<Assignment> {
    return this.http.get<Assignment>(this.URL);
  }

  upDateAssignment(assignment: any): Observable<any> {
    return this.http.put<any>(URL + this.prefix + '/update/' + assignment._id, assignment);
  }

  addAssignment(assignment: Assignment): Observable<any> {
    return this.http.post<any>(URL + this.prefix + '/add', assignment);
  }

  deleteAssignment(id: any): Observable<any> {
    return this.http.delete<any>(URL + this.prefix + '/delete/' + id);
  }

  setConfigAssignmentToDelete(configAssignment: ConfigAssignment): Observable<boolean> {
    console.log(configAssignment)
    this.configAssignmentToDelete = configAssignment;
    return of(true);
  }

  setConfigAssignmentToEdit(configAssignment: ConfigAssignment): Observable<boolean> {
    console.log(configAssignment)
    this.configAssignmentToEdit = configAssignment;
    return of(true);
  }

  setConfigAssignmentToAdd(configAssignment: ConfigAssignment): Observable<boolean> {
    this.configAssignmentToAdd = configAssignment;
    return of(true);
  }

  initConfigAssignmentToDelete(): void {
    this.configAssignmentToDelete = {
      modalOpened: false,
      assignment: {}
    };
  }

  initConfigAssignmentToEdit(): void {
    this.configAssignmentToEdit = {
      modalOpened: false,
      assignment: {}
    };
  }

  initConfigAssignmentToAdd(): void {
    this.configAssignmentToAdd = {
      modalOpened: false,
      assignment: {}
    }
  }
}
