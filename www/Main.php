<?php
// PHP7/HTML5, EDGE/CHROME                                     *** Main.php ***

// ****************************************************************************
// * пифи.рф                                          Игровой сайт для друзей *
// ****************************************************************************

//                                                   Автор:       Труфанов В.Е.
//                                                   Дата создания:  09.04.2019
// Copyright © 2019 tve                              Посл.изменение: 20.04.2020

function Markup()
{
?>
   <div id="lList">
      <div id="ListConrol">
         <button id='bCtrl'><i id='iCtrl' class="fa fa-cog fa-2x" aria-hidden="true"></i></button>
         <button id='bUndo'><i id='iUndo' class="fa fa-undo fa-2x" aria-hidden="true"></i></button>
      </div>
      <div id="ListInfo">
         <?php
            require_once "Pages/ListInfo.html";
         ?>
      </div>
      <div id="ListInfoCtrl">
         <?php
            require_once "Pages/ListInfoCtrl.html";
         ?>
      </div>
   </div>
      
   <div id="Main">
      <div id="Heady">
         <?php
            //require_once "Pages/Heady.html";
         ?>
      </div>

      <div id="Play">
         <div id="DriveLeft">
         </div>
         <div id="FieldPlay">
            <?php
               //require_once "Pages/Play.html";
            ?>
         </div>
         <div id="DriveRight">
         </div>
         <div id="DriveBottom">
            <button id='lBu'><i id='lAm'  class="fa fa-arrow-left fa-5x" aria-hidden="true"></i></button>
            <button id='tBu'><i id='tAm' class="fa fa-arrow-up fa-5x" aria-hidden="true"></i></button>
            <button id='rBu'><i id='rAm' class="fa fa-arrow-right fa-5x" aria-hidden="true"></i></button>
         </div>
      </div>

      <div id="Footy">
         <?php
            //require_once "Pages/Footy.html";
         ?>
      </div>
   </div>

   <div id="rList">
      <?php
         require_once "Pages/ListExt.html";
      ?>
   </div>
<?php
}

// Подключаем файлы библиотеки прикладных модулей:
$TPhpPrown=$SiteHost.'/TPhpPrown';
require_once $TPhpPrown."/TPhpPrown/CommonPrown.php";
require_once $TPhpPrown."/TPhpPrown/MakeCookie.php";
require_once $TPhpPrown."/TPhpPrown/MakeSession.php";
/*
require_once $TPhpPrown."/TPhpPrown/Findes.php";
require_once $TPhpPrown."/TPhpPrown/getTranslit.php";
require_once $TPhpPrown."/TPhpPrown/iniConstMem.php";
require_once $TPhpPrown."/TPhpPrown/MakeParm.php";
require_once $TPhpPrown."/TPhpPrown/ViewGlobal.php";
*/
// Подключаем задействованные классы
require_once $SiteHost."/TPhpTools/TPhpTools/TPageStarter/PageStarterClass.php";
// Подключаем рабочие модули сайта 
//require_once $SiteRoot."/Common.php";
//require_once $SiteRoot."/iniMenu.php";
// Подключаем управление новостями  
//require_once $SiteRoot."/Pages/News/MakeNews.php";   
//require_once $SiteRoot."/Pages/News/SimpleTape.php";   
//require_once $SiteRoot."/Pages/News/WithImgTape.php";   
// Выполняем запуск сессии и начальную инициализацию
$oMainStarter = new PageStarter('Main');
require_once $SiteRoot."/iniMem.php"; 

// Изменяем счетчик запросов сайта из браузера и, таким образом,       
// регистрируем новую загрузку страницы
$c_BrowEntry=prown\MakeCookie('BrowEntry',$c_BrowEntry+1,tInt);  
// Изменяем счетчик посещений текущим посетителем      
$c_PersEntry=prown\MakeCookie('PersEntry',$c_PersEntry+1,tInt);
// Изменяем счетчик посещений за сессию                 
$s_Counter=prown\MakeSession('Counter',$s_Counter+1,tInt);   
// Если после авторизации изменилось имя пользователя,
// то перенастраиваем счетчики и посетителя
if ($c_PersName<>$c_UserName)
{
   $c_PersEntry=prown\MakeCookie('PersEntry',1,tInt);
   $s_Counter=prown\MakeSession('Counter',1,tInt); 
   $c_PersName=prown\MakeCookie('PersName',$c_UserName,tStr);
}
//\prown\ViewGlobal(avgSESSION);
//\prown\ViewGlobal(avgGLOBALS);

// Подключаем выбранную игру
//if (prown\isComRequest(prown\getTranslit(CollStars),'game'))
//{
   //echo $SiteRoot.'/Pages/CollStars/indexCollStars.php'.'<br>';
   require $SiteRoot.'/Pages/CollStars/indexCollStars.php';
   //require $SiteRoot.'/Pages/CollStars/indexCollStarsFirst.php';
//}
//elseif (prown\isComRequest(prown\getTranslit(ThisWorld),'game'))
//{
   //require $SiteRoot.'/Pages/ThisWorld/indexThisWorld.php';
//}
//elseif (prown\isComRequest(prown\getTranslit(FightForLife),'game'))
//{
   //require $SiteRoot.'/Pages/FightForLife/indexFightForLife.php';
//}
//else
//{
//   require $SiteRoot.'/Pages/indexStart.php';
//}

// Выводим шапку HTML-страницы
echo '<!DOCTYPE html>';
echo '<html lang="ru">';
echo '<head>';
echo '<meta http-equiv="content-type" content="text/html; charset=utf-8"/>';
SeoTags();
echo '<link href="https://fonts.googleapis.com/css'.
   '?family=Anonymous+Pro:400,400i,700,700i&amp;subset=cyrillic" rel="stylesheet">';
// Подключаем jquery/jquery-ui
echo '<link rel="stylesheet" type="text/css" '. 
     'href="https://code.jquery.com/ui/1.12.1/themes/ui-lightness/jquery-ui.css">';
echo '<script '.
     'src="https://code.jquery.com/jquery-3.3.1.min.js" '.
     'integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" '.
     'crossorigin="anonymous">'.
     '</script>';
echo '<script '.
     'src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" '.
     'integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" '.
     'crossorigin="anonymous">'.
     '</script>';
// Подключаем JS-библиотеки
echo '<script src="/Js/Pifirf.js"></script>';
echo '<script src="/Js/phaser242.min.js"></script>';

//echo '<link href="/TJsPrown/TJsPrown.css" rel="stylesheet" type="text/css">'; 
//echo '<script src="/TJsPrown/TJsPrown.js"></script>';
// Обеспечиваем двойной скролл для кода;
//echo '<script src="/JS/jquery.doubleScroll.js"></script>';
// Переопределяем стили
if ($SiteDevice==Mobile) MobiStyle();
else DescStyle();
// Подключаем скрипты по завершению загрузки страницы
echo '<script>$(document).ready(function() {';
   // Переопределяем разметку
   if ($SiteDevice==Mobile)
   {
      MobiMarkup();
      ?>
      SiteDevice=MakeSiteDevice("<?php echo $SiteDevice; ?>");
      doOnOrientationChange();
      
      /*
      aScreenInfo=getScreenInfo(false);  
      MakeScreenInfo(aScreenInfo);
      $('#Main').css('display','none');
      $('#ListConrol').css('display','none');
      $('#ListInfo').css('display','none');
      $('#DriveBottom').css('display','none');
      $('#lList').css('display','block');
      $('#ListInfoCtrl').css('display','block');
      $('#ListInfoCtrl').css('font-size','4rem');
      */
      <?php
   }
   else 
   {
      DescMarkup();
      ?>
      SiteDevice=MakeSiteDevice("<?php echo $SiteDevice; ?>",true);
      <?php
   }
echo '});</script>';
echo '</head>';
echo '<body>';
Markup();
Content();

echo '</body>';
echo '</html>';


// *** <!-- --> ************************************************** Main.php ***
