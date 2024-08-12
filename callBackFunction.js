function dailyWork (name, age, task){
    console.log("Name is :", name);
    console.log("Age is :", age);
    task();
};

function taskForRaju(){
    console.log("Shower now!");
};
function taskForMahin(){
    console.log("Take breakfast");
};
function taskForMojid(){
    console.log("Go to market");
};

dailyWork('Raju', 12, taskForRaju);
dailyWork('Mahin', 14, taskForMahin);
dailyWork('Mojid', 21, taskForMojid);