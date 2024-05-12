import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mi portafolio';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToGithub() {
    window.location.href = 'https://github.com/Josue24p/react-tasks-example';
  }
  goProject() {
    window.location.href = 'https://josue24p.github.io/react-tasks-example/';
  }

  goToGithub2() {
    window.location.href = 'https://github.com/Josue24p/ProyectoT4G';
  }

  goToGithub3() {
    window.location.href = 'https://github.com/Josue24p/ApiRest-SqlServer';
  }
  //Primera forma para referenciar una sección con el scrollto('contacto') y el scrollIntoView nos lleva a la referencia puesta en el scrollto por ejemplo a la sección contacto
  scrollTo(section: string) {
    document.querySelector('#' + section)?.scrollIntoView({ behavior: "smooth" });
  }

  //2da forma con ElementRef, ViewChild
  @ViewChild('contactSection') contactSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('projectSection') projectSection!: ElementRef;

  scrollToContact() {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout() {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

  scrollToExperience() {
    this.experienceSection.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

  scrollToProject() {
    this.projectSection.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }
}
