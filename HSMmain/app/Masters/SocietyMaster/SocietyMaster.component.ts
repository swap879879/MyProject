import { Component,OnInit } from "@angular/core";
import { SocietyMasterService } from "./SocietyMaster.Service";

@Component({
    providers: [SocietyMasterService],
    selector: 'Society-Master',
    templateUrl:"app/Masters/SocietyMaster/SocietyMaster.html"
})

export class SocietyMasterComponent implements OnInit{

    Variable: string = "This";
    constructor(private SocietyMasterService: SocietyMasterService) { }

    ngOnInit() {
        this.SocietyMasterService.GetTestData().subscribe((result) => {
            console.log(result);
            if (result != undefined) {
                this.Variable = result;
                alert(this.Variable);
            }
        });
        console.log(this.Variable);
    }
}