
export class Counter {
  constructor({root, buttons, min, max}) {
    this.counter =  root;
    this.count = localStorage.getItem('count') ? localStorage.getItem('count') : 0;
    this.max = max ?? 40;
    this.min = min ?? 0;
    this.buttons = [...buttons];
    this.init = this.init;
  }


  init() {
    let self = this;
    this.buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        console.log(button);
          if(button.classList.contains('btn--add')) {
            self.add();
          }
          if(button.classList.contains('btn--reset')) {
            self.reset();
          }
      })
    })
  }


  // Methods
  add() {
      // Save to Local Storage
      // Increment count in DOM.
  }

  reset() {
      // Count = this.min;
  }


  render() {
    /*

    <span class="count">0</span>
    </div>
    <button class="btn--add">Add</button>
    <button class="btn--reset">Reset</button>

    */
  }
}


