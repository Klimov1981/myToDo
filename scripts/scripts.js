let money,
    name,
    time,
    price,
    


const mainList = {
 budget : money,
 shopName : name,
 shopGoods : [],
 employers : {},
 shopItems : [],
 open : false,
 discount : false,
 start: function start(){
     money = +prompt(' Ваш бюджет');
     name  = prompt('Название вашего магазина');
     time = 19;

},
 chooseGoods: function chooseGoods(){
                     for(let i = 0; i < 3; i++){
                      let a = prompt('Какой тип товаров будем продавать?');
                       if(typeof(a) === 'string' && a.length < 50 && typeof(a) != null && a != '' ){
                        document.write('<p> Ok </p>');
                        mainList.shopGoods[i] = a;
                       }else{
                        i = i - 1;
                       }
                     }
    },
 
 workTime: function workTime(time){
              if( time < 0 ){
               document.write('<p>Такого не бывает!</p>');
                }else if(time > 8 && time < 20){
                 document.write('<p>Время роботать!</p>');
                 mainList.open = true;
                }else if(time < 24){
                 document.write('<p>Время отдыхать</p>');
                }else{
                 document.write('<p>В сутках только 24 часа</p>');
              }
   },
 takeEmployers: function takeEmployers(){
             for(let i = 0; i < 4; i++){
              let name = prompt('Введите ваше имя', '');
              mainList.employers[i] = name;
             }
   },
 chooseShopItems : function chooseShopItems(){
              let items = prompt('Перечислите товары через запятую', '');
              mainList.shopItems = items.split(',');
              mainList.shopItems.push(prompt('Somethingelse?'));
              mainList.shopItems.sort();
 },
 budgetWriter: function budgetWriter(){
  document.write('<p> ваш бюджет на 1 день ' + Math.floor(mainList.budget/30) + ' уе</p>');
 }
}

 

console.log(mainList);







