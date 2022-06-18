import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  expression: string = "";
  errorMessage: string = "";
  precision: number = 1;

  constructor(private service: CalcService) { }

  append(val: string) {
    this.expression += val;
  }

  pop() {
    this.expression = this.expression.slice(0, this.expression.length -1)
  }

  result() {
    let toEvaluate = this.expression.trim();
    if(toEvaluate != "") {
      this.service.calculate(this.expression, this.precision).then((data) =>{

        if(data != null && !isNaN(data)) {
          this.errorMessage = "";
          this.expression = data;
        }else {
          this.errorMessage = data;
        }
      })
    }else {
      this.errorMessage = "Null expression";
    }
  }

  clearVisor() {
    this.expression = "";
  }

  ngOnInit(): void {
  }

}
