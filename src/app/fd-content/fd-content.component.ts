import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-content',
  templateUrl: './fd-content.component.html',
})
export class FdContentComponent implements OnInit {
  tableRows: any[] = [];

  ngOnInit(): void {
    this.tableRows = this.generateData(5);
  }

  handleClick(num: number) {
    this.tableRows = this.generateData(num);
  }

  generateData(num: number) {
    const result = [];

    for (let i = 0; i < num; i++) {
      const obj = {
        column1: `user.name${i}@email.com`,
        column2: 'LongText '.repeat(11).trim(),
        column3: `Row ${i + 1}`,
        date: '09-07-18',
        type: 'search',
      };

      result.push(obj);
    }

    return result;
  }
}
