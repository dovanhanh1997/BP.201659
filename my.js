let year = prompt("Enter the year: ")
let isLeapYear = false;

let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisbleBy100 = year % 100 == 0;
    if (isDivisbleBy100) {
        let isDivisableBy400 = year % 400 == 0;
        if (isDivisableBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true
    }
}
if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}