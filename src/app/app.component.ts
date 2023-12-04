import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accumulated: string ="";
  evalInput: string = "";
  accPrev = "";
  op = false;

  // Key [DELL] -> Delete all.
  clearResult(): void {
    this.accumulated = "";
    this.evalInput = "";
    this.accPrev = "";

  }

  // Key [/] -> Divide
  calculateDivide(): void {
    this.evalInput = this.evalInput + "/";
  }

  // Key [x] -> Multiply
  calculateMultiply(): void {
    this.evalInput = this.evalInput + "*";
  }

  // Key [-] -> Subtract
  calculateSubtract(): void {
    this.evalInput = this.evalInput + "-";
  }

  // Key [+] -> Add
  calculateAdd(): void {
    this.evalInput = this.evalInput + "+";
  }

  // Rest of keys -> Appends the given value
  appendToResult(value: string): void {
        this.evalInput += value;
  };

  // Key [=] -> Calculate for operation.
  calculate(): void{
    this.accumulated = eval(this.accPrev + this.evalInput);
    this.evalInput = "";
    this.accPrev = "";
  }
}
