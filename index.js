const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

module.exports = totalBatteries;

// function totalBatteries(batch){
//     let totalBatteries = 0;
//     for(batch of batteryBatches){
//         totalBatteries += batch

//     }
//     return totalBatteries;
// }
// module.exports = totalBatteries;