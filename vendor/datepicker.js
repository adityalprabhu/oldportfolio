(function( $ ) {

    "use strict";

    $.widget("metro.datepicker", {

        version: "3.0.0",

        options: {
            format: "yyyy.mm.dd",
            preset: false,
            minDate: false,
            maxDate: false,
            effect: 'fade',
            position: 'bottom',
            locale: window.METRO_CURRENT_LOCALE,
            weekStart: window.METRO_CALENDAR_WEEK_START,
            otherDays: false,
            exclude: false,
            stored: false,
            buttons: false,
            buttonToday: true,
            buttonClear: true,
            condensedGrid: false,
            selected: function(d, d0){}
        },

        _calendar: undefined,

        _create: function(){
            var that = this,
                element = this.element, o = this.options,
                input = element.children("input"),
                button = element.children("button");

            //console.log(o);

            $.each(element.data(), function(key, value){
                //console.log(typeof key, key, value);

                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createCalendar();

            input.attr('readonly', true);
            button.attr('type', 'button');

            button.on('click', function(e){
                e.stopPropagation();
                if (that._calendar.css('display') === 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            element.on('click', function(e){
                e.stopPropagation();
                if (that._calendar.css('display') === 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            $('html').on('click', function(){
                $(".calendar-dropdown").hide();
            });

            element.data('datepicker', this);

        },

        _createCalendar: function(){
            var _calendar, that = this, element = this.element, o = this.options;

            _calendar = $("<div/>").css({
                position: 'absolute',
                display: 'none',
                'max-width': 220,
                'z-index': 1000

            }).addClass('calendar calendar-dropdown').appendTo(element);

            //if (o.date != undefined) {
            //_calendar.data('date', o.date);
            //}


            _calendar.calendar({
                multiSelect: false,
                format: o.format,
                buttons: false,
                buttonToday: false,
                buttonClear: false,
                locale: o.locale,
                otherDays: o.otherDays,
                weekStart: o.weekStart,
                condensedGrid: o.condensedGrid,
                exclude: o.exclude,
                stored: o.stored,
                date: o.preset ? o.preset : new Date(),
                minDate: o.minDate,
                maxDate: o.maxDate,
                dayClick: function(d, d0){
                    //console.log(d, d0);
                    _calendar.calendar('setDate', d0);
                    that.element.children("input[type=text]").val(d);
                    that.element.children("input[type=text]").trigger('change', d0);
                    that.element.children("input[type=text]").blur();
                    that.options.selected(d, d0);
                    that._hide();
                }
            });

            if (o.preset !== false) {
                //console.log(o.preset);
                _calendar.calendar('setDate', o.preset);
                element.find("input, .datepicker-output").val(_calendar.calendar('getDate'));
            }

            // Set position
            switch (this.options.position) {
                case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
                default: _calendar.css({top: '100%', left: 0});
            }

            this._calendar = _calendar;
        },

        _show: function(){
            if (this.options.effect === 'slide') {
                $(".calendar-dropdown").slideUp('fast');
                this._calendar.slideDown('fast');
            } else if (this.options.effect === 'fade') {
                $(".calendar-dropdown").fadeOut('fast');
                this._calendar.fadeIn('fast');
            } else {
                $(".calendar-dropdown").hide();
                this._calendar.show();
            }
        },
        _hide: function(){
            if (this.options.effect === 'slide') {
                this._calendar.slideUp('fast');
            } else if (this.options.effect === 'fade') {
                this._calendar.fadeOut('fast');
            } else {
                this._calendar.hide();
            }
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );

