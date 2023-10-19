import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-ng-editor',
  templateUrl: './teste-ng-editor.component.html',
  styleUrls: ['./teste-ng-editor.component.css']
})
export class TesteNgEditorComponent implements OnInit, OnDestroy{

  public form:FormGroup;

  // editor: Editor;
  // toolbar: Toolbar = [
  //   ['bold', 'italic'],
  //   ['underline', 'strike'],
  //   ['code', 'blockquote'],
  //   ['ordered_list', 'bullet_list'],
  //   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  //   ['link', 'image'],
  //   ['text_color', 'background_color'],
  //   ['align_left', 'align_center', 'align_right', 'align_justify'],
  // ];



  constructor(private formBuilder:FormBuilder){

  }



  ngOnInit(): void {
    // this.editor = new Editor();

  }

  ngOnDestroy(): void {
    // this.editor.destroy();
  }

}
