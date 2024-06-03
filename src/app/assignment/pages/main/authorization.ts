import {Component} from "@angular/core";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-auth',
  template:`
    <p-dialog [(visible)]="configService.modalAutorization" [modal]="true" [style]="{width:'450px'}" [closable]="false">
      <div class="flex align-items-center justify-content-center">
        <span class="red" style="font-weight:bold;">Cette partie est uniquement pour les administrateurs</span>
      </div>
      <ng-template pTemplate="footer">
        <button pButton pRipple class="p-button-text" label="OK" (click)="closeModalAutorization()"></button>
      </ng-template>
    </p-dialog>
  `
})

export class Authorization {
  constructor(public configService: ConfigService) {
  }


  closeModalAutorization() {
    this.configService.modalAutorization = false;
  }
}
