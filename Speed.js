//
function SpeedDetector (speed){
    const speedlimit =70;
    const demeritpoint =5;

    if (speed <speedlimit){
        alert ('OK');

    }else {
        const excessspeed = speed -speedlimit;
        const demerit =Math.floor (excessspeed +demeritpoint);
        alert(`Total demerit points: ${demerit}`);
    }

}

//prompt the user for the speed limit, converts it and validate it.
function main(){
    const input =prompt ('Enter speed of the car(km/h')
    const speed = parseFloat(input);

    if(!isNaN(speed) && speed >=0){
        SpeedDetector(speed);

    }else{
        alert('Please input a valid speed')
    }
}
main();