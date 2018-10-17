/*Сервис подписки на акканты инстаграмма  */

var arrAllPost = document.getElementsByClassName('eLAPa');
var i = 0;
var currentFollow = 0;
var needFollow = 1000;


function run() {
    if (currentFollow == needFollow || arrAllPost[i] === "undefined") {
        clearInterval(go);
        alert("STOP!!!! "); /*если мы ненашли следующий пост то останавливаем весь процесс и выводим алерт СТОП*/
    } else {
        arrAllPost[i].click();
        setTimeout(function () {

            var x = document.querySelector('button.oW_lN.oF4XW.sqdOP.yWX7d');
            switch (x.firstChild.data) {
                case "Подписаться":
                case "Follow":
                    x.click();
                    currentFollow++;
                    break;
                default:
                    break;
            }
        }, 4000);
        setTimeout(function () { window.history.back(); }, 7000);
        if (i % 11 == 0) {
            setTimeout(function () { scrollDown(); }, 9000);/*Каждые 10 постов будет скролится вниз*/
        }
        i++;
        /*после прохождения 53 постов мы сбрасываем И потому что примерно около 40 постов может быть на странице +- */
        if (i >= 53) {
            i = 0;
        }
    }
}
/* Go функция запускает весь процесс */
function go() {
    setInterval(run, 50000);
}

/*Функция скроллинга*/
function scrollDown() {
    var scrollHeight = document.documentElement.scrollHeight;
    scrollHeight = Math.max(scrollHeight, 1);
    window.scrollTo(0, scrollHeight - 1);
}

/*Пошаговая инструкцияЖ
1) зайти в инстарграмм 
2) вбейте в поиск хештег или локацию
3) открылась страница с постами
4) откройте консоль лог и вставте код написанный выше
5) напишите в консоле команду go();

*/