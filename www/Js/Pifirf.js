// JavaScript/PHP7/HTML5, EDGE/CHROME                         *** Pifirf.js ***

/**
 * Библиотека прикладных функций сайта:     пифи.рф                             
 * 
 * v1.1, 25.03.2020       Автор: Труфанов В.Е. 
 * Copyright © 2019 tve   Дата создания: 03.06.2019
 * 
**/ 

// ****************************************************************************
// *               Проинициализировать общие js-переменные сайта              *
// ****************************************************************************
var e_lBu=false;    // кнопка "стрелка влево" не нажата
var e_tBu=false;    // кнопка "стрелка вверх" не нажата
var e_rBu=false;    // кнопка "стрелка вправо" не нажата

var e_lTu=false;    // кнопка "стрелка влево" не тапнута
var e_tTu=false;    // кнопка "стрелка вверх" не тапнута
var e_rTu=false;    // кнопка "стрелка вправо" не тапнута

var SiteDevice='Устройство';
var aScreenInfo;    // массив данных об окне браузера
var gWidth=800;     // ширина канвы игры
var gHeight=600;    // высота канвы игры

// ****************************************************************************
// *        Преобразовать логическое значение в соответствующий текст         *
// ****************************************************************************
function sayLogic($logic)
{
   $Result='false';
   if ($logic) $Result='true';
   return $Result;
}
// ****************************************************************************
// *        Преобразовать логическое значение в соответствующий текст         *
// ****************************************************************************
function MakeSiteDevice($Name,$isElem=false)
{
   $Result='Устройство';
   // Определяем устройство
   if ($Name=='Computer') $Result = 'Компьютер';
   else if ($Name=='Mobile') $Result = 'Смартфон';
   // Если требуется, то меняем элемент на странице
   if ($isElem) 
   {
      var elem = document.getElementById("SiteDevice");
      elem.innerHTML=$Result;
   }
   return $Result;
}

// ****************************************************************************
// *                        Определить общесайтовые события                   *
// ****************************************************************************

// http://greymag.ru/?p=175, 07.09.2011. При повороте устройства браузер отсылает событие orientationchange.
// Это актуально для обеих операционных систем. Но подписка на это событие может осуществляться по разному. 
// При проверке на разных устройствах iPhone, iPad и Samsung GT (Android), выяснилось что в iOS срабатывает 
// следующий вариант установки обработчика: window.onorientationchange = handler; А для Android подписка
// осуществляется иначе: window.addEventListener( 'orientationchange', handler, false ); Примечание: В обоих
// примерах handler - функция-обработчик. Текущую ориентацию экрана можно узнать проверкой свойства 
// window.orientation, принимающего одно из следующих значений: 0 — нормальная портретная ориентация, -90 —
// альбомная при повороте по часовой стрелке, 90 — альбомная при повороте против часовой стрелки, 
// 180 — перевёрнутая портретная ориентация (пока только для iPad).
//
// Отследить переворот экрана:
// https://www.cyberforum.ru/javascript/thread2242547.html, 08.05.2018
window.addEventListener('orientationchange',doOnOrientationChange);
function doOnOrientationChange() 
{
   $('#OriChange').remove();
   if (window.orientation==0)
   {
      $('#Play').css('display','block');
   }
   else
   {
      $('#Play').css('display','none');
      var cHtml='<div id="OriChange">'+SiteDevice+' поверните, игра запустится!</div>';
      $('#Main').prepend(cHtml);
      $('#OriChange').css('font-size','3.6rem');
      $('#OriChange').css('width','77rem');
      $('#OriChange').css('padding-left','2rem');
      $('#OriChange').css('margin-top','4rem');
      $('#OriChange').css('margin-left','auto');
      $('#OriChange').css('margin-right','auto');
      $('#OriChange').css('font-weight','bold');
      $('#OriChange').css('color','#E00B0B');
   }
}
// Обрабатываем нажатия на клавиши 'мыши', показывая коды клавиш event.which:
// левая=1, колесико=2, правая=3 (на самсунгТВ-центральная кнопка=1)    
document.addEventListener("mousedown",mousedownHandler,false);
function mousedownHandler(eve) 
{
   // Отрабатываем нажатия кнопок управления движением
   // для левой кнопки мыши
   if (eve.which==1)
   {
      if ((event.target.nodeName == "BUTTON")|(event.target.nodeName == "I"))
      {
         // "движение влево"
         if ((event.target.id=='lBu')|(event.target.id=='lAm'))
         {
            e_lBu=true; e_tBu=false; e_rBu=false;
         }
         // "прыжок"
         if ((event.target.id=='tBu')|(event.target.id=='tAm'))
         {
            e_tBu=true;
         }
         // "движение вправо"
         if ((event.target.id=='rBu')|(event.target.id=='rAm'))
         {
            e_rBu=true; e_tBu=false; e_lBu=false; 
         }
      }
   }
   // Трассируем остальные кнопки мыши
   else
   {
      var str=event.target.nodeName+' id:'+event.target.id;
      console.log(str,'mousedown =',eve.which);
   }
}
// Обрабатываем отпускания клавиши 'мыши', показывая коды клавиш event.which:
// левая=1, колесико=2, правая=3 (на самсунгТВ-центральная кнопка=1)    
document.addEventListener("mouseup",mouseupHandler,false);
function mouseupHandler(eve) 
{
   // Отрабатываем отпускания кнопок управления движением
   // для левой кнопки мыши
   if (eve.which==1)
   {
      // Отрабатываем нажатия кнопок управления движением
      if ((event.target.nodeName == "BUTTON")|(event.target.nodeName == "I"))
      {
         // "движение влево"
         if ((event.target.id=='lBu')|(event.target.id=='lAm'))
         {
            e_lBu=false;
         }
         // "прыжок"
         if ((event.target.id=='tBu')|(event.target.id=='tAm'))
         {
            e_tBu=false;
         }
         // "движение вправо"
         if ((event.target.id=='rBu')|(event.target.id=='rAm'))
         {
            e_rBu=false;
            //event.preventDefault();
            //return false;
         }
      }
   }
   // Трассируем остальные кнопки мыши
   else
   {
      var str=event.target.nodeName+' id:'+event.target.id;
      console.log(str,'mouseup =',eve.which);
   }
}
// Обрабатываем клики на кнопках 'настройка' и 'назад'
document.addEventListener("click",clickHandler,false);
function clickHandler(event)
{
   if ((event.target.id=='bCtrl')|(event.target.id=='iCtrl'))
   {
      $('#bCtrl').css('display','none');
      $('#ListInfo').css('display','none');
      $('#bUndo').css('display','block');
      $('#ListInfoCtrl').css('display','block');
   }
   if ((event.target.id=='bUndo')|(event.target.id=='iUndo'))
   {
      $('#bUndo').css('display','none');
      $('#ListInfoCtrl').css('display','none');
      $('#bCtrl').css('display','block');
      $('#ListInfo').css('display','block');
   }
}
// Обрабатываем касания экрана пальцем
document.addEventListener('touchstart', function(event) 
{
   if ((event.target.nodeName == "BUTTON")|(event.target.nodeName == "I"))
   {
      // "движение влево"
      if ((event.target.id=='lBu')|(event.target.id=='lAm'))
      {
         e_lTu=true; e_rTu=false;
      }
      // "прыжок"
      if ((event.target.id=='tBu')|(event.target.id=='tAm'))
      {
         e_tTu=true;
      }
      // "движение вправо"
      if ((event.target.id=='rBu')|(event.target.id=='rAm'))
      {
         e_rTu=true; e_lTu=false; 
      }
   }
}, false);
// Обрабатываем отпускания экрана пальцем
document.addEventListener('touchend', function(event) 
{
   if ((event.target.nodeName == "BUTTON")|(event.target.nodeName == "I"))
   {
      // "движение влево"
      if ((event.target.id=='lBu')|(event.target.id=='lAm'))
      {
         e_lTu=false;
         event.preventDefault();  
         return false;
      }
      // "прыжок"
      if ((event.target.id=='tBu')|(event.target.id=='tAm'))
      {
         e_tTu=false;
         event.preventDefault();  
         return false;
      }
      // "движение вправо"
      if ((event.target.id=='rBu')|(event.target.id=='rAm'))
      {
         e_rTu=false; 
         event.preventDefault();  // отключили дальнейшее
         return false;            // всплытие события
      }
   }
}, false);
// ****************************************************************************
// *          Установить ширину и спозиционировать div "игровое поле"         *
// *             на "игровом столе" заданного текущего устройста              *
// ****************************************************************************
function setPlayHeight(SiteDevice,PlayHeight,TopOffset)
// Параметры:
//
//   SiteDevice - тип устройства: 'Computer','Mobile','Tablet';
//   PlayHeight - высота игрового поля (div Play) в пикселах;
//   TopOffset  - отступ (смещение) от верхнего края игрового стола в процентах
{
   // SiteDevice='Computer':    позиционируем дивы таким образом, чтобы высота 
   // игрового поля задавалась в пикселах, а высоты верхнего и нижнего полей
   // в процентах от высоты оставшегося пространства на игровом столе
   // 
   //                                                      Начальное состояние:
   // #Heady 
   // {
   //    height:20%;
   // }
   // #Play  
   // {
   //    height:60%;
   // }
   // #Footy  
   // {
   //    height:20%;
   // }
   if (SiteDevice=='Computer')
   {
      // Определяем высоту окна браузера в пикселях 
      // https://www.w3schools.com/js/js_window.asp
      var hb = window.innerHeight||document.documentElement.clientHeight;
      // Ограничиваем высоту игрового поля размером окна браузера
      // (при превышении заданной высотой высоты размера окна скрываем верхнюю
      // и нижнюю полосы)
      if (PlayHeight>hb)
      {
         hh=0; hf=0; hp=hb;
      } 
      // В обычных случаях пересчитываем проценты полей в пикселы
      {
         hp=PlayHeight; hRest=hb-hp; if (hRest<0) hRest=0;
         // hh:  hRest=100%  
         //          x=TopOffset
         hh=Math.floor(hRest*TopOffset/100);
         // hf:  hRest=100%  
         //          x=(100-TopOffset)
         hf=Math.floor(hRest*(100-TopOffset)/100);
      }
      $('#Heady').css('height',hh);
      $('#Play').css('height',hp);
      $('#Footy').css('height',hf);
      return hh;
   }
}
// ****************************************************************************
// *          Установить ширину и спозиционировать div "игровой стол"         *
// *              в окне браузера на заданном текущем устройсте               *
// ****************************************************************************
function setMainWidth(SiteDevice,MainWidth,LeftOffset)
// Параметры:
//
//   SiteDevice - тип устройства: 'Computer','Mobile','Tablet';
//   MainWidth  - ширина игрового стола (div MAIN) в пикселах;
//   LeftOffset - отступ (смещение) от левого края окна браузера в процентах
{
   // SiteDevice='Computer':    позиционируем дивы таким образом, чтобы ширина 
   // "игрового стола" (div MAIN) задавалась в пикселах, а ширина правой и 
   // левой бесконечных вертикальныех информационных полос в процентах 
   // от оставшегося пространства на экране 
   //                                                      Начальное состояние:                                               
   // #lList                                                                   
   // {                                                                        
   //    float: left;                                                          
   //    width: 194px;                                                         
   // }                                                                        
   // #Main                                                                    
   // {                                                                        
   //    float:left;                                                           
   //    position: fixed;                                                      
   //    top: 0;                                                               
   //    width: 801px;                                                         
   //    left: 50%;                                                            
   //    margin-right: -50%;                                                   
   //    transform: translate(-50%);                                           
   // }                                                                        
   // #rList                                                                   
   // {                                                                        
   //    float: right;                                                         
   //    width: 194px;                                                         
   // } 
   if (SiteDevice=='Computer')
   {
      // Определяем ширину окна браузера 
      var wb = window.innerWidth||document.documentElement.clientWidth
      // Определяем ширину клиентской части сайта в окне браузера 
      var wcl=document.body.clientWidth;
      // Определяем ширину полосы прокрутки 
      var scrollWidth = wb - wcl;
      // Не позволяем ширине игрового стола быть меньше ширины прокрутки
      // (это позволяет не ломаться информационным полосам)
      if (MainWidth<scrollWidth) MainWidth=scrollWidth; 
      $('#Main').css('width',MainWidth);
      // Определяем ширину оставшегося пространства 
      var widthFree=wcl-MainWidth; // когда полоса прокрутки есть
      // widthFree=wb-MainWidth;   // когда полосы прокрутки нет
     
      // Определяем минимальную ширину вертикальной полосы в процентах, 
      // как два скроллбара
      wrp=Math.floor((scrollWidth*2)*100/widthFree);
      // Контроллируем процент смещения: считаем, что узенькие вертикальные 
      // информационные полосы (менее 2 скролбаров) не имеют смысла, их отключаем
      if (LeftOffset>(100-wrp)) 
      {
         LeftOffset=100;
         $('#rList').css('display','none');
      }
      else if (LeftOffset<wrp) 
      {
         LeftOffset=0;
         $('#lList').css('display','none');
      }
      // Определяем левое смещение игрового стола в процентах и пикселах
      wl=Math.floor(widthFree*LeftOffset/100);
      $('#lList').css('width',wl);
      $('#Main').css('left',LeftOffset+'%');
      // Определяем правое смещение игрового стола в процентах и пикселах
      wr=Math.floor(widthFree*(100-LeftOffset)/100);
      $('#rList').css('width',wr);
      $('#Main').css('transform','translate(-'+LeftOffset+'%)');
      $('#Main').css('margin-right','-'+100-LeftOffset+'%)');
   }
}
  
  function TurnOnHotkeys(){
  
      document.onkeydown = function(e) {

      // Ctrl+I  Показать установленные настройки сайта
      if (e.ctrlKey && e.keyCode == 'I'.charCodeAt(0)) 
      {
        document.location.replace("index.php?Com=Sett");
        return false;
      }

      // Ctrl+K  Показать кукисы
      else if (e.ctrlKey && e.keyCode == 'K'.charCodeAt(0)) 
      {
        document.location.replace("index.php?Com=Cook");
        return false;
      }
      
      // Ctrl+P  Распечатать страницу (функцию предоставляет браузер)
 
      // Ctrl+Q  Показать параметры запроса к сайту
      else if (e.ctrlKey && e.keyCode == 'Q'.charCodeAt(0)) 
      {
        document.location.replace("index.php?Com=Parm");
        return false;
      }

      // Ctrl+R  Перегрузить сайт без параметров
      else if (e.ctrlKey && e.keyCode == 'R'.charCodeAt(0)) 
      {
        document.location.replace("index.php?Com=Remv");
        return false;
      }

      // Ctrl+S  Сохранить страницу сайта (функцию предоставляет браузер Chrome‎)

      // Ctrl+Z  Передать значение переменной в PHP
      else if (e.ctrlKey && e.keyCode == 'Z'.charCodeAt(0)) 
      {
        var idi = 1352;
        document.location.replace("index.php?idi="+idi);
        return false;
      }
      
    }
  }

function getScreenInfo(setconsole=true)
{
// http://qaru.site/questions/83058/getting-the-physical-screen-dimensions-dpi-pixel-density-in-chrome-on-android
var aScreenInfo=[];    // массив данных об окне браузера

// Определяем ширину и высоту экрана в пикселях
// https://www.w3schools.com/js/js_window_screen.asp
var we=window.screen.width;   aScreenInfo.push(we);                      // 0
var he=window.screen.height;  aScreenInfo.push(he);                      // 1
// Определяем доступные ширину и высоту экрана посетителя в пикселях
// (ширина экрана посетителя минус интерфейс функции, такой как панель задач 
// Windows и высота экрана минус интерфейс функции, такие как панель задач 
var wea=window.screen.availWidth;   aScreenInfo.push(wea);               // 2
var hea=window.screen.availHeight;  aScreenInfo.push(hea);               // 3
// Определяем ширину и высоту окна браузера  (не включая панели инструментов ---и 
// полосы прокрутки---) в пикселях https://www.w3schools.com/js/js_window.asp
var wb = window.innerWidth||document.documentElement.clientWidth;
aScreenInfo.push(wb);                                                    // 4
var hb = window.innerHeight||document.documentElement.clientHeight;
aScreenInfo.push(hb);                                                    // 5
// Определяем ширину и высоту клиентской части сайта в окне браузера 
var wcl=document.body.clientWidth;  aScreenInfo.push(wcl);               // 6
var hcl=document.body.clientHeight; aScreenInfo.push(hcl);               // 7
// Определяем номинальные толщины вертикальной и горизонтально полос прокрутки 
var ScrollWidth = wb - wcl;  aScreenInfo.push(ScrollWidth);              // 8
var ScrollHeight = hb - hcl; aScreenInfo.push(ScrollHeight);             // 9
// Определяем соотношение пикселей устройства
var DevicePixelRatio=window.devicePixelRatio||1;                         // 10
aScreenInfo.push(DevicePixelRatio);
// Формируем текстовую строку для консоли
var str = 
[
   'Screen width:  '+we+'px',
   'Screen height: '+he+'px',
   'Screen available width: '+wea+'px',
   'Screen available height: '+hea+'px',
   'Browser width: '+wb+'px',
   'Browser height: '+hb+'px',
   'Client width: '+wcl+'px',   
   'Client height: '+hcl+'px',
   'ScrollWidth: '+ScrollWidth+'px',
   'ScrollHeight: '+ScrollHeight+'px',
   'Device Pixel Ratio: '+DevicePixelRatio
].join('\n');

if (setconsole) console.log(str);
return aScreenInfo;
}
// ****************************************************************************
// *          Установить ширину и спозиционировать div "игровой стол"         *
// *              в окне браузера на заданном текущем устройсте               *
// ****************************************************************************
function MakeScreenInfo(aScreenInfo)
{
   //elem.style.color = 'red';
   var elem = document.getElementById("ScreenWidth");
   elem.innerHTML = aScreenInfo[0];
   elem = document.getElementById("ScreenHeight");
   elem.innerHTML = aScreenInfo[1];
   elem = document.getElementById("availWidth");
   elem.innerHTML = aScreenInfo[2];
   elem = document.getElementById("availHeight");
   elem.innerHTML = aScreenInfo[3];
   elem = document.getElementById("BrowserWidth");
   elem.innerHTML = aScreenInfo[4];
   elem = document.getElementById("BrowserHeight");
   elem.innerHTML = aScreenInfo[5];
   elem = document.getElementById("ClientWidth");
   elem.innerHTML = aScreenInfo[6];
   elem = document.getElementById("ClientHeight");
   elem.innerHTML = aScreenInfo[7];
   elem = document.getElementById("ScrollWidth");
   elem.innerHTML = aScreenInfo[8];
   elem = document.getElementById("ScrollHeight");
   elem.innerHTML = aScreenInfo[9];
   elem = document.getElementById("DevicePixelRatio");
   elem.innerHTML = aScreenInfo[10];
}



function getTime(secs) {
	var sep = ':'; //separator character
	var hours,minutes,seconds,time,am_pm;
	var now = new Date();
	hours = now.getHours();
	if (hours < 12) {
		am_pm = 'am';
	} else {
		am_pm = 'pm';
	}
	hours = hours % 12;
	if (hours === 0) {
		hours = 12;
	} 
	time = hours;
	minutes = now.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	time += sep + minutes;
	if (secs) {
		seconds = now.getSeconds();
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		time += sep + seconds;
	} 
	return time + ' ' + am_pm;
}
// ************************************************************** Pifirf.js ***
