import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { SharedModule } from "../shared/shared.module";
import { ScenarioMachineLiveDataComponent } from "./scenario-machinelivedata.component";
import { ScenarioMachineLiveDataRoutingModule } from "./scenario-machinelivedata-routing.module";
import { ScenarioMachineLiveDataService } from "./scenario-machinelivedata.service";

@NgModule({
    declarations: [ScenarioMachineLiveDataComponent],
    imports: [CommonModule, ScenarioMachineLiveDataRoutingModule, SharedModule, NgxDatatableModule],
    providers: [ScenarioMachineLiveDataService]
})
export class ScenarioMachineLiveDataModule {}
