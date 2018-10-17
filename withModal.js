/*Пошаговая инструкцияЖ
1) зайти в инстарграмм 
2) перейдите на страницу пользователя на чьи подписки или подписчиков хотите подписаться вы
3) откройте консоль лог и вставте код написанный ниже
4) напишите в консоле команду run();

*/

function run() {

    questionFollowerOrFollowing();

    function go(follow) {

        openModalWindow(follow);
        setTimeout(scrollToButtomModalWindow, 5000);

        var followersBtn;
       function openModalWindow(follow) {

            if (follow == "подписки") {

                followersBtn = document.getElementsByClassName("g47SY")[2];
                


            }
            else {
                followersBtn = document.getElementsByClassName("g47SY")[1];
            }
            followersBtn.click();
        }


        function scrollToButtomModalWindow() {

            const modalWindowElements = document.getElementsByClassName("PZuss")[0];
            var time = setInterval(function () { modalWindowElements.lastChild.scrollIntoView() }, 1200)

            setTimeout(function () {
                clearTimeout(time);
                console.log("Будет подписанно на " + modalWindowElements.childElementCount + " пользователей");
            }, 50000);

        }

        setTimeout(function () {
            let followArrayBtns = document.querySelectorAll("div.Pkbci button.oF4XW.sqdOP.L3NKy");
            let i = 0;
            let realFollow = 0;
            setInterval(function () {
                switch (followArrayBtns[i].innerText) {
                    case "Подписаться":
                    case "Follow":
                        followArrayBtns[i].click();
                        realFollow++;
                        break;

                    default:
                        break;
                }
                i++;
                console.log("Уже подписались на " + realFollow + " пользователей")
            }, 55000)
        }, 53000)





    }


    /*Старт создания модакли с вопросом */
    function questionFollowerOrFollowing() {
        var div1 = document.getElementById("react-root");
        var modal = document.createElement("div");
        modal.style.cssText = "height : 100vh; width:100%; display: flex; text-align: center;padding:20%; z-index:99; font-size: 18px; color: white; position:fixed; top:0; left:0; background: url(https://images.pexels.com/photos/823841/pexels-photo-823841.jpeg) no-repeat center /cover; box-shadow: 100vw 0 rgba(0, 0, 0, 0.5) inset;";
        modal.setAttribute("id", "modal");
        modal.innerHTML = "Do you want followers or following?";
        document.innerHTML = modal;
        document.body.insertBefore(modal, div1);

        /*Создание кнопок в модалке */
        function createBtn(value) {
            var button = document.createElement('input');
            button.style.cssText = " display: inline-block;background: #FFD504;color: #000;padding: 6px 10px;margin-top: 20px;border: 1px solid #FFD504;text-transform: capitalize;font-size: 14px;font-weight: 700;text-decoration: none;text-decoration-style: solid;line-height: 24px;margin-top: 20px;cursor: pointer;";

            button.setAttribute("type", "button");
            button.setAttribute("value", value);
            return button;
        }

        /*финиш создания кнопок */

        var btnFollowing = createBtn("following/подписки");
        var btnFollowers = createBtn("followers/подписчики");



        modal.appendChild(btnFollowing);
        modal.appendChild(btnFollowers);


        modal.addEventListener("click", answer, false);


        
      

       


    }
    /*финиш создание модакли с вопросом */
/*Старт обработки ответа */
    function answer(e) {

        var answerVal;
        var btn = e.target;
        if (btn.value == "following/подписки") {
            answerVal = "подписки";
        }
        else {
            answerVal = "подпиcчики";
        }
        var modal = document.getElementById("modal");
        setTimeout(function () { modal.style.display = "none"; }, 1500);
        console.log(answerVal);
        setTimeout(go(answerVal),5000);

    }
     /*финиш обработки ответа  */
}

