import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.page.html',
  styleUrls: ['./rechner.page.scss'],
})
export class RechnerPage implements OnInit {
  result!: number;

  constructor() {}

  ngOnInit() {
    const buttons = Array.from(document.querySelectorAll('ion-button'));
    const resultElement = document.querySelector('p');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        handleButtonClick(String(buttonValue));
      });
    });

    function handleButtonClick(value: string) {
      if (resultElement !== null) {
        switch (value) {
          case 'clear':
            resultElement.textContent = '';
            break;
          case '=':
            calculateResult();
            break;
          default:
            resultElement.textContent += value;
        }
      }
    }

    function calculateResult() {
      if (resultElement !== null) {
        const expression = resultElement.textContent;

        try {
          const result = eval(String(expression));
          resultElement.textContent = result;
        } catch (error) {
          resultElement.textContent = 'Fehlerhafte Eingabe';
        }
      }
    }
  }
}
