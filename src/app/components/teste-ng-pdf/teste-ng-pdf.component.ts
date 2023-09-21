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
