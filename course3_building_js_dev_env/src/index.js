import numeral from 'numeral';
import './index.css'

debugger;  

const courseValue = numeral(1000).format('$0,0.00');

console.log(`i would pay ${courseValue} for this course`);
