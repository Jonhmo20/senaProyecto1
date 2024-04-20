import { Component } from "@angular/core";
import { AppFooter } from "../footer/footer.component";


@Component({
    selector: 'app-help',
    standalone: true,
    imports: [AppFooter],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class AppHelp{

}