import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() successfulSearch: boolean = false;
  @Output() successfulSearchChange = new EventEmitter<boolean>();
  @Output() clickSearch = new EventEmitter<string>();
  isDisabled: boolean = false;
  public formSearch: FormGroup;
  public changeSubscription: any;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formSearch = this.formBuilder.group({
      word: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.changeSubscription = this.formSearch.valueChanges.subscribe(
      (control) => {
        if (control?.word) {
          this.successfulSearchChange.emit(false);
        }
      }
    );
  }

  public get word() {
    return this.formSearch?.get('word');
  }

  handleClickSearch() {
    this.word?.disable();
    this.clickSearch.emit(this.word?.value);
  }
  handleClickRemove() {
    this.word?.enable();
    this.successfulSearch = false;
  }
}
