import { type Page } from "@playwright/test";
import {Home} from "./home";
import {Login} from "./login";


export class poManger {

    readonly page: Page;
    readonly login: Login;
    readonly home: Home;

    constructor(page: Page) {
        this.page = page;
        this.login = new Login(this.page);
        this.home = new Home(this.page);
    }   


    gotoLoginPage() {
        return this.login
    }

     gotoHomePage() {
        return this.home
    }
}
