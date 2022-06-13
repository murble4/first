import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css'],
  host: { class: 'col-4' },
})
export class CardNewComponent implements OnInit {
  constructor() {}

  public newCard: any = { text: '' };

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCard.text.length > 0) {
      this.addCard(this.newCard.text);
    }
  }
  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }
  @Output() onCardAdd = new EventEmitter<string>();

  ngOnInit() {}
}
