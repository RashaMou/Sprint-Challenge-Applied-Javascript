// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const headerContainer = document.querySelector('.header-container');

  const header = document.createElement('div');
  header.classList.add('header');
  
  
  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent = 'MARCH 28, 2019';
  
  const title = document.createElement('h1');
  title.textContent = 'Lambda Times';

  
  const temperature = document.createElement('span');
  temperature.classList.add('temp');
  temperature.textContent = '98°'; 

  headerContainer.appendChild(header);
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);
}

const createHeader = Header();
