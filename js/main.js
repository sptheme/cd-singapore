( function($) {
	'use strict';

	var spCustom = {
		/**
		 * Main init function
		 *
		 */
		init : function() {
			this.config();
			this.bindEvents();
		},

		/**
		 * Cache Elements
		 *
		 */
		config : function() {

			this.config = {
				// Main
				$window                 : $( window ),
				$document               : $( document ),
				$windowWidth            : $( window ).width(),
				$windowHeight           : $( window ).height(),
				$windowTop              : $( window ).scrollTop(),
				$body                   : $( 'body' ),
				$viewportWidth          : '',
				$is_rtl                 : false,
			};

		},	

		bindEvents : function() {
			var self = this;

			// Run on doucment ready
			self.config.$document.on( 'ready', function() {

				// Background with backstretch
				$('body.home').backstretch("images/bacgkround-01.jpg");
				$('body.page-about').backstretch("images/bacgkround-03.jpg");
				$('body.page-conditions').backstretch("images/bacgkround-04.jpg");
				$('body.backstretch').backstretch("images/bacgkround-13.jpg");
				/*$('body.backstretch-slide').backstretch([
					"images/bacgkround-12.jpg",
					"images/bacgkround-07.jpg",
					"images/bacgkround-08.jpg",
					"images/bacgkround-02.jpg"
					], {duration: 3000, fade: 750});*/

				// Site navigation - Menu toggle
				$('.mobile-menu-toggle').sidr({
					side: 'right',
					onOpen   : function() {
						$('#page').on( 'click', function( event ) {
							$.sidr( 'close', 'sidr' );
							return false;
						} );
					}
				});
			} );
		}
	}

	spCustom.init();
	 
}) ( jQuery );	