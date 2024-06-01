import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
import {Sidebar} from "primeng/sidebar";
import {PrimeNGConfig} from "primeng/api";
import {ConfigService} from "../../../services/config.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ['./sidebar.component.css'],
})

export class SidbebarComponent implements OnInit{

  @Input()
  button!: any;
  model: any[] = [];
  constructor(public configService: ConfigService) {
  }
  ngOnInit(): void {

    this.model = [
      {
        label: 'Home',
        item: {
            label: 'Accueil',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard']
          }
      },
      {
        label: 'Devoirs',
        item: {
            label: 'Devoirs',
            icon: 'pi pi-folder-open',
            routerLink: ['/assignments']
          }
      },
      {
        label: 'Users',
        item: {
          label: 'Users',
          icon: 'pi pi-users',
          routerLink: ['/users'],
        }
      }
    ]
  }

}

