/*
 * jQuery fixedHeaderLite plugin 
 * Fix a table's header, so it is always visible while scrolling
 * Lite version. Optimized for heavy tables (20-50 cols, 100-10000 rows).
 * Support of <input> and <select> elements in <thead>
 * Use non-recursive clone element function $.clonex()
 * Developed for using in DataTables instead of http://datatables.net/extensions/fixedheader/
*/

/*
 * Прикрепляет заголовок таблицы при скролинге.
 * Легкая версия. Для массивных таблиц (20-50 колонок, 100-10000 строк).
 * Поддерживает интерактивные элементы (<input>, <select>) в составе thead
 * Использует нерекурсивное клонирование элемента $.clonex()
*/


TODO:
Live demo


Usage:
In html:
<head>
	<script type="text/javascript" language="javascript" src="js/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" language="javascript" src="js/jquery.clonex.js"></script>
	<script type="text/javascript" language="javascript" src="js/jquery.fixedHeaderLite.js"></script> 
</head>
<body>
	<table id="mainTable">
		<thead>
			...
		</thead>
		<tbody>
			...
		</tbody>
	<table>
</body>


In js:

$(document).ready(function() {
	$(document).one('scroll', function() {
		$('table#mainTable').fixedHeaderLite({"top": 0, "wrap": 't_container'});
	});
});

