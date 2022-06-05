const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
    const totalBatteries = batteryBatches.reduce(function (reducer, batteries){
        return reducer+batteries
        },0)
    
console.log(totalBatteries);

 