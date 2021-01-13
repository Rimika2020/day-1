

var numbers = new Array();
numbers=[10,1,9,2,8,3,7,4,6];

up();
down();
max();
min();
sum();
mean();
median();
stdev();

function up(){
    var numopr = numbers.sort(function(a, b){return a-b});
    console.log("Ascending order");
    for(i=0;i<numopr.length;i++)
    {
        console.log(numopr[i]);
    }
}

function down(){
    var numopr = numbers.sort(function(a, b){return b-a});
    console.log("Descending order: ");
    for(i=0;i<numopr.length;i++)
    {
        console.log(numopr[i]);
    }
}

function max(){
    var max = Math.max.apply(null,numbers);
    console.log("Max value: "+ max);
}

function min(){
    var min = Math.min.apply(null,numbers);
    console.log("Min value: "+min);
}



function mean(){
    var sum=0;
    for(i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    var mean= sum/numbers.length;
    console.log("Mean: "+mean);
}

function sum(){

    var sum=0;
    for(i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    console.log("sum= "+sum);
}

function median(){
    var arr = numbers.sort(function(a, b){return a-b});
    

    if(arr.length%2==0)
    {
        var mid=arr.length/2;
        var m = Math.floor(mid);
        var med = (arr[m]+arr[m-1])/2;
    }
    else{
        var mid=arr.length/2;
        var m= Math.floor(mid);
        var med = arr[m];
    }
    console.log("Median: "+med);

}

function stdev(){
    
    var sum=0;
    for(i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    var mean= sum/numbers.length;

    var stdev=Math.sqrt(numbers.reduce(function (sq, n) {
        return sq + Math.pow(n - mean, 2);
    }, 0) / (numbers.length - 1));

    console.log("standard deviation: "+stdev);

}

