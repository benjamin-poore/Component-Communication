import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy  {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('After content init');
    // this.paragraph.nativeElement.innerHTML = "hi"
  }

  ngAfterContentChecked(): void {
    console.log('After content checked');
  }

  ngAfterViewInit(): void {
    console.log('After view init');
  }

  ngAfterViewChecked(): void {
    console.log('After view checked');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

}
