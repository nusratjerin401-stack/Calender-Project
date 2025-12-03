function getMonth(index) {
const months = [

"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];
return months[index];

}
 

function getMonthData(year,month) {
    let firstDay = new Date(year, month, 1).getDay();
    let size = new Date(year, month + 1, 0).getDate()
    const monthData = { firstDay, size};
    return monthData;

}