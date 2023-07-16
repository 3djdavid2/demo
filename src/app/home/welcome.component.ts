import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
