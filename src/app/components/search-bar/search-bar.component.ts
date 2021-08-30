import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input() successfulSearch: boolean = false;
  @Input() filters: string[];
  @Output() successfulSearchChange = new EventEmitter<boolean>();
  @Output() clickSearch = new EventEmitter<string>();
  @Output() filterValue = new EventEmitter<string>();
  @Input() errorMessage: string | null;
  public formSearch: FormGroup;
  public changeSubscription: any;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formSearch = this.formBuilder.group({
      word: ['', [Validators.required]],
      filter: [''],
    });
  }

  ngOnInit(): void {
    this.changeSubscription = this.formSearch.valueChanges.subscribe(
      (control) => {
        if (control?.word) {
          this.successfulSearchChange.emit(false);
          this.errorMessage = null;
        }
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.errorMessage) {
      this.word?.enable();
      this.errorMessage = changes?.errorMessage.currentValue;
    }
  }

  public get word() {
    return this.formSearch?.get('word');
  }

  public get filter() {
    return this.formSearch?.get('filter');
  }

  handleClickSearch() {
    const valid = this.word?.errors && this.word?.value === '';
    if (valid) {
      this.errorMessage = 'Este campo es requerido';
    } else {
      this.word?.disable();
      this.clickSearch.emit(this.word?.value);
    }
  }

  handleClickFilter() {
    this.word?.enable();
    this.filterValue.emit(this.filter?.value);
  }

  handleClickRemove() {
    this.word?.enable();
    this.filter?.enable();
    this.successfulSearch = false;
  }
}
