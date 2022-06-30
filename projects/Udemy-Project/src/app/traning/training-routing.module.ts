import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardGuard } from "../auth/guard.guard";
import { TraningComponent } from "./traning.component";

const routes: Routes = [
    {path: '', component:  TraningComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule {

}