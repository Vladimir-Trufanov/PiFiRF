<?php ?>
<!doctype html> 
<html lang="ru">
<?php /*
http://phaser.io/tutorials/making-your-first-phaser-2-game/index

Порядок функций Phaser, зарезервированные имена и специальные применения
https://www.html5gamedevs.com/topic/1372-phaser-function-order-reserved-names-and-special-uses/

Форумы Фазера
https://www.html5gamedevs.com/

Примеры Фазера
http://phaser.io/examples
*/ ?>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/> 
<title>Собираем звёзды</title>
<link rel="stylesheet" type="text/css" href="Style.css">
<?php /*
<script src="//cdn.jsdelivr.net/phaser/2.2.2/phaser.min.js"></script>
<script src="js/phaser.min.js"></script>
<script src="js/phaser242.min.js"></script>
*/ ?>
<script src="js/phaser242.min.js"></script>
<style type="text/css">
   body
   {
      margin: 0;
   }
</style>
</head>
<body>

<div id='onedi'>
</div'>

<div id='twodi'>
<button>A</button>
<button>B</button>
<button>C</button>
</div'>


<script type="text/javascript">

//var game = 
new Phaser.Game(800, 600, Phaser.AUTO, 'onedi', { preload: preload, create: create, update: update }

function preload() 
{

}
var player;
var platforms;
var cursors;
var stars;

var score = 0;
var scoreText;

function create() 
{
    
}

function update() 
{
}


<script>
  document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON")
      console.log("Clicked", event.target.textContent);
  });
</script>

</body>
</html>
