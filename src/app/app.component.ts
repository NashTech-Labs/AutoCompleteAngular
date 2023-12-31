import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autocomplete';
  techControl = new FormControl('');
  options: string[] = ['Angular', 'Angular Material', 'Bootstrap', 'Ionic', 'Node', 'React', 'Vue'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.techControl.valueChanges.pipe(startWith(''),
      map(value => this.filterTechnologies(value || '')),
    );
  }

  filterTechnologies(name: string): string[] {
    const selectedValue = name.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(selectedValue));
  }
}
