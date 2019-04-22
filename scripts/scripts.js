let money,
    name,
    time

function start(){
   money = prompt(' Ваш бюджет');
   name  = prompt('Название вашего магазина');
   time = 19;

}
start();
const mainList = {
 budget : money,
 shopName : name,
 shopGoods : [],
 employers : {},
 open : false
}
function chooseGoods(){
  for(let i = 0; i < 3; i++){
   let a = prompt('Какой тип товаров будем продавать?');
    if(typeof(a) === 'string' && a.length < 50 && typeof(a) != null && a != '' ){
     document.write('<p> Ok </p>');
     mainList.shopGoods[i] = a;
    }else{
     i = i - 1;
    }
  }
 }
 chooseGoods();
function workTime(time){
  if( time < 0 ){
   document.write('<p>Такого не бывает!</p>');
    }else if(time > 8 && time < 20){
     document.write('<p>Время роботать!</p>');
    }else if(time < 24){
     document.write('<p>Время отдыхать</p>');
    }else{
     document.write('<p>В сутках только 24 часа</p>');
  }
 }
 workTime(-1);
document.write('<p> ваш бюджет на 1 день ' + mainList.budget/30 + ' уе</p>');
console.log(mainList);

function mainListWriter(){
 for(let goodsItem in mainList.shopGoods){
  document.write(`${goodsItem}: ${mainList.shopGoods[goodsItem]} <br>`);
 }
}
mainListWriter();