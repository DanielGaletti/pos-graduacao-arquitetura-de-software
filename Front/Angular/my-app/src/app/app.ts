import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [ProfileCard],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  title = 'Personal Profile in Angular';

  name = 'Daniel Galetti';
  job = 'Software Engineer';
  disponibility = 'Available';
  subtitle = 'My first experience with Angular!';
  bio =
    "My name is Daniel, Im a Software Engineer with experience in web development, and I'm passionate about creating innovative solutions. I have a strong background in programming languages such as JavaScript, TypeScript, and Python, and I'm always eager to learn new technologies and improve my skills. In my free time, I enjoy contributing to open-source projects and exploring new frameworks and libraries. Im postgraduate student in Software Engineering at PUC-Rio and Msc in Artificial Intelligence at UFSCar and I'm excited to continue growing as a developer and making a positive impact in the tech industry";
}