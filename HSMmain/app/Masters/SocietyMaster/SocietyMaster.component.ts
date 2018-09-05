import { Component,OnInit } from "@angular/core";
import { SocietyMasterService } from "./SocietyMaster.Service";
import { SocietyMasterModel } from "./SocietyMaster.Model";


@Component({
    providers: [SocietyMasterService],
    selector: 'Society-Master',
    templateUrl:"app/Masters/SocietyMaster/SocietyMaster.html"
})

export class SocietyMasterComponent implements OnInit{

    Variable: string = "This";
    public SocietyMasterProperty: SocietyMasterModel = new SocietyMasterModel();

    constructor(private SocietyMasterService: SocietyMasterService) { }

    ngOnInit() {
       
    }
    Test() {
        this.SocietyMasterService.GetTestData().subscribe((result) => {
            console.log(result);
            if (result != undefined) {
                this.Variable = result;
            
            }
        });
        console.log(this.Variable);
    }
}