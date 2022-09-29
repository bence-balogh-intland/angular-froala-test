import { Component, OnInit } from '@angular/core';

declare const FroalaEditor: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-froala-test';

  ngOnInit(): void {
    new FroalaEditor('div#froala-editor')
  }
}
