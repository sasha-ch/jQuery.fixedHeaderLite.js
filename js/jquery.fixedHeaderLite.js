/*
 * jQuery fixedHeaderLite plugin 
 * Fix a table's header, so it is always visible while scrolling
 * Lite version. Optimized for heavy tables (20-50 cols, 100-10000 rows).
 * Support of <input> and <select> elements in <thead>
 * Use non-recursive clone element function $.clonex()
 * Developed for using in DataTables instead of http://datatables.net/extensions/fixedheader/
*/

/*
 * ����������� ��������� ������� ��� ���������.
 * ������ ������. ��� ��������� ������ (20-50 �������, 100-10000 �����).
 * ������������ ������������� �������� (<input>, <select>) � ������� thead
 * ���������� ������������� ������������ �������� $.clonex()
*/

;(function($) {
	/* ��������� thead � �������� � ������ � �������� ���� ������
	 * conf:{
	 *		top: �� ����� ������ ������ �����, 
	 *		wrap: ����� ��� div-� ������� �������
	 * }
	 */
	$.fn.fixedHeaderLite = function(conf) {
		return this.each(function() {
		
			var $this = $(this),
				$t_fixed;
			var wtop = conf.top || 0;
			
			function init() {
				$this.wrap('<div class="' + conf.wrap + '" />');
				
				$t_fixed = $this.clonex(false, true, false);
				
				var thead = $this.find("thead").first().clone(true);
				$t_fixed.append(thead);
				$t_fixed.addClass("tfixed").css("top", wtop).insertAfter($this);

				resizeFixed();
			}
			
			function resizeFixed() {
				$t_fixed.find("th,td").each(function(index) {
					var el = $this.find("th,td").eq(index);
					var iw = el.width();
					$(el).css({'width': iw, 'min-width': iw});
					$(this).css({'width': iw, 'min-width': iw});	
					
				});
			}
			
			function scrollFixed() {
				var offset = $(this).scrollTop() + wtop,
					toffset = $this.offset(),
					tableOffsetTop = toffset.top,
					tableOffsetLeft = toffset.left,
					tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height(),
					tablePositionLeft = tableOffsetLeft - $(document).scrollLeft();

				$t_fixed.css("left", tablePositionLeft);			//�������������� ������

				if((offset < tableOffsetTop || offset > tableOffsetBottom) && $t_fixed.is(":visible")){		//������������
					$this.find('thead').replaceWith($t_fixed.find('thead').first().clone(true));				//�������� ��������� ��������� �������� ���������
					$t_fixed.hide();
				}else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden")){
					$t_fixed.find('thead').replaceWith($this.find('thead').first().clone(true));
					$t_fixed.show();
				}
			}
			
			$(window).resize(resizeFixed);
			$(window).scroll(scrollFixed);
			init();
			
		});
	};
	
})(jQuery);