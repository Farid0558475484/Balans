function sum(a, b) {
    return a + b;
  }
  
  function min(a, b) {
    return a - b;
  }
  
  function calculation(a, b, operator) {
    switch (operator) {
      case "+":
        console.log("Umumi Balans:", sum(a, b));
        break;
      case "-":
        console.log("Umumi Balans:", min(a, b));
        break;
  
      default:
        alert("Balans 600 Azn");
        break;
    }
  }
  let operator = prompt("Balans 600 Azn: iwarelerinden birin daxil edin: + ve ya -");
  let numberSecond = Number(prompt("Balansi nece Azn Artirib ve ya Azaltmag isteyiviz"));
  const a = 600;
  
  calculation(a, numberSecond, operator);
  