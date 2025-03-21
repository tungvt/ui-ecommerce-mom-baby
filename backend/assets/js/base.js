(function($){
	$(function(){

		$('input[name=optionsSelectArr]').on('click', function() {
			if(this.id === "pickup") {
				$('.pickup-addr').show('slow');
			} else {
				$('.pickup-addr').hide('slow');
			}
		});

		$('.modal-content select').css('width', '100%');

		$('.slb').each(function(index) {
			var val = '';
			if ( $(this)[0].selectedOptions[0].attributes['selected'] != undefined) {
				$(this).select2({
					placeholder: 'Select an option',
					allowClear: true,
				}).val($(this).children("option:selected").val());
			} else {
				$(this).select2({
					placeholder: 'Select an option',
					allowClear: true,
				});
				$(this).val(val).trigger('change');
			}
		});

		$('.edit-ava').on('click', function() {
			$('.upload-input').click();
		});

		$('#txtDob').datepicker({
			autoclose: true
		});

		$('.form_datetime').datepicker({
			autoclose:true,
			orientation: "bottom left",
		});

		$('#start_date').datetimepicker({
			sideBySide: true
		});
		$('#end_date').datetimepicker({
			useCurrent: false,
			sideBySide: true
		});
		$("#start_date").on("dp.change", function (e) {
			$('#end_date').data("DateTimePicker").minDate(e.date);
		});
		$("#end_date").on("dp.change", function (e) {
			$('#start_date').data("DateTimePicker").maxDate(e.date);
		});

		$('.item-cat').each(function(index) {
			$(this).on('click', function() {
				$breadcrumbHTML = '';
				if ( $(this).attr('data-parent') == 'parent' ) {
					$parentID = $(this).attr('data-id');
					$breadcrumbHTML += '<li><label style="margin-right:5px;">Đã chọn</label></li><li><span class="badge bg-blue margin"> '+ $(this)[0].textContent +' </span></li>';
					$('.item-cat').parent().removeClass('active');
					$(this).parent().addClass('active');
					
					$('.breadcrumb-cat ul li').remove();
					$('.breadcrumb-cat ul').append($breadcrumbHTML);

					$('.list-cat-child1').removeClass('active');
					$('.list-cat-child2').removeClass('active');
					$('.list-cat-child1').each(function(index) {
						if($(this).attr('data-parent-id') == $parentID) {
							$('.list-cat-child1').removeClass('active');
							$(this).addClass('active');
						}
					});
				}

				if ( $(this).attr('data-parent') == 'child1' ) {

					$('.item-cat.child1').parent().removeClass('active');
					$(this).parent().addClass('active');

					$('.breadcrumb-cat ul li.child1').remove();
					$('.breadcrumb-cat ul').append('<li class="child1"><i class="fa fa-angle-double-right"></i><span class="badge bg-blue margin"> '+ $(this)[0].textContent +' </span></li>');

					$parentID = $(this).attr('data-id');
					$('.list-cat-child2').removeClass('active');
					$('.list-cat-child2').each(function(index) {
						if($(this).attr('data-parent-id') == $parentID) {
							$('.list-cat-child2').removeClass('active');
							$(this).addClass('active');
						}
					});
				}
			});
		});

		var DataKey = 'lte.pushmenu';

		var Default = {
			collapseScreenSize   : 767,
			expandOnHover        : false,
			expandTransitionDelay: 200
		};

		var Selector = {
			collapsed     : '.sidebar-collapse',
			open          : '.sidebar-open',
			mainSidebar   : '.main-sidebar',
			contentWrapper: '.content-wrapper',
			searchInput   : '.sidebar-form .form-control',
			button        : '[data-toggle="push-menu"]',
			mini          : '.sidebar-mini',
			expanded      : '.sidebar-expanded-on-hover',
			layoutFixed   : '.fixed'
		};

		var ClassName = {
			collapsed    : 'sidebar-collapse',
			open         : 'sidebar-open',
			mini         : 'sidebar-mini',
			expanded     : 'sidebar-expanded-on-hover',
			expandFeature: 'sidebar-mini-expand-feature',
			layoutFixed  : 'fixed'
		};

		var Event = {
			expanded : 'expanded.pushMenu',
			collapsed: 'collapsed.pushMenu'
		};

		// PushMenu Class Definition
		// =========================
		var PushMenu = function (options) {
			this.options = options;
			this.init();
		};

		PushMenu.prototype.init = function () {
			if ( this.options.expandOnHover || ($('body').is(Selector.mini + Selector.layoutFixed)) ) {
				this.expandOnHover();
				$('body').addClass(ClassName.expandFeature);
			}

			$(Selector.contentWrapper).click(function () {
				// Enable hide menu when clicking on the content-wrapper on small screens
				if ( $(window).width() <= this.options.collapseScreenSize && $('body').hasClass(ClassName.open) ) {
					this.close();
				}
			}.bind(this));

			// __Fix for android devices
			$(Selector.searchInput).click(function (e) {
				e.stopPropagation();
			});
		};

		PushMenu.prototype.toggle = function () {
			var windowWidth = $(window).width();
			var isOpen      = !$('body').hasClass(ClassName.collapsed);

			if (windowWidth <= this.options.collapseScreenSize) {
				isOpen = $('body').hasClass(ClassName.open);
			}

			if (!isOpen) {
				this.open();
			} else {
				this.close();
			}
		};

		PushMenu.prototype.open = function () {
			var windowWidth = $(window).width();

			if (windowWidth > this.options.collapseScreenSize) {
				$('body').removeClass(ClassName.collapsed).trigger($.Event(Event.expanded));
			}
			else {
				$('body').addClass(ClassName.open).trigger($.Event(Event.expanded));
			}
		};

		PushMenu.prototype.close = function () {
			var windowWidth = $(window).width();
			if (windowWidth > this.options.collapseScreenSize) {
				$('body').addClass(ClassName.collapsed)
				.trigger($.Event(Event.collapsed));
			} else {
				$('body').removeClass(ClassName.open + ' ' + ClassName.collapsed)
				.trigger($.Event(Event.collapsed));
			}
		};

		PushMenu.prototype.expandOnHover = function () {
			$(Selector.mainSidebar).hover(function () {
				if ($('body').is(Selector.mini + Selector.collapsed) && $(window).width() > this.options.collapseScreenSize) {
					this.expand();
				}
			}.bind(this), function () {
				if ($('body').is(Selector.expanded)) {
					this.collapse();
				}
			}.bind(this));
		};

		PushMenu.prototype.expand = function () {
			setTimeout(function () {
				$('body').removeClass(ClassName.collapsed).addClass(ClassName.expanded);
			}, this.options.expandTransitionDelay);
		};

		PushMenu.prototype.collapse = function () {
			setTimeout(function () {
				$('body').removeClass(ClassName.expanded).addClass(ClassName.collapsed);
			}, this.options.expandTransitionDelay);
		};

		// PushMenu Plugin Definition
		// ==========================
		function Plugin(option) {
			return this.each(function () {
				var $this = $(this);
				var data  = $this.data(DataKey);

				if (!data) {
					var options = $.extend({}, Default, $this.data(), typeof option == 'object' && option);
					$this.data(DataKey, (data = new PushMenu(options)));
				}

				if (option === 'toggle') data.toggle();
			});
		}

		var old = $.fn.pushMenu;

		$.fn.pushMenu             = Plugin;
		$.fn.pushMenu.Constructor = PushMenu;

		// No Conflict Mode
		// ================
		$.fn.pushMenu.noConflict = function () {
			$.fn.pushMenu = old;
			return this;
		};

		// Data API
		// ========
		$(document).on('click', Selector.button, function (e) {
			e.preventDefault();
			Plugin.call($(this), 'toggle');
		});
		$(window).on('load', function () {
			Plugin.call($(Selector.button));
		});

	});
})(jQuery);