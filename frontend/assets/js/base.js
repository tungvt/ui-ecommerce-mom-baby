(function ($) {
    $(function () {
        $(".search-control .form-control").focus(function () {
            if (!$(".search-store-block, .search-product-block").hasClass("active")) {
                $(".advance-search").addClass("active");
            }
        });
        $(".search-store").click(function () {
            $(".advance-search").removeClass("active");
            $(".search-store-block").addClass("active");
        });
        $(".search-product").click(function () {
            $(".advance-search").removeClass("active");
            $(".search-product-block").addClass("active");
        });

        $(document).mouseup(function (e) {
            var container = $(".search-control");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".advance-search, .search-store-block, .search-product-block").removeClass("active");
            }
        });

        var starDisable = $(".rating-group.disable-hover");
        if (starDisable.length) {
            $(".rating-group.disable-hover .rating-input").attr("disabled", "disabled");
        }

        var owl1 = $(".owl-carousel.promote");
        if (owl1.length) {
            owl1.owlCarousel({
                margin: 12,
                autoplay: true,
                autoplayTimeout: 5000,
                loop: true,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                    },
                },
            });
        }

        var owl2 = $(".owl-carousel.banner-store");
        if (owl2.length) {
            owl2.owlCarousel({
                items: 1,
                animateOut: "fadeOut",
                loop: true,
                margin: 10,
            });
        }

        var owl3 = $(".owl-carousel.banner-home");
        if (owl3.length) {
            owl3.owlCarousel({
                animateOut: "fadeOut",
                autoplay: true,
                autoplayTimeout: 2800,
                loop: true,
                dots: false,
                nav: true,
                navText: [
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5 stroke='currentColor' stroke='#e32429' width='24' height='24'><path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5'></path></svg>",
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5 stroke='currentColor' stroke='#e32429' width='24' height='24'><path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5'></path></svg>",
                ],
                margin: 10,
                responsive: {
                    0: {
                        items: 1,
                    },
                    1000: {
                        items: 3,
                    },
                },
            });
        }

        var owl4 = $(".owl-carousel.supplier");
        if (owl4.length) {
            owl4.owlCarousel({
                margin: 12,
                autoplay: true,
                autoplayTimeout: 2800,
                loop: true,
                nav: true,
                navText: [
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5 stroke='currentColor' stroke='#e32429' width='24' height='24'><path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5'></path></svg>",
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5 stroke='currentColor' stroke='#e32429' width='24' height='24'><path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5'></path></svg>",
                ],
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 6,
                    },
                },
            });
        }

        var thumbSlider = $(".thumbs .owl-carousel.two");
        if (thumbSlider.length) {
            thumbSlider.owlCarousel({
                margin: 12,
                nav: true,
                navText: [
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5 stroke='currentColor' stroke='#0fa968' width='24' height='24'><path stroke-linecap='round' stroke-linejoin='round' d='m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'></path></svg>",
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5 stroke='currentColor' stroke='#0fa968' width='24' height='24'><path stroke-linecap='round' stroke-linejoin='round' d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'></path></svg>",
                ],
                dots: false,
                responsive: {
                    640: {
                        items: 3,
                    },
                    768: {
                        items: 5,
                    },
                    1024: {
                        items: 3,
                    },
                    1200: {
                        items: 6,
                    },
                },
            });
        }

        var sliderPrev = $(".thumbs .owl-prev");
        var sliderNext = $(".thumbs .owl-next");
        if (sliderPrev.length) {
            sliderPrev.click(function () {
                $(".owl-carousel.gal-image").trigger("prev.owl.carousel");
            });
        }
        if (sliderNext.length) {
            sliderNext.click(function () {
                $(".owl-carousel.gal-image").trigger("next.owl.carousel");
            });
        }

        var customSlb2 = $(".custom-slb-2");
        if (customSlb2.length) {
            $(".custom-slb-2").each(function (index) {
                var t = $(this);
                t.click(function (e) {
                    t.children(".options").toggleClass("shown");
                    t.toggleClass("open");
                });

                var opt = $(this).children(".options").children(".option");
                opt.click(function () {
                    t.children("#selected").html($(this).html());
                    opt.removeClass("same-active");
                    $(this).addClass("same-active");
                });
            });
        }

        var chatbox_toggle = $(".chatbox-top");
        if (chatbox_toggle.length) {
            $(chatbox_toggle).click(function () {
                $(this).closest(".chatbox-holder").toggleClass("chatbox-on");
            });
        }

        var x, i, j, selElmnt, a, b, c;
        /* Look for any elements with the class "custom-select": */
        x = document.getElementsByClassName("custom-slb");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            /* For each element, create a new DIV that will act as the selected item: */
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /* For each element, create a new DIV that will contain the option list: */
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 0; j < selElmnt.length; j++) {
                /* For each option in the original select element,
				create a new DIV that will act as an option item: */
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /* When an item is clicked, update the original select box,
					and the selected item: */
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /* When the select box is clicked, close any other select boxes,
				and open/close the current select box: */
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }

        function closeAllSelect(elmnt) {
            /* A function that will close all select boxes in the document,
			except the current select box: */
            var x,
                y,
                i,
                arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }

        /* If the user clicks anywhere outside the select box,
		then close all select boxes: */
        document.addEventListener("click", closeAllSelect);

        // Toggle on button click
        $(".toggle-cart-js").on("click", function (event) {
            event.preventDefault();
            $("body").toggleClass("offcanvas-active");
        });
        $(".toggle-cart-close-js").on("click", function (event) {
            event.preventDefault();
            $("body").toggleClass("offcanvas-active");
        });

        // Close on mouseup and touchend
        $(document).on("mouseup touchend", function (event) {
            var offCanvas = $(".offcanvas-sidebar");
            if (!offCanvas.is(event.target) && offCanvas.has(event.target).length === 0) {
                $("body").removeClass("offcanvas-active");
            }
        });
    });
})(jQuery);
