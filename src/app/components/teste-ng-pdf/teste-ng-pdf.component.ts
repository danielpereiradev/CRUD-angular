;
import { Component, OnInit } from '@angular/core';
import { jsPDF, TableCellData, TableConfig, TableRowData } from "jspdf";
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teste-ng-pdf',
  templateUrl: './teste-ng-pdf.component.html',
  styleUrls: ['./teste-ng-pdf.component.css']
})
export class TesteNgPdfComponent implements OnInit {

  public table:TableConfig;
  public dataTable:TableRowData;

  config:  {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "200px",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Digite...",
    "imageEndPoint": "",
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
      ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
      ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
    ]
  };


  @ViewChild('content', {static: false}) tableDetails!: ElementRef



  ngOnInit(){

  }
  public gerarPdf(): void {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.setFontSize(10);
    doc.html(this.tableDetails.nativeElement,{
      callback: (doc) => {
        doc.save('teste.pdf')
      }
    })




}

}
