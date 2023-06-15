function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
    
    // Tax rates
    const payeRates = [
      { min: 0, max: 12298, rate: 0 },
      { min: 12299, max: 23885, rate: 10 },
      { min: 23886, max: 35472, rate: 15 },
      { min: 35473, max: 47059, rate: 20 },
      { min: 47060, max: Infinity, rate: 25 }
    ];
    
    // NHIF and NSSF deductions
    const nhifDeductions = 170;
    const nssfDeductions = Math.min(basicSalary * 0.06, 200);
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    
    // Calculate payee (Tax)
    let paye = 0;
    for (const rate of payeRates) {
      if (grossSalary >= rate.min && grossSalary <= rate.max) {
        paye = (grossSalary - rate.min) * (rate.rate / 100);
        break;
      }
    }
    
    // Calculate net salary
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
    
    console.log(`Payee (Tax): ${paye}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  calculateNetSalary();
  