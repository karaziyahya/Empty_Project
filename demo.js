'use strict'; 
(function() {
    const expr = 'Papayas';
    switch (expr) {
      case 'Oranges':
        display('Oranges are $0.59 a pound.');
        break;
      case 'Mangoes':
      case 'Papayas':
        display('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        display(`Sorry, we are out of ${expr}.`);
    }
  

})();