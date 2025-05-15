import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  toggleNavbar() {
    const bsCollapse = new Collapse(this.navbarCollapse.nativeElement, {
      toggle: false
    });

    // Check if the navbar is expanded, then hide it
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      bsCollapse.hide();
    }
  }


}
