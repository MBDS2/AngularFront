import {Component, OnInit, ViewChild} from "@angular/core";
import {UserService} from "../../../../../services/user/user.service"
import {Table} from "primeng/table";
import {User} from "../../../../../models/user";
import {AuthService} from "../../../../../services/auth/auth.service";
import {FormService} from "../../../../../services/form.service";
@Component({
  selector: "app-manage",
  templateUrl: "manageUser.component.html",
  styleUrls: ['./manageUser.component.css'],
})

export class ManageUserComponent implements OnInit{
  users!: User[];
  stateOptions: any[];
  userToEdit!: any;
  userToDelete!: any;
  delUser!:any;
  userName!:string;
  displayAddUserModal: boolean = false;
  displayDeleteUserModal: boolean = false;
  displayEditUserModal:boolean = false;
  displayModalNotification:boolean=false;
  message!:string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  action?:string;
  editedPassword?:string;
  actionPop!:string;
  addUserString="Ajouter";
  @ViewChild('dt') dt!: Table;
  constructor(public userService: UserService,private authService: AuthService, public formService: FormService) {
    this.stateOptions = [{label: 'Utilisateur standard', value: 'standard'}, {label: 'Administrateur', value: 'Administrateur'}];
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
    this.formService.initSortField();
  }

  showAddUserModalDialog(){
    this.action='adding';
    this.displayAddUserModal = true;
  }

  showEditUserModalDialog(user:User){
    this.action='editing';
    console.log("editing: ")
    console.log(user)
    this.userToEdit = {
      id:user.id,
      name:user.name,
      email:user.email,
      password:user.password,
      role:user.role
    };
    this.delUser=user;
    this.displayEditUserModal = true;
  }
  addNewUser(){
    if(!this.isDisableAddUserForm()){
      let user:User ={
        id: this.userService.generateId(),
        name: this.name,
        email:this.email,
        password:this.password,
        role:this.role
      };
      this.userService.add(user).subscribe(user=>{
        console.log(user)
        this.message=user.msg
        this.actionPop="Ajouter un utilisateur";
        this.displayModalNotification=true;
        this.ngOnInit();
      });
      this.displayAddUserModal = false;
    }
  }
  closeModalModification(){
    this.displayModalNotification=false;
  }
  deleteUser(user:User){
    console.log(user)
    this.userToDelete = user;
    this.displayDeleteUserModal = true;
  }
  confirmDeleteUser() {
    this.userService.deleteUser(this.userToDelete._id).subscribe(msg =>{
      this.actionPop="Supprimer un utilisateur"
      this.message=msg.msg
      this.displayModalNotification=true;
      this.ngOnInit();
      console.log(msg)
    } )
    this.displayDeleteUserModal = false;
  }
  closeDeleteModal(){
    this.displayDeleteUserModal = false;
  }
  isDisableAddUserForm():boolean{
    return this.name == null || this.email == null
      || this.password == null || this.role == null
      || this.name.replaceAll(' ', '') == ''
      || this.email.replaceAll(' ', '') == ''
      || this.password.replaceAll(' ', '') == ''
      || this.password?.search(' ') != -1;
  }

  totalUsers():number{
    return this.users !== undefined? this.users.length: 0;
  }
  cancelModal(modal:string){
    if(modal=="editModal"){
      this.displayEditUserModal=false;
    }
    if(modal=="addModal"){
      this.displayAddUserModal=false;
    }
  }
  saveEditUser(){
    if(!this.isDisableEditUserForm()){
      if(this.editedPassword?.search(' ')!=-1){
        this.editedPassword =undefined;
      }
      if(this.editedPassword !== null && this.editedPassword!== undefined){
        this.userToEdit.password=this.editedPassword;
      }
      this.userToEdit._id=this.delUser._id;
      this.userService.updateUser(this.userToEdit).subscribe(user=>{
        this.actionPop="Modifier un utilisateur";
        this.message= user.msg;
        this.displayModalNotification=true;
        console.log(user);
        this.ngOnInit();
      })
      this.displayEditUserModal=false;
      //Commit
    }
  }
  isDisableEditUserForm():boolean{
    return this.userToEdit.name == null || this.userToEdit.email == null
      || this.userToEdit.role == null
      || this.userToEdit.name.replaceAll(' ', '') == ''
      || this.userToEdit.email.replaceAll(' ', '') == '';
  }
}
