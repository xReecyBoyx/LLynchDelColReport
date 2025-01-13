const allHires = 
[{
    fleetNo: "100067",
    eqpCode: "EX05Z",
    contractNo: "HC-100098",
    custAccount: "COS001",
    sitePcode: "WD18 7LY",
    delCol: "Delivery"
 },
 {
    fleetNo: "100068",
    eqpCode: "EX03Z",
    contractNo: "HC-100099",
    custAccount: "COS001",
    sitePcode: "WD18 7LY",
    delCol: "Delivery"   
 },
 {
    fleetNo: "600789",
    eqpCode: "DUM03S",
    contractNo: "NP-100065",
    custAccount: "BAM001",
    sitePcode: "HP7 3UG",
    delCol: "Delivery"   
 },
 {
   fleetNo: "100987",
   eqpCode: "EX20S",
   contractNo: "NP-100066",
   custAccount: "BAL001",
   sitePcode: "KT15 3SF",
   delCol: "Collection"   
},
{
   fleetNo: "100988",
   eqpCode: "ROL08",
   contractNo: "NP-100067",
   custAccount: "KIE003",
   sitePcode: "NP13 5RS",
   delCol: "Collection"   
},
{
   fleetNo: "t009865",
   eqpCode: "TEL20",
   contractNo: "WN-100067",
   custAccount: "BAM002",
   sitePcode: "LP13 5ST",
   delCol: "Delivery"   
},
{
   fleetNo: "t009866",
   eqpCode: "TEL14",
   contractNo: "WN-100068",
   custAccount: "BAM002",
   sitePcode: "LP13 5ST",
   delCol: "Delivery"   
},
{
   fleetNo: "t009867",
   eqpCode: "TEL08",
   contractNo: "HC-100877",
   custAccount: "BAL001",
   sitePcode: "NG32 0DX",
   delCol: "Collection"   
},
{
   fleetNo: "100321",
   eqpCode: "EX01S",
   contractNo: "HC-100899",
   custAccount: "COS001",
   sitePcode: "LE13 2SU",
   delCol: "Collection"   
},
{
   fleetNo: "100322",
   eqpCode: "EX01S",
   contractNo: "HC-100900",
   custAccount: "COS001",
   sitePcode: "LE13 2SU",
   delCol: "Collection"   
},
{
   fleetNo: "600899",
   eqpCode: "DUM06S",
   contractNo: "HC-100912",
   custAccount: "SKA001",
   sitePcode: "LE12 5OG",
   delCol: "Delivery"   
},
{
   fleetNo: "600901",
   eqpCode: "DUM09S",
   contractNo: "HC-100913",
   custAccount: "BAR001",
   sitePcode: "LS13 4RU",
   delCol: "Delivery"   
},
{
   fleetNo: "8095672",
   eqpCode: "EX14LR",
   contractNo: "HC-100914",
   custAccount: "BAM001",
   sitePcode: "NH12 3UT",
   delCol: "Collection"   
},
{
   fleetNo: "200456",
   eqpCode: "EX40S",
   contractNo: "HC-100952",
   custAccount: "COS001",
   sitePcode: "NW1 5ST",
   delCol: "Collection"   
},
{
   fleetNo: "200486",
   eqpCode: "EX70S",
   contractNo: "HC-100953",
   custAccount: "COS001",
   sitePcode: "NW1 5ST",
   delCol: "Delivery"   
},
{
   fleetNo: "16078zj",
   eqpCode: "DOZ50",
   contractNo: "HC-100954",
   custAccount: "COS001",
   sitePcode: "NW1 5ST",
   delCol: "Delivery"   
}
]


function injectData() 
{
   // Assign Body & Iterator //
   const tableBody = document.getElementById("maintablebody");
   let i = 0;

   // Classes //
   let classReg = "tableRow";
   let classAlternate = "tableRowAlternate";
   let classCol = "collection";
   let classDel = "delivery";
   
   for (const hires of allHires) {
      // Determine row color alternating (odd/even rows)
      let finalClass = Math.floor(i / 2) < (i / 2) ? classAlternate : classReg;

      // Determine Delivery or Collection class for the last column
      let delCol = hires.delCol === "Delivery" ? classDel : classCol;

      // Combine both classes for the last column
      let finalDelClass = `${finalClass} ${delCol}`; // Ensure space between both classes

      // Debug: Log the final class being applied
      console.log(`Row class: ${finalClass}, Last column class: ${delCol}`);
      
      // Inject the HTML with the classes properly assigned
      let htmlInject = `<tr>
                         <td class="${finalClass}">${hires.fleetNo}</td>
                         <td class="${finalClass}">${hires.eqpCode}</td>
                         <td class="${finalClass}">${hires.contractNo}</td>
                         <td class="${finalClass}">${hires.custAccount}</td>
                         <td class="${finalClass}">${hires.sitePcode}</td>
                         <td class="${finalDelClass}">${hires.delCol}</td>
                        </tr>`;

      // Insert the new row into the table body
      tableBody.insertAdjacentHTML('beforeend', htmlInject);
     
      i++;
   }
}


// Call Function //
injectData();

