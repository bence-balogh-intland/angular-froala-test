import { Component, OnInit } from '@angular/core';

declare const FroalaEditor: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-froala-test';

  froalaOptions: any;

  ngOnInit(): void {

    FroalaEditor.DefineIcon('myIcon', { NAME: 'my-icon', PATH: 'M7 0 L7 20 L22 20 Z'})

    FroalaEditor.RegisterCommand('myIcon', {
      title: 'My Custom Icon',
      callback: function () {
      },
    })

    this.froalaOptions = {
      toolbarButtons: {
        ...FroalaEditor.TOOLBAR_BUTTONS,
        moreText: {
          ...FroalaEditor.TOOLBAR_BUTTONS.moreText,
          buttons: ['myIcon', ...FroalaEditor.TOOLBAR_BUTTONS.moreText.buttons]
        }
      }
    };

    new FroalaEditor('div#froala-editor', this.froalaOptions)
  }
}
