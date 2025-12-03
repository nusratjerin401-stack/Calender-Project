function updateCaption() {
    const cssSelector = "html body div#main div.month div.month-name";
    const monthCaption = [...document.querySelectorAll(cssSelector)];

   monthCaption.forEach( (e,i,a) =>  {
       let monthName = getMonth(i);
        let days = [...e.parentElement.querySelectorAll(".day")];

         
        let monthData = getMonthData(2025, i);

         const info = {
            days, 
            shift : monthData.firstDay,
            size: monthData.size
         };

        updateDays(info);
        console.log({e, i, monthName, days, monthData, info});
        e.textContent = monthName;
    });
}


function updateDays($json) {
    let dayNo = 1;
    $json.days.forEach((e, i) => {
    if ($json.shift <= i && dayNo <= $json.size) {
        e.textContent = dayNo++;
        e.classList.remove("na");
}
        
       });
}