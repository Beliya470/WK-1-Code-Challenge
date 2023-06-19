const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Constants
const taxBrackets = [
  { min: 0, max: 24000, rate: 0.1 },
  { min: 24001, max: 32333, rate: 0.25 },
  { min: 32334, max: Infinity, rate: 0.3 }
];

const nhifBrackets = [
  { min: 0, max: 5999, deduction: 150 },
  { min: 6000, max: 7999, deduction: 300 },
  { min: 8000, max: 11999, deduction: 400 },
  { min: 12000, max: 14999, deduction: 500 },
  { min: 15000, max: 19999, deduction: 600 },
  { min: 20000, max: 24999, deduction: 750 },
  { min: 25000, max: 29999, deduction: 850 },
  { min: 30000, max: 34999, deduction: 900 },
  { min: 35000, max: 39999, deduction: 950 },
  { min: 40000, max: 44999, deduction: 1000 },
  { min: 45000, max: 49999, deduction: 1100 },
  { min: 50000, max: 59999, deduction: 1200 },
  { min: 60000, max: 69999, deduction: 1300 },
  { min: 70000, max: 79999, deduction: 1400 },
  { min: 80000, max: 89999, deduction: 1500 },
  { min: 90000, max: 99999, deduction: 1600 },
  { min: 100000, max: Infinity, deduction: 1700 }
];

const nssfRates = {
  tier_I: 0.06, 
  tier_II: 0.06, 
  tier_I_limit: 6000,
  tier_II_limit: 18000
};

// Function
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE (tax)
  let tax = 0;
  let taxableIncome = grossSalary;
  for (let bracket of taxBrackets) {
      if (bracket.min <= taxableIncome && taxableIncome <= bracket.max) {
          tax += (taxableIncome - bracket.min) * bracket.rate;
          break;
      } else if (bracket.min <= taxableIncome) {
          tax += (bracket.max - bracket.min) * bracket.rate;
          taxableIncome -= bracket.max - bracket.min;
      }
  }

  // Calculate NHIF deductions
  const nhifBracket = nhifBrackets.find(bracket => bracket.min <= grossSalary && grossSalary <= bracket.max);
  const nhifDeduction = nhifBracket ? nhifBracket.deduction : 0;

  // Calculate NSSF deductions
  let nssfDeduction = 0;
  if (grossSalary <= nssfRates.tier_I_limit) {
      nssfDeduction = grossSalary * nssfRates.tier_I;
  } else if (grossSalary <= nssfRates.tier_II_limit) {
      nssfDeduction = (grossSalary - nssfRates.tier_I_limit) * nssfRates.tier_II + nssfRates.tier_I_limit * nssfRates.tier_I;
  } else {
      nssfDeduction = (nssfRates.tier_II_limit - nssfRates.tier_I_limit) * nssfRates.tier_II + nssfRates.tier_I_limit * nssfRates.tier_I;
  }

  // Calculate net salary
  const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

  // Output
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE: ${tax}`);
  console.log(`NHIF Deductions: ${nhifDeduction}`);
  console.log(`NSSF Deductions: ${nssfDeduction}`);
  console.log(`Net Salary: ${netSalary}`);
}

// Prompt the user for basic salary
readline.question('Enter your basic salary: ', basicSalaryInput => {
  let basicSalary = parseFloat(basicSalaryInput);

  // Prompt the user for benefits
  readline.question('Enter your benefits: ', benefitsInput => {
    let benefits = parseFloat(benefitsInput);

    // Calculate and display the net salary
    calculateNetSalary(basicSalary, benefits);

    readline.close();
  });
});
