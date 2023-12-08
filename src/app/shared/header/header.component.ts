import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon: string = "bx bxs-moon";

  toogle() {
    const theme = document.body.classList.toggle("light-theme");

    if (theme) {
      this.icon= "bx bx-moon"
    } else {
      this.icon = "bx bxs-moon"
    }
  }
}
