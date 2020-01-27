import { Component, OnInit, Inject } from '@angular/core';
import { UserCriteria } from 'src/core/specification/criteria/UserCriteria';
import { HttpClient } from '@angular/common/http';
import { ROLE_SERVICE, IRoleService } from 'src/services/interfaces/IRoleService.interface';
import { Role } from 'src/models/Role';

@Component({
  selector: 'app-egx-home-user',
  templateUrl: './egx-home-user.component.html',
  styleUrls: ['./egx-home-user.component.css']
})
export class EgxHomeUserComponent implements OnInit {
  userAccounts = [];
  constructor(@Inject(ROLE_SERVICE) private service: IRoleService, private http: HttpClient) { }

  async ngOnInit() {

    //this.userAccounts = await this.service.GetByParams(user, null);
    this.http.get('../../../../../assets/DB/roles.json').subscribe(
      res => {
        let jsonText = JSON.stringify(res);
        for (let i = 0; i <= 100; i++) {
          jsonText += `{
            "roleId": "${i}ABC",
              "type": 2,
                "active": true,
                  "name": "Prueba ${i}",
                    "code": "ASDDFG${i}",
                      "product": {
              "productId": ${i},
                "name": "Sistema SSO ${i}"
            },
            "description": "Esto es una prueba",
              "countUsers": ${i + 10}
          },`;
        }
        console.log(jsonText);
      }

    );
  }

}
