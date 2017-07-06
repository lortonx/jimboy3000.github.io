// Input 0
/*
 jQuery UI 1.8.18

 Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 http://docs.jquery.com/UI
 jQuery UI Widget 1.8.18

 Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 http://docs.jquery.com/UI/Widget
 jQuery UI Mouse 1.8.18

 Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 http://docs.jquery.com/UI/Mouse

 Depends:
 jquery.ui.widget.js
*/
(function($, undefined) {
  $.ui = $.ui || {};
  if ($.ui.version) {
    return;
  }
  $.extend($.ui, {version:"1.8.18", keyCode:{ALT:18, BACKSPACE:8, CAPS_LOCK:20, COMMA:188, COMMAND:91, COMMAND_LEFT:91, COMMAND_RIGHT:93, CONTROL:17, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, INSERT:45, LEFT:37, MENU:93, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SHIFT:16, SPACE:32, TAB:9, UP:38, WINDOWS:91}});
  $.fn.extend({propAttr:$.fn.prop || $.fn.attr, _focus:$.fn.focus, focus:function(delay, fn) {
    return typeof delay === "number" ? this.each(function() {
      var elem = this;
      setTimeout(function() {
        $(elem).focus();
        if (fn) {
          fn.call(elem);
        }
      }, delay);
    }) : this._focus.apply(this, arguments);
  }, scrollParent:function() {
    var scrollParent;
    if ($.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position"))) {
      scrollParent = this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test($.curCSS(this, "position", 1)) && /(auto|scroll)/.test($.curCSS(this, "overflow", 1) + $.curCSS(this, "overflow-y", 1) + $.curCSS(this, "overflow-x", 1));
      }).eq(0);
    } else {
      scrollParent = this.parents().filter(function() {
        return /(auto|scroll)/.test($.curCSS(this, "overflow", 1) + $.curCSS(this, "overflow-y", 1) + $.curCSS(this, "overflow-x", 1));
      }).eq(0);
    }
    return /fixed/.test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
  }, zIndex:function(zIndex) {
    if (zIndex !== undefined) {
      return this.css("zIndex", zIndex);
    }
    if (this.length) {
      var elem = $(this[0]), position, value;
      while (elem.length && elem[0] !== document) {
        position = elem.css("position");
        if (position === "absolute" || position === "relative" || position === "fixed") {
          value = parseInt(elem.css("zIndex"), 10);
          if (!isNaN(value) && value !== 0) {
            return value;
          }
        }
        elem = elem.parent();
      }
    }
    return 0;
  }, disableSelection:function() {
    return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(event) {
      event.preventDefault();
    });
  }, enableSelection:function() {
    return this.unbind(".ui-disableSelection");
  }});
  $.each(["Width", "Height"], function(i, name) {
    var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], type = name.toLowerCase(), orig = {innerWidth:$.fn.innerWidth, innerHeight:$.fn.innerHeight, outerWidth:$.fn.outerWidth, outerHeight:$.fn.outerHeight};
    function reduce(elem, size, border, margin) {
      $.each(side, function() {
        size -= parseFloat($.curCSS(elem, "padding" + this, true)) || 0;
        if (border) {
          size -= parseFloat($.curCSS(elem, "border" + this + "Width", true)) || 0;
        }
        if (margin) {
          size -= parseFloat($.curCSS(elem, "margin" + this, true)) || 0;
        }
      });
      return size;
    }
    $.fn["inner" + name] = function(size) {
      if (size === undefined) {
        return orig["inner" + name].call(this);
      }
      return this.each(function() {
        $(this).css(type, reduce(this, size) + "px");
      });
    };
    $.fn["outer" + name] = function(size, margin) {
      if (typeof size !== "number") {
        return orig["outer" + name].call(this, size);
      }
      return this.each(function() {
        $(this).css(type, reduce(this, size, true, margin) + "px");
      });
    };
  });
  function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    if ("area" === nodeName) {
      var map = element.parentNode, mapName = map.name, img;
      if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
        return false;
      }
      img = $("img[usemap=#" + mapName + "]")[0];
      return !!img && visible(img);
    }
    return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" == nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
  }
  function visible(element) {
    return !$(element).parents().andSelf().filter(function() {
      return $.curCSS(this, "visibility") === "hidden" || $.expr.filters.hidden(this);
    }).length;
  }
  $.extend($.expr[":"], {data:function(elem, i, match) {
    return !!$.data(elem, match[3]);
  }, focusable:function(element) {
    return focusable(element, !isNaN($.attr(element, "tabindex")));
  }, tabbable:function(element) {
    var tabIndex = $.attr(element, "tabindex"), isTabIndexNaN = isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
  }});
  $(function() {
    var body = document.body, div = body.appendChild(div = document.createElement("div"));
    div.offsetHeight;
    $.extend(div.style, {minHeight:"100px", height:"auto", padding:0, borderWidth:0});
    $.support.minHeight = div.offsetHeight === 100;
    $.support.selectstart = "onselectstart" in div;
    body.removeChild(div).style.display = "none";
  });
  $.extend($.ui, {plugin:{add:function(module, option, set) {
    var proto = $.ui[module].prototype;
    for (var i in set) {
      proto.plugins[i] = proto.plugins[i] || [];
      proto.plugins[i].push([option, set[i]]);
    }
  }, call:function(instance, name, args) {
    var set = instance.plugins[name];
    if (!set || !instance.element[0].parentNode) {
      return;
    }
    for (var i = 0; i < set.length; i++) {
      if (instance.options[set[i][0]]) {
        set[i][1].apply(instance.element, args);
      }
    }
  }}, contains:function(a, b) {
    return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b);
  }, hasScroll:function(el, a) {
    if ($(el).css("overflow") === "hidden") {
      return false;
    }
    var scroll = a && a === "left" ? "scrollLeft" : "scrollTop", has = false;
    if (el[scroll] > 0) {
      return true;
    }
    el[scroll] = 1;
    has = el[scroll] > 0;
    el[scroll] = 0;
    return has;
  }, isOverAxis:function(x, reference, size) {
    return x > reference && x < reference + size;
  }, isOver:function(y, x, top, left, height, width) {
    return $.ui.isOverAxis(y, top, height) && $.ui.isOverAxis(x, left, width);
  }});
})(jQuery);
(function($, undefined) {
  if ($.cleanData) {
    var _cleanData = $.cleanData;
    $.cleanData = function(elems) {
      for (var i = 0, elem; (elem = elems[i]) != null; i++) {
        try {
          $(elem).triggerHandler("remove");
        } catch (e) {
        }
      }
      _cleanData(elems);
    };
  } else {
    var _remove = $.fn.remove;
    $.fn.remove = function(selector, keepData) {
      return this.each(function() {
        if (!keepData) {
          if (!selector || $.filter(selector, [this]).length) {
            $("*", this).add([this]).each(function() {
              try {
                $(this).triggerHandler("remove");
              } catch (e) {
              }
            });
          }
        }
        return _remove.call($(this), selector, keepData);
      });
    };
  }
  $.widget = function(name, base, prototype) {
    var namespace = name.split(".")[0], fullName;
    name = name.split(".")[1];
    fullName = namespace + "-" + name;
    if (!prototype) {
      prototype = base;
      base = $.Widget;
    }
    $.expr[":"][fullName] = function(elem) {
      return !!$.data(elem, name);
    };
    $[namespace] = $[namespace] || {};
    $[namespace][name] = function(options, element) {
      if (arguments.length) {
        this._createWidget(options, element);
      }
    };
    var basePrototype = new base;
    basePrototype.options = $.extend(true, {}, basePrototype.options);
    $[namespace][name].prototype = $.extend(true, basePrototype, {namespace:namespace, widgetName:name, widgetEventPrefix:$[namespace][name].prototype.widgetEventPrefix || name, widgetBaseClass:fullName}, prototype);
    $.widget.bridge(name, $[namespace][name]);
  };
  $.widget.bridge = function(name, object) {
    $.fn[name] = function(options) {
      var isMethodCall = typeof options === "string", args = Array.prototype.slice.call(arguments, 1), returnValue = this;
      options = !isMethodCall && args.length ? $.extend.apply(null, [true, options].concat(args)) : options;
      if (isMethodCall && options.charAt(0) === "_") {
        return returnValue;
      }
      if (isMethodCall) {
        this.each(function() {
          var instance = $.data(this, name), methodValue = instance && $.isFunction(instance[options]) ? instance[options].apply(instance, args) : instance;
          if (methodValue !== instance && methodValue !== undefined) {
            returnValue = methodValue;
            return false;
          }
        });
      } else {
        this.each(function() {
          var instance = $.data(this, name);
          if (instance) {
            instance.option(options || {})._init();
          } else {
            $.data(this, name, new object(options, this));
          }
        });
      }
      return returnValue;
    };
  };
  $.Widget = function(options, element) {
    if (arguments.length) {
      this._createWidget(options, element);
    }
  };
  $.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", options:{disabled:false}, _createWidget:function(options, element) {
    $.data(element, this.widgetName, this);
    this.element = $(element);
    this.options = $.extend(true, {}, this.options, this._getCreateOptions(), options);
    var self = this;
    this.element.bind("remove." + this.widgetName, function() {
      self.destroy();
    });
    this._create();
    this._trigger("create");
    this._init();
  }, _getCreateOptions:function() {
    return $.metadata && $.metadata.get(this.element[0])[this.widgetName];
  }, _create:function() {
  }, _init:function() {
  }, destroy:function() {
    this.element.unbind("." + this.widgetName).removeData(this.widgetName);
    this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled");
  }, widget:function() {
    return this.element;
  }, option:function(key, value) {
    var options = key;
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }
    if (typeof key === "string") {
      if (value === undefined) {
        return this.options[key];
      }
      options = {};
      options[key] = value;
    }
    this._setOptions(options);
    return this;
  }, _setOptions:function(options) {
    var self = this;
    $.each(options, function(key, value) {
      self._setOption(key, value);
    });
    return this;
  }, _setOption:function(key, value) {
    this.options[key] = value;
    if (key === "disabled") {
      this.widget()[value ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", value);
    }
    return this;
  }, enable:function() {
    return this._setOption("disabled", false);
  }, disable:function() {
    return this._setOption("disabled", true);
  }, _trigger:function(type, event, data) {
    var prop, orig, callback = this.options[type];
    data = data || {};
    event = $.Event(event);
    event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
    event.target = this.element[0];
    orig = event.originalEvent;
    if (orig) {
      for (prop in orig) {
        if (!(prop in event)) {
          event[prop] = orig[prop];
        }
      }
    }
    this.element.trigger(event, data);
    return !($.isFunction(callback) && callback.call(this.element[0], event, data) === false || event.isDefaultPrevented());
  }};
})(jQuery);
(function($, undefined) {
  var mouseHandled = false;
  $(document).mouseup(function(e) {
    mouseHandled = false;
  });
  $.widget("ui.mouse", {options:{cancel:":input,option", distance:1, delay:0}, _mouseInit:function() {
    var self = this;
    this.element.bind("mousedown." + this.widgetName, function(event) {
      return self._mouseDown(event);
    }).bind("click." + this.widgetName, function(event) {
      if (true === $.data(event.target, self.widgetName + ".preventClickEvent")) {
        $.removeData(event.target, self.widgetName + ".preventClickEvent");
        event.stopImmediatePropagation();
        return false;
      }
    });
    this.started = false;
  }, _mouseDestroy:function() {
    this.element.unbind("." + this.widgetName);
  }, _mouseDown:function(event) {
    if (mouseHandled) {
      return;
    }
    this._mouseStarted && this._mouseUp(event);
    this._mouseDownEvent = event;
    var self = this, btnIsLeft = event.which == 1, elIsCancel = typeof this.options.cancel == "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;
    if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
      return true;
    }
    this.mouseDelayMet = !this.options.delay;
    if (!this.mouseDelayMet) {
      this._mouseDelayTimer = setTimeout(function() {
        self.mouseDelayMet = true;
      }, this.options.delay);
    }
    if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
      this._mouseStarted = this._mouseStart(event) !== false;
      if (!this._mouseStarted) {
        event.preventDefault();
        return true;
      }
    }
    if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
      $.removeData(event.target, this.widgetName + ".preventClickEvent");
    }
    this._mouseMoveDelegate = function(event) {
      return self._mouseMove(event);
    };
    this._mouseUpDelegate = function(event) {
      return self._mouseUp(event);
    };
    $(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
    event.preventDefault();
    mouseHandled = true;
    return true;
  }, _mouseMove:function(event) {
    if ($.browser.msie && !(document.documentMode >= 9) && !event.button) {
      return this._mouseUp(event);
    }
    if (this._mouseStarted) {
      this._mouseDrag(event);
      return event.preventDefault();
    }
    if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
      this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
      this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
    }
    return !this._mouseStarted;
  }, _mouseUp:function(event) {
    $(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    if (this._mouseStarted) {
      this._mouseStarted = false;
      if (event.target == this._mouseDownEvent.target) {
        $.data(event.target, this.widgetName + ".preventClickEvent", true);
      }
      this._mouseStop(event);
    }
    return false;
  }, _mouseDistanceMet:function(event) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
  }, _mouseDelayMet:function(event) {
    return this.mouseDelayMet;
  }, _mouseStart:function(event) {
  }, _mouseDrag:function(event) {
  }, _mouseStop:function(event) {
  }, _mouseCapture:function(event) {
    return true;
  }});
})(jQuery);
(function($, undefined) {
  $.widget("ui.draggable", $.ui.mouse, {widgetEventPrefix:"drag", options:{addClasses:true, appendTo:"parent", axis:false, connectToSortable:false, containment:false, cursor:"auto", cursorAt:false, grid:false, handle:false, helper:"original", iframeFix:false, opacity:false, refreshPositions:false, revert:false, revertDuration:500, scope:"default", scroll:true, scrollSensitivity:20, scrollSpeed:20, snap:false, snapMode:"both", snapTolerance:20, stack:false, zIndex:false}, _create:function() {
    if (this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position"))) {
      this.element[0].style.position = "relative";
    }
    this.options.addClasses && this.element.addClass("ui-draggable");
    this.options.disabled && this.element.addClass("ui-draggable-disabled");
    this._mouseInit();
  }, destroy:function() {
    if (!this.element.data("draggable")) {
      return;
    }
    this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable" + " ui-draggable-dragging" + " ui-draggable-disabled");
    this._mouseDestroy();
    return this;
  }, _mouseCapture:function(event) {
    var o = this.options;
    if (this.helper || o.disabled || $(event.target).is(".ui-resizable-handle")) {
      return false;
    }
    this.handle = this._getHandle(event);
    if (!this.handle) {
      return false;
    }
    if (o.iframeFix) {
      $(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
        $('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth + "px", height:this.offsetHeight + "px", position:"absolute", opacity:"0.001", zIndex:1000}).css($(this).offset()).appendTo("body");
      });
    }
    return true;
  }, _mouseStart:function(event) {
    var o = this.options;
    this.helper = this._createHelper(event);
    this._cacheHelperProportions();
    if ($.ui.ddmanager) {
      $.ui.ddmanager.current = this;
    }
    this._cacheMargins();
    this.cssPosition = this.helper.css("position");
    this.scrollParent = this.helper.scrollParent();
    this.offset = this.positionAbs = this.element.offset();
    this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left};
    $.extend(this.offset, {click:{left:event.pageX - this.offset.left, top:event.pageY - this.offset.top}, parent:this._getParentOffset(), relative:this._getRelativeOffset()});
    this.originalPosition = this.position = this._generatePosition(event);
    this.originalPageX = event.pageX;
    this.originalPageY = event.pageY;
    o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
    if (o.containment) {
      this._setContainment();
    }
    if (this._trigger("start", event) === false) {
      this._clear();
      return false;
    }
    this._cacheHelperProportions();
    if ($.ui.ddmanager && !o.dropBehaviour) {
      $.ui.ddmanager.prepareOffsets(this, event);
    }
    this.helper.addClass("ui-draggable-dragging");
    this._mouseDrag(event, true);
    if ($.ui.ddmanager) {
      $.ui.ddmanager.dragStart(this, event);
    }
    return true;
  }, _mouseDrag:function(event, noPropagation) {
    this.position = this._generatePosition(event);
    this.positionAbs = this._convertPositionTo("absolute");
    if (!noPropagation) {
      var ui = this._uiHash();
      if (this._trigger("drag", event, ui) === false) {
        this._mouseUp({});
        return false;
      }
      this.position = ui.position;
    }
    if (!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px";
    }
    if (!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px";
    }
    if ($.ui.ddmanager) {
      $.ui.ddmanager.drag(this, event);
    }
    return false;
  }, _mouseStop:function(event) {
    var dropped = false;
    if ($.ui.ddmanager && !this.options.dropBehaviour) {
      dropped = $.ui.ddmanager.drop(this, event);
    }
    if (this.dropped) {
      dropped = this.dropped;
      this.dropped = false;
    }
    if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") {
      return false;
    }
    if (this.options.revert == "invalid" && !dropped || this.options.revert == "valid" && dropped || this.options.revert === true || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
      var self = this;
      $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        if (self._trigger("stop", event) !== false) {
          self._clear();
        }
      });
    } else {
      if (this._trigger("stop", event) !== false) {
        this._clear();
      }
    }
    return false;
  }, _mouseUp:function(event) {
    if (this.options.iframeFix === true) {
      $("div.ui-draggable-iframeFix").each(function() {
        this.parentNode.removeChild(this);
      });
    }
    if ($.ui.ddmanager) {
      $.ui.ddmanager.dragStop(this, event);
    }
    return $.ui.mouse.prototype._mouseUp.call(this, event);
  }, cancel:function() {
    if (this.helper.is(".ui-draggable-dragging")) {
      this._mouseUp({});
    } else {
      this._clear();
    }
    return this;
  }, _getHandle:function(event) {
    var handle = !this.options.handle || !$(this.options.handle, this.element).length ? true : false;
    $(this.options.handle, this.element).find("*").andSelf().each(function() {
      if (this == event.target) {
        handle = true;
      }
    });
    return handle;
  }, _createHelper:function(event) {
    var o = this.options;
    var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : o.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
    if (!helper.parents("body").length) {
      helper.appendTo(o.appendTo == "parent" ? this.element[0].parentNode : o.appendTo);
    }
    if (helper[0] != this.element[0] && !/(fixed|absolute)/.test(helper.css("position"))) {
      helper.css("position", "absolute");
    }
    return helper;
  }, _adjustOffsetFromHelper:function(obj) {
    if (typeof obj == "string") {
      obj = obj.split(" ");
    }
    if ($.isArray(obj)) {
      obj = {left:+obj[0], top:+obj[1] || 0};
    }
    if ("left" in obj) {
      this.offset.click.left = obj.left + this.margins.left;
    }
    if ("right" in obj) {
      this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
    }
    if ("top" in obj) {
      this.offset.click.top = obj.top + this.margins.top;
    }
    if ("bottom" in obj) {
      this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
    }
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var po = this.offsetParent.offset();
    if (this.cssPosition == "absolute" && this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
      po.left += this.scrollParent.scrollLeft();
      po.top += this.scrollParent.scrollTop();
    }
    if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && $.browser.msie) {
      po = {top:0, left:0};
    }
    return {top:po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
  }, _getRelativeOffset:function() {
    if (this.cssPosition == "relative") {
      var p = this.element.position();
      return {top:p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
    } else {
      return {top:0, left:0};
    }
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.element.css("marginLeft"), 10) || 0, top:parseInt(this.element.css("marginTop"), 10) || 0, right:parseInt(this.element.css("marginRight"), 10) || 0, bottom:parseInt(this.element.css("marginBottom"), 10) || 0};
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()};
  }, _setContainment:function() {
    var o = this.options;
    if (o.containment == "parent") {
      o.containment = this.helper[0].parentNode;
    }
    if (o.containment == "document" || o.containment == "window") {
      this.containment = [o.containment == "document" ? 0 : $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, o.containment == "document" ? 0 : $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (o.containment == "document" ? 0 : $(window).scrollLeft()) + $(o.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (o.containment == "document" ? 0 : $(window).scrollTop()) + ($(o.containment == "document" ? 
      document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
    }
    if (!/^(document|window|parent)$/.test(o.containment) && o.containment.constructor != Array) {
      var c = $(o.containment);
      var ce = c[0];
      if (!ce) {
        return;
      }
      var co = c.offset();
      var over = $(ce).css("overflow") != "hidden";
      this.containment = [(parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0), (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0), (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : 
      ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
      this.relative_container = c;
    } else {
      if (o.containment.constructor == Array) {
        this.containment = o.containment;
      }
    }
  }, _convertPositionTo:function(d, pos) {
    if (!pos) {
      pos = this.position;
    }
    var mod = d == "absolute" ? 1 : -1;
    var o = this.options, scroll = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
    return {top:pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod), left:pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : 
    scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod)};
  }, _generatePosition:function(event) {
    var o = this.options, scroll = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
    var pageX = event.pageX;
    var pageY = event.pageY;
    if (this.originalPosition) {
      var containment;
      if (this.containment) {
        if (this.relative_container) {
          var co = this.relative_container.offset();
          containment = [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top];
        } else {
          containment = this.containment;
        }
        if (event.pageX - this.offset.click.left < containment[0]) {
          pageX = containment[0] + this.offset.click.left;
        }
        if (event.pageY - this.offset.click.top < containment[1]) {
          pageY = containment[1] + this.offset.click.top;
        }
        if (event.pageX - this.offset.click.left > containment[2]) {
          pageX = containment[2] + this.offset.click.left;
        }
        if (event.pageY - this.offset.click.top > containment[3]) {
          pageY = containment[3] + this.offset.click.top;
        }
      }
      if (o.grid) {
        var top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
        pageY = containment ? !(top - this.offset.click.top < containment[1] || top - this.offset.click.top > containment[3]) ? top : !(top - this.offset.click.top < containment[1]) ? top - o.grid[1] : top + o.grid[1] : top;
        var left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
        pageX = containment ? !(left - this.offset.click.left < containment[0] || left - this.offset.click.left > containment[2]) ? left : !(left - this.offset.click.left < containment[0]) ? left - o.grid[0] : left + o.grid[0] : left;
      }
    }
    return {top:pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()), left:pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ($.browser.safari && $.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : 
    scrollIsRootNode ? 0 : scroll.scrollLeft())};
  }, _clear:function() {
    this.helper.removeClass("ui-draggable-dragging");
    if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
      this.helper.remove();
    }
    this.helper = null;
    this.cancelHelperRemoval = false;
  }, _trigger:function(type, event, ui) {
    ui = ui || this._uiHash();
    $.ui.plugin.call(this, type, [event, ui]);
    if (type == "drag") {
      this.positionAbs = this._convertPositionTo("absolute");
    }
    return $.Widget.prototype._trigger.call(this, type, event, ui);
  }, plugins:{}, _uiHash:function(event) {
    return {helper:this.helper, position:this.position, originalPosition:this.originalPosition, offset:this.positionAbs};
  }});
  $.extend($.ui.draggable, {version:"1.8.18"});
  $.ui.plugin.add("draggable", "connectToSortable", {start:function(event, ui) {
    var inst = $(this).data("draggable"), o = inst.options, uiSortable = $.extend({}, ui, {item:inst.element});
    inst.sortables = [];
    $(o.connectToSortable).each(function() {
      var sortable = $.data(this, "sortable");
      if (sortable && !sortable.options.disabled) {
        inst.sortables.push({instance:sortable, shouldRevert:sortable.options.revert});
        sortable.refreshPositions();
        sortable._trigger("activate", event, uiSortable);
      }
    });
  }, stop:function(event, ui) {
    var inst = $(this).data("draggable"), uiSortable = $.extend({}, ui, {item:inst.element});
    $.each(inst.sortables, function() {
      if (this.instance.isOver) {
        this.instance.isOver = 0;
        inst.cancelHelperRemoval = true;
        this.instance.cancelHelperRemoval = false;
        if (this.shouldRevert) {
          this.instance.options.revert = true;
        }
        this.instance._mouseStop(event);
        this.instance.options.helper = this.instance.options._helper;
        if (inst.options.helper == "original") {
          this.instance.currentItem.css({top:"auto", left:"auto"});
        }
      } else {
        this.instance.cancelHelperRemoval = false;
        this.instance._trigger("deactivate", event, uiSortable);
      }
    });
  }, drag:function(event, ui) {
    var inst = $(this).data("draggable"), self = this;
    var checkPos = function(o) {
      var dyClick = this.offset.click.top, dxClick = this.offset.click.left;
      var helperTop = this.positionAbs.top, helperLeft = this.positionAbs.left;
      var itemHeight = o.height, itemWidth = o.width;
      var itemTop = o.top, itemLeft = o.left;
      return $.ui.isOver(helperTop + dyClick, helperLeft + dxClick, itemTop, itemLeft, itemHeight, itemWidth);
    };
    $.each(inst.sortables, function(i) {
      this.instance.positionAbs = inst.positionAbs;
      this.instance.helperProportions = inst.helperProportions;
      this.instance.offset.click = inst.offset.click;
      if (this.instance._intersectsWith(this.instance.containerCache)) {
        if (!this.instance.isOver) {
          this.instance.isOver = 1;
          this.instance.currentItem = $(self).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
          this.instance.options._helper = this.instance.options.helper;
          this.instance.options.helper = function() {
            return ui.helper[0];
          };
          event.target = this.instance.currentItem[0];
          this.instance._mouseCapture(event, true);
          this.instance._mouseStart(event, true, true);
          this.instance.offset.click.top = inst.offset.click.top;
          this.instance.offset.click.left = inst.offset.click.left;
          this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
          this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;
          inst._trigger("toSortable", event);
          inst.dropped = this.instance.element;
          inst.currentItem = inst.element;
          this.instance.fromOutside = inst;
        }
        if (this.instance.currentItem) {
          this.instance._mouseDrag(event);
        }
      } else {
        if (this.instance.isOver) {
          this.instance.isOver = 0;
          this.instance.cancelHelperRemoval = true;
          this.instance.options.revert = false;
          this.instance._trigger("out", event, this.instance._uiHash(this.instance));
          this.instance._mouseStop(event, true);
          this.instance.options.helper = this.instance.options._helper;
          this.instance.currentItem.remove();
          if (this.instance.placeholder) {
            this.instance.placeholder.remove();
          }
          inst._trigger("fromSortable", event);
          inst.dropped = false;
        }
      }
    });
  }});
  $.ui.plugin.add("draggable", "cursor", {start:function(event, ui) {
    var t = $("body"), o = $(this).data("draggable").options;
    if (t.css("cursor")) {
      o._cursor = t.css("cursor");
    }
    t.css("cursor", o.cursor);
  }, stop:function(event, ui) {
    var o = $(this).data("draggable").options;
    if (o._cursor) {
      $("body").css("cursor", o._cursor);
    }
  }});
  $.ui.plugin.add("draggable", "opacity", {start:function(event, ui) {
    var t = $(ui.helper), o = $(this).data("draggable").options;
    if (t.css("opacity")) {
      o._opacity = t.css("opacity");
    }
    t.css("opacity", o.opacity);
  }, stop:function(event, ui) {
    var o = $(this).data("draggable").options;
    if (o._opacity) {
      $(ui.helper).css("opacity", o._opacity);
    }
  }});
  $.ui.plugin.add("draggable", "scroll", {start:function(event, ui) {
    var i = $(this).data("draggable");
    if (i.scrollParent[0] != document && i.scrollParent[0].tagName != "HTML") {
      i.overflowOffset = i.scrollParent.offset();
    }
  }, drag:function(event, ui) {
    var i = $(this).data("draggable"), o = i.options, scrolled = false;
    if (i.scrollParent[0] != document && i.scrollParent[0].tagName != "HTML") {
      if (!o.axis || o.axis != "x") {
        if (i.overflowOffset.top + i.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
          i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
        } else {
          if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
            i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
          }
        }
      }
      if (!o.axis || o.axis != "y") {
        if (i.overflowOffset.left + i.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
          i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
        } else {
          if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
            i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
          }
        }
      }
    } else {
      if (!o.axis || o.axis != "x") {
        if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
          scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
        } else {
          if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
            scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
          }
        }
      }
      if (!o.axis || o.axis != "y") {
        if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
          scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
        } else {
          if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
            scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
          }
        }
      }
    }
    if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
      $.ui.ddmanager.prepareOffsets(i, event);
    }
  }});
  $.ui.plugin.add("draggable", "snap", {start:function(event, ui) {
    var i = $(this).data("draggable"), o = i.options;
    i.snapElements = [];
    $(o.snap.constructor != String ? o.snap.items || ":data(draggable)" : o.snap).each(function() {
      var $t = $(this);
      var $o = $t.offset();
      if (this != i.element[0]) {
        i.snapElements.push({item:this, width:$t.outerWidth(), height:$t.outerHeight(), top:$o.top, left:$o.left});
      }
    });
  }, drag:function(event, ui) {
    var inst = $(this).data("draggable"), o = inst.options;
    var d = o.snapTolerance;
    var x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
    for (var i = inst.snapElements.length - 1; i >= 0; i--) {
      var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width, t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;
      if (!(l - d < x1 && x1 < r + d && t - d < y1 && y1 < b + d || l - d < x1 && x1 < r + d && t - d < y2 && y2 < b + d || l - d < x2 && x2 < r + d && t - d < y1 && y1 < b + d || l - d < x2 && x2 < r + d && t - d < y2 && y2 < b + d)) {
        if (inst.snapElements[i].snapping) {
          inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {snapItem:inst.snapElements[i].item}));
        }
        inst.snapElements[i].snapping = false;
        continue;
      }
      if (o.snapMode != "inner") {
        var ts = Math.abs(t - y2) <= d;
        var bs = Math.abs(b - y1) <= d;
        var ls = Math.abs(l - x2) <= d;
        var rs = Math.abs(r - x1) <= d;
        if (ts) {
          ui.position.top = inst._convertPositionTo("relative", {top:t - inst.helperProportions.height, left:0}).top - inst.margins.top;
        }
        if (bs) {
          ui.position.top = inst._convertPositionTo("relative", {top:b, left:0}).top - inst.margins.top;
        }
        if (ls) {
          ui.position.left = inst._convertPositionTo("relative", {top:0, left:l - inst.helperProportions.width}).left - inst.margins.left;
        }
        if (rs) {
          ui.position.left = inst._convertPositionTo("relative", {top:0, left:r}).left - inst.margins.left;
        }
      }
      var first = ts || bs || ls || rs;
      if (o.snapMode != "outer") {
        var ts = Math.abs(t - y1) <= d;
        var bs = Math.abs(b - y2) <= d;
        var ls = Math.abs(l - x1) <= d;
        var rs = Math.abs(r - x2) <= d;
        if (ts) {
          ui.position.top = inst._convertPositionTo("relative", {top:t, left:0}).top - inst.margins.top;
        }
        if (bs) {
          ui.position.top = inst._convertPositionTo("relative", {top:b - inst.helperProportions.height, left:0}).top - inst.margins.top;
        }
        if (ls) {
          ui.position.left = inst._convertPositionTo("relative", {top:0, left:l}).left - inst.margins.left;
        }
        if (rs) {
          ui.position.left = inst._convertPositionTo("relative", {top:0, left:r - inst.helperProportions.width}).left - inst.margins.left;
        }
      }
      if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
        inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {snapItem:inst.snapElements[i].item}));
      }
      inst.snapElements[i].snapping = ts || bs || ls || rs || first;
    }
  }});
  $.ui.plugin.add("draggable", "stack", {start:function(event, ui) {
    var o = $(this).data("draggable").options;
    var group = $.makeArray($(o.stack)).sort(function(a, b) {
      return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
    });
    if (!group.length) {
      return;
    }
    var min = parseInt(group[0].style.zIndex) || 0;
    $(group).each(function(i) {
      this.style.zIndex = min + i;
    });
    this[0].style.zIndex = min + group.length;
  }});
  $.ui.plugin.add("draggable", "zIndex", {start:function(event, ui) {
    var t = $(ui.helper), o = $(this).data("draggable").options;
    if (t.css("zIndex")) {
      o._zIndex = t.css("zIndex");
    }
    t.css("zIndex", o.zIndex);
  }, stop:function(event, ui) {
    var o = $(this).data("draggable").options;
    if (o._zIndex) {
      $(ui.helper).css("zIndex", o._zIndex);
    }
  }});
})(jQuery);
(function($, undefined) {
  $.widget("ui.droppable", {widgetEventPrefix:"drop", options:{accept:"*", activeClass:false, addClasses:true, greedy:false, hoverClass:false, scope:"default", tolerance:"intersect"}, _create:function() {
    var o = this.options, accept = o.accept;
    this.isover = 0;
    this.isout = 1;
    this.accept = $.isFunction(accept) ? accept : function(d) {
      return d.is(accept);
    };
    this.proportions = {width:this.element[0].offsetWidth, height:this.element[0].offsetHeight};
    $.ui.ddmanager.droppables[o.scope] = $.ui.ddmanager.droppables[o.scope] || [];
    $.ui.ddmanager.droppables[o.scope].push(this);
    o.addClasses && this.element.addClass("ui-droppable");
  }, destroy:function() {
    var drop = $.ui.ddmanager.droppables[this.options.scope];
    for (var i = 0; i < drop.length; i++) {
      if (drop[i] == this) {
        drop.splice(i, 1);
      }
    }
    this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
    return this;
  }, _setOption:function(key, value) {
    if (key == "accept") {
      this.accept = $.isFunction(value) ? value : function(d) {
        return d.is(value);
      };
    }
    $.Widget.prototype._setOption.apply(this, arguments);
  }, _activate:function(event) {
    var draggable = $.ui.ddmanager.current;
    if (this.options.activeClass) {
      this.element.addClass(this.options.activeClass);
    }
    draggable && this._trigger("activate", event, this.ui(draggable));
  }, _deactivate:function(event) {
    var draggable = $.ui.ddmanager.current;
    if (this.options.activeClass) {
      this.element.removeClass(this.options.activeClass);
    }
    draggable && this._trigger("deactivate", event, this.ui(draggable));
  }, _over:function(event) {
    var draggable = $.ui.ddmanager.current;
    if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) {
      return;
    }
    if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
      if (this.options.hoverClass) {
        this.element.addClass(this.options.hoverClass);
      }
      this._trigger("over", event, this.ui(draggable));
    }
  }, _out:function(event) {
    var draggable = $.ui.ddmanager.current;
    if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) {
      return;
    }
    if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
      if (this.options.hoverClass) {
        this.element.removeClass(this.options.hoverClass);
      }
      this._trigger("out", event, this.ui(draggable));
    }
  }, _drop:function(event, custom) {
    var draggable = custom || $.ui.ddmanager.current;
    if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) {
      return false;
    }
    var childrenIntersection = false;
    this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
      var inst = $.data(this, "droppable");
      if (inst.options.greedy && !inst.options.disabled && inst.options.scope == draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && $.ui.intersect(draggable, $.extend(inst, {offset:inst.element.offset()}), inst.options.tolerance)) {
        childrenIntersection = true;
        return false;
      }
    });
    if (childrenIntersection) {
      return false;
    }
    if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
      if (this.options.activeClass) {
        this.element.removeClass(this.options.activeClass);
      }
      if (this.options.hoverClass) {
        this.element.removeClass(this.options.hoverClass);
      }
      this._trigger("drop", event, this.ui(draggable));
      return this.element;
    }
    return false;
  }, ui:function(c) {
    return {draggable:c.currentItem || c.element, helper:c.helper, position:c.position, offset:c.positionAbs};
  }});
  $.extend($.ui.droppable, {version:"1.8.18"});
  $.ui.intersect = function(draggable, droppable, toleranceMode) {
    if (!droppable.offset) {
      return false;
    }
    var x1 = (draggable.positionAbs || draggable.position.absolute).left, x2 = x1 + draggable.helperProportions.width, y1 = (draggable.positionAbs || draggable.position.absolute).top, y2 = y1 + draggable.helperProportions.height;
    var l = droppable.offset.left, r = l + droppable.proportions.width, t = droppable.offset.top, b = t + droppable.proportions.height;
    switch(toleranceMode) {
      case "fit":
        return l <= x1 && x2 <= r && t <= y1 && y2 <= b;
        break;
      case "intersect":
        return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;
        break;
      case "pointer":
        var draggableLeft = (draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left, draggableTop = (draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top, isOver = $.ui.isOver(draggableTop, draggableLeft, t, l, droppable.proportions.height, droppable.proportions.width);
        return isOver;
        break;
      case "touch":
        return (y1 >= t && y1 <= b || y2 >= t && y2 <= b || y1 < t && y2 > b) && (x1 >= l && x1 <= r || x2 >= l && x2 <= r || x1 < l && x2 > r);
        break;
      default:
        return false;
        break;
    }
  };
  $.ui.ddmanager = {current:null, droppables:{"default":[]}, prepareOffsets:function(t, event) {
    var m = $.ui.ddmanager.droppables[t.options.scope] || [];
    var type = event ? event.type : null;
    var list = (t.currentItem || t.element).find(":data(droppable)").andSelf();
    droppablesLoop: for (var i = 0; i < m.length; i++) {
      if (m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element)) {
        continue;
      }
      for (var j = 0; j < list.length; j++) {
        if (list[j] == m[i].element[0]) {
          m[i].proportions.height = 0;
          continue droppablesLoop;
        }
      }
      m[i].visible = m[i].element.css("display") != "none";
      if (!m[i].visible) {
        continue;
      }
      if (type == "mousedown") {
        m[i]._activate.call(m[i], event);
      }
      m[i].offset = m[i].element.offset();
      m[i].proportions = {width:m[i].element[0].offsetWidth, height:m[i].element[0].offsetHeight};
    }
  }, drop:function(draggable, event) {
    var dropped = false;
    $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
      if (!this.options) {
        return;
      }
      if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance)) {
        dropped = this._drop.call(this, event) || dropped;
      }
      if (!this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
        this.isout = 1;
        this.isover = 0;
        this._deactivate.call(this, event);
      }
    });
    return dropped;
  }, dragStart:function(draggable, event) {
    draggable.element.parents(":not(body,html)").bind("scroll.droppable", function() {
      if (!draggable.options.refreshPositions) {
        $.ui.ddmanager.prepareOffsets(draggable, event);
      }
    });
  }, drag:function(draggable, event) {
    if (draggable.options.refreshPositions) {
      $.ui.ddmanager.prepareOffsets(draggable, event);
    }
    $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
      if (this.options.disabled || this.greedyChild || !this.visible) {
        return;
      }
      var intersects = $.ui.intersect(draggable, this, this.options.tolerance);
      var c = !intersects && this.isover == 1 ? "isout" : intersects && this.isover == 0 ? "isover" : null;
      if (!c) {
        return;
      }
      var parentInstance;
      if (this.options.greedy) {
        var parent = this.element.parents(":data(droppable):eq(0)");
        if (parent.length) {
          parentInstance = $.data(parent[0], "droppable");
          parentInstance.greedyChild = c == "isover" ? 1 : 0;
        }
      }
      if (parentInstance && c == "isover") {
        parentInstance["isover"] = 0;
        parentInstance["isout"] = 1;
        parentInstance._out.call(parentInstance, event);
      }
      this[c] = 1;
      this[c == "isout" ? "isover" : "isout"] = 0;
      this[c == "isover" ? "_over" : "_out"].call(this, event);
      if (parentInstance && c == "isout") {
        parentInstance["isout"] = 0;
        parentInstance["isover"] = 1;
        parentInstance._over.call(parentInstance, event);
      }
    });
  }, dragStop:function(draggable, event) {
    draggable.element.parents(":not(body,html)").unbind("scroll.droppable");
    if (!draggable.options.refreshPositions) {
      $.ui.ddmanager.prepareOffsets(draggable, event);
    }
  }};
})(jQuery);
(function($, undefined) {
  $.widget("ui.resizable", $.ui.mouse, {widgetEventPrefix:"resize", options:{alsoResize:false, animate:false, animateDuration:"slow", animateEasing:"swing", aspectRatio:false, autoHide:false, containment:false, ghost:false, grid:false, handles:"e,s,se", helper:false, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, zIndex:1000}, _create:function() {
    var self = this, o = this.options;
    this.element.addClass("ui-resizable");
    $.extend(this, {_aspectRatio:!!o.aspectRatio, aspectRatio:o.aspectRatio, originalElement:this.element, _proportionallyResizeElements:[], _helper:o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null});
    if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
      this.element.wrap($('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"), width:this.element.outerWidth(), height:this.element.outerHeight(), top:this.element.css("top"), left:this.element.css("left")}));
      this.element = this.element.parent().data("resizable", this.element.data("resizable"));
      this.elementIsWrapper = true;
      this.element.css({marginLeft:this.originalElement.css("marginLeft"), marginTop:this.originalElement.css("marginTop"), marginRight:this.originalElement.css("marginRight"), marginBottom:this.originalElement.css("marginBottom")});
      this.originalElement.css({marginLeft:0, marginTop:0, marginRight:0, marginBottom:0});
      this.originalResizeStyle = this.originalElement.css("resize");
      this.originalElement.css("resize", "none");
      this._proportionallyResizeElements.push(this.originalElement.css({position:"static", zoom:1, display:"block"}));
      this.originalElement.css({margin:this.originalElement.css("margin")});
      this._proportionallyResize();
    }
    this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : {n:".ui-resizable-n", e:".ui-resizable-e", s:".ui-resizable-s", w:".ui-resizable-w", se:".ui-resizable-se", sw:".ui-resizable-sw", ne:".ui-resizable-ne", nw:".ui-resizable-nw"});
    if (this.handles.constructor == String) {
      if (this.handles == "all") {
        this.handles = "n,e,s,w,se,sw,ne,nw";
      }
      var n = this.handles.split(",");
      this.handles = {};
      for (var i = 0; i < n.length; i++) {
        var handle = $.trim(n[i]), hname = "ui-resizable-" + handle;
        var axis = $('<div class="ui-resizable-handle ' + hname + '"></div>');
        if (/sw|se|ne|nw/.test(handle)) {
          axis.css({zIndex:++o.zIndex});
        }
        if ("se" == handle) {
          axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
        }
        this.handles[handle] = ".ui-resizable-" + handle;
        this.element.append(axis);
      }
    }
    this._renderAxis = function(target) {
      target = target || this.element;
      for (var i in this.handles) {
        if (this.handles[i].constructor == String) {
          this.handles[i] = $(this.handles[i], this.element).show();
        }
        if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
          var axis = $(this.handles[i], this.element), padWrapper = 0;
          padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();
          var padPos = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
          target.css(padPos, padWrapper);
          this._proportionallyResize();
        }
        if (!$(this.handles[i]).length) {
          continue;
        }
      }
    };
    this._renderAxis(this.element);
    this._handles = $(".ui-resizable-handle", this.element).disableSelection();
    this._handles.mouseover(function() {
      if (!self.resizing) {
        if (this.className) {
          var axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
        }
        self.axis = axis && axis[1] ? axis[1] : "se";
      }
    });
    if (o.autoHide) {
      this._handles.hide();
      $(this.element).addClass("ui-resizable-autohide").hover(function() {
        if (o.disabled) {
          return;
        }
        $(this).removeClass("ui-resizable-autohide");
        self._handles.show();
      }, function() {
        if (o.disabled) {
          return;
        }
        if (!self.resizing) {
          $(this).addClass("ui-resizable-autohide");
          self._handles.hide();
        }
      });
    }
    this._mouseInit();
  }, destroy:function() {
    this._mouseDestroy();
    var _destroy = function(exp) {
      $(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
    };
    if (this.elementIsWrapper) {
      _destroy(this.element);
      var wrapper = this.element;
      wrapper.after(this.originalElement.css({position:wrapper.css("position"), width:wrapper.outerWidth(), height:wrapper.outerHeight(), top:wrapper.css("top"), left:wrapper.css("left")})).remove();
    }
    this.originalElement.css("resize", this.originalResizeStyle);
    _destroy(this.originalElement);
    return this;
  }, _mouseCapture:function(event) {
    var handle = false;
    for (var i in this.handles) {
      if ($(this.handles[i])[0] == event.target) {
        handle = true;
      }
    }
    return !this.options.disabled && handle;
  }, _mouseStart:function(event) {
    var o = this.options, iniPos = this.element.position(), el = this.element;
    this.resizing = true;
    this.documentScroll = {top:$(document).scrollTop(), left:$(document).scrollLeft()};
    if (el.is(".ui-draggable") || /absolute/.test(el.css("position"))) {
      el.css({position:"absolute", top:iniPos.top, left:iniPos.left});
    }
    this._renderProxy();
    var curleft = num(this.helper.css("left")), curtop = num(this.helper.css("top"));
    if (o.containment) {
      curleft += $(o.containment).scrollLeft() || 0;
      curtop += $(o.containment).scrollTop() || 0;
    }
    this.offset = this.helper.offset();
    this.position = {left:curleft, top:curtop};
    this.size = this._helper ? {width:el.outerWidth(), height:el.outerHeight()} : {width:el.width(), height:el.height()};
    this.originalSize = this._helper ? {width:el.outerWidth(), height:el.outerHeight()} : {width:el.width(), height:el.height()};
    this.originalPosition = {left:curleft, top:curtop};
    this.sizeDiff = {width:el.outerWidth() - el.width(), height:el.outerHeight() - el.height()};
    this.originalMousePosition = {left:event.pageX, top:event.pageY};
    this.aspectRatio = typeof o.aspectRatio == "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
    var cursor = $(".ui-resizable-" + this.axis).css("cursor");
    $("body").css("cursor", cursor == "auto" ? this.axis + "-resize" : cursor);
    el.addClass("ui-resizable-resizing");
    this._propagate("start", event);
    return true;
  }, _mouseDrag:function(event) {
    var el = this.helper, o = this.options, props = {}, self = this, smp = this.originalMousePosition, a = this.axis;
    var dx = event.pageX - smp.left || 0, dy = event.pageY - smp.top || 0;
    var trigger = this._change[a];
    if (!trigger) {
      return false;
    }
    var data = trigger.apply(this, [event, dx, dy]), ie6 = $.browser.msie && $.browser.version < 7, csdif = this.sizeDiff;
    this._updateVirtualBoundaries(event.shiftKey);
    if (this._aspectRatio || event.shiftKey) {
      data = this._updateRatio(data, event);
    }
    data = this._respectSize(data, event);
    this._propagate("resize", event);
    el.css({top:this.position.top + "px", left:this.position.left + "px", width:this.size.width + "px", height:this.size.height + "px"});
    if (!this._helper && this._proportionallyResizeElements.length) {
      this._proportionallyResize();
    }
    this._updateCache(data);
    this._trigger("resize", event, this.ui());
    return false;
  }, _mouseStop:function(event) {
    this.resizing = false;
    var o = this.options, self = this;
    if (this._helper) {
      var pr = this._proportionallyResizeElements, ista = pr.length && /textarea/i.test(pr[0].nodeName), soffseth = ista && $.ui.hasScroll(pr[0], "left") ? 0 : self.sizeDiff.height, soffsetw = ista ? 0 : self.sizeDiff.width;
      var s = {width:self.helper.width() - soffsetw, height:self.helper.height() - soffseth}, left = parseInt(self.element.css("left"), 10) + (self.position.left - self.originalPosition.left) || null, top = parseInt(self.element.css("top"), 10) + (self.position.top - self.originalPosition.top) || null;
      if (!o.animate) {
        this.element.css($.extend(s, {top:top, left:left}));
      }
      self.helper.height(self.size.height);
      self.helper.width(self.size.width);
      if (this._helper && !o.animate) {
        this._proportionallyResize();
      }
    }
    $("body").css("cursor", "auto");
    this.element.removeClass("ui-resizable-resizing");
    this._propagate("stop", event);
    if (this._helper) {
      this.helper.remove();
    }
    return false;
  }, _updateVirtualBoundaries:function(forceAspectRatio) {
    var o = this.options, pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b;
    b = {minWidth:isNumber(o.minWidth) ? o.minWidth : 0, maxWidth:isNumber(o.maxWidth) ? o.maxWidth : Infinity, minHeight:isNumber(o.minHeight) ? o.minHeight : 0, maxHeight:isNumber(o.maxHeight) ? o.maxHeight : Infinity};
    if (this._aspectRatio || forceAspectRatio) {
      pMinWidth = b.minHeight * this.aspectRatio;
      pMinHeight = b.minWidth / this.aspectRatio;
      pMaxWidth = b.maxHeight * this.aspectRatio;
      pMaxHeight = b.maxWidth / this.aspectRatio;
      if (pMinWidth > b.minWidth) {
        b.minWidth = pMinWidth;
      }
      if (pMinHeight > b.minHeight) {
        b.minHeight = pMinHeight;
      }
      if (pMaxWidth < b.maxWidth) {
        b.maxWidth = pMaxWidth;
      }
      if (pMaxHeight < b.maxHeight) {
        b.maxHeight = pMaxHeight;
      }
    }
    this._vBoundaries = b;
  }, _updateCache:function(data) {
    var o = this.options;
    this.offset = this.helper.offset();
    if (isNumber(data.left)) {
      this.position.left = data.left;
    }
    if (isNumber(data.top)) {
      this.position.top = data.top;
    }
    if (isNumber(data.height)) {
      this.size.height = data.height;
    }
    if (isNumber(data.width)) {
      this.size.width = data.width;
    }
  }, _updateRatio:function(data, event) {
    var o = this.options, cpos = this.position, csize = this.size, a = this.axis;
    if (isNumber(data.height)) {
      data.width = data.height * this.aspectRatio;
    } else {
      if (isNumber(data.width)) {
        data.height = data.width / this.aspectRatio;
      }
    }
    if (a == "sw") {
      data.left = cpos.left + (csize.width - data.width);
      data.top = null;
    }
    if (a == "nw") {
      data.top = cpos.top + (csize.height - data.height);
      data.left = cpos.left + (csize.width - data.width);
    }
    return data;
  }, _respectSize:function(data, event) {
    var el = this.helper, o = this._vBoundaries, pRatio = this._aspectRatio || event.shiftKey, a = this.axis, ismaxw = isNumber(data.width) && o.maxWidth && o.maxWidth < data.width, ismaxh = isNumber(data.height) && o.maxHeight && o.maxHeight < data.height, isminw = isNumber(data.width) && o.minWidth && o.minWidth > data.width, isminh = isNumber(data.height) && o.minHeight && o.minHeight > data.height;
    if (isminw) {
      data.width = o.minWidth;
    }
    if (isminh) {
      data.height = o.minHeight;
    }
    if (ismaxw) {
      data.width = o.maxWidth;
    }
    if (ismaxh) {
      data.height = o.maxHeight;
    }
    var dw = this.originalPosition.left + this.originalSize.width, dh = this.position.top + this.size.height;
    var cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
    if (isminw && cw) {
      data.left = dw - o.minWidth;
    }
    if (ismaxw && cw) {
      data.left = dw - o.maxWidth;
    }
    if (isminh && ch) {
      data.top = dh - o.minHeight;
    }
    if (ismaxh && ch) {
      data.top = dh - o.maxHeight;
    }
    var isNotwh = !data.width && !data.height;
    if (isNotwh && !data.left && data.top) {
      data.top = null;
    } else {
      if (isNotwh && !data.top && data.left) {
        data.left = null;
      }
    }
    return data;
  }, _proportionallyResize:function() {
    var o = this.options;
    if (!this._proportionallyResizeElements.length) {
      return;
    }
    var element = this.helper || this.element;
    for (var i = 0; i < this._proportionallyResizeElements.length; i++) {
      var prel = this._proportionallyResizeElements[i];
      if (!this.borderDif) {
        var b = [prel.css("borderTopWidth"), prel.css("borderRightWidth"), prel.css("borderBottomWidth"), prel.css("borderLeftWidth")], p = [prel.css("paddingTop"), prel.css("paddingRight"), prel.css("paddingBottom"), prel.css("paddingLeft")];
        this.borderDif = $.map(b, function(v, i) {
          var border = parseInt(v, 10) || 0, padding = parseInt(p[i], 10) || 0;
          return border + padding;
        });
      }
      if ($.browser.msie && !!($(element).is(":hidden") || $(element).parents(":hidden").length)) {
        continue;
      }
      prel.css({height:element.height() - this.borderDif[0] - this.borderDif[2] || 0, width:element.width() - this.borderDif[1] - this.borderDif[3] || 0});
    }
  }, _renderProxy:function() {
    var el = this.element, o = this.options;
    this.elementOffset = el.offset();
    if (this._helper) {
      this.helper = this.helper || $('<div style="overflow:hidden;"></div>');
      var ie6 = $.browser.msie && $.browser.version < 7, ie6offset = ie6 ? 1 : 0, pxyoffset = ie6 ? 2 : -1;
      this.helper.addClass(this._helper).css({width:this.element.outerWidth() + pxyoffset, height:this.element.outerHeight() + pxyoffset, position:"absolute", left:this.elementOffset.left - ie6offset + "px", top:this.elementOffset.top - ie6offset + "px", zIndex:++o.zIndex});
      this.helper.appendTo("body").disableSelection();
    } else {
      this.helper = this.element;
    }
  }, _change:{e:function(event, dx, dy) {
    return {width:this.originalSize.width + dx};
  }, w:function(event, dx, dy) {
    var o = this.options, cs = this.originalSize, sp = this.originalPosition;
    return {left:sp.left + dx, width:cs.width - dx};
  }, n:function(event, dx, dy) {
    var o = this.options, cs = this.originalSize, sp = this.originalPosition;
    return {top:sp.top + dy, height:cs.height - dy};
  }, s:function(event, dx, dy) {
    return {height:this.originalSize.height + dy};
  }, se:function(event, dx, dy) {
    return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
  }, sw:function(event, dx, dy) {
    return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
  }, ne:function(event, dx, dy) {
    return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
  }, nw:function(event, dx, dy) {
    return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
  }}, _propagate:function(n, event) {
    $.ui.plugin.call(this, n, [event, this.ui()]);
    n != "resize" && this._trigger(n, event, this.ui());
  }, plugins:{}, ui:function() {
    return {originalElement:this.originalElement, element:this.element, helper:this.helper, position:this.position, size:this.size, originalSize:this.originalSize, originalPosition:this.originalPosition};
  }});
  $.extend($.ui.resizable, {version:"1.8.18"});
  $.ui.plugin.add("resizable", "alsoResize", {start:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options;
    var _store = function(exp) {
      $(exp).each(function() {
        var el = $(this);
        el.data("resizable-alsoresize", {width:parseInt(el.width(), 10), height:parseInt(el.height(), 10), left:parseInt(el.css("left"), 10), top:parseInt(el.css("top"), 10)});
      });
    };
    if (typeof o.alsoResize == "object" && !o.alsoResize.parentNode) {
      if (o.alsoResize.length) {
        o.alsoResize = o.alsoResize[0];
        _store(o.alsoResize);
      } else {
        $.each(o.alsoResize, function(exp) {
          _store(exp);
        });
      }
    } else {
      _store(o.alsoResize);
    }
  }, resize:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;
    var delta = {height:self.size.height - os.height || 0, width:self.size.width - os.width || 0, top:self.position.top - op.top || 0, left:self.position.left - op.left || 0}, _alsoResize = function(exp, c) {
      $(exp).each(function() {
        var el = $(this), start = $(this).data("resizable-alsoresize"), style = {}, css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        $.each(css, function(i, prop) {
          var sum = (start[prop] || 0) + (delta[prop] || 0);
          if (sum && sum >= 0) {
            style[prop] = sum || null;
          }
        });
        el.css(style);
      });
    };
    if (typeof o.alsoResize == "object" && !o.alsoResize.nodeType) {
      $.each(o.alsoResize, function(exp, c) {
        _alsoResize(exp, c);
      });
    } else {
      _alsoResize(o.alsoResize);
    }
  }, stop:function(event, ui) {
    $(this).removeData("resizable-alsoresize");
  }});
  $.ui.plugin.add("resizable", "animate", {stop:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options;
    var pr = self._proportionallyResizeElements, ista = pr.length && /textarea/i.test(pr[0].nodeName), soffseth = ista && $.ui.hasScroll(pr[0], "left") ? 0 : self.sizeDiff.height, soffsetw = ista ? 0 : self.sizeDiff.width;
    var style = {width:self.size.width - soffsetw, height:self.size.height - soffseth}, left = parseInt(self.element.css("left"), 10) + (self.position.left - self.originalPosition.left) || null, top = parseInt(self.element.css("top"), 10) + (self.position.top - self.originalPosition.top) || null;
    self.element.animate($.extend(style, top && left ? {top:top, left:left} : {}), {duration:o.animateDuration, easing:o.animateEasing, step:function() {
      var data = {width:parseInt(self.element.css("width"), 10), height:parseInt(self.element.css("height"), 10), top:parseInt(self.element.css("top"), 10), left:parseInt(self.element.css("left"), 10)};
      if (pr && pr.length) {
        $(pr[0]).css({width:data.width, height:data.height});
      }
      self._updateCache(data);
      self._propagate("resize", event);
    }});
  }});
  $.ui.plugin.add("resizable", "containment", {start:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options, el = self.element;
    var oc = o.containment, ce = oc instanceof $ ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;
    if (!ce) {
      return;
    }
    self.containerElement = $(ce);
    if (/document/.test(oc) || oc == document) {
      self.containerOffset = {left:0, top:0};
      self.containerPosition = {left:0, top:0};
      self.parentData = {element:$(document), left:0, top:0, width:$(document).width(), height:$(document).height() || document.body.parentNode.scrollHeight};
    } else {
      var element = $(ce), p = [];
      $(["Top", "Right", "Left", "Bottom"]).each(function(i, name) {
        p[i] = num(element.css("padding" + name));
      });
      self.containerOffset = element.offset();
      self.containerPosition = element.position();
      self.containerSize = {height:element.innerHeight() - p[3], width:element.innerWidth() - p[1]};
      var co = self.containerOffset, ch = self.containerSize.height, cw = self.containerSize.width, width = $.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw, height = $.ui.hasScroll(ce) ? ce.scrollHeight : ch;
      self.parentData = {element:ce, left:co.left, top:co.top, width:width, height:height};
    }
  }, resize:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options, ps = self.containerSize, co = self.containerOffset, cs = self.size, cp = self.position, pRatio = self._aspectRatio || event.shiftKey, cop = {top:0, left:0}, ce = self.containerElement;
    if (ce[0] != document && /static/.test(ce.css("position"))) {
      cop = co;
    }
    if (cp.left < (self._helper ? co.left : 0)) {
      self.size.width = self.size.width + (self._helper ? self.position.left - co.left : self.position.left - cop.left);
      if (pRatio) {
        self.size.height = self.size.width / o.aspectRatio;
      }
      self.position.left = o.helper ? co.left : 0;
    }
    if (cp.top < (self._helper ? co.top : 0)) {
      self.size.height = self.size.height + (self._helper ? self.position.top - co.top : self.position.top);
      if (pRatio) {
        self.size.width = self.size.height * o.aspectRatio;
      }
      self.position.top = self._helper ? co.top : 0;
    }
    self.offset.left = self.parentData.left + self.position.left;
    self.offset.top = self.parentData.top + self.position.top;
    var woset = Math.abs((self._helper ? self.offset.left - cop.left : self.offset.left - cop.left) + self.sizeDiff.width), hoset = Math.abs((self._helper ? self.offset.top - cop.top : self.offset.top - co.top) + self.sizeDiff.height);
    var isParent = self.containerElement.get(0) == self.element.parent().get(0), isOffsetRelative = /relative|absolute/.test(self.containerElement.css("position"));
    if (isParent && isOffsetRelative) {
      woset -= self.parentData.left;
    }
    if (woset + self.size.width >= self.parentData.width) {
      self.size.width = self.parentData.width - woset;
      if (pRatio) {
        self.size.height = self.size.width / self.aspectRatio;
      }
    }
    if (hoset + self.size.height >= self.parentData.height) {
      self.size.height = self.parentData.height - hoset;
      if (pRatio) {
        self.size.width = self.size.height * self.aspectRatio;
      }
    }
  }, stop:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options, cp = self.position, co = self.containerOffset, cop = self.containerPosition, ce = self.containerElement;
    var helper = $(self.helper), ho = helper.offset(), w = helper.outerWidth() - self.sizeDiff.width, h = helper.outerHeight() - self.sizeDiff.height;
    if (self._helper && !o.animate && /relative/.test(ce.css("position"))) {
      $(this).css({left:ho.left - cop.left - co.left, width:w, height:h});
    }
    if (self._helper && !o.animate && /static/.test(ce.css("position"))) {
      $(this).css({left:ho.left - cop.left - co.left, width:w, height:h});
    }
  }});
  $.ui.plugin.add("resizable", "ghost", {start:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options, cs = self.size;
    self.ghost = self.originalElement.clone();
    self.ghost.css({opacity:.25, display:"block", position:"relative", height:cs.height, width:cs.width, margin:0, left:0, top:0}).addClass("ui-resizable-ghost").addClass(typeof o.ghost == "string" ? o.ghost : "");
    self.ghost.appendTo(self.helper);
  }, resize:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options;
    if (self.ghost) {
      self.ghost.css({position:"relative", height:self.size.height, width:self.size.width});
    }
  }, stop:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options;
    if (self.ghost && self.helper) {
      self.helper.get(0).removeChild(self.ghost.get(0));
    }
  }});
  $.ui.plugin.add("resizable", "grid", {resize:function(event, ui) {
    var self = $(this).data("resizable"), o = self.options, cs = self.size, os = self.originalSize, op = self.originalPosition, a = self.axis, ratio = o._aspectRatio || event.shiftKey;
    o.grid = typeof o.grid == "number" ? [o.grid, o.grid] : o.grid;
    var ox = Math.round((cs.width - os.width) / (o.grid[0] || 1)) * (o.grid[0] || 1), oy = Math.round((cs.height - os.height) / (o.grid[1] || 1)) * (o.grid[1] || 1);
    if (/^(se|s|e)$/.test(a)) {
      self.size.width = os.width + ox;
      self.size.height = os.height + oy;
    } else {
      if (/^(ne)$/.test(a)) {
        self.size.width = os.width + ox;
        self.size.height = os.height + oy;
        self.position.top = op.top - oy;
      } else {
        if (/^(sw)$/.test(a)) {
          self.size.width = os.width + ox;
          self.size.height = os.height + oy;
          self.position.left = op.left - ox;
        } else {
          self.size.width = os.width + ox;
          self.size.height = os.height + oy;
          self.position.top = op.top - oy;
          self.position.left = op.left - ox;
        }
      }
    }
  }});
  var num = function(v) {
    return parseInt(v, 10) || 0;
  };
  var isNumber = function(value) {
    return !isNaN(parseInt(value, 10));
  };
})(jQuery);
(function($, undefined) {
  $.widget("ui.selectable", $.ui.mouse, {options:{appendTo:"body", autoRefresh:true, distance:0, filter:"*", tolerance:"touch"}, _create:function() {
    var self = this;
    this.element.addClass("ui-selectable");
    this.dragged = false;
    var selectees;
    this.refresh = function() {
      selectees = $(self.options.filter, self.element[0]);
      selectees.addClass("ui-selectee");
      selectees.each(function() {
        var $this = $(this);
        var pos = $this.offset();
        $.data(this, "selectable-item", {element:this, $element:$this, left:pos.left, top:pos.top, right:pos.left + $this.outerWidth(), bottom:pos.top + $this.outerHeight(), startselected:false, selected:$this.hasClass("ui-selected"), selecting:$this.hasClass("ui-selecting"), unselecting:$this.hasClass("ui-unselecting")});
      });
    };
    this.refresh();
    this.selectees = selectees.addClass("ui-selectee");
    this._mouseInit();
    this.helper = $("<div class='ui-selectable-helper'></div>");
  }, destroy:function() {
    this.selectees.removeClass("ui-selectee").removeData("selectable-item");
    this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
    this._mouseDestroy();
    return this;
  }, _mouseStart:function(event) {
    var self = this;
    this.opos = [event.pageX, event.pageY];
    if (this.options.disabled) {
      return;
    }
    var options = this.options;
    this.selectees = $(options.filter, this.element[0]);
    this._trigger("start", event);
    $(options.appendTo).append(this.helper);
    this.helper.css({"left":event.clientX, "top":event.clientY, "width":0, "height":0});
    if (options.autoRefresh) {
      this.refresh();
    }
    this.selectees.filter(".ui-selected").each(function() {
      var selectee = $.data(this, "selectable-item");
      selectee.startselected = true;
      if (!event.metaKey && !event.ctrlKey) {
        selectee.$element.removeClass("ui-selected");
        selectee.selected = false;
        selectee.$element.addClass("ui-unselecting");
        selectee.unselecting = true;
        self._trigger("unselecting", event, {unselecting:selectee.element});
      }
    });
    $(event.target).parents().andSelf().each(function() {
      var selectee = $.data(this, "selectable-item");
      if (selectee) {
        var doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass("ui-selected");
        selectee.$element.removeClass(doSelect ? "ui-unselecting" : "ui-selected").addClass(doSelect ? "ui-selecting" : "ui-unselecting");
        selectee.unselecting = !doSelect;
        selectee.selecting = doSelect;
        selectee.selected = doSelect;
        if (doSelect) {
          self._trigger("selecting", event, {selecting:selectee.element});
        } else {
          self._trigger("unselecting", event, {unselecting:selectee.element});
        }
        return false;
      }
    });
  }, _mouseDrag:function(event) {
    var self = this;
    this.dragged = true;
    if (this.options.disabled) {
      return;
    }
    var options = this.options;
    var x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
    if (x1 > x2) {
      var tmp = x2;
      x2 = x1;
      x1 = tmp;
    }
    if (y1 > y2) {
      var tmp = y2;
      y2 = y1;
      y1 = tmp;
    }
    this.helper.css({left:x1, top:y1, width:x2 - x1, height:y2 - y1});
    this.selectees.each(function() {
      var selectee = $.data(this, "selectable-item");
      if (!selectee || selectee.element == self.element[0]) {
        return;
      }
      var hit = false;
      if (options.tolerance == "touch") {
        hit = !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1);
      } else {
        if (options.tolerance == "fit") {
          hit = selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2;
        }
      }
      if (hit) {
        if (selectee.selected) {
          selectee.$element.removeClass("ui-selected");
          selectee.selected = false;
        }
        if (selectee.unselecting) {
          selectee.$element.removeClass("ui-unselecting");
          selectee.unselecting = false;
        }
        if (!selectee.selecting) {
          selectee.$element.addClass("ui-selecting");
          selectee.selecting = true;
          self._trigger("selecting", event, {selecting:selectee.element});
        }
      } else {
        if (selectee.selecting) {
          if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
            selectee.$element.removeClass("ui-selecting");
            selectee.selecting = false;
            selectee.$element.addClass("ui-selected");
            selectee.selected = true;
          } else {
            selectee.$element.removeClass("ui-selecting");
            selectee.selecting = false;
            if (selectee.startselected) {
              selectee.$element.addClass("ui-unselecting");
              selectee.unselecting = true;
            }
            self._trigger("unselecting", event, {unselecting:selectee.element});
          }
        }
        if (selectee.selected) {
          if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
            selectee.$element.removeClass("ui-selected");
            selectee.selected = false;
            selectee.$element.addClass("ui-unselecting");
            selectee.unselecting = true;
            self._trigger("unselecting", event, {unselecting:selectee.element});
          }
        }
      }
    });
    return false;
  }, _mouseStop:function(event) {
    var self = this;
    this.dragged = false;
    var options = this.options;
    $(".ui-unselecting", this.element[0]).each(function() {
      var selectee = $.data(this, "selectable-item");
      selectee.$element.removeClass("ui-unselecting");
      selectee.unselecting = false;
      selectee.startselected = false;
      self._trigger("unselected", event, {unselected:selectee.element});
    });
    $(".ui-selecting", this.element[0]).each(function() {
      var selectee = $.data(this, "selectable-item");
      selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
      selectee.selecting = false;
      selectee.selected = true;
      selectee.startselected = true;
      self._trigger("selected", event, {selected:selectee.element});
    });
    this._trigger("stop", event);
    this.helper.remove();
    return false;
  }});
  $.extend($.ui.selectable, {version:"1.8.18"});
})(jQuery);
(function($, undefined) {
  $.widget("ui.sortable", $.ui.mouse, {widgetEventPrefix:"sort", ready:false, options:{appendTo:"parent", axis:false, connectWith:false, containment:false, cursor:"auto", cursorAt:false, dropOnEmpty:true, forcePlaceholderSize:false, forceHelperSize:false, grid:false, handle:false, helper:"original", items:"> *", opacity:false, placeholder:false, revert:false, scroll:true, scrollSensitivity:20, scrollSpeed:20, scope:"default", tolerance:"intersect", zIndex:1000}, _create:function() {
    var o = this.options;
    this.containerCache = {};
    this.element.addClass("ui-sortable");
    this.refresh();
    this.floating = this.items.length ? o.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : false;
    this.offset = this.element.offset();
    this._mouseInit();
    this.ready = true;
  }, destroy:function() {
    $.Widget.prototype.destroy.call(this);
    this.element.removeClass("ui-sortable ui-sortable-disabled");
    this._mouseDestroy();
    for (var i = this.items.length - 1; i >= 0; i--) {
      this.items[i].item.removeData(this.widgetName + "-item");
    }
    return this;
  }, _setOption:function(key, value) {
    if (key === "disabled") {
      this.options[key] = value;
      this.widget()[value ? "addClass" : "removeClass"]("ui-sortable-disabled");
    } else {
      $.Widget.prototype._setOption.apply(this, arguments);
    }
  }, _mouseCapture:function(event, overrideHandle) {
    var that = this;
    if (this.reverting) {
      return false;
    }
    if (this.options.disabled || this.options.type == "static") {
      return false;
    }
    this._refreshItems(event);
    var currentItem = null, self = this, nodes = $(event.target).parents().each(function() {
      if ($.data(this, that.widgetName + "-item") == self) {
        currentItem = $(this);
        return false;
      }
    });
    if ($.data(event.target, that.widgetName + "-item") == self) {
      currentItem = $(event.target);
    }
    if (!currentItem) {
      return false;
    }
    if (this.options.handle && !overrideHandle) {
      var validHandle = false;
      $(this.options.handle, currentItem).find("*").andSelf().each(function() {
        if (this == event.target) {
          validHandle = true;
        }
      });
      if (!validHandle) {
        return false;
      }
    }
    this.currentItem = currentItem;
    this._removeCurrentsFromItems();
    return true;
  }, _mouseStart:function(event, overrideHandle, noActivation) {
    var o = this.options, self = this;
    this.currentContainer = this;
    this.refreshPositions();
    this.helper = this._createHelper(event);
    this._cacheHelperProportions();
    this._cacheMargins();
    this.scrollParent = this.helper.scrollParent();
    this.offset = this.currentItem.offset();
    this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left};
    this.helper.css("position", "absolute");
    this.cssPosition = this.helper.css("position");
    $.extend(this.offset, {click:{left:event.pageX - this.offset.left, top:event.pageY - this.offset.top}, parent:this._getParentOffset(), relative:this._getRelativeOffset()});
    this.originalPosition = this._generatePosition(event);
    this.originalPageX = event.pageX;
    this.originalPageY = event.pageY;
    o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
    this.domPosition = {prev:this.currentItem.prev()[0], parent:this.currentItem.parent()[0]};
    if (this.helper[0] != this.currentItem[0]) {
      this.currentItem.hide();
    }
    this._createPlaceholder();
    if (o.containment) {
      this._setContainment();
    }
    if (o.cursor) {
      if ($("body").css("cursor")) {
        this._storedCursor = $("body").css("cursor");
      }
      $("body").css("cursor", o.cursor);
    }
    if (o.opacity) {
      if (this.helper.css("opacity")) {
        this._storedOpacity = this.helper.css("opacity");
      }
      this.helper.css("opacity", o.opacity);
    }
    if (o.zIndex) {
      if (this.helper.css("zIndex")) {
        this._storedZIndex = this.helper.css("zIndex");
      }
      this.helper.css("zIndex", o.zIndex);
    }
    if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
      this.overflowOffset = this.scrollParent.offset();
    }
    this._trigger("start", event, this._uiHash());
    if (!this._preserveHelperProportions) {
      this._cacheHelperProportions();
    }
    if (!noActivation) {
      for (var i = this.containers.length - 1; i >= 0; i--) {
        this.containers[i]._trigger("activate", event, self._uiHash(this));
      }
    }
    if ($.ui.ddmanager) {
      $.ui.ddmanager.current = this;
    }
    if ($.ui.ddmanager && !o.dropBehaviour) {
      $.ui.ddmanager.prepareOffsets(this, event);
    }
    this.dragging = true;
    this.helper.addClass("ui-sortable-helper");
    this._mouseDrag(event);
    return true;
  }, _mouseDrag:function(event) {
    this.position = this._generatePosition(event);
    this.positionAbs = this._convertPositionTo("absolute");
    if (!this.lastPositionAbs) {
      this.lastPositionAbs = this.positionAbs;
    }
    if (this.options.scroll) {
      var o = this.options, scrolled = false;
      if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
        if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
          this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
        } else {
          if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
            this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
          }
        }
        if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
          this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
        } else {
          if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
            this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
          }
        }
      } else {
        if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
          scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
        } else {
          if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
            scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
          }
        }
        if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
          scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
        } else {
          if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
            scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
          }
        }
      }
      if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
        $.ui.ddmanager.prepareOffsets(this, event);
      }
    }
    this.positionAbs = this._convertPositionTo("absolute");
    if (!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px";
    }
    if (!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px";
    }
    for (var i = this.items.length - 1; i >= 0; i--) {
      var item = this.items[i], itemElement = item.item[0], intersection = this._intersectsWithPointer(item);
      if (!intersection) {
        continue;
      }
      if (itemElement != this.currentItem[0] && this.placeholder[intersection == 1 ? "next" : "prev"]()[0] != itemElement && !$.ui.contains(this.placeholder[0], itemElement) && (this.options.type == "semi-dynamic" ? !$.ui.contains(this.element[0], itemElement) : true)) {
        this.direction = intersection == 1 ? "down" : "up";
        if (this.options.tolerance == "pointer" || this._intersectsWithSides(item)) {
          this._rearrange(event, item);
        } else {
          break;
        }
        this._trigger("change", event, this._uiHash());
        break;
      }
    }
    this._contactContainers(event);
    if ($.ui.ddmanager) {
      $.ui.ddmanager.drag(this, event);
    }
    this._trigger("sort", event, this._uiHash());
    this.lastPositionAbs = this.positionAbs;
    return false;
  }, _mouseStop:function(event, noPropagation) {
    if (!event) {
      return;
    }
    if ($.ui.ddmanager && !this.options.dropBehaviour) {
      $.ui.ddmanager.drop(this, event);
    }
    if (this.options.revert) {
      var self = this;
      var cur = self.placeholder.offset();
      self.reverting = true;
      $(this.helper).animate({left:cur.left - this.offset.parent.left - self.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top:cur.top - this.offset.parent.top - self.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function() {
        self._clear(event);
      });
    } else {
      this._clear(event, noPropagation);
    }
    return false;
  }, cancel:function() {
    var self = this;
    if (this.dragging) {
      this._mouseUp({target:null});
      if (this.options.helper == "original") {
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else {
        this.currentItem.show();
      }
      for (var i = this.containers.length - 1; i >= 0; i--) {
        this.containers[i]._trigger("deactivate", null, self._uiHash(this));
        if (this.containers[i].containerCache.over) {
          this.containers[i]._trigger("out", null, self._uiHash(this));
          this.containers[i].containerCache.over = 0;
        }
      }
    }
    if (this.placeholder) {
      if (this.placeholder[0].parentNode) {
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
      }
      if (this.options.helper != "original" && this.helper && this.helper[0].parentNode) {
        this.helper.remove();
      }
      $.extend(this, {helper:null, dragging:false, reverting:false, _noFinalSort:null});
      if (this.domPosition.prev) {
        $(this.domPosition.prev).after(this.currentItem);
      } else {
        $(this.domPosition.parent).prepend(this.currentItem);
      }
    }
    return this;
  }, serialize:function(o) {
    var items = this._getItemsAsjQuery(o && o.connected);
    var str = [];
    o = o || {};
    $(items).each(function() {
      var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[-=_](.+)/);
      if (res) {
        str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
      }
    });
    if (!str.length && o.key) {
      str.push(o.key + "=");
    }
    return str.join("&");
  }, toArray:function(o) {
    var items = this._getItemsAsjQuery(o && o.connected);
    var ret = [];
    o = o || {};
    items.each(function() {
      ret.push($(o.item || this).attr(o.attribute || "id") || "");
    });
    return ret;
  }, _intersectsWith:function(item) {
    var x1 = this.positionAbs.left, x2 = x1 + this.helperProportions.width, y1 = this.positionAbs.top, y2 = y1 + this.helperProportions.height;
    var l = item.left, r = l + item.width, t = item.top, b = t + item.height;
    var dyClick = this.offset.click.top, dxClick = this.offset.click.left;
    var isOverElement = y1 + dyClick > t && y1 + dyClick < b && x1 + dxClick > l && x1 + dxClick < r;
    if (this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"]) {
      return isOverElement;
    } else {
      return l < x1 + this.helperProportions.width / 2 && x2 - this.helperProportions.width / 2 < r && t < y1 + this.helperProportions.height / 2 && y2 - this.helperProportions.height / 2 < b;
    }
  }, _intersectsWithPointer:function(item) {
    var isOverElementHeight = $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height), isOverElementWidth = $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width), isOverElement = isOverElementHeight && isOverElementWidth, verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection();
    if (!isOverElement) {
      return false;
    }
    return this.floating ? horizontalDirection && horizontalDirection == "right" || verticalDirection == "down" ? 2 : 1 : verticalDirection && (verticalDirection == "down" ? 2 : 1);
  }, _intersectsWithSides:function(item) {
    var isOverBottomHalf = $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height), isOverRightHalf = $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width), verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection();
    if (this.floating && horizontalDirection) {
      return horizontalDirection == "right" && isOverRightHalf || horizontalDirection == "left" && !isOverRightHalf;
    } else {
      return verticalDirection && (verticalDirection == "down" && isOverBottomHalf || verticalDirection == "up" && !isOverBottomHalf);
    }
  }, _getDragVerticalDirection:function() {
    var delta = this.positionAbs.top - this.lastPositionAbs.top;
    return delta != 0 && (delta > 0 ? "down" : "up");
  }, _getDragHorizontalDirection:function() {
    var delta = this.positionAbs.left - this.lastPositionAbs.left;
    return delta != 0 && (delta > 0 ? "right" : "left");
  }, refresh:function(event) {
    this._refreshItems(event);
    this.refreshPositions();
    return this;
  }, _connectWith:function() {
    var options = this.options;
    return options.connectWith.constructor == String ? [options.connectWith] : options.connectWith;
  }, _getItemsAsjQuery:function(connected) {
    var self = this;
    var items = [];
    var queries = [];
    var connectWith = this._connectWith();
    if (connectWith && connected) {
      for (var i = connectWith.length - 1; i >= 0; i--) {
        var cur = $(connectWith[i]);
        for (var j = cur.length - 1; j >= 0; j--) {
          var inst = $.data(cur[j], this.widgetName);
          if (inst && inst != this && !inst.options.disabled) {
            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
          }
        }
      }
    }
    queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options:this.options, item:this.currentItem}) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
    for (var i = queries.length - 1; i >= 0; i--) {
      queries[i][0].each(function() {
        items.push(this);
      });
    }
    return $(items);
  }, _removeCurrentsFromItems:function() {
    var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
    for (var i = 0; i < this.items.length; i++) {
      for (var j = 0; j < list.length; j++) {
        if (list[j] == this.items[i].item[0]) {
          this.items.splice(i, 1);
        }
      }
    }
  }, _refreshItems:function(event) {
    this.items = [];
    this.containers = [this];
    var items = this.items;
    var self = this;
    var queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {item:this.currentItem}) : $(this.options.items, this.element), this]];
    var connectWith = this._connectWith();
    if (connectWith && this.ready) {
      for (var i = connectWith.length - 1; i >= 0; i--) {
        var cur = $(connectWith[i]);
        for (var j = cur.length - 1; j >= 0; j--) {
          var inst = $.data(cur[j], this.widgetName);
          if (inst && inst != this && !inst.options.disabled) {
            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {item:this.currentItem}) : $(inst.options.items, inst.element), inst]);
            this.containers.push(inst);
          }
        }
      }
    }
    for (var i = queries.length - 1; i >= 0; i--) {
      var targetData = queries[i][1];
      var _queries = queries[i][0];
      for (var j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
        var item = $(_queries[j]);
        item.data(this.widgetName + "-item", targetData);
        items.push({item:item, instance:targetData, width:0, height:0, left:0, top:0});
      }
    }
  }, refreshPositions:function(fast) {
    if (this.offsetParent && this.helper) {
      this.offset.parent = this._getParentOffset();
    }
    for (var i = this.items.length - 1; i >= 0; i--) {
      var item = this.items[i];
      if (item.instance != this.currentContainer && this.currentContainer && item.item[0] != this.currentItem[0]) {
        continue;
      }
      var t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;
      if (!fast) {
        item.width = t.outerWidth();
        item.height = t.outerHeight();
      }
      var p = t.offset();
      item.left = p.left;
      item.top = p.top;
    }
    if (this.options.custom && this.options.custom.refreshContainers) {
      this.options.custom.refreshContainers.call(this);
    } else {
      for (var i = this.containers.length - 1; i >= 0; i--) {
        var p = this.containers[i].element.offset();
        this.containers[i].containerCache.left = p.left;
        this.containers[i].containerCache.top = p.top;
        this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
        this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      }
    }
    return this;
  }, _createPlaceholder:function(that) {
    var self = that || this, o = self.options;
    if (!o.placeholder || o.placeholder.constructor == String) {
      var className = o.placeholder;
      o.placeholder = {element:function() {
        var el = $(document.createElement(self.currentItem[0].nodeName)).addClass(className || self.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
        if (!className) {
          el.style.visibility = "hidden";
        }
        return el;
      }, update:function(container, p) {
        if (className && !o.forcePlaceholderSize) {
          return;
        }
        if (!p.height()) {
          p.height(self.currentItem.innerHeight() - parseInt(self.currentItem.css("paddingTop") || 0, 10) - parseInt(self.currentItem.css("paddingBottom") || 0, 10));
        }
        if (!p.width()) {
          p.width(self.currentItem.innerWidth() - parseInt(self.currentItem.css("paddingLeft") || 0, 10) - parseInt(self.currentItem.css("paddingRight") || 0, 10));
        }
      }};
    }
    self.placeholder = $(o.placeholder.element.call(self.element, self.currentItem));
    self.currentItem.after(self.placeholder);
    o.placeholder.update(self, self.placeholder);
  }, _contactContainers:function(event) {
    var innermostContainer = null, innermostIndex = null;
    for (var i = this.containers.length - 1; i >= 0; i--) {
      if ($.ui.contains(this.currentItem[0], this.containers[i].element[0])) {
        continue;
      }
      if (this._intersectsWith(this.containers[i].containerCache)) {
        if (innermostContainer && $.ui.contains(this.containers[i].element[0], innermostContainer.element[0])) {
          continue;
        }
        innermostContainer = this.containers[i];
        innermostIndex = i;
      } else {
        if (this.containers[i].containerCache.over) {
          this.containers[i]._trigger("out", event, this._uiHash(this));
          this.containers[i].containerCache.over = 0;
        }
      }
    }
    if (!innermostContainer) {
      return;
    }
    if (this.containers.length === 1) {
      this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
      this.containers[innermostIndex].containerCache.over = 1;
    } else {
      if (this.currentContainer != this.containers[innermostIndex]) {
        var dist = 10000;
        var itemWithLeastDistance = null;
        var base = this.positionAbs[this.containers[innermostIndex].floating ? "left" : "top"];
        for (var j = this.items.length - 1; j >= 0; j--) {
          if (!$.ui.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
            continue;
          }
          var cur = this.items[j][this.containers[innermostIndex].floating ? "left" : "top"];
          if (Math.abs(cur - base) < dist) {
            dist = Math.abs(cur - base);
            itemWithLeastDistance = this.items[j];
          }
        }
        if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
          return;
        }
        this.currentContainer = this.containers[innermostIndex];
        itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
        this._trigger("change", event, this._uiHash());
        this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
        this.options.placeholder.update(this.currentContainer, this.placeholder);
        this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
        this.containers[innermostIndex].containerCache.over = 1;
      }
    }
  }, _createHelper:function(event) {
    var o = this.options;
    var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : o.helper == "clone" ? this.currentItem.clone() : this.currentItem;
    if (!helper.parents("body").length) {
      $(o.appendTo != "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
    }
    if (helper[0] == this.currentItem[0]) {
      this._storedCSS = {width:this.currentItem[0].style.width, height:this.currentItem[0].style.height, position:this.currentItem.css("position"), top:this.currentItem.css("top"), left:this.currentItem.css("left")};
    }
    if (helper[0].style.width == "" || o.forceHelperSize) {
      helper.width(this.currentItem.width());
    }
    if (helper[0].style.height == "" || o.forceHelperSize) {
      helper.height(this.currentItem.height());
    }
    return helper;
  }, _adjustOffsetFromHelper:function(obj) {
    if (typeof obj == "string") {
      obj = obj.split(" ");
    }
    if ($.isArray(obj)) {
      obj = {left:+obj[0], top:+obj[1] || 0};
    }
    if ("left" in obj) {
      this.offset.click.left = obj.left + this.margins.left;
    }
    if ("right" in obj) {
      this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
    }
    if ("top" in obj) {
      this.offset.click.top = obj.top + this.margins.top;
    }
    if ("bottom" in obj) {
      this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
    }
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var po = this.offsetParent.offset();
    if (this.cssPosition == "absolute" && this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
      po.left += this.scrollParent.scrollLeft();
      po.top += this.scrollParent.scrollTop();
    }
    if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && $.browser.msie) {
      po = {top:0, left:0};
    }
    return {top:po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
  }, _getRelativeOffset:function() {
    if (this.cssPosition == "relative") {
      var p = this.currentItem.position();
      return {top:p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
    } else {
      return {top:0, left:0};
    }
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.currentItem.css("marginLeft"), 10) || 0, top:parseInt(this.currentItem.css("marginTop"), 10) || 0};
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()};
  }, _setContainment:function() {
    var o = this.options;
    if (o.containment == "parent") {
      o.containment = this.helper[0].parentNode;
    }
    if (o.containment == "document" || o.containment == "window") {
      this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, $(o.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, ($(o.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
    }
    if (!/^(document|window|parent)$/.test(o.containment)) {
      var ce = $(o.containment)[0];
      var co = $(o.containment).offset();
      var over = $(ce).css("overflow") != "hidden";
      this.containment = [co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, 
      co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
    }
  }, _convertPositionTo:function(d, pos) {
    if (!pos) {
      pos = this.position;
    }
    var mod = d == "absolute" ? 1 : -1;
    var o = this.options, scroll = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
    return {top:pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ($.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod), left:pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ($.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * 
    mod)};
  }, _generatePosition:function(event) {
    var o = this.options, scroll = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
    if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
      this.offset.relative = this._getRelativeOffset();
    }
    var pageX = event.pageX;
    var pageY = event.pageY;
    if (this.originalPosition) {
      if (this.containment) {
        if (event.pageX - this.offset.click.left < this.containment[0]) {
          pageX = this.containment[0] + this.offset.click.left;
        }
        if (event.pageY - this.offset.click.top < this.containment[1]) {
          pageY = this.containment[1] + this.offset.click.top;
        }
        if (event.pageX - this.offset.click.left > this.containment[2]) {
          pageX = this.containment[2] + this.offset.click.left;
        }
        if (event.pageY - this.offset.click.top > this.containment[3]) {
          pageY = this.containment[3] + this.offset.click.top;
        }
      }
      if (o.grid) {
        var top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
        pageY = this.containment ? !(top - this.offset.click.top < this.containment[1] || top - this.offset.click.top > this.containment[3]) ? top : !(top - this.offset.click.top < this.containment[1]) ? top - o.grid[1] : top + o.grid[1] : top;
        var left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
        pageX = this.containment ? !(left - this.offset.click.left < this.containment[0] || left - this.offset.click.left > this.containment[2]) ? left : !(left - this.offset.click.left < this.containment[0]) ? left - o.grid[0] : left + o.grid[0] : left;
      }
    }
    return {top:pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ($.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()), left:pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ($.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())};
  }, _rearrange:function(event, i, a, hardRefresh) {
    a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? i.item[0] : i.item[0].nextSibling);
    this.counter = this.counter ? ++this.counter : 1;
    var self = this, counter = this.counter;
    window.setTimeout(function() {
      if (counter == self.counter) {
        self.refreshPositions(!hardRefresh);
      }
    }, 0);
  }, _clear:function(event, noPropagation) {
    this.reverting = false;
    var delayedTriggers = [], self = this;
    if (!this._noFinalSort && this.currentItem.parent().length) {
      this.placeholder.before(this.currentItem);
    }
    this._noFinalSort = null;
    if (this.helper[0] == this.currentItem[0]) {
      for (var i in this._storedCSS) {
        if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") {
          this._storedCSS[i] = "";
        }
      }
      this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
    } else {
      this.currentItem.show();
    }
    if (this.fromOutside && !noPropagation) {
      delayedTriggers.push(function(event) {
        this._trigger("receive", event, this._uiHash(this.fromOutside));
      });
    }
    if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !noPropagation) {
      delayedTriggers.push(function(event) {
        this._trigger("update", event, this._uiHash());
      });
    }
    if (!$.ui.contains(this.element[0], this.currentItem[0])) {
      if (!noPropagation) {
        delayedTriggers.push(function(event) {
          this._trigger("remove", event, this._uiHash());
        });
      }
      for (var i = this.containers.length - 1; i >= 0; i--) {
        if ($.ui.contains(this.containers[i].element[0], this.currentItem[0]) && !noPropagation) {
          delayedTriggers.push(function(c) {
            return function(event) {
              c._trigger("receive", event, this._uiHash(this));
            };
          }.call(this, this.containers[i]));
          delayedTriggers.push(function(c) {
            return function(event) {
              c._trigger("update", event, this._uiHash(this));
            };
          }.call(this, this.containers[i]));
        }
      }
    }
    for (var i = this.containers.length - 1; i >= 0; i--) {
      if (!noPropagation) {
        delayedTriggers.push(function(c) {
          return function(event) {
            c._trigger("deactivate", event, this._uiHash(this));
          };
        }.call(this, this.containers[i]));
      }
      if (this.containers[i].containerCache.over) {
        delayedTriggers.push(function(c) {
          return function(event) {
            c._trigger("out", event, this._uiHash(this));
          };
        }.call(this, this.containers[i]));
        this.containers[i].containerCache.over = 0;
      }
    }
    if (this._storedCursor) {
      $("body").css("cursor", this._storedCursor);
    }
    if (this._storedOpacity) {
      this.helper.css("opacity", this._storedOpacity);
    }
    if (this._storedZIndex) {
      this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex);
    }
    this.dragging = false;
    if (this.cancelHelperRemoval) {
      if (!noPropagation) {
        this._trigger("beforeStop", event, this._uiHash());
        for (var i = 0; i < delayedTriggers.length; i++) {
          delayedTriggers[i].call(this, event);
        }
        this._trigger("stop", event, this._uiHash());
      }
      return false;
    }
    if (!noPropagation) {
      this._trigger("beforeStop", event, this._uiHash());
    }
    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
    if (this.helper[0] != this.currentItem[0]) {
      this.helper.remove();
    }
    this.helper = null;
    if (!noPropagation) {
      for (var i = 0; i < delayedTriggers.length; i++) {
        delayedTriggers[i].call(this, event);
      }
      this._trigger("stop", event, this._uiHash());
    }
    this.fromOutside = false;
    return true;
  }, _trigger:function() {
    if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
      this.cancel();
    }
  }, _uiHash:function(inst) {
    var self = inst || this;
    return {helper:self.helper, placeholder:self.placeholder || $([]), position:self.position, originalPosition:self.originalPosition, offset:self.positionAbs, item:self.currentItem, sender:inst ? inst.element : null};
  }});
  $.extend($.ui.sortable, {version:"1.8.18"});
})(jQuery);
jQuery.effects || function($, undefined) {
  $.effects = {};
  $.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(i, attr) {
    $.fx.step[attr] = function(fx) {
      if (!fx.colorInit) {
        fx.start = getColor(fx.elem, attr);
        fx.end = getRGB(fx.end);
        fx.colorInit = true;
      }
      fx.elem.style[attr] = "rgb(" + Math.max(Math.min(parseInt(fx.pos * (fx.end[0] - fx.start[0]) + fx.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(fx.pos * (fx.end[1] - fx.start[1]) + fx.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(fx.pos * (fx.end[2] - fx.start[2]) + fx.start[2], 10), 255), 0) + ")";
    };
  });
  function getRGB(color) {
    var result;
    if (color && color.constructor == Array && color.length == 3) {
      return color;
    }
    if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
      return [parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10)];
    }
    if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color)) {
      return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) * 2.55, parseFloat(result[3]) * 2.55];
    }
    if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color)) {
      return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
    }
    if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color)) {
      return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16), parseInt(result[3] + result[3], 16)];
    }
    if (result = /rgba\(0, 0, 0, 0\)/.exec(color)) {
      return colors["transparent"];
    }
    return colors[$.trim(color).toLowerCase()];
  }
  function getColor(elem, attr) {
    var color;
    do {
      color = $.curCSS(elem, attr);
      if (color != "" && color != "transparent" || $.nodeName(elem, "body")) {
        break;
      }
      attr = "backgroundColor";
    } while (elem = elem.parentNode);
    return getRGB(color);
  }
  var colors = {aqua:[0, 255, 255], azure:[240, 255, 255], beige:[245, 245, 220], black:[0, 0, 0], blue:[0, 0, 255], brown:[165, 42, 42], cyan:[0, 255, 255], darkblue:[0, 0, 139], darkcyan:[0, 139, 139], darkgrey:[169, 169, 169], darkgreen:[0, 100, 0], darkkhaki:[189, 183, 107], darkmagenta:[139, 0, 139], darkolivegreen:[85, 107, 47], darkorange:[255, 140, 0], darkorchid:[153, 50, 204], darkred:[139, 0, 0], darksalmon:[233, 150, 122], darkviolet:[148, 0, 211], fuchsia:[255, 0, 255], gold:[255, 215, 
  0], green:[0, 128, 0], indigo:[75, 0, 130], khaki:[240, 230, 140], lightblue:[173, 216, 230], lightcyan:[224, 255, 255], lightgreen:[144, 238, 144], lightgrey:[211, 211, 211], lightpink:[255, 182, 193], lightyellow:[255, 255, 224], lime:[0, 255, 0], magenta:[255, 0, 255], maroon:[128, 0, 0], navy:[0, 0, 128], olive:[128, 128, 0], orange:[255, 165, 0], pink:[255, 192, 203], purple:[128, 0, 128], violet:[128, 0, 128], red:[255, 0, 0], silver:[192, 192, 192], white:[255, 255, 255], yellow:[255, 255, 
  0], transparent:[255, 255, 255]};
  var classAnimationActions = ["add", "remove", "toggle"], shorthandStyles = {border:1, borderBottom:1, borderColor:1, borderLeft:1, borderRight:1, borderTop:1, borderWidth:1, margin:1, padding:1};
  function getElementStyles() {
    var style = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, newStyle = {}, key, camelCase;
    if (style && style.length && style[0] && style[style[0]]) {
      var len = style.length;
      while (len--) {
        key = style[len];
        if (typeof style[key] == "string") {
          camelCase = key.replace(/\-(\w)/g, function(all, letter) {
            return letter.toUpperCase();
          });
          newStyle[camelCase] = style[key];
        }
      }
    } else {
      for (key in style) {
        if (typeof style[key] === "string") {
          newStyle[key] = style[key];
        }
      }
    }
    return newStyle;
  }
  function filterStyles(styles) {
    var name, value;
    for (name in styles) {
      value = styles[name];
      if (value == null || $.isFunction(value) || name in shorthandStyles || /scrollbar/.test(name) || !/color/i.test(name) && isNaN(parseFloat(value))) {
        delete styles[name];
      }
    }
    return styles;
  }
  function styleDifference(oldStyle, newStyle) {
    var diff = {_:0}, name;
    for (name in newStyle) {
      if (oldStyle[name] != newStyle[name]) {
        diff[name] = newStyle[name];
      }
    }
    return diff;
  }
  $.effects.animateClass = function(value, duration, easing, callback) {
    if ($.isFunction(easing)) {
      callback = easing;
      easing = null;
    }
    return this.queue(function() {
      var that = $(this), originalStyleAttr = that.attr("style") || " ", originalStyle = filterStyles(getElementStyles.call(this)), newStyle, className = that.attr("class");
      $.each(classAnimationActions, function(i, action) {
        if (value[action]) {
          that[action + "Class"](value[action]);
        }
      });
      newStyle = filterStyles(getElementStyles.call(this));
      that.attr("class", className);
      that.animate(styleDifference(originalStyle, newStyle), {queue:false, duration:duration, easing:easing, complete:function() {
        $.each(classAnimationActions, function(i, action) {
          if (value[action]) {
            that[action + "Class"](value[action]);
          }
        });
        if (typeof that.attr("style") == "object") {
          that.attr("style").cssText = "";
          that.attr("style").cssText = originalStyleAttr;
        } else {
          that.attr("style", originalStyleAttr);
        }
        if (callback) {
          callback.apply(this, arguments);
        }
        $.dequeue(this);
      }});
    });
  };
  $.fn.extend({_addClass:$.fn.addClass, addClass:function(classNames, speed, easing, callback) {
    return speed ? $.effects.animateClass.apply(this, [{add:classNames}, speed, easing, callback]) : this._addClass(classNames);
  }, _removeClass:$.fn.removeClass, removeClass:function(classNames, speed, easing, callback) {
    return speed ? $.effects.animateClass.apply(this, [{remove:classNames}, speed, easing, callback]) : this._removeClass(classNames);
  }, _toggleClass:$.fn.toggleClass, toggleClass:function(classNames, force, speed, easing, callback) {
    if (typeof force == "boolean" || force === undefined) {
      if (!speed) {
        return this._toggleClass(classNames, force);
      } else {
        return $.effects.animateClass.apply(this, [force ? {add:classNames} : {remove:classNames}, speed, easing, callback]);
      }
    } else {
      return $.effects.animateClass.apply(this, [{toggle:classNames}, force, speed, easing]);
    }
  }, switchClass:function(remove, add, speed, easing, callback) {
    return $.effects.animateClass.apply(this, [{add:add, remove:remove}, speed, easing, callback]);
  }});
  $.extend($.effects, {version:"1.8.18", save:function(element, set) {
    for (var i = 0; i < set.length; i++) {
      if (set[i] !== null) {
        element.data("ec.storage." + set[i], element[0].style[set[i]]);
      }
    }
  }, restore:function(element, set) {
    for (var i = 0; i < set.length; i++) {
      if (set[i] !== null) {
        element.css(set[i], element.data("ec.storage." + set[i]));
      }
    }
  }, setMode:function(el, mode) {
    if (mode == "toggle") {
      mode = el.is(":hidden") ? "show" : "hide";
    }
    return mode;
  }, getBaseline:function(origin, original) {
    var y, x;
    switch(origin[0]) {
      case "top":
        y = 0;
        break;
      case "middle":
        y = 0.5;
        break;
      case "bottom":
        y = 1;
        break;
      default:
        y = origin[0] / original.height;
    }
    switch(origin[1]) {
      case "left":
        x = 0;
        break;
      case "center":
        x = 0.5;
        break;
      case "right":
        x = 1;
        break;
      default:
        x = origin[1] / original.width;
    }
    return {x:x, y:y};
  }, createWrapper:function(element) {
    if (element.parent().is(".ui-effects-wrapper")) {
      return element.parent();
    }
    var props = {width:element.outerWidth(true), height:element.outerHeight(true), "float":element.css("float")}, wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%", background:"transparent", border:"none", margin:0, padding:0}), active = document.activeElement;
    element.wrap(wrapper);
    if (element[0] === active || $.contains(element[0], active)) {
      $(active).focus();
    }
    wrapper = element.parent();
    if (element.css("position") == "static") {
      wrapper.css({position:"relative"});
      element.css({position:"relative"});
    } else {
      $.extend(props, {position:element.css("position"), zIndex:element.css("z-index")});
      $.each(["top", "left", "bottom", "right"], function(i, pos) {
        props[pos] = element.css(pos);
        if (isNaN(parseInt(props[pos], 10))) {
          props[pos] = "auto";
        }
      });
      element.css({position:"relative", top:0, left:0, right:"auto", bottom:"auto"});
    }
    return wrapper.css(props).show();
  }, removeWrapper:function(element) {
    var parent, active = document.activeElement;
    if (element.parent().is(".ui-effects-wrapper")) {
      parent = element.parent().replaceWith(element);
      if (element[0] === active || $.contains(element[0], active)) {
        $(active).focus();
      }
      return parent;
    }
    return element;
  }, setTransition:function(element, list, factor, value) {
    value = value || {};
    $.each(list, function(i, x) {
      unit = element.cssUnit(x);
      if (unit[0] > 0) {
        value[x] = unit[0] * factor + unit[1];
      }
    });
    return value;
  }});
  function _normalizeArguments(effect, options, speed, callback) {
    if (typeof effect == "object") {
      callback = options;
      speed = null;
      options = effect;
      effect = options.effect;
    }
    if ($.isFunction(options)) {
      callback = options;
      speed = null;
      options = {};
    }
    if (typeof options == "number" || $.fx.speeds[options]) {
      callback = speed;
      speed = options;
      options = {};
    }
    if ($.isFunction(speed)) {
      callback = speed;
      speed = null;
    }
    options = options || {};
    speed = speed || options.duration;
    speed = $.fx.off ? 0 : typeof speed == "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
    callback = callback || options.complete;
    return [effect, options, speed, callback];
  }
  function standardSpeed(speed) {
    if (!speed || typeof speed === "number" || $.fx.speeds[speed]) {
      return true;
    }
    if (typeof speed === "string" && !$.effects[speed]) {
      return true;
    }
    return false;
  }
  $.fn.extend({effect:function(effect, options, speed, callback) {
    var args = _normalizeArguments.apply(this, arguments), args2 = {options:args[1], duration:args[2], callback:args[3]}, mode = args2.options.mode, effectMethod = $.effects[effect];
    if ($.fx.off || !effectMethod) {
      if (mode) {
        return this[mode](args2.duration, args2.callback);
      } else {
        return this.each(function() {
          if (args2.callback) {
            args2.callback.call(this);
          }
        });
      }
    }
    return effectMethod.call(this, args2);
  }, _show:$.fn.show, show:function(speed) {
    if (standardSpeed(speed)) {
      return this._show.apply(this, arguments);
    } else {
      var args = _normalizeArguments.apply(this, arguments);
      args[1].mode = "show";
      return this.effect.apply(this, args);
    }
  }, _hide:$.fn.hide, hide:function(speed) {
    if (standardSpeed(speed)) {
      return this._hide.apply(this, arguments);
    } else {
      var args = _normalizeArguments.apply(this, arguments);
      args[1].mode = "hide";
      return this.effect.apply(this, args);
    }
  }, __toggle:$.fn.toggle, toggle:function(speed) {
    if (standardSpeed(speed) || typeof speed === "boolean" || $.isFunction(speed)) {
      return this.__toggle.apply(this, arguments);
    } else {
      var args = _normalizeArguments.apply(this, arguments);
      args[1].mode = "toggle";
      return this.effect.apply(this, args);
    }
  }, cssUnit:function(key) {
    var style = this.css(key), val = [];
    $.each(["em", "px", "%", "pt"], function(i, unit) {
      if (style.indexOf(unit) > 0) {
        val = [parseFloat(style), unit];
      }
    });
    return val;
  }});
  $.easing.jswing = $.easing.swing;
  $.extend($.easing, {def:"easeOutQuad", swing:function(x, t, b, c, d) {
    return $.easing[$.easing.def](x, t, b, c, d);
  }, easeInQuad:function(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  }, easeOutQuad:function(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }, easeInOutQuad:function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }
    return -c / 2 * (--t * (t - 2) - 1) + b;
  }, easeInCubic:function(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  }, easeOutCubic:function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }, easeInOutCubic:function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }, easeInQuart:function(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }, easeOutQuart:function(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }, easeInOutQuart:function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }, easeInQuint:function(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }, easeOutQuint:function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }, easeInOutQuint:function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }, easeInSine:function(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }, easeOutSine:function(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }, easeInOutSine:function(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }, easeInExpo:function(x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }, easeOutExpo:function(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }, easeInOutExpo:function(x, t, b, c, d) {
    if (t == 0) {
      return b;
    }
    if (t == d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }, easeInCirc:function(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }, easeOutCirc:function(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }, easeInOutCirc:function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }, easeInElastic:function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) {
      return b;
    }
    if ((t /= d) == 1) {
      return b + c;
    }
    if (!p) {
      p = d * .3;
    }
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  }, easeOutElastic:function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) {
      return b;
    }
    if ((t /= d) == 1) {
      return b + c;
    }
    if (!p) {
      p = d * .3;
    }
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  }, easeInOutElastic:function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) {
      return b;
    }
    if ((t /= d / 2) == 2) {
      return b + c;
    }
    if (!p) {
      p = d * (.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  }, easeInBack:function(x, t, b, c, d, s) {
    if (s == undefined) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }, easeOutBack:function(x, t, b, c, d, s) {
    if (s == undefined) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }, easeInOutBack:function(x, t, b, c, d, s) {
    if (s == undefined) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }, easeInBounce:function(x, t, b, c, d) {
    return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  }, easeOutBounce:function(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else {
      if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
      } else {
        if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
      }
    }
  }, easeInOutBounce:function(x, t, b, c, d) {
    if (t < d / 2) {
      return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    }
    return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }});
}(jQuery);
(function($, undefined) {
  $.effects.blind = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right"];
      var mode = $.effects.setMode(el, o.options.mode || "hide");
      var direction = o.options.direction || "vertical";
      $.effects.save(el, props);
      el.show();
      var wrapper = $.effects.createWrapper(el).css({overflow:"hidden"});
      var ref = direction == "vertical" ? "height" : "width";
      var distance = direction == "vertical" ? wrapper.height() : wrapper.width();
      if (mode == "show") {
        wrapper.css(ref, 0);
      }
      var animation = {};
      animation[ref] = mode == "show" ? distance : 0;
      wrapper.animate(animation, o.duration, o.options.easing, function() {
        if (mode == "hide") {
          el.hide();
        }
        $.effects.restore(el, props);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(el[0], arguments);
        }
        el.dequeue();
      });
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.bounce = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right"];
      var mode = $.effects.setMode(el, o.options.mode || "effect");
      var direction = o.options.direction || "up";
      var distance = o.options.distance || 20;
      var times = o.options.times || 5;
      var speed = o.duration || 250;
      if (/show|hide/.test(mode)) {
        props.push("opacity");
      }
      $.effects.save(el, props);
      el.show();
      $.effects.createWrapper(el);
      var ref = direction == "up" || direction == "down" ? "top" : "left";
      var motion = direction == "up" || direction == "left" ? "pos" : "neg";
      var distance = o.options.distance || (ref == "top" ? el.outerHeight({margin:true}) / 3 : el.outerWidth({margin:true}) / 3);
      if (mode == "show") {
        el.css("opacity", 0).css(ref, motion == "pos" ? -distance : distance);
      }
      if (mode == "hide") {
        distance = distance / (times * 2);
      }
      if (mode != "hide") {
        times--;
      }
      if (mode == "show") {
        var animation = {opacity:1};
        animation[ref] = (motion == "pos" ? "+=" : "-=") + distance;
        el.animate(animation, speed / 2, o.options.easing);
        distance = distance / 2;
        times--;
      }
      for (var i = 0; i < times; i++) {
        var animation1 = {}, animation2 = {};
        animation1[ref] = (motion == "pos" ? "-=" : "+=") + distance;
        animation2[ref] = (motion == "pos" ? "+=" : "-=") + distance;
        el.animate(animation1, speed / 2, o.options.easing).animate(animation2, speed / 2, o.options.easing);
        distance = mode == "hide" ? distance * 2 : distance / 2;
      }
      if (mode == "hide") {
        var animation = {opacity:0};
        animation[ref] = (motion == "pos" ? "-=" : "+=") + distance;
        el.animate(animation, speed / 2, o.options.easing, function() {
          el.hide();
          $.effects.restore(el, props);
          $.effects.removeWrapper(el);
          if (o.callback) {
            o.callback.apply(this, arguments);
          }
        });
      } else {
        var animation1 = {}, animation2 = {};
        animation1[ref] = (motion == "pos" ? "-=" : "+=") + distance;
        animation2[ref] = (motion == "pos" ? "+=" : "-=") + distance;
        el.animate(animation1, speed / 2, o.options.easing).animate(animation2, speed / 2, o.options.easing, function() {
          $.effects.restore(el, props);
          $.effects.removeWrapper(el);
          if (o.callback) {
            o.callback.apply(this, arguments);
          }
        });
      }
      el.queue("fx", function() {
        el.dequeue();
      });
      el.dequeue();
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.clip = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right", "height", "width"];
      var mode = $.effects.setMode(el, o.options.mode || "hide");
      var direction = o.options.direction || "vertical";
      $.effects.save(el, props);
      el.show();
      var wrapper = $.effects.createWrapper(el).css({overflow:"hidden"});
      var animate = el[0].tagName == "IMG" ? wrapper : el;
      var ref = {size:direction == "vertical" ? "height" : "width", position:direction == "vertical" ? "top" : "left"};
      var distance = direction == "vertical" ? animate.height() : animate.width();
      if (mode == "show") {
        animate.css(ref.size, 0);
        animate.css(ref.position, distance / 2);
      }
      var animation = {};
      animation[ref.size] = mode == "show" ? distance : 0;
      animation[ref.position] = mode == "show" ? 0 : distance / 2;
      animate.animate(animation, {queue:false, duration:o.duration, easing:o.options.easing, complete:function() {
        if (mode == "hide") {
          el.hide();
        }
        $.effects.restore(el, props);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(el[0], arguments);
        }
        el.dequeue();
      }});
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.drop = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right", "opacity"];
      var mode = $.effects.setMode(el, o.options.mode || "hide");
      var direction = o.options.direction || "left";
      $.effects.save(el, props);
      el.show();
      $.effects.createWrapper(el);
      var ref = direction == "up" || direction == "down" ? "top" : "left";
      var motion = direction == "up" || direction == "left" ? "pos" : "neg";
      var distance = o.options.distance || (ref == "top" ? el.outerHeight({margin:true}) / 2 : el.outerWidth({margin:true}) / 2);
      if (mode == "show") {
        el.css("opacity", 0).css(ref, motion == "pos" ? -distance : distance);
      }
      var animation = {opacity:mode == "show" ? 1 : 0};
      animation[ref] = (mode == "show" ? motion == "pos" ? "+=" : "-=" : motion == "pos" ? "-=" : "+=") + distance;
      el.animate(animation, {queue:false, duration:o.duration, easing:o.options.easing, complete:function() {
        if (mode == "hide") {
          el.hide();
        }
        $.effects.restore(el, props);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(this, arguments);
        }
        el.dequeue();
      }});
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.explode = function(o) {
    return this.queue(function() {
      var rows = o.options.pieces ? Math.round(Math.sqrt(o.options.pieces)) : 3;
      var cells = o.options.pieces ? Math.round(Math.sqrt(o.options.pieces)) : 3;
      o.options.mode = o.options.mode == "toggle" ? $(this).is(":visible") ? "hide" : "show" : o.options.mode;
      var el = $(this).show().css("visibility", "hidden");
      var offset = el.offset();
      offset.top -= parseInt(el.css("marginTop"), 10) || 0;
      offset.left -= parseInt(el.css("marginLeft"), 10) || 0;
      var width = el.outerWidth(true);
      var height = el.outerHeight(true);
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cells; j++) {
          el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute", visibility:"visible", left:-j * (width / cells), top:-i * (height / rows)}).parent().addClass("ui-effects-explode").css({position:"absolute", overflow:"hidden", width:width / cells, height:height / rows, left:offset.left + j * (width / cells) + (o.options.mode == "show" ? (j - Math.floor(cells / 2)) * (width / cells) : 0), top:offset.top + i * (height / rows) + (o.options.mode == "show" ? (i - Math.floor(rows / 2)) * 
          (height / rows) : 0), opacity:o.options.mode == "show" ? 0 : 1}).animate({left:offset.left + j * (width / cells) + (o.options.mode == "show" ? 0 : (j - Math.floor(cells / 2)) * (width / cells)), top:offset.top + i * (height / rows) + (o.options.mode == "show" ? 0 : (i - Math.floor(rows / 2)) * (height / rows)), opacity:o.options.mode == "show" ? 1 : 0}, o.duration || 500);
        }
      }
      setTimeout(function() {
        o.options.mode == "show" ? el.css({visibility:"visible"}) : el.css({visibility:"visible"}).hide();
        if (o.callback) {
          o.callback.apply(el[0]);
        }
        el.dequeue();
        $("div.ui-effects-explode").remove();
      }, o.duration || 500);
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.fade = function(o) {
    return this.queue(function() {
      var elem = $(this), mode = $.effects.setMode(elem, o.options.mode || "hide");
      elem.animate({opacity:mode}, {queue:false, duration:o.duration, easing:o.options.easing, complete:function() {
        o.callback && o.callback.apply(this, arguments);
        elem.dequeue();
      }});
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.fold = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right"];
      var mode = $.effects.setMode(el, o.options.mode || "hide");
      var size = o.options.size || 15;
      var horizFirst = !!o.options.horizFirst;
      var duration = o.duration ? o.duration / 2 : $.fx.speeds._default / 2;
      $.effects.save(el, props);
      el.show();
      var wrapper = $.effects.createWrapper(el).css({overflow:"hidden"});
      var widthFirst = mode == "show" != horizFirst;
      var ref = widthFirst ? ["width", "height"] : ["height", "width"];
      var distance = widthFirst ? [wrapper.width(), wrapper.height()] : [wrapper.height(), wrapper.width()];
      var percent = /([0-9]+)%/.exec(size);
      if (percent) {
        size = parseInt(percent[1], 10) / 100 * distance[mode == "hide" ? 0 : 1];
      }
      if (mode == "show") {
        wrapper.css(horizFirst ? {height:0, width:size} : {height:size, width:0});
      }
      var animation1 = {}, animation2 = {};
      animation1[ref[0]] = mode == "show" ? distance[0] : size;
      animation2[ref[1]] = mode == "show" ? distance[1] : 0;
      wrapper.animate(animation1, duration, o.options.easing).animate(animation2, duration, o.options.easing, function() {
        if (mode == "hide") {
          el.hide();
        }
        $.effects.restore(el, props);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(el[0], arguments);
        }
        el.dequeue();
      });
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.highlight = function(o) {
    return this.queue(function() {
      var elem = $(this), props = ["backgroundImage", "backgroundColor", "opacity"], mode = $.effects.setMode(elem, o.options.mode || "show"), animation = {backgroundColor:elem.css("backgroundColor")};
      if (mode == "hide") {
        animation.opacity = 0;
      }
      $.effects.save(elem, props);
      elem.show().css({backgroundImage:"none", backgroundColor:o.options.color || "#ffff99"}).animate(animation, {queue:false, duration:o.duration, easing:o.options.easing, complete:function() {
        mode == "hide" && elem.hide();
        $.effects.restore(elem, props);
        mode == "show" && !$.support.opacity && this.style.removeAttribute("filter");
        o.callback && o.callback.apply(this, arguments);
        elem.dequeue();
      }});
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.pulsate = function(o) {
    return this.queue(function() {
      var elem = $(this), mode = $.effects.setMode(elem, o.options.mode || "show");
      times = (o.options.times || 5) * 2 - 1;
      duration = o.duration ? o.duration / 2 : $.fx.speeds._default / 2, isVisible = elem.is(":visible"), animateTo = 0;
      if (!isVisible) {
        elem.css("opacity", 0).show();
        animateTo = 1;
      }
      if (mode == "hide" && isVisible || mode == "show" && !isVisible) {
        times--;
      }
      for (var i = 0; i < times; i++) {
        elem.animate({opacity:animateTo}, duration, o.options.easing);
        animateTo = (animateTo + 1) % 2;
      }
      elem.animate({opacity:animateTo}, duration, o.options.easing, function() {
        if (animateTo == 0) {
          elem.hide();
        }
        o.callback && o.callback.apply(this, arguments);
      });
      elem.queue("fx", function() {
        elem.dequeue();
      }).dequeue();
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.puff = function(o) {
    return this.queue(function() {
      var elem = $(this), mode = $.effects.setMode(elem, o.options.mode || "hide"), percent = parseInt(o.options.percent, 10) || 150, factor = percent / 100, original = {height:elem.height(), width:elem.width()};
      $.extend(o.options, {fade:true, mode:mode, percent:mode == "hide" ? percent : 100, from:mode == "hide" ? original : {height:original.height * factor, width:original.width * factor}});
      elem.effect("scale", o.options, o.duration, o.callback);
      elem.dequeue();
    });
  };
  $.effects.scale = function(o) {
    return this.queue(function() {
      var el = $(this);
      var options = $.extend(true, {}, o.options);
      var mode = $.effects.setMode(el, o.options.mode || "effect");
      var percent = parseInt(o.options.percent, 10) || (parseInt(o.options.percent, 10) == 0 ? 0 : mode == "hide" ? 0 : 100);
      var direction = o.options.direction || "both";
      var origin = o.options.origin;
      if (mode != "effect") {
        options.origin = origin || ["middle", "center"];
        options.restore = true;
      }
      var original = {height:el.height(), width:el.width()};
      el.from = o.options.from || (mode == "show" ? {height:0, width:0} : original);
      var factor = {y:direction != "horizontal" ? percent / 100 : 1, x:direction != "vertical" ? percent / 100 : 1};
      el.to = {height:original.height * factor.y, width:original.width * factor.x};
      if (o.options.fade) {
        if (mode == "show") {
          el.from.opacity = 0;
          el.to.opacity = 1;
        }
        if (mode == "hide") {
          el.from.opacity = 1;
          el.to.opacity = 0;
        }
      }
      options.from = el.from;
      options.to = el.to;
      options.mode = mode;
      el.effect("size", options, o.duration, o.callback);
      el.dequeue();
    });
  };
  $.effects.size = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"];
      var props1 = ["position", "top", "bottom", "left", "right", "overflow", "opacity"];
      var props2 = ["width", "height", "overflow"];
      var cProps = ["fontSize"];
      var vProps = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"];
      var hProps = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"];
      var mode = $.effects.setMode(el, o.options.mode || "effect");
      var restore = o.options.restore || false;
      var scale = o.options.scale || "both";
      var origin = o.options.origin;
      var original = {height:el.height(), width:el.width()};
      el.from = o.options.from || original;
      el.to = o.options.to || original;
      if (origin) {
        var baseline = $.effects.getBaseline(origin, original);
        el.from.top = (original.height - el.from.height) * baseline.y;
        el.from.left = (original.width - el.from.width) * baseline.x;
        el.to.top = (original.height - el.to.height) * baseline.y;
        el.to.left = (original.width - el.to.width) * baseline.x;
      }
      var factor = {from:{y:el.from.height / original.height, x:el.from.width / original.width}, to:{y:el.to.height / original.height, x:el.to.width / original.width}};
      if (scale == "box" || scale == "both") {
        if (factor.from.y != factor.to.y) {
          props = props.concat(vProps);
          el.from = $.effects.setTransition(el, vProps, factor.from.y, el.from);
          el.to = $.effects.setTransition(el, vProps, factor.to.y, el.to);
        }
        if (factor.from.x != factor.to.x) {
          props = props.concat(hProps);
          el.from = $.effects.setTransition(el, hProps, factor.from.x, el.from);
          el.to = $.effects.setTransition(el, hProps, factor.to.x, el.to);
        }
      }
      if (scale == "content" || scale == "both") {
        if (factor.from.y != factor.to.y) {
          props = props.concat(cProps);
          el.from = $.effects.setTransition(el, cProps, factor.from.y, el.from);
          el.to = $.effects.setTransition(el, cProps, factor.to.y, el.to);
        }
      }
      $.effects.save(el, restore ? props : props1);
      el.show();
      $.effects.createWrapper(el);
      el.css("overflow", "hidden").css(el.from);
      if (scale == "content" || scale == "both") {
        vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps);
        hProps = hProps.concat(["marginLeft", "marginRight"]);
        props2 = props.concat(vProps).concat(hProps);
        el.find("*[width]").each(function() {
          child = $(this);
          if (restore) {
            $.effects.save(child, props2);
          }
          var c_original = {height:child.height(), width:child.width()};
          child.from = {height:c_original.height * factor.from.y, width:c_original.width * factor.from.x};
          child.to = {height:c_original.height * factor.to.y, width:c_original.width * factor.to.x};
          if (factor.from.y != factor.to.y) {
            child.from = $.effects.setTransition(child, vProps, factor.from.y, child.from);
            child.to = $.effects.setTransition(child, vProps, factor.to.y, child.to);
          }
          if (factor.from.x != factor.to.x) {
            child.from = $.effects.setTransition(child, hProps, factor.from.x, child.from);
            child.to = $.effects.setTransition(child, hProps, factor.to.x, child.to);
          }
          child.css(child.from);
          child.animate(child.to, o.duration, o.options.easing, function() {
            if (restore) {
              $.effects.restore(child, props2);
            }
          });
        });
      }
      el.animate(el.to, {queue:false, duration:o.duration, easing:o.options.easing, complete:function() {
        if (el.to.opacity === 0) {
          el.css("opacity", el.from.opacity);
        }
        if (mode == "hide") {
          el.hide();
        }
        $.effects.restore(el, restore ? props : props1);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(this, arguments);
        }
        el.dequeue();
      }});
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.shake = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right"];
      var mode = $.effects.setMode(el, o.options.mode || "effect");
      var direction = o.options.direction || "left";
      var distance = o.options.distance || 20;
      var times = o.options.times || 3;
      var speed = o.duration || o.options.duration || 140;
      $.effects.save(el, props);
      el.show();
      $.effects.createWrapper(el);
      var ref = direction == "up" || direction == "down" ? "top" : "left";
      var motion = direction == "up" || direction == "left" ? "pos" : "neg";
      var animation = {}, animation1 = {}, animation2 = {};
      animation[ref] = (motion == "pos" ? "-=" : "+=") + distance;
      animation1[ref] = (motion == "pos" ? "+=" : "-=") + distance * 2;
      animation2[ref] = (motion == "pos" ? "-=" : "+=") + distance * 2;
      el.animate(animation, speed, o.options.easing);
      for (var i = 1; i < times; i++) {
        el.animate(animation1, speed, o.options.easing).animate(animation2, speed, o.options.easing);
      }
      el.animate(animation1, speed, o.options.easing).animate(animation, speed / 2, o.options.easing, function() {
        $.effects.restore(el, props);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(this, arguments);
        }
      });
      el.queue("fx", function() {
        el.dequeue();
      });
      el.dequeue();
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.slide = function(o) {
    return this.queue(function() {
      var el = $(this), props = ["position", "top", "bottom", "left", "right"];
      var mode = $.effects.setMode(el, o.options.mode || "show");
      var direction = o.options.direction || "left";
      $.effects.save(el, props);
      el.show();
      $.effects.createWrapper(el).css({overflow:"hidden"});
      var ref = direction == "up" || direction == "down" ? "top" : "left";
      var motion = direction == "up" || direction == "left" ? "pos" : "neg";
      var distance = o.options.distance || (ref == "top" ? el.outerHeight({margin:true}) : el.outerWidth({margin:true}));
      if (mode == "show") {
        el.css(ref, motion == "pos" ? isNaN(distance) ? "-" + distance : -distance : distance);
      }
      var animation = {};
      animation[ref] = (mode == "show" ? motion == "pos" ? "+=" : "-=" : motion == "pos" ? "-=" : "+=") + distance;
      el.animate(animation, {queue:false, duration:o.duration, easing:o.options.easing, complete:function() {
        if (mode == "hide") {
          el.hide();
        }
        $.effects.restore(el, props);
        $.effects.removeWrapper(el);
        if (o.callback) {
          o.callback.apply(this, arguments);
        }
        el.dequeue();
      }});
    });
  };
})(jQuery);
(function($, undefined) {
  $.effects.transfer = function(o) {
    return this.queue(function() {
      var elem = $(this), target = $(o.options.to), endPosition = target.offset(), animation = {top:endPosition.top, left:endPosition.left, height:target.innerHeight(), width:target.innerWidth()}, startPosition = elem.offset(), transfer = $('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(o.options.className).css({top:startPosition.top, left:startPosition.left, height:elem.innerHeight(), width:elem.innerWidth(), position:"absolute"}).animate(animation, o.duration, o.options.easing, 
      function() {
        transfer.remove();
        o.callback && o.callback.apply(elem[0], arguments);
        elem.dequeue();
      });
    });
  };
})(jQuery);
(function($, undefined) {
  $.widget("ui.accordion", {options:{active:0, animated:"slide", autoHeight:true, clearStyle:false, collapsible:false, event:"click", fillSpace:false, header:"> li > :first-child,> :not(li):even", icons:{header:"ui-icon-triangle-1-e", headerSelected:"ui-icon-triangle-1-s"}, navigation:false, navigationFilter:function() {
    return this.href.toLowerCase() === location.href.toLowerCase();
  }}, _create:function() {
    var self = this, options = self.options;
    self.running = 0;
    self.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
    self.headers = self.element.find(options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
      if (options.disabled) {
        return;
      }
      $(this).addClass("ui-state-hover");
    }).bind("mouseleave.accordion", function() {
      if (options.disabled) {
        return;
      }
      $(this).removeClass("ui-state-hover");
    }).bind("focus.accordion", function() {
      if (options.disabled) {
        return;
      }
      $(this).addClass("ui-state-focus");
    }).bind("blur.accordion", function() {
      if (options.disabled) {
        return;
      }
      $(this).removeClass("ui-state-focus");
    });
    self.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
    if (options.navigation) {
      var current = self.element.find("a").filter(options.navigationFilter).eq(0);
      if (current.length) {
        var header = current.closest(".ui-accordion-header");
        if (header.length) {
          self.active = header;
        } else {
          self.active = current.closest(".ui-accordion-content").prev();
        }
      }
    }
    self.active = self._findActive(self.active || options.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
    self.active.next().addClass("ui-accordion-content-active");
    self._createIcons();
    self.resize();
    self.element.attr("role", "tablist");
    self.headers.attr("role", "tab").bind("keydown.accordion", function(event) {
      return self._keydown(event);
    }).next().attr("role", "tabpanel");
    self.headers.not(self.active || "").attr({"aria-expanded":"false", "aria-selected":"false", tabIndex:-1}).next().hide();
    if (!self.active.length) {
      self.headers.eq(0).attr("tabIndex", 0);
    } else {
      self.active.attr({"aria-expanded":"true", "aria-selected":"true", tabIndex:0});
    }
    if (!$.browser.safari) {
      self.headers.find("a").attr("tabIndex", -1);
    }
    if (options.event) {
      self.headers.bind(options.event.split(" ").join(".accordion ") + ".accordion", function(event) {
        self._clickHandler.call(self, event, this);
        event.preventDefault();
      });
    }
  }, _createIcons:function() {
    var options = this.options;
    if (options.icons) {
      $("<span></span>").addClass("ui-icon " + options.icons.header).prependTo(this.headers);
      this.active.children(".ui-icon").toggleClass(options.icons.header).toggleClass(options.icons.headerSelected);
      this.element.addClass("ui-accordion-icons");
    }
  }, _destroyIcons:function() {
    this.headers.children(".ui-icon").remove();
    this.element.removeClass("ui-accordion-icons");
  }, destroy:function() {
    var options = this.options;
    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
    this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
    this.headers.find("a").removeAttr("tabIndex");
    this._destroyIcons();
    var contents = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
    if (options.autoHeight || options.fillHeight) {
      contents.css("height", "");
    }
    return $.Widget.prototype.destroy.call(this);
  }, _setOption:function(key, value) {
    $.Widget.prototype._setOption.apply(this, arguments);
    if (key == "active") {
      this.activate(value);
    }
    if (key == "icons") {
      this._destroyIcons();
      if (value) {
        this._createIcons();
      }
    }
    if (key == "disabled") {
      this.headers.add(this.headers.next())[value ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled");
    }
  }, _keydown:function(event) {
    if (this.options.disabled || event.altKey || event.ctrlKey) {
      return;
    }
    var keyCode = $.ui.keyCode, length = this.headers.length, currentIndex = this.headers.index(event.target), toFocus = false;
    switch(event.keyCode) {
      case keyCode.RIGHT:
      case keyCode.DOWN:
        toFocus = this.headers[(currentIndex + 1) % length];
        break;
      case keyCode.LEFT:
      case keyCode.UP:
        toFocus = this.headers[(currentIndex - 1 + length) % length];
        break;
      case keyCode.SPACE:
      case keyCode.ENTER:
        this._clickHandler({target:event.target}, event.target);
        event.preventDefault();
    }
    if (toFocus) {
      $(event.target).attr("tabIndex", -1);
      $(toFocus).attr("tabIndex", 0);
      toFocus.focus();
      return false;
    }
    return true;
  }, resize:function() {
    var options = this.options, maxHeight;
    if (options.fillSpace) {
      if ($.browser.msie) {
        var defOverflow = this.element.parent().css("overflow");
        this.element.parent().css("overflow", "hidden");
      }
      maxHeight = this.element.parent().height();
      if ($.browser.msie) {
        this.element.parent().css("overflow", defOverflow);
      }
      this.headers.each(function() {
        maxHeight -= $(this).outerHeight(true);
      });
      this.headers.next().each(function() {
        $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
      }).css("overflow", "auto");
    } else {
      if (options.autoHeight) {
        maxHeight = 0;
        this.headers.next().each(function() {
          maxHeight = Math.max(maxHeight, $(this).height("").height());
        }).height(maxHeight);
      }
    }
    return this;
  }, activate:function(index) {
    this.options.active = index;
    var active = this._findActive(index)[0];
    this._clickHandler({target:active}, active);
    return this;
  }, _findActive:function(selector) {
    return selector ? typeof selector === "number" ? this.headers.filter(":eq(" + selector + ")") : this.headers.not(this.headers.not(selector)) : selector === false ? $([]) : this.headers.filter(":eq(0)");
  }, _clickHandler:function(event, target) {
    var options = this.options;
    if (options.disabled) {
      return;
    }
    if (!event.target) {
      if (!options.collapsible) {
        return;
      }
      this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(options.icons.headerSelected).addClass(options.icons.header);
      this.active.next().addClass("ui-accordion-content-active");
      var toHide = this.active.next(), data = {options:options, newHeader:$([]), oldHeader:options.active, newContent:$([]), oldContent:toHide}, toShow = this.active = $([]);
      this._toggle(toShow, toHide, data);
      return;
    }
    var clicked = $(event.currentTarget || target), clickedIsActive = clicked[0] === this.active[0];
    options.active = options.collapsible && clickedIsActive ? false : this.headers.index(clicked);
    if (this.running || !options.collapsible && clickedIsActive) {
      return;
    }
    var active = this.active, toShow = clicked.next(), toHide = this.active.next(), data = {options:options, newHeader:clickedIsActive && options.collapsible ? $([]) : clicked, oldHeader:this.active, newContent:clickedIsActive && options.collapsible ? $([]) : toShow, oldContent:toHide}, down = this.headers.index(this.active[0]) > this.headers.index(clicked[0]);
    this.active = clickedIsActive ? $([]) : clicked;
    this._toggle(toShow, toHide, data, clickedIsActive, down);
    active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(options.icons.headerSelected).addClass(options.icons.header);
    if (!clickedIsActive) {
      clicked.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(options.icons.header).addClass(options.icons.headerSelected);
      clicked.next().addClass("ui-accordion-content-active");
    }
    return;
  }, _toggle:function(toShow, toHide, data, clickedIsActive, down) {
    var self = this, options = self.options;
    self.toShow = toShow;
    self.toHide = toHide;
    self.data = data;
    var complete = function() {
      if (!self) {
        return;
      }
      return self._completed.apply(self, arguments);
    };
    self._trigger("changestart", null, self.data);
    self.running = toHide.size() === 0 ? toShow.size() : toHide.size();
    if (options.animated) {
      var animOptions = {};
      if (options.collapsible && clickedIsActive) {
        animOptions = {toShow:$([]), toHide:toHide, complete:complete, down:down, autoHeight:options.autoHeight || options.fillSpace};
      } else {
        animOptions = {toShow:toShow, toHide:toHide, complete:complete, down:down, autoHeight:options.autoHeight || options.fillSpace};
      }
      if (!options.proxied) {
        options.proxied = options.animated;
      }
      if (!options.proxiedDuration) {
        options.proxiedDuration = options.duration;
      }
      options.animated = $.isFunction(options.proxied) ? options.proxied(animOptions) : options.proxied;
      options.duration = $.isFunction(options.proxiedDuration) ? options.proxiedDuration(animOptions) : options.proxiedDuration;
      var animations = $.ui.accordion.animations, duration = options.duration, easing = options.animated;
      if (easing && !animations[easing] && !$.easing[easing]) {
        easing = "slide";
      }
      if (!animations[easing]) {
        animations[easing] = function(options) {
          this.slide(options, {easing:easing, duration:duration || 700});
        };
      }
      animations[easing](animOptions);
    } else {
      if (options.collapsible && clickedIsActive) {
        toShow.toggle();
      } else {
        toHide.hide();
        toShow.show();
      }
      complete(true);
    }
    toHide.prev().attr({"aria-expanded":"false", "aria-selected":"false", tabIndex:-1}).blur();
    toShow.prev().attr({"aria-expanded":"true", "aria-selected":"true", tabIndex:0}).focus();
  }, _completed:function(cancel) {
    this.running = cancel ? 0 : --this.running;
    if (this.running) {
      return;
    }
    if (this.options.clearStyle) {
      this.toShow.add(this.toHide).css({height:"", overflow:""});
    }
    this.toHide.removeClass("ui-accordion-content-active");
    if (this.toHide.length) {
      this.toHide.parent()[0].className = this.toHide.parent()[0].className;
    }
    this._trigger("change", null, this.data);
  }});
  $.extend($.ui.accordion, {version:"1.8.18", animations:{slide:function(options, additions) {
    options = $.extend({easing:"swing", duration:300}, options, additions);
    if (!options.toHide.size()) {
      options.toShow.animate({height:"show", paddingTop:"show", paddingBottom:"show"}, options);
      return;
    }
    if (!options.toShow.size()) {
      options.toHide.animate({height:"hide", paddingTop:"hide", paddingBottom:"hide"}, options);
      return;
    }
    var overflow = options.toShow.css("overflow"), percentDone = 0, showProps = {}, hideProps = {}, fxAttrs = ["height", "paddingTop", "paddingBottom"], originalWidth;
    var s = options.toShow;
    originalWidth = s[0].style.width;
    s.width(s.parent().width() - parseFloat(s.css("paddingLeft")) - parseFloat(s.css("paddingRight")) - (parseFloat(s.css("borderLeftWidth")) || 0) - (parseFloat(s.css("borderRightWidth")) || 0));
    $.each(fxAttrs, function(i, prop) {
      hideProps[prop] = "hide";
      var parts = ("" + $.css(options.toShow[0], prop)).match(/^([\d+-.]+)(.*)$/);
      showProps[prop] = {value:parts[1], unit:parts[2] || "px"};
    });
    options.toShow.css({height:0, overflow:"hidden"}).show();
    options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate(hideProps, {step:function(now, settings) {
      if (settings.prop == "height") {
        percentDone = settings.end - settings.start === 0 ? 0 : (settings.now - settings.start) / (settings.end - settings.start);
      }
      options.toShow[0].style[settings.prop] = percentDone * showProps[settings.prop].value + showProps[settings.prop].unit;
    }, duration:options.duration, easing:options.easing, complete:function() {
      if (!options.autoHeight) {
        options.toShow.css("height", "");
      }
      options.toShow.css({width:originalWidth, overflow:overflow});
      options.complete();
    }});
  }, bounceslide:function(options) {
    this.slide(options, {easing:options.down ? "easeOutBounce" : "swing", duration:options.down ? 1000 : 200});
  }}});
})(jQuery);
(function($, undefined) {
  var requestIndex = 0;
  $.widget("ui.autocomplete", {options:{appendTo:"body", autoFocus:false, delay:300, minLength:1, position:{my:"left top", at:"left bottom", collision:"none"}, source:null}, pending:0, _create:function() {
    var self = this, doc = this.element[0].ownerDocument, suppressKeyPress;
    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({role:"textbox", "aria-autocomplete":"list", "aria-haspopup":"true"}).bind("keydown.autocomplete", function(event) {
      if (self.options.disabled || self.element.propAttr("readOnly")) {
        return;
      }
      suppressKeyPress = false;
      var keyCode = $.ui.keyCode;
      switch(event.keyCode) {
        case keyCode.PAGE_UP:
          self._move("previousPage", event);
          break;
        case keyCode.PAGE_DOWN:
          self._move("nextPage", event);
          break;
        case keyCode.UP:
          self._move("previous", event);
          event.preventDefault();
          break;
        case keyCode.DOWN:
          self._move("next", event);
          event.preventDefault();
          break;
        case keyCode.ENTER:
        case keyCode.NUMPAD_ENTER:
          if (self.menu.active) {
            suppressKeyPress = true;
            event.preventDefault();
          }
        case keyCode.TAB:
          if (!self.menu.active) {
            return;
          }
          self.menu.select(event);
          break;
        case keyCode.ESCAPE:
          self.element.val(self.term);
          self.close(event);
          break;
        default:
          clearTimeout(self.searching);
          self.searching = setTimeout(function() {
            if (self.term != self.element.val()) {
              self.selectedItem = null;
              self.search(null, event);
            }
          }, self.options.delay);
          break;
      }
    }).bind("keypress.autocomplete", function(event) {
      if (suppressKeyPress) {
        suppressKeyPress = false;
        event.preventDefault();
      }
    }).bind("focus.autocomplete", function() {
      if (self.options.disabled) {
        return;
      }
      self.selectedItem = null;
      self.previous = self.element.val();
    }).bind("blur.autocomplete", function(event) {
      if (self.options.disabled) {
        return;
      }
      clearTimeout(self.searching);
      self.closing = setTimeout(function() {
        self.close(event);
        self._change(event);
      }, 150);
    });
    this._initSource();
    this.response = function() {
      return self._response.apply(self, arguments);
    };
    this.menu = $("<ul></ul>").addClass("ui-autocomplete").appendTo($(this.options.appendTo || "body", doc)[0]).mousedown(function(event) {
      var menuElement = self.menu.element[0];
      if (!$(event.target).closest(".ui-menu-item").length) {
        setTimeout(function() {
          $(document).one("mousedown", function(event) {
            if (event.target !== self.element[0] && event.target !== menuElement && !$.ui.contains(menuElement, event.target)) {
              self.close();
            }
          });
        }, 1);
      }
      setTimeout(function() {
        clearTimeout(self.closing);
      }, 13);
    }).menu({focus:function(event, ui) {
      var item = ui.item.data("item.autocomplete");
      if (false !== self._trigger("focus", event, {item:item})) {
        if (/^key/.test(event.originalEvent.type)) {
          self.element.val(item.value);
        }
      }
    }, selected:function(event, ui) {
      var item = ui.item.data("item.autocomplete"), previous = self.previous;
      if (self.element[0] !== doc.activeElement) {
        self.element.focus();
        self.previous = previous;
        setTimeout(function() {
          self.previous = previous;
          self.selectedItem = item;
        }, 1);
      }
      if (false !== self._trigger("select", event, {item:item})) {
        self.element.val(item.value);
      }
      self.term = self.element.val();
      self.close(event);
      self.selectedItem = item;
    }, blur:function(event, ui) {
      if (self.menu.element.is(":visible") && self.element.val() !== self.term) {
        self.element.val(self.term);
      }
    }}).zIndex(this.element.zIndex() + 1).css({top:0, left:0}).hide().data("menu");
    if ($.fn.bgiframe) {
      this.menu.element.bgiframe();
    }
    self.beforeunloadHandler = function() {
      self.element.removeAttr("autocomplete");
    };
    $(window).bind("beforeunload", self.beforeunloadHandler);
  }, destroy:function() {
    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
    this.menu.element.remove();
    $(window).unbind("beforeunload", this.beforeunloadHandler);
    $.Widget.prototype.destroy.call(this);
  }, _setOption:function(key, value) {
    $.Widget.prototype._setOption.apply(this, arguments);
    if (key === "source") {
      this._initSource();
    }
    if (key === "appendTo") {
      this.menu.element.appendTo($(value || "body", this.element[0].ownerDocument)[0]);
    }
    if (key === "disabled" && value && this.xhr) {
      this.xhr.abort();
    }
  }, _initSource:function() {
    var self = this, array, url;
    if ($.isArray(this.options.source)) {
      array = this.options.source;
      this.source = function(request, response) {
        response($.ui.autocomplete.filter(array, request.term));
      };
    } else {
      if (typeof this.options.source === "string") {
        url = this.options.source;
        this.source = function(request, response) {
          if (self.xhr) {
            self.xhr.abort();
          }
          self.xhr = $.ajax({url:url, data:request, dataType:"json", context:{autocompleteRequest:++requestIndex}, success:function(data, status) {
            if (this.autocompleteRequest === requestIndex) {
              response(data);
            }
          }, error:function() {
            if (this.autocompleteRequest === requestIndex) {
              response([]);
            }
          }});
        };
      } else {
        this.source = this.options.source;
      }
    }
  }, search:function(value, event) {
    value = value != null ? value : this.element.val();
    this.term = this.element.val();
    if (value.length < this.options.minLength) {
      return this.close(event);
    }
    clearTimeout(this.closing);
    if (this._trigger("search", event) === false) {
      return;
    }
    return this._search(value);
  }, _search:function(value) {
    this.pending++;
    this.element.addClass("ui-autocomplete-loading");
    this.source({term:value}, this.response);
  }, _response:function(content) {
    if (!this.options.disabled && content && content.length) {
      content = this._normalize(content);
      this._suggest(content);
      this._trigger("open");
    } else {
      this.close();
    }
    this.pending--;
    if (!this.pending) {
      this.element.removeClass("ui-autocomplete-loading");
    }
  }, close:function(event) {
    clearTimeout(this.closing);
    if (this.menu.element.is(":visible")) {
      this.menu.element.hide();
      this.menu.deactivate();
      this._trigger("close", event);
    }
  }, _change:function(event) {
    if (this.previous !== this.element.val()) {
      this._trigger("change", event, {item:this.selectedItem});
    }
  }, _normalize:function(items) {
    if (items.length && items[0].label && items[0].value) {
      return items;
    }
    return $.map(items, function(item) {
      if (typeof item === "string") {
        return {label:item, value:item};
      }
      return $.extend({label:item.label || item.value, value:item.value || item.label}, item);
    });
  }, _suggest:function(items) {
    var ul = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
    this._renderMenu(ul, items);
    this.menu.deactivate();
    this.menu.refresh();
    ul.show();
    this._resizeMenu();
    ul.position($.extend({of:this.element}, this.options.position));
    if (this.options.autoFocus) {
      this.menu.next(new $.Event("mouseover"));
    }
  }, _resizeMenu:function() {
    var ul = this.menu.element;
    ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()));
  }, _renderMenu:function(ul, items) {
    var self = this;
    $.each(items, function(index, item) {
      self._renderItem(ul, item);
    });
  }, _renderItem:function(ul, item) {
    return $("<li></li>").data("item.autocomplete", item).append($("<a></a>").text(item.label)).appendTo(ul);
  }, _move:function(direction, event) {
    if (!this.menu.element.is(":visible")) {
      this.search(null, event);
      return;
    }
    if (this.menu.first() && /^previous/.test(direction) || this.menu.last() && /^next/.test(direction)) {
      this.element.val(this.term);
      this.menu.deactivate();
      return;
    }
    this.menu[direction](event);
  }, widget:function() {
    return this.menu.element;
  }});
  $.extend($.ui.autocomplete, {escapeRegex:function(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }, filter:function(array, term) {
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
    return $.grep(array, function(value) {
      return matcher.test(value.label || value.value || value);
    });
  }});
})(jQuery);
(function($) {
  $.widget("ui.menu", {_create:function() {
    var self = this;
    this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox", "aria-activedescendant":"ui-active-menuitem"}).click(function(event) {
      if (!$(event.target).closest(".ui-menu-item a").length) {
        return;
      }
      event.preventDefault();
      self.select(event);
    });
    this.refresh();
  }, refresh:function() {
    var self = this;
    var items = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
    items.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(event) {
      self.activate(event, $(this).parent());
    }).mouseleave(function() {
      self.deactivate();
    });
  }, activate:function(event, item) {
    this.deactivate();
    if (this.hasScroll()) {
      var offset = item.offset().top - this.element.offset().top, scroll = this.element.scrollTop(), elementHeight = this.element.height();
      if (offset < 0) {
        this.element.scrollTop(scroll + offset);
      } else {
        if (offset >= elementHeight) {
          this.element.scrollTop(scroll + offset - elementHeight + item.height());
        }
      }
    }
    this.active = item.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
    this._trigger("focus", event, {item:item});
  }, deactivate:function() {
    if (!this.active) {
      return;
    }
    this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
    this._trigger("blur");
    this.active = null;
  }, next:function(event) {
    this.move("next", ".ui-menu-item:first", event);
  }, previous:function(event) {
    this.move("prev", ".ui-menu-item:last", event);
  }, first:function() {
    return this.active && !this.active.prevAll(".ui-menu-item").length;
  }, last:function() {
    return this.active && !this.active.nextAll(".ui-menu-item").length;
  }, move:function(direction, edge, event) {
    if (!this.active) {
      this.activate(event, this.element.children(edge));
      return;
    }
    var next = this.active[direction + "All"](".ui-menu-item").eq(0);
    if (next.length) {
      this.activate(event, next);
    } else {
      this.activate(event, this.element.children(edge));
    }
  }, nextPage:function(event) {
    if (this.hasScroll()) {
      if (!this.active || this.last()) {
        this.activate(event, this.element.children(".ui-menu-item:first"));
        return;
      }
      var base = this.active.offset().top, height = this.element.height(), result = this.element.children(".ui-menu-item").filter(function() {
        var close = $(this).offset().top - base - height + $(this).height();
        return close < 10 && close > -10;
      });
      if (!result.length) {
        result = this.element.children(".ui-menu-item:last");
      }
      this.activate(event, result);
    } else {
      this.activate(event, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"));
    }
  }, previousPage:function(event) {
    if (this.hasScroll()) {
      if (!this.active || this.first()) {
        this.activate(event, this.element.children(".ui-menu-item:last"));
        return;
      }
      var base = this.active.offset().top, height = this.element.height();
      result = this.element.children(".ui-menu-item").filter(function() {
        var close = $(this).offset().top - base + height - $(this).height();
        return close < 10 && close > -10;
      });
      if (!result.length) {
        result = this.element.children(".ui-menu-item:first");
      }
      this.activate(event, result);
    } else {
      this.activate(event, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"));
    }
  }, hasScroll:function() {
    return this.element.height() < this.element[$.fn.prop ? "prop" : "attr"]("scrollHeight");
  }, select:function(event) {
    this._trigger("selected", event, {item:this.active});
  }});
})(jQuery);
(function($, undefined) {
  var lastActive, startXPos, startYPos, clickDragged, baseClasses = "ui-button ui-widget ui-state-default ui-corner-all", stateClasses = "ui-state-hover ui-state-active ", typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", formResetHandler = function() {
    var buttons = $(this).find(":ui-button");
    setTimeout(function() {
      buttons.button("refresh");
    }, 1);
  }, radioGroup = function(radio) {
    var name = radio.name, form = radio.form, radios = $([]);
    if (name) {
      if (form) {
        radios = $(form).find("[name='" + name + "']");
      } else {
        radios = $("[name='" + name + "']", radio.ownerDocument).filter(function() {
          return !this.form;
        });
      }
    }
    return radios;
  };
  $.widget("ui.button", {options:{disabled:null, text:true, label:null, icons:{primary:null, secondary:null}}, _create:function() {
    this.element.closest("form").unbind("reset.button").bind("reset.button", formResetHandler);
    if (typeof this.options.disabled !== "boolean") {
      this.options.disabled = !!this.element.propAttr("disabled");
    } else {
      this.element.propAttr("disabled", this.options.disabled);
    }
    this._determineButtonType();
    this.hasTitle = !!this.buttonElement.attr("title");
    var self = this, options = this.options, toggleButton = this.type === "checkbox" || this.type === "radio", hoverClass = "ui-state-hover" + (!toggleButton ? " ui-state-active" : ""), focusClass = "ui-state-focus";
    if (options.label === null) {
      options.label = this.buttonElement.html();
    }
    this.buttonElement.addClass(baseClasses).attr("role", "button").bind("mouseenter.button", function() {
      if (options.disabled) {
        return;
      }
      $(this).addClass("ui-state-hover");
      if (this === lastActive) {
        $(this).addClass("ui-state-active");
      }
    }).bind("mouseleave.button", function() {
      if (options.disabled) {
        return;
      }
      $(this).removeClass(hoverClass);
    }).bind("click.button", function(event) {
      if (options.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });
    this.element.bind("focus.button", function() {
      self.buttonElement.addClass(focusClass);
    }).bind("blur.button", function() {
      self.buttonElement.removeClass(focusClass);
    });
    if (toggleButton) {
      this.element.bind("change.button", function() {
        if (clickDragged) {
          return;
        }
        self.refresh();
      });
      this.buttonElement.bind("mousedown.button", function(event) {
        if (options.disabled) {
          return;
        }
        clickDragged = false;
        startXPos = event.pageX;
        startYPos = event.pageY;
      }).bind("mouseup.button", function(event) {
        if (options.disabled) {
          return;
        }
        if (startXPos !== event.pageX || startYPos !== event.pageY) {
          clickDragged = true;
        }
      });
    }
    if (this.type === "checkbox") {
      this.buttonElement.bind("click.button", function() {
        if (options.disabled || clickDragged) {
          return false;
        }
        $(this).toggleClass("ui-state-active");
        self.buttonElement.attr("aria-pressed", self.element[0].checked);
      });
    } else {
      if (this.type === "radio") {
        this.buttonElement.bind("click.button", function() {
          if (options.disabled || clickDragged) {
            return false;
          }
          $(this).addClass("ui-state-active");
          self.buttonElement.attr("aria-pressed", "true");
          var radio = self.element[0];
          radioGroup(radio).not(radio).map(function() {
            return $(this).button("widget")[0];
          }).removeClass("ui-state-active").attr("aria-pressed", "false");
        });
      } else {
        this.buttonElement.bind("mousedown.button", function() {
          if (options.disabled) {
            return false;
          }
          $(this).addClass("ui-state-active");
          lastActive = this;
          $(document).one("mouseup", function() {
            lastActive = null;
          });
        }).bind("mouseup.button", function() {
          if (options.disabled) {
            return false;
          }
          $(this).removeClass("ui-state-active");
        }).bind("keydown.button", function(event) {
          if (options.disabled) {
            return false;
          }
          if (event.keyCode == $.ui.keyCode.SPACE || event.keyCode == $.ui.keyCode.ENTER) {
            $(this).addClass("ui-state-active");
          }
        }).bind("keyup.button", function() {
          $(this).removeClass("ui-state-active");
        });
        if (this.buttonElement.is("a")) {
          this.buttonElement.keyup(function(event) {
            if (event.keyCode === $.ui.keyCode.SPACE) {
              $(this).click();
            }
          });
        }
      }
    }
    this._setOption("disabled", options.disabled);
    this._resetButton();
  }, _determineButtonType:function() {
    if (this.element.is(":checkbox")) {
      this.type = "checkbox";
    } else {
      if (this.element.is(":radio")) {
        this.type = "radio";
      } else {
        if (this.element.is("input")) {
          this.type = "input";
        } else {
          this.type = "button";
        }
      }
    }
    if (this.type === "checkbox" || this.type === "radio") {
      var ancestor = this.element.parents().filter(":last"), labelSelector = "label[for='" + this.element.attr("id") + "']";
      this.buttonElement = ancestor.find(labelSelector);
      if (!this.buttonElement.length) {
        ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
        this.buttonElement = ancestor.filter(labelSelector);
        if (!this.buttonElement.length) {
          this.buttonElement = ancestor.find(labelSelector);
        }
      }
      this.element.addClass("ui-helper-hidden-accessible");
      var checked = this.element.is(":checked");
      if (checked) {
        this.buttonElement.addClass("ui-state-active");
      }
      this.buttonElement.attr("aria-pressed", checked);
    } else {
      this.buttonElement = this.element;
    }
  }, widget:function() {
    return this.buttonElement;
  }, destroy:function() {
    this.element.removeClass("ui-helper-hidden-accessible");
    this.buttonElement.removeClass(baseClasses + " " + stateClasses + " " + typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
    if (!this.hasTitle) {
      this.buttonElement.removeAttr("title");
    }
    $.Widget.prototype.destroy.call(this);
  }, _setOption:function(key, value) {
    $.Widget.prototype._setOption.apply(this, arguments);
    if (key === "disabled") {
      if (value) {
        this.element.propAttr("disabled", true);
      } else {
        this.element.propAttr("disabled", false);
      }
      return;
    }
    this._resetButton();
  }, refresh:function() {
    var isDisabled = this.element.is(":disabled");
    if (isDisabled !== this.options.disabled) {
      this._setOption("disabled", isDisabled);
    }
    if (this.type === "radio") {
      radioGroup(this.element[0]).each(function() {
        if ($(this).is(":checked")) {
          $(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true");
        } else {
          $(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
        }
      });
    } else {
      if (this.type === "checkbox") {
        if (this.element.is(":checked")) {
          this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true");
        } else {
          this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false");
        }
      }
    }
  }, _resetButton:function() {
    if (this.type === "input") {
      if (this.options.label) {
        this.element.val(this.options.label);
      }
      return;
    }
    var buttonElement = this.buttonElement.removeClass(typeClasses), buttonText = $("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(), icons = this.options.icons, multipleIcons = icons.primary && icons.secondary, buttonClasses = [];
    if (icons.primary || icons.secondary) {
      if (this.options.text) {
        buttonClasses.push("ui-button-text-icon" + (multipleIcons ? "s" : icons.primary ? "-primary" : "-secondary"));
      }
      if (icons.primary) {
        buttonElement.prepend("<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>");
      }
      if (icons.secondary) {
        buttonElement.append("<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>");
      }
      if (!this.options.text) {
        buttonClasses.push(multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only");
        if (!this.hasTitle) {
          buttonElement.attr("title", buttonText);
        }
      }
    } else {
      buttonClasses.push("ui-button-text-only");
    }
    buttonElement.addClass(buttonClasses.join(" "));
  }});
  $.widget("ui.buttonset", {options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"}, _create:function() {
    this.element.addClass("ui-buttonset");
  }, _init:function() {
    this.refresh();
  }, _setOption:function(key, value) {
    if (key === "disabled") {
      this.buttons.button("option", key, value);
    }
    $.Widget.prototype._setOption.apply(this, arguments);
  }, refresh:function() {
    var rtl = this.element.css("direction") === "rtl";
    this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
      return $(this).button("widget")[0];
    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(rtl ? "ui-corner-left" : "ui-corner-right").end().end();
  }, destroy:function() {
    this.element.removeClass("ui-buttonset");
    this.buttons.map(function() {
      return $(this).button("widget")[0];
    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
    $.Widget.prototype.destroy.call(this);
  }});
})(jQuery);
(function($, undefined) {
  $.extend($.ui, {datepicker:{version:"1.8.18"}});
  var PROP_NAME = "datepicker";
  var dpuuid = (new Date).getTime();
  var instActive;
  function Datepicker() {
    this.debug = false;
    this._curInst = null;
    this._keyEvent = false;
    this._disabledInputs = [];
    this._datepickerShowing = false;
    this._inDialog = false;
    this._mainDivId = "ui-datepicker-div";
    this._inlineClass = "ui-datepicker-inline";
    this._appendClass = "ui-datepicker-append";
    this._triggerClass = "ui-datepicker-trigger";
    this._dialogClass = "ui-datepicker-dialog";
    this._disableClass = "ui-datepicker-disabled";
    this._unselectableClass = "ui-datepicker-unselectable";
    this._currentClass = "ui-datepicker-current-day";
    this._dayOverClass = "ui-datepicker-days-cell-over";
    this.regional = [];
    this.regional[""] = {closeText:"Done", prevText:"Prev", nextText:"Next", currentText:"Today", monthNames:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin:["Su", 
    "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader:"Wk", dateFormat:"mm/dd/yy", firstDay:0, isRTL:false, showMonthAfterYear:false, yearSuffix:""};
    this._defaults = {showOn:"focus", showAnim:"fadeIn", showOptions:{}, defaultDate:null, appendText:"", buttonText:"...", buttonImage:"", buttonImageOnly:false, hideIfNoPrevNext:false, navigationAsDateFormat:false, gotoCurrent:false, changeMonth:false, changeYear:false, yearRange:"c-10:c+10", showOtherMonths:false, selectOtherMonths:false, showWeek:false, calculateWeek:this.iso8601Week, shortYearCutoff:"+10", minDate:null, maxDate:null, duration:"fast", beforeShowDay:null, beforeShow:null, onSelect:null, 
    onChangeMonthYear:null, onClose:null, numberOfMonths:1, showCurrentAtPos:0, stepMonths:1, stepBigMonths:12, altField:"", altFormat:"", constrainInput:true, showButtonPanel:false, autoSize:false, disabled:false};
    $.extend(this._defaults, this.regional[""]);
    this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
  }
  $.extend(Datepicker.prototype, {markerClassName:"hasDatepicker", maxRows:4, log:function() {
    if (this.debug) {
      console.log.apply("", arguments);
    }
  }, _widgetDatepicker:function() {
    return this.dpDiv;
  }, setDefaults:function(settings) {
    extendRemove(this._defaults, settings || {});
    return this;
  }, _attachDatepicker:function(target, settings) {
    var inlineSettings = null;
    for (var attrName in this._defaults) {
      var attrValue = target.getAttribute("date:" + attrName);
      if (attrValue) {
        inlineSettings = inlineSettings || {};
        try {
          inlineSettings[attrName] = eval(attrValue);
        } catch (err) {
          inlineSettings[attrName] = attrValue;
        }
      }
    }
    var nodeName = target.nodeName.toLowerCase();
    var inline = nodeName == "div" || nodeName == "span";
    if (!target.id) {
      this.uuid += 1;
      target.id = "dp" + this.uuid;
    }
    var inst = this._newInst($(target), inline);
    inst.settings = $.extend({}, settings || {}, inlineSettings || {});
    if (nodeName == "input") {
      this._connectDatepicker(target, inst);
    } else {
      if (inline) {
        this._inlineDatepicker(target, inst);
      }
    }
  }, _newInst:function(target, inline) {
    var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
    return {id:id, input:target, selectedDay:0, selectedMonth:0, selectedYear:0, drawMonth:0, drawYear:0, inline:inline, dpDiv:!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))};
  }, _connectDatepicker:function(target, inst) {
    var input = $(target);
    inst.append = $([]);
    inst.trigger = $([]);
    if (input.hasClass(this.markerClassName)) {
      return;
    }
    this._attachments(input, inst);
    input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
      inst.settings[key] = value;
    }).bind("getData.datepicker", function(event, key) {
      return this._get(inst, key);
    });
    this._autoSize(inst);
    $.data(target, PROP_NAME, inst);
    if (inst.settings.disabled) {
      this._disableDatepicker(target);
    }
  }, _attachments:function(input, inst) {
    var appendText = this._get(inst, "appendText");
    var isRTL = this._get(inst, "isRTL");
    if (inst.append) {
      inst.append.remove();
    }
    if (appendText) {
      inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
      input[isRTL ? "before" : "after"](inst.append);
    }
    input.unbind("focus", this._showDatepicker);
    if (inst.trigger) {
      inst.trigger.remove();
    }
    var showOn = this._get(inst, "showOn");
    if (showOn == "focus" || showOn == "both") {
      input.focus(this._showDatepicker);
    }
    if (showOn == "button" || showOn == "both") {
      var buttonText = this._get(inst, "buttonText");
      var buttonImage = this._get(inst, "buttonImage");
      inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({src:buttonImage, alt:buttonText, title:buttonText}) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({src:buttonImage, alt:buttonText, title:buttonText})));
      input[isRTL ? "before" : "after"](inst.trigger);
      inst.trigger.click(function() {
        if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
          $.datepicker._hideDatepicker();
        } else {
          if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
            $.datepicker._hideDatepicker();
            $.datepicker._showDatepicker(input[0]);
          } else {
            $.datepicker._showDatepicker(input[0]);
          }
        }
        return false;
      });
    }
  }, _autoSize:function(inst) {
    if (this._get(inst, "autoSize") && !inst.inline) {
      var date = new Date(2009, 12 - 1, 20);
      var dateFormat = this._get(inst, "dateFormat");
      if (dateFormat.match(/[DM]/)) {
        var findMax = function(names) {
          var max = 0;
          var maxI = 0;
          for (var i = 0; i < names.length; i++) {
            if (names[i].length > max) {
              max = names[i].length;
              maxI = i;
            }
          }
          return maxI;
        };
        date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")));
        date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay());
      }
      inst.input.attr("size", this._formatDate(inst, date).length);
    }
  }, _inlineDatepicker:function(target, inst) {
    var divSpan = $(target);
    if (divSpan.hasClass(this.markerClassName)) {
      return;
    }
    divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
      inst.settings[key] = value;
    }).bind("getData.datepicker", function(event, key) {
      return this._get(inst, key);
    });
    $.data(target, PROP_NAME, inst);
    this._setDate(inst, this._getDefaultDate(inst), true);
    this._updateDatepicker(inst);
    this._updateAlternate(inst);
    if (inst.settings.disabled) {
      this._disableDatepicker(target);
    }
    inst.dpDiv.css("display", "block");
  }, _dialogDatepicker:function(input, date, onSelect, settings, pos) {
    var inst = this._dialogInst;
    if (!inst) {
      this.uuid += 1;
      var id = "dp" + this.uuid;
      this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
      this._dialogInput.keydown(this._doKeyDown);
      $("body").append(this._dialogInput);
      inst = this._dialogInst = this._newInst(this._dialogInput, false);
      inst.settings = {};
      $.data(this._dialogInput[0], PROP_NAME, inst);
    }
    extendRemove(inst.settings, settings || {});
    date = date && date.constructor == Date ? this._formatDate(inst, date) : date;
    this._dialogInput.val(date);
    this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null;
    if (!this._pos) {
      var browserWidth = document.documentElement.clientWidth;
      var browserHeight = document.documentElement.clientHeight;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      this._pos = [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
    }
    this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
    inst.settings.onSelect = onSelect;
    this._inDialog = true;
    this.dpDiv.addClass(this._dialogClass);
    this._showDatepicker(this._dialogInput[0]);
    if ($.blockUI) {
      $.blockUI(this.dpDiv);
    }
    $.data(this._dialogInput[0], PROP_NAME, inst);
    return this;
  }, _destroyDatepicker:function(target) {
    var $target = $(target);
    var inst = $.data(target, PROP_NAME);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    var nodeName = target.nodeName.toLowerCase();
    $.removeData(target, PROP_NAME);
    if (nodeName == "input") {
      inst.append.remove();
      inst.trigger.remove();
      $target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp);
    } else {
      if (nodeName == "div" || nodeName == "span") {
        $target.removeClass(this.markerClassName).empty();
      }
    }
  }, _enableDatepicker:function(target) {
    var $target = $(target);
    var inst = $.data(target, PROP_NAME);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    var nodeName = target.nodeName.toLowerCase();
    if (nodeName == "input") {
      target.disabled = false;
      inst.trigger.filter("button").each(function() {
        this.disabled = false;
      }).end().filter("img").css({opacity:"1.0", cursor:""});
    } else {
      if (nodeName == "div" || nodeName == "span") {
        var inline = $target.children("." + this._inlineClass);
        inline.children().removeClass("ui-state-disabled");
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
      }
    }
    this._disabledInputs = $.map(this._disabledInputs, function(value) {
      return value == target ? null : value;
    });
  }, _disableDatepicker:function(target) {
    var $target = $(target);
    var inst = $.data(target, PROP_NAME);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    var nodeName = target.nodeName.toLowerCase();
    if (nodeName == "input") {
      target.disabled = true;
      inst.trigger.filter("button").each(function() {
        this.disabled = true;
      }).end().filter("img").css({opacity:"0.5", cursor:"default"});
    } else {
      if (nodeName == "div" || nodeName == "span") {
        var inline = $target.children("." + this._inlineClass);
        inline.children().addClass("ui-state-disabled");
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
      }
    }
    this._disabledInputs = $.map(this._disabledInputs, function(value) {
      return value == target ? null : value;
    });
    this._disabledInputs[this._disabledInputs.length] = target;
  }, _isDisabledDatepicker:function(target) {
    if (!target) {
      return false;
    }
    for (var i = 0; i < this._disabledInputs.length; i++) {
      if (this._disabledInputs[i] == target) {
        return true;
      }
    }
    return false;
  }, _getInst:function(target) {
    try {
      return $.data(target, PROP_NAME);
    } catch (err) {
      throw "Missing instance data for this datepicker";
    }
  }, _optionDatepicker:function(target, name, value) {
    var inst = this._getInst(target);
    if (arguments.length == 2 && typeof name == "string") {
      return name == "defaults" ? $.extend({}, $.datepicker._defaults) : inst ? name == "all" ? $.extend({}, inst.settings) : this._get(inst, name) : null;
    }
    var settings = name || {};
    if (typeof name == "string") {
      settings = {};
      settings[name] = value;
    }
    if (inst) {
      if (this._curInst == inst) {
        this._hideDatepicker();
      }
      var date = this._getDateDatepicker(target, true);
      var minDate = this._getMinMaxDate(inst, "min");
      var maxDate = this._getMinMaxDate(inst, "max");
      extendRemove(inst.settings, settings);
      if (minDate !== null && settings["dateFormat"] !== undefined && settings["minDate"] === undefined) {
        inst.settings.minDate = this._formatDate(inst, minDate);
      }
      if (maxDate !== null && settings["dateFormat"] !== undefined && settings["maxDate"] === undefined) {
        inst.settings.maxDate = this._formatDate(inst, maxDate);
      }
      this._attachments($(target), inst);
      this._autoSize(inst);
      this._setDate(inst, date);
      this._updateAlternate(inst);
      this._updateDatepicker(inst);
    }
  }, _changeDatepicker:function(target, name, value) {
    this._optionDatepicker(target, name, value);
  }, _refreshDatepicker:function(target) {
    var inst = this._getInst(target);
    if (inst) {
      this._updateDatepicker(inst);
    }
  }, _setDateDatepicker:function(target, date) {
    var inst = this._getInst(target);
    if (inst) {
      this._setDate(inst, date);
      this._updateDatepicker(inst);
      this._updateAlternate(inst);
    }
  }, _getDateDatepicker:function(target, noDefault) {
    var inst = this._getInst(target);
    if (inst && !inst.inline) {
      this._setDateFromField(inst, noDefault);
    }
    return inst ? this._getDate(inst) : null;
  }, _doKeyDown:function(event) {
    var inst = $.datepicker._getInst(event.target);
    var handled = true;
    var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
    inst._keyEvent = true;
    if ($.datepicker._datepickerShowing) {
      switch(event.keyCode) {
        case 9:
          $.datepicker._hideDatepicker();
          handled = false;
          break;
        case 13:
          var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
          if (sel[0]) {
            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
          }
          var onSelect = $.datepicker._get(inst, "onSelect");
          if (onSelect) {
            var dateStr = $.datepicker._formatDate(inst);
            onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
          } else {
            $.datepicker._hideDatepicker();
          }
          return false;
          break;
        case 27:
          $.datepicker._hideDatepicker();
          break;
        case 33:
          $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
          break;
        case 34:
          $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
          break;
        case 35:
          if (event.ctrlKey || event.metaKey) {
            $.datepicker._clearDate(event.target);
          }
          handled = event.ctrlKey || event.metaKey;
          break;
        case 36:
          if (event.ctrlKey || event.metaKey) {
            $.datepicker._gotoToday(event.target);
          }
          handled = event.ctrlKey || event.metaKey;
          break;
        case 37:
          if (event.ctrlKey || event.metaKey) {
            $.datepicker._adjustDate(event.target, isRTL ? +1 : -1, "D");
          }
          handled = event.ctrlKey || event.metaKey;
          if (event.originalEvent.altKey) {
            $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
          }
          break;
        case 38:
          if (event.ctrlKey || event.metaKey) {
            $.datepicker._adjustDate(event.target, -7, "D");
          }
          handled = event.ctrlKey || event.metaKey;
          break;
        case 39:
          if (event.ctrlKey || event.metaKey) {
            $.datepicker._adjustDate(event.target, isRTL ? -1 : +1, "D");
          }
          handled = event.ctrlKey || event.metaKey;
          if (event.originalEvent.altKey) {
            $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
          }
          break;
        case 40:
          if (event.ctrlKey || event.metaKey) {
            $.datepicker._adjustDate(event.target, +7, "D");
          }
          handled = event.ctrlKey || event.metaKey;
          break;
        default:
          handled = false;
      }
    } else {
      if (event.keyCode == 36 && event.ctrlKey) {
        $.datepicker._showDatepicker(this);
      } else {
        handled = false;
      }
    }
    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, _doKeyPress:function(event) {
    var inst = $.datepicker._getInst(event.target);
    if ($.datepicker._get(inst, "constrainInput")) {
      var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
      var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
      return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
    }
  }, _doKeyUp:function(event) {
    var inst = $.datepicker._getInst(event.target);
    if (inst.input.val() != inst.lastVal) {
      try {
        var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst));
        if (date) {
          $.datepicker._setDateFromField(inst);
          $.datepicker._updateAlternate(inst);
          $.datepicker._updateDatepicker(inst);
        }
      } catch (event$0) {
        $.datepicker.log(event$0);
      }
    }
    return true;
  }, _showDatepicker:function(input) {
    input = input.target || input;
    if (input.nodeName.toLowerCase() != "input") {
      input = $("input", input.parentNode)[0];
    }
    if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
      return;
    }
    var inst = $.datepicker._getInst(input);
    if ($.datepicker._curInst && $.datepicker._curInst != inst) {
      $.datepicker._curInst.dpDiv.stop(true, true);
      if (inst && $.datepicker._datepickerShowing) {
        $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
      }
    }
    var beforeShow = $.datepicker._get(inst, "beforeShow");
    var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
    if (beforeShowSettings === false) {
      return;
    }
    extendRemove(inst.settings, beforeShowSettings);
    inst.lastVal = null;
    $.datepicker._lastInput = input;
    $.datepicker._setDateFromField(inst);
    if ($.datepicker._inDialog) {
      input.value = "";
    }
    if (!$.datepicker._pos) {
      $.datepicker._pos = $.datepicker._findPos(input);
      $.datepicker._pos[1] += input.offsetHeight;
    }
    var isFixed = false;
    $(input).parents().each(function() {
      isFixed |= $(this).css("position") == "fixed";
      return !isFixed;
    });
    if (isFixed && $.browser.opera) {
      $.datepicker._pos[0] -= document.documentElement.scrollLeft;
      $.datepicker._pos[1] -= document.documentElement.scrollTop;
    }
    var offset = {left:$.datepicker._pos[0], top:$.datepicker._pos[1]};
    $.datepicker._pos = null;
    inst.dpDiv.empty();
    inst.dpDiv.css({position:"absolute", display:"block", top:"-1000px"});
    $.datepicker._updateDatepicker(inst);
    offset = $.datepicker._checkOffset(inst, offset, isFixed);
    inst.dpDiv.css({position:$.datepicker._inDialog && $.blockUI ? "static" : isFixed ? "fixed" : "absolute", display:"none", left:offset.left + "px", top:offset.top + "px"});
    if (!inst.inline) {
      var showAnim = $.datepicker._get(inst, "showAnim");
      var duration = $.datepicker._get(inst, "duration");
      var postProcess = function() {
        var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
        if (!!cover.length) {
          var borders = $.datepicker._getBorders(inst.dpDiv);
          cover.css({left:-borders[0], top:-borders[1], width:inst.dpDiv.outerWidth(), height:inst.dpDiv.outerHeight()});
        }
      };
      inst.dpDiv.zIndex($(input).zIndex() + 1);
      $.datepicker._datepickerShowing = true;
      if ($.effects && $.effects[showAnim]) {
        inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
      } else {
        inst.dpDiv[showAnim || "show"](showAnim ? duration : null, postProcess);
      }
      if (!showAnim || !duration) {
        postProcess();
      }
      if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
        inst.input.focus();
      }
      $.datepicker._curInst = inst;
    }
  }, _updateDatepicker:function(inst) {
    var self = this;
    self.maxRows = 4;
    var borders = $.datepicker._getBorders(inst.dpDiv);
    instActive = inst;
    inst.dpDiv.empty().append(this._generateHTML(inst));
    var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
    if (!!cover.length) {
      cover.css({left:-borders[0], top:-borders[1], width:inst.dpDiv.outerWidth(), height:inst.dpDiv.outerHeight()});
    }
    inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
    var numMonths = this._getNumberOfMonths(inst);
    var cols = numMonths[1];
    var width = 17;
    inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
    if (cols > 1) {
      inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", width * cols + "em");
    }
    inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
    inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
    if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
      inst.input.focus();
    }
    if (inst.yearshtml) {
      var origyearshtml = inst.yearshtml;
      setTimeout(function() {
        if (origyearshtml === inst.yearshtml && inst.yearshtml) {
          inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
        }
        origyearshtml = inst.yearshtml = null;
      }, 0);
    }
  }, _getBorders:function(elem) {
    var convert = function(value) {
      return {thin:1, medium:2, thick:3}[value] || value;
    };
    return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))];
  }, _checkOffset:function(inst, offset, isFixed) {
    var dpWidth = inst.dpDiv.outerWidth();
    var dpHeight = inst.dpDiv.outerHeight();
    var inputWidth = inst.input ? inst.input.outerWidth() : 0;
    var inputHeight = inst.input ? inst.input.outerHeight() : 0;
    var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
    var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();
    offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
    offset.left -= isFixed && offset.left == inst.input.offset().left ? $(document).scrollLeft() : 0;
    offset.top -= isFixed && offset.top == inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0;
    offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
    offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
    return offset;
  }, _findPos:function(obj) {
    var inst = this._getInst(obj);
    var isRTL = this._get(inst, "isRTL");
    while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
      obj = obj[isRTL ? "previousSibling" : "nextSibling"];
    }
    var position = $(obj).offset();
    return [position.left, position.top];
  }, _hideDatepicker:function(input) {
    var inst = this._curInst;
    if (!inst || input && inst != $.data(input, PROP_NAME)) {
      return;
    }
    if (this._datepickerShowing) {
      var showAnim = this._get(inst, "showAnim");
      var duration = this._get(inst, "duration");
      var self = this;
      var postProcess = function() {
        $.datepicker._tidyDialog(inst);
        self._curInst = null;
      };
      if ($.effects && $.effects[showAnim]) {
        inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
      } else {
        inst.dpDiv[showAnim == "slideDown" ? "slideUp" : showAnim == "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess);
      }
      if (!showAnim) {
        postProcess();
      }
      this._datepickerShowing = false;
      var onClose = this._get(inst, "onClose");
      if (onClose) {
        onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : "", inst]);
      }
      this._lastInput = null;
      if (this._inDialog) {
        this._dialogInput.css({position:"absolute", left:"0", top:"-100px"});
        if ($.blockUI) {
          $.unblockUI();
          $("body").append(this.dpDiv);
        }
      }
      this._inDialog = false;
    }
  }, _tidyDialog:function(inst) {
    inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
  }, _checkExternalClick:function(event) {
    if (!$.datepicker._curInst) {
      return;
    }
    var $target = $(event.target), inst = $.datepicker._getInst($target[0]);
    if ($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) || $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst) {
      $.datepicker._hideDatepicker();
    }
  }, _adjustDate:function(id, offset, period) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._isDisabledDatepicker(target[0])) {
      return;
    }
    this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
    this._updateDatepicker(inst);
  }, _gotoToday:function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, "gotoCurrent") && inst.currentDay) {
      inst.selectedDay = inst.currentDay;
      inst.drawMonth = inst.selectedMonth = inst.currentMonth;
      inst.drawYear = inst.selectedYear = inst.currentYear;
    } else {
      var date = new Date;
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
    }
    this._notifyChange(inst);
    this._adjustDate(target);
  }, _selectMonthYear:function(id, select, period) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
    this._notifyChange(inst);
    this._adjustDate(target);
  }, _selectDay:function(id, month, year, td) {
    var target = $(id);
    if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
      return;
    }
    var inst = this._getInst(target[0]);
    inst.selectedDay = inst.currentDay = $("a", td).html();
    inst.selectedMonth = inst.currentMonth = month;
    inst.selectedYear = inst.currentYear = year;
    this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
  }, _clearDate:function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    this._selectDate(target, "");
  }, _selectDate:function(id, dateStr) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    dateStr = dateStr != null ? dateStr : this._formatDate(inst);
    if (inst.input) {
      inst.input.val(dateStr);
    }
    this._updateAlternate(inst);
    var onSelect = this._get(inst, "onSelect");
    if (onSelect) {
      onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
    } else {
      if (inst.input) {
        inst.input.trigger("change");
      }
    }
    if (inst.inline) {
      this._updateDatepicker(inst);
    } else {
      this._hideDatepicker();
      this._lastInput = inst.input[0];
      if (typeof inst.input[0] != "object") {
        inst.input.focus();
      }
      this._lastInput = null;
    }
  }, _updateAlternate:function(inst) {
    var altField = this._get(inst, "altField");
    if (altField) {
      var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
      var date = this._getDate(inst);
      var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
      $(altField).each(function() {
        $(this).val(dateStr);
      });
    }
  }, noWeekends:function(date) {
    var day = date.getDay();
    return [day > 0 && day < 6, ""];
  }, iso8601Week:function(date) {
    var checkDate = new Date(date.getTime());
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    var time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  }, parseDate:function(format, value, settings) {
    if (format == null || value == null) {
      throw "Invalid arguments";
    }
    value = typeof value == "object" ? value.toString() : value + "";
    if (value == "") {
      return null;
    }
    var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
    shortYearCutoff = typeof shortYearCutoff != "string" ? shortYearCutoff : (new Date).getFullYear() % 100 + parseInt(shortYearCutoff, 10);
    var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
    var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
    var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
    var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
    var year = -1;
    var month = -1;
    var day = -1;
    var doy = -1;
    var literal = false;
    var lookAhead = function(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) == match;
      if (matches) {
        iFormat++;
      }
      return matches;
    };
    var getNumber = function(match) {
      var isDoubled = lookAhead(match);
      var size = match == "@" ? 14 : match == "!" ? 20 : match == "y" && isDoubled ? 4 : match == "o" ? 3 : 2;
      var digits = new RegExp("^\\d{1," + size + "}");
      var num = value.substring(iValue).match(digits);
      if (!num) {
        throw "Missing number at position " + iValue;
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    };
    var getName = function(match, shortNames, longNames) {
      var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
        return [[k, v]];
      }).sort(function(a, b) {
        return -(a[1].length - b[1].length);
      });
      var index = -1;
      $.each(names, function(i, pair) {
        var name = pair[1];
        if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
          index = pair[0];
          iValue += name.length;
          return false;
        }
      });
      if (index != -1) {
        return index + 1;
      } else {
        throw "Unknown name at position " + iValue;
      }
    };
    var checkLiteral = function() {
      if (value.charAt(iValue) != format.charAt(iFormat)) {
        throw "Unexpected literal at position " + iValue;
      }
      iValue++;
    };
    var iValue = 0;
    for (var iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch(format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", dayNamesShort, dayNames);
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", monthNamesShort, monthNames);
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            var date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      throw "Extra/unparsed characters found in date: " + value.substring(iValue);
    }
    if (year == -1) {
      year = (new Date).getFullYear();
    } else {
      if (year < 100) {
        year += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
      }
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        var dim = this._getDaysInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
      throw "Invalid date";
    }
    return date;
  }, ATOM:"yy-mm-dd", COOKIE:"D, dd M yy", ISO_8601:"yy-mm-dd", RFC_822:"D, d M y", RFC_850:"DD, dd-M-y", RFC_1036:"D, d M y", RFC_1123:"D, d M yy", RFC_2822:"D, d M yy", RSS:"D, d M y", TICKS:"!", TIMESTAMP:"@", W3C:"yy-mm-dd", _ticksTo1970:((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000, formatDate:function(format, date, settings) {
    if (!date) {
      return "";
    }
    var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
    var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
    var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
    var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
    var lookAhead = function(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) == match;
      if (matches) {
        iFormat++;
      }
      return matches;
    };
    var formatNumber = function(match, value, len) {
      var num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    };
    var formatName = function(match, value, shortNames, longNames) {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    var output = "";
    var literal = false;
    if (date) {
      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch(format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), dayNamesShort, dayNames);
              break;
            case "o":
              output += formatNumber("o", Math.round(((new Date(date.getFullYear(), date.getMonth(), date.getDate())).getTime() - (new Date(date.getFullYear(), 0, 0)).getTime()) / 86400000), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 10000 + this._ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }, _possibleChars:function(format) {
    var chars = "";
    var literal = false;
    var lookAhead = function(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) == match;
      if (matches) {
        iFormat++;
      }
      return matches;
    };
    for (var iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
          literal = false;
        } else {
          chars += format.charAt(iFormat);
        }
      } else {
        switch(format.charAt(iFormat)) {
          case "d":
          case "m":
          case "y":
          case "@":
            chars += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            if (lookAhead("'")) {
              chars += "'";
            } else {
              literal = true;
            }
            break;
          default:
            chars += format.charAt(iFormat);
        }
      }
    }
    return chars;
  }, _get:function(inst, name) {
    return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
  }, _setDateFromField:function(inst, noDefault) {
    if (inst.input.val() == inst.lastVal) {
      return;
    }
    var dateFormat = this._get(inst, "dateFormat");
    var dates = inst.lastVal = inst.input ? inst.input.val() : null;
    var date, defaultDate;
    date = defaultDate = this._getDefaultDate(inst);
    var settings = this._getFormatConfig(inst);
    try {
      date = this.parseDate(dateFormat, dates, settings) || defaultDate;
    } catch (event) {
      this.log(event);
      dates = noDefault ? "" : dates;
    }
    inst.selectedDay = date.getDate();
    inst.drawMonth = inst.selectedMonth = date.getMonth();
    inst.drawYear = inst.selectedYear = date.getFullYear();
    inst.currentDay = dates ? date.getDate() : 0;
    inst.currentMonth = dates ? date.getMonth() : 0;
    inst.currentYear = dates ? date.getFullYear() : 0;
    this._adjustInstDate(inst);
  }, _getDefaultDate:function(inst) {
    return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date));
  }, _determineDate:function(inst, date, defaultDate) {
    var offsetNumeric = function(offset) {
      var date = new Date;
      date.setDate(date.getDate() + offset);
      return date;
    };
    var offsetString = function(offset) {
      try {
        return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
      } catch (e) {
      }
      var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date;
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
      var matches = pattern.exec(offset);
      while (matches) {
        switch(matches[2] || "d") {
          case "d":
          case "D":
            day += parseInt(matches[1], 10);
            break;
          case "w":
          case "W":
            day += parseInt(matches[1], 10) * 7;
            break;
          case "m":
          case "M":
            month += parseInt(matches[1], 10);
            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
            break;
          case "y":
          case "Y":
            year += parseInt(matches[1], 10);
            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
            break;
        }
        matches = pattern.exec(offset);
      }
      return new Date(year, month, day);
    };
    var newDate = date == null || date === "" ? defaultDate : typeof date == "string" ? offsetString(date) : typeof date == "number" ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());
    newDate = newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate;
    if (newDate) {
      newDate.setHours(0);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
    }
    return this._daylightSavingAdjust(newDate);
  }, _daylightSavingAdjust:function(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }, _setDate:function(inst, date, noChange) {
    var clear = !date;
    var origMonth = inst.selectedMonth;
    var origYear = inst.selectedYear;
    var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date));
    inst.selectedDay = inst.currentDay = newDate.getDate();
    inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
    inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
    if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
      this._notifyChange(inst);
    }
    this._adjustInstDate(inst);
    if (inst.input) {
      inst.input.val(clear ? "" : this._formatDate(inst));
    }
  }, _getDate:function(inst) {
    var startDate = !inst.currentYear || inst.input && inst.input.val() == "" ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
    return startDate;
  }, _generateHTML:function(inst) {
    var today = new Date;
    today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
    var isRTL = this._get(inst, "isRTL");
    var showButtonPanel = this._get(inst, "showButtonPanel");
    var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
    var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
    var numMonths = this._getNumberOfMonths(inst);
    var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
    var stepMonths = this._get(inst, "stepMonths");
    var isMultiMonth = numMonths[0] != 1 || numMonths[1] != 1;
    var currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
    var minDate = this._getMinMaxDate(inst, "min");
    var maxDate = this._getMinMaxDate(inst, "max");
    var drawMonth = inst.drawMonth - showCurrentAtPos;
    var drawYear = inst.drawYear;
    if (drawMonth < 0) {
      drawMonth += 12;
      drawYear--;
    }
    if (maxDate) {
      var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));
      maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
      while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
        drawMonth--;
        if (drawMonth < 0) {
          drawMonth = 11;
          drawYear--;
        }
      }
    }
    inst.drawMonth = drawMonth;
    inst.drawYear = drawYear;
    var prevText = this._get(inst, "prevText");
    prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));
    var prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', -" + stepMonths + ", 'M');\"" + ' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + 
    (isRTL ? "e" : "w") + '">' + prevText + "</span></a>";
    var nextText = this._get(inst, "nextText");
    nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));
    var next = this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', +" + stepMonths + ", 'M');\"" + ' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + 
    (isRTL ? "w" : "e") + '">' + nextText + "</span></a>";
    var currentText = this._get(inst, "currentText");
    var gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
    currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
    var controls = !inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(inst, "closeText") + "</button>" : "";
    var buttonPanel = showButtonPanel ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + inst.id + "');\"" + ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
    var firstDay = parseInt(this._get(inst, "firstDay"), 10);
    firstDay = isNaN(firstDay) ? 0 : firstDay;
    var showWeek = this._get(inst, "showWeek");
    var dayNames = this._get(inst, "dayNames");
    var dayNamesShort = this._get(inst, "dayNamesShort");
    var dayNamesMin = this._get(inst, "dayNamesMin");
    var monthNames = this._get(inst, "monthNames");
    var monthNamesShort = this._get(inst, "monthNamesShort");
    var beforeShowDay = this._get(inst, "beforeShowDay");
    var showOtherMonths = this._get(inst, "showOtherMonths");
    var selectOtherMonths = this._get(inst, "selectOtherMonths");
    var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
    var defaultDate = this._getDefaultDate(inst);
    var html = "";
    for (var row = 0; row < numMonths[0]; row++) {
      var group = "";
      this.maxRows = 4;
      for (var col = 0; col < numMonths[1]; col++) {
        var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
        var cornerClass = " ui-corner-all";
        var calender = "";
        if (isMultiMonth) {
          calender += '<div class="ui-datepicker-group';
          if (numMonths[1] > 1) {
            switch(col) {
              case 0:
                calender += " ui-datepicker-group-first";
                cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                break;
              case numMonths[1] - 1:
                calender += " ui-datepicker-group-last";
                cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                break;
              default:
                calender += " ui-datepicker-group-middle";
                cornerClass = "";
                break;
            }
          }
          calender += '">';
        }
        calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && row == 0 ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
        var thead = showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "";
        for (var dow = 0; dow < 7; dow++) {
          var day = (dow + firstDay) % 7;
          thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>";
        }
        calender += thead + "</tr></thead><tbody>";
        var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
        if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
          inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
        }
        var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
        var curRows = Math.ceil((leadDays + daysInMonth) / 7);
        var numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows;
        this.maxRows = numRows;
        var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
        for (var dRow = 0; dRow < numRows; dRow++) {
          calender += "<tr>";
          var tbody = !showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>";
          for (var dow = 0; dow < 7; dow++) {
            var daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [true, ""];
            var otherMonth = printDate.getMonth() != drawMonth;
            var unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
            tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + (printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent || defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime() ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : 
            " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + inst.id + "'," + printDate.getMonth() + "," + printDate.getFullYear() + ', this);return false;"') + ">" + (otherMonth && !showOtherMonths ? 
            "&#xa0;" : unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>") + "</td>";
            printDate.setDate(printDate.getDate() + 1);
            printDate = this._daylightSavingAdjust(printDate);
          }
          calender += tbody + "</tr>";
        }
        drawMonth++;
        if (drawMonth > 11) {
          drawMonth = 0;
          drawYear++;
        }
        calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (numMonths[0] > 0 && col == numMonths[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
        group += calender;
      }
      html += group;
    }
    html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
    inst._keyEvent = false;
    return html;
  }, _generateMonthYearHeader:function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
    var changeMonth = this._get(inst, "changeMonth");
    var changeYear = this._get(inst, "changeYear");
    var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
    var html = '<div class="ui-datepicker-title">';
    var monthHtml = "";
    if (secondary || !changeMonth) {
      monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>";
    } else {
      var inMinYear = minDate && minDate.getFullYear() == drawYear;
      var inMaxYear = maxDate && maxDate.getFullYear() == drawYear;
      monthHtml += '<select class="ui-datepicker-month" ' + 'onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'M');\" " + ">";
      for (var month = 0; month < 12; month++) {
        if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
          monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>";
        }
      }
      monthHtml += "</select>";
    }
    if (!showMonthAfterYear) {
      html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
    }
    if (!inst.yearshtml) {
      inst.yearshtml = "";
      if (secondary || !changeYear) {
        html += '<span class="ui-datepicker-year">' + drawYear + "</span>";
      } else {
        var years = this._get(inst, "yearRange").split(":");
        var thisYear = (new Date).getFullYear();
        var determineYear = function(value) {
          var year = value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
          return isNaN(year) ? thisYear : year;
        };
        var year = determineYear(years[0]);
        var endYear = Math.max(year, determineYear(years[1] || ""));
        year = minDate ? Math.max(year, minDate.getFullYear()) : year;
        endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
        inst.yearshtml += '<select class="ui-datepicker-year" ' + 'onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'Y');\" " + ">";
        for (; year <= endYear; year++) {
          inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>";
        }
        inst.yearshtml += "</select>";
        html += inst.yearshtml;
        inst.yearshtml = null;
      }
    }
    html += this._get(inst, "yearSuffix");
    if (showMonthAfterYear) {
      html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
    }
    html += "</div>";
    return html;
  }, _adjustInstDate:function(inst, offset, period) {
    var year = inst.drawYear + (period == "Y" ? offset : 0);
    var month = inst.drawMonth + (period == "M" ? offset : 0);
    var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
    var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
    inst.selectedDay = date.getDate();
    inst.drawMonth = inst.selectedMonth = date.getMonth();
    inst.drawYear = inst.selectedYear = date.getFullYear();
    if (period == "M" || period == "Y") {
      this._notifyChange(inst);
    }
  }, _restrictMinMax:function(inst, date) {
    var minDate = this._getMinMaxDate(inst, "min");
    var maxDate = this._getMinMaxDate(inst, "max");
    var newDate = minDate && date < minDate ? minDate : date;
    newDate = maxDate && newDate > maxDate ? maxDate : newDate;
    return newDate;
  }, _notifyChange:function(inst) {
    var onChange = this._get(inst, "onChangeMonthYear");
    if (onChange) {
      onChange.apply(inst.input ? inst.input[0] : null, [inst.selectedYear, inst.selectedMonth + 1, inst]);
    }
  }, _getNumberOfMonths:function(inst) {
    var numMonths = this._get(inst, "numberOfMonths");
    return numMonths == null ? [1, 1] : typeof numMonths == "number" ? [1, numMonths] : numMonths;
  }, _getMinMaxDate:function(inst, minMax) {
    return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
  }, _getDaysInMonth:function(year, month) {
    return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }, _getFirstDayOfMonth:function(year, month) {
    return (new Date(year, month, 1)).getDay();
  }, _canAdjustMonth:function(inst, offset, curYear, curMonth) {
    var numMonths = this._getNumberOfMonths(inst);
    var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
    if (offset < 0) {
      date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
    }
    return this._isInRange(inst, date);
  }, _isInRange:function(inst, date) {
    var minDate = this._getMinMaxDate(inst, "min");
    var maxDate = this._getMinMaxDate(inst, "max");
    return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime());
  }, _getFormatConfig:function(inst) {
    var shortYearCutoff = this._get(inst, "shortYearCutoff");
    shortYearCutoff = typeof shortYearCutoff != "string" ? shortYearCutoff : (new Date).getFullYear() % 100 + parseInt(shortYearCutoff, 10);
    return {shortYearCutoff:shortYearCutoff, dayNamesShort:this._get(inst, "dayNamesShort"), dayNames:this._get(inst, "dayNames"), monthNamesShort:this._get(inst, "monthNamesShort"), monthNames:this._get(inst, "monthNames")};
  }, _formatDate:function(inst, day, month, year) {
    if (!day) {
      inst.currentDay = inst.selectedDay;
      inst.currentMonth = inst.selectedMonth;
      inst.currentYear = inst.selectedYear;
    }
    var date = day ? typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
    return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
  }});
  function bindHover(dpDiv) {
    var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return dpDiv.bind("mouseout", function(event) {
      var elem = $(event.target).closest(selector);
      if (!elem.length) {
        return;
      }
      elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
    }).bind("mouseover", function(event) {
      var elem = $(event.target).closest(selector);
      if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) || !elem.length) {
        return;
      }
      elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
      elem.addClass("ui-state-hover");
      if (elem.hasClass("ui-datepicker-prev")) {
        elem.addClass("ui-datepicker-prev-hover");
      }
      if (elem.hasClass("ui-datepicker-next")) {
        elem.addClass("ui-datepicker-next-hover");
      }
    });
  }
  function extendRemove(target, props) {
    $.extend(target, props);
    for (var name in props) {
      if (props[name] == null || props[name] == undefined) {
        target[name] = props[name];
      }
    }
    return target;
  }
  function isArray(a) {
    return a && ($.browser.safari && typeof a == "object" && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/));
  }
  $.fn.datepicker = function(options) {
    if (!this.length) {
      return this;
    }
    if (!$.datepicker.initialized) {
      $(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
      $.datepicker.initialized = true;
    }
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
      return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
    }
    if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
      return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
    }
    return this.each(function() {
      typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
    });
  };
  $.datepicker = new Datepicker;
  $.datepicker.initialized = false;
  $.datepicker.uuid = (new Date).getTime();
  $.datepicker.version = "1.8.18";
  window["DP_jQuery_" + dpuuid] = $;
})(jQuery);
(function($, undefined) {
  var uiDialogClasses = "ui-dialog " + "ui-widget " + "ui-widget-content " + "ui-corner-all ", sizeRelatedOptions = {buttons:true, height:true, maxHeight:true, maxWidth:true, minHeight:true, minWidth:true, width:true}, resizableRelatedOptions = {maxHeight:true, maxWidth:true, minHeight:true, minWidth:true}, attrFn = $.attrFn || {val:true, css:true, html:true, text:true, data:true, width:true, height:true, offset:true, click:true};
  $.widget("ui.dialog", {options:{autoOpen:true, buttons:{}, closeOnEscape:true, closeText:"close", dialogClass:"", draggable:true, hide:null, height:"auto", maxHeight:false, maxWidth:false, minHeight:150, minWidth:150, modal:false, position:{my:"center", at:"center", collision:"fit", using:function(pos) {
    var topOffset = $(this).css(pos).offset().top;
    if (topOffset < 0) {
      $(this).css("top", pos.top - topOffset);
    }
  }}, resizable:true, show:null, stack:true, title:"", width:300, zIndex:1000}, _create:function() {
    this.originalTitle = this.element.attr("title");
    if (typeof this.originalTitle !== "string") {
      this.originalTitle = "";
    }
    this.options.title = this.options.title || this.originalTitle;
    var self = this, options = self.options, title = options.title || "&#160;", titleId = $.ui.dialog.getTitleId(self.element), uiDialog = (self.uiDialog = $("<div></div>")).appendTo(document.body).hide().addClass(uiDialogClasses + options.dialogClass).css({zIndex:options.zIndex}).attr("tabIndex", -1).css("outline", 0).keydown(function(event) {
      if (options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) {
        self.close(event);
        event.preventDefault();
      }
    }).attr({role:"dialog", "aria-labelledby":titleId}).mousedown(function(event) {
      self.moveToTop(false, event);
    }), uiDialogContent = self.element.show().removeAttr("title").addClass("ui-dialog-content " + "ui-widget-content").appendTo(uiDialog), uiDialogTitlebar = (self.uiDialogTitlebar = $("<div></div>")).addClass("ui-dialog-titlebar " + "ui-widget-header " + "ui-corner-all " + "ui-helper-clearfix").prependTo(uiDialog), uiDialogTitlebarClose = $('<a href="#"></a>').addClass("ui-dialog-titlebar-close " + "ui-corner-all").attr("role", "button").hover(function() {
      uiDialogTitlebarClose.addClass("ui-state-hover");
    }, function() {
      uiDialogTitlebarClose.removeClass("ui-state-hover");
    }).focus(function() {
      uiDialogTitlebarClose.addClass("ui-state-focus");
    }).blur(function() {
      uiDialogTitlebarClose.removeClass("ui-state-focus");
    }).click(function(event) {
      self.close(event);
      return false;
    }).appendTo(uiDialogTitlebar), uiDialogTitlebarCloseText = (self.uiDialogTitlebarCloseText = $("<span></span>")).addClass("ui-icon " + "ui-icon-closethick").text(options.closeText).appendTo(uiDialogTitlebarClose), uiDialogTitle = $("<span></span>").addClass("ui-dialog-title").attr("id", titleId).html(title).prependTo(uiDialogTitlebar);
    if ($.isFunction(options.beforeclose) && !$.isFunction(options.beforeClose)) {
      options.beforeClose = options.beforeclose;
    }
    uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();
    if (options.draggable && $.fn.draggable) {
      self._makeDraggable();
    }
    if (options.resizable && $.fn.resizable) {
      self._makeResizable();
    }
    self._createButtons(options.buttons);
    self._isOpen = false;
    if ($.fn.bgiframe) {
      uiDialog.bgiframe();
    }
  }, _init:function() {
    if (this.options.autoOpen) {
      this.open();
    }
  }, destroy:function() {
    var self = this;
    if (self.overlay) {
      self.overlay.destroy();
    }
    self.uiDialog.hide();
    self.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
    self.uiDialog.remove();
    if (self.originalTitle) {
      self.element.attr("title", self.originalTitle);
    }
    return self;
  }, widget:function() {
    return this.uiDialog;
  }, close:function(event) {
    var self = this, maxZ, thisZ;
    if (false === self._trigger("beforeClose", event)) {
      return;
    }
    if (self.overlay) {
      self.overlay.destroy();
    }
    self.uiDialog.unbind("keypress.ui-dialog");
    self._isOpen = false;
    if (self.options.hide) {
      self.uiDialog.hide(self.options.hide, function() {
        self._trigger("close", event);
      });
    } else {
      self.uiDialog.hide();
      self._trigger("close", event);
    }
    $.ui.dialog.overlay.resize();
    if (self.options.modal) {
      maxZ = 0;
      $(".ui-dialog").each(function() {
        if (this !== self.uiDialog[0]) {
          thisZ = $(this).css("z-index");
          if (!isNaN(thisZ)) {
            maxZ = Math.max(maxZ, thisZ);
          }
        }
      });
      $.ui.dialog.maxZ = maxZ;
    }
    return self;
  }, isOpen:function() {
    return this._isOpen;
  }, moveToTop:function(force, event) {
    var self = this, options = self.options, saveScroll;
    if (options.modal && !force || !options.stack && !options.modal) {
      return self._trigger("focus", event);
    }
    if (options.zIndex > $.ui.dialog.maxZ) {
      $.ui.dialog.maxZ = options.zIndex;
    }
    if (self.overlay) {
      $.ui.dialog.maxZ += 1;
      self.overlay.$el.css("z-index", $.ui.dialog.overlay.maxZ = $.ui.dialog.maxZ);
    }
    saveScroll = {scrollTop:self.element.scrollTop(), scrollLeft:self.element.scrollLeft()};
    $.ui.dialog.maxZ += 1;
    self.uiDialog.css("z-index", $.ui.dialog.maxZ);
    self.element.attr(saveScroll);
    self._trigger("focus", event);
    return self;
  }, open:function() {
    if (this._isOpen) {
      return;
    }
    var self = this, options = self.options, uiDialog = self.uiDialog;
    self.overlay = options.modal ? new $.ui.dialog.overlay(self) : null;
    self._size();
    self._position(options.position);
    uiDialog.show(options.show);
    self.moveToTop(true);
    if (options.modal) {
      uiDialog.bind("keydown.ui-dialog", function(event) {
        if (event.keyCode !== $.ui.keyCode.TAB) {
          return;
        }
        var tabbables = $(":tabbable", this), first = tabbables.filter(":first"), last = tabbables.filter(":last");
        if (event.target === last[0] && !event.shiftKey) {
          first.focus(1);
          return false;
        } else {
          if (event.target === first[0] && event.shiftKey) {
            last.focus(1);
            return false;
          }
        }
      });
    }
    $(self.element.find(":tabbable").get().concat(uiDialog.find(".ui-dialog-buttonpane :tabbable").get().concat(uiDialog.get()))).eq(0).focus();
    self._isOpen = true;
    self._trigger("open");
    return self;
  }, _createButtons:function(buttons) {
    var self = this, hasButtons = false, uiDialogButtonPane = $("<div></div>").addClass("ui-dialog-buttonpane " + "ui-widget-content " + "ui-helper-clearfix"), uiButtonSet = $("<div></div>").addClass("ui-dialog-buttonset").appendTo(uiDialogButtonPane);
    self.uiDialog.find(".ui-dialog-buttonpane").remove();
    if (typeof buttons === "object" && buttons !== null) {
      $.each(buttons, function() {
        return !(hasButtons = true);
      });
    }
    if (hasButtons) {
      $.each(buttons, function(name, props) {
        props = $.isFunction(props) ? {click:props, text:name} : props;
        var button = $('<button type="button"></button>').click(function() {
          props.click.apply(self.element[0], arguments);
        }).appendTo(uiButtonSet);
        $.each(props, function(key, value) {
          if (key === "click") {
            return;
          }
          if (key in attrFn) {
            button[key](value);
          } else {
            button.attr(key, value);
          }
        });
        if ($.fn.button) {
          button.button();
        }
      });
      uiDialogButtonPane.appendTo(self.uiDialog);
    }
  }, _makeDraggable:function() {
    var self = this, options = self.options, doc = $(document), heightBeforeDrag;
    function filteredUi(ui) {
      return {position:ui.position, offset:ui.offset};
    }
    self.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close", handle:".ui-dialog-titlebar", containment:"document", start:function(event, ui) {
      heightBeforeDrag = options.height === "auto" ? "auto" : $(this).height();
      $(this).height($(this).height()).addClass("ui-dialog-dragging");
      self._trigger("dragStart", event, filteredUi(ui));
    }, drag:function(event, ui) {
      self._trigger("drag", event, filteredUi(ui));
    }, stop:function(event, ui) {
      options.position = [ui.position.left - doc.scrollLeft(), ui.position.top - doc.scrollTop()];
      $(this).removeClass("ui-dialog-dragging").height(heightBeforeDrag);
      self._trigger("dragStop", event, filteredUi(ui));
      $.ui.dialog.overlay.resize();
    }});
  }, _makeResizable:function(handles) {
    handles = handles === undefined ? this.options.resizable : handles;
    var self = this, options = self.options, position = self.uiDialog.css("position"), resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw";
    function filteredUi(ui) {
      return {originalPosition:ui.originalPosition, originalSize:ui.originalSize, position:ui.position, size:ui.size};
    }
    self.uiDialog.resizable({cancel:".ui-dialog-content", containment:"document", alsoResize:self.element, maxWidth:options.maxWidth, maxHeight:options.maxHeight, minWidth:options.minWidth, minHeight:self._minHeight(), handles:resizeHandles, start:function(event, ui) {
      $(this).addClass("ui-dialog-resizing");
      self._trigger("resizeStart", event, filteredUi(ui));
    }, resize:function(event, ui) {
      self._trigger("resize", event, filteredUi(ui));
    }, stop:function(event, ui) {
      $(this).removeClass("ui-dialog-resizing");
      options.height = $(this).height();
      options.width = $(this).width();
      self._trigger("resizeStop", event, filteredUi(ui));
      $.ui.dialog.overlay.resize();
    }}).css("position", position).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
  }, _minHeight:function() {
    var options = this.options;
    if (options.height === "auto") {
      return options.minHeight;
    } else {
      return Math.min(options.minHeight, options.height);
    }
  }, _position:function(position) {
    var myAt = [], offset = [0, 0], isVisible;
    if (position) {
      if (typeof position === "string" || typeof position === "object" && "0" in position) {
        myAt = position.split ? position.split(" ") : [position[0], position[1]];
        if (myAt.length === 1) {
          myAt[1] = myAt[0];
        }
        $.each(["left", "top"], function(i, offsetPosition) {
          if (+myAt[i] === myAt[i]) {
            offset[i] = myAt[i];
            myAt[i] = offsetPosition;
          }
        });
        position = {my:myAt.join(" "), at:myAt.join(" "), offset:offset.join(" ")};
      }
      position = $.extend({}, $.ui.dialog.prototype.options.position, position);
    } else {
      position = $.ui.dialog.prototype.options.position;
    }
    isVisible = this.uiDialog.is(":visible");
    if (!isVisible) {
      this.uiDialog.show();
    }
    this.uiDialog.css({top:0, left:0}).position($.extend({of:window}, position));
    if (!isVisible) {
      this.uiDialog.hide();
    }
  }, _setOptions:function(options) {
    var self = this, resizableOptions = {}, resize = false;
    $.each(options, function(key, value) {
      self._setOption(key, value);
      if (key in sizeRelatedOptions) {
        resize = true;
      }
      if (key in resizableRelatedOptions) {
        resizableOptions[key] = value;
      }
    });
    if (resize) {
      this._size();
    }
    if (this.uiDialog.is(":data(resizable)")) {
      this.uiDialog.resizable("option", resizableOptions);
    }
  }, _setOption:function(key, value) {
    var self = this, uiDialog = self.uiDialog;
    switch(key) {
      case "beforeclose":
        key = "beforeClose";
        break;
      case "buttons":
        self._createButtons(value);
        break;
      case "closeText":
        self.uiDialogTitlebarCloseText.text("" + value);
        break;
      case "dialogClass":
        uiDialog.removeClass(self.options.dialogClass).addClass(uiDialogClasses + value);
        break;
      case "disabled":
        if (value) {
          uiDialog.addClass("ui-dialog-disabled");
        } else {
          uiDialog.removeClass("ui-dialog-disabled");
        }
        break;
      case "draggable":
        var isDraggable = uiDialog.is(":data(draggable)");
        if (isDraggable && !value) {
          uiDialog.draggable("destroy");
        }
        if (!isDraggable && value) {
          self._makeDraggable();
        }
        break;
      case "position":
        self._position(value);
        break;
      case "resizable":
        var isResizable = uiDialog.is(":data(resizable)");
        if (isResizable && !value) {
          uiDialog.resizable("destroy");
        }
        if (isResizable && typeof value === "string") {
          uiDialog.resizable("option", "handles", value);
        }
        if (!isResizable && value !== false) {
          self._makeResizable(value);
        }
        break;
      case "title":
        $(".ui-dialog-title", self.uiDialogTitlebar).html("" + (value || "&#160;"));
        break;
    }
    $.Widget.prototype._setOption.apply(self, arguments);
  }, _size:function() {
    var options = this.options, nonContentHeight, minContentHeight, isVisible = this.uiDialog.is(":visible");
    this.element.show().css({width:"auto", minHeight:0, height:0});
    if (options.minWidth > options.width) {
      options.width = options.minWidth;
    }
    nonContentHeight = this.uiDialog.css({height:"auto", width:options.width}).height();
    minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
    if (options.height === "auto") {
      if ($.support.minHeight) {
        this.element.css({minHeight:minContentHeight, height:"auto"});
      } else {
        this.uiDialog.show();
        var autoHeight = this.element.css("height", "auto").height();
        if (!isVisible) {
          this.uiDialog.hide();
        }
        this.element.height(Math.max(autoHeight, minContentHeight));
      }
    } else {
      this.element.height(Math.max(options.height - nonContentHeight, 0));
    }
    if (this.uiDialog.is(":data(resizable)")) {
      this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }
  }});
  $.extend($.ui.dialog, {version:"1.8.18", uuid:0, maxZ:0, getTitleId:function($el) {
    var id = $el.attr("id");
    if (!id) {
      this.uuid += 1;
      id = this.uuid;
    }
    return "ui-dialog-title-" + id;
  }, overlay:function(dialog) {
    this.$el = $.ui.dialog.overlay.create(dialog);
  }});
  $.extend($.ui.dialog.overlay, {instances:[], oldInstances:[], maxZ:0, events:$.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(event) {
    return event + ".dialog-overlay";
  }).join(" "), create:function(dialog) {
    if (this.instances.length === 0) {
      setTimeout(function() {
        if ($.ui.dialog.overlay.instances.length) {
          $(document).bind($.ui.dialog.overlay.events, function(event) {
            if ($(event.target).zIndex() < $.ui.dialog.overlay.maxZ) {
              return false;
            }
          });
        }
      }, 1);
      $(document).bind("keydown.dialog-overlay", function(event) {
        if (dialog.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) {
          dialog.close(event);
          event.preventDefault();
        }
      });
      $(window).bind("resize.dialog-overlay", $.ui.dialog.overlay.resize);
    }
    var $el = (this.oldInstances.pop() || $("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(), height:this.height()});
    if ($.fn.bgiframe) {
      $el.bgiframe();
    }
    this.instances.push($el);
    return $el;
  }, destroy:function($el) {
    var indexOf = $.inArray($el, this.instances);
    if (indexOf != -1) {
      this.oldInstances.push(this.instances.splice(indexOf, 1)[0]);
    }
    if (this.instances.length === 0) {
      $([document, window]).unbind(".dialog-overlay");
    }
    $el.remove();
    var maxZ = 0;
    $.each(this.instances, function() {
      maxZ = Math.max(maxZ, this.css("z-index"));
    });
    this.maxZ = maxZ;
  }, height:function() {
    var scrollHeight, offsetHeight;
    if ($.browser.msie && $.browser.version < 7) {
      scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      offsetHeight = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
      if (scrollHeight < offsetHeight) {
        return $(window).height() + "px";
      } else {
        return scrollHeight + "px";
      }
    } else {
      return $(document).height() + "px";
    }
  }, width:function() {
    var scrollWidth, offsetWidth;
    if ($.browser.msie) {
      scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
      offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
      if (scrollWidth < offsetWidth) {
        return $(window).width() + "px";
      } else {
        return scrollWidth + "px";
      }
    } else {
      return $(document).width() + "px";
    }
  }, resize:function() {
    var $overlays = $([]);
    $.each($.ui.dialog.overlay.instances, function() {
      $overlays = $overlays.add(this);
    });
    $overlays.css({width:0, height:0}).css({width:$.ui.dialog.overlay.width(), height:$.ui.dialog.overlay.height()});
  }});
  $.extend($.ui.dialog.overlay.prototype, {destroy:function() {
    $.ui.dialog.overlay.destroy(this.$el);
  }});
})(jQuery);
(function($, undefined) {
  $.ui = $.ui || {};
  var horizontalPositions = /left|center|right/, verticalPositions = /top|center|bottom/, center = "center", support = {}, _position = $.fn.position, _offset = $.fn.offset;
  $.fn.position = function(options) {
    if (!options || !options.of) {
      return _position.apply(this, arguments);
    }
    options = $.extend({}, options);
    var target = $(options.of), targetElem = target[0], collision = (options.collision || "flip").split(" "), offset = options.offset ? options.offset.split(" ") : [0, 0], targetWidth, targetHeight, basePosition;
    if (targetElem.nodeType === 9) {
      targetWidth = target.width();
      targetHeight = target.height();
      basePosition = {top:0, left:0};
    } else {
      if (targetElem.setTimeout) {
        targetWidth = target.width();
        targetHeight = target.height();
        basePosition = {top:target.scrollTop(), left:target.scrollLeft()};
      } else {
        if (targetElem.preventDefault) {
          options.at = "left top";
          targetWidth = targetHeight = 0;
          basePosition = {top:options.of.pageY, left:options.of.pageX};
        } else {
          targetWidth = target.outerWidth();
          targetHeight = target.outerHeight();
          basePosition = target.offset();
        }
      }
    }
    $.each(["my", "at"], function() {
      var pos = (options[this] || "").split(" ");
      if (pos.length === 1) {
        pos = horizontalPositions.test(pos[0]) ? pos.concat([center]) : verticalPositions.test(pos[0]) ? [center].concat(pos) : [center, center];
      }
      pos[0] = horizontalPositions.test(pos[0]) ? pos[0] : center;
      pos[1] = verticalPositions.test(pos[1]) ? pos[1] : center;
      options[this] = pos;
    });
    if (collision.length === 1) {
      collision[1] = collision[0];
    }
    offset[0] = parseInt(offset[0], 10) || 0;
    if (offset.length === 1) {
      offset[1] = offset[0];
    }
    offset[1] = parseInt(offset[1], 10) || 0;
    if (options.at[0] === "right") {
      basePosition.left += targetWidth;
    } else {
      if (options.at[0] === center) {
        basePosition.left += targetWidth / 2;
      }
    }
    if (options.at[1] === "bottom") {
      basePosition.top += targetHeight;
    } else {
      if (options.at[1] === center) {
        basePosition.top += targetHeight / 2;
      }
    }
    basePosition.left += offset[0];
    basePosition.top += offset[1];
    return this.each(function() {
      var elem = $(this), elemWidth = elem.outerWidth(), elemHeight = elem.outerHeight(), marginLeft = parseInt($.curCSS(this, "marginLeft", true)) || 0, marginTop = parseInt($.curCSS(this, "marginTop", true)) || 0, collisionWidth = elemWidth + marginLeft + (parseInt($.curCSS(this, "marginRight", true)) || 0), collisionHeight = elemHeight + marginTop + (parseInt($.curCSS(this, "marginBottom", true)) || 0), position = $.extend({}, basePosition), collisionPosition;
      if (options.my[0] === "right") {
        position.left -= elemWidth;
      } else {
        if (options.my[0] === center) {
          position.left -= elemWidth / 2;
        }
      }
      if (options.my[1] === "bottom") {
        position.top -= elemHeight;
      } else {
        if (options.my[1] === center) {
          position.top -= elemHeight / 2;
        }
      }
      if (!support.fractions) {
        position.left = Math.round(position.left);
        position.top = Math.round(position.top);
      }
      collisionPosition = {left:position.left - marginLeft, top:position.top - marginTop};
      $.each(["left", "top"], function(i, dir) {
        if ($.ui.position[collision[i]]) {
          $.ui.position[collision[i]][dir](position, {targetWidth:targetWidth, targetHeight:targetHeight, elemWidth:elemWidth, elemHeight:elemHeight, collisionPosition:collisionPosition, collisionWidth:collisionWidth, collisionHeight:collisionHeight, offset:offset, my:options.my, at:options.at});
        }
      });
      if ($.fn.bgiframe) {
        elem.bgiframe();
      }
      elem.offset($.extend(position, {using:options.using}));
    });
  };
  $.ui.position = {fit:{left:function(position, data) {
    var win = $(window), over = data.collisionPosition.left + data.collisionWidth - win.width() - win.scrollLeft();
    position.left = over > 0 ? position.left - over : Math.max(position.left - data.collisionPosition.left, position.left);
  }, top:function(position, data) {
    var win = $(window), over = data.collisionPosition.top + data.collisionHeight - win.height() - win.scrollTop();
    position.top = over > 0 ? position.top - over : Math.max(position.top - data.collisionPosition.top, position.top);
  }}, flip:{left:function(position, data) {
    if (data.at[0] === center) {
      return;
    }
    var win = $(window), over = data.collisionPosition.left + data.collisionWidth - win.width() - win.scrollLeft(), myOffset = data.my[0] === "left" ? -data.elemWidth : data.my[0] === "right" ? data.elemWidth : 0, atOffset = data.at[0] === "left" ? data.targetWidth : -data.targetWidth, offset = -2 * data.offset[0];
    position.left += data.collisionPosition.left < 0 ? myOffset + atOffset + offset : over > 0 ? myOffset + atOffset + offset : 0;
  }, top:function(position, data) {
    if (data.at[1] === center) {
      return;
    }
    var win = $(window), over = data.collisionPosition.top + data.collisionHeight - win.height() - win.scrollTop(), myOffset = data.my[1] === "top" ? -data.elemHeight : data.my[1] === "bottom" ? data.elemHeight : 0, atOffset = data.at[1] === "top" ? data.targetHeight : -data.targetHeight, offset = -2 * data.offset[1];
    position.top += data.collisionPosition.top < 0 ? myOffset + atOffset + offset : over > 0 ? myOffset + atOffset + offset : 0;
  }}};
  if (!$.offset.setOffset) {
    $.offset.setOffset = function(elem, options) {
      if (/static/.test($.curCSS(elem, "position"))) {
        elem.style.position = "relative";
      }
      var curElem = $(elem), curOffset = curElem.offset(), curTop = parseInt($.curCSS(elem, "top", true), 10) || 0, curLeft = parseInt($.curCSS(elem, "left", true), 10) || 0, props = {top:options.top - curOffset.top + curTop, left:options.left - curOffset.left + curLeft};
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    };
    $.fn.offset = function(options) {
      var elem = this[0];
      if (!elem || !elem.ownerDocument) {
        return null;
      }
      if (options) {
        return this.each(function() {
          $.offset.setOffset(this, options);
        });
      }
      return _offset.call(this);
    };
  }
  (function() {
    var body = document.getElementsByTagName("body")[0], div = document.createElement("div"), testElement, testElementParent, testElementStyle, offset, offsetTotal;
    testElement = document.createElement(body ? "div" : "body");
    testElementStyle = {visibility:"hidden", width:0, height:0, border:0, margin:0, background:"none"};
    if (body) {
      $.extend(testElementStyle, {position:"absolute", left:"-1000px", top:"-1000px"});
    }
    for (var i in testElementStyle) {
      testElement.style[i] = testElementStyle[i];
    }
    testElement.appendChild(div);
    testElementParent = body || document.documentElement;
    testElementParent.insertBefore(testElement, testElementParent.firstChild);
    div.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
    offset = $(div).offset(function(_, offset) {
      return offset;
    }).offset();
    testElement.innerHTML = "";
    testElementParent.removeChild(testElement);
    offsetTotal = offset.top + offset.left + (body ? 2000 : 0);
    support.fractions = offsetTotal > 21 && offsetTotal < 22;
  })();
})(jQuery);
(function($, undefined) {
  $.widget("ui.progressbar", {options:{value:0, max:100}, min:0, _create:function() {
    this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar", "aria-valuemin":this.min, "aria-valuemax":this.options.max, "aria-valuenow":this._value()});
    this.valueDiv = $("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
    this.oldValue = this._value();
    this._refreshValue();
  }, destroy:function() {
    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
    this.valueDiv.remove();
    $.Widget.prototype.destroy.apply(this, arguments);
  }, value:function(newValue) {
    if (newValue === undefined) {
      return this._value();
    }
    this._setOption("value", newValue);
    return this;
  }, _setOption:function(key, value) {
    if (key === "value") {
      this.options.value = value;
      this._refreshValue();
      if (this._value() === this.options.max) {
        this._trigger("complete");
      }
    }
    $.Widget.prototype._setOption.apply(this, arguments);
  }, _value:function() {
    var val = this.options.value;
    if (typeof val !== "number") {
      val = 0;
    }
    return Math.min(this.options.max, Math.max(this.min, val));
  }, _percentage:function() {
    return 100 * this._value() / this.options.max;
  }, _refreshValue:function() {
    var value = this.value();
    var percentage = this._percentage();
    if (this.oldValue !== value) {
      this.oldValue = value;
      this._trigger("change");
    }
    this.valueDiv.toggle(value > this.min).toggleClass("ui-corner-right", value === this.options.max).width(percentage.toFixed(0) + "%");
    this.element.attr("aria-valuenow", value);
  }});
  $.extend($.ui.progressbar, {version:"1.8.18"});
})(jQuery);
(function($, undefined) {
  var numPages = 5;
  $.widget("ui.slider", $.ui.mouse, {widgetEventPrefix:"slide", options:{animate:false, distance:0, max:100, min:0, orientation:"horizontal", range:false, step:1, value:0, values:null}, _create:function() {
    var self = this, o = this.options, existingHandles = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), handle = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", handleCount = o.values && o.values.length || 1, handles = [];
    this._keySliding = false;
    this._mouseSliding = false;
    this._animateOff = true;
    this._handleIndex = null;
    this._detectOrientation();
    this._mouseInit();
    this.element.addClass("ui-slider" + " ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (o.disabled ? " ui-slider-disabled ui-disabled" : ""));
    this.range = $([]);
    if (o.range) {
      if (o.range === true) {
        if (!o.values) {
          o.values = [this._valueMin(), this._valueMin()];
        }
        if (o.values.length && o.values.length !== 2) {
          o.values = [o.values[0], o.values[0]];
        }
      }
      this.range = $("<div></div>").appendTo(this.element).addClass("ui-slider-range" + " ui-widget-header" + (o.range === "min" || o.range === "max" ? " ui-slider-range-" + o.range : ""));
    }
    for (var i = existingHandles.length; i < handleCount; i += 1) {
      handles.push(handle);
    }
    this.handles = existingHandles.add($(handles.join("")).appendTo(self.element));
    this.handle = this.handles.eq(0);
    this.handles.add(this.range).filter("a").click(function(event) {
      event.preventDefault();
    }).hover(function() {
      if (!o.disabled) {
        $(this).addClass("ui-state-hover");
      }
    }, function() {
      $(this).removeClass("ui-state-hover");
    }).focus(function() {
      if (!o.disabled) {
        $(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
        $(this).addClass("ui-state-focus");
      } else {
        $(this).blur();
      }
    }).blur(function() {
      $(this).removeClass("ui-state-focus");
    });
    this.handles.each(function(i) {
      $(this).data("index.ui-slider-handle", i);
    });
    this.handles.keydown(function(event) {
      var index = $(this).data("index.ui-slider-handle"), allowed, curVal, newVal, step;
      if (self.options.disabled) {
        return;
      }
      switch(event.keyCode) {
        case $.ui.keyCode.HOME:
        case $.ui.keyCode.END:
        case $.ui.keyCode.PAGE_UP:
        case $.ui.keyCode.PAGE_DOWN:
        case $.ui.keyCode.UP:
        case $.ui.keyCode.RIGHT:
        case $.ui.keyCode.DOWN:
        case $.ui.keyCode.LEFT:
          event.preventDefault();
          if (!self._keySliding) {
            self._keySliding = true;
            $(this).addClass("ui-state-active");
            allowed = self._start(event, index);
            if (allowed === false) {
              return;
            }
          }
          break;
      }
      step = self.options.step;
      if (self.options.values && self.options.values.length) {
        curVal = newVal = self.values(index);
      } else {
        curVal = newVal = self.value();
      }
      switch(event.keyCode) {
        case $.ui.keyCode.HOME:
          newVal = self._valueMin();
          break;
        case $.ui.keyCode.END:
          newVal = self._valueMax();
          break;
        case $.ui.keyCode.PAGE_UP:
          newVal = self._trimAlignValue(curVal + (self._valueMax() - self._valueMin()) / numPages);
          break;
        case $.ui.keyCode.PAGE_DOWN:
          newVal = self._trimAlignValue(curVal - (self._valueMax() - self._valueMin()) / numPages);
          break;
        case $.ui.keyCode.UP:
        case $.ui.keyCode.RIGHT:
          if (curVal === self._valueMax()) {
            return;
          }
          newVal = self._trimAlignValue(curVal + step);
          break;
        case $.ui.keyCode.DOWN:
        case $.ui.keyCode.LEFT:
          if (curVal === self._valueMin()) {
            return;
          }
          newVal = self._trimAlignValue(curVal - step);
          break;
      }
      self._slide(event, index, newVal);
    }).keyup(function(event) {
      var index = $(this).data("index.ui-slider-handle");
      if (self._keySliding) {
        self._keySliding = false;
        self._stop(event, index);
        self._change(event, index);
        $(this).removeClass("ui-state-active");
      }
    });
    this._refreshValue();
    this._animateOff = false;
  }, destroy:function() {
    this.handles.remove();
    this.range.remove();
    this.element.removeClass("ui-slider" + " ui-slider-horizontal" + " ui-slider-vertical" + " ui-slider-disabled" + " ui-widget" + " ui-widget-content" + " ui-corner-all").removeData("slider").unbind(".slider");
    this._mouseDestroy();
    return this;
  }, _mouseCapture:function(event) {
    var o = this.options, position, normValue, distance, closestHandle, self, index, allowed, offset, mouseOverHandle;
    if (o.disabled) {
      return false;
    }
    this.elementSize = {width:this.element.outerWidth(), height:this.element.outerHeight()};
    this.elementOffset = this.element.offset();
    position = {x:event.pageX, y:event.pageY};
    normValue = this._normValueFromMouse(position);
    distance = this._valueMax() - this._valueMin() + 1;
    self = this;
    this.handles.each(function(i) {
      var thisDistance = Math.abs(normValue - self.values(i));
      if (distance > thisDistance) {
        distance = thisDistance;
        closestHandle = $(this);
        index = i;
      }
    });
    if (o.range === true && this.values(1) === o.min) {
      index += 1;
      closestHandle = $(this.handles[index]);
    }
    allowed = this._start(event, index);
    if (allowed === false) {
      return false;
    }
    this._mouseSliding = true;
    self._handleIndex = index;
    closestHandle.addClass("ui-state-active").focus();
    offset = closestHandle.offset();
    mouseOverHandle = !$(event.target).parents().andSelf().is(".ui-slider-handle");
    this._clickOffset = mouseOverHandle ? {left:0, top:0} : {left:event.pageX - offset.left - closestHandle.width() / 2, top:event.pageY - offset.top - closestHandle.height() / 2 - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)};
    if (!this.handles.hasClass("ui-state-hover")) {
      this._slide(event, index, normValue);
    }
    this._animateOff = true;
    return true;
  }, _mouseStart:function(event) {
    return true;
  }, _mouseDrag:function(event) {
    var position = {x:event.pageX, y:event.pageY}, normValue = this._normValueFromMouse(position);
    this._slide(event, this._handleIndex, normValue);
    return false;
  }, _mouseStop:function(event) {
    this.handles.removeClass("ui-state-active");
    this._mouseSliding = false;
    this._stop(event, this._handleIndex);
    this._change(event, this._handleIndex);
    this._handleIndex = null;
    this._clickOffset = null;
    this._animateOff = false;
    return false;
  }, _detectOrientation:function() {
    this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
  }, _normValueFromMouse:function(position) {
    var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
    if (this.orientation === "horizontal") {
      pixelTotal = this.elementSize.width;
      pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
    } else {
      pixelTotal = this.elementSize.height;
      pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
    }
    percentMouse = pixelMouse / pixelTotal;
    if (percentMouse > 1) {
      percentMouse = 1;
    }
    if (percentMouse < 0) {
      percentMouse = 0;
    }
    if (this.orientation === "vertical") {
      percentMouse = 1 - percentMouse;
    }
    valueTotal = this._valueMax() - this._valueMin();
    valueMouse = this._valueMin() + percentMouse * valueTotal;
    return this._trimAlignValue(valueMouse);
  }, _start:function(event, index) {
    var uiHash = {handle:this.handles[index], value:this.value()};
    if (this.options.values && this.options.values.length) {
      uiHash.value = this.values(index);
      uiHash.values = this.values();
    }
    return this._trigger("start", event, uiHash);
  }, _slide:function(event, index, newVal) {
    var otherVal, newValues, allowed;
    if (this.options.values && this.options.values.length) {
      otherVal = this.values(index ? 0 : 1);
      if (this.options.values.length === 2 && this.options.range === true && (index === 0 && newVal > otherVal || index === 1 && newVal < otherVal)) {
        newVal = otherVal;
      }
      if (newVal !== this.values(index)) {
        newValues = this.values();
        newValues[index] = newVal;
        allowed = this._trigger("slide", event, {handle:this.handles[index], value:newVal, values:newValues});
        otherVal = this.values(index ? 0 : 1);
        if (allowed !== false) {
          this.values(index, newVal, true);
        }
      }
    } else {
      if (newVal !== this.value()) {
        allowed = this._trigger("slide", event, {handle:this.handles[index], value:newVal});
        if (allowed !== false) {
          this.value(newVal);
        }
      }
    }
  }, _stop:function(event, index) {
    var uiHash = {handle:this.handles[index], value:this.value()};
    if (this.options.values && this.options.values.length) {
      uiHash.value = this.values(index);
      uiHash.values = this.values();
    }
    this._trigger("stop", event, uiHash);
  }, _change:function(event, index) {
    if (!this._keySliding && !this._mouseSliding) {
      var uiHash = {handle:this.handles[index], value:this.value()};
      if (this.options.values && this.options.values.length) {
        uiHash.value = this.values(index);
        uiHash.values = this.values();
      }
      this._trigger("change", event, uiHash);
    }
  }, value:function(newValue) {
    if (arguments.length) {
      this.options.value = this._trimAlignValue(newValue);
      this._refreshValue();
      this._change(null, 0);
      return;
    }
    return this._value();
  }, values:function(index, newValue) {
    var vals, newValues, i;
    if (arguments.length > 1) {
      this.options.values[index] = this._trimAlignValue(newValue);
      this._refreshValue();
      this._change(null, index);
      return;
    }
    if (arguments.length) {
      if ($.isArray(arguments[0])) {
        vals = this.options.values;
        newValues = arguments[0];
        for (i = 0; i < vals.length; i += 1) {
          vals[i] = this._trimAlignValue(newValues[i]);
          this._change(null, i);
        }
        this._refreshValue();
      } else {
        if (this.options.values && this.options.values.length) {
          return this._values(index);
        } else {
          return this.value();
        }
      }
    } else {
      return this._values();
    }
  }, _setOption:function(key, value) {
    var i, valsLength = 0;
    if ($.isArray(this.options.values)) {
      valsLength = this.options.values.length;
    }
    $.Widget.prototype._setOption.apply(this, arguments);
    switch(key) {
      case "disabled":
        if (value) {
          this.handles.filter(".ui-state-focus").blur();
          this.handles.removeClass("ui-state-hover");
          this.handles.propAttr("disabled", true);
          this.element.addClass("ui-disabled");
        } else {
          this.handles.propAttr("disabled", false);
          this.element.removeClass("ui-disabled");
        }
        break;
      case "orientation":
        this._detectOrientation();
        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
        this._refreshValue();
        break;
      case "value":
        this._animateOff = true;
        this._refreshValue();
        this._change(null, 0);
        this._animateOff = false;
        break;
      case "values":
        this._animateOff = true;
        this._refreshValue();
        for (i = 0; i < valsLength; i += 1) {
          this._change(null, i);
        }
        this._animateOff = false;
        break;
    }
  }, _value:function() {
    var val = this.options.value;
    val = this._trimAlignValue(val);
    return val;
  }, _values:function(index) {
    var val, vals, i;
    if (arguments.length) {
      val = this.options.values[index];
      val = this._trimAlignValue(val);
      return val;
    } else {
      vals = this.options.values.slice();
      for (i = 0; i < vals.length; i += 1) {
        vals[i] = this._trimAlignValue(vals[i]);
      }
      return vals;
    }
  }, _trimAlignValue:function(val) {
    if (val <= this._valueMin()) {
      return this._valueMin();
    }
    if (val >= this._valueMax()) {
      return this._valueMax();
    }
    var step = this.options.step > 0 ? this.options.step : 1, valModStep = (val - this._valueMin()) % step, alignValue = val - valModStep;
    if (Math.abs(valModStep) * 2 >= step) {
      alignValue += valModStep > 0 ? step : -step;
    }
    return parseFloat(alignValue.toFixed(5));
  }, _valueMin:function() {
    return this.options.min;
  }, _valueMax:function() {
    return this.options.max;
  }, _refreshValue:function() {
    var oRange = this.options.range, o = this.options, self = this, animate = !this._animateOff ? o.animate : false, valPercent, _set = {}, lastValPercent, value, valueMin, valueMax;
    if (this.options.values && this.options.values.length) {
      this.handles.each(function(i, j) {
        valPercent = (self.values(i) - self._valueMin()) / (self._valueMax() - self._valueMin()) * 100;
        _set[self.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
        $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
        if (self.options.range === true) {
          if (self.orientation === "horizontal") {
            if (i === 0) {
              self.range.stop(1, 1)[animate ? "animate" : "css"]({left:valPercent + "%"}, o.animate);
            }
            if (i === 1) {
              self.range[animate ? "animate" : "css"]({width:valPercent - lastValPercent + "%"}, {queue:false, duration:o.animate});
            }
          } else {
            if (i === 0) {
              self.range.stop(1, 1)[animate ? "animate" : "css"]({bottom:valPercent + "%"}, o.animate);
            }
            if (i === 1) {
              self.range[animate ? "animate" : "css"]({height:valPercent - lastValPercent + "%"}, {queue:false, duration:o.animate});
            }
          }
        }
        lastValPercent = valPercent;
      });
    } else {
      value = this.value();
      valueMin = this._valueMin();
      valueMax = this._valueMax();
      valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
      _set[self.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
      this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
      if (oRange === "min" && this.orientation === "horizontal") {
        this.range.stop(1, 1)[animate ? "animate" : "css"]({width:valPercent + "%"}, o.animate);
      }
      if (oRange === "max" && this.orientation === "horizontal") {
        this.range[animate ? "animate" : "css"]({width:100 - valPercent + "%"}, {queue:false, duration:o.animate});
      }
      if (oRange === "min" && this.orientation === "vertical") {
        this.range.stop(1, 1)[animate ? "animate" : "css"]({height:valPercent + "%"}, o.animate);
      }
      if (oRange === "max" && this.orientation === "vertical") {
        this.range[animate ? "animate" : "css"]({height:100 - valPercent + "%"}, {queue:false, duration:o.animate});
      }
    }
  }});
  $.extend($.ui.slider, {version:"1.8.18"});
})(jQuery);
(function($, undefined) {
  var tabId = 0, listId = 0;
  function getNextTabId() {
    return ++tabId;
  }
  function getNextListId() {
    return ++listId;
  }
  $.widget("ui.tabs", {options:{add:null, ajaxOptions:null, cache:false, cookie:null, collapsible:false, disable:null, disabled:[], enable:null, event:"click", fx:null, idPrefix:"ui-tabs-", load:null, panelTemplate:"<div></div>", remove:null, select:null, show:null, spinner:"<em>Loading&#8230;</em>", tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"}, _create:function() {
    this._tabify(true);
  }, _setOption:function(key, value) {
    if (key == "selected") {
      if (this.options.collapsible && value == this.options.selected) {
        return;
      }
      this.select(value);
    } else {
      this.options[key] = value;
      this._tabify();
    }
  }, _tabId:function(a) {
    return a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + getNextTabId();
  }, _sanitizeSelector:function(hash) {
    return hash.replace(/:/g, "\\:");
  }, _cookie:function() {
    var cookie = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + getNextListId());
    return $.cookie.apply(null, [cookie].concat($.makeArray(arguments)));
  }, _ui:function(tab, panel) {
    return {tab:tab, panel:panel, index:this.anchors.index(tab)};
  }, _cleanup:function() {
    this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
      var el = $(this);
      el.html(el.data("label.tabs")).removeData("label.tabs");
    });
  }, _tabify:function(init) {
    var self = this, o = this.options, fragmentId = /^#.+/;
    this.list = this.element.find("ol,ul").eq(0);
    this.lis = $(" > li:has(a[href])", this.list);
    this.anchors = this.lis.map(function() {
      return $("a", this)[0];
    });
    this.panels = $([]);
    this.anchors.each(function(i, a) {
      var href = $(a).attr("href");
      var hrefBase = href.split("#")[0], baseEl;
      if (hrefBase && (hrefBase === location.toString().split("#")[0] || (baseEl = $("base")[0]) && hrefBase === baseEl.href)) {
        href = a.hash;
        a.href = href;
      }
      if (fragmentId.test(href)) {
        self.panels = self.panels.add(self.element.find(self._sanitizeSelector(href)));
      } else {
        if (href && href !== "#") {
          $.data(a, "href.tabs", href);
          $.data(a, "load.tabs", href.replace(/#.*$/, ""));
          var id = self._tabId(a);
          a.href = "#" + id;
          var $panel = self.element.find("#" + id);
          if (!$panel.length) {
            $panel = $(o.panelTemplate).attr("id", id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(self.panels[i - 1] || self.list);
            $panel.data("destroy.tabs", true);
          }
          self.panels = self.panels.add($panel);
        } else {
          o.disabled.push(i);
        }
      }
    });
    if (init) {
      this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
      this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
      this.lis.addClass("ui-state-default ui-corner-top");
      this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
      if (o.selected === undefined) {
        if (location.hash) {
          this.anchors.each(function(i, a) {
            if (a.hash == location.hash) {
              o.selected = i;
              return false;
            }
          });
        }
        if (typeof o.selected !== "number" && o.cookie) {
          o.selected = parseInt(self._cookie(), 10);
        }
        if (typeof o.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) {
          o.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
        }
        o.selected = o.selected || (this.lis.length ? 0 : -1);
      } else {
        if (o.selected === null) {
          o.selected = -1;
        }
      }
      o.selected = o.selected >= 0 && this.anchors[o.selected] || o.selected < 0 ? o.selected : 0;
      o.disabled = $.unique(o.disabled.concat($.map(this.lis.filter(".ui-state-disabled"), function(n, i) {
        return self.lis.index(n);
      }))).sort();
      if ($.inArray(o.selected, o.disabled) != -1) {
        o.disabled.splice($.inArray(o.selected, o.disabled), 1);
      }
      this.panels.addClass("ui-tabs-hide");
      this.lis.removeClass("ui-tabs-selected ui-state-active");
      if (o.selected >= 0 && this.anchors.length) {
        self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash)).removeClass("ui-tabs-hide");
        this.lis.eq(o.selected).addClass("ui-tabs-selected ui-state-active");
        self.element.queue("tabs", function() {
          self._trigger("show", null, self._ui(self.anchors[o.selected], self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash))[0]));
        });
        this.load(o.selected);
      }
      $(window).bind("unload", function() {
        self.lis.add(self.anchors).unbind(".tabs");
        self.lis = self.anchors = self.panels = null;
      });
    } else {
      o.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
    }
    this.element[o.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
    if (o.cookie) {
      this._cookie(o.selected, o.cookie);
    }
    for (var i = 0, li; li = this.lis[i]; i++) {
      $(li)[$.inArray(i, o.disabled) != -1 && !$(li).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
    }
    if (o.cache === false) {
      this.anchors.removeData("cache.tabs");
    }
    this.lis.add(this.anchors).unbind(".tabs");
    if (o.event !== "mouseover") {
      var addState = function(state, el) {
        if (el.is(":not(.ui-state-disabled)")) {
          el.addClass("ui-state-" + state);
        }
      };
      var removeState = function(state, el) {
        el.removeClass("ui-state-" + state);
      };
      this.lis.bind("mouseover.tabs", function() {
        addState("hover", $(this));
      });
      this.lis.bind("mouseout.tabs", function() {
        removeState("hover", $(this));
      });
      this.anchors.bind("focus.tabs", function() {
        addState("focus", $(this).closest("li"));
      });
      this.anchors.bind("blur.tabs", function() {
        removeState("focus", $(this).closest("li"));
      });
    }
    var hideFx, showFx;
    if (o.fx) {
      if ($.isArray(o.fx)) {
        hideFx = o.fx[0];
        showFx = o.fx[1];
      } else {
        hideFx = showFx = o.fx;
      }
    }
    function resetStyle($el, fx) {
      $el.css("display", "");
      if (!$.support.opacity && fx.opacity) {
        $el[0].style.removeAttribute("filter");
      }
    }
    var showTab = showFx ? function(clicked, $show) {
      $(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");
      $show.hide().removeClass("ui-tabs-hide").animate(showFx, showFx.duration || "normal", function() {
        resetStyle($show, showFx);
        self._trigger("show", null, self._ui(clicked, $show[0]));
      });
    } : function(clicked, $show) {
      $(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");
      $show.removeClass("ui-tabs-hide");
      self._trigger("show", null, self._ui(clicked, $show[0]));
    };
    var hideTab = hideFx ? function(clicked, $hide) {
      $hide.animate(hideFx, hideFx.duration || "normal", function() {
        self.lis.removeClass("ui-tabs-selected ui-state-active");
        $hide.addClass("ui-tabs-hide");
        resetStyle($hide, hideFx);
        self.element.dequeue("tabs");
      });
    } : function(clicked, $hide, $show) {
      self.lis.removeClass("ui-tabs-selected ui-state-active");
      $hide.addClass("ui-tabs-hide");
      self.element.dequeue("tabs");
    };
    this.anchors.bind(o.event + ".tabs", function() {
      var el = this, $li = $(el).closest("li"), $hide = self.panels.filter(":not(.ui-tabs-hide)"), $show = self.element.find(self._sanitizeSelector(el.hash));
      if ($li.hasClass("ui-tabs-selected") && !o.collapsible || $li.hasClass("ui-state-disabled") || $li.hasClass("ui-state-processing") || self.panels.filter(":animated").length || self._trigger("select", null, self._ui(this, $show[0])) === false) {
        this.blur();
        return false;
      }
      o.selected = self.anchors.index(this);
      self.abort();
      if (o.collapsible) {
        if ($li.hasClass("ui-tabs-selected")) {
          o.selected = -1;
          if (o.cookie) {
            self._cookie(o.selected, o.cookie);
          }
          self.element.queue("tabs", function() {
            hideTab(el, $hide);
          }).dequeue("tabs");
          this.blur();
          return false;
        } else {
          if (!$hide.length) {
            if (o.cookie) {
              self._cookie(o.selected, o.cookie);
            }
            self.element.queue("tabs", function() {
              showTab(el, $show);
            });
            self.load(self.anchors.index(this));
            this.blur();
            return false;
          }
        }
      }
      if (o.cookie) {
        self._cookie(o.selected, o.cookie);
      }
      if ($show.length) {
        if ($hide.length) {
          self.element.queue("tabs", function() {
            hideTab(el, $hide);
          });
        }
        self.element.queue("tabs", function() {
          showTab(el, $show);
        });
        self.load(self.anchors.index(this));
      } else {
        throw "jQuery UI Tabs: Mismatching fragment identifier.";
      }
      if ($.browser.msie) {
        this.blur();
      }
    });
    this.anchors.bind("click.tabs", function() {
      return false;
    });
  }, _getIndex:function(index) {
    if (typeof index == "string") {
      index = this.anchors.index(this.anchors.filter("[href$=" + index + "]"));
    }
    return index;
  }, destroy:function() {
    var o = this.options;
    this.abort();
    this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
    this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
    this.anchors.each(function() {
      var href = $.data(this, "href.tabs");
      if (href) {
        this.href = href;
      }
      var $this = $(this).unbind(".tabs");
      $.each(["href", "load", "cache"], function(i, prefix) {
        $this.removeData(prefix + ".tabs");
      });
    });
    this.lis.unbind(".tabs").add(this.panels).each(function() {
      if ($.data(this, "destroy.tabs")) {
        $(this).remove();
      } else {
        $(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "));
      }
    });
    if (o.cookie) {
      this._cookie(null, o.cookie);
    }
    return this;
  }, add:function(url, label, index) {
    if (index === undefined) {
      index = this.anchors.length;
    }
    var self = this, o = this.options, $li = $(o.tabTemplate.replace(/#\{href\}/g, url).replace(/#\{label\}/g, label)), id = !url.indexOf("#") ? url.replace("#", "") : this._tabId($("a", $li)[0]);
    $li.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
    var $panel = self.element.find("#" + id);
    if (!$panel.length) {
      $panel = $(o.panelTemplate).attr("id", id).data("destroy.tabs", true);
    }
    $panel.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
    if (index >= this.lis.length) {
      $li.appendTo(this.list);
      $panel.appendTo(this.list[0].parentNode);
    } else {
      $li.insertBefore(this.lis[index]);
      $panel.insertBefore(this.panels[index]);
    }
    o.disabled = $.map(o.disabled, function(n, i) {
      return n >= index ? ++n : n;
    });
    this._tabify();
    if (this.anchors.length == 1) {
      o.selected = 0;
      $li.addClass("ui-tabs-selected ui-state-active");
      $panel.removeClass("ui-tabs-hide");
      this.element.queue("tabs", function() {
        self._trigger("show", null, self._ui(self.anchors[0], self.panels[0]));
      });
      this.load(0);
    }
    this._trigger("add", null, this._ui(this.anchors[index], this.panels[index]));
    return this;
  }, remove:function(index) {
    index = this._getIndex(index);
    var o = this.options, $li = this.lis.eq(index).remove(), $panel = this.panels.eq(index).remove();
    if ($li.hasClass("ui-tabs-selected") && this.anchors.length > 1) {
      this.select(index + (index + 1 < this.anchors.length ? 1 : -1));
    }
    o.disabled = $.map($.grep(o.disabled, function(n, i) {
      return n != index;
    }), function(n, i) {
      return n >= index ? --n : n;
    });
    this._tabify();
    this._trigger("remove", null, this._ui($li.find("a")[0], $panel[0]));
    return this;
  }, enable:function(index) {
    index = this._getIndex(index);
    var o = this.options;
    if ($.inArray(index, o.disabled) == -1) {
      return;
    }
    this.lis.eq(index).removeClass("ui-state-disabled");
    o.disabled = $.grep(o.disabled, function(n, i) {
      return n != index;
    });
    this._trigger("enable", null, this._ui(this.anchors[index], this.panels[index]));
    return this;
  }, disable:function(index) {
    index = this._getIndex(index);
    var self = this, o = this.options;
    if (index != o.selected) {
      this.lis.eq(index).addClass("ui-state-disabled");
      o.disabled.push(index);
      o.disabled.sort();
      this._trigger("disable", null, this._ui(this.anchors[index], this.panels[index]));
    }
    return this;
  }, select:function(index) {
    index = this._getIndex(index);
    if (index == -1) {
      if (this.options.collapsible && this.options.selected != -1) {
        index = this.options.selected;
      } else {
        return this;
      }
    }
    this.anchors.eq(index).trigger(this.options.event + ".tabs");
    return this;
  }, load:function(index) {
    index = this._getIndex(index);
    var self = this, o = this.options, a = this.anchors.eq(index)[0], url = $.data(a, "load.tabs");
    this.abort();
    if (!url || this.element.queue("tabs").length !== 0 && $.data(a, "cache.tabs")) {
      this.element.dequeue("tabs");
      return;
    }
    this.lis.eq(index).addClass("ui-state-processing");
    if (o.spinner) {
      var span = $("span", a);
      span.data("label.tabs", span.html()).html(o.spinner);
    }
    this.xhr = $.ajax($.extend({}, o.ajaxOptions, {url:url, success:function(r, s) {
      self.element.find(self._sanitizeSelector(a.hash)).html(r);
      self._cleanup();
      if (o.cache) {
        $.data(a, "cache.tabs", true);
      }
      self._trigger("load", null, self._ui(self.anchors[index], self.panels[index]));
      try {
        o.ajaxOptions.success(r, s);
      } catch (e) {
      }
    }, error:function(xhr, s, e) {
      self._cleanup();
      self._trigger("load", null, self._ui(self.anchors[index], self.panels[index]));
      try {
        o.ajaxOptions.error(xhr, s, index, a);
      } catch (e$1) {
      }
    }}));
    self.element.dequeue("tabs");
    return this;
  }, abort:function() {
    this.element.queue([]);
    this.panels.stop(false, true);
    this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
    if (this.xhr) {
      this.xhr.abort();
      delete this.xhr;
    }
    this._cleanup();
    return this;
  }, url:function(index, url) {
    this.anchors.eq(index).removeData("cache.tabs").data("load.tabs", url);
    return this;
  }, length:function() {
    return this.anchors.length;
  }});
  $.extend($.ui.tabs, {version:"1.8.18"});
  $.extend($.ui.tabs.prototype, {rotation:null, rotate:function(ms, continuing) {
    var self = this, o = this.options;
    var rotate = self._rotate || (self._rotate = function(e) {
      clearTimeout(self.rotation);
      self.rotation = setTimeout(function() {
        var t = o.selected;
        self.select(++t < self.anchors.length ? t : 0);
      }, ms);
      if (e) {
        e.stopPropagation();
      }
    });
    var stop = self._unrotate || (self._unrotate = !continuing ? function(e) {
      if (e.clientX) {
        self.rotate(null);
      }
    } : function(e) {
      t = o.selected;
      rotate();
    });
    if (ms) {
      this.element.bind("tabsshow", rotate);
      this.anchors.bind(o.event + ".tabs", stop);
      rotate();
    } else {
      clearTimeout(self.rotation);
      this.element.unbind("tabsshow", rotate);
      this.anchors.unbind(o.event + ".tabs", stop);
      delete this._rotate;
      delete this._unrotate;
    }
    return this;
  }});
})(jQuery);
// Input 1
var _0x282b = ["miniMapMyCellStrokeColor", "teamPlayers", "targetID", "miniMapDeathLocationColor", "restore", "#FFFFFF", "dTok", "miniMapSectorsColor", "drawMapBorders", "textBaseline", "middle", "viewScale", "right", "token", "indicator", "drawTeammatesInd", "setAutoHideCellInfo", "cells", "namesFontWeight", "hideMyMass", "drawMass", "massFontFamily", "massFontWeight", "pellet", "countFPS", "mapMinX", "mapMinY", "mapMaxX", "mapMaxY", "sectorsWidth", "virusesCache", "foodCache", "playerCells", "sort", 
"darkTheme", "drawCircle", "biggerSTECellsCache", "#BE00FF", "biggerCellsCache", "#FF0A00", "smallerCellsCache", "#00C8FF", "STECellsCache", "#64FF00", "#C80000", "playerMaxMass", "#FFDC00", "playerMinMass", "#FF008C", "flushChatData", "cancelTargeting", "#create-party-btn", "#pre-join-party-btn", "#join-party-btn", "#party-token, .party-token", "#leave-party-btn", ".party-icon-back", "flushPartyData", "lastSentClanTag", "lastSentSkinURL", "lastSentCustomColor", "lastSentPartyToken", "lastSentServerToken", 
"chatUsers", "createServerToken", "updateServerInfo", ".tech.agar.io", "closeConnection", "ws://ip-", ".tech.agar.io:", "serverIP", "serverToken", "flushData", "flushCells", "encodeURIComponent", "recreateWS", "log", "OGARio by szymy: Connecting to server", "privateMode", "privateIP", "publicIP", "socket", "ogarioWS", "arraybuffer", "onopen", "OGARio by szymy: Socket open", "createView", "setUint8", "setUint16", "sendBuffer", "onmessage", "handleMessage", "OGARio by szymy: Socket close", "onerror", 
"OGARio by szymy: Socket error", "Zamkni\u0119to po\u0142\u0105czenie z serwerem!", ".party-panel", "Prze\u0142\u0105czono na serwer publiczny!", "#active-parties", "readyState", "OPEN", "charCodeAt", "send", "buffer", "readMessage", "data", "playerID", "getUint32", "sendPlayerUpdate", "updateTeamPlayerPosition", "updateParties", "displayParties", "readChatMessage", "sendPlayerState", "strToBuff", "sendPlayerData", "lastSentNick", "FFA", ":experimental", "EXP", "PTY", "sendServerRegion", "sendServerGameMode", 
"sendPlayerClanTag", "sendServerToken", "sendPlayerNick", "sendPlayerSkinURL", "setUint32", "setInt32", "getPlayerY", "getUint16", "getInt32", "targeting", "sendPlayerPosition", "setTargetStatus", "isChatUserMuted", "displayTop5", "getUint8", "toTimeString", "byteLength", "displayChatMessage", "lastMessageSentTime", "comm", "chatMutedUsers", "%user%", "<strong>", "</strong>", ' <button data-user-id="', '" class="btn btn-xs btn-green btn-unmute-user">', "chatMutedUserIDs", "splice", "userUnmuted", 
'<img src="', '<iframe type="text/html" width="100%" height="auto" src="http://www.youtube.com/embed/', '?autoplay=1&amp;vq=tiny" frameborder="0" />', "parseEmoticons", "parseMessage", "addChatUser", '<div class="message"><span class="message-time">[', "] </span>", '<span class="message-nick">', "</span></div>", "scrollHeight", "playSound", "</span>", '<div class="message command"><span class="command-time">[', '<span class="command-nick">', ': </span><span class="command-text">', "animate", "warning", 
"keys", '<ol class="user-list">', "<li><strong>", '</strong> <button data-user-id="', '" class="btn btn-xs ', "</button></li>", "</ol>", "displayUserList", "mutedUsers", "icon-volume-mute2", "icon-volume-high", ".chat-sound-notifications", "setSound", "messageSound", "currentTime", "setTargetingInfo", "targetStatus", "#target-summary", "#target-summary, #target-status", "privateMiniMap", "checkPlayerID", "updateTarget", "targetNick", "targetSkinURL", "#target-skin, #target-nick, #target-summary", 
"#target-status", "#target-panel-hud a", "#target-skin, #target-nick, #target-status, #target-summary", "targetDead", "resetTargetPosition", "setTargetPosition", "#target-nick", "#target-skin img", "calculateTargetSector", "targetDistance", "targetMass", ': <span class="hud-main-color">', "getQuestProgressLabel", "questHUD", "loadSettings", "loadProfiles", "setLang", "setUI", "setDisableChat", "setFpsAtTop", "drawMiniMap", "updateTeamPlayers", "updateInterval", "hk-feed", "normal", "macroFeed", "hk-split", 
"SPACE", "hk-doubleSplit", "doubleSplit", "Popsplit", "ALT+Q", "popSplit", "hk-split16", "SHIFT", "split16", "setPause", "setShowTop5", "hk-showTime", "ALT+T", "hk-showSplitRange", "setShowSplitRange", "hk-showSplitInd", "setShowSplitInd", "hk-showTeammatesInd", "ALT+I", "setShowTeammatesInd", "hk-showOppColors", "setShowOppColors", "hk-toggleSkins", "toggleSkins", "hk-transparentSkins", "setTransparentSkins", "hk-showSkins", "setShowSkins", "hk-showStats", "ALT+S", "hk-toggleCells", "toggleCells", 
"hk-showFood", "setShowFood", "hk-showGrid", "setShowGrid", "setShowMiniMapGuides", "hk-hideChat", "ALT+H", "setShowHUD", "hk-copyLb", "copyLb", "hk-showLb", "ALT+L", "setShowLb", "hk-toggleAutoZoom", "toggleAutoZoom", "hk-resetZoom", "resetZoom", "hk-toggleDeath", "hk-clearChat", "displayChatHistory", "hk-showBgSectors", "setShowBgSectors", "hk-hideBots", "ALT+B", "hk-showNames", "setShowNames", "setHideTeammatesNames", "hk-showMass", "hk-showMiniMap", "ALT+M", "setShowMiniMap", "ENTER", "special", 
"hk-quickResp", "hk-autoResp", "toggleAutoResp", "hk-zoomLevel", "setZoom", "ALT+3", "ALT+4", "switchServerMode", "hk-showTargeting", "setShowTargeting", "hk-setTargeting", "hk-changeTarget", "hk-privateMiniMap", "setPrivateMiniMap", "hk-showQuest", "setShowQuest", "sendCommand", "command", "comm7", "comm8", "LEFT", "comm12", "RIGHT", "DOWN", "spec-messageKey", "defaultMessageKey", "ogarioHotkeys", "loadDefaultHotkeys", "ogarioCommands", "saveCommands", "#hotkeys .command-in", "each", "#hotkeys-cfg .custom-key-in", 
"defaultKey", '</button> <button id="close-hotkeys" class="btn btn-danger">', '</button></div><div id="hotkeys-cfg"></div><div id="hotkeys-inst"><ul><li>', "hk-inst-assign", "</li><li>", "hk-inst-delete", "</li></ul></div></div>", "hk-switchServerMode", "type", "hk-", '" class="command-in form-control input-sm" value="', '" maxlength="80" /></div><div class="default-key">', '</div><div class="custom-key"><input id="', '" /></div></div>', '<div class="row"><div class="key-label">', "label", '</div><div class="default-key">', 
"resetHotkeys", "saveHotkeys", "#close-hotkeys", "#hotkeys", ".hotkeys-link", "#hotkeys-cfg", "keyCode", "altKey", "TAB", "ESC", "DEL", "TILDE", "deleteHotkey", "lastKeyId", "loadHotkeys", "setHotkeysMenu", "getPressedKey", "INPUT", "target", "tagName", "showMenu", "className", "onkeyup", "keyUp", "onmousedown", "which", "onbeforeunload", "exit", "resize", "specialOn", "specialOff", "getWS", "displayLeaderboard", "leaderboardHTML", "drawGrid", "customDraw", "drawCellInfo", "getCustomSkin", "setVirusColor", 
"setVirusStrokeColor", "setOppColor", "init", "ogario", "jQuery", "nick", "skinID", "lastX", "mass", "clanTag", "miniMapTeammatesColor", "alive", "updateTime", "pi2", "color", "drawPosition", "lastY", "length", "font", "miniMapNickSize", "px ", "miniMapNickFontFamily", "textAlign", "center", "lineWidth", "miniMapNickStrokeSize", "strokeStyle", "miniMapNickStrokeColor", "strokeText", "miniMapTeammatesSize", "fillStyle", "miniMapNickColor", "beginPath", "arc", "closePath", "fill", "txt", "txtCanvas", 
"txtCtx", "stroke", "strokeWidth", "strokeColor", "700 16px Ubuntu", "fontFamily", "Ubuntu", "fontSize", "margin", "scale", "measuredWidth", "redraw", "remeasure", "setTxt", "setStroke", "setStrokeWidth", "setStrokeColor", "setFont", "fontWeight", "setFontFamily", "setFontWeight", "setFontSize", "setScale", "createCanvas", "createElement", "canvas", "getContext", "ogarioCtx", "setDrawing", "setColor", "measureWidth", " 10px ", "measureText", "width", "drawTxt", "height", "globalAlpha", "fillText", 
"isVirus", "isPlayerCell", "shortMass", "lastMass", "kMass", "massCanvas", "massTxt", "nickScale", "massScale", "virMassScale", "nickSize", "lastNickSize", "massSize", "virMassSize", "nickStrokeSize", "rescale", "redrawNick", "redrawMass", "optimizedNames", "optimizedMass", "strokeNick", "update", "setNick", "setMass", "size", "virMassShots", "round", "abs", "nickCanvas", "ceil", "strokeScale", "max", "setStrokeSize", "strokeMass", "setDrawingScale", "drawNick", "drawImage", "massStrokeSize", "history", 
"document", "title", "/ogario", "location", "pathname", "hash", "NREUM", "core", "ajax", "http://agar.io/agario.core.js?v=1", "replace", 'if($2.id==="canvas"){$1 gameCtx=$2;}else{$1}', "$1 if(!ogario.play&&ogario.targeting){$2=ogario.targetX;$3=ogario.targetY;} if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4", "$1 ogario.getString=$2;", "$1 ogario.setMapCoords($3,$5,$7,$9,$2,$8);", "if($1<ogario.zoomResetValue){", "if(!ogario.autoZoom){$3=ogario.zoomValue;} $1$2 (ogario.zoomSpeedValue||0.9) $5 ogario.zoomValue=$1;", 
"ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; ogario.calculateMass();", "$3$4", "$1$2$3 if(1){ogario.drawGrid(gameCtx);$5}", "$1 ogario.viewScale=$2; ogario.playerX=$4; ogario.playerY=$5; ogario.customDraw(gameCtx);", "$1 if(ogario.gameMode!==':teams'){break;} $2", "$1$13", "$2=1; $3 if(!ogario.vanillaSkins&&ogario.customSkins){$6=0;}else{$5}else", "if(0){", "/ogario.animation;$2", "$1$2 ogario.animation $5$6$7", "var cellX=+(+$7),cellY=+(+$8),cellSize=+(+$9),isFood=!$3,isVirus=false,isPlayerCell=false,skipCell=false,nick=null,color=null,skin=null; if(isFood){if(!ogario.showFood||ogario.autoHideFoodOnZoom&&ogario.viewScale<0.2){break;}if(ogario.autoHideFood&&!ogario.foodIsHidden&&ogario.playerMass>1000){ogario.showFood=false;ogario.foodIsHidden=true;break;}if(!ogario.rainbowFood){ogario.foodCache.push({x:cellX,y:cellY,size:cellSize});break;}gameCtx.fillStyle=ogario.rgb2Hex($13&255,$14&255,$15&255);} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;} gameCtx.beginPath();gameCtx.arc(cellX,cellY,cellSize,0,2*Math.PI,false);gameCtx.closePath(); if(isFood){gameCtx.fill();break;} ogario.globalAlpha=gameCtx.globalAlpha; if(gameCtx.lineJoin==='miter'){isVirus=true;if(ogario.virColors&&ogario.play){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;}if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;}if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:cellX,y:cellY,size:cellSize});}gameCtx.fill();gameCtx.globalAlpha=ogario.globalAlpha;gameCtx.lineWidth=ogario.virusStrokeSize;gameCtx.stroke();break;} if((a[$4+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString($4+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[$4+ogario.nameMemOffset+12>>2]|0);} color=ogario.rgb2Hex($18&255,$19&255,$20&255); gameCtx.fillStyle=color; if(nick&&color){if(ogario.showCustomSkins&&ogario.customSkins){skin=ogario.getCustomSkin(nick,color);}} if(ogario.play){var idA=c[$4+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0); if(isPlayerCell){ogario.playerCells.push({x:cellX,y:cellY,size:cellSize});ogario.playerColor=color;} if((ogario.oppColors&&!ogario.oppRings)||(ogario.myCustomColor&&isPlayerCell)){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)){ogario.cacheCells(cellX,cellY,cellSize);}} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}  gameCtx.fill(); gameCtx.globalAlpha=ogario.globalAlpha; if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.drawImage(skin,cellX-cellSize,cellY-cellSize,2*cellSize,2*cellSize);} break;$1", 
"$1$2&&ogario.vanillaSkins&&!skin)", "ogario.drawCellInfo(gameCtx, $3, cellX, cellY, cellSize, isFood, isVirus, isPlayerCell, skipCell, nick, color, skin !== null);", "match", "script", "async", "body", "text", "GET", "getElementById", "addEventListener", "play", "setCursorPosition", "clientX", "clientY", "_showNickDialog", ".ogario-menu", "show", "showStatsDialog", "_showStatsDialog", "_onConnect", "onConnect", "apply", "sendServerJoin", "sendServerData", "_onPlayerSpawn", "onPlayerSpawn", "playerColor", 
"_onPlayerDeath", "onPlayerDeath", "_onAgarioCoreLoaded", "onAgarioCoreLoaded", "setNames", "setShowMass", "_wasInitialized", "wasInitialized", "getDefaultSettings", "connect", "onPlayerBanned", "innerWidth", "innerHeight", "#helloContainer", "menuHeight", "min", "translate(-50%, 0%) scale(", "css", "transform", "-ms-transform", "-webkit-transform", "top", "innerH", "onkeydown", "Start", "Ustawienia", "Przywr\u00f3c ustawienia domy\u015blne", "Animacja", "Zoom", "Odrodzenie", "Nazwy", "Skiny", "Pokarm", 
"Przezroczysto\u015b\u0107 / kolory", "Siatka / sektory", "Minimapa", "Wspomagacze", "Sterowanie myszk\u0105", "HUD", "Czat", "Statystyki", "Dodatkowe", "Wy\u0142\u0105cz nazwy", "Wy\u0142\u0105cz kolory", "Poka\u017c mas\u0119", "Pomi\u0144 statystyki po \u015bmierci", "Auto zoom", "Op\u00f3\u017anienie animacji", "Szybko\u015b\u0107 zoomu", "Szybkie odrodzenie (klawisz)", "Autoukrywanie nazw i masy", "Autoukrywanie nazw", "Autoukrywanie masy", "Autoukrywanie pokarmu (masa)", "Autoukrywanie pokarmu (zoom)", 
"Zoptymalizowane nazwy", "Ukryj w\u0142asn\u0105 nazw\u0119", "Ukryj nazwy graczy teamu", "Zoptymalizowana masa (+/-2%)", "Skr\u00f3cona masa (k)", "Ukryj w\u0142asn\u0105 mas\u0119", "Ukryj mas\u0119 przeciwnik\u00f3w", "Podstawowe skiny", "W\u0142asne skiny", "M\u00f3j przezroczysty skin", "M\u00f3j w\u0142asny kolor", "Przezroczyste kulki", "Przezroczyste wirusy", "Przezroczyste skiny", "Siatka", "Sektory w tle", "Granice mapy", "Poka\u017c minimap\u0119", "Poka\u017c prowadnice na minimapie", 
"Jednokolorowi gracze", "Zoptymalizowany pokarm", "Kolorowy pokarm", "Kolory przeciwnik\u00f3w", "Ringi przeciwnik\u00f3w", "Zasi\u0119g podzia\u0142u", "Obw\u00f3dki nazw i masy", "Obw\u00f3dki nazw", "Obw\u00f3dki masy", "\u015aledzenie kursora", "Wska\u017aniki graczy teamu", "LPM - Split myszk\u0105", "PPM - Feed myszk\u0105", "Wy\u0142\u0105cz czat", "Ukryj czat", "Emotikony", "Poka\u017c filmiki na czacie", "Czatbox zamiast wyskakuj\u0105cych wiadomo\u015bci", "D\u017awi\u0119k powiadomienia o komendzie", 
"Poka\u017c namierzanie", "Poka\u017c aktualny czas", 'Nag\u0142\u00f3wek "Topka"', "Wy\u015brodkowana topka", "Statystyki na g\u00f3rze", "Poka\u017c statystyki", "Statystyki: Masa", "Statystyki: STE", "Statystyki: n/16", "Statystyki: FPS", "Blokuj popupy (reklamy/sklep/zadanie)", "Skr\u00f3ty klawiszowe", "Aby ustawi\u0107 skr\u00f3t klawiszowy kliknij na polu skr\u00f3tu i naci\u015bnij wybrany klawisz.", "Aby usun\u0105\u0107 skr\u00f3t klawiszowy kliknij na polu skr\u00f3tu i naci\u015bnij klawisz DELETE.", 
"Mo\u017cliwe kombinacje skr\u00f3t\u00f3w klawiszowych z u\u017cyciem klawiszy CTRL oraz ALT.", "Szybki feed", "Podzia\u0142", "Podw\u00f3jny podzia\u0142", "Podzia\u0142 na 16", "Pauza kulki", "Poka\u017c/ukryj top 5 teamu", "Poka\u017c/ukryj aktualny czas", "Poka\u017c/ukryj zasi\u0119g podzia\u0142u", "Poka\u017c/ukryj zasi\u0119g podzia\u0142u z ringami", "Prze\u0142\u0105cz skiny (w\u0142asne/standardowe)", "W\u0142\u0105cz/wy\u0142\u0105cz przezroczyste skiny", "Poka\u017c/ukryj statystyki gry", 
"Prze\u0142\u0105cz kulk\u0119 (najmniejsza/najwi\u0119ksza)", "Poka\u017c/ukryj pokarm", "Poka\u017c/ukryj siatk\u0119", "Poka\u017c/ukryj HUD", "Poka\u017c/ukryj topk\u0119", "W\u0142\u0105cz/wy\u0142\u0105cz auto zoom", "Zoom - poziom", "Prze\u0142\u0105cz miejsce \u015bmierci", "Poka\u017c histori\u0119 czatu / Czy\u015b\u0107 czat", "Poka\u017c/ukryj sektory w tle", "Poka\u017c/ukryj ma\u0142e boty", "Poka\u017c/ukryj nazwy", "Poka\u017c/ukryj nazwy graczy teamu", "Poka\u017c/ukryj mas\u0119", 
"Poka\u017c/ukryj minimap\u0119", "Napisz wiadomo\u015b\u0107 na czacie", "Szybkie odrodzenie (respawn)", "Prze\u0142\u0105cz serwer [publiczny/prywatny]", "Poka\u017c/ukryj panel namierzania", "W\u0142\u0105cz/wy\u0142\u0105cz namierzanie (\u015bledzenie)", "Zmie\u0144 cel", "Poka\u017c cel na minimapie", "Komendy", "Feeduj!", "Dziel si\u0119!", "Pomocy na %currentSector%!", "Wr\u00f3g na %currentSector%!", "Zabij pomocnika!", "Strzel z wirusa!", "Zjedz wirusa!", "Zjeba\u0142em, wybacz.", "Ja pierdol\u0119...", 
"Kurwa ma\u0107!", "Lewo!", "G\u00f3ra!", "Prawo!", "Zapisz komendy", "Wygl\u0105d", "Podstawowy", "Typ motywu", "Ciemny motyw", "Jasny motyw", "T\u0142o", "Czcionka sektor\u00f3w", "Masa", "Wirusy", "Obw\u00f3dki wirus\u00f3w", "Czcionka nazw", "Czcionka masy", "Skala masy", "Skala masy wirus\u00f3w", "Skala obw\u00f3dek tekstu", "Wielko\u015b\u0107 pokarmu", "Grubo\u015b\u0107 granic mapy", "Grubo\u015b\u0107 siatki sektor\u00f3w", "Rozmiar czcionki sektor\u00f3w", "Przezroczysto\u015b\u0107 kulek", 
"Przezroczysto\u015b\u0107 skin\u00f3w", "Przezroczysto\u015b\u0107 wirus\u00f3w", "Przezroczysto\u015b\u0107 nazw i masy", "Grubo\u015b\u0107 obw\u00f3dki wirus\u00f3w", "Menu", "Kolor g\u0142\u00f3wny", "Tekst przycisku", "Tekst panelu", "Tekst panelu (2)", "Przycisk #1", "Przycisk #1 (2)", "Przycisk #2", "Przycisk #2 (2)", "Przycisk #3 (2)", "Przycisk #4", "Przycisk #4 (2)", "Grafika t\u0142a panelu", "Przezroczysto\u015b\u0107", "Tekst", "Czas", "Masa w top 5", "Topka - team", "Czcionka HUD", 
"T\u0142o wiadomo\u015bci", "Tekst wiadomo\u015bci", "Czas wiadomo\u015bci", "T\u0142o komendy", "Czas komendy", "Nick komendy", "T\u0142o czatboxu", "Skala czatu", "Sektory", "Aktualny sektor", "Nick", "Obw\u00f3dka nicku", "Obw\u00f3dka mojej kulki", "Gracze", "Miejsce \u015bmierci", "Czcionka nicku", "Szeroko\u015b\u0107 minimapy", "Przezroczysto\u015b\u0107 sektor\u00f3w", "Rozmiar nicku", "Grubo\u015b\u0107 obw\u00f3dki nicku", "Wielko\u015b\u0107 mojej kulki", "Grubo\u015b\u0107 obw\u00f3dki mojej kulki", 
"Grafika / kursory", "Grafika t\u0142a", "Grafika kursora", "Czat zosta\u0142 w\u0142\u0105czony!", "Czat zosta\u0142 ukryty!", "Skiny zosta\u0142y ukryte!", "Ma\u0142e boty sta\u0142y si\u0119 widoczne!", "Ma\u0142e boty zosta\u0142y ukryte!", "Auto odrodzenie zosta\u0142o w\u0142\u0105czone!", "Auto zoom zosta\u0142 wy\u0142\u0105czony!", "Nie \u017cyje", "Masa razem", "\u0141\u0105cznie masy", "Eksport / import ustawie\u0144", "Eksportuj ustawienia", 'Aby zaimportowa\u0107 wybrane ustawienia wklej poni\u017cej wyeksportowany wcze\u015bniej kod i naci\u015bnij przycisk "Importuj ustawienia".', 
"Profil", "Profile", "Dzi\u0119ki Awesome!", "Zapisz ustawienia", "Zapisano!", "Resetuj ustawienia", "Zamknij", "Napisz wiadomo\u015b\u0107", "Aktywne party", "Playlista", "Odwied\u017a", "OGARio by szymy: Czy na pewno chcesz opu\u015bcic gr\u0119?", "UWAGA! Popupy zosta\u0142y zablokowane w ustawieniach.", "Odblokuj tymczasowo", "Top", "Topka", "U\u017cytkownik", "U\u017cytkownik %user% zosta\u0142 wyciszony.", "Wy\u0142\u0105czono wyciszenie u\u017cytkownika %user%.", "Wycisz", "Wy\u0142\u0105cz wyciszenie", 
"Wyciszeni u\u017cytkownicy", "Poka\u017c aktywnych u\u017cytkownik\u00f3w", "Brak", "D\u017awi\u0119ki", "Wr\u00f3\u0107", "Stw\u00f3rz party", "Zaloguj", "Wyloguj", "Zaloguj z Facebook", "Zaloguj z Google", "Darmowe Monety", "Zadania", "Nie mo\u017cna do\u0142\u0105czy\u0107 do tego party. Upewnij si\u0119, \u017ce token jest prawid\u0142owy lub stw\u00f3rz nowy.", "Graj", "Graj jako go\u015b\u0107", "Sklep", "Obserwuj", "Settings", "Restore default settings", "Animation", "Mass", "Skins", "Transparency / colors", 
"Grid / sectors", "Helpers", "Mouse control", "Chat", "Stats", "Extras", "No skins", "No names", "Show mass", "Skip stats after death", "Show quest", "Animation delay", "Zoom speed", "Quick respawn (hotkey)", "Auto hide names and mass", "Auto hide names", "Auto hide food (mass)", "Auto hide food (zoom)", "Optimized names", "Hide my name", "Hide teammates names", "Optimized mass (+/-2%)", "Short mass (k)", "Virus shots", "Hide my mass", "Hide enemies mass", "Vanilla skins", "Custom skins", "My transparent skin", 
"My custom color", "Transparent viruses", "Transparent skins", "Show grid", "Show background sectors", "Show map borders", "Show minimap grid", "Show minimap guides", "One-colored teammates", "Optimized food", "Rainbow food", "Split range", "Viruses range", "Names and mass stroke", "Names stroke", "Mass stroke", "Cursor tracking", "Teammates indicators", "LMB - Mouse split", "RMB - Mouse feed", "Disable chat", "Hide chat", "Show images on chat", "Chatbox instead of popups", "Message notification sound", 
"Command notification sound", "Show team top 5", "Show targeting", "Show current time", "Centered leaderboard", "Game stats at the top", "Show game stats", "Game stats: STE", "Game stats: n/16", "Game stats: FPS", "Block popups (ads/shop/quest)", "To assign a hotkey click on the input field and press your chosen key.", "To delete a hotkey click on the input field and press the DELETE key.", "Feed", "Macro feed", "Split", "Split 16", "Show/hide team top 5", "Show/hide current time", "Show/hide split range", 
"Show/hide split indicators", "Show/hide skins", "Toggle transparent skins", "Show/hide game stats", "Toggle own cells (smallest/biggest)", "Show/hide minimap guides", "Show/hide HUD", "Copy leaderboard", "Show/hide leaderboard", "Show chat history / Clear chat", "Show/hide background sectors", "Show/hide teammates names", "Show/hide minimap", "Enter chat message", "Quick respawn", "Toggle auto respawn", "Switch server [public/private]", "Show/hide targeting panel", "Start/stop targeting (following)", 
"Change target", "Show target on the minimap", "Show/hide quest", "Commands", "Feed me!", "Need backup at %currentSector%!", "Enemy spotted at %currentSector%!", "Need a teammate!", "Tank the virus!", "Eat the virus!", "Let's bait!", "Fake tricksplit!", "Fuck!", "Tricksplit!", "Left!", "Up!", "Right!", "Bottom!", "Save commands", "Theme", "Restore theme default settings", "Basic theming", "Theme preset", "Theme type", "Dark theme", "Light theme", "Main color", "Background", "Map borders", "Names", 
"Virus", "Names font", "Mass font", "Sectors font", "Names scale", "Mass scale", "Virus mass scale", "Food size", "Map borders width", "Sectors grid width", "Sectors font size", "Cells transparency", "Skins transparency", "Virus transparency", "Names & mass transparency", "Virus stroke size", "Teammate indicator", "Menu theme", "Button text", "Panel", "Panel (2)", "Panel text", "Panel text (2)", "Button #1", "Button #1 (2)", "Button #2", "Button #2 (2)", "Button #3", "Button #3 (2)", "Button #4", 
"Panel background image", "Transparency", "Time", "Top 5 mass", "Leaderboard - me", "Leaderboard - teammate", "HUD font", "HUD scale", "Message background", "Message text", "Message time", "Message nick", "Command text", "Command time", "Command nick", "Minimap", "Sectors", "Current sector", "Guides", "My cell stroke", "Teammates", "Death location", "Minimap font", "Nick font", "Minimap width", "Sectors transparency", "Nick stroke size", "My cell size", "My cell stroke size", "Graphics / cursors", 
"Custom cursor image", "Chat is visible!", "Chat is hidden!", "Skins are visible!", "Small bots are visible!", "Auto respawn is on!", "Auto respawn is off!", "Auto zoom is on!", "Auto zoom is off!", "Target not set", "Dead", "Distance", "Mass altogether", "Active players", "Total mass", "Export / import settings", "Export settings", "Import settings", 'To import selected settings paste an exported code below and press the "Import settings" button.', "Profiles", "Add skins", "Thanks to Awesome!", 
"Save settings", "Saved!", "Reset to default", "Close", "Active parties", "No active parties ;(", "Playlist", "PAUSE!", "Temporary unblock", "Score", "Leaderboard", "User", "User %user% has been muted.", "User %user% has been unmuted.", "Mute", "Muted users", "Active users", "Free Coins", "navigator", "language", "userLanguage", "comm1", "comm2", "comm4", "comm5", "comm6", "comm9", "comm0", "comm13", "comm14", "&amp;", "&lt;", "&gt;", "&#39;", "&#x2F;", "smile.svg", "smirk.svg", "xgrin.svg", "joy.svg", 
"sad.svg", "cry.svg", "tongue.svg", "kiss.svg", "smileh.svg", "heart.svg", "cool.svg", "astonished.svg", "neutral.svg", "unamused.svg", "pouting.svg", "sleep.svg", "relaxed.svg", "expressionless.svg", "money.svg", "angel.svg", "devil.svg", "poo.svg", "finger.svg", "clap.svg", "ok.svg", "victory.svg", "thumb.svg", "OGARio v3", "#01d9cc", "#00243e", "#ffffff", "#000000", "#002f52", "#00b9e8", "#5000ff", "ubuntu-bold", "ubuntu", "ogario-v3", "#8096a7", "#018cf6", "#0176ce", "#0099c0", "#814ee3", "#bf00aa", 
"#a80096", "http://cdn.ogario.ovh/static/img/pattern.png", "rgba(0,0,0,0.4)", "http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur", "OGARio v2", "#111111", "#ff7800", "#292929", "#666666", "#e16400", "rgba(255,120,0,0.9)", "OGARio LE", "#b5a642", "rgba(181,166,66,0.9)", "SniiKz's Style", "#3b3b3b", "#fc0079", "#1d0526", "#65458f", "#4f0242", "#6b0036", "#4d0227", "#aa084e", "#80063b", "#5974ff", "rgba(36,36,36,0.49)", "#737373", "#1fe000", "#545454", "#05ff00", "rgba(36,36,36,0.9)", "#4d4d4d", 
"#f0ff3d", "#acba07", "#305eff", "http://cdn.ogario.ovh/static/img/cursors/cursor_01.cur", "HKG Style", "#651fff", "Agar.io Light", "#f2fbff", "#858a8c", "#ced6d9", "#33ff33", "#2de52d", "rgba(255,255,255,0.9)", "Agar.io Dark", "#333333", "#8d5fe6", "#f300d8", "#222222", "#bbbbbb", "#428bca", "#5cb85c", "#449d44", "#f0ad4e", "#d9534f", "#c9302c", "Agar.io", "#5bc0de", "#3071a9", "#000a11", "rgba(191,0,170,0.9)", "localStorage", "ogarioThemeSettings", "hasOwnProperty", "stringify", "getItem", "removeItem", 
"reload", "<style type='text/css'>", "appendTo", "html", "append", '<div class="preset-box"><span class="title-box">', '</span><div class="select-wrapper"><select id="', '" class="form-control"></select></div></div>', "name", "</option>", "val", "change", "value", '<div class="color-box"><span class="title-box">', '" id="', '" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>', "-picker", "colorpicker", "hex", "changeColor.colorpicker", "toHex", '-picker"><input type="text" value="', 
"rgba", "rgba(", "toRGB", '-value" class="value">', '-slider" type="range" min="', '" max="', '" step="', '" value="', "-slider", "input", "-value", '<div class="input-box"><span class="title-box">', '</span><input id="', '" class="form-control" placeholder="', '" /></div>', "customCursor", '<div class="cursor-box"><a href="#" class="active"><img src="', '<div class="cursor-box"><a href="#"><img src="', '"></a></div>', "Weight", "Family", '<div class="font-box"><span class="title-box">', '<option value="ubuntu">Ubuntu</option><option value="ubuntu-bold">Ubuntu Bold</option>', 
'<option value="roboto">Roboto</option><option value="roboto-bold">Roboto Bold</option>', "indexOf", "roboto", "Roboto", "oswald", "Oswald", "#theme", '"></a></li><li class="theme-menu-tab"><a href="#theme-menu" class="icon-menu" data-toggle="tab-tooltip" data-container="body" title="', "menuTheming", '"></a></li><li class="theme-hud-tab"><a href="#theme-hud" class="icon-display" data-toggle="tab-tooltip" data-container="body" title="', "hudTheming", '"></a></li><li class="theme-chat-tab"><a href="#theme-chat" class="icon-bubbles" data-toggle="tab-tooltip" data-container="body" title="', 
"chatTheming", '"></a></li><li class="theme-minimap-tab"><a href="#theme-minimap" class="icon-location2" data-toggle="tab-tooltip" data-container="body" title="', "miniMapTheming", '"></a></li><li class="theme-images-tab"><a href="#theme-images" class="icon-compass" data-toggle="tab-tooltip" data-container="body" title="', "imagesTheming", '"></a></li></ul><div id="theme-main" class="submenu-panel"></div><div id="theme-menu" class="submenu-panel"></div><div id="theme-hud" class="submenu-panel"></div><div id="theme-chat" class="submenu-panel"></div><div id="theme-minimap" class="submenu-panel"></div><div id="theme-images" class="submenu-panel"></div>', 
"addPresetBox", "#theme-main", "themePreset", "preset", "changeThemePreset", "addColorBox", "bgColor", "setBgColor", "bordersColor", "gridColor", "sectorsColor", "namesColor", "namesStrokeColor", "massColor", "massStrokeColor", "virusColor", "virusStrokeColor", "foodColor", "teammatesIndColor", "cursorTrackingColor", "splitRangeColor", "addFontBox", "namesFont", "massFont", "sectorsFont", "addSliderBox", "sectorsFontSize", "namesScale", "foodSize", "setFoodColor", "bordersWidth", "cellsAlpha", "skinsAlpha", 
"textAlpha", "#theme-menu", "menuPreset", "changeMenuPreset", "setMenuOpacity", "menuMainColor", "setMenuMainColor", "setMenuButtons", "menuPanelColor", "menuPanelColor2", "setMenuPanelColor", "menuTextColor", "menuTextColor2", "setMenuTextColor", "btn1Color", "btn1Color2", "btn2Color", "btn2Color2", "btn3Color", "btn4Color", "btn4Color2", "addInputBox", "menuBg", "Image URL", "setMenuBg", "#theme-hud", "hudMainColor", "setHudColors", "addRgbaColorBox", "hudColor", "hudTextColor", "statsHudColor", 
"timeHudColor", "top5MassColor", "lbMeColor", "hudFont", "setHudFont", "hudScale", "setHudScale", "setChatColors", "#theme-chat", "messageTextColor", "messageTimeColor", "messageNickColor", "commandsColor", "commandsTextColor", "commandsTimeColor", "commandsNickColor", "chatBoxColor", "setChatScale", "#theme-minimap", "setMiniMapSectorsColor", "miniMapSectorColor", "miniMapMyCellColor", "miniMapGuidesColor", "miniMapFont", "setMiniMapFont", "miniMapNickFont", "miniMapWidth", "setMiniMapWidth", "miniMapSectorsOpacity", 
"setMiniMapSectorsOpacity", "miniMapMyCellSize", "miniMapMyCellStrokeSize", "#theme-images", "customBackground", "Cursor image URL", "setCustomCursor", "http://cdn.ogario.ovh/static/img/cursors/cursor_", "addCursorBox", ".cur", "click", "#theme-images .cursor-box a", "img", "src", "#customCursor", "active", "addClass", "</button>", "#theme .btn-save", "preventDefault", "saved", "saveThemeSettings", "saveSett", '<div class="restore-settings"><a href="#">', "restoreThemeSettings", "</a></div>", "#theme .restore-settings a", 
"#color", "#theme .", "setValue", "input[type=text]#", "select#", "setTheme", "background-color", "optimizedFood", "preDrawPellet", "preDrawIndicator", "url(", "background-image", "none", "*{cursor:url(", "), auto !important}", "*{cursor: auto}", "addCustomCSS", "cursorCSS", "changePreset", "setMenu", "#helloContainer, #hotkeys, #exp-imp", "opacity", "menuOpacity", "::-moz-selection{background-color:", "!important}::selection{background-color:", "!important}.menu-main-color,#quick-menu a:hover,.quick,.quick:focus,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs a:hover,.submenu-tabs .active,#stats center,#exp-imp h1{color:", 
"}#exp-bar .progress-bar-striped,.quick:hover,.rangeslider__fill{background-color:", "}#main-menu,.agario-side-panel,#hotkeys,#exp-imp{border-color:", "}.ps-scrollbar-y{background-color:", "menuMainColorCSS", "}label:hover,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.nick .input-group-btn,.skin .input-group-btn,#stream-mode,#hide-url,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs,#exp-bar .progress,#quick-menu a:hover,.quick,.select-wrapper,#hotkeys-cfg div.row:hover,#hotkeys-cfg .command-in,#exp-imp-settings textarea,.restore-settings{background-color: ", 
"}.agario-panel h5,.agario-side-panel h5,#stats h2,.menu-tabs,.submenu-tabs,#skins a.default,#stats hr,#hotkeys-cfg div.row, #exp-imp h1{border-color: ", "}.quick:hover,#skins a,#profiles{color:", "!important}", "menuPanelColorCSS", ".agario-panel,.agario-side-panel,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.dark .yt-username,#stream-mode,#hide-url,.menu-tabs a,.submenu-tabs a,#skins a.default:hover,#quick-menu a,#prev-profile.default:hover,#next-profile.default:hover,#statsText,#hotkeys,#hotkeys-cfg .command-in,#exp-imp{color:", 
"}#skins a.default:hover{border-color:", "}::-webkit-input-placeholder{color:", "!important}::-moz-placeholder{color:", "}#hotkeys-cfg .command-in,#theme .color-box{border-color:", "a,a:hover{color:", "}.btn,#hotkeys-cfg .custom-key-in{color:", "menuBtnTextColor", "}.btn-primary{background-color:", "!important}.btn-primary:active,.btn-primary:disabled,.btn-primary:focus,.btn-primary:hover{background-color:", "!important}.btn-warning{background-color:", "!important}.btn-warning:active,.btn-warning:disabled,.btn-warning:focus,.btn-warning:hover{background-color:", 
"btn3Color2", "!important}.btn-danger{background-color:", ";border-color:", "menuButtonsCSS", "#menuBg", ".menu-panel, .agario-side-panel, #hotkeys, #exp-imp", ".hud-main-color,#top5-hud a,#target-panel-hud a:hover,#target-panel-hud a.active,#message-menu a{color:", "}.hud,.hud-b,#top5-hud a:hover,#target-panel-hud a{color:", "}.stats-hud-color{color:", "}.time-hud-color{color:", "}.top5-mass-color{color:", "}#leaderboard-positions .me{color:", "}#leaderboard-positions .teammate{color:", "lbTeammateColor", 
"hudCSS", "hudFontWeight", "floor", "#overlays-hud", "#leaderboard-hud, #time-hud", "#top5-pos", "padding-left", "#time-hud", "#pause-hud", "#target-hud", "padding-top", "#message,#messages li,.toast-success{background-color:", "messageColor", "}#message,.message-text,.toast-success .message-text{color:", "}.message-nick,.mute-user,.mute-user:hover,.toast-success .message-nick,.toast .mute-user,.toast .mute-user:hover{color:", "}.toast-warning{background-color:", "}.command-text,.toast-warning .command-text{color:", 
"}.command-nick,.toast-warning .command-nick,.toast-warning .mute-user,.toast-warning .mute-user:hover{color:", "}.command-time{color:", "}#chat-box{background-color:", "chatCSS", "chatScale", "#message-box, #messages, #toast-container, #chat-box", "#messages, #toast-container, #chat-box", "#message-box", ".user-list", "#toast-container{width:", "px;font-size:", "px}", "chatScaleCSS", "resetMiniMapSectors", "#minimap-hud", "miniMapTop", "setFonts", "setCustomBackground", "setChat", "loadThemeSettings", 
"I <3 OGARio", "mainColor", "http://cdn.ogario.ovh/static/sounds/notification_02.mp3", "v3 (3.3.2)", "ws://164.132.227.101:3000", "now", "b2dhcmlvLm92aA==", "playerX", "mapOffsetX", "playerY", "mapOffsetY", "eject", "feedInterval", "feed", "split", "vanillaSkins", "customSkins", "vannillaSkins", "selectBiggestCell", "showTop5", "setTop5", "#top5-hud", "showTargeting", "setTargetingHUD", "#target-hud, #target-panel-hud", "hide", "showTime", "displayTime", "splitRange", "showSplitInd", "oppRings", 
"teammatesInd", "oppColors", "noSkins", "setSkins", "showCustomSkins", "displayChatInfo", "showSkinsMsg", "transparentSkins", "#stats-hud", "toggle", "showFood", "showGrid", "showMiniMapGuides", ":teams", "gameMode", "#leaderboard-hud", "showBgSectors", "hideSmallBots", "hideSmallBotsMsg", "noNames", "hideTeammatesNames", "showMass", "showMiniMap", "setMiniMap", "showQuest", "setQuest", "#quest-hud", "autoZoom", "autoZoomMsg", "zoomResetValue", "zoomValue", "lastDeath", "deathLocations", "retryResp", 
":visible", ".btn-play-guest", "quickResp", "gameServerConnect", "autoResp", "setAutoResp", "#overlays", "stop", ".btn-play", "prop", "checked", "#skipStats", "skipStats", "<input>", "#leaderboard-positions", "select", "execCommand", "copy", "pause", "removeClass", "hud-text-center", "normalLb", "ogario.ovh", "fpsAtTop", "hud-bottom", "hud-top", "blockPopups", "unblockPopups", "#openfl-content, #openfl-overlay", "#freeCoins, #gifting, #openShopBtn, #dailyQuests", "#block-warn", "block-popups", "disabled", 
"leaderboardPositionsHUD", "innerHTML", "showStats", "showStatsMass", "playerMass", " | ", "playerBestMass", "score", "STE", " | STE: ", "showStatsN16", "playerCellsMass", "/16", "showStatsFPS", "FPS: ", "rFps", "statsHUD", "displayStats", "toLocaleString", "timeHUD", "textContent", "parties", '<li><a href="http://agar.io/#', "\" onclick=\"$('#party-token').val('", "'); $('#join-party-btn-2').click();\">http://agar.io/#", "</a></li>", "activeParties", "top5", "top5limit", "<li>", '<a href="#" data-user-id="', 
'<span class="top5-mass-color">[', "]</span> ", "escapeHTML", "</li>", "top5totalMass", "top5totalPlayers", "chatHistory", ': </span><span class="message-text">', "message", "</span></li>", "clearChatHistory", "#messages", "clear", "#chat-box .message", "remove", "info", "error", "hideChat", "disableChat", "setHideChat", "hideChatMsg", "setShowChatBox", "showChatBox", "#chat-box", "sendChatMessage", "blur", "focus", "showNickDialog", "#oferwallContainer", "closeOfferwall", "closeVideoContainer", 
"test", "ogarioSettings", "parse", "#export-settings", "#import-settings", "#import-", "setItem", "showMiniMapGrid", "chatSounds", "setChatSoundsBtn", "centeredLb", "setCenteredLb", "setNormalLb", "setBlockPopups", "saveSettings", "push", "Profile #", "ogarioSelectedProfile", "selectedProfile", "skinURL", "skin-preview", "#skin-preview", "default", "' width='500'>\"></a>", "#skin-popover", "popover", "fadeIn", "empty", "crossOrigin", "Anonymous", "onload", "changeSkinPreview", "setSkinPreview", "prev-profile", 
"next-profile", "#clantag", "#skin", ".skin", "#skins a", "selected", "#skins a[data-profile='", "setPlayerSettings", "setProfile", '<label><input type="checkbox" id="', '" class="js-switch"> ', "#og-options", '"><h5 class="menu-main-color">', "</h5></div>", "<label>", ' <input type="checkbox" class="js-switch" id="', ': </span><span id="', '</span></div><input id="', '"></div>', "i18n_dict", '<div id="exp-bar" class="agario-panel"><span class="icon-user"></span><div class="agario-exp-bar progress"><span class="progress-bar-text">0/50</span><div class="progress-bar progress-bar-striped" style="width: 0%;"></div></div><div class="progress-bar-star">1</div></div><div id="main-menu" class="agario-panel"><ul class="menu-tabs"><li class="start-tab active"><a href="#main-panel" class="active icon-home" data-toggle="tab-tooltip" data-container="body" title="', 
"start", '"></a></li><li class="profile-tab"><a href="#profile" class="icon-user" data-toggle="tab-tooltip" data-container="body" title="', "profile", "settings", '"></a></li><li class="theme-tab"><a href="#theme" class="icon-droplet" data-toggle="tab-tooltip" data-container="body" title="', "theme", '"></a></li><li class="hotkeys-tab"><a href="#" class="hotkeys-link icon-keyboard" data-toggle="tab-tooltip" data-container="body" title="', "hotkeys", '"></a></li><li class="music-tab"><a href="#music" class="icon-music" data-toggle="tab-tooltip" data-container="body" title="Radio / ', 
'"></a></li></ul><div id="main-panel" class="menu-panel"></div><div id="profile" class="menu-panel"></div><div id="og-settings" class="menu-panel"><div class="submenu-panel"></div></div><div id="theme" class="menu-panel"></div><div id="music" class="menu-panel"></div></div>', '<a href="#" class="quick quick-menu icon-menu"></a><a href="#" class="quick quick-skins icon-images"></a><div id="profiles"><div id="prev-profile"></div><div id="skin-preview"></div><div id="next-profile"></div></div>', "#mainPanel div[role=form]", 
"#main-panel div[role=form] .form-group:first", "#nick", "before", '<input id="clantag" class="form-control" placeholder="Tag, e.g. \u24c2" maxlength="10"><div class="input-group nick"></div>', ".nick", '<span class="input-group-btn"><button id="stream-mode" class="btn active icon-eye"></button></span>', '<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (imgur.com direct link)" maxlength="40"><input type="hidden" id="color" value="', '" maxlength="7" /><span class="input-group-addon"><i></i></span><span class="input-group-btn"><button id="hide-url" class="btn active icon-eye"></button></span></div>', 
"#locationKnown, #locationUnknown", "#region", '<button class="btn btn-warning btn-server-info icon-cogs"></button>', "#agario-main-buttons", "clearfix", '<div id="server-info" class="form-group clearfix"><input id="server-ws" class="form-control" placeholder="Server WS"><button id="server-connect" class="btn btn-success icon-power"></button><button id="server-reconnect" class="btn btn-primary icon-redo2"></button><input id="server-token" class="form-control" placeholder="Server token"><button id="server-join" class="btn btn-success" data-itr="page_join_party">Join</button></div>', 
"#helloContainer div[role=form]", "after", '<div id="ogario-party" class="clearfix"><input id="party-token" class="form-control" placeholder="Party token"></div>', "#ogario-party", '<button id="join-party-btn-2" class="btn btn-success" data-itr="page_join_party">Join</button><button id="create-party-btn-2" class="btn btn-primary" data-itr="page_create_party">Create</button>', "#pre-join-party-btn:first, #join-party-btn:first, #create-party-btn:first, #leave-party-btn:first, #joinPartyToken:first, .party-icon-back:first", 
"#og-settings .submenu-panel", "#stats", "#statsContinue", "attr", "statsContinue2", ".center-container", '<div id="menu-footer" class="menu-main-color">', "visit", ' <a href="http://ogario.ovh" target="_blank">ogario.ovh</a> | ', "version", "#leftPanel, #rightPanel", "ogario-menu", "removeAttr", ".agario-profile-panel, .agario-panel-freecoins, .agario-panel-gifting, .agario-shop-panel, #dailyquests-panel", "#profile", "agario-side-panel", ".agario-profile-panel", '<div id="block-warn">', "blockWarn", 
"#exp-bar", "agario-profile-panel", ".agario-shop-panel", "#tags-container", ".btn-logout", ".left-container", '<div id="quick-menu" class="agario-panel agario-side-panel"><a href="#" class="quick-shop icon-cart" data-toggle="tab-tooltip" data-container="body" data-placement="left" title="', "page_shop", '"></a><a href="#" class="quick-free-coins icon-coin-dollar" data-toggle="tab-tooltip" data-container="body" data-placement="left" title="', "page_menu_main_free_coins", '"></a><a href="#" class="quick-free-gifts icon-gift" data-toggle="tab-tooltip" data-container="body" data-placement="left" title="', 
"page_menu_main_gifts", '"></a><a href="#" class="quick-quests icon-trophy" data-toggle="tab-tooltip" data-container="body" data-placement="left" title="', "page_menu_main_dailyquests", '"></a><a href="http://ogario.ovh/skins/" class="quick-more-skins icon-grin" target="_blank" data-toggle="tab-tooltip" data-container="body" data-placement="left" title="', ".right-container", ".agario-party-6", ".agario-party", ".agario-party h4, #cancel-party-btn", ".agario-party .btn", "btn-sm", '<div id="skins-panel" class="agario-panel agario-side-panel"><div id="skins"></div><a href="http://ogario.ovh/skins/" id="more-skins" class="btn btn-block btn-success" target="_blank">', 
"moreSkins", ".btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='page_option_dark_theme'], #options #darkTheme", "display", "#advertisement", "agario-panel", "#adsBottom", "#noNames, #showMass", '<div id="og-options"></div>', "animationGroup", "addOptions", "zoomGroup", "respGroup", "autoHideNames", "hideMyName", "namesStroke", "namesGroup", "autoHideMass", "hideEnemiesMass", "massStroke", "massGroup", "skinsGroup", "autoHideFood", "autoHideFoodOnZoom", "rainbowFood", 
"foodGroup", "myCustomColor", "transparentCells", "transparencyGroup", "gridGroup", "chatEmoticons", "showChatImages", "showChatVideos", "oneColoredTeammates", "virusesRange", "cursorTracking", "helpersGroup", "mouseSplit", "mouseFeed", "mouseInvert", "hudGroup", "showStatsSTE", "statsGroup", "extrasGroup", '<label class="noSkins">', " </label>", "#noSkins", ".noSkins", "#noColors", ".noColors", '<label class="skipStats">', ".skipStats", '<label class="showQuest">', "#showQuest", ".showQuest", "#options", 
"#settingsChoice", ".extrasGroup", "select-wrapper", ".animationGroup", "animation", "#og-settings", "#music", '<div class="agario-panel radio-panel"><h5 class="menu-main-color">Radio (', "thanks", ')</h5><audio src="http://frshoutcast.comunicazion.eu:8815/;" controls></audio><span class="playlist"><span class="icon-file-music"></span> <a href="http://frshoutcast.comunicazion.eu:8815/played.html?sid=1" target="_blank">', "playlist", '<div class="agario-panel sounds-panel"><h5 class="menu-main-color">', 
"sounds", '<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: \u24c2)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>', "Sound URL", "setMessageSound", ".sounds-panel", "commandSound", '<div id="overlays-hud"><div id="stats-hud" class="hud stats-hud-color"></div> <div id="top5-hud" class="hud"><h5 class="hud-main-color">Team top <span class="team-top">5</span></h5><div class="hud-main-color team-top-menu"><a href="#" data-limit="5" class="team-top-limit active">5</a> | <a href="#" data-limit="10" class="team-top-limit">10</a> | <a href="#" data-limit="100" class="team-top-limit">100</a></div><ol id="top5-pos"></ol><div id="top5-total"><span class="hud-main-color icon-users"></span> ', 
"totalPartyPlayers", ': <span id="top5-total-players" class="top5-mass-color">0</span><br><span class="hud-main-color icon-pacman"></span> ', "totalPartyMass", ': <span id="top5-total-mass" class="top5-mass-color">0</span></div></div> <div id="time-hud" class="hud time-hud-color"></div> <div id="pause-hud" class="hud">', "targetNotSet", ']</span></div><div id="target-summary"></div></div><div id="target-panel-hud" class="hud"><a href="#" id="set-targeting" class="icon-target"></a><a href="#" id="set-private-minimap" class="icon-location2"></a><a href="#" id="cancel-targeting" class="icon-cancel-circle"></a><a href="#" id="change-target" class="icon-arrow-right"></a></div> <div id="quest-hud" class="hud"></div></div>', 
"enterChatMsg", '..." maxlength="80"></div>', '<div id="chat-box"></div>', "#chat-emoticons", '<img src="http://cdn.ogario.ovh/static/emoticons/', '" alt="', '" class="emoticon">', '<div id="exp-imp"><div id="exp-imp-menu"><button id="close-exp-imp" class="btn btn-danger">', "close", '</button></div><div id="exp-imp-settings"></div></div>', "#exp-imp-settings", "<h1>", "exportSettings", "exportInfo", "</h2>", "addOption", "export-ogarioCommands", "commands", "export-ogarioHotkeys", "export-ogarioPlayerProfiles", 
"profiles", "export-ogarioSettings", "export-ogarioThemeSettings", '<textarea id="export-settings" class="form-control" rows="14" cols="100" spellcheck="false" readonly /><button id="export-settings-btn" class="btn btn-block btn-success">', "importSettings", "</h1><h2>", "importInfo", "import-ogarioCommands", "import-ogarioHotkeys", "import-ogarioPlayerProfiles", "import-ogarioSettings", '<textarea id="import-settings" class="form-control" rows="14" cols="100" spellcheck="false" /><button id="import-settings-btn" class="btn btn-block btn-success">', 
"setThemeMenu", "#skins", '<div class="skin-box"><a href="#profile-', '" id="profile-', '" data-profile="', "profile-", "#profile-", ".menu-tabs a", "switchMenuTabs", "menu-panel", ".submenu-tabs a", "submenu-panel", ".quick-menu", "setShowQuickMenu", ".quick-skins", "showSkinsPanel", "setShowSkinsPanel", "region", "#gamemode", ":party", "leaveParty", "#quality", "getQuality", "selectProfile", "data-profile", "#prev-profile", "#next-profile", "nextProfile", "#stream-mode", "streamMode", "setStreamMode", 
"#hide-url", "hideSkinUrl", "setHideSkinUrl", ".btn-server-info", "#server-connect", "#server-ws", "#server-reconnect", "gameServerReconnect", "gameServerJoin", "setSettings", ".js-switch-vanilla", "restoreSettings", "#og-settings .btn-export", "#exp-imp", "perfectScrollbar", "#close-exp-imp", "fadeOut", "#unblock-popups", "#openfl-overlay.disabler", ".quick-shop", "openShop", ".quick-free-coins", "showFreeCoins", "showGifting", ".quick-quests", "showQuests", "#set-targeting", "setTargeting", "#cancel-targeting", 
"#set-private-minimap", "#change-target", "changeTarget", "data-limit", "setTop5limit", ".team-top-limit", "setTarget", "data-user-id", "muteChatUser", "btn-red btn-mute-user", "btn-green btn-unmute-user", "unmute", ".btn-unmute-user", "mute", ".chat-active-users", "displayChatActiveUsers", ".chat-muted-users", "displayChatMutedUsers", ".show-chat-emoticons", "#message", "#chat-emoticons .emoticon", "alt", "top5pos", "top5-pos", "top5-total-mass", "top5-total-players", "time-hud", "quest-hud", "#canvas", 
"bind", "contextmenu", ".btn", "[data-toggle='tab-tooltip']", "tooltip", ".submenu-panel, #chat-box, #exp-imp-settings, #export-settings, #import-settings", "prototype", "slice", "call", ".js-switch", "forEach", "small", "input[type='range']", "rangeslider", "options", "toast-bottom-left", "hasClass", "hotkeys-link", "find", "href", "parent", " .submenu-panel", "not", ".menu-panel", "noColors", "setCanvasScale", "setRegion", "setParty", "#join-party-btn-2", "querySelectorAll", "#showMass", "devicePixelRatio", 
"Medium", "Low", "canvasScale", "icon-eye-blocked", "#clantag, #nick, #party-token", "stream-mode", "hide-url", "showQuickMenu", "#quick-menu", "#skins-panel", ".btn-play, .btn-play-guest", "onPlay", ".btn-spectate", "onSpectate", "#create-party-btn-2", "onCreate", "skipServerData", "joinParty", "onJoin", "#statsContinue2", "#stats, #main-panel", "isSocketOpen", "sendPartyData", "addKeyListeners", "spectate", "create", "ogarioTracker", "ogarioTracker.send", "pageview", "sendPlayerJoin", "sendPlayerDeath", 
"join", "partyToken", "createParty", "sendPlayerSpawn", "cacheCustomSkin", "#main-panel", "unlockButtons", "trim", "cacheQueue", "cacheSkin", "shift", "clip", "customSkinsCache", "toDataURL", "_cached", "complete", "customSkinsMap", "loadSkin", "getCachedSkin", "fpsLastRequest", "renderedFrames", "mapOffsetFixed", "currentSector", "fromCharCode", "mapSize", "sectorsY", "sectorsX", "mapOffset", "showMapBorders", "moveTo", "lineTo", "miniMap", "clearRect", "minimap", "miniMapCtx", "drawSelectedCell", 
"calculateCurrentSector", "miniMapFontWeight", "miniMapFontFamily", "miniMapSectors", "drawMiniMapSectors", "save", "translate"];
(function(_0x58814d, _0x3f7ac2) {
  var _0x21a03d = function(_0xd8ffdb) {
    while (--_0xd8ffdb) {
      _0x58814d["push"](_0x58814d["shift"]());
    }
  };
  var _0x59947b = function() {
    var _0x103fa0 = {"data":{"key":"cookie", "value":"timeout"}, "setCookie":function(_0x1e07c4, _0x2087f8, _0x21f4fa, _0x2f7eb6) {
      _0x2f7eb6 = _0x2f7eb6 || {};
      var _0x159797 = _0x2087f8 + "=" + _0x21f4fa;
      var _0x11345d = 0;
      for (var _0x11345d = 0, _0x44373f = _0x1e07c4["length"]; _0x11345d < _0x44373f; _0x11345d++) {
        var _0x57abbc = _0x1e07c4[_0x11345d];
        _0x159797 += "; " + _0x57abbc;
        var _0x18f151 = _0x1e07c4[_0x57abbc];
        _0x1e07c4["push"](_0x18f151);
        _0x44373f = _0x1e07c4["length"];
        if (_0x18f151 !== !![]) {
          _0x159797 += "=" + _0x18f151;
        }
      }
      _0x2f7eb6["cookie"] = _0x159797;
    }, "removeCookie":function() {
      return "dev";
    }, "getCookie":function(_0x154ca7, _0xb37b8c) {
      _0x154ca7 = _0x154ca7 || function(_0x39ae38) {
        return _0x39ae38;
      };
      var _0x1e02a2 = _0x154ca7(new RegExp("(?:^|; )" + _0xb37b8c["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
      var _0x10f52a = function(_0x1ca9d6, _0x22a8a9) {
        _0x1ca9d6(++_0x22a8a9);
      };
      _0x10f52a(_0x21a03d, _0x3f7ac2);
      return _0x1e02a2 ? decodeURIComponent(_0x1e02a2[1]) : undefined;
    }};
    var _0x569983 = function() {
      var _0x24930e = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return _0x24930e["test"](_0x103fa0["removeCookie"]["toString"]());
    };
    _0x103fa0["updateCookie"] = _0x569983;
    var _0x3b0cf0 = "";
    var _0x2484e7 = _0x103fa0["updateCookie"]();
    if (!_0x2484e7) {
      _0x103fa0["setCookie"](["*"], "counter", 1);
    } else {
      if (_0x2484e7) {
        _0x3b0cf0 = _0x103fa0["getCookie"](null, "counter");
      } else {
        _0x103fa0["removeCookie"]();
      }
    }
  };
  _0x59947b();
})(_0x282b, 381);
var _0xb282 = function(_0x4ebb1f, _0x5ac658) {
  _0x4ebb1f = _0x4ebb1f - 0;
  var _0x508aa0 = _0x282b[_0x4ebb1f];
  return _0x508aa0;
};
!function(_0x10cbb0, _0xe98c87, _0x5c1379) {
  var _0x572090 = function() {
    var _0x993ad = !![];
    return function(_0x4ea8f9, _0x558e67) {
      var _0x181a2d = _0x993ad ? function() {
        if (_0x558e67) {
          var _0x4b9db1 = _0x558e67["apply"](_0x4ea8f9, arguments);
          _0x558e67 = null;
          return _0x4b9db1;
        }
      } : function() {
      };
      _0x993ad = ![];
      return _0x181a2d;
    };
  }();
  function _0x39fec6(_0x418432, _0x4b03be, _0x26c575, _0x2553c3) {
    this["id"] = _0x418432, this[_0xb282("0x0")] = _0x4b03be, this[_0xb282("0x1")] = _0x26c575, this["skinURL"] = _0x2553c3, this["x"] = 0, this["y"] = 0, this[_0xb282("0x2")] = 0, this["lastY"] = 0, this[_0xb282("0x3")] = 0, this[_0xb282("0x4")] = "", this["color"] = _0x18e354[_0xb282("0x5")], this[_0xb282("0x6")] = !1, this[_0xb282("0x7")] = null, this[_0xb282("0x8")] = 2 * Math["PI"], this["setColor"] = function(_0xf58976) {
      7 == _0xf58976["length"] && (this[_0xb282("0x9")] = _0xf58976);
    }, this[_0xb282("0xa")] = function(_0x14f6cf, _0x5266c6, _0x25ad5b, _0x1d1dae, _0x57ba60) {
      if (!(!this[_0xb282("0x6")] || _0x1d1dae && _0x57ba60 && this["id"] != _0x57ba60)) {
        this[_0xb282("0x2")] = (29 * this[_0xb282("0x2")] + this["x"]) / 30, this[_0xb282("0xb")] = (29 * this[_0xb282("0xb")] + this["y"]) / 30;
        var _0x21db73 = (this[_0xb282("0x2")] + _0x5266c6) * _0x25ad5b, _0x160dfc = (this[_0xb282("0xb")] + _0x5266c6) * _0x25ad5b;
        this[_0xb282("0x0")][_0xb282("0xc")] > 0 && (_0x14f6cf[_0xb282("0xd")] = _0x18e354["miniMapNickFontWeight"] + " " + _0x18e354[_0xb282("0xe")] + _0xb282("0xf") + _0x18e354[_0xb282("0x10")], _0x14f6cf[_0xb282("0x11")] = _0xb282("0x12"), _0x18e354["miniMapNickStrokeSize"] > 0 && (_0x14f6cf[_0xb282("0x13")] = _0x18e354[_0xb282("0x14")], _0x14f6cf[_0xb282("0x15")] = _0x18e354[_0xb282("0x16")], _0x14f6cf[_0xb282("0x17")](this[_0xb282("0x0")], _0x21db73, _0x160dfc - (2 * _0x18e354[_0xb282("0x18")] + 
        2))), _0x14f6cf[_0xb282("0x19")] = _0x18e354[_0xb282("0x1a")], _0x14f6cf["fillText"](this["nick"], _0x21db73, _0x160dfc - (2 * _0x18e354[_0xb282("0x18")] + 2))), _0x14f6cf[_0xb282("0x1b")](), _0x14f6cf[_0xb282("0x1c")](_0x21db73, _0x160dfc, _0x18e354[_0xb282("0x18")], 0, this[_0xb282("0x8")], !1), _0x14f6cf[_0xb282("0x1d")](), _0x14f6cf["fillStyle"] = _0x34bd23["oneColoredTeammates"] ? _0x18e354[_0xb282("0x5")] : this["color"], _0x14f6cf[_0xb282("0x1e")]();
      }
    };
  }
  function _0x4d2228() {
    this[_0xb282("0x1f")] = "", this[_0xb282("0x20")] = null, this[_0xb282("0x21")] = null, this[_0xb282("0x9")] = "#FFFFFF", this[_0xb282("0x22")] = !1, this[_0xb282("0x23")] = 2, this[_0xb282("0x24")] = "#000000", this[_0xb282("0xd")] = _0xb282("0x25"), this[_0xb282("0x26")] = _0xb282("0x27"), this["fontWeight"] = 700, this[_0xb282("0x28")] = 16, this[_0xb282("0x29")] = 3, this[_0xb282("0x2a")] = 1, this["quality"] = 1, this[_0xb282("0x2b")] = 0, this[_0xb282("0x2c")] = !1, this[_0xb282("0x2d")] = 
    !1, this[_0xb282("0x2e")] = function(_0x262cd4) {
      this["txt"] !== _0x262cd4 && (this[_0xb282("0x1f")] = _0x262cd4, this[_0xb282("0x2c")] = !0, this[_0xb282("0x2d")] = !0);
    }, this["setColor"] = function(_0x406575) {
      this[_0xb282("0x9")] !== _0x406575 && (this["color"] = _0x406575, this[_0xb282("0x2c")] = !0);
    }, this[_0xb282("0x2f")] = function(_0x3cdbbd) {
      this["stroke"] !== _0x3cdbbd && (this[_0xb282("0x22")] = _0x3cdbbd, this[_0xb282("0x2c")] = !0);
    }, this[_0xb282("0x30")] = function(_0x5b310c) {
      this[_0xb282("0x22")] && this[_0xb282("0x23")] != _0x5b310c && (this[_0xb282("0x23")] = _0x5b310c, this[_0xb282("0x2c")] = !0, this[_0xb282("0x2d")] = !0);
    }, this[_0xb282("0x31")] = function(_0x1672c5) {
      this[_0xb282("0x22")] && this["strokeColor"] !== _0x1672c5 && (this[_0xb282("0x24")] = _0x1672c5, this[_0xb282("0x2c")] = !0);
    }, this[_0xb282("0x32")] = function() {
      this[_0xb282("0xd")] = this[_0xb282("0x33")] + " " + this[_0xb282("0x28")] + _0xb282("0xf") + this[_0xb282("0x26")];
    }, this[_0xb282("0x34")] = function(_0x36e8f5) {
      this[_0xb282("0x26")] !== _0x36e8f5 && (this[_0xb282("0x26")] = _0x36e8f5, this[_0xb282("0x32")](), this["redraw"] = !0, this[_0xb282("0x2d")] = !0);
    }, this[_0xb282("0x35")] = function(_0x1a1e60) {
      this[_0xb282("0x33")] != _0x1a1e60 && (this[_0xb282("0x33")] = _0x1a1e60, this["setFont"](), this[_0xb282("0x2c")] = !0, this[_0xb282("0x2d")] = !0);
    }, this[_0xb282("0x36")] = function(_0x3bdaff) {
      this[_0xb282("0x28")] != _0x3bdaff && (this[_0xb282("0x28")] = _0x3bdaff, this[_0xb282("0x29")] = ~~(.2 * _0x3bdaff), this[_0xb282("0x32")](), this[_0xb282("0x2c")] = !0);
    }, this[_0xb282("0x37")] = function(_0x54a33e) {
      this[_0xb282("0x2a")] != _0x54a33e && (this[_0xb282("0x2a")] = _0x54a33e, this[_0xb282("0x2c")] = !0);
    }, this[_0xb282("0x38")] = function() {
      this[_0xb282("0x20")] || (this[_0xb282("0x20")] = document[_0xb282("0x39")](_0xb282("0x3a")), this[_0xb282("0x21")] = this[_0xb282("0x20")][_0xb282("0x3b")]("2d"), this["txtCtx"][_0xb282("0x3c")] = !0);
    }, this[_0xb282("0x3d")] = function(_0x39f871, _0x9113e6, _0x58d3c1, _0x78f57b, _0x29446b, _0x331430) {
      this[_0xb282("0x3e")](_0x39f871), this[_0xb282("0x34")](_0x9113e6), this[_0xb282("0x35")](_0x58d3c1), this["setStroke"](_0x78f57b), this["setStrokeWidth"](_0x29446b), this["setStrokeColor"](_0x331430);
    }, this[_0xb282("0x3f")] = function() {
      return (this[_0xb282("0x2d")] || !this[_0xb282("0x2d")] && !this[_0xb282("0x2b")]) && (this["txtCtx"][_0xb282("0xd")] = this["fontWeight"] + _0xb282("0x40") + this[_0xb282("0x26")], this[_0xb282("0x2b")] = this[_0xb282("0x21")][_0xb282("0x41")](this[_0xb282("0x1f")])[_0xb282("0x42")], this[_0xb282("0x2d")] = !1), this[_0xb282("0x28")] / 10 * this["measuredWidth"] + 2 * this[_0xb282("0x23")];
    }, this[_0xb282("0x43")] = function() {
      return this[_0xb282("0x38")](), this[_0xb282("0x2c")] && (this[_0xb282("0x2c")] = !1, this["txtCanvas"][_0xb282("0x42")] = this[_0xb282("0x3f")](), this[_0xb282("0x20")][_0xb282("0x44")] = this[_0xb282("0x28")] + this[_0xb282("0x29")], this[_0xb282("0x21")][_0xb282("0xd")] = this[_0xb282("0xd")], this[_0xb282("0x21")][_0xb282("0x45")] = 1, this[_0xb282("0x21")][_0xb282("0x13")] = this[_0xb282("0x23")], this[_0xb282("0x21")][_0xb282("0x15")] = this[_0xb282("0x24")], this[_0xb282("0x21")][_0xb282("0x19")] = 
      this[_0xb282("0x9")], this[_0xb282("0x22")] && this[_0xb282("0x21")][_0xb282("0x17")](this[_0xb282("0x1f")], this[_0xb282("0x23")], this[_0xb282("0x28")] - this[_0xb282("0x29")] / 2), this[_0xb282("0x21")][_0xb282("0x46")](this["txt"], this[_0xb282("0x23")], this[_0xb282("0x28")] - this[_0xb282("0x29")] / 2)), this[_0xb282("0x20")];
    };
  }
  function _0x1044b0(_0x3b75ff, _0x383995, _0x27d011, _0xcd0d77, _0x3b923d, _0x239be8) {
    this["x"] = _0x3b75ff, this["y"] = _0x383995, this[_0xb282("0x47")] = _0x27d011, this[_0xb282("0x48")] = _0xcd0d77, this[_0xb282("0x49")] = _0x3b923d, this["virMassShots"] = _0x239be8, this["size"] = 0, this[_0xb282("0x0")] = "", this["nickCanvas"] = null, this[_0xb282("0x3")] = 0, this[_0xb282("0x4a")] = 0, this[_0xb282("0x4b")] = 0, this[_0xb282("0x4c")] = null, this[_0xb282("0x4d")] = "", this[_0xb282("0x29")] = 0, this[_0xb282("0x2a")] = 1, this[_0xb282("0x4e")] = 1, this[_0xb282("0x4f")] = 
    1, this[_0xb282("0x50")] = 3, this["strokeScale"] = 1, this[_0xb282("0x28")] = 26, this[_0xb282("0x51")] = 26, this[_0xb282("0x52")] = 0, this[_0xb282("0x53")] = 26, this[_0xb282("0x54")] = 26, this[_0xb282("0x55")] = 3, this["massStrokeSize"] = 3, this[_0xb282("0x56")] = !1, this[_0xb282("0x57")] = !0, this[_0xb282("0x58")] = !0, this[_0xb282("0x59")] = !1, this[_0xb282("0x5a")] = !1, this[_0xb282("0x5b")] = !1, this["strokeMass"] = !1, this[_0xb282("0x5c")] = function(_0x5be97f, _0x418945, 
    _0x244a8e, _0x4fb97c, _0x4874d6, _0x55b6c8) {
      this["x"] = _0x5be97f, this["y"] = _0x418945, this[_0xb282("0x47")] = _0x4fb97c, this[_0xb282("0x48")] = _0x4874d6, this["setMass"](_0x244a8e), this[_0xb282("0x5d")](_0x55b6c8);
    }, this[_0xb282("0x5e")] = function(_0x4ba30f) {
      if (this[_0xb282("0x5f")] != _0x4ba30f && (this[_0xb282("0x5f")] = _0x4ba30f, _0x4ba30f > 40)) {
        if (this[_0xb282("0x4c")] || (this[_0xb282("0x4c")] = new _0x4d2228), this[_0xb282("0x3")] = ~~(_0x4ba30f * _0x4ba30f / 100), this[_0xb282("0x58")] = !0, this[_0xb282("0x47")]) {
          return this[_0xb282("0x60")] && this[_0xb282("0x3")] < 200 && (this[_0xb282("0x3")] = ~~((200 - this[_0xb282("0x3")]) / 14)), void(this[_0xb282("0x4d")] = "" + this[_0xb282("0x3")]);
        }
        if (this[_0xb282("0x4d")] = "" + this["mass"], this[_0xb282("0x3")] > 200) {
          return this[_0xb282("0x49")] && this[_0xb282("0x3")] >= 1E3 ? (this["kMass"] = Math[_0xb282("0x61")](this[_0xb282("0x3")] / 100) / 10, void(this[_0xb282("0x4d")] = this[_0xb282("0x4b")] + "k")) : void(this[_0xb282("0x5a")] && (this[_0xb282("0x58")] = Math[_0xb282("0x62")]((this["mass"] - this[_0xb282("0x4a")]) / this[_0xb282("0x3")]) >= .02));
        }
      }
    }, this[_0xb282("0x5d")] = function(_0x20cbbe) {
      this[_0xb282("0x0")] = _0x20cbbe, _0x20cbbe && !this[_0xb282("0x47")] && (this["nickCanvas"] || (this[_0xb282("0x63")] = new _0x4d2228));
    }, this[_0xb282("0x37")] = function(_0x222dc6, _0x40fc6e, _0x20b7ea, _0x3a458d, _0x1cf78c) {
      var _0x3b923d = Math[_0xb282("0x64")](10 * _0x222dc6) / 10;
      this[_0xb282("0x56")] = !1, this[_0xb282("0x2a")] != _0x3b923d && (this[_0xb282("0x2a")] = _0x3b923d, this[_0xb282("0x56")] = !0), this[_0xb282("0x4e")] = _0x40fc6e, this[_0xb282("0x4f")] = _0x20b7ea, this[_0xb282("0x50")] = _0x3a458d, this[_0xb282("0x65")] = _0x1cf78c;
    }, this["setFontSize"] = function() {
      return this[_0xb282("0x47")] ? void(this["massSize"] = Math["ceil"](this[_0xb282("0x54")] * this[_0xb282("0x2a")] * this["virMassScale"])) : (this[_0xb282("0x28")] = Math[_0xb282("0x66")](~~(.3 * this["size"]), 26), this["nickSize"] = ~~(this[_0xb282("0x28")] * this[_0xb282("0x2a")] * this[_0xb282("0x4e")]), this[_0xb282("0x53")] = ~~(.5 * this["fontSize"] * this[_0xb282("0x2a")] * this[_0xb282("0x4f")]), this["optimizedNames"] ? void(this[_0xb282("0x57")] = Math["abs"]((this[_0xb282("0x51")] - 
      this[_0xb282("0x52")]) / this[_0xb282("0x51")]) >= .3 || this[_0xb282("0x56")]) : void(this["redrawNick"] = !0));
    }, this[_0xb282("0x67")] = function() {
      this["strokeNick"] && !this["isVirus"] && (this[_0xb282("0x55")] = ~~(.1 * this[_0xb282("0x51")] * this[_0xb282("0x65")])), this["strokeMass"] && (this["massStrokeSize"] = ~~(.1 * this["massSize"] * this[_0xb282("0x65")]));
    }, this[_0xb282("0x3d")] = function(_0x3e8b23, _0x1aa51e, _0x384160, _0x319f34, _0x156d8a, _0x3f020a) {
      this[_0xb282("0x59")] = _0x3e8b23, this[_0xb282("0x5a")] = _0x1aa51e, this[_0xb282("0x49")] = _0x384160, this[_0xb282("0x60")] = _0x319f34, this[_0xb282("0x5b")] = _0x156d8a, this[_0xb282("0x68")] = _0x3f020a;
    }, this[_0xb282("0x69")] = function(_0x505f6d, _0x2fd88b, _0x127cdf, _0x47818a, _0x4874a7) {
      this[_0xb282("0x37")](_0x505f6d, _0x2fd88b, _0x127cdf, _0x47818a, _0x4874a7), this[_0xb282("0x36")](), this["setStrokeSize"](), this["margin"] = 0;
    }, this[_0xb282("0x6a")] = function(_0x36f0b2, _0x4e9211, _0x7be933, _0x14f931, _0x4bab92) {
      if (this["nick"] && this[_0xb282("0x63")] && !this[_0xb282("0x47")]) {
        var _0x3b923d = this[_0xb282("0x63")];
        _0x3b923d[_0xb282("0x3d")](_0x4e9211, _0x7be933, _0x14f931, this[_0xb282("0x5b")], this[_0xb282("0x55")], _0x4bab92), _0x3b923d["setTxt"](this[_0xb282("0x0")]), this[_0xb282("0x57")] && (_0x3b923d["setFontSize"](this[_0xb282("0x51")]), this["lastNickSize"] = this["nickSize"]), _0x3b923d[_0xb282("0x37")](this[_0xb282("0x2a")]);
        var _0x239be8 = _0x3b923d[_0xb282("0x43")](), _0x5a7dc9 = ~~(_0x239be8[_0xb282("0x42")] / this[_0xb282("0x2a")]), _0x2a785b = ~~(_0x239be8[_0xb282("0x44")] / this[_0xb282("0x2a")]);
        this[_0xb282("0x29")] = ~~(_0x2a785b / 2), _0x36f0b2[_0xb282("0x6b")](_0x239be8, ~~this["x"] - ~~(_0x5a7dc9 / 2), ~~this["y"] - this[_0xb282("0x29")], _0x5a7dc9, _0x2a785b);
      }
    }, this["drawMass"] = function(_0x128cab, _0x10786a, _0x225338, _0x36ee25, _0x2f0175) {
      if (this[_0xb282("0x4c")] && this[_0xb282("0x5f")] > 40) {
        var _0x3b923d = this[_0xb282("0x4c")];
        _0x3b923d["setDrawing"](_0x10786a, _0x225338, _0x36ee25, this[_0xb282("0x68")], this[_0xb282("0x6c")], _0x2f0175), this[_0xb282("0x58")] && (_0x3b923d[_0xb282("0x2e")](this[_0xb282("0x4d")]), this[_0xb282("0x4a")] = this[_0xb282("0x3")]), _0x3b923d[_0xb282("0x36")](this[_0xb282("0x53")]), _0x3b923d[_0xb282("0x37")](this[_0xb282("0x2a")]);
        var _0x239be8 = _0x3b923d[_0xb282("0x43")](), _0x47b9e8 = ~~(_0x239be8["width"] / this[_0xb282("0x2a")]), _0x1ee7cd = ~~(_0x239be8[_0xb282("0x44")] / this["scale"]), _0x2a2e9a = 0 == this[_0xb282("0x29")] ? ~~this["y"] - ~~(_0x1ee7cd / 2) : ~~this["y"] + this["margin"];
        _0x128cab["drawImage"](_0x239be8, ~~this["x"] - ~~(_0x47b9e8 / 2), _0x2a2e9a, _0x47b9e8, _0x1ee7cd);
      }
    };
  }
  function _0x38a8ed(_0x2ca59a) {
    _0x10cbb0[_0xb282("0x6d")] && _0x10cbb0[_0xb282("0x6d")]["replaceState"] && _0x10cbb0[_0xb282("0x6d")]["replaceState"]({}, _0x10cbb0[_0xb282("0x6e")][_0xb282("0x6f")], _0x2ca59a);
  }
  function _0x5f0927() {
    _0xb282("0x70") === _0x10cbb0[_0xb282("0x71")][_0xb282("0x72")] && _0x38a8ed("/" + _0x10cbb0[_0xb282("0x71")][_0xb282("0x73")]);
  }
  function _0x9e6ef8() {
    _0x10cbb0[_0xb282("0x74")] && (_0x10cbb0[_0xb282("0x74")] = null, delete _0x10cbb0["NREUM"]), _0x10cbb0[_0xb282("0x75")] && (_0x10cbb0[_0xb282("0x75")] = null, delete _0x10cbb0["core"]), _0x5c1379[_0xb282("0x76")](_0xb282("0x77"), {"success":function(_0x35df1f) {
      var _0xe98c87 = _0x35df1f, _0x5c1379 = null;
      _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(\(function\(([\w$]+)\){)/i, "$1 var ogario=$2.ogario,gameCtx=null;"), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(connect:function\((\w)\){)(\w=[\w$]+\(\w\);)([\w$]+\(\w\);[\w$]+\(\w\)})/i, "$1 ogario.getWS($2); $3$4"), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(([\w$]+)=[\w$]+\.getContext\(\"2d\"\);)/i, _0xb282("0x79")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(setTarget:function\((\w),(\w)\)\{)([\w$]+\(\w,\w\)})/i, _0xb282("0x7a")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, 
      _0xb282("0x7b")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, _0xb282("0x7c")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/if\((\+\w\[\w>>3\])<1\.0\){/i, _0xb282("0x7d")), _0xe98c87 = _0xe98c87["replace"](/(\w)(=\+(\w\[\w>>3\])\*\+\w\()(\.\d)(,\+\w\);)/i, _0xb282("0x7e")), _0xe98c87 = _0xe98c87["replace"](/(\w=\w\[\w>>2\]\|0;)((\w\[\w>>3\])=(\w);)(\w\[\w>>0\]=a\[\w>>0\];)/i, "$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5"), 
      _0xe98c87 = _0xe98c87["replace"](/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, _0xb282("0x7f")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(\+4294967296\.0\*\+\(\w\|0\);\w=\+\w\[[\d\w]+\];)(if\(\w<\w\){\w=\w;return})/i, "$1"), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(if\(!\(\w\[[\d\w]+\]\|0\)\){)(\w=\w;return})([\w$]+\(\d+,\w\[[\d\w]+\]\|0\);)(\w=\w;return})/i, _0xb282("0x80")), _0xe98c87 = 
      _0xe98c87[_0xb282("0x78")](/(if\(\(\w\|0\)==0\|\(\w\[[\d\w]+\]\|0\)==0\))([\w$]+\(\w,\d+,15\);)(else\s*)([\w$]+\(\w,\w\);)/i, "$4"), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(\w\[\w>>2\]=\(\w\[\w>>2\]\|0\)\+1;)([\w$]+\(\w\);)([\w$]+\(\w\);)(if\(!\(\w\[[\d\w]+\]\|0\)\){[\w$]+\(\w,\w\);(\w=\w)})/i, _0xb282("0x81")), _0xe98c87 = _0xe98c87["replace"](/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, _0xb282("0x82")), 
      _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(do\s*if\(\w\[\w\+\d+>>0\]\|0\){)(if\(\(\w\[[\d\w]+\]\|0\)==0\?\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)==0:0\)break;)/i, _0xb282("0x83")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(while\(0\);)([\w$]+\(\w,\w\);)(\w=\w\[\w>>2\]\|0;)(if\(\(\(!\(\(\w\[\w\+\d+>>0\]\|0\)!=0\|\(\w\[[\d\w]+\]\|0\)==0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\))([\w$]+\(\w,\w\);)(if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)!=0:0\))([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(if\(\!\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)\){)(\w=\w\+\d+\|0;\w\[\w>>0\]=1;\w=\w;return})([\w$]+\(\w,\w\);)(\w=\w\+\d+\|0;\w\[\w>>0\]=1;\w=\w;return})/i, 
      _0xb282("0x84")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/((\w)=\(\w\[\w\+\d+>>0\]\|0\)!=0;)(if\(\(\w\[[\d\w]+\]\|0\)!=0\?\(\w\[[\d\w]+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, _0xb282("0x85")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/if\((\(\w\|0\)!=0\?\(\w\[\w\+\d+>>2\]&2\|0\)!=0:0)\){/i, _0xb282("0x86")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(\/100\.0;)(\w+=\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+;)/gi, _0xb282("0x87")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(\/100\.0,)(\(\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+)/gi, 
      "/ogario.animation,$2"), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(if\(\w\[\w\+\d+>>0\]\|0\))({(\w)=\(\w\-\+\w\[\w>>3\]\)\/)(100\.0)(;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+\(\w<0\.0\?1\.0:\w>1\.0\?0\.0:)(1\.0-\w)(\)\)\|0})/i, _0xb282("0x88")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/((\w=(\(\w\[(\w)\+\d+>>0\]\|0\)==0);)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0,\+\(\+(\w\[\w>>2\])\),\+\(\+(\w\[\w>>2\])\),\+\(\w\+\s*\+(\w\[\w>>2\])\),0\.0,6.283185307179586,0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)(\w=\w\[\w>>2\]\|0;)if\(!\w\){([\w$]+\(\d+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)break}if\(\w\){([\w$]+\(\d+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0))/i, 
      _0xb282("0x89")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/([\w$]+\(\d+\,\w\[\w>>2\]\|0\)\|0}while\(0\);do\s*if\()(\w)\)/i, _0xb282("0x8a")), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/(if\(\(\w\[\w\+\d+>>0\]\|0\)==0\?\(\(\(\(\w\[\w\+\d+>>2\]\|0\)\+\(\w\[[\d\w]+\]\|0\)\|0\)>>>0\)%10\|0\|0\)!=0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\(\d+,\w\|0\)\|0;\w=\w;return})([\w$]+\((\w),\w\);)/i, _0xb282("0x8b")), _0x5c1379 = _0xe98c87[_0xb282("0x8c")](/(\w=0;\w=\w\[\w\+(\d+)>>2\]\|0;\w=\w\[(\d+)\]\|0;\w=\w\[[\d\w]+\]\|0;)(\w:do)/i), 
      _0x5c1379 && (_0xe98c87 = _0xe98c87[_0xb282("0x78")](/ogario.idOffset/g, _0x5c1379[2]), _0xe98c87 = _0xe98c87[_0xb282("0x78")](/ogario.idMemOffset/g, _0x5c1379[3])), _0x5c1379 = _0xe98c87[_0xb282("0x8c")](/(\w=\w\+(\d+)\|0;)(\w=\w\+(\d+)\|0;)(if\(!\(\+\w\[\w>>3\]==1\.0\)\))/i), _0x5c1379 && (_0xe98c87 = _0xe98c87[_0xb282("0x78")](/ogario.nameMemOffset/g, _0x5c1379[2]));
      var _0x595b1b = document[_0xb282("0x39")](_0xb282("0x8d"));
      _0x595b1b["textContent"] = _0xe98c87, _0x595b1b[_0xb282("0x8e")] = !0, document[_0xb282("0x8f")]["appendChild"](_0x595b1b);
    }, "dataType":_0xb282("0x90"), "method":_0xb282("0x91"), "cache":!1, "crossDomain":!0});
  }
  function _0x24c76e() {
    if (document[_0xb282("0x92")]("canvas")) {
      var _0x10cbb0 = document[_0xb282("0x92")](_0xb282("0x3a"));
      return void _0x10cbb0[_0xb282("0x93")]("mousemove", function(_0x45ddf5) {
        _0xe98c87[_0xb282("0x94")] && _0xe98c87["cursorTracking"] && _0xe98c87[_0xb282("0x95")] && (_0xe98c87[_0xb282("0x96")] = _0x45ddf5[_0xb282("0x96")], _0xe98c87[_0xb282("0x97")] = _0x45ddf5[_0xb282("0x97")], _0xe98c87[_0xb282("0x95")]());
      }, !1);
    }
    setTimeout(_0x24c76e, 50);
  }
  function _0x55af1f() {
    return _0x10cbb0["MC"] && _0x10cbb0["MC"]["showNickDialog"] ? (_0x10cbb0["MC"][_0xb282("0x98")] = _0x10cbb0["MC"]["showNickDialog"], _0x10cbb0["MC"]["showNickDialog"] = function() {
      _0x10cbb0["MC"][_0xb282("0x98")]["apply"](this, arguments), _0x5c1379(_0xb282("0x99"))[_0xb282("0x9a")](), _0x5bc66e();
    }, _0x10cbb0["MC"]["_showStatsDialog"] = _0x10cbb0["MC"][_0xb282("0x9b")], _0x10cbb0["MC"][_0xb282("0x9b")] = function() {
      _0x10cbb0["MC"][_0xb282("0x9c")]["apply"](this, arguments), _0x5bc66e();
    }, _0x10cbb0["MC"][_0xb282("0x9d")] = _0x10cbb0["MC"]["onConnect"], _0x10cbb0["MC"][_0xb282("0x9e")] = function() {
      _0x10cbb0["MC"][_0xb282("0x9d")][_0xb282("0x9f")](this, arguments), _0x381fe5 && (_0x381fe5[_0xb282("0xa0")](), _0x381fe5[_0xb282("0xa1")](), _0x381fe5["unlockButtons"]());
    }, _0x10cbb0["MC"][_0xb282("0xa2")] = _0x10cbb0["MC"][_0xb282("0xa3")], _0x10cbb0["MC"][_0xb282("0xa3")] = function() {
      _0x10cbb0["MC"][_0xb282("0xa2")][_0xb282("0x9f")](this, arguments), _0xe98c87[_0xb282("0xa4")] = null, _0x381fe5 && _0x381fe5[_0xb282("0xa3")]();
    }, _0x10cbb0["MC"][_0xb282("0xa5")] = _0x10cbb0["MC"][_0xb282("0xa6")], _0x10cbb0["MC"][_0xb282("0xa6")] = function() {
      _0x10cbb0["MC"][_0xb282("0xa5")][_0xb282("0x9f")](this, arguments), _0x381fe5 && _0x381fe5[_0xb282("0xa6")]();
    }, _0x10cbb0["MC"][_0xb282("0xa7")] = _0x10cbb0["MC"][_0xb282("0xa8")], _0x10cbb0["MC"][_0xb282("0xa8")] = function() {
      _0x10cbb0["MC"][_0xb282("0xa7")][_0xb282("0x9f")](this, arguments), _0x10cbb0[_0xb282("0x75")] && _0x10cbb0[_0xb282("0x75")][_0xb282("0xa9")] && _0x10cbb0[_0xb282("0x75")][_0xb282("0xa9")](!1), _0x10cbb0[_0xb282("0x75")] && _0x10cbb0["core"]["setShowMass"] && _0x10cbb0[_0xb282("0x75")][_0xb282("0xaa")](!1), _0x3543d7();
    }, _0x10cbb0["MC"][_0xb282("0xab")] = _0x10cbb0["MC"][_0xb282("0xac")], _0x10cbb0["MC"][_0xb282("0xac")] = function() {
      _0x10cbb0["MC"][_0xb282("0xab")][_0xb282("0x9f")](this, arguments), setTimeout(function() {
        _0x3543d7(), _0x381fe5 && _0x381fe5[_0xb282("0xad")](), _0x381fe5[_0xb282("0xae")](), _0x5bc66e();
      }, 1E3);
    }, void(_0x10cbb0["MC"][_0xb282("0xaf")] = function() {
    })) : void setTimeout(_0x55af1f, 50);
  }
  function _0x3543d7() {
    var _0xeba674 = 1 * _0x10cbb0[_0xb282("0xb0")], _0x546440 = 1 * _0x10cbb0[_0xb282("0xb1")], _0x3aa2b9 = _0x5c1379(_0xb282("0xb2")), _0x4be86a = _0x3aa2b9[_0xb282("0xb1")]();
    _0x4be86a > 0 ? _0xe98c87["menuHeight"] = _0x4be86a : _0x4be86a = _0xe98c87[_0xb282("0xb3")] || 618;
    var _0x3d7b5e = Math[_0xb282("0xb4")](1, _0x546440 / _0x4be86a), _0x5aebd7 = _0x4be86a * _0x3d7b5e, _0x519da5 = Math[_0xb282("0x61")](_0x546440 / 2 - .5 * _0x5aebd7), _0x51fa9f = _0xb282("0xb5") + _0x3d7b5e + ")";
    _0x3aa2b9[_0xb282("0xb6")](_0xb282("0xb7"), _0x51fa9f), _0x3aa2b9["css"](_0xb282("0xb8"), _0x51fa9f), _0x3aa2b9[_0xb282("0xb6")](_0xb282("0xb9"), _0x51fa9f), _0x3aa2b9[_0xb282("0xb6")](_0xb282("0xba"), "" + _0x519da5 + "px"), _0xe98c87["innerW"] = _0xeba674, _0xe98c87[_0xb282("0xbb")] = _0x546440;
  }
  function _0x5bc66e() {
    _0x10cbb0[_0xb282("0xbc")] = function() {
    };
  }
  var _0x166fec = {"pl":{"start":_0xb282("0xbd"), "settings":_0xb282("0xbe"), "restoreSettings":_0xb282("0xbf"), "animationGroup":_0xb282("0xc0"), "zoomGroup":_0xb282("0xc1"), "respGroup":_0xb282("0xc2"), "namesGroup":_0xb282("0xc3"), "massGroup":"Masa", "skinsGroup":_0xb282("0xc4"), "foodGroup":_0xb282("0xc5"), "transparencyGroup":_0xb282("0xc6"), "gridGroup":_0xb282("0xc7"), "miniMapGroup":_0xb282("0xc8"), "helpersGroup":_0xb282("0xc9"), "mouseGroup":_0xb282("0xca"), "hudGroup":_0xb282("0xcb"), 
  "chatGroup":_0xb282("0xcc"), "statsGroup":_0xb282("0xcd"), "extrasGroup":_0xb282("0xce"), "noSkins":"Wy\u0142\u0105cz skiny", "noNames":_0xb282("0xcf"), "noColors":_0xb282("0xd0"), "showMass":_0xb282("0xd1"), "skipStats":_0xb282("0xd2"), "showQuest":"Poka\u017c zadanie (quest)", "autoZoom":_0xb282("0xd3"), "animation":_0xb282("0xd4"), "zoomSpeedValue":_0xb282("0xd5"), "quickResp":_0xb282("0xd6"), "autoResp":"Auto odrodzenie", "autoHideCellsInfo":_0xb282("0xd7"), "autoHideNames":_0xb282("0xd8"), 
  "autoHideMass":_0xb282("0xd9"), "autoHideFood":_0xb282("0xda"), "autoHideFoodOnZoom":_0xb282("0xdb"), "optimizedNames":_0xb282("0xdc"), "hideMyName":_0xb282("0xdd"), "hideTeammatesNames":_0xb282("0xde"), "optimizedMass":_0xb282("0xdf"), "shortMass":_0xb282("0xe0"), "virMassShots":"Licznik strza\u0142\u00f3w (wirusy)", "hideMyMass":_0xb282("0xe1"), "hideEnemiesMass":_0xb282("0xe2"), "vanillaSkins":_0xb282("0xe3"), "customSkins":_0xb282("0xe4"), "myTransparentSkin":_0xb282("0xe5"), "myCustomColor":_0xb282("0xe6"), 
  "transparentCells":_0xb282("0xe7"), "transparentViruses":_0xb282("0xe8"), "transparentSkins":_0xb282("0xe9"), "showGrid":_0xb282("0xea"), "showBgSectors":_0xb282("0xeb"), "showMapBorders":_0xb282("0xec"), "showMiniMap":_0xb282("0xed"), "showMiniMapGrid":"Poka\u017c siatk\u0119 minimapy", "showMiniMapGuides":_0xb282("0xee"), "oneColoredTeammates":_0xb282("0xef"), "optimizedFood":_0xb282("0xf0"), "rainbowFood":_0xb282("0xf1"), "oppColors":_0xb282("0xf2"), "oppRings":_0xb282("0xf3"), "virColors":"Kolory wirus\u00f3w", 
  "splitRange":_0xb282("0xf4"), "virusesRange":"Zasi\u0119g wirus\u00f3w", "textStroke":_0xb282("0xf5"), "namesStroke":_0xb282("0xf6"), "massStroke":_0xb282("0xf7"), "cursorTracking":_0xb282("0xf8"), "teammatesInd":_0xb282("0xf9"), "mouseSplit":_0xb282("0xfa"), "mouseFeed":_0xb282("0xfb"), "mouseInvert":"Odwr\u00f3\u0107 klawisze myszki", "disableChat":_0xb282("0xfc"), "hideChat":_0xb282("0xfd"), "chatSounds":"Powiadomienia d\u017awi\u0119kowe", "chatEmoticons":_0xb282("0xfe"), "showChatImages":"Poka\u017c obrazki na czacie", 
  "showChatVideos":_0xb282("0xff"), "showChatBox":_0xb282("0x100"), "messageSound":"D\u017awi\u0119k powiadomienia o wiadomo\u015bci", "commandSound":_0xb282("0x101"), "showTop5":"Poka\u017c top 5 teamu", "showTargeting":_0xb282("0x102"), "showTime":_0xb282("0x103"), "normalLb":_0xb282("0x104"), "centeredLb":_0xb282("0x105"), "fpsAtTop":_0xb282("0x106"), "showStats":_0xb282("0x107"), "showStatsMass":_0xb282("0x108"), "showStatsSTE":_0xb282("0x109"), "showStatsN16":_0xb282("0x10a"), "showStatsFPS":_0xb282("0x10b"), 
  "blockPopups":_0xb282("0x10c"), "hotkeys":_0xb282("0x10d"), "hk-inst-assign":_0xb282("0x10e"), "hk-inst-delete":_0xb282("0x10f"), "hk-inst-keys":_0xb282("0x110"), "hk-feed":"Feed", "hk-macroFeed":_0xb282("0x111"), "hk-split":_0xb282("0x112"), "hk-doubleSplit":_0xb282("0x113"), "hk-split16":_0xb282("0x114"), "hk-pause":_0xb282("0x115"), "hk-showTop5":_0xb282("0x116"), "hk-showTime":_0xb282("0x117"), "hk-showSplitRange":_0xb282("0x118"), "hk-showSplitInd":_0xb282("0x119"), "hk-showTeammatesInd":"Poka\u017c/ukryj wska\u017aniki graczy teamu", 
  "hk-showOppColors":"Poka\u017c/ukryj kolory przeciwnik\u00f3w", "hk-toggleSkins":_0xb282("0x11a"), "hk-showSkins":"Poka\u017c/ukryj skiny", "hk-transparentSkins":_0xb282("0x11b"), "hk-showStats":_0xb282("0x11c"), "hk-toggleCells":_0xb282("0x11d"), "hk-showFood":_0xb282("0x11e"), "hk-showGrid":_0xb282("0x11f"), "hk-showMiniMapGuides":"Poka\u017c/ukryj prowadnice na minimapie", "hk-hideChat":"Poka\u017c/ukryj czat", "hk-showHUD":_0xb282("0x120"), "hk-copyLb":"Kopiuj topk\u0119", "hk-showLb":_0xb282("0x121"), 
  "hk-toggleAutoZoom":_0xb282("0x122"), "hk-resetZoom":"Reset zoomu", "hk-zoomLevel":_0xb282("0x123"), "hk-toggleDeath":_0xb282("0x124"), "hk-clearChat":_0xb282("0x125"), "hk-showBgSectors":_0xb282("0x126"), "hk-hideBots":_0xb282("0x127"), "hk-showNames":_0xb282("0x128"), "hk-hideTeammatesNames":_0xb282("0x129"), "hk-showMass":_0xb282("0x12a"), "hk-showMiniMap":_0xb282("0x12b"), "hk-chatMessage":_0xb282("0x12c"), "hk-quickResp":_0xb282("0x12d"), "hk-autoResp":"W\u0142\u0105cz/wy\u0142acz auto odrodzenie", 
  "hk-switchServerMode":_0xb282("0x12e"), "hk-showTargeting":_0xb282("0x12f"), "hk-setTargeting":_0xb282("0x130"), "hk-cancelTargeting":"Zatrzymaj namierzanie", "hk-changeTarget":_0xb282("0x131"), "hk-privateMiniMap":_0xb282("0x132"), "hk-showQuest":"Poka\u017c/ukryj zadanie", "commands":_0xb282("0x133"), "comm1":_0xb282("0x134"), "comm2":_0xb282("0x135"), "comm3":_0xb282("0x136"), "comm4":_0xb282("0x137"), "comm5":_0xb282("0x138"), "comm6":_0xb282("0x139"), "comm7":_0xb282("0x13a"), "comm8":_0xb282("0x13b"), 
  "comm9":_0xb282("0x13c"), "comm0":_0xb282("0x13d"), "comm10":"Trick!", "comm11":_0xb282("0x13e"), "comm12":_0xb282("0x13f"), "comm13":_0xb282("0x140"), "comm14":"D\u00f3\u0142!", "saveComm":_0xb282("0x141"), "theme":_0xb282("0x142"), "restoreThemeSettings":"Przywr\u00f3c ustawienia domy\u015blne wygl\u0105du", "basicTheming":_0xb282("0x143"), "themePreset":"Motyw", "themeType":_0xb282("0x144"), "darkTheme":_0xb282("0x145"), "lightTheme":_0xb282("0x146"), "mainColor":"Kolor g\u0142\u00f3wny", "bgColor":_0xb282("0x147"), 
  "bordersColor":_0xb282("0xec"), "gridColor":_0xb282("0xea"), "sectorsColor":_0xb282("0x148"), "namesColor":_0xb282("0xc3"), "namesStrokeColor":_0xb282("0xf6"), "massColor":_0xb282("0x149"), "massStrokeColor":_0xb282("0xf7"), "virusColor":_0xb282("0x14a"), "virusStrokeColor":_0xb282("0x14b"), "foodColor":_0xb282("0xc5"), "namesFont":_0xb282("0x14c"), "massFont":_0xb282("0x14d"), "sectorsFont":"Czcionka sektor\u00f3w", "namesScale":"Skala nazw", "massScale":_0xb282("0x14e"), "virMassScale":_0xb282("0x14f"), 
  "strokeScale":_0xb282("0x150"), "foodSize":_0xb282("0x151"), "bordersWidth":_0xb282("0x152"), "sectorsWidth":_0xb282("0x153"), "sectorsFontSize":_0xb282("0x154"), "cellsAlpha":_0xb282("0x155"), "skinsAlpha":_0xb282("0x156"), "virusAlpha":_0xb282("0x157"), "textAlpha":_0xb282("0x158"), "virusStrokeSize":_0xb282("0x159"), "cursorTrackingColor":_0xb282("0xf8"), "splitRangeColor":_0xb282("0xf4"), "teammatesIndColor":"Wska\u017anik gracza", "menuTheming":_0xb282("0x15a"), "menuPreset":"Motyw menu", 
  "menuMainColor":_0xb282("0x15b"), "menuBtnTextColor":_0xb282("0x15c"), "menuPanelColor":"Panel", "menuPanelColor2":"Panel (2)", "menuTextColor":_0xb282("0x15d"), "menuTextColor2":_0xb282("0x15e"), "btn1Color":_0xb282("0x15f"), "btn1Color2":_0xb282("0x160"), "btn2Color":_0xb282("0x161"), "btn2Color2":_0xb282("0x162"), "btn3Color":"Przycisk #3", "btn3Color2":_0xb282("0x163"), "btn4Color":_0xb282("0x164"), "btn4Color2":_0xb282("0x165"), "menuBg":_0xb282("0x166"), "menuOpacity":_0xb282("0x167"), "hudTheming":"HUD", 
  "hudMainColor":"Kolor g\u0142\u00f3wny", "hudColor":_0xb282("0x147"), "hudTextColor":_0xb282("0x168"), "statsHudColor":_0xb282("0xcd"), "timeHudColor":_0xb282("0x169"), "top5MassColor":_0xb282("0x16a"), "lbMeColor":"Topka - ja", "lbTeammateColor":_0xb282("0x16b"), "hudFont":_0xb282("0x16c"), "hudScale":"Skala HUD", "chatTheming":_0xb282("0xcc"), "messageColor":_0xb282("0x16d"), "messageTextColor":_0xb282("0x16e"), "messageTimeColor":_0xb282("0x16f"), "messageNickColor":"Nick wiadomo\u015bci", "commandsColor":_0xb282("0x170"), 
  "commandsTextColor":"Tekst komendy", "commandsTimeColor":_0xb282("0x171"), "commandsNickColor":_0xb282("0x172"), "chatBoxColor":_0xb282("0x173"), "chatScale":_0xb282("0x174"), "miniMapTheming":_0xb282("0xc8"), "miniMapSectorsColor":_0xb282("0x175"), "miniMapSectorColor":_0xb282("0x176"), "miniMapGuidesColor":"Prowadnice", "miniMapNickColor":_0xb282("0x177"), "miniMapNickStrokeColor":_0xb282("0x178"), "miniMapMyCellColor":"Moja kulka", "miniMapMyCellStrokeColor":_0xb282("0x179"), "miniMapTeammatesColor":_0xb282("0x17a"), 
  "miniMapDeathLocationColor":_0xb282("0x17b"), "miniMapFont":"Czcionka minimapy", "miniMapNickFont":_0xb282("0x17c"), "miniMapWidth":_0xb282("0x17d"), "miniMapSectorsOpacity":_0xb282("0x17e"), "miniMapNickSize":_0xb282("0x17f"), "miniMapNickStrokeSize":_0xb282("0x180"), "miniMapMyCellSize":_0xb282("0x181"), "miniMapMyCellStrokeSize":_0xb282("0x182"), "miniMapTeammatesSize":"Wielko\u015b\u0107 graczy", "imagesTheming":_0xb282("0x183"), "customBackground":_0xb282("0x184"), "customCursor":_0xb282("0x185"), 
  "hideChatMsgA":_0xb282("0x186"), "hideChatMsgB":_0xb282("0x187"), "showSkinsMsgA":"Skiny zosta\u0142y w\u0142\u0105czone!", "showSkinsMsgB":_0xb282("0x188"), "hideSmallBotsMsgA":_0xb282("0x189"), "hideSmallBotsMsgB":_0xb282("0x18a"), "autoRespMsgA":_0xb282("0x18b"), "autoRespMsgB":"Auto odrodzenie zosta\u0142o wy\u0142\u0105czone!", "autoZoomMsgA":"Auto zoom zosta\u0142 w\u0142\u0105czony!", "autoZoomMsgB":_0xb282("0x18c"), "targetNotSet":"Brak celu", "targetDead":_0xb282("0x18d"), "targetDistance":"Dystans", 
  "targetMass":_0xb282("0x18e"), "totalPartyPlayers":"Aktywnych graczy", "totalPartyMass":_0xb282("0x18f"), "exportImport":_0xb282("0x190"), "exportSettings":_0xb282("0x191"), "exportInfo":"Aby wyeksportowa\u0107 wybrane ustawienia skopiuj poni\u017cszy kod i zapisz go w pliku tekstowym z kodowaniem Unicode.", "importSettings":"Importuj ustawienia", "importInfo":_0xb282("0x192"), "profile":_0xb282("0x193"), "profiles":_0xb282("0x194"), "skins":_0xb282("0xc4"), "moreSkins":"Dodaj skiny", "thanks":_0xb282("0x195"), 
  "saveSett":_0xb282("0x196"), "saved":_0xb282("0x197"), "resetSett":_0xb282("0x198"), "close":_0xb282("0x199"), "enterChatMsg":_0xb282("0x19a"), "activeParties":_0xb282("0x19b"), "noActiveParties":"Brak aktywnych party ;(", "playlist":_0xb282("0x19c"), "pause":"PAUZA!", "visit":_0xb282("0x19d"), "exit":_0xb282("0x19e"), "blockWarn":_0xb282("0x19f"), "unblockPopups":_0xb282("0x1a0"), "mass":_0xb282("0x149"), "score":_0xb282("0x1a1"), "leaderboard":_0xb282("0x1a2"), "user":_0xb282("0x1a3"), "userMuted":_0xb282("0x1a4"), 
  "userUnmuted":_0xb282("0x1a5"), "mute":_0xb282("0x1a6"), "unmute":_0xb282("0x1a7"), "mutedUsers":_0xb282("0x1a8"), "activeUsers":"Aktywni u\u017cytkownicy", "showActiveUsers":_0xb282("0x1a9"), "none":_0xb282("0x1aa"), "sounds":_0xb282("0x1ab"), "page_back_button":_0xb282("0x1ac"), "page_create_party":_0xb282("0x1ad"), "page_join_party":"Do\u0142\u0105cz", "page_login_and_play":_0xb282("0x1ae"), "page_logout":_0xb282("0x1af"), "page_menu_login_facebook":_0xb282("0x1b0"), "page_menu_login_google":_0xb282("0x1b1"), 
  "page_menu_main_free_coins":_0xb282("0x1b2"), "page_menu_main_gifts":"Prezenty", "page_menu_main_dailyquests":_0xb282("0x1b3"), "page_party_join_error":_0xb282("0x1b4"), "page_play":_0xb282("0x1b5"), "page_play_as_guest":_0xb282("0x1b6"), "page_shop":_0xb282("0x1b7"), "page_spectate":_0xb282("0x1b8"), "page_stats":"Statystyki"}, "en":{"start":"Home", "settings":_0xb282("0x1b9"), "restoreSettings":_0xb282("0x1ba"), "animationGroup":_0xb282("0x1bb"), "zoomGroup":_0xb282("0xc1"), "respGroup":"Respawn", 
  "namesGroup":"Names", "massGroup":_0xb282("0x1bc"), "skinsGroup":_0xb282("0x1bd"), "foodGroup":"Food", "transparencyGroup":_0xb282("0x1be"), "gridGroup":_0xb282("0x1bf"), "miniMapGroup":"Minimap", "helpersGroup":_0xb282("0x1c0"), "mouseGroup":_0xb282("0x1c1"), "hudGroup":_0xb282("0xcb"), "chatGroup":_0xb282("0x1c2"), "statsGroup":_0xb282("0x1c3"), "extrasGroup":_0xb282("0x1c4"), "noSkins":_0xb282("0x1c5"), "noNames":_0xb282("0x1c6"), "noColors":"No colors", "showMass":_0xb282("0x1c7"), "skipStats":_0xb282("0x1c8"), 
  "showQuest":_0xb282("0x1c9"), "autoZoom":_0xb282("0xd3"), "animation":_0xb282("0x1ca"), "zoomSpeedValue":_0xb282("0x1cb"), "quickResp":_0xb282("0x1cc"), "autoResp":"Auto respawn", "autoHideCellsInfo":_0xb282("0x1cd"), "autoHideNames":_0xb282("0x1ce"), "autoHideMass":"Auto hide mass", "autoHideFood":_0xb282("0x1cf"), "autoHideFoodOnZoom":_0xb282("0x1d0"), "optimizedNames":_0xb282("0x1d1"), "hideMyName":_0xb282("0x1d2"), "hideTeammatesNames":_0xb282("0x1d3"), "optimizedMass":_0xb282("0x1d4"), "shortMass":_0xb282("0x1d5"), 
  "virMassShots":_0xb282("0x1d6"), "hideMyMass":_0xb282("0x1d7"), "hideEnemiesMass":_0xb282("0x1d8"), "vanillaSkins":_0xb282("0x1d9"), "customSkins":_0xb282("0x1da"), "myTransparentSkin":_0xb282("0x1db"), "myCustomColor":_0xb282("0x1dc"), "transparentCells":"Transparent cells", "transparentViruses":_0xb282("0x1dd"), "transparentSkins":_0xb282("0x1de"), "showGrid":_0xb282("0x1df"), "showBgSectors":_0xb282("0x1e0"), "showMapBorders":_0xb282("0x1e1"), "showMiniMap":"Show minimap", "showMiniMapGrid":_0xb282("0x1e2"), 
  "showMiniMapGuides":_0xb282("0x1e3"), "oneColoredTeammates":_0xb282("0x1e4"), "optimizedFood":_0xb282("0x1e5"), "rainbowFood":_0xb282("0x1e6"), "oppColors":"Opponents colors", "oppRings":"Opponents rings", "virColors":"Viruses colors", "splitRange":_0xb282("0x1e7"), "virusesRange":_0xb282("0x1e8"), "textStroke":_0xb282("0x1e9"), "namesStroke":_0xb282("0x1ea"), "massStroke":_0xb282("0x1eb"), "cursorTracking":_0xb282("0x1ec"), "teammatesInd":_0xb282("0x1ed"), "mouseSplit":_0xb282("0x1ee"), "mouseFeed":_0xb282("0x1ef"), 
  "mouseInvert":"Invert mouse buttons", "disableChat":_0xb282("0x1f0"), "hideChat":_0xb282("0x1f1"), "chatSounds":"Sound notifications", "chatEmoticons":"Emoticons", "showChatImages":_0xb282("0x1f2"), "showChatVideos":"Show videos on chat", "showChatBox":_0xb282("0x1f3"), "messageSound":_0xb282("0x1f4"), "commandSound":_0xb282("0x1f5"), "showTop5":_0xb282("0x1f6"), "showTargeting":_0xb282("0x1f7"), "showTime":_0xb282("0x1f8"), "normalLb":'"Leaderboard" header', "centeredLb":_0xb282("0x1f9"), "fpsAtTop":_0xb282("0x1fa"), 
  "showStats":_0xb282("0x1fb"), "showStatsMass":"Game stats: Mass", "showStatsSTE":_0xb282("0x1fc"), "showStatsN16":_0xb282("0x1fd"), "showStatsFPS":_0xb282("0x1fe"), "blockPopups":_0xb282("0x1ff"), "hotkeys":"Hotkeys", "hk-inst-assign":_0xb282("0x200"), "hk-inst-delete":_0xb282("0x201"), "hk-inst-keys":"Possible key combinations with the CTRL and ALT keys.", "hk-feed":_0xb282("0x202"), "hk-macroFeed":_0xb282("0x203"), "hk-split":_0xb282("0x204"), "hk-doubleSplit":"Double split", "hk-split16":_0xb282("0x205"), 
  "hk-pause":"Cell pause", "hk-showTop5":_0xb282("0x206"), "hk-showTime":_0xb282("0x207"), "hk-showSplitRange":_0xb282("0x208"), "hk-showSplitInd":_0xb282("0x209"), "hk-showTeammatesInd":"Show/hide teammates indicators", "hk-showOppColors":"Show/hide opponents colors", "hk-toggleSkins":"Toggle skins (custom/default)", "hk-showSkins":_0xb282("0x20a"), "hk-transparentSkins":_0xb282("0x20b"), "hk-showStats":_0xb282("0x20c"), "hk-toggleCells":_0xb282("0x20d"), "hk-showFood":"Show/hide food", "hk-showGrid":"Show/hide grid", 
  "hk-showMiniMapGuides":_0xb282("0x20e"), "hk-hideChat":"Show/hide chat", "hk-showHUD":_0xb282("0x20f"), "hk-copyLb":_0xb282("0x210"), "hk-showLb":_0xb282("0x211"), "hk-toggleAutoZoom":"Toggle auto zoom", "hk-resetZoom":"Reset zoom", "hk-zoomLevel":"Zoom level", "hk-toggleDeath":"Toggle death location", "hk-clearChat":_0xb282("0x212"), "hk-showBgSectors":_0xb282("0x213"), "hk-hideBots":"Show/hide small bots", "hk-showNames":"Show/hide names", "hk-hideTeammatesNames":_0xb282("0x214"), "hk-showMass":"Show/hide mass", 
  "hk-showMiniMap":_0xb282("0x215"), "hk-chatMessage":_0xb282("0x216"), "hk-quickResp":_0xb282("0x217"), "hk-autoResp":_0xb282("0x218"), "hk-switchServerMode":_0xb282("0x219"), "hk-showTargeting":_0xb282("0x21a"), "hk-setTargeting":_0xb282("0x21b"), "hk-cancelTargeting":"Cancel targeting", "hk-changeTarget":_0xb282("0x21c"), "hk-privateMiniMap":_0xb282("0x21d"), "hk-showQuest":_0xb282("0x21e"), "commands":_0xb282("0x21f"), "comm1":_0xb282("0x220"), "comm2":"Split into me!", "comm3":_0xb282("0x221"), 
  "comm4":_0xb282("0x222"), "comm5":_0xb282("0x223"), "comm6":_0xb282("0x224"), "comm7":_0xb282("0x225"), "comm8":_0xb282("0x226"), "comm9":_0xb282("0x227"), "comm0":_0xb282("0x228"), "comm10":_0xb282("0x229"), "comm11":_0xb282("0x22a"), "comm12":_0xb282("0x22b"), "comm13":_0xb282("0x22c"), "comm14":_0xb282("0x22d"), "saveComm":_0xb282("0x22e"), "theme":_0xb282("0x22f"), "restoreThemeSettings":_0xb282("0x230"), "basicTheming":_0xb282("0x231"), "themePreset":_0xb282("0x232"), "themeType":_0xb282("0x233"), 
  "darkTheme":_0xb282("0x234"), "lightTheme":_0xb282("0x235"), "mainColor":_0xb282("0x236"), "bgColor":_0xb282("0x237"), "bordersColor":_0xb282("0x238"), "gridColor":"Grid", "sectorsColor":"Sectors font", "namesColor":_0xb282("0x239"), "namesStrokeColor":_0xb282("0x1ea"), "massColor":"Mass", "massStrokeColor":_0xb282("0x1eb"), "virusColor":_0xb282("0x23a"), "virusStrokeColor":"Virus stroke", "foodColor":"Food", "namesFont":_0xb282("0x23b"), "massFont":_0xb282("0x23c"), "sectorsFont":_0xb282("0x23d"), 
  "namesScale":_0xb282("0x23e"), "massScale":_0xb282("0x23f"), "virMassScale":_0xb282("0x240"), "strokeScale":"Text stroke scale", "foodSize":_0xb282("0x241"), "bordersWidth":_0xb282("0x242"), "sectorsWidth":_0xb282("0x243"), "sectorsFontSize":_0xb282("0x244"), "cellsAlpha":_0xb282("0x245"), "skinsAlpha":_0xb282("0x246"), "virusAlpha":_0xb282("0x247"), "textAlpha":_0xb282("0x248"), "virusStrokeSize":_0xb282("0x249"), "cursorTrackingColor":_0xb282("0x1ec"), "splitRangeColor":"Split range", "teammatesIndColor":_0xb282("0x24a"), 
  "menuTheming":_0xb282("0x15a"), "menuPreset":_0xb282("0x24b"), "menuMainColor":_0xb282("0x236"), "menuBtnTextColor":_0xb282("0x24c"), "menuPanelColor":_0xb282("0x24d"), "menuPanelColor2":_0xb282("0x24e"), "menuTextColor":_0xb282("0x24f"), "menuTextColor2":_0xb282("0x250"), "btn1Color":_0xb282("0x251"), "btn1Color2":_0xb282("0x252"), "btn2Color":_0xb282("0x253"), "btn2Color2":_0xb282("0x254"), "btn3Color":_0xb282("0x255"), "btn3Color2":_0xb282("0x256"), "btn4Color":_0xb282("0x257"), "btn4Color2":"Button #4 (2)", 
  "menuBg":_0xb282("0x258"), "menuOpacity":_0xb282("0x259"), "hudTheming":_0xb282("0xcb"), "hudMainColor":"Main color", "hudColor":"Background", "hudTextColor":"Text", "statsHudColor":"Stats", "timeHudColor":_0xb282("0x25a"), "top5MassColor":_0xb282("0x25b"), "lbMeColor":_0xb282("0x25c"), "lbTeammateColor":_0xb282("0x25d"), "hudFont":_0xb282("0x25e"), "hudScale":_0xb282("0x25f"), "chatTheming":_0xb282("0x1c2"), "messageColor":_0xb282("0x260"), "messageTextColor":_0xb282("0x261"), "messageTimeColor":_0xb282("0x262"), 
  "messageNickColor":_0xb282("0x263"), "commandsColor":"Command background", "commandsTextColor":_0xb282("0x264"), "commandsTimeColor":_0xb282("0x265"), "commandsNickColor":_0xb282("0x266"), "chatBoxColor":"Chatbox color", "chatScale":"Chat scale", "miniMapTheming":_0xb282("0x267"), "miniMapSectorsColor":_0xb282("0x268"), "miniMapSectorColor":_0xb282("0x269"), "miniMapGuidesColor":_0xb282("0x26a"), "miniMapNickColor":"Nick", "miniMapNickStrokeColor":"Nick stroke", "miniMapMyCellColor":"My cell", 
  "miniMapMyCellStrokeColor":_0xb282("0x26b"), "miniMapTeammatesColor":_0xb282("0x26c"), "miniMapDeathLocationColor":_0xb282("0x26d"), "miniMapFont":_0xb282("0x26e"), "miniMapNickFont":_0xb282("0x26f"), "miniMapWidth":_0xb282("0x270"), "miniMapSectorsOpacity":_0xb282("0x271"), "miniMapNickSize":"Nick size", "miniMapNickStrokeSize":_0xb282("0x272"), "miniMapMyCellSize":_0xb282("0x273"), "miniMapMyCellStrokeSize":_0xb282("0x274"), "miniMapTeammatesSize":"Teammates size", "imagesTheming":_0xb282("0x275"), 
  "customBackground":"Custom background image", "customCursor":_0xb282("0x276"), "hideChatMsgA":_0xb282("0x277"), "hideChatMsgB":_0xb282("0x278"), "showSkinsMsgA":_0xb282("0x279"), "showSkinsMsgB":"Skins are hidden!", "hideSmallBotsMsgA":_0xb282("0x27a"), "hideSmallBotsMsgB":"Small bots are hidden!", "autoRespMsgA":_0xb282("0x27b"), "autoRespMsgB":_0xb282("0x27c"), "autoZoomMsgA":_0xb282("0x27d"), "autoZoomMsgB":_0xb282("0x27e"), "targetNotSet":_0xb282("0x27f"), "targetDead":_0xb282("0x280"), "targetDistance":_0xb282("0x281"), 
  "targetMass":_0xb282("0x282"), "totalPartyPlayers":_0xb282("0x283"), "totalPartyMass":_0xb282("0x284"), "exportImport":_0xb282("0x285"), "exportSettings":_0xb282("0x286"), "exportInfo":"To export selected settings copy the code below and save it to a text file encoded in Unicode.", "importSettings":_0xb282("0x287"), "importInfo":_0xb282("0x288"), "profile":_0xb282("0x194"), "profiles":_0xb282("0x289"), "skins":_0xb282("0x1bd"), "moreSkins":_0xb282("0x28a"), "thanks":_0xb282("0x28b"), "saveSett":_0xb282("0x28c"), 
  "saved":_0xb282("0x28d"), "resetSett":_0xb282("0x28e"), "close":_0xb282("0x28f"), "enterChatMsg":"Enter chat message", "activeParties":_0xb282("0x290"), "noActiveParties":_0xb282("0x291"), "playlist":_0xb282("0x292"), "pause":_0xb282("0x293"), "visit":"Visit", "exit":"OGARio by szymy: Are you sure you want to quit the game?", "blockWarn":"WARNING! Popups are blocked in the settings.", "unblockPopups":_0xb282("0x294"), "mass":"Mass", "score":_0xb282("0x295"), "leaderboard":_0xb282("0x296"), "user":_0xb282("0x297"), 
  "userMuted":_0xb282("0x298"), "userUnmuted":_0xb282("0x299"), "mute":_0xb282("0x29a"), "unmute":"Unmute", "mutedUsers":_0xb282("0x29b"), "activeUsers":_0xb282("0x29c"), "showActiveUsers":"Show active users", "none":"None", "sounds":"Sounds", "page_menu_main_free_coins":_0xb282("0x29d"), "page_menu_main_gifts":"Gifts", "page_menu_main_dailyquests":"Daily Quest", "page_shop":"Shop"}}, _0x40d1a1 = "en", _0xa2798a = _0x10cbb0[_0xb282("0x29e")][_0xb282("0x29f")] || _0x10cbb0[_0xb282("0x29e")][_0xb282("0x2a0")];
  _0xa2798a && _0x166fec["hasOwnProperty"](_0xa2798a) && (_0x40d1a1 = _0xa2798a);
  var _0x33cd4b = _0x166fec[_0x40d1a1], _0x46d51d = {"comm1":_0x33cd4b[_0xb282("0x2a1")], "comm2":_0x33cd4b[_0xb282("0x2a2")], "comm3":_0x33cd4b["comm3"], "comm4":_0x33cd4b[_0xb282("0x2a3")], "comm5":_0x33cd4b[_0xb282("0x2a4")], "comm6":_0x33cd4b[_0xb282("0x2a5")], "comm7":_0x33cd4b["comm7"], "comm8":_0x33cd4b["comm8"], "comm9":_0x33cd4b[_0xb282("0x2a6")], "comm0":_0x33cd4b[_0xb282("0x2a7")], "comm10":_0x33cd4b["comm10"], "comm11":_0x33cd4b["comm11"], "comm12":_0x33cd4b["comm12"], "comm13":_0x33cd4b[_0xb282("0x2a8")], 
  "comm14":_0x33cd4b[_0xb282("0x2a9")]}, _0x58f9c2 = {"&":_0xb282("0x2aa"), "<":_0xb282("0x2ab"), ">":_0xb282("0x2ac"), '"':"&quot;", "'":_0xb282("0x2ad"), "/":_0xb282("0x2ae")}, _0x31a06d = {":)":_0xb282("0x2af"), ";)":"wink.svg", "=)":_0xb282("0x2b0"), ":D":"grin.svg", "X-D":_0xb282("0x2b1"), "=D":_0xb282("0x2b2"), ":(":_0xb282("0x2b3"), ";(":_0xb282("0x2b4"), ":P":_0xb282("0x2b5"), ";P":"tonguew.svg", ":*":_0xb282("0x2b6"), "$)":_0xb282("0x2b7"), "<3":_0xb282("0x2b8"), "8=)":_0xb282("0x2b9"), 
  ":o":_0xb282("0x2ba"), "(:|":"sweat.svg", ":|":_0xb282("0x2bb"), ":\\":_0xb282("0x2bc"), ":@":_0xb282("0x2bd"), "|-)":_0xb282("0x2be"), "^_^":_0xb282("0x2bf"), "-_-":_0xb282("0x2c0"), "$_$":_0xb282("0x2c1"), "O:)":_0xb282("0x2c2"), "3:)":_0xb282("0x2c3"), "(poop)":_0xb282("0x2c4"), "(fuck)":_0xb282("0x2c5"), "(clap)":_0xb282("0x2c6"), "(ok)":_0xb282("0x2c7"), "(victory)":_0xb282("0x2c8"), "(y)":_0xb282("0x2c9"), "(n)":"thumbd.svg"}, _0x225763 = {"ogario-v3":{"name":_0xb282("0x2ca"), "darkTheme":!0, 
  "mainColor":_0xb282("0x2cb"), "bgColor":"#000a11", "bordersColor":_0xb282("0x2cb"), "gridColor":_0xb282("0x2cc"), "sectorsColor":_0xb282("0x2cc"), "namesColor":_0xb282("0x2cd"), "namesStrokeColor":"#000000", "massColor":_0xb282("0x2cd"), "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x2cf"), "virusStrokeColor":_0xb282("0x2d0"), "foodColor":_0xb282("0x2d1"), "teammatesIndColor":_0xb282("0x2cd"), "cursorTrackingColor":"#ffffff", "splitRangeColor":_0xb282("0x2cd"), "namesFont":_0xb282("0x2d2"), 
  "massFont":_0xb282("0x2d2"), "sectorsFont":_0xb282("0x2d3"), "namesScale":1, "massScale":3, "foodSize":5, "bordersWidth":40, "sectorsWidth":40, "sectorsFontSize":1200, "cellsAlpha":.9, "skinsAlpha":.7, "virusAlpha":.6, "textAlpha":1, "virusStrokeSize":14, "menuPreset":_0xb282("0x2d4"), "menuMainColor":"#01d9cc", "menuBtnTextColor":_0xb282("0x2cd"), "menuPanelColor":"#00243e", "menuPanelColor2":_0xb282("0x2cf"), "menuTextColor":_0xb282("0x2cd"), "menuTextColor2":_0xb282("0x2d5"), "btn1Color":_0xb282("0x2d6"), 
  "btn1Color2":_0xb282("0x2d7"), "btn2Color":"#00b9e8", "btn2Color2":_0xb282("0x2d8"), "btn3Color":"#8d5fe6", "btn3Color2":_0xb282("0x2d9"), "btn4Color":_0xb282("0x2da"), "btn4Color2":_0xb282("0x2db"), "menuBg":_0xb282("0x2dc"), "menuOpacity":.96, "hudMainColor":_0xb282("0x2cb"), "hudColor":_0xb282("0x2dd"), "hudTextColor":"#ffffff", "statsHudColor":_0xb282("0x2cd"), "timeHudColor":_0xb282("0x2cb"), "top5MassColor":_0xb282("0x2da"), "lbMeColor":"#bf00aa", "lbTeammateColor":_0xb282("0x2d6"), "hudFont":_0xb282("0x2d2"), 
  "hudScale":1, "messageColor":"rgba(0,0,0,0.4)", "messageTextColor":"#ffffff", "messageTimeColor":"#018cf6", "messageNickColor":"#01d9cc", "commandsColor":"rgba(191,0,170,0.9)", "commandsTextColor":_0xb282("0x2cd"), "commandsTimeColor":_0xb282("0x2da"), "commandsNickColor":_0xb282("0x2cd"), "chatBoxColor":_0xb282("0x2dd"), "chatScale":1, "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":_0xb282("0x2cb"), "miniMapGuidesColor":_0xb282("0x2da"), "miniMapNickColor":_0xb282("0x2cd"), "miniMapNickStrokeColor":_0xb282("0x2ce"), 
  "miniMapMyCellColor":_0xb282("0x2cd"), "miniMapMyCellStrokeColor":"#bf00aa", "miniMapTeammatesColor":_0xb282("0x2cb"), "miniMapDeathLocationColor":_0xb282("0x2da"), "miniMapFont":"ubuntu-bold", "miniMapNickFont":_0xb282("0x2d2"), "miniMapWidth":240, "miniMapSectorsOpacity":.1, "miniMapNickSize":11, "miniMapNickStrokeSize":2, "miniMapMyCellSize":7.5, "miniMapMyCellStrokeSize":4, "miniMapTeammatesSize":5.5, "customBackground":"", "customCursor":_0xb282("0x2de")}, "ogario-orange":{"name":_0xb282("0x2df"), 
  "darkTheme":!0, "mainColor":"#ff7800", "bgColor":_0xb282("0x2e0"), "bordersColor":_0xb282("0x2e1"), "gridColor":_0xb282("0x2e2"), "sectorsColor":_0xb282("0x2e2"), "namesColor":"#ffffff", "namesStrokeColor":_0xb282("0x2ce"), "massColor":_0xb282("0x2cd"), "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x2e3"), "virusStrokeColor":_0xb282("0x2e3"), "foodColor":_0xb282("0x2e4"), "hudMainColor":_0xb282("0x2e1"), "statsHudColor":_0xb282("0x2e1"), "top5MassColor":"#ff7800", "timeHudColor":_0xb282("0x2e1"), 
  "messageNickColor":_0xb282("0x2e1"), "commandsColor":_0xb282("0x2e5"), "commandsTimeColor":_0xb282("0x2e1"), "commandsTextColor":"#ffffff", "miniMapSectorsColor":"#ffffff", "miniMapSectorColor":_0xb282("0x2e1"), "miniMapGuidesColor":_0xb282("0x2e1"), "miniMapMyCellColor":_0xb282("0x2cd"), "miniMapMyCellStrokeColor":_0xb282("0x2e1"), "miniMapTeammatesColor":"#ff7800", "miniMapDeathLocationColor":_0xb282("0x2e1"), "miniMapSectorsOpacity":.1}, "ogario-gold":{"name":_0xb282("0x2e6"), "darkTheme":!0, 
  "mainColor":_0xb282("0x2e7"), "bgColor":_0xb282("0x2ce"), "bordersColor":_0xb282("0x2e7"), "gridColor":_0xb282("0x2e0"), "sectorsColor":"#111111", "namesColor":"#ffffff", "namesStrokeColor":_0xb282("0x2ce"), "massColor":"#ffffff", "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x2e3"), "virusStrokeColor":_0xb282("0x2e3"), "foodColor":"#998c36", "hudMainColor":_0xb282("0x2e7"), "statsHudColor":"#b5a642", "top5MassColor":_0xb282("0x2e7"), "timeHudColor":"#b5a642", "messageNickColor":_0xb282("0x2e7"), 
  "commandsColor":_0xb282("0x2e8"), "commandsTimeColor":_0xb282("0x2e7"), "commandsTextColor":_0xb282("0x2cd"), "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":_0xb282("0x2e7"), "miniMapGuidesColor":"#b5a642", "miniMapMyCellColor":_0xb282("0x2cd"), "miniMapMyCellStrokeColor":_0xb282("0x2e7"), "miniMapTeammatesColor":_0xb282("0x2e7"), "miniMapDeathLocationColor":"#b5a642", "miniMapSectorsOpacity":.1}, "sniikz-style":{"name":_0xb282("0x2e9"), "darkTheme":!0, "mainColor":_0xb282("0x2cb"), 
  "bgColor":_0xb282("0x2ce"), "bordersColor":_0xb282("0x2cd"), "gridColor":"#00243e", "sectorsColor":"#00243e", "namesColor":_0xb282("0x2cd"), "namesStrokeColor":_0xb282("0x2ce"), "massColor":_0xb282("0x2cd"), "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x2ea"), "virusStrokeColor":_0xb282("0x2cd"), "foodColor":_0xb282("0x2d1"), "teammatesIndColor":"#ffffff", "cursorTrackingColor":_0xb282("0x2cd"), "splitRangeColor":_0xb282("0x2cd"), "massScale":4, "foodSize":1, "bordersWidth":40, "sectorsWidth":40, 
  "sectorsFontSize":1200, "cellsAlpha":.99, "skinsAlpha":.7, "virusAlpha":.4, "virusStrokeSize":10, "menuPreset":_0xb282("0x2d4"), "menuMainColor":_0xb282("0x2eb"), "menuBtnTextColor":_0xb282("0x2cd"), "menuPanelColor":"#050008", "menuPanelColor2":_0xb282("0x2ec"), "menuTextColor":_0xb282("0x2cd"), "menuTextColor2":_0xb282("0x2ed"), "btn1Color":_0xb282("0x2ee"), "btn1Color2":"#3b0431", "btn2Color":_0xb282("0x2ef"), "btn2Color2":_0xb282("0x2f0"), "btn3Color":_0xb282("0x2f1"), "btn3Color2":_0xb282("0x2f2"), 
  "btn4Color":_0xb282("0x2f1"), "btn4Color2":"#8a063f", "menuBg":_0xb282("0x2dc"), "menuOpacity":1, "hudMainColor":_0xb282("0x2f3"), "hudColor":_0xb282("0x2f4"), "hudTextColor":_0xb282("0x2cd"), "statsHudColor":_0xb282("0x2cd"), "timeHudColor":_0xb282("0x2f5"), "top5MassColor":_0xb282("0x2f6"), "lbMeColor":_0xb282("0x2da"), "lbTeammateColor":_0xb282("0x2d6"), "hudScale":1.15, "messageColor":_0xb282("0x2dd"), "messageTextColor":"#e8e8e8", "messageTimeColor":_0xb282("0x2f7"), "messageNickColor":_0xb282("0x2f8"), 
  "commandsColor":_0xb282("0x2f9"), "commandsTextColor":_0xb282("0x2cd"), "commandsTimeColor":"#545454", "commandsNickColor":_0xb282("0x2cd"), "chatBoxColor":"rgba(0,0,0,0.4)", "chatScale":1, "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":"#000000", "miniMapGuidesColor":"#ff00a8", "miniMapNickColor":_0xb282("0x2cd"), "miniMapNickStrokeColor":_0xb282("0x2fa"), "miniMapMyCellColor":_0xb282("0x2fb"), "miniMapMyCellStrokeColor":_0xb282("0x2fc"), "miniMapTeammatesColor":_0xb282("0x2fd"), 
  "miniMapDeathLocationColor":"#2b2b2b", "miniMapWidth":250, "miniMapSectorsOpacity":.1, "miniMapNickSize":9, "miniMapNickStrokeSize":0, "miniMapMyCellSize":5, "miniMapMyCellStrokeSize":0, "miniMapTeammatesSize":5, "customBackground":"", "customCursor":_0xb282("0x2fe")}, "hkg-style":{"name":_0xb282("0x2ff"), "darkTheme":!0, "mainColor":_0xb282("0x300"), "bgColor":_0xb282("0x2ce"), "bordersColor":_0xb282("0x2cd"), "gridColor":"#111111", "sectorsColor":_0xb282("0x2e0"), "namesColor":_0xb282("0x2cd"), 
  "namesStrokeColor":_0xb282("0x2ce"), "massColor":"#ffffff", "massStrokeColor":_0xb282("0x2ce"), "virusColor":"#666666", "virusStrokeColor":_0xb282("0x2e3"), "foodColor":"#651fff", "hudMainColor":_0xb282("0x300"), "statsHudColor":"#651fff", "top5MassColor":"#651fff", "timeHudColor":_0xb282("0x300"), "messageNickColor":"#651fff", "commandsColor":"rgba(101,31,255,0.9)", "commandsTimeColor":_0xb282("0x300"), "commandsTextColor":_0xb282("0x2cd"), "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":_0xb282("0x300"), 
  "miniMapGuidesColor":_0xb282("0x300"), "miniMapMyCellColor":_0xb282("0x2cd"), "miniMapMyCellStrokeColor":_0xb282("0x300"), "miniMapTeammatesColor":_0xb282("0x300"), "miniMapDeathLocationColor":_0xb282("0x300"), "miniMapSectorsOpacity":.1}, "agario-light":{"name":_0xb282("0x301"), "darkTheme":!1, "mainColor":_0xb282("0x2cd"), "bgColor":_0xb282("0x302"), "bordersColor":_0xb282("0x303"), "gridColor":_0xb282("0x304"), "sectorsColor":_0xb282("0x304"), "namesColor":"#ffffff", "namesStrokeColor":_0xb282("0x2ce"), 
  "massColor":_0xb282("0x2cd"), "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x305"), "virusStrokeColor":_0xb282("0x306"), "foodColor":_0xb282("0x306"), "hudMainColor":_0xb282("0x2cd"), "statsHudColor":"#ffffff", "top5MassColor":_0xb282("0x2cd"), "timeHudColor":_0xb282("0x2cd"), "messageNickColor":"#ffffff", "commandsColor":_0xb282("0x307"), "commandsTimeColor":_0xb282("0x2cd"), "commandsTextColor":_0xb282("0x2ce"), "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":_0xb282("0x2cd"), 
  "miniMapGuidesColor":_0xb282("0x2cd"), "miniMapMyCellColor":"#ffffff", "miniMapMyCellStrokeColor":_0xb282("0x2cd"), "miniMapTeammatesColor":_0xb282("0x2cd"), "miniMapDeathLocationColor":_0xb282("0x2cd"), "miniMapSectorsOpacity":.25}, "agario-dark":{"name":_0xb282("0x308"), "darkTheme":!0, "mainColor":_0xb282("0x2cd"), "bgColor":_0xb282("0x2e0"), "bordersColor":"#999999", "gridColor":_0xb282("0x309"), "sectorsColor":_0xb282("0x309"), "namesColor":_0xb282("0x2cd"), "namesStrokeColor":"#000000", "massColor":_0xb282("0x2cd"), 
  "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x305"), "virusStrokeColor":_0xb282("0x306"), "foodColor":_0xb282("0x306"), "hudMainColor":_0xb282("0x2cd"), "statsHudColor":_0xb282("0x2cd"), "top5MassColor":"#ffffff", "timeHudColor":_0xb282("0x2cd"), "messageNickColor":_0xb282("0x2cd"), "commandsColor":_0xb282("0x307"), "commandsTimeColor":"#ffffff", "commandsTextColor":"#ffffff", "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":_0xb282("0x2cd"), "miniMapGuidesColor":_0xb282("0x2cd"), 
  "miniMapMyCellColor":_0xb282("0x2cd"), "miniMapMyCellStrokeColor":_0xb282("0x2cd"), "miniMapTeammatesColor":_0xb282("0x2cd"), "miniMapDeathLocationColor":_0xb282("0x2cd"), "miniMapSectorsOpacity":.1}}, _0xdc3f75 = {"ogario-v3":{"name":_0xb282("0x2ca"), "menuMainColor":_0xb282("0x2cb"), "menuBtnTextColor":_0xb282("0x2cd"), "menuPanelColor":"#00243e", "menuPanelColor2":_0xb282("0x2cf"), "menuTextColor":_0xb282("0x2cd"), "menuTextColor2":_0xb282("0x2d5"), "btn1Color":_0xb282("0x2d6"), "btn1Color2":_0xb282("0x2d7"), 
  "btn2Color":"#00b9e8", "btn2Color2":_0xb282("0x2d8"), "btn3Color":_0xb282("0x30a"), "btn3Color2":_0xb282("0x2d9"), "btn4Color":_0xb282("0x30b"), "btn4Color2":"#df00c6", "menuBg":_0xb282("0x2dc")}, "ogario-v2":{"name":_0xb282("0x2df"), "menuMainColor":_0xb282("0x2e1"), "menuBtnTextColor":_0xb282("0x2cd"), "menuPanelColor":_0xb282("0x30c"), "menuPanelColor2":"#333333", "menuTextColor":_0xb282("0x30d"), "menuTextColor2":_0xb282("0x30d"), "btn1Color":_0xb282("0x30e"), "btn1Color2":"#3071a9", "btn2Color":_0xb282("0x30f"), 
  "btn2Color2":_0xb282("0x310"), "btn3Color":_0xb282("0x311"), "btn3Color2":"#ec971f", "btn4Color":_0xb282("0x312"), "btn4Color2":_0xb282("0x313"), "menuBg":""}, "agario":{"name":_0xb282("0x314"), "menuMainColor":_0xb282("0x315"), "menuBtnTextColor":_0xb282("0x2cd"), "menuPanelColor":_0xb282("0x2cd"), "menuPanelColor2":"#cccccc", "menuTextColor":"#333333", "menuTextColor2":"#999999", "btn1Color":_0xb282("0x30e"), "btn1Color2":_0xb282("0x316"), "btn2Color":_0xb282("0x30f"), "btn2Color2":_0xb282("0x310"), 
  "btn3Color":_0xb282("0x311"), "btn3Color2":"#ec971f", "btn4Color":"#d9534f", "btn4Color2":_0xb282("0x313"), "menuBg":""}}, _0x18e354 = {"preset":_0xb282("0x2d4"), "darkTheme":!0, "mainColor":_0xb282("0x2cb"), "bgColor":_0xb282("0x317"), "bordersColor":_0xb282("0x2cb"), "gridColor":"#00243e", "sectorsColor":_0xb282("0x2cc"), "namesColor":"#ffffff", "namesStrokeColor":_0xb282("0x2ce"), "massColor":_0xb282("0x2cd"), "massStrokeColor":_0xb282("0x2ce"), "virusColor":_0xb282("0x2cf"), "virusStrokeColor":_0xb282("0x2d0"), 
  "foodColor":_0xb282("0x2d1"), "teammatesIndColor":_0xb282("0x2cd"), "cursorTrackingColor":_0xb282("0x2cd"), "splitRangeColor":_0xb282("0x2cd"), "namesFont":_0xb282("0x2d2"), "namesFontFamily":_0xb282("0x27"), "namesFontWeight":700, "massFont":_0xb282("0x2d2"), "massFontFamily":_0xb282("0x27"), "massFontWeight":700, "sectorsFont":_0xb282("0x2d3"), "sectorsFontFamily":"Ubuntu", "sectorsFontWeight":400, "sectorsX":5, "sectorsY":5, "namesScale":1, "massScale":3, "virMassScale":3, "strokeScale":1, "foodSize":5, 
  "bordersWidth":40, "sectorsWidth":40, "sectorsFontSize":1200, "cellsAlpha":.9, "skinsAlpha":.7, "virusAlpha":.6, "textAlpha":1, "virusStrokeSize":14, "menuPreset":_0xb282("0x2d4"), "menuMainColor":_0xb282("0x2cb"), "menuBtnTextColor":_0xb282("0x2cd"), "menuPanelColor":_0xb282("0x2cc"), "menuPanelColor2":_0xb282("0x2cf"), "menuTextColor":_0xb282("0x2cd"), "menuTextColor2":_0xb282("0x2d5"), "btn1Color":"#018cf6", "btn1Color2":_0xb282("0x2d7"), "btn2Color":_0xb282("0x2d0"), "btn2Color2":"#0099c0", 
  "btn3Color":_0xb282("0x30a"), "btn3Color2":"#814ee3", "btn4Color":_0xb282("0x2da"), "btn4Color2":_0xb282("0x2db"), "menuBg":_0xb282("0x2dc"), "menuOpacity":.96, "hudMainColor":"#01d9cc", "hudColor":_0xb282("0x2dd"), "hudTextColor":"#ffffff", "statsHudColor":_0xb282("0x2cd"), "timeHudColor":_0xb282("0x2cb"), "top5MassColor":_0xb282("0x2da"), "lbMeColor":_0xb282("0x2da"), "lbTeammateColor":_0xb282("0x2d6"), "hudFont":_0xb282("0x2d2"), "hudFontFamily":"Ubuntu", "hudFontWeight":700, "hudScale":1, "messageColor":_0xb282("0x2dd"), 
  "messageTextColor":_0xb282("0x2cd"), "messageTimeColor":_0xb282("0x2d6"), "messageNickColor":_0xb282("0x2cb"), "commandsColor":_0xb282("0x318"), "commandsTextColor":_0xb282("0x2cd"), "commandsTimeColor":_0xb282("0x2da"), "commandsNickColor":"#ffffff", "chatBoxColor":_0xb282("0x2dd"), "chatScale":1, "miniMapSectorsColor":_0xb282("0x2cd"), "miniMapSectorColor":_0xb282("0x2cb"), "miniMapGuidesColor":_0xb282("0x2da"), "miniMapNickColor":_0xb282("0x2cd"), "miniMapNickStrokeColor":_0xb282("0x2ce"), "miniMapMyCellColor":_0xb282("0x2cd"), 
  "miniMapMyCellStrokeColor":_0xb282("0x2da"), "miniMapTeammatesColor":_0xb282("0x2cb"), "miniMapDeathLocationColor":"#bf00aa", "miniMapFont":_0xb282("0x2d2"), "miniMapFontFamily":_0xb282("0x27"), "miniMapFontWeight":700, "miniMapNickFont":_0xb282("0x2d2"), "miniMapNickFontFamily":_0xb282("0x27"), "miniMapNickFontWeight":700, "miniMapWidth":240, "miniMapTop":24, "miniMapSectorsOpacity":.1, "miniMapNickSize":11, "miniMapNickStrokeSize":2, "miniMapMyCellSize":7.5, "miniMapMyCellStrokeSize":4, "miniMapTeammatesSize":5.5, 
  "customBackground":"", "customCursor":_0xb282("0x2de")}, _0x20b998 = {"menuMainColorCSS":null, "menuPanelColorCSS":null, "menuTextlColorCSS":null, "menuButtonsCSS":null, "hudCSS":null, "chatCSS":null, "chatScaleCSS":null, "cursorCSS":null, "loadThemeSettings":function() {
    var _0x5c1379 = null;
    null !== _0x10cbb0[_0xb282("0x319")]["getItem"](_0xb282("0x31a")) && (_0x5c1379 = JSON["parse"](_0x10cbb0["localStorage"]["getItem"](_0xb282("0x31a"))));
    for (var _0x37fd2a in _0x18e354) {
      _0x18e354[_0xb282("0x31b")](_0x37fd2a) && (_0x5c1379 && _0x5c1379[_0xb282("0x31b")](_0x37fd2a) && (_0x18e354[_0x37fd2a] = _0x5c1379[_0x37fd2a]), _0xe98c87[_0xb282("0x31b")](_0x37fd2a) && (_0xe98c87[_0x37fd2a] = _0x18e354[_0x37fd2a]));
    }
  }, "saveThemeSettings":function() {
    _0x10cbb0[_0xb282("0x319")]["setItem"](_0xb282("0x31a"), JSON[_0xb282("0x31c")](_0x18e354));
  }, "restoreThemeSettings":function() {
    null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x31a")) && (_0x10cbb0["localStorage"][_0xb282("0x31e")](_0xb282("0x31a")), _0x10cbb0[_0xb282("0x71")][_0xb282("0x31f")]());
  }, "addCustomCSS":function(_0x38c76e, _0x508661) {
    this[_0x38c76e] || (this[_0x38c76e] = _0x5c1379(_0xb282("0x320"))[_0xb282("0x321")]("head")), this[_0x38c76e][_0xb282("0x322")](_0x508661);
  }, "addPresetBox":function(_0x23a859, _0x42af89, _0x529d55, _0x2c46bc, _0x56dc53) {
    _0x5c1379(_0x23a859)[_0xb282("0x323")](_0xb282("0x324") + _0x33cd4b[_0x42af89] + _0xb282("0x325") + _0x42af89 + _0xb282("0x326"));
    for (var _0x2c1ecd in _0x529d55) {
      _0x529d55["hasOwnProperty"](_0x2c1ecd) && _0x5c1379("#" + _0x42af89)[_0xb282("0x323")]('<option value="' + _0x2c1ecd + '">' + _0x529d55[_0x2c1ecd][_0xb282("0x327")] + _0xb282("0x328"));
    }
    _0x5c1379("#" + _0x42af89)[_0xb282("0x329")](_0x18e354[_0x2c46bc]);
    var _0x82a9e4 = this;
    _0x5c1379("#" + _0x42af89)["on"](_0xb282("0x32a"), function() {
      var _0x23a859 = this[_0xb282("0x32b")];
      _0x18e354[_0x2c46bc] = _0x23a859, _0x82a9e4[_0x56dc53](_0x23a859);
    });
  }, "addColorBox":function(_0x504225, _0x20a9da, _0xccccd5) {
    if (_0x5c1379(_0x504225)[_0xb282("0x323")](_0xb282("0x32c") + _0x33cd4b[_0x20a9da] + '</span><div class="input-group ' + _0x20a9da + '-picker"><input type="text" value="' + _0x18e354[_0x20a9da] + _0xb282("0x32d") + _0x20a9da + _0xb282("0x32e")), _0xccccd5) {
      var _0x477b4a = this;
      _0x5c1379(_0x504225 + " ." + _0x20a9da + _0xb282("0x32f"))[_0xb282("0x330")]({"format":_0xb282("0x331")})["on"](_0xb282("0x332"), function(_0x2fa94f) {
        _0x18e354[_0x20a9da] = _0x2fa94f["color"][_0xb282("0x333")](), _0xe98c87[_0xb282("0x31b")](_0x20a9da) && (_0xe98c87[_0x20a9da] = _0x18e354[_0x20a9da]), _0x477b4a[_0xccccd5]();
      });
    } else {
      _0x5c1379(_0x504225 + " ." + _0x20a9da + "-picker")[_0xb282("0x330")]({"format":"hex"})["on"]("changeColor.colorpicker", function(_0x5020f2) {
        _0x18e354[_0x20a9da] = _0x5020f2[_0xb282("0x9")][_0xb282("0x333")](), _0xe98c87[_0xb282("0x31b")](_0x20a9da) && (_0xe98c87[_0x20a9da] = _0x18e354[_0x20a9da]);
      });
    }
  }, "addRgbaColorBox":function(_0x209232, _0x12e83d, _0x5d208e) {
    if (_0x5c1379(_0x209232)["append"](_0xb282("0x32c") + _0x33cd4b[_0x12e83d] + '</span><div class="input-group ' + _0x12e83d + _0xb282("0x334") + _0x18e354[_0x12e83d] + _0xb282("0x32d") + _0x12e83d + _0xb282("0x32e")), _0x5d208e) {
      var _0x445738 = this;
      _0x5c1379(_0x209232 + " ." + _0x12e83d + "-picker")["colorpicker"]({"format":_0xb282("0x335")})["on"](_0xb282("0x332"), function(_0xf7b2c3) {
        var _0x5c1379 = _0xf7b2c3["color"]["toRGB"]();
        _0x18e354[_0x12e83d] = _0xb282("0x336") + _0x5c1379["r"] + "," + _0x5c1379["g"] + "," + _0x5c1379["b"] + "," + _0x5c1379["a"] + ")", _0xe98c87[_0xb282("0x31b")](_0x12e83d) && (_0xe98c87[_0x12e83d] = _0x18e354[_0x12e83d]), _0x445738[_0x5d208e]();
      });
    } else {
      _0x5c1379(_0x209232 + " ." + _0x12e83d + _0xb282("0x32f"))[_0xb282("0x330")]({"format":_0xb282("0x335")})["on"](_0xb282("0x332"), function(_0x1c6578) {
        var _0x5c1379 = _0x1c6578[_0xb282("0x9")][_0xb282("0x337")]();
        _0x18e354[_0x12e83d] = _0xb282("0x336") + _0x5c1379["r"] + "," + _0x5c1379["g"] + "," + _0x5c1379["b"] + "," + _0x5c1379["a"] + ")", _0xe98c87[_0xb282("0x31b")](_0x12e83d) && (_0xe98c87[_0x12e83d] = _0x18e354[_0x12e83d]);
      });
    }
  }, "addSliderBox":function(_0x4e027d, _0x4fc5b6, _0xf6fdef, _0x31efd3, _0x50bb07, _0x568da4) {
    if (_0x5c1379(_0x4e027d)[_0xb282("0x323")]('<div class="slider-box"><div class="box-label"><span class="value-label">' + _0x33cd4b[_0x4fc5b6] + ': </span><span id="' + _0x4fc5b6 + _0xb282("0x338") + _0x18e354[_0x4fc5b6] + '</span></div><input id="' + _0x4fc5b6 + _0xb282("0x339") + _0xf6fdef + _0xb282("0x33a") + _0x31efd3 + _0xb282("0x33b") + _0x50bb07 + _0xb282("0x33c") + _0x18e354[_0x4fc5b6] + '"></div>'), _0x568da4) {
      var _0x2792e6 = this;
      _0x5c1379("#" + _0x4fc5b6 + _0xb282("0x33d"))["on"](_0xb282("0x33e"), function() {
        var _0x4e027d = parseFloat(_0x5c1379(this)[_0xb282("0x329")]());
        _0x5c1379("#" + _0x4fc5b6 + _0xb282("0x33f"))[_0xb282("0x90")](_0x4e027d), _0x18e354[_0x4fc5b6] = _0x4e027d, _0xe98c87[_0xb282("0x31b")](_0x4fc5b6) && (_0xe98c87[_0x4fc5b6] = _0x4e027d), _0x2792e6[_0x568da4]();
      });
    } else {
      _0x5c1379("#" + _0x4fc5b6 + "-slider")["on"](_0xb282("0x33e"), function() {
        var _0x4e027d = parseFloat(_0x5c1379(this)["val"]());
        _0x5c1379("#" + _0x4fc5b6 + _0xb282("0x33f"))[_0xb282("0x90")](_0x4e027d), _0x18e354[_0x4fc5b6] = _0x4e027d, _0xe98c87[_0xb282("0x31b")](_0x4fc5b6) && (_0xe98c87[_0x4fc5b6] = _0x4e027d);
      });
    }
  }, "addInputBox":function(_0x571f4f, _0x23600b, _0x3991b5, _0x44a62d) {
    _0x5c1379(_0x571f4f)[_0xb282("0x323")](_0xb282("0x340") + _0x33cd4b[_0x23600b] + _0xb282("0x341") + _0x23600b + _0xb282("0x342") + _0x3991b5 + _0xb282("0x33c") + _0x18e354[_0x23600b] + _0xb282("0x343"));
    var _0x4fc952 = this;
    _0x5c1379("#" + _0x23600b)["on"](_0xb282("0x33e"), function() {
      _0x18e354[_0x23600b] = this[_0xb282("0x32b")], _0x4fc952[_0x44a62d]();
    });
  }, "addCursorBox":function(_0x67966, _0x3c299c) {
    _0x5c1379(_0x67966)[_0xb282("0x323")](_0x3c299c === _0x18e354[_0xb282("0x344")] ? _0xb282("0x345") + _0x3c299c + '"></a></div>' : _0xb282("0x346") + _0x3c299c + _0xb282("0x347"));
  }, "setFont":function(_0x29709d, _0x1585fb) {
    _0x18e354[_0x29709d] = _0x1585fb, _0x18e354[_0x29709d + "Family"] = this[_0xb282("0x34")](_0x1585fb), _0x18e354[_0x29709d + _0xb282("0x348")] = this[_0xb282("0x35")](_0x1585fb), _0xe98c87[_0xb282("0x31b")](_0x29709d + _0xb282("0x349")) && (_0xe98c87[_0x29709d + _0xb282("0x349")] = _0x18e354[_0x29709d + _0xb282("0x349")]), _0xe98c87[_0xb282("0x31b")](_0x29709d + _0xb282("0x348")) && (_0xe98c87[_0x29709d + _0xb282("0x348")] = _0x18e354[_0x29709d + _0xb282("0x348")]);
  }, "addFontBox":function(_0x311ed3, _0x1de268, _0x58b998) {
    _0x5c1379(_0x311ed3)[_0xb282("0x323")](_0xb282("0x34a") + _0x33cd4b[_0x1de268] + _0xb282("0x325") + _0x1de268 + _0xb282("0x326")), _0x5c1379("#" + _0x1de268)["append"](_0xb282("0x34b")), _0x5c1379("#" + _0x1de268)[_0xb282("0x323")](_0xb282("0x34c")), _0x5c1379("#" + _0x1de268)["append"]('<option value="oswald">Oswald</option><option value="oswald-bold">Oswald Bold</option>'), _0x5c1379("#" + _0x1de268)[_0xb282("0x329")](_0x18e354[_0x1de268]);
    var _0x5b2350 = this;
    _0x58b998 ? _0x5c1379("#" + _0x1de268)["on"]("change", function() {
      var _0x311ed3 = this[_0xb282("0x32b")];
      _0x5b2350["setFont"](_0x1de268, _0x311ed3), _0x5b2350[_0x58b998]();
    }) : _0x5c1379("#" + _0x1de268)["on"](_0xb282("0x32a"), function() {
      var _0x311ed3 = this["value"];
      _0x5b2350["setFont"](_0x1de268, _0x311ed3);
    });
  }, "setFontFamily":function(_0x1135ca) {
    return -1 != _0x1135ca[_0xb282("0x34d")](_0xb282("0x34e")) ? _0xb282("0x34f") : -1 != _0x1135ca[_0xb282("0x34d")](_0xb282("0x350")) ? _0xb282("0x351") : "Ubuntu";
  }, "setFontWeight":function(_0x537b9f) {
    return -1 != _0x537b9f[_0xb282("0x34d")]("bold") ? 700 : 400;
  }, "setThemeMenu":function() {
    var _0x10cbb0 = this;
    _0x5c1379(_0xb282("0x352"))["append"]('<ul class="submenu-tabs"><li class="theme-main-tab active"><a href="#theme-main" class="active icon-paint-format" data-toggle="tab-tooltip" data-container="body" title="' + _0x33cd4b["basicTheming"] + _0xb282("0x353") + _0x33cd4b[_0xb282("0x354")] + _0xb282("0x355") + _0x33cd4b[_0xb282("0x356")] + _0xb282("0x357") + _0x33cd4b[_0xb282("0x358")] + _0xb282("0x359") + _0x33cd4b[_0xb282("0x35a")] + _0xb282("0x35b") + _0x33cd4b[_0xb282("0x35c")] + _0xb282("0x35d")), 
    this[_0xb282("0x35e")](_0xb282("0x35f"), _0xb282("0x360"), _0x225763, _0xb282("0x361"), _0xb282("0x362")), this[_0xb282("0x363")]("#theme-main", _0xb282("0x364"), _0xb282("0x365")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x366")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x367")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x368")), this[_0xb282("0x363")]("#theme-main", _0xb282("0x369")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x36a")), this["addColorBox"](_0xb282("0x35f"), 
    _0xb282("0x36b")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x36c")), this["addColorBox"](_0xb282("0x35f"), _0xb282("0x36d")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x36e")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x36f"), "setFoodColor"), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x370"), "setIndicatorColor"), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x371")), this[_0xb282("0x363")](_0xb282("0x35f"), _0xb282("0x372")), this[_0xb282("0x373")]("#theme-main", 
    _0xb282("0x374")), this["addFontBox"](_0xb282("0x35f"), _0xb282("0x375")), this["addFontBox"](_0xb282("0x35f"), _0xb282("0x376")), this[_0xb282("0x377")](_0xb282("0x35f"), _0xb282("0x378"), 200, 2E3, 10), this[_0xb282("0x377")](_0xb282("0x35f"), _0xb282("0x379"), .5, 2, .1), this[_0xb282("0x377")](_0xb282("0x35f"), _0xb282("0x4f"), 1, 5, 1), this[_0xb282("0x377")]("#theme-main", _0xb282("0x50"), 1, 5, 1), this[_0xb282("0x377")](_0xb282("0x35f"), _0xb282("0x65"), 1, 4, .1), this[_0xb282("0x377")](_0xb282("0x35f"), 
    _0xb282("0x37a"), 1, 50, 1, _0xb282("0x37b")), this[_0xb282("0x377")](_0xb282("0x35f"), "virusStrokeSize", 2, 40, 1), this[_0xb282("0x377")](_0xb282("0x35f"), _0xb282("0x37c"), 2, 200, 2), this["addSliderBox"]("#theme-main", "sectorsWidth", 2, 200, 2), this["addSliderBox"](_0xb282("0x35f"), _0xb282("0x37d"), .01, .99, .01), this["addSliderBox"](_0xb282("0x35f"), _0xb282("0x37e"), .01, .99, .01), this[_0xb282("0x377")](_0xb282("0x35f"), "virusAlpha", 0, 1, .01), this[_0xb282("0x377")]("#theme-main", 
    _0xb282("0x37f"), .1, 1, .01), this[_0xb282("0x35e")](_0xb282("0x380"), _0xb282("0x381"), _0xdc3f75, _0xb282("0x381"), _0xb282("0x382")), this[_0xb282("0x377")]("#theme-menu", "menuOpacity", .1, 1, .01, _0xb282("0x383")), this[_0xb282("0x363")](_0xb282("0x380"), _0xb282("0x384"), _0xb282("0x385")), this[_0xb282("0x363")](_0xb282("0x380"), "menuBtnTextColor", _0xb282("0x386")), this[_0xb282("0x363")]("#theme-menu", _0xb282("0x387"), "setMenuPanelColor"), this[_0xb282("0x363")](_0xb282("0x380"), 
    _0xb282("0x388"), _0xb282("0x389")), this["addColorBox"](_0xb282("0x380"), _0xb282("0x38a"), "setMenuTextColor"), this[_0xb282("0x363")]("#theme-menu", _0xb282("0x38b"), _0xb282("0x38c")), this[_0xb282("0x363")](_0xb282("0x380"), _0xb282("0x38d"), _0xb282("0x386")), this[_0xb282("0x363")](_0xb282("0x380"), _0xb282("0x38e"), _0xb282("0x386")), this[_0xb282("0x363")](_0xb282("0x380"), _0xb282("0x38f"), _0xb282("0x386")), this[_0xb282("0x363")](_0xb282("0x380"), _0xb282("0x390"), _0xb282("0x386")), 
    this[_0xb282("0x363")](_0xb282("0x380"), _0xb282("0x391"), _0xb282("0x386")), this[_0xb282("0x363")](_0xb282("0x380"), "btn3Color2", _0xb282("0x386")), this["addColorBox"](_0xb282("0x380"), _0xb282("0x392"), "setMenuButtons"), this[_0xb282("0x363")]("#theme-menu", _0xb282("0x393"), _0xb282("0x386")), this[_0xb282("0x394")](_0xb282("0x380"), _0xb282("0x395"), _0xb282("0x396"), _0xb282("0x397")), this[_0xb282("0x363")](_0xb282("0x398"), _0xb282("0x399"), _0xb282("0x39a")), this[_0xb282("0x39b")]("#theme-hud", 
    _0xb282("0x39c"), _0xb282("0x39a")), this[_0xb282("0x363")]("#theme-hud", _0xb282("0x39d"), _0xb282("0x39a")), this[_0xb282("0x363")](_0xb282("0x398"), _0xb282("0x39e"), _0xb282("0x39a")), this[_0xb282("0x363")]("#theme-hud", _0xb282("0x39f"), _0xb282("0x39a")), this[_0xb282("0x363")](_0xb282("0x398"), _0xb282("0x3a0"), _0xb282("0x39a")), this[_0xb282("0x363")](_0xb282("0x398"), _0xb282("0x3a1"), _0xb282("0x39a")), this[_0xb282("0x363")](_0xb282("0x398"), "lbTeammateColor", _0xb282("0x39a")), 
    this[_0xb282("0x373")](_0xb282("0x398"), _0xb282("0x3a2"), _0xb282("0x3a3")), this[_0xb282("0x377")](_0xb282("0x398"), _0xb282("0x3a4"), 1, 2, .01, _0xb282("0x3a5")), this["addRgbaColorBox"]("#theme-chat", "messageColor", _0xb282("0x3a6")), this[_0xb282("0x363")](_0xb282("0x3a7"), _0xb282("0x3a8"), _0xb282("0x3a6")), this[_0xb282("0x363")](_0xb282("0x3a7"), _0xb282("0x3a9"), "setChatColors"), this[_0xb282("0x363")](_0xb282("0x3a7"), _0xb282("0x3aa"), "setChatColors"), this["addRgbaColorBox"](_0xb282("0x3a7"), 
    _0xb282("0x3ab"), _0xb282("0x3a6")), this["addColorBox"](_0xb282("0x3a7"), _0xb282("0x3ac"), _0xb282("0x3a6")), this[_0xb282("0x363")](_0xb282("0x3a7"), _0xb282("0x3ad"), _0xb282("0x3a6")), this[_0xb282("0x363")]("#theme-chat", _0xb282("0x3ae"), _0xb282("0x3a6")), this["addRgbaColorBox"](_0xb282("0x3a7"), _0xb282("0x3af"), _0xb282("0x3a6")), this[_0xb282("0x377")](_0xb282("0x3a7"), "chatScale", 1, 2, .01, _0xb282("0x3b0")), this[_0xb282("0x363")](_0xb282("0x3b1"), "miniMapSectorsColor", _0xb282("0x3b2")), 
    this[_0xb282("0x363")]("#theme-minimap", _0xb282("0x3b3")), this[_0xb282("0x363")](_0xb282("0x3b1"), _0xb282("0x1a")), this[_0xb282("0x363")](_0xb282("0x3b1"), "miniMapNickStrokeColor"), this[_0xb282("0x363")](_0xb282("0x3b1"), _0xb282("0x3b4")), this["addColorBox"](_0xb282("0x3b1"), "miniMapMyCellStrokeColor"), this[_0xb282("0x363")]("#theme-minimap", _0xb282("0x5")), this[_0xb282("0x363")](_0xb282("0x3b1"), "miniMapDeathLocationColor"), this[_0xb282("0x363")](_0xb282("0x3b1"), _0xb282("0x3b5")), 
    this[_0xb282("0x373")](_0xb282("0x3b1"), _0xb282("0x3b6"), _0xb282("0x3b7")), this[_0xb282("0x373")](_0xb282("0x3b1"), _0xb282("0x3b8")), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0x3b9"), 200, 400, 2, _0xb282("0x3ba")), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0x3bb"), 0, 1, .01, _0xb282("0x3bc")), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0xe"), 8, 16, 1), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0x14"), 0, 6, 1), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0x3bd"), 
    4, 10, .5), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0x3be"), 0, 10, 1), this[_0xb282("0x377")](_0xb282("0x3b1"), _0xb282("0x18"), 4, 10, .5), this["addInputBox"](_0xb282("0x3bf"), _0xb282("0x3c0"), _0xb282("0x396"), "setCustomBackground"), this[_0xb282("0x394")](_0xb282("0x3bf"), _0xb282("0x344"), _0xb282("0x3c1"), _0xb282("0x3c2"));
    for (var _0xe98c87 = _0xb282("0x3c3"), _0x3f1c53 = 0; 35 > _0x3f1c53; _0x3f1c53++) {
      9 > _0x3f1c53 ? this[_0xb282("0x3c4")](_0xb282("0x3bf"), _0xe98c87 + "0" + (_0x3f1c53 + 1) + _0xb282("0x3c5")) : this[_0xb282("0x3c4")](_0xb282("0x3bf"), _0xe98c87 + "" + (_0x3f1c53 + 1) + _0xb282("0x3c5"));
    }
    _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x3c7"), function(_0x92b89c) {
      _0x92b89c["preventDefault"]();
      var _0xc6b824 = _0x5c1379(_0xb282("0x3c8"), this)["attr"](_0xb282("0x3c9"));
      _0x18e354[_0xb282("0x344")] = _0xc6b824, _0x10cbb0[_0xb282("0x3c2")](), _0x5c1379(_0xb282("0x3ca"))[_0xb282("0x329")](_0xc6b824), _0x5c1379(_0xb282("0x3c7"))["removeClass"](_0xb282("0x3cb")), _0x5c1379(this)[_0xb282("0x3cc")](_0xb282("0x3cb"));
    }), _0x5c1379(_0xb282("0x352"))["append"]('<button class="btn btn-block btn-success btn-save"">' + _0x33cd4b["saveSett"] + _0xb282("0x3cd")), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x3ce"), function(_0x2bbe73) {
      _0x2bbe73[_0xb282("0x3cf")]();
      var _0x4a70c9 = _0x5c1379(this);
      _0x4a70c9[_0xb282("0x90")](_0x33cd4b[_0xb282("0x3d0")]), _0x10cbb0[_0xb282("0x3d1")](), setTimeout(function() {
        _0x4a70c9[_0xb282("0x90")](_0x33cd4b[_0xb282("0x3d2")]);
      }, 500);
    }), _0x5c1379("#theme")[_0xb282("0x323")](_0xb282("0x3d3") + _0x33cd4b[_0xb282("0x3d4")] + _0xb282("0x3d5")), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x3d6"), function(_0x47d3c7) {
      _0x47d3c7[_0xb282("0x3cf")](), _0x10cbb0[_0xb282("0x3d4")]();
    }), _0x5c1379(".skin")[_0xb282("0x330")]({"format":_0xb282("0x331"), "input":_0xb282("0x3d7")});
  }, "changePreset":function(_0x5dd783, _0x4dc808) {
    if (_0x4dc808[_0x5dd783]) {
      _0x18e354[_0x5dd783] = _0x5dd783;
      var _0x5dd783 = _0x4dc808[_0x5dd783];
      for (var _0x497c00 in _0x5dd783) {
        _0x5dd783[_0xb282("0x31b")](_0x497c00) && _0x18e354[_0xb282("0x31b")](_0x497c00) && (_0x18e354[_0x497c00] = _0x5dd783[_0x497c00], _0xe98c87["hasOwnProperty"](_0x497c00) && (_0xe98c87[_0x497c00] = _0x18e354[_0x497c00]), _0x5c1379(_0xb282("0x3d8") + _0x497c00 + _0xb282("0x32f")) && _0x5c1379(_0xb282("0x3d8") + _0x497c00 + _0xb282("0x32f"))[_0xb282("0x330")](_0xb282("0x3d9"), _0x18e354[_0x497c00]), _0x5c1379("#" + _0x497c00 + _0xb282("0x33d")) && _0x5c1379("#" + _0x497c00 + _0xb282("0x33d"))[_0xb282("0x329")](_0x18e354[_0x497c00])[_0xb282("0x32a")](), 
        (_0x5c1379(_0xb282("0x3da") + _0x497c00) || _0x5c1379(_0xb282("0x3db") + _0x497c00)) && _0x5c1379("#" + _0x497c00)[_0xb282("0x329")](_0x18e354[_0x497c00]));
      }
    }
  }, "changeThemePreset":function(_0x316257) {
    this["changePreset"](_0x316257, _0x225763), this[_0xb282("0x3dc")]();
  }, "setFonts":function() {
    this[_0xb282("0x32")]("namesFont", _0x18e354["namesFont"]), this[_0xb282("0x32")](_0xb282("0x375"), _0x18e354[_0xb282("0x374")]), this[_0xb282("0x32")](_0xb282("0x376"), _0x18e354[_0xb282("0x376")]);
  }, "setBgColor":function() {
    _0x5c1379(_0xb282("0x8f"))[_0xb282("0xb6")](_0xb282("0x3dd"), _0x18e354[_0xb282("0x364")]);
  }, "setFoodColor":function() {
    _0x34bd23[_0xb282("0x3de")] && _0x381fe5 && _0x381fe5[_0xb282("0x3df")]();
  }, "setIndicatorColor":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x3e0")]();
  }, "setCustomBackground":function() {
    _0x18e354[_0xb282("0x3c0")] ? _0x5c1379(_0xb282("0x8f"))["css"]("background-image", _0xb282("0x3e1") + _0x18e354[_0xb282("0x3c0")] + ")") : _0x5c1379(_0xb282("0x8f"))[_0xb282("0xb6")](_0xb282("0x3e2"), _0xb282("0x3e3"));
  }, "setCustomCursor":function() {
    if (_0x18e354[_0xb282("0x344")]) {
      var _0x10cbb0 = _0xb282("0x3e4") + _0x18e354[_0xb282("0x344")] + _0xb282("0x3e5");
    } else {
      var _0x10cbb0 = _0xb282("0x3e6");
    }
    this[_0xb282("0x3e7")](_0xb282("0x3e8"), _0x10cbb0);
  }, "setMenu":function() {
    this[_0xb282("0x383")](), this[_0xb282("0x385")](), this[_0xb282("0x389")](), this[_0xb282("0x38c")](), this[_0xb282("0x386")](), this[_0xb282("0x397")]();
  }, "changeMenuPreset":function(_0x9f1eb2) {
    this[_0xb282("0x3e9")](_0x9f1eb2, _0xdc3f75), this[_0xb282("0x3ea")]();
  }, "setMenuOpacity":function() {
    _0x5c1379(_0xb282("0x3eb"))[_0xb282("0xb6")](_0xb282("0x3ec"), _0x18e354[_0xb282("0x3ed")]);
  }, "setMenuMainColor":function() {
    var _0x10cbb0 = _0xb282("0x3ee") + _0x18e354[_0xb282("0x384")] + _0xb282("0x3ef") + _0x18e354[_0xb282("0x384")] + _0xb282("0x3f0") + _0x18e354[_0xb282("0x384")] + _0xb282("0x3f1") + _0x18e354[_0xb282("0x384")] + _0xb282("0x3f2") + _0x18e354[_0xb282("0x384")] + _0xb282("0x3f3") + _0x18e354[_0xb282("0x384")] + "!important}";
    this["addCustomCSS"](_0xb282("0x3f4"), _0x10cbb0);
  }, "setMenuPanelColor":function() {
    var _0x10cbb0 = "#main-menu,.agario-side-panel,#hotkeys,#exp-imp{background-color: " + _0x18e354[_0xb282("0x387")] + _0xb282("0x3f5") + _0x18e354[_0xb282("0x388")] + _0xb282("0x3f6") + _0x18e354["menuPanelColor2"] + _0xb282("0x3f7") + _0x18e354[_0xb282("0x388")] + "}input.stream-mode,input.hide-url{color:" + _0x18e354[_0xb282("0x388")] + _0xb282("0x3f8");
    this[_0xb282("0x3e7")](_0xb282("0x3f9"), _0x10cbb0);
  }, "setMenuTextColor":function() {
    var _0x10cbb0 = _0xb282("0x3fa") + _0x18e354[_0xb282("0x38a")] + _0xb282("0x3fb") + _0x18e354[_0xb282("0x38a")] + _0xb282("0x3fc") + _0x18e354[_0xb282("0x38b")] + _0xb282("0x3fd") + _0x18e354[_0xb282("0x38b")] + "!important}#user-id-tag, #version-tag,#statsSubtext,#hotkeys-inst,#exp-imp textarea,.restore-settings a,.restore-settings a:hover{color:" + _0x18e354["menuTextColor2"] + _0xb282("0x3fe") + _0x18e354[_0xb282("0x38b")] + "}";
    this[_0xb282("0x3e7")]("menuTextColorCSS", _0x10cbb0);
  }, "setMenuButtons":function() {
    var _0x10cbb0 = _0xb282("0x3ff") + _0x18e354[_0xb282("0x38d")] + _0xb282("0x400") + _0x18e354[_0xb282("0x401")] + _0xb282("0x402") + _0x18e354["btn1Color"] + _0xb282("0x403") + _0x18e354[_0xb282("0x38e")] + "!important}.btn-success{background-color:" + _0x18e354[_0xb282("0x38f")] + "!important}.btn-success:active,.btn-success:disabled,.btn-success:focus,.btn-success:hover{background-color:" + _0x18e354[_0xb282("0x390")] + _0xb282("0x404") + _0x18e354[_0xb282("0x391")] + _0xb282("0x405") + _0x18e354[_0xb282("0x406")] + 
    _0xb282("0x407") + _0x18e354[_0xb282("0x392")] + "!important}.btn-danger:active,.btn-danger:disabled,.btn-danger:focus,.btn-danger:hover{background-color:" + _0x18e354[_0xb282("0x393")] + "!important}#hotkeys-cfg .custom-key-in{background-color:" + _0x18e354["btn4Color2"] + _0xb282("0x408") + _0x18e354[_0xb282("0x393")] + "}";
    this[_0xb282("0x3e7")](_0xb282("0x409"), _0x10cbb0);
  }, "setMenuBg":function() {
    _0x5c1379(_0xb282("0x40a"))[_0xb282("0x329")](_0x18e354[_0xb282("0x395")]), _0x18e354["menuBg"] ? _0x5c1379(_0xb282("0x40b"))[_0xb282("0xb6")](_0xb282("0x3e2"), _0xb282("0x3e1") + _0x18e354[_0xb282("0x395")] + ")") : _0x5c1379(_0xb282("0x40b"))["css"](_0xb282("0x3e2"), _0xb282("0x3e3"));
  }, "setHud":function() {
    this[_0xb282("0x39a")](), this["setHudFont"](), this[_0xb282("0x3a5")]();
  }, "setHudColors":function() {
    var _0x10cbb0 = _0xb282("0x40c") + _0x18e354[_0xb282("0x399")] + "}.hud,.hud-b,#chat-emoticons{background-color:" + _0x18e354["hudColor"] + _0xb282("0x40d") + _0x18e354[_0xb282("0x39d")] + _0xb282("0x40e") + _0x18e354[_0xb282("0x39e")] + _0xb282("0x40f") + _0x18e354[_0xb282("0x39f")] + _0xb282("0x410") + _0x18e354["top5MassColor"] + _0xb282("0x411") + _0x18e354[_0xb282("0x3a1")] + _0xb282("0x412") + _0x18e354[_0xb282("0x413")] + "}";
    this[_0xb282("0x3e7")](_0xb282("0x414"), _0x10cbb0);
  }, "setHudFont":function() {
    this[_0xb282("0x32")]("hudFont", _0x18e354[_0xb282("0x3a2")]), _0x5c1379("#overlays-hud")[_0xb282("0xb6")]({"font-family":_0x18e354["hudFontFamily"], "font-weight":_0x18e354[_0xb282("0x415")]});
  }, "setHudScale":function() {
    var _0x10cbb0 = Math["round"](20 * _0x18e354[_0xb282("0x3a4")]), _0xe98c87 = Math[_0xb282("0x61")](200 * _0x18e354[_0xb282("0x3a4")]), _0x365c96 = Math[_0xb282("0x416")](55 * _0x18e354[_0xb282("0x3a4")]), _0x217f44 = Math[_0xb282("0x416")](20 * _0x18e354[_0xb282("0x3a4")]), _0x1b6d9d = Math[_0xb282("0x416")](280 * _0x18e354[_0xb282("0x3a4")]), _0x4e0b85 = Math[_0xb282("0x416")](85 * _0x18e354[_0xb282("0x3a4")]), _0x4da3de = Math[_0xb282("0x416")](20 * _0x18e354["hudScale"]);
    _0x5c1379(_0xb282("0x417"))[_0xb282("0xb6")]("font-size", _0x10cbb0 + "px"), _0x5c1379(_0xb282("0x418"))[_0xb282("0x42")](_0xe98c87), _0x5c1379("#top5-hud")[_0xb282("0x42")](_0xe98c87 + 20)["css"]("top", _0x365c96 + "px"), _0x5c1379(_0xb282("0x419"))[_0xb282("0xb6")](_0xb282("0x41a"), _0x217f44 + "px"), _0x5c1379(_0xb282("0x41b"))[_0xb282("0xb6")](_0xb282("0xba"), _0x1b6d9d + "px"), _0x5c1379(_0xb282("0x41c"))[_0xb282("0xb6")](_0xb282("0xba"), _0x4e0b85 + "px"), _0x5c1379(_0xb282("0x41d"))["css"](_0xb282("0x41e"), 
    _0x4da3de + "px");
  }, "setChat":function() {
    this[_0xb282("0x3a6")](), this[_0xb282("0x3b0")]();
  }, "setChatColors":function() {
    var _0x10cbb0 = _0xb282("0x41f") + _0x18e354[_0xb282("0x420")] + _0xb282("0x421") + _0x18e354[_0xb282("0x3a8")] + _0xb282("0x422") + _0x18e354[_0xb282("0x3aa")] + "}.message-time{color:" + _0x18e354[_0xb282("0x3a9")] + _0xb282("0x423") + _0x18e354[_0xb282("0x3ab")] + _0xb282("0x424") + _0x18e354["commandsTextColor"] + _0xb282("0x425") + _0x18e354["commandsNickColor"] + _0xb282("0x426") + _0x18e354[_0xb282("0x3ad")] + _0xb282("0x427") + _0x18e354[_0xb282("0x3af")] + "}";
    this[_0xb282("0x3e7")](_0xb282("0x428"), _0x10cbb0);
  }, "setChatScale":function() {
    var _0x10cbb0 = Math[_0xb282("0x61")](14 * _0x18e354[_0xb282("0x429")]), _0xe98c87 = Math["round"](280 * _0x18e354[_0xb282("0x429")]), _0x49452a = Math[_0xb282("0x61")](350 * _0x18e354["chatScale"]), _0x57af51 = Math[_0xb282("0x61")](300 * _0x18e354[_0xb282("0x429")]), _0x439f48 = Math["floor"](14 * _0x18e354["chatScale"]);
    _0x5c1379(_0xb282("0x42a"))[_0xb282("0xb6")]("font-size", _0x10cbb0 + "px"), _0x5c1379(_0xb282("0x42b"))[_0xb282("0x42")](_0xe98c87), _0x5c1379(_0xb282("0x42c"))[_0xb282("0x42")](_0x49452a), _0x5c1379("#chat-box")[_0xb282("0x44")](_0x57af51), _0x5c1379(_0xb282("0x42d"))[_0xb282("0xb6")](_0xb282("0x41a"), _0x439f48 + "px");
    var _0x17a0cf = _0xb282("0x42e") + _0xe98c87 + _0xb282("0x42f") + _0x10cbb0 + _0xb282("0x430");
    this[_0xb282("0x3e7")](_0xb282("0x431"), _0x17a0cf);
  }, "setMiniMap":function() {
    this[_0xb282("0x3b7")](), this[_0xb282("0x3ba")](), this[_0xb282("0x3bc")]();
  }, "setMiniMapFont":function() {
    this[_0xb282("0x32")](_0xb282("0x3b6"), _0x18e354[_0xb282("0x3b6")]), _0x381fe5 && _0x381fe5[_0xb282("0x432")]();
  }, "setMiniMapWidth":function() {
    var _0x10cbb0 = _0x18e354["miniMapWidth"] / 200;
    _0x18e354["miniMapTop"] = Math[_0xb282("0x61")](20 * _0x10cbb0), _0x5c1379(_0xb282("0x433"))[_0xb282("0xb6")]({"width":_0x18e354[_0xb282("0x3b9")], "height":_0x18e354[_0xb282("0x3b9")] + _0x18e354[_0xb282("0x434")]}), _0x381fe5 && _0x381fe5["resetMiniMapSectors"]();
  }, "setMiniMapSectorsColor":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x432")]();
  }, "setMiniMapSectorsOpacity":function() {
    _0x5c1379("#minimap-sectors")[_0xb282("0xb6")](_0xb282("0x3ec"), _0x18e354[_0xb282("0x3bb")]);
  }, "setTheme":function() {
    this[_0xb282("0x435")](), this[_0xb282("0x365")](), this[_0xb282("0x436")](), this[_0xb282("0x3c2")](), this[_0xb282("0x3ea")](), this["setHud"](), this[_0xb282("0x437")](), this["setMiniMap"]();
  }, "init":function() {
    this[_0xb282("0x438")]();
  }}, _0x5556ef = [], _0x3a156f = {"nick":_0xb282("0x439"), "clanTag":"\u24c2", "skinURL":"", "color":_0x18e354[_0xb282("0x43a")]}, _0x34bd23 = {"quickResp":!0, "autoResp":!1, "autoZoom":!1, "autoHideNames":!0, "autoHideMass":!0, "autoHideFood":!1, "autoHideFoodOnZoom":!1, "noNames":!1, "optimizedNames":!0, "hideMyName":!0, "hideTeammatesNames":!1, "showMass":!0, "optimizedMass":!0, "shortMass":!0, "virMassShots":!0, "hideMyMass":!1, "hideEnemiesMass":!1, "vanillaSkins":!1, "customSkins":!0, "myTransparentSkin":!1, 
  "myCustomColor":!1, "transparentCells":!1, "transparentViruses":!0, "transparentSkins":!1, "showGrid":!1, "showBgSectors":!1, "showMapBorders":!0, "showMiniMap":!0, "showMiniMapGrid":!1, "showMiniMapGuides":!0, "oneColoredTeammates":!1, "optimizedFood":!0, "rainbowFood":!1, "oppColors":!1, "oppRings":!1, "virColors":!1, "splitRange":!1, "virusesRange":!1, "textStroke":!1, "namesStroke":!1, "massStroke":!1, "cursorTracking":!1, "teammatesInd":!1, "mouseSplit":!1, "mouseFeed":!1, "mouseInvert":!1, 
  "disableChat":!1, "hideChat":!1, "chatSounds":!0, "chatEmoticons":!0, "showChatBox":!1, "showChatImages":!0, "showChatVideos":!0, "showTop5":!0, "showTargeting":!0, "showTime":!0, "normalLb":!1, "centeredLb":!0, "fpsAtTop":!0, "showStats":!0, "showStatsMass":!0, "showStatsSTE":!1, "showStatsN16":!1, "showStatsFPS":!0, "blockPopups":!1, "streamMode":!1, "hideSkinUrl":!1, "showQuickMenu":!0, "showSkinsPanel":!0, "animation":140, "zoomSpeedValue":.9, "messageSound":"http://cdn.ogario.ovh/static/sounds/notification_01.mp3", 
  "commandSound":_0xb282("0x43b")}, _0x381fe5 = {"name":"OGARio by szymy v3", "version":_0xb282("0x43c"), "privateMode":!1, "publicIP":_0xb282("0x43d"), "privateIP":null, "updateInterval":1E3, "updateTick":0, "updateMaxTick":2, "currentSector":"", "miniMap":null, "miniMapCtx":null, "miniMapSectors":null, "pi2":2 * Math["PI"], "socket":null, "cells":{}, "teamPlayers":[], "parties":[], "chatHistory":[], "chatUsers":{}, "chatMutedUsers":{}, "chatMutedUserIDs":[], "customSkinsCache":{}, "customSkinsMap":{}, 
  "cacheQueue":[], "deathLocations":[], "playerID":null, "playerMass":0, "selectedProfile":0, "lastDeath":0, "skipServerData":!1, "gameMode":"", "region":"", "partyToken":"", "ws":"", "serverIP":"", "serverToken":"", "lastSentNick":"", "lastSentClanTag":null, "lastSentSkinURL":"", "lastSentCustomColor":"", "lastSentPartyToken":"", "lastSentServerToken":"", "lastMessageSentTime":Date[_0xb282("0x43e")](), "rFps":0, "renderedFrames":0, "fpsLastRequest":null, "statsHUD":null, "leaderboardPositionsHUD":null, 
  "activeParties":null, "top5pos":null, "top5totalMass":null, "top5totalPlayers":null, "top5limit":5, "timeHUD":null, "questHUD":null, "retryResp":0, "token":_0xb282("0x43f"), "canvasScale":1, "selectBiggestCell":!0, "noColors":!1, "skipStats":!1, "showQuest":!1, "showSplitInd":!1, "pause":!1, "targetID":0, "targetStatus":0, "targetNick":"", "targetSkinURL":"", "targeting":!1, "privateMiniMap":!1, "indicator":null, "pellet":null, "messageSound":null, "commandSound":null, "feedInterval":null, "getPlayerX":function() {
    return _0xe98c87[_0xb282("0x440")] + _0xe98c87[_0xb282("0x441")];
  }, "getPlayerY":function() {
    return _0xe98c87[_0xb282("0x442")] + _0xe98c87[_0xb282("0x443")];
  }, "feed":function() {
    _0x10cbb0[_0xb282("0x75")] && _0x10cbb0["core"][_0xb282("0x444")] && _0x10cbb0[_0xb282("0x75")]["eject"]();
  }, "macroFeed":function(_0x10fbcc) {
    if (_0x10fbcc) {
      if (this[_0xb282("0x445")]) {
        return;
      }
      var _0xe98c87 = this;
      this[_0xb282("0x446")](), this[_0xb282("0x445")] = setInterval(function() {
        _0xe98c87[_0xb282("0x446")]();
      }, 80);
    } else {
      this[_0xb282("0x445")] && (clearInterval(this["feedInterval"]), this["feedInterval"] = null);
    }
  }, "split":function() {
    _0x10cbb0["core"] && _0x10cbb0["core"][_0xb282("0x447")] && _0x10cbb0[_0xb282("0x75")]["split"]();
  }, "doubleSplit":function() {
    var _0x10cbb0 = this;
    _0x10cbb0[_0xb282("0x447")](), setTimeout(function() {
      _0x10cbb0[_0xb282("0x447")]();
    }, 40);
  }, "popSplit":function() {
    var _0x10cbb0 = this;
    _0x10cbb0[_0xb282("0x447")](), setTimeout(function() {
      _0x10cbb0["split"]();
    }, 200);
  }, "split16":function() {
    var _0x10cbb0 = this;
    _0x10cbb0[_0xb282("0x447")](), setTimeout(function() {
      _0x10cbb0[_0xb282("0x447")]();
    }, 40), setTimeout(function() {
      _0x10cbb0[_0xb282("0x447")]();
    }, 80), setTimeout(function() {
      _0x10cbb0[_0xb282("0x447")]();
    }, 120);
  }, "toggleSkins":function() {
    _0xe98c87[_0xb282("0x448")] && _0xe98c87[_0xb282("0x449")] ? _0xe98c87[_0xb282("0x448")] = !1 : !_0xe98c87[_0xb282("0x44a")] && _0xe98c87[_0xb282("0x449")] ? (_0xe98c87["vanillaSkins"] = !0, _0xe98c87[_0xb282("0x449")] = !1) : (_0xe98c87[_0xb282("0x448")] = !0, _0xe98c87[_0xb282("0x449")] = !0);
  }, "toggleCells":function() {
    this[_0xb282("0x44b")] = !this[_0xb282("0x44b")], _0xe98c87[_0xb282("0x44b")] = this[_0xb282("0x44b")];
  }, "setShowTop5":function() {
    _0x34bd23[_0xb282("0x44c")] = !_0x34bd23[_0xb282("0x44c")], this[_0xb282("0x44d")]();
  }, "setTop5":function() {
    _0x34bd23["showTop5"] ? _0x5c1379(_0xb282("0x44e"))["show"]() : _0x5c1379(_0xb282("0x44e"))["hide"]();
  }, "setShowTargeting":function() {
    _0x34bd23[_0xb282("0x44f")] = !_0x34bd23[_0xb282("0x44f")], this[_0xb282("0x450")]();
  }, "setTargetingHUD":function() {
    _0x34bd23[_0xb282("0x44f")] ? _0x5c1379(_0xb282("0x451"))[_0xb282("0x9a")]() : _0x5c1379(_0xb282("0x451"))[_0xb282("0x452")]();
  }, "setShowTime":function() {
    _0x34bd23[_0xb282("0x453")] = !_0x34bd23["showTime"], _0x34bd23[_0xb282("0x453")] ? (_0x5c1379(_0xb282("0x41b"))["show"](), this[_0xb282("0x454")]()) : _0x5c1379(_0xb282("0x41b"))[_0xb282("0x452")]();
  }, "setShowSplitRange":function() {
    _0x34bd23[_0xb282("0x455")] = !_0x34bd23["splitRange"], _0xe98c87[_0xb282("0x455")] = _0x34bd23[_0xb282("0x455")];
  }, "setShowSplitInd":function() {
    this["showSplitInd"] = !this["showSplitInd"], _0x34bd23[_0xb282("0x455")] = this[_0xb282("0x456")], _0x34bd23["oppRings"] = this[_0xb282("0x456")], _0xe98c87["splitRange"] = _0x34bd23[_0xb282("0x455")], _0xe98c87[_0xb282("0x457")] = _0x34bd23[_0xb282("0x457")];
  }, "setShowTeammatesInd":function() {
    _0x34bd23[_0xb282("0x458")] = !_0x34bd23[_0xb282("0x458")];
  }, "setShowOppColors":function() {
    _0x34bd23[_0xb282("0x459")] = !_0x34bd23[_0xb282("0x459")], _0xe98c87["oppColors"] = _0x34bd23["oppColors"];
  }, "setShowSkins":function() {
    this[_0xb282("0x45a")] = !this[_0xb282("0x45a")], _0x10cbb0[_0xb282("0x75")] && _0x10cbb0["core"][_0xb282("0x45b")] && _0x10cbb0[_0xb282("0x75")][_0xb282("0x45b")](!this[_0xb282("0x45a")]), _0xe98c87[_0xb282("0x45c")] = !this["noSkins"], this[_0xb282("0x45d")](!this[_0xb282("0x45a")], _0xb282("0x45e"));
  }, "setTransparentSkins":function() {
    _0x34bd23[_0xb282("0x45f")] = !_0x34bd23[_0xb282("0x45f")], _0xe98c87[_0xb282("0x45f")] = _0x34bd23[_0xb282("0x45f")];
  }, "setShowStats":function() {
    _0x5c1379(_0xb282("0x460"))[_0xb282("0x461")]();
  }, "setShowFood":function() {
    _0xe98c87[_0xb282("0x462")] = !_0xe98c87[_0xb282("0x462")];
  }, "setShowHUD":function() {
    _0x5c1379("#overlays-hud")[_0xb282("0x461")]();
  }, "setShowGrid":function() {
    _0x34bd23[_0xb282("0x463")] = !_0x34bd23[_0xb282("0x463")];
  }, "setShowMiniMapGuides":function() {
    _0x34bd23["showMiniMapGuides"] = !_0x34bd23[_0xb282("0x464")];
  }, "setShowLb":function() {
    _0xb282("0x465") !== this[_0xb282("0x466")] && _0x5c1379(_0xb282("0x467"))[_0xb282("0x461")]();
  }, "setShowBgSectors":function() {
    _0x34bd23["showBgSectors"] = !_0x34bd23[_0xb282("0x468")];
  }, "setHideSmallBots":function() {
    _0xe98c87[_0xb282("0x469")] = !_0xe98c87[_0xb282("0x469")], this[_0xb282("0x45d")](!_0xe98c87[_0xb282("0x469")], _0xb282("0x46a"));
  }, "setShowNames":function() {
    _0x34bd23[_0xb282("0x46b")] = !_0x34bd23[_0xb282("0x46b")];
  }, "setHideTeammatesNames":function() {
    _0x34bd23["hideTeammatesNames"] = !_0x34bd23[_0xb282("0x46c")];
  }, "setShowMass":function() {
    _0x34bd23[_0xb282("0x46d")] = !_0x34bd23[_0xb282("0x46d")];
  }, "setShowMiniMap":function() {
    _0x34bd23[_0xb282("0x46e")] = !_0x34bd23[_0xb282("0x46e")], this[_0xb282("0x46f")]();
  }, "setMiniMap":function() {
    _0x34bd23[_0xb282("0x46e")] ? _0x5c1379(_0xb282("0x433"))["show"]() : _0x5c1379(_0xb282("0x433"))[_0xb282("0x452")]();
  }, "setShowQuest":function() {
    "" === this[_0xb282("0x466")] && (this[_0xb282("0x470")] = !this[_0xb282("0x470")], this[_0xb282("0x471")]());
  }, "setQuest":function() {
    this[_0xb282("0x470")] && "" === this[_0xb282("0x466")] ? _0x5c1379(_0xb282("0x472"))[_0xb282("0x9a")]() : _0x5c1379("#quest-hud")[_0xb282("0x452")]();
  }, "toggleAutoZoom":function() {
    _0xe98c87[_0xb282("0x473")] = !_0xe98c87["autoZoom"], this[_0xb282("0x45d")](_0xe98c87[_0xb282("0x473")], _0xb282("0x474"));
  }, "resetZoom":function(_0x2b52d3) {
    _0x2b52d3 ? (_0xe98c87[_0xb282("0x475")] = 1, _0xe98c87[_0xb282("0x476")] = 1) : _0xe98c87[_0xb282("0x475")] = 0;
  }, "setZoom":function(_0x23e58c) {
    _0xe98c87["zoomValue"] = _0x23e58c;
  }, "toggleDeath":function() {
    this[_0xb282("0x477")]--, this[_0xb282("0x477")] < 0 && (this[_0xb282("0x477")] = this[_0xb282("0x478")][_0xb282("0xc")] - 1);
  }, "tryResp":function() {
    if (_0xe98c87[_0xb282("0x94")] || 20 == this[_0xb282("0x479")]) {
      return void(this[_0xb282("0x479")] = 0);
    }
    this[_0xb282("0x479")]++;
    var _0x10cbb0 = this;
    setTimeout(function() {
      _0x5c1379(".btn-play-guest")["is"](_0xb282("0x47a")) ? _0x5c1379(_0xb282("0x47b"))[_0xb282("0x3c6")]() : _0x5c1379(".btn-play")[_0xb282("0x3c6")](), _0xe98c87[_0xb282("0x94")] || _0x10cbb0["tryResp"]();
    }, 500);
  }, "quickResp":function() {
    _0x34bd23[_0xb282("0x47c")] && (_0x5c1379(_0xb282("0x99"))[_0xb282("0x452")](), this[_0xb282("0x47d")](this["ws"]), _0xe98c87[_0xb282("0x94")] = !1, this["tryResp"]());
  }, "autoResp":function() {
    return _0x34bd23[_0xb282("0x47e")] ? (this[_0xb282("0x47f")](), _0x5c1379(_0xb282("0x480"))[_0xb282("0x481")]()["hide"](), _0x5c1379(_0xb282("0x47b"))["is"](":visible") ? void _0x5c1379(_0xb282("0x47b"))[_0xb282("0x3c6")]() : void _0x5c1379(_0xb282("0x482"))[_0xb282("0x3c6")]()) : void 0;
  }, "setAutoResp":function() {
    _0x34bd23[_0xb282("0x47e")] && (_0x5c1379("#skipStats")[_0xb282("0x483")](_0xb282("0x484")) || (_0x5c1379(_0xb282("0x485"))[_0xb282("0x3c6")](), this[_0xb282("0x486")] = !0));
  }, "toggleAutoResp":function() {
    _0x34bd23[_0xb282("0x47e")] = !_0x34bd23["autoResp"], this[_0xb282("0x47f")](), this[_0xb282("0x45d")](_0x34bd23[_0xb282("0x47e")], "autoRespMsg");
  }, "copyLb":function() {
    var _0x10cbb0 = _0x5c1379(_0xb282("0x487"));
    _0x5c1379("body")[_0xb282("0x323")](_0x10cbb0), _0x10cbb0[_0xb282("0x329")](_0x5c1379(_0xb282("0x488"))["text"]())[_0xb282("0x489")]();
    try {
      document[_0xb282("0x48a")](_0xb282("0x48b"));
    } catch (_0x5010b9) {
    }
    _0x10cbb0["remove"]();
  }, "setPause":function() {
    this[_0xb282("0x48c")] = !this[_0xb282("0x48c")], _0xe98c87[_0xb282("0x48c")] = this[_0xb282("0x48c")], this["pause"] ? _0x5c1379(_0xb282("0x41c"))[_0xb282("0x9a")]() : _0x5c1379(_0xb282("0x41c"))[_0xb282("0x452")]();
  }, "setCenteredLb":function() {
    _0x34bd23["centeredLb"] ? _0x5c1379("#leaderboard-hud")[_0xb282("0x3cc")]("hud-text-center") : _0x5c1379("#leaderboard-hud")[_0xb282("0x48d")](_0xb282("0x48e"));
  }, "setNormalLb":function() {
    _0x5c1379("#leaderboard-hud h4")[_0xb282("0x322")](_0x34bd23[_0xb282("0x48f")] ? _0x33cd4b["leaderboard"] : _0xb282("0x490"));
  }, "setFpsAtTop":function() {
    _0x34bd23[_0xb282("0x491")] ? _0x5c1379(_0xb282("0x460"))["removeClass"](_0xb282("0x492"))[_0xb282("0x3cc")](_0xb282("0x493")) : _0x5c1379(_0xb282("0x460"))[_0xb282("0x48d")](_0xb282("0x493"))[_0xb282("0x3cc")](_0xb282("0x492"));
  }, "setBlockPopups":function() {
    _0x34bd23[_0xb282("0x494")] ? this[_0xb282("0x494")]() : this[_0xb282("0x495")]();
  }, "blockPopups":function() {
    _0x5c1379(_0xb282("0x496"))[_0xb282("0x452")](), _0x5c1379(_0xb282("0x496"))[_0xb282("0x3cc")]("block-popups"), _0x5c1379(_0xb282("0x497"))["prop"]("disabled", !0), _0x5c1379(_0xb282("0x498"))["show"]();
  }, "unblockPopups":function() {
    _0x5c1379("#openfl-overlay.disabler")["click"](), _0x5c1379(_0xb282("0x496"))[_0xb282("0x452")](), _0x5c1379("#openfl-content, #openfl-overlay")[_0xb282("0x48d")](_0xb282("0x499")), _0x5c1379(_0xb282("0x497"))[_0xb282("0x483")](_0xb282("0x49a"), !1), _0x5c1379(_0xb282("0x498"))["hide"]();
  }, "tempUnblockPopups":function() {
    _0x34bd23["blockPopups"] && this[_0xb282("0x495")]();
  }, "displayLeaderboard":function(_0x4006c5) {
    this[_0xb282("0x49b")] && (this[_0xb282("0x49b")][_0xb282("0x49c")] = _0x4006c5);
  }, "displayStats":function() {
    if (!_0x34bd23[_0xb282("0x49d")]) {
      return void _0x5c1379(_0xb282("0x460"))[_0xb282("0x452")]();
    }
    var _0x10cbb0 = "";
    _0xe98c87[_0xb282("0x94")] && (_0x34bd23[_0xb282("0x49e")] && _0xe98c87["playerMass"] && (_0x10cbb0 += _0x33cd4b[_0xb282("0x3")] + ": " + _0xe98c87[_0xb282("0x49f")] + _0xb282("0x4a0")), _0xe98c87[_0xb282("0x4a1")] && (_0x10cbb0 += _0x33cd4b[_0xb282("0x4a2")] + ": " + _0xe98c87[_0xb282("0x4a1")]), _0x34bd23["showStatsSTE"] && _0xe98c87[_0xb282("0x4a3")] && (_0x10cbb0 += _0xb282("0x4a4") + _0xe98c87[_0xb282("0x4a3")]), _0x34bd23[_0xb282("0x4a5")] && _0xe98c87[_0xb282("0x4a6")] && (_0x10cbb0 += 
    _0xb282("0x4a0") + _0xe98c87[_0xb282("0x4a6")][_0xb282("0xc")] + _0xb282("0x4a7")), _0x34bd23[_0xb282("0x4a8")] && (_0x10cbb0 += _0xb282("0x4a0"))), _0x34bd23["showStatsFPS"] && (_0x10cbb0 += _0xb282("0x4a9") + this[_0xb282("0x4aa")]), this[_0xb282("0x4ab")]["textContent"] = _0x10cbb0;
    var _0x288d52 = this;
    setTimeout(function() {
      _0x288d52[_0xb282("0x4ac")]();
    }, 250);
  }, "displayTime":function() {
    if (!_0x34bd23[_0xb282("0x453")]) {
      return void _0x5c1379(_0xb282("0x41b"))[_0xb282("0x452")]();
    }
    var _0x10cbb0 = (new Date)[_0xb282("0x4ad")]();
    this[_0xb282("0x4ae")][_0xb282("0x4af")] = _0x10cbb0;
    var _0xe98c87 = this;
    setTimeout(function() {
      _0xe98c87[_0xb282("0x454")]();
    }, 1E3);
  }, "displayParties":function() {
    for (var _0x10cbb0 = "", _0xe98c87 = 0; _0xe98c87 < this[_0xb282("0x4b0")][_0xb282("0xc")]; _0xe98c87++) {
      _0x10cbb0 += _0xb282("0x4b1") + this[_0xb282("0x4b0")][_0xe98c87] + _0xb282("0x4b2") + this[_0xb282("0x4b0")][_0xe98c87] + _0xb282("0x4b3") + this["parties"][_0xe98c87] + _0xb282("0x4b4");
    }
    this[_0xb282("0x4b5")]["className"] = "" === _0x10cbb0 ? "no-parties" : "", this[_0xb282("0x4b5")][_0xb282("0x49c")] = _0x10cbb0;
  }, "displayTop5":function() {
    if (_0x34bd23[_0xb282("0x44c")]) {
      for (var _0x10cbb0 = "", _0x5c1379 = 0, _0x4dd18a = this[_0xb282("0x4b6")][_0xb282("0xc")], _0x4e6c9f = 0; _0x4dd18a > _0x4e6c9f; _0x4e6c9f++) {
        _0x5c1379 += this[_0xb282("0x4b6")][_0x4e6c9f][_0xb282("0x3")], _0x4e6c9f < this[_0xb282("0x4b7")] && (_0x10cbb0 += _0xb282("0x4b8"), _0x34bd23[_0xb282("0x44f")] && (_0x10cbb0 += _0xb282("0x4b9") + this[_0xb282("0x4b6")][_0x4e6c9f]["id"] + '" class="set-target icon-target"></a> '), _0x10cbb0 += _0xb282("0x4ba") + this[_0xb282("0x4b6")][_0x4e6c9f][_0xb282("0x3")] + _0xb282("0x4bb") + this[_0xb282("0x4bc")](this["top5"][_0x4e6c9f][_0xb282("0x0")]) + _0xb282("0x4bd"));
      }
      this["top5pos"][_0xb282("0x49c")] = _0x10cbb0, _0xe98c87["play"] && _0xe98c87[_0xb282("0x49f")] && (_0x5c1379 += _0xe98c87[_0xb282("0x49f")], _0x4dd18a++);
      var _0x2f34a4 = 1E3 > _0x5c1379 ? _0x5c1379 : Math[_0xb282("0x61")](_0x5c1379 / 100) / 10 + "k";
      this[_0xb282("0x4be")][_0xb282("0x4af")] = _0x2f34a4, this[_0xb282("0x4bf")][_0xb282("0x4af")] = _0x4dd18a;
    }
  }, "setTop5limit":function(_0x810a6) {
    _0x810a6 && (this[_0xb282("0x4b7")] = _0x810a6);
  }, "displayChatHistory":function(_0x3e2e26) {
    if (_0x3e2e26) {
      this["clearChatHistory"](!0);
      for (var _0xe98c87 = 0; _0xe98c87 < this[_0xb282("0x4c0")][_0xb282("0xc")]; _0xe98c87++) {
        _0x5c1379("#messages")["append"]('<li><span class="message-nick">' + this["chatHistory"][_0xe98c87][_0xb282("0x0")] + _0xb282("0x4c1") + this[_0xb282("0x4c0")][_0xe98c87][_0xb282("0x4c2")] + _0xb282("0x4c3"));
      }
    } else {
      this[_0xb282("0x4c4")](!1);
    }
  }, "clearChatHistory":function(_0x2c0c24) {
    _0x5c1379(_0xb282("0x4c5"))["empty"](), _0x2c0c24 && (toastr[_0xb282("0x4c6")](), _0x34bd23["showChatBox"] && (_0x5c1379(_0xb282("0x4c7"))[_0xb282("0x4c8")](), this[_0xb282("0x4c0")][_0xb282("0xc")] = 0));
  }, "displayChatInfo":function(_0x36dca7, _0x1750d0) {
    _0x36dca7 ? toastr[_0xb282("0x4c9")](_0x33cd4b[_0x1750d0 + "A"]) : toastr[_0xb282("0x4ca")](_0x33cd4b[_0x1750d0 + "B"]);
  }, "setDisableChat":function() {
    _0x34bd23[_0xb282("0x4cb")] = _0x34bd23[_0xb282("0x4cc")], this[_0xb282("0x4cd")]();
  }, "hideChat":function() {
    _0x34bd23[_0xb282("0x4cb")] = !_0x34bd23[_0xb282("0x4cb")], this[_0xb282("0x4cd")](), this["displayChatInfo"](!_0x34bd23[_0xb282("0x4cb")], _0xb282("0x4ce"));
  }, "setHideChat":function() {
    _0x34bd23[_0xb282("0x4cb")] && _0x5c1379("#message-box")[_0xb282("0x452")](), this[_0xb282("0x4cf")]();
  }, "setShowChatBox":function() {
    !_0x34bd23[_0xb282("0x4cb")] && _0x34bd23[_0xb282("0x4d0")] ? _0x5c1379("#chat-box")[_0xb282("0x9a")]() : _0x5c1379(_0xb282("0x4d1"))["hide"]();
  }, "enterChatMessage":function() {
    var _0x10cbb0 = _0x5c1379(_0xb282("0x42c")), _0xb7079b = _0x5c1379("#message");
    if (_0x10cbb0["is"](_0xb282("0x47a"))) {
      var _0x22d47d = _0xb7079b[_0xb282("0x329")]();
      _0x22d47d["length"] ? (this[_0xb282("0x4d2")](101, _0x22d47d), _0xe98c87["play"] && (_0xb7079b[_0xb282("0x4d3")](), _0x10cbb0[_0xb282("0x452")]())) : (_0xb7079b[_0xb282("0x4d3")](), _0x10cbb0[_0xb282("0x452")]()), _0xb7079b[_0xb282("0x329")]("");
    } else {
      _0x10cbb0[_0xb282("0x9a")](), _0xb7079b[_0xb282("0x4d4")](), _0xb7079b["val"]("");
    }
  }, "showMenu":function() {
    _0x10cbb0["MC"] && _0x10cbb0["MC"][_0xb282("0x4d5")](300), _0x5c1379(_0xb282("0x4d6"))["is"](_0xb282("0x47a")) && _0x10cbb0[_0xb282("0x4d7")](), _0x5c1379("#videoContainer")["is"](_0xb282("0x47a")) && _0x10cbb0[_0xb282("0x4d8")]();
  }, "escapeHTML":function(_0x4dd058) {
    return (_0x4dd058 + "")[_0xb282("0x78")](/[&<>"'\/]/g, function(_0x1de5c0) {
      return _0x58f9c2[_0x1de5c0];
    });
  }, "checkSkinURL":function(_0x17b00c) {
    return /^https?:\/\/i\.(?:imgur|hizliresim)\.com\/\w{6,8}\.(?:jpg|jpeg|png)\??\d*$/i[_0xb282("0x4d9")](_0x17b00c) ? _0x17b00c : "";
  }, "loadSettings":function() {
    var _0x5c1379 = null;
    null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x4da")) && (_0x5c1379 = JSON[_0xb282("0x4db")](_0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x4da"))));
    for (var _0x1ae6ab in _0x34bd23) {
      _0x34bd23[_0xb282("0x31b")](_0x1ae6ab) && (_0x5c1379 && _0x5c1379[_0xb282("0x31b")](_0x1ae6ab) && (_0x34bd23[_0x1ae6ab] = _0x5c1379[_0x1ae6ab]), _0xe98c87["hasOwnProperty"](_0x1ae6ab) && (_0xe98c87[_0x1ae6ab] = _0x34bd23[_0x1ae6ab]));
    }
  }, "saveSettings":function(_0x4cd422, _0x1f08e4) {
    _0x10cbb0[_0xb282("0x319")]["setItem"](_0x1f08e4, JSON[_0xb282("0x31c")](_0x4cd422));
  }, "exportSettings":function() {
    var _0x10cbb0 = {"ogarioCommands":_0x46d51d, "ogarioHotkeys":_0x3d8ce7, "ogarioPlayerProfiles":_0x5556ef, "ogarioSettings":_0x34bd23, "ogarioThemeSettings":_0x18e354};
    for (var _0xe98c87 in _0x10cbb0) {
      if (_0x10cbb0[_0xb282("0x31b")](_0xe98c87)) {
        var _0x5ab5fb = _0x5c1379("#export-" + _0xe98c87)["prop"](_0xb282("0x484"));
        _0x5ab5fb || delete _0x10cbb0[_0xe98c87];
      }
    }
    _0x10cbb0 = JSON[_0xb282("0x31c")](_0x10cbb0), _0x5c1379(_0xb282("0x4dc"))[_0xb282("0x329")](_0x10cbb0), _0x5c1379(_0xb282("0x4dd"))["val"](""), _0x10cbb0 = null;
  }, "importSettings":function() {
    _0x5c1379(_0xb282("0x4dd"))[_0xb282("0x4d3")]();
    var _0xe98c87 = _0x5c1379(_0xb282("0x4dd"))[_0xb282("0x329")]();
    if (_0xe98c87) {
      _0xe98c87 = JSON[_0xb282("0x4db")](_0xe98c87);
      for (var _0x941a1a in _0xe98c87) {
        if (_0xe98c87[_0xb282("0x31b")](_0x941a1a)) {
          var _0x4459f7 = _0x5c1379(_0xb282("0x4de") + _0x941a1a)[_0xb282("0x483")]("checked");
          if (!_0x4459f7) {
            continue;
          }
          _0x10cbb0["localStorage"][_0xb282("0x4df")](_0x941a1a, JSON[_0xb282("0x31c")](_0xe98c87[_0x941a1a]));
        }
      }
      _0x10cbb0[_0xb282("0x71")][_0xb282("0x31f")]();
    }
  }, "restoreSettings":function() {
    null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x4da")) && (_0x10cbb0[_0xb282("0x319")][_0xb282("0x31e")]("ogarioSettings"), _0x10cbb0[_0xb282("0x71")][_0xb282("0x31f")]());
  }, "setSettings":function(_0x2b6dc3, _0x2ccf9e) {
    if (_0x34bd23[_0xb282("0x31b")](_0x2b6dc3) && null !== _0x2ccf9e) {
      switch(_0x34bd23[_0x2b6dc3] = _0x2ccf9e, _0xe98c87[_0xb282("0x31b")](_0x2b6dc3) && (_0xe98c87[_0x2b6dc3] = _0x2ccf9e), _0x2b6dc3) {
        case _0xb282("0x47e"):
          this["setAutoResp"]();
          break;
        case _0xb282("0x46e"):
          this[_0xb282("0x46f")]();
          break;
        case _0xb282("0x4e0"):
          this["resetMiniMapSectors"]();
          break;
        case _0xb282("0x4cc"):
          this["setDisableChat"]();
          break;
        case _0xb282("0x4e1"):
          this[_0xb282("0x4e2")]();
          break;
        case _0xb282("0x4d0"):
          this[_0xb282("0x4cf")]();
          break;
        case _0xb282("0x44c"):
          this["setTop5"]();
          break;
        case _0xb282("0x44f"):
          this[_0xb282("0x450")]();
          break;
        case _0xb282("0x453"):
          this[_0xb282("0x454")](), _0x5c1379(_0xb282("0x41b"))[_0xb282("0x9a")]();
          break;
        case _0xb282("0x4e3"):
          this[_0xb282("0x4e4")]();
          break;
        case _0xb282("0x48f"):
          this[_0xb282("0x4e5")]();
          break;
        case _0xb282("0x491"):
          this["setFpsAtTop"]();
          break;
        case _0xb282("0x49d"):
          this[_0xb282("0x4ac")](), _0x5c1379("#stats-hud")[_0xb282("0x9a")]();
          break;
        case "blockPopups":
          this[_0xb282("0x4e6")]();
      }
      this[_0xb282("0x4e7")](_0x34bd23, _0xb282("0x4da"));
    }
  }, "loadProfiles":function() {
    if (null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")]("ogarioPlayerProfiles")) {
      _0x5556ef = JSON["parse"](_0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")]("ogarioPlayerProfiles"));
    } else {
      for (var _0xe98c87 = 0; 10 > _0xe98c87; _0xe98c87++) {
        _0x5556ef[_0xb282("0x4e8")]({"nick":_0xb282("0x4e9") + (_0xe98c87 + 1), "clanTag":"", "skinURL":"", "color":_0x18e354[_0xb282("0x43a")]});
      }
    }
    null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x4ea")) && (this[_0xb282("0x4eb")] = JSON[_0xb282("0x4db")](_0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x4ea")))), _0x3a156f[_0xb282("0x0")] = _0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x0")], _0x3a156f[_0xb282("0x4")] = _0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x4")], _0x3a156f["skinURL"] = _0x5556ef[this["selectedProfile"]][_0xb282("0x4ec")], _0x3a156f[_0xb282("0x9")] = _0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x9")];
  }, "changeSkinPreview":function(_0x173bea, _0x5642ff) {
    _0x173bea && _0x5642ff && (_0xb282("0x4ed") === _0x5642ff ? (_0x5c1379(_0xb282("0x4ee"))[_0xb282("0x48d")](_0xb282("0x4ef"))[_0xb282("0x323")]('<a href="#" id="skin-popover" data-toggle="popover" title="" data-html="true" data-content="<img src=\'' + _0x173bea["src"] + _0xb282("0x4f0")), _0x5c1379(_0xb282("0x4f1"))[_0xb282("0x323")](_0x5c1379(_0x173bea)["fadeIn"](1E3)), _0x5c1379("#skin-popover")[_0xb282("0x4f2")]()) : _0x5c1379("#" + _0x5642ff)[_0xb282("0x48d")](_0xb282("0x4ef"))[_0xb282("0x323")](_0x5c1379(_0x173bea)[_0xb282("0x4f3")](1E3)));
  }, "setSkinPreview":function(_0x503a65, _0x380505) {
    if (_0x5c1379("#" + _0x380505)[_0xb282("0x4f4")]()["addClass"](_0xb282("0x4ef")), _0x503a65 && 0 != _0x503a65[_0xb282("0xc")]) {
      var _0x34710f = this, _0x54a301 = new Image;
      _0x54a301[_0xb282("0x4f5")] = _0xb282("0x4f6"), _0x54a301[_0xb282("0x4f7")] = function() {
        _0x34710f[_0xb282("0x4f8")](_0x54a301, _0x380505);
      }, _0x54a301["src"] = _0x503a65;
    }
  }, "setProfile":function() {
    var _0x10cbb0 = (_0x5556ef[_0xb282("0xc")] + this[_0xb282("0x4eb")] - 1) % _0x5556ef["length"], _0xe98c87 = (this[_0xb282("0x4eb")] + 1) % _0x5556ef["length"];
    this[_0xb282("0x4f9")](_0x5556ef[_0x10cbb0][_0xb282("0x4ec")], _0xb282("0x4fa")), this[_0xb282("0x4f9")](_0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x4ec")], "skin-preview"), this[_0xb282("0x4f9")](_0x5556ef[_0xe98c87][_0xb282("0x4ec")], _0xb282("0x4fb")), this["saveSettings"](this["selectedProfile"], "ogarioSelectedProfile"), _0x5c1379("#nick")[_0xb282("0x329")](_0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x0")]), _0x5c1379(_0xb282("0x4fc"))[_0xb282("0x329")](_0x5556ef[this["selectedProfile"]][_0xb282("0x4")]), 
    _0x5c1379(_0xb282("0x4fd"))[_0xb282("0x329")](_0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x4ec")]), _0x5c1379(_0xb282("0x3d7"))[_0xb282("0x329")](_0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x9")]), _0x5c1379(_0xb282("0x4fe"))["colorpicker"]("setValue", _0x5556ef[this["selectedProfile"]][_0xb282("0x9")]), _0x5c1379(_0xb282("0x4ff"))[_0xb282("0x48d")](_0xb282("0x500")), _0x5c1379(_0xb282("0x501") + this[_0xb282("0x4eb")] + "']")[_0xb282("0x3cc")](_0xb282("0x500"));
  }, "prevProfile":function() {
    this[_0xb282("0x502")](), this[_0xb282("0x4eb")] = (_0x5556ef["length"] + this[_0xb282("0x4eb")] - 1) % _0x5556ef[_0xb282("0xc")], this[_0xb282("0x503")]();
  }, "nextProfile":function() {
    this[_0xb282("0x502")](), this[_0xb282("0x4eb")] = (this[_0xb282("0x4eb")] + 1) % _0x5556ef["length"], this["setProfile"]();
  }, "selectProfile":function(_0x2da7b2) {
    this[_0xb282("0x502")](), this[_0xb282("0x4eb")] = parseInt(_0x2da7b2), this[_0xb282("0x503")]();
  }, "addOption":function(_0x58f492, _0x4b91e8, _0x38cbf5, _0xe1fe40) {
    _0x5c1379(_0x58f492)[_0xb282("0x323")](_0xb282("0x504") + _0x4b91e8 + _0xb282("0x505") + _0x38cbf5 + "</label>"), _0x5c1379("#" + _0x4b91e8)[_0xb282("0x483")]("checked", _0xe1fe40);
  }, "addOptions":function(_0x548aaf, _0x218eea) {
    if (_0x548aaf) {
      _0x5c1379(_0xb282("0x506"))[_0xb282("0x323")]('<div class="options-box ' + _0x218eea + _0xb282("0x507") + _0x33cd4b[_0x218eea] + _0xb282("0x508"));
      for (var _0x23ef1f = 0; _0x23ef1f < _0x548aaf["length"]; _0x23ef1f++) {
        var _0x3b7bc7 = _0x548aaf[_0x23ef1f];
        _0x34bd23[_0xb282("0x31b")](_0x3b7bc7) && (_0x5c1379("." + _0x218eea)[_0xb282("0x323")](_0xb282("0x509") + _0x33cd4b[_0x3b7bc7] + _0xb282("0x50a") + _0x3b7bc7 + '"></label>'), _0x5c1379("#" + _0x3b7bc7)["prop"](_0xb282("0x484"), _0x34bd23[_0x3b7bc7]));
      }
    }
  }, "addInputBox":function(_0x5d3de9, _0x56cef5, _0x119f92, _0xdc766c) {
    _0x5c1379(_0x5d3de9)[_0xb282("0x323")](_0xb282("0x340") + _0x33cd4b[_0x56cef5] + _0xb282("0x341") + _0x56cef5 + _0xb282("0x342") + _0x119f92 + _0xb282("0x33c") + _0x34bd23[_0x56cef5] + _0xb282("0x343"));
    var _0x43f8c8 = this;
    _0x5c1379("#" + _0x56cef5)["on"](_0xb282("0x33e"), function() {
      _0x34bd23[_0x56cef5] = this[_0xb282("0x32b")], _0x43f8c8[_0xdc766c](), _0x43f8c8[_0xb282("0x4e7")](_0x34bd23, _0xb282("0x4da"));
    });
  }, "addSliderBox":function(_0x2cface, _0x19c684, _0x259856, _0x400bed, _0x14cc95, _0x195d8f) {
    _0x5c1379(_0x2cface)["append"]('<div class="slider-box"><div class="box-label"><span class="value-label">' + _0x33cd4b[_0x19c684] + _0xb282("0x50b") + _0x19c684 + _0xb282("0x338") + _0x34bd23[_0x19c684] + _0xb282("0x50c") + _0x19c684 + _0xb282("0x339") + _0x259856 + _0xb282("0x33a") + _0x400bed + _0xb282("0x33b") + _0x14cc95 + '" value="' + _0x34bd23[_0x19c684] + _0xb282("0x50d"));
    var _0x3b8b74 = this;
    _0x195d8f ? _0x5c1379("#" + _0x19c684 + _0xb282("0x33d"))["on"](_0xb282("0x33e"), function() {
      var _0x2cface = parseFloat(_0x5c1379(this)[_0xb282("0x329")]());
      _0x5c1379("#" + _0x19c684 + _0xb282("0x33f"))[_0xb282("0x90")](_0x2cface), _0x34bd23[_0x19c684] = _0x2cface, _0xe98c87[_0xb282("0x31b")](_0x19c684) && (_0xe98c87[_0x19c684] = _0x2cface), _0x3b8b74[_0x195d8f](), _0x3b8b74["saveSettings"](_0x34bd23, _0xb282("0x4da"));
    }) : _0x5c1379("#" + _0x19c684 + _0xb282("0x33d"))["on"](_0xb282("0x33e"), function() {
      var _0x2cface = parseFloat(_0x5c1379(this)["val"]());
      _0x5c1379("#" + _0x19c684 + _0xb282("0x33f"))[_0xb282("0x90")](_0x2cface), _0x34bd23[_0x19c684] = _0x2cface, _0xe98c87[_0xb282("0x31b")](_0x19c684) && (_0xe98c87[_0x19c684] = _0x2cface), _0x3b8b74[_0xb282("0x4e7")](_0x34bd23, _0xb282("0x4da"));
    });
  }, "setLang":function() {
    if ("pl" === _0x40d1a1 && _0x10cbb0[_0xb282("0x50e")] && _0x10cbb0[_0xb282("0x50e")]["en"]) {
      for (var _0xe98c87 in _0x10cbb0[_0xb282("0x50e")]["en"]) {
        _0x10cbb0["i18n_dict"]["en"]["hasOwnProperty"](_0xe98c87) && _0x33cd4b[_0xb282("0x31b")](_0xe98c87) && (_0x10cbb0[_0xb282("0x50e")]["en"][_0xe98c87] = _0x33cd4b[_0xe98c87]);
      }
    }
  }, "setMenu":function() {
    document[_0xb282("0x6f")] = this["name"], _0x5c1379("#mainPanel")["before"](_0xb282("0x50f") + _0x33cd4b[_0xb282("0x510")] + _0xb282("0x511") + _0x33cd4b[_0xb282("0x512")] + '"></a></li><li class="settings-tab"><a href="#og-settings" class="icon-cog" data-toggle="tab-tooltip" data-container="body" title="' + _0x33cd4b[_0xb282("0x513")] + _0xb282("0x514") + _0x33cd4b[_0xb282("0x515")] + _0xb282("0x516") + _0x33cd4b[_0xb282("0x517")] + _0xb282("0x518") + _0x33cd4b["sounds"] + _0xb282("0x519")), 
    _0x5c1379("#main-panel")[_0xb282("0x323")](_0xb282("0x51a")), _0x5c1379(_0xb282("0x51b"))[_0xb282("0x321")](_0x5c1379("#main-panel")), _0x5c1379(_0xb282("0x51c"))[_0xb282("0x4c8")](), _0x5c1379(_0xb282("0x51d"))[_0xb282("0x51e")](_0xb282("0x51f")), _0x5c1379(_0xb282("0x51d"))[_0xb282("0x321")](_0x5c1379(_0xb282("0x520"))), _0x5c1379(_0xb282("0x520"))[_0xb282("0x323")](_0xb282("0x521")), _0x5c1379(".nick")["after"](_0xb282("0x522") + _0x3a156f[_0xb282("0x9")] + _0xb282("0x523")), _0x5c1379(_0xb282("0x524"))["insertAfter"](_0x5c1379(_0xb282("0x4fe"))), 
    _0x5c1379(_0xb282("0x525"))[_0xb282("0x51e")](_0xb282("0x526")), _0x5c1379(".btn-spectate, .btn-logout")[_0xb282("0x321")](_0xb282("0x527")), _0x5c1379("#agario-main-buttons")[_0xb282("0x3cc")](_0xb282("0x528"))[_0xb282("0x51e")](_0xb282("0x529")), _0x5c1379(_0xb282("0x52a"))[_0xb282("0x52b")](_0xb282("0x52c")), _0x5c1379(_0xb282("0x52d"))[_0xb282("0x323")](_0xb282("0x52e")), _0x5c1379(_0xb282("0x52f"))[_0xb282("0x321")](_0x5c1379(_0xb282("0x52d"))), _0x5c1379("#settingsChoice, #options")[_0xb282("0x321")](_0x5c1379(_0xb282("0x530"))), 
    _0x5c1379(_0xb282("0x531"))[_0xb282("0x321")](_0x5c1379("#main-menu"))[_0xb282("0x3cc")]("menu-panel"), _0x5c1379(_0xb282("0x532"))[_0xb282("0x533")]("id", _0xb282("0x534")), _0x5c1379("#mainPanel")[_0xb282("0x4f4")]()["remove"](), _0x5c1379(_0xb282("0x535"))[_0xb282("0x3cc")]("ogario-menu"), _0x5c1379(".center-container")[_0xb282("0x323")](_0xb282("0x536") + _0x33cd4b[_0xb282("0x537")] + _0xb282("0x538") + this[_0xb282("0x539")] + ' <a href="https://goo.gl/zze9Fj" class="release icon-info" target="_blank"></a></div>'), 
    _0x5c1379(_0xb282("0x53a"))[_0xb282("0x3cc")](_0xb282("0x53b"))[_0xb282("0x53c")]("id"), _0x5c1379(_0xb282("0x53d"))["appendTo"](_0x5c1379(_0xb282("0x53e")))["removeClass"](_0xb282("0x53f")), _0x5c1379(_0xb282("0x540"))[_0xb282("0x52b")](_0xb282("0x541") + _0x33cd4b[_0xb282("0x542")] + '<br><a href="#" id="unblock-popups">' + _0x33cd4b[_0xb282("0x495")] + "</a></div>"), _0x5c1379(_0xb282("0x543"))[_0xb282("0x3cc")](_0xb282("0x544")), _0x5c1379(".left-container")[_0xb282("0x4f4")](), _0x5c1379(_0xb282("0x545"))[_0xb282("0x52b")]('<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: \u24c2)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>'), 
    _0x5c1379(_0xb282("0x546"))[_0xb282("0x321")](_0x5c1379(_0xb282("0x53e"))), _0x5c1379(_0xb282("0x547"))["appendTo"](_0x5c1379(_0xb282("0x53e"))), _0x5c1379(_0xb282("0x548"))[_0xb282("0x323")](_0xb282("0x549") + _0x33cd4b[_0xb282("0x54a")] + _0xb282("0x54b") + _0x33cd4b[_0xb282("0x54c")] + _0xb282("0x54d") + _0x33cd4b[_0xb282("0x54e")] + _0xb282("0x54f") + _0x33cd4b[_0xb282("0x550")] + _0xb282("0x551") + _0x33cd4b["skins"] + '"></a><a href="http://youtube.com/channel/UCaWiPNJWnhzYDrBQoXokn6w" class="quick-yt icon-youtube2" target="_blank" data-toggle="tab-tooltip" data-container="body" data-placement="left" title="Team OGARio"></a></div>'), 
    _0x5c1379(".party-dialog, .partymode-info")[_0xb282("0x4c8")](), _0x5c1379(".agario-party-6")[_0xb282("0x321")](_0x5c1379(_0xb282("0x535"))), _0x5c1379(_0xb282("0x552"))[_0xb282("0x4f4")](), _0x5c1379(_0xb282("0x552"))[_0xb282("0x323")]('<div class="agario-party"></div>'), _0x5c1379(_0xb282("0x553"))[_0xb282("0x321")](_0x5c1379(_0xb282("0x554")))[_0xb282("0x3cc")]("agario-panel agario-side-panel"), _0x5c1379(_0xb282("0x555"))[_0xb282("0x4c8")](), _0x5c1379(_0xb282("0x556"))[_0xb282("0x3cc")](_0xb282("0x557")), 
    _0x5c1379(_0xb282("0x552"))[_0xb282("0x323")](_0xb282("0x558") + _0x33cd4b[_0xb282("0x559")] + _0xb282("0x3d5")), _0x5c1379(_0xb282("0x55a"))[_0xb282("0x4c8")](), _0x5c1379("#advertisement, #adbg, #a320x250, #g320x250, #s320x250, #adsBottom")[_0xb282("0xb6")](_0xb282("0x55b"), _0xb282("0x3e3")), _0x5c1379(_0xb282("0x55c"))[_0xb282("0x48d")](_0xb282("0x55d")), _0x5c1379(_0xb282("0x55e"))["css"]({"z-index":"1", "opacity":"0", "bottom":"-100px"}), _0x5c1379(_0xb282("0x55f"))["remove"](), _0x5c1379(_0xb282("0x530"))[_0xb282("0x323")](_0xb282("0x560")), 
    this["addOptions"]([], _0xb282("0x561")), this[_0xb282("0x562")](["autoZoom"], _0xb282("0x563")), this[_0xb282("0x562")]([_0xb282("0x47c"), _0xb282("0x47e")], _0xb282("0x564")), this[_0xb282("0x562")]([_0xb282("0x46b"), _0xb282("0x59"), _0xb282("0x565"), _0xb282("0x566"), _0xb282("0x46c"), _0xb282("0x567")], _0xb282("0x568")), this[_0xb282("0x562")]([_0xb282("0x46d"), "optimizedMass", _0xb282("0x569"), "hideMyMass", _0xb282("0x56a"), _0xb282("0x49"), _0xb282("0x60"), _0xb282("0x56b")], _0xb282("0x56c")), 
    this["addOptions"](["customSkins", _0xb282("0x448")], _0xb282("0x56d")), this[_0xb282("0x562")](["optimizedFood", _0xb282("0x56e"), _0xb282("0x56f"), _0xb282("0x570")], _0xb282("0x571")), this[_0xb282("0x562")]([_0xb282("0x572"), "myTransparentSkin", _0xb282("0x45f"), _0xb282("0x573"), "transparentViruses"], _0xb282("0x574")), this["addOptions"]([_0xb282("0x463"), _0xb282("0x468"), "showMapBorders"], _0xb282("0x575")), this[_0xb282("0x562")](["disableChat", _0xb282("0x4e1"), _0xb282("0x576"), 
    _0xb282("0x577"), _0xb282("0x578"), _0xb282("0x4d0")], "chatGroup"), this["addOptions"]([_0xb282("0x46e"), "showMiniMapGrid", _0xb282("0x464"), _0xb282("0x579")], "miniMapGroup"), this[_0xb282("0x562")](["oppColors", _0xb282("0x457"), "virColors", "splitRange", _0xb282("0x57a"), _0xb282("0x57b"), _0xb282("0x458")], _0xb282("0x57c")), this["addOptions"]([_0xb282("0x57d"), _0xb282("0x57e"), _0xb282("0x57f")], "mouseGroup"), this["addOptions"](["showTop5", _0xb282("0x44f"), _0xb282("0x4e3"), _0xb282("0x48f"), 
    _0xb282("0x491")], _0xb282("0x580")), this["addOptions"]([_0xb282("0x49d"), _0xb282("0x49e"), _0xb282("0x581"), "showStatsN16", _0xb282("0x4a8"), _0xb282("0x453")], _0xb282("0x582")), this[_0xb282("0x562")]([_0xb282("0x494")], _0xb282("0x583")), _0x5c1379("#noSkins, #noColors, #skipStats, #showQuest")["addClass"]("js-switch-vanilla"), _0x5c1379(".skinsGroup h5")[_0xb282("0x52b")](_0xb282("0x584") + _0x33cd4b[_0xb282("0x45a")] + _0xb282("0x585")), _0x5c1379(_0xb282("0x586"))["appendTo"](_0x5c1379(_0xb282("0x587"))), 
    _0x5c1379(".transparencyGroup h5")[_0xb282("0x52b")]('<label class="noColors">' + _0x33cd4b["noColors"] + _0xb282("0x585")), _0x5c1379(_0xb282("0x588"))["appendTo"](_0x5c1379(_0xb282("0x589"))), _0x5c1379(".extrasGroup h5")[_0xb282("0x52b")](_0xb282("0x58a") + _0x33cd4b["skipStats"] + _0xb282("0x585")), _0x5c1379(_0xb282("0x485"))[_0xb282("0x321")](_0x5c1379(_0xb282("0x58b"))), _0x5c1379(_0xb282("0x58b"))[_0xb282("0x52b")](_0xb282("0x58c") + _0x33cd4b[_0xb282("0x470")] + _0xb282("0x585")), _0x5c1379(_0xb282("0x58d"))[_0xb282("0x321")](_0x5c1379(_0xb282("0x58e"))), 
    _0x5c1379(_0xb282("0x58f"))[_0xb282("0x4c8")](), _0x5c1379(_0xb282("0x590"))["appendTo"](_0x5c1379(_0xb282("0x591")))[_0xb282("0x3cc")](_0xb282("0x592")), this[_0xb282("0x377")](_0xb282("0x593"), _0xb282("0x594"), 100, 200, 1), this[_0xb282("0x377")](".zoomGroup", "zoomSpeedValue", .75, .99, .01), _0x5c1379(_0xb282("0x595"))[_0xb282("0x323")]('<button class="btn btn-block btn-success btn-export">' + _0x33cd4b["exportImport"] + _0xb282("0x3cd")), _0x5c1379("#og-settings")[_0xb282("0x323")](_0xb282("0x3d3") + 
    _0x33cd4b["restoreSettings"] + _0xb282("0x3d5")), _0x5c1379(_0xb282("0x596"))[_0xb282("0x323")](_0xb282("0x597") + _0x33cd4b[_0xb282("0x598")] + _0xb282("0x599") + _0x33cd4b[_0xb282("0x59a")] + "</a></span></div>"), _0x5c1379(_0xb282("0x596"))[_0xb282("0x323")](_0xb282("0x59b") + _0x33cd4b[_0xb282("0x59c")] + _0xb282("0x508")), _0x5c1379(_0xb282("0x596"))[_0xb282("0x323")](_0xb282("0x59d")), this[_0xb282("0x394")](".sounds-panel", "messageSound", _0xb282("0x59e"), _0xb282("0x59f")), this[_0xb282("0x394")](_0xb282("0x5a0"), 
    _0xb282("0x5a1"), _0xb282("0x59e"), "setCommandSound"), _0x5c1379("body")[_0xb282("0x323")](_0xb282("0x5a2") + _0x33cd4b[_0xb282("0x5a3")] + _0xb282("0x5a4") + _0x33cd4b[_0xb282("0x5a5")] + _0xb282("0x5a6") + _0x33cd4b[_0xb282("0x48c")] + '</div> <div id="leaderboard-hud" class="hud-b"><h4 class="hud-main-color">ogario.ovh</h4><div id="leaderboard-positions"></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src=""> </span><span id="target-nick"></span> <span id="target-status" class="hud-main-color">[' + 
    _0x33cd4b[_0xb282("0x5a7")] + _0xb282("0x5a8")), _0x5c1379(_0xb282("0x8f"))[_0xb282("0x323")]('<ul id="messages"></ul>'), _0x5c1379(_0xb282("0x8f"))[_0xb282("0x323")]('<div id="message-box"><div id="chat-emoticons"></div><div id="message-menu"><a href="#" class="chat-sound-notifications icon-volume-high"></a><a href="#" class="chat-active-users icon-user-check"></a><a href="#" class="chat-muted-users icon-user-minus"></a><a href="#" class="show-chat-emoticons icon-smile"></a></div><input type="text" id="message" class="form-control" placeholder="' + 
    _0x33cd4b[_0xb282("0x5a9")] + _0xb282("0x5aa")), _0x5c1379(_0xb282("0x8f"))[_0xb282("0x323")](_0xb282("0x5ab"));
    for (var _0x10cbb0 in _0x31a06d) {
      _0x31a06d[_0xb282("0x31b")](_0x10cbb0) && _0x5c1379(_0xb282("0x5ac"))["append"](_0xb282("0x5ad") + _0x31a06d[_0x10cbb0] + _0xb282("0x5ae") + _0x10cbb0 + _0xb282("0x5af"));
    }
    _0x5c1379(_0xb282("0x8f"))[_0xb282("0x323")](_0xb282("0x5b0") + _0x33cd4b[_0xb282("0x5b1")] + _0xb282("0x5b2")), _0x5c1379(_0xb282("0x5b3"))[_0xb282("0x323")](_0xb282("0x5b4") + _0x33cd4b[_0xb282("0x5b5")] + "</h1><h2>" + _0x33cd4b[_0xb282("0x5b6")] + _0xb282("0x5b7")), this[_0xb282("0x5b8")](_0xb282("0x5b3"), _0xb282("0x5b9"), _0x33cd4b[_0xb282("0x5ba")], !0), this[_0xb282("0x5b8")]("#exp-imp-settings", _0xb282("0x5bb"), _0x33cd4b[_0xb282("0x517")], !0), this[_0xb282("0x5b8")](_0xb282("0x5b3"), 
    _0xb282("0x5bc"), _0x33cd4b[_0xb282("0x5bd")], !0), this["addOption"](_0xb282("0x5b3"), _0xb282("0x5be"), _0x33cd4b["settings"], !0), this[_0xb282("0x5b8")]("#exp-imp-settings", _0xb282("0x5bf"), _0x33cd4b["theme"], !0), _0x5c1379(_0xb282("0x5b3"))[_0xb282("0x323")](_0xb282("0x5c0") + _0x33cd4b[_0xb282("0x5b5")] + _0xb282("0x3cd")), _0x5c1379("#exp-imp-settings")["append"](_0xb282("0x5b4") + _0x33cd4b[_0xb282("0x5c1")] + _0xb282("0x5c2") + _0x33cd4b[_0xb282("0x5c3")] + _0xb282("0x5b7")), this[_0xb282("0x5b8")](_0xb282("0x5b3"), 
    _0xb282("0x5c4"), _0x33cd4b[_0xb282("0x5ba")], !0), this[_0xb282("0x5b8")](_0xb282("0x5b3"), _0xb282("0x5c5"), _0x33cd4b[_0xb282("0x517")], !0), this[_0xb282("0x5b8")](_0xb282("0x5b3"), _0xb282("0x5c6"), _0x33cd4b[_0xb282("0x5bd")], !0), this[_0xb282("0x5b8")](_0xb282("0x5b3"), _0xb282("0x5c7"), _0x33cd4b["settings"], !0), this[_0xb282("0x5b8")]("#exp-imp-settings", "import-ogarioThemeSettings", _0x33cd4b[_0xb282("0x515")], !0), _0x5c1379("#exp-imp-settings")[_0xb282("0x323")](_0xb282("0x5c8") + 
    _0x33cd4b[_0xb282("0x5c1")] + _0xb282("0x3cd")), _0x20b998 && _0x20b998[_0xb282("0x5c9")]();
    for (var _0xe98c87 = 0; _0xe98c87 < _0x5556ef[_0xb282("0xc")]; _0xe98c87++) {
      _0x5c1379(_0xb282("0x5ca"))[_0xb282("0x323")](_0xb282("0x5cb") + _0xe98c87 + _0xb282("0x5cc") + _0xe98c87 + _0xb282("0x5cd") + _0xe98c87 + _0xb282("0x347")), this["setSkinPreview"](_0x5556ef[_0xe98c87][_0xb282("0x4ec")], _0xb282("0x5ce") + _0xe98c87), _0xe98c87 == this[_0xb282("0x4eb")] && _0x5c1379(_0xb282("0x5cf") + _0xe98c87)[_0xb282("0x3cc")](_0xb282("0x500"));
    }
  }, "setUI":function() {
    var _0x457879 = this;
    _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5d0"), function(_0x466512) {
      _0x466512[_0xb282("0x3cf")](), _0x457879[_0xb282("0x5d1")](_0x5c1379(this), _0xb282("0x5d2"));
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5d3"), function(_0x2ae8bc) {
      _0x2ae8bc[_0xb282("0x3cf")](), _0x457879[_0xb282("0x5d1")](_0x5c1379(this), _0xb282("0x5d4"));
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5d5"), function(_0x50c743) {
      _0x50c743[_0xb282("0x3cf")](), _0x34bd23["showQuickMenu"] = !_0x34bd23["showQuickMenu"], _0x457879[_0xb282("0x4e7")](_0x34bd23, _0xb282("0x4da")), _0x457879[_0xb282("0x5d6")]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x5d7"), function(_0xecff68) {
      _0xecff68[_0xb282("0x3cf")](), _0x34bd23[_0xb282("0x5d8")] = !_0x34bd23[_0xb282("0x5d8")], _0x457879[_0xb282("0x4e7")](_0x34bd23, _0xb282("0x4da")), _0x457879[_0xb282("0x5d9")]();
    }), _0x5c1379(document)["on"]("change", _0xb282("0x525"), function() {
      _0x457879[_0xb282("0x5da")] = this[_0xb282("0x32b")];
    }), _0x5c1379(document)["on"](_0xb282("0x32a"), _0xb282("0x5db"), function() {
      var _0x10cbb0 = this["value"];
      _0xb282("0x5dc") !== _0x10cbb0 && _0x457879[_0xb282("0x5dd")](), _0x457879[_0xb282("0x466")] = _0xe98c87["gameMode"] = _0x10cbb0, _0x457879["setQuest"]();
    }), _0x5c1379(document)["on"](_0xb282("0x32a"), _0xb282("0x5de"), function() {
      _0x457879[_0xb282("0x5df")](this["value"]), _0x3543d7();
    }), _0x5c1379(document)["on"](_0xb282("0x33e"), _0xb282("0x4fd"), function() {
      var _0x10cbb0 = this[_0xb282("0x32b")];
      _0x457879[_0xb282("0x4f9")](_0x10cbb0, _0xb282("0x4ed")), _0x457879[_0xb282("0x4f9")](_0x10cbb0, _0xb282("0x5ce") + _0x457879[_0xb282("0x4eb")]);
    }), _0x5c1379(document)["on"]("click", _0xb282("0x4ff"), function(_0x379471) {
      _0x379471["preventDefault"](), _0x457879[_0xb282("0x5e0")](_0x5c1379(this)["attr"](_0xb282("0x5e1")));
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5e2"), function() {
      _0x457879["prevProfile"]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5e3"), function() {
      _0x457879[_0xb282("0x5e4")]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x5e5"), function() {
      _0x34bd23[_0xb282("0x5e6")] = !_0x34bd23[_0xb282("0x5e6")], _0x457879[_0xb282("0x4e7")](_0x34bd23, "ogarioSettings"), _0x457879[_0xb282("0x5e7")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5e8"), function() {
      _0x34bd23[_0xb282("0x5e9")] = !_0x34bd23["hideSkinUrl"], _0x457879[_0xb282("0x4e7")](_0x34bd23, "ogarioSettings"), _0x457879[_0xb282("0x5ea")]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x5eb"), function() {
      _0x5c1379("#server-info")[_0xb282("0x461")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5ec"), function() {
      _0x457879[_0xb282("0x47d")](_0x5c1379(_0xb282("0x5ed"))[_0xb282("0x329")]());
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5ee"), function() {
      _0x457879[_0xb282("0x5ef")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#server-join", function() {
      _0x457879[_0xb282("0x5f0")](_0x5c1379("#server-token")[_0xb282("0x329")]());
    }), _0x5c1379(document)["on"](_0xb282("0x32a"), "#og-options input[type='checkbox']", function() {
      var _0x10cbb0 = _0x5c1379(this);
      _0x457879[_0xb282("0x5f1")](_0x10cbb0[_0xb282("0x533")]("id"), _0x10cbb0[_0xb282("0x483")](_0xb282("0x484")));
    }), _0x5c1379(document)["on"](_0xb282("0x32a"), _0xb282("0x5f2"), function() {
      var _0x10cbb0 = _0x5c1379(this), _0x191d4a = _0x10cbb0[_0xb282("0x533")]("id");
      void 0 !== _0x457879[_0x191d4a] && (_0x457879[_0x191d4a] = _0x10cbb0[_0xb282("0x483")](_0xb282("0x484")), _0xb282("0x45a") === _0x191d4a && (_0xe98c87[_0xb282("0x45c")] = !_0x457879[_0xb282("0x45a")]), "showQuest" === _0x191d4a && _0x457879[_0xb282("0x471")]());
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#og-settings .restore-settings a", function(_0x47c104) {
      _0x47c104[_0xb282("0x3cf")](), _0x457879[_0xb282("0x5f3")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5f4"), function(_0x1736b3) {
      _0x1736b3["preventDefault"](), _0x457879[_0xb282("0x5b5")](), _0x5c1379(_0xb282("0x5f5"))[_0xb282("0x4f3")](500), _0x5c1379("#exp-imp-settings, #export-settings")[_0xb282("0x5f6")](_0xb282("0x5c"));
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5f7"), function(_0x3ce7c7) {
      _0x3ce7c7[_0xb282("0x3cf")](), _0x5c1379("#exp-imp")[_0xb282("0x5f8")](500);
    }), _0x5c1379(document)["on"](_0xb282("0x4d4"), _0xb282("0x4dc"), function() {
      _0x5c1379(this)[_0xb282("0x489")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#export-settings-btn", function(_0x53f2aa) {
      _0x53f2aa[_0xb282("0x3cf")](), _0x457879["exportSettings"]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#import-settings-btn", function(_0x325eab) {
      _0x325eab[_0xb282("0x3cf")](), _0x457879[_0xb282("0x5c1")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5f9"), function(_0x485038) {
      _0x485038[_0xb282("0x3cf")](), _0x457879[_0xb282("0x495")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5fa"), function() {
      _0x34bd23[_0xb282("0x494")] && _0x457879[_0xb282("0x494")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#openfl-content", function() {
      if (_0x34bd23[_0xb282("0x494")]) {
        var _0x10cbb0 = _0x5c1379(this);
        setTimeout(function() {
          _0x10cbb0["is"](":visible") || _0x457879[_0xb282("0x494")]();
        }, 1E3);
      }
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5fb"), function(_0x2b7e41) {
      _0x2b7e41[_0xb282("0x3cf")](), _0x457879[_0xb282("0x495")](), _0x10cbb0["MC"] && _0x10cbb0["MC"][_0xb282("0x5fc")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x5fd"), function(_0x29f03) {
      _0x29f03[_0xb282("0x3cf")](), _0x457879[_0xb282("0x495")](), _0x10cbb0["MC"] && _0x10cbb0["MC"][_0xb282("0x5fe")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), ".quick-free-gifts", function(_0x5ce83b) {
      _0x5ce83b[_0xb282("0x3cf")](), _0x457879[_0xb282("0x495")](), _0x10cbb0["MC"] && _0x10cbb0["MC"][_0xb282("0x5ff")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x600"), function(_0x2141e5) {
      _0x2141e5["preventDefault"](), _0x457879[_0xb282("0x495")](), _0x10cbb0["MC"] && _0x10cbb0["MC"][_0xb282("0x601")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x602"), function(_0x2a2b07) {
      _0x2a2b07[_0xb282("0x3cf")](), _0x457879[_0xb282("0x603")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x604"), function(_0x101f9a) {
      _0x101f9a[_0xb282("0x3cf")](), _0x457879["cancelTargeting"]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x605"), function(_0x2dccb8) {
      _0x2dccb8[_0xb282("0x3cf")](), _0x457879["setPrivateMiniMap"]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x606"), function(_0x98970e) {
      _0x98970e[_0xb282("0x3cf")](), _0x457879[_0xb282("0x607")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), ".team-top-limit", function(_0x34b3b5) {
      _0x34b3b5[_0xb282("0x3cf")]();
      var _0xe98c87 = _0x5c1379(this), _0x28caa3 = parseInt(_0xe98c87[_0xb282("0x533")](_0xb282("0x608")));
      _0x28caa3 && (_0x457879[_0xb282("0x609")](_0x28caa3), _0x457879["displayTop5"](), _0x5c1379(".team-top")["text"](_0x28caa3), _0x5c1379(_0xb282("0x60a"))[_0xb282("0x48d")](_0xb282("0x3cb")), _0xe98c87[_0xb282("0x3cc")](_0xb282("0x3cb")));
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#top5-pos .set-target", function(_0x900259) {
      _0x900259[_0xb282("0x3cf")](), _0x457879[_0xb282("0x60b")](parseInt(_0x5c1379(this)["attr"](_0xb282("0x60c"))));
    }), _0x5c1379(document)["on"]("click", ".mute-user", function(_0x8219de) {
      _0x8219de["preventDefault"](), _0x457879[_0xb282("0x60d")](parseInt(_0x5c1379(this)[_0xb282("0x533")](_0xb282("0x60c"))));
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), ".btn-mute-user", function() {
      var _0x10cbb0 = _0x5c1379(this);
      _0x457879[_0xb282("0x60d")](parseInt(_0x10cbb0[_0xb282("0x533")](_0xb282("0x60c")))), _0x10cbb0[_0xb282("0x48d")](_0xb282("0x60e"))[_0xb282("0x3cc")](_0xb282("0x60f"))[_0xb282("0x90")](_0x33cd4b[_0xb282("0x610")]);
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x611"), function() {
      var _0x10cbb0 = _0x5c1379(this);
      _0x457879["unmuteChatUser"](parseInt(_0x10cbb0[_0xb282("0x533")]("data-user-id"))), _0x10cbb0["removeClass"](_0xb282("0x60f"))["addClass"](_0xb282("0x60e"))[_0xb282("0x90")](_0x33cd4b[_0xb282("0x612")]);
    }), _0x5c1379(document)["on"]("click", ".chat-sound-notifications", function(_0xa1c4ba) {
      _0xa1c4ba[_0xb282("0x3cf")](), _0x34bd23["chatSounds"] = !_0x34bd23["chatSounds"], _0x457879[_0xb282("0x4e7")](_0x34bd23, _0xb282("0x4da")), _0x457879[_0xb282("0x4e2")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x613"), function(_0x32fba1) {
      _0x32fba1[_0xb282("0x3cf")](), _0x457879[_0xb282("0x614")]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x615"), function(_0x44d5f6) {
      _0x44d5f6["preventDefault"](), _0x457879[_0xb282("0x616")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x617"), function(_0x5a7b95) {
      _0x5a7b95[_0xb282("0x3cf")]();
      var _0xe98c87 = _0x5c1379(this), _0x2c132d = _0x5c1379(_0xb282("0x5ac"));
      _0x2c132d[_0xb282("0x461")](), _0x2c132d["is"](":visible") ? _0xe98c87["addClass"](_0xb282("0x3cb")) : (_0xe98c87[_0xb282("0x48d")]("active"), _0x5c1379(_0xb282("0x618"))["focus"]());
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x619"), function() {
      var _0x10cbb0 = _0x5c1379(this), _0xe98c87 = _0x10cbb0[_0xb282("0x533")](_0xb282("0x61a")), _0x11782c = _0x5c1379("#message"), _0x19c796 = _0x11782c[_0xb282("0x329")]();
      _0x19c796[_0xb282("0xc")] + _0xe98c87[_0xb282("0xc")] > 80 || _0x11782c[_0xb282("0x329")](_0x19c796 + _0xe98c87), _0x11782c[_0xb282("0x4d4")]();
    }), this[_0xb282("0x4ab")] = document["getElementById"]("stats-hud"), this[_0xb282("0x4b5")] = document[_0xb282("0x92")]("active-parties"), this[_0xb282("0x61b")] = document["getElementById"](_0xb282("0x61c")), this[_0xb282("0x4be")] = document["getElementById"](_0xb282("0x61d")), this[_0xb282("0x4bf")] = document[_0xb282("0x92")](_0xb282("0x61e")), this["leaderboardPositionsHUD"] = document[_0xb282("0x92")]("leaderboard-positions"), this[_0xb282("0x4ae")] = document[_0xb282("0x92")](_0xb282("0x61f")), 
    this["questHUD"] = document[_0xb282("0x92")](_0xb282("0x620")), _0x5c1379(_0xb282("0x621"))[_0xb282("0x622")](_0xb282("0x623"), function() {
      return !1;
    }), _0x5c1379(document)["on"]("mouseup", _0xb282("0x624"), function() {
      $(this)[_0xb282("0x4d3")]();
    }), _0x5c1379(_0xb282("0x625"))[_0xb282("0x626")](), _0x5c1379(_0xb282("0x627"))[_0xb282("0x5f6")]({"suppressScrollX":!0});
    var _0x3e0588 = Array[_0xb282("0x628")][_0xb282("0x629")][_0xb282("0x62a")](document["querySelectorAll"](_0xb282("0x62b")));
    _0x3e0588[_0xb282("0x62c")](function(_0x1308bc) {
      new Switchery(_0x1308bc, {"color":_0x18e354["menuMainColor"], "size":_0xb282("0x62d")});
    }), _0x5c1379(_0xb282("0x62e"))[_0xb282("0x62f")]({"polyfill":!1}), toastr[_0xb282("0x630")] = {"newestOnTop":!1, "positionClass":_0xb282("0x631"), "timeOut":15E3};
  }, "switchMenuTabs":function(_0x5cdfc5, _0x2c3c7e) {
    var _0x12a7bb = _0x5cdfc5["parent"]();
    if (_0xb282("0x5d2") === _0x2c3c7e) {
      if (_0x5cdfc5[_0xb282("0x632")](_0xb282("0x633"))) {
        return;
      }
      _0x12a7bb[_0xb282("0x632")]("profile-tab") && this[_0xb282("0x4e6")]();
    }
    _0x5cdfc5[_0xb282("0x3cc")]("active"), _0x12a7bb[_0xb282("0x3cc")](_0xb282("0x3cb")), _0x12a7bb["siblings"]()[_0xb282("0x48d")](_0xb282("0x3cb")), _0x12a7bb["siblings"]()[_0xb282("0x634")]("a")[_0xb282("0x48d")](_0xb282("0x3cb"));
    var _0x389932 = _0x5cdfc5[_0xb282("0x533")](_0xb282("0x635"));
    if (_0xb282("0x5d4") === _0x2c3c7e) {
      var _0x14e8c6 = _0x5c1379(_0x389932)[_0xb282("0x636")]()[_0xb282("0x533")]("id");
      _0x5c1379("#" + _0x14e8c6 + _0xb282("0x637"))[_0xb282("0x638")](_0x389932)[_0xb282("0xb6")](_0xb282("0x55b"), _0xb282("0x3e3"));
    } else {
      _0x5c1379(_0xb282("0x639"))[_0xb282("0x638")](_0x389932)[_0xb282("0xb6")](_0xb282("0x55b"), "none");
    }
    _0x5c1379(_0x389932)[_0xb282("0x4f3")](1E3), _0x3543d7(), _0x5c1379(".submenu-panel")["perfectScrollbar"](_0xb282("0x5c"));
  }, "getDefaultSettings":function() {
    if (this[_0xb282("0x45a")] = _0x5c1379(_0xb282("0x586"))[_0xb282("0x483")](_0xb282("0x484")), this[_0xb282("0x63a")] = _0x5c1379(_0xb282("0x588"))[_0xb282("0x483")]("checked"), this[_0xb282("0x486")] = _0x5c1379(_0xb282("0x485"))[_0xb282("0x483")](_0xb282("0x484")), this[_0xb282("0x470")] = _0x5c1379(_0xb282("0x58d"))["prop"](_0xb282("0x484")), _0xe98c87[_0xb282("0x45c")] = !this[_0xb282("0x45a")], null !== _0x10cbb0["localStorage"][_0xb282("0x31d")]("scale_setting")) {
      var _0x383a6e = JSON["parse"](_0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")]("scale_setting"));
      this[_0xb282("0x63b")](_0x383a6e);
    } else {
      var _0x5091c7 = _0x5c1379(_0xb282("0x5de"))[_0xb282("0x329")]();
      this["getQuality"](_0x5091c7);
    }
    null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")]("location") ? (this[_0xb282("0x5da")] = _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x71")), _0x5c1379(_0xb282("0x525"))[_0xb282("0x329")](this["region"]), _0x10cbb0["MC"] && _0x10cbb0["MC"]["setRegion"] && _0x10cbb0["MC"][_0xb282("0x63c")](this[_0xb282("0x5da")])) : this["region"] = _0x5c1379(_0xb282("0x525"))["val"](), this[_0xb282("0x63d")](), _0xb282("0x5dc") === this[_0xb282("0x466")] && _0x10cbb0[_0xb282("0x71")][_0xb282("0x73")] && 
    _0x5c1379(_0xb282("0x63e"))["click"]();
    var _0xadc683 = Array["prototype"][_0xb282("0x629")]["call"](document[_0xb282("0x63f")](_0xb282("0x5f2")));
    _0xadc683[_0xb282("0x62c")](function(_0x344cd0) {
      new Switchery(_0x344cd0, {"color":_0x18e354[_0xb282("0x384")], "size":_0xb282("0x62d")});
    }), _0x5c1379(_0xb282("0x51d"))[_0xb282("0x329")](_0x3a156f["nick"])[_0xb282("0x4d3")](), _0x5c1379("#noNames")["prop"](_0xb282("0x484"), !_0x34bd23[_0xb282("0x46b")]), _0x5c1379(_0xb282("0x640"))[_0xb282("0x483")](_0xb282("0x484"), _0x34bd23[_0xb282("0x46d")]), this["unlockButtons"](), this[_0xb282("0x47f")](), this[_0xb282("0x471")]();
  }, "getQuality":function(_0x3c9765) {
    var _0x5c1379 = _0xb282("0x641") in _0x10cbb0, _0x2e74b8 = 1;
    switch(_0x5c1379 && (_0x2e74b8 = _0x10cbb0["devicePixelRatio"]), _0x3c9765) {
      case "High":
        this[_0xb282("0x63b")](1);
        break;
      case _0xb282("0x642"):
        this[_0xb282("0x63b")](.9);
        break;
      case _0xb282("0x643"):
        this[_0xb282("0x63b")](.75);
        break;
      case "VeryLow":
        this[_0xb282("0x63b")](.5);
        break;
      default:
        this["setCanvasScale"](_0x2e74b8);
    }
  }, "setCanvasScale":function(_0x28f8de) {
    this[_0xb282("0x644")] = _0x28f8de, _0xe98c87[_0xb282("0x644")] = _0x28f8de;
  }, "setStreamMode":function() {
    _0x34bd23[_0xb282("0x5e6")] ? (_0x5c1379(_0xb282("0x5e5"))[_0xb282("0x3cc")](_0xb282("0x645")), _0x5c1379(_0xb282("0x646"))[_0xb282("0x3cc")]("stream-mode")) : (_0x5c1379(_0xb282("0x5e5"))[_0xb282("0x48d")](_0xb282("0x645")), _0x5c1379("#clantag, #nick, #party-token")[_0xb282("0x48d")](_0xb282("0x647")));
  }, "setHideSkinUrl":function() {
    _0x34bd23[_0xb282("0x5e9")] ? (_0x5c1379("#hide-url")[_0xb282("0x3cc")](_0xb282("0x645")), _0x5c1379(_0xb282("0x4fd"))[_0xb282("0x3cc")](_0xb282("0x648"))) : (_0x5c1379(_0xb282("0x5e8"))["removeClass"](_0xb282("0x645")), _0x5c1379(_0xb282("0x4fd"))[_0xb282("0x48d")](_0xb282("0x648")));
  }, "setShowQuickMenu":function() {
    _0x34bd23[_0xb282("0x649")] ? _0x5c1379(_0xb282("0x64a"))[_0xb282("0x4f3")](500) : _0x5c1379(_0xb282("0x64a"))[_0xb282("0x5f8")](500);
  }, "setShowSkinsPanel":function() {
    _0x34bd23[_0xb282("0x5d8")] ? _0x5c1379(_0xb282("0x64b"))[_0xb282("0x4f3")](500) : _0x5c1379(_0xb282("0x64b"))[_0xb282("0x5f8")](500);
  }, "unlockButtons":function() {
    _0x5c1379(".btn-play, .btn-play-guest, .btn-login-play, .btn-spectate")[_0xb282("0x483")](_0xb282("0x49a"), !1);
  }, "setMainButtons":function() {
    var _0x10cbb0 = this;
    _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x64c"), function() {
      _0x10cbb0[_0xb282("0x64d")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x64e"), function() {
      _0x10cbb0[_0xb282("0x64f")]();
    }), _0x5c1379(document)["on"]("click", _0xb282("0x650"), function() {
      _0x10cbb0[_0xb282("0x651")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x63e"), function() {
      _0x10cbb0[_0xb282("0x652")] = !0, _0x10cbb0[_0xb282("0x653")](), _0x10cbb0[_0xb282("0x654")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x655"), function() {
      _0x5c1379(_0xb282("0x656"))[_0xb282("0x461")]();
    });
  }, "play":function() {
    if (this["setPlayerSettings"](), this[_0xb282("0x63d")](), this[_0xb282("0x657")]()) {
      this["sendPartyData"]();
    } else {
      this[_0xb282("0xae")]();
      var _0x10cbb0 = this;
      setTimeout(function() {
        _0x10cbb0[_0xb282("0x658")]();
      }, 1E3);
    }
  }, "onPlay":function() {
    this[_0xb282("0x94")](), _0x5c1379(_0xb282("0x99"))["hide"](), _0x10cbb0[_0xb282("0x659")](), _0xe98c87[_0xb282("0x65a")] = !1, _0xe98c87[_0xb282("0x4a1")] = 0, _0x34bd23[_0xb282("0x56e")] && (_0xe98c87[_0xb282("0x462")] = !0), _0x10cbb0["ga"] && _0x10cbb0["ga"](_0xb282("0x65b"), "UA-67142685-2", "auto", _0xb282("0x65c")), _0x10cbb0["ga"] && _0x10cbb0["ga"](_0xb282("0x65d"), _0xb282("0x65e"));
  }, "onSpectate":function() {
    this[_0xb282("0x654")](), this[_0xb282("0x65f")](), _0x5c1379(_0xb282("0x99"))["hide"](), _0x10cbb0[_0xb282("0x659")](), _0xe98c87[_0xb282("0x94")] = !1, _0xe98c87[_0xb282("0x65a")] = !0, _0x34bd23[_0xb282("0x56e")] && (_0xe98c87[_0xb282("0x462")] = !1);
  }, "join":function() {
    this[_0xb282("0x63d")](), this[_0xb282("0x502")](), this[_0xb282("0x658")](), this[_0xb282("0x660")]();
  }, "onJoin":function() {
    if (this["setParty"](), this[_0xb282("0x657")]()) {
      this[_0xb282("0x661")]();
    } else {
      this[_0xb282("0xae")]();
      var _0x10cbb0 = this;
      setTimeout(function() {
        _0x10cbb0[_0xb282("0x661")](), _0x10cbb0[_0xb282("0x65f")]();
      }, 1E3);
    }
  }, "create":function() {
    if (this[_0xb282("0x63d")](), this[_0xb282("0x662")]) {
      return void this[_0xb282("0x654")]();
    }
    var _0x10cbb0 = this;
    setTimeout(function() {
      _0x10cbb0[_0xb282("0x65b")]();
    }, 100);
  }, "onCreate":function() {
    this[_0xb282("0x63d")](), _0xb282("0x5dc") === this[_0xb282("0x466")] && this["partyToken"] ? this[_0xb282("0x5ef")]() : this[_0xb282("0x663")](), this[_0xb282("0x65b")]();
  }, "onPlayerSpawn":function() {
    if (_0xe98c87[_0xb282("0x94")] = !0, _0xe98c87[_0xb282("0xa4")]) {
      return this[_0xb282("0x664")](), void this[_0xb282("0x665")](_0x3a156f[_0xb282("0x0")] + _0xe98c87[_0xb282("0xa4")], _0x3a156f[_0xb282("0x4ec")]);
    }
    var _0x10cbb0 = this;
    setTimeout(function() {
      _0x10cbb0["onPlayerSpawn"]();
    }, 100);
  }, "onPlayerDeath":function() {
    _0x5c1379(".ogario-menu")[_0xb282("0x9a")](), _0x5c1379(_0xb282("0x639"))[_0xb282("0x452")](), this[_0xb282("0x486")] ? _0x5c1379(_0xb282("0x666"))[_0xb282("0x9a")]() : _0x5c1379(_0xb282("0x531"))[_0xb282("0x9a")](), _0xe98c87[_0xb282("0x94")] = !1, _0xe98c87[_0xb282("0xa4")] = null, _0xe98c87["foodIsHidden"] = !1, _0xe98c87[_0xb282("0x49f")] = 0, this[_0xb282("0x660")](), this["updateDeathLocations"](_0xe98c87[_0xb282("0x440")], _0xe98c87[_0xb282("0x442")]), this[_0xb282("0x667")](), _0x5bc66e(), 
    this[_0xb282("0x47e")]();
  }, "setPlayerSettings":function() {
    var _0x10cbb0 = _0x5c1379(_0xb282("0x51d"))["val"](), _0x37bca5 = _0x5c1379(_0xb282("0x4fc"))[_0xb282("0x329")](), _0x3874ae = _0x5c1379(_0xb282("0x4fd"))["val"](), _0x4e4883 = _0x5c1379(_0xb282("0x3d7"))["val"]();
    _0x3a156f[_0xb282("0x0")] = _0x10cbb0 || "", _0x3a156f[_0xb282("0x4")] = _0x37bca5[_0xb282("0x668")]() || "", _0x3a156f[_0xb282("0x4ec")] = _0x3874ae[_0xb282("0x668")]() || "", 7 == _0x4e4883["length"] && (_0x3a156f["color"] = _0x4e4883), _0x3a156f["clanTag"][_0xb282("0xc")] > 0 && (_0xe98c87[_0xb282("0x4")] = _0x3a156f["clanTag"]), _0x5556ef[this[_0xb282("0x4eb")]][_0xb282("0x0")] = _0x3a156f[_0xb282("0x0")], _0x5556ef[this[_0xb282("0x4eb")]]["clanTag"] = _0x3a156f[_0xb282("0x4")], _0x5556ef[this["selectedProfile"]][_0xb282("0x4ec")] = 
    _0x3a156f[_0xb282("0x4ec")], _0x5556ef[this["selectedProfile"]][_0xb282("0x9")] = _0x3a156f[_0xb282("0x9")], this[_0xb282("0x4e7")](_0x5556ef, "ogarioPlayerProfiles");
  }, "loadSkin":function(_0x20fbeb, _0x5c7eab) {
    var _0x5c1379 = this;
    _0x20fbeb[_0x5c7eab] = new Image, _0x20fbeb[_0x5c7eab][_0xb282("0x4f5")] = _0xb282("0x4f6"), _0x20fbeb[_0x5c7eab][_0xb282("0x4f7")] = function() {
      this["complete"] && this[_0xb282("0x42")] && this[_0xb282("0x44")] && this[_0xb282("0x42")] <= 2E3 && this["height"] <= 2E3 && (_0x5c1379[_0xb282("0x669")][_0xb282("0x4e8")](_0x5c7eab), 1 == _0x5c1379[_0xb282("0x669")][_0xb282("0xc")] && _0x5c1379[_0xb282("0x66a")](_0x5c1379["customSkinsCache"]));
    }, _0x20fbeb[_0x5c7eab][_0xb282("0x3c9")] = _0x5c7eab;
  }, "cacheSkin":function() {
    if (0 != this[_0xb282("0x669")][_0xb282("0xc")]) {
      var _0x10cbb0 = this[_0xb282("0x669")][_0xb282("0x66b")]();
      if (_0x10cbb0) {
        var _0xe98c87 = document[_0xb282("0x39")](_0xb282("0x3a"));
        _0xe98c87["width"] = 512, _0xe98c87[_0xb282("0x44")] = 512;
        var _0x5c1379 = _0xe98c87[_0xb282("0x3b")]("2d");
        _0x5c1379[_0xb282("0x1b")](), _0x5c1379[_0xb282("0x1c")](256, 256, 256, 0, 2 * Math["PI"], !1), _0x5c1379[_0xb282("0x66c")](), _0x5c1379[_0xb282("0x6b")](this[_0xb282("0x66d")][_0x10cbb0], 0, 0, 512, 512), this[_0xb282("0x66d")][_0x10cbb0 + "_cached"] = new Image, this[_0xb282("0x66d")][_0x10cbb0 + "_cached"][_0xb282("0x3c9")] = _0xe98c87[_0xb282("0x66e")](), _0xe98c87 = null, this[_0xb282("0x66a")](this["customSkinsCache"]);
      }
    }
  }, "getCachedSkin":function(_0x1aa773, _0x402c6b) {
    return _0x1aa773[_0x402c6b + _0xb282("0x66f")] && _0x1aa773[_0x402c6b + _0xb282("0x66f")][_0xb282("0x670")] && _0x1aa773[_0x402c6b + _0xb282("0x66f")][_0xb282("0x42")] ? _0x1aa773[_0x402c6b + _0xb282("0x66f")] : null;
  }, "cacheCustomSkin":function(_0x1275b2, _0x2fccb9) {
    if (_0x2fccb9) {
      if (_0x1275b2 && (this[_0xb282("0x671")][_0x1275b2] = _0x2fccb9), this[_0xb282("0x66d")][_0xb282("0x31b")](_0x2fccb9)) {
        return;
      }
      this[_0xb282("0x672")](this[_0xb282("0x66d")], _0x2fccb9);
    }
  }, "getCustomSkin":function(_0x54b75c, _0x407809) {
    return this[_0xb282("0x671")][_0xb282("0x31b")](_0x54b75c + _0x407809) ? this[_0xb282("0x673")](this[_0xb282("0x66d")], this["customSkinsMap"][_0x54b75c + _0x407809]) : null;
  }, "countFPS":function() {
    if (_0x34bd23[_0xb282("0x4a8")]) {
      if (!this[_0xb282("0x674")]) {
        return void(this["fpsLastRequest"] = Date[_0xb282("0x43e")]());
      }
      var _0x10cbb0 = Date[_0xb282("0x43e")](), _0xe98c87 = _0x10cbb0 - this[_0xb282("0x674")];
      1E3 > _0xe98c87 || (this[_0xb282("0x4aa")] = this["renderedFrames"], this["renderedFrames"] = 0, this[_0xb282("0x674")] = _0x10cbb0), this[_0xb282("0x675")]++;
    }
  }, "calculateCurrentSector":function() {
    if (!_0xe98c87[_0xb282("0x676")]) {
      return void(this[_0xb282("0x677")] = "");
    }
    var _0x10cbb0 = _0xe98c87["mapOffsetX"] + _0xe98c87["mapOffset"], _0x5c1379 = _0xe98c87["mapOffsetY"] + _0xe98c87["mapOffset"], _0x3409e4 = String[_0xb282("0x678")](65 + Math[_0xb282("0x416")]((_0xe98c87[_0xb282("0x442")] + _0x5c1379) / (_0xe98c87[_0xb282("0x679")] / _0x18e354[_0xb282("0x67a")]))), _0x8f27ab = "" + (Math[_0xb282("0x416")]((_0xe98c87[_0xb282("0x440")] + _0x10cbb0) / (_0xe98c87["mapSize"] / _0x18e354[_0xb282("0x67b")])) + 1);
    this[_0xb282("0x677")] = _0x3409e4 + _0x8f27ab;
  }, "calculateTargetSector":function(_0x17b06e, _0x44de25) {
    if (!_0xe98c87[_0xb282("0x676")]) {
      return "";
    }
    var _0x417748 = String["fromCharCode"](65 + Math[_0xb282("0x416")]((_0x44de25 + _0xe98c87[_0xb282("0x67c")]) / (_0xe98c87["mapSize"] / _0x18e354[_0xb282("0x67a")]))), _0x3fb62f = "" + (Math["floor"]((_0x17b06e + _0xe98c87[_0xb282("0x67c")]) / (_0xe98c87[_0xb282("0x679")] / _0x18e354[_0xb282("0x67b")])) + 1);
    return _0x417748 + _0x3fb62f;
  }, "updateDeathLocations":function(_0x1faa54, _0x1aa167) {
    _0xe98c87[_0xb282("0x676")] && (this["deathLocations"]["push"]({"x":_0x1faa54 + _0xe98c87[_0xb282("0x441")], "y":_0x1aa167 + _0xe98c87[_0xb282("0x443")]}), 6 == this["deathLocations"][_0xb282("0xc")] && this["deathLocations"][_0xb282("0x66b")](), this[_0xb282("0x477")] = this[_0xb282("0x478")][_0xb282("0xc")] - 1);
  }, "drawMapBorders":function(_0x265e93, _0x94e755, _0x1ec052, _0x518990, _0x287276, _0x326671, _0x10ff2f, _0x47476f) {
    !_0xe98c87["mapOffsetFixed"] || !_0x34bd23[_0xb282("0x67d")] && _0x47476f || (_0x265e93[_0xb282("0x15")] = _0x326671, _0x265e93[_0xb282("0x13")] = _0x10ff2f, _0x265e93[_0xb282("0x1b")](), _0x265e93[_0xb282("0x67e")](_0x94e755, _0x1ec052), _0x265e93[_0xb282("0x67f")](_0x518990, _0x1ec052), _0x265e93["lineTo"](_0x518990, _0x287276), _0x265e93[_0xb282("0x67f")](_0x94e755, _0x287276), _0x265e93[_0xb282("0x1d")](), _0x265e93[_0xb282("0x22")]());
  }, "drawMiniMap":function() {
    if (_0xe98c87[_0xb282("0x676")]) {
      var _0x10cbb0 = _0x18e354["miniMapWidth"], _0x5c1379 = _0x18e354[_0xb282("0x434")], _0x12c494 = _0x10cbb0 + _0x5c1379, _0x33d632 = _0x10cbb0 - 18, _0x2b0162 = _0x5c1379 + 9.5;
      this[_0xb282("0x680")] ? this["miniMapCtx"][_0xb282("0x681")](0, 0, _0x10cbb0, _0x12c494) : (this["miniMap"] = document[_0xb282("0x92")](_0xb282("0x682")), this[_0xb282("0x683")] = this[_0xb282("0x680")][_0xb282("0x3b")]("2d"), this[_0xb282("0x683")]["ogarioCtx"] = !0, this["miniMap"][_0xb282("0x42")] = _0x10cbb0, this["miniMap"]["height"] = _0x12c494), this[_0xb282("0x680")][_0xb282("0x42")] != _0x10cbb0 && (this[_0xb282("0x680")][_0xb282("0x42")] = _0x10cbb0, this[_0xb282("0x680")][_0xb282("0x44")] = 
      _0x12c494);
      var _0x5d9627 = _0x33d632 / _0xe98c87[_0xb282("0x679")], _0x3a2b7f = _0xe98c87[_0xb282("0x441")] + _0xe98c87["mapOffset"], _0x44b6f3 = _0xe98c87[_0xb282("0x443")] + _0xe98c87[_0xb282("0x67c")];
      if (this[_0xb282("0x684")](this[_0xb282("0x683")]), this[_0xb282("0x685")](), this["miniMapCtx"][_0xb282("0x45")] = 1, this[_0xb282("0x683")][_0xb282("0xd")] = _0x18e354[_0xb282("0x686")] + " " + (_0x5c1379 - 4) + "px " + _0x18e354[_0xb282("0x687")], this[_0xb282("0x683")][_0xb282("0x19")] = _0x18e354[_0xb282("0x3b3")], this[_0xb282("0x683")][_0xb282("0x46")](this[_0xb282("0x677")], 10, _0x5c1379), this[_0xb282("0x688")] || this[_0xb282("0x689")](_0x18e354["sectorsX"], _0x18e354[_0xb282("0x67a")], 
      _0x33d632, _0x12c494, _0x2b0162), this[_0xb282("0x683")][_0xb282("0x68a")](), this[_0xb282("0x683")][_0xb282("0x68b")](9.5, _0x2b0162), _0x34bd23[_0xb282("0x464")]) {
        var _0x3a9704 = Math[_0xb282("0x61")]((_0xe98c87[_0xb282("0x440")] + _0x3a2b7f) * _0x5d9627), _0x2ab1cf = Math[_0xb282("0x61")]((_0xe98c87[_0xb282("0x442")] + _0x44b6f3) * _0x5d9627);
        this[_0xb282("0x683")]["lineWidth"] = 1, this[_0xb282("0x683")][_0xb282("0x15")] = _0x18e354[_0xb282("0x3b5")], this[_0xb282("0x683")]["beginPath"](), this[_0xb282("0x683")][_0xb282("0x67e")](_0x3a9704, 0), this[_0xb282("0x683")][_0xb282("0x67f")](_0x3a9704, _0x33d632 - 1), this[_0xb282("0x683")][_0xb282("0x67e")](0, _0x2ab1cf), this["miniMapCtx"][_0xb282("0x67f")](_0x33d632 - 1, _0x2ab1cf), this[_0xb282("0x683")][_0xb282("0x22")]();
      }
      if (this[_0xb282("0x683")][_0xb282("0x1b")](), this[_0xb282("0x683")]["arc"]((_0xe98c87[_0xb282("0x440")] + _0x3a2b7f) * _0x5d9627, (_0xe98c87[_0xb282("0x442")] + _0x44b6f3) * _0x5d9627, _0x18e354[_0xb282("0x3bd")], 0, this[_0xb282("0x8")], !1), this[_0xb282("0x683")][_0xb282("0x1d")](), _0x18e354[_0xb282("0x3be")] > 0 && (this[_0xb282("0x683")][_0xb282("0x13")] = _0x18e354["miniMapMyCellStrokeSize"], this[_0xb282("0x683")]["strokeStyle"] = _0x18e354[_0xb282("0x68c")], this[_0xb282("0x683")]["stroke"]()), 
      this[_0xb282("0x683")][_0xb282("0x19")] = _0x18e354[_0xb282("0x3b4")], this[_0xb282("0x683")][_0xb282("0x1e")](), this[_0xb282("0x68d")][_0xb282("0xc")]) {
        for (var _0x27d330 = 0; _0x27d330 < this[_0xb282("0x68d")][_0xb282("0xc")]; _0x27d330++) {
          this[_0xb282("0x68d")][_0x27d330][_0xb282("0xa")](this[_0xb282("0x683")], _0xe98c87[_0xb282("0x67c")], _0x5d9627, this["privateMiniMap"], this[_0xb282("0x68e")]);
        }
      }
      if (this[_0xb282("0x478")][_0xb282("0xc")] > 0) {
        var _0x3a9704 = Math[_0xb282("0x61")]((this[_0xb282("0x478")][this["lastDeath"]]["x"] + _0xe98c87[_0xb282("0x67c")]) * _0x5d9627), _0x2ab1cf = Math[_0xb282("0x61")]((this[_0xb282("0x478")][this[_0xb282("0x477")]]["y"] + _0xe98c87["mapOffset"]) * _0x5d9627), _0x49849a = Math["max"](_0x18e354[_0xb282("0x3bd")] - 2, 4);
        this[_0xb282("0x683")][_0xb282("0x13")] = 1, this[_0xb282("0x683")][_0xb282("0x15")] = this[_0xb282("0x478")]["length"] - 1 == this["lastDeath"] ? _0x18e354[_0xb282("0x68f")] : "#FFFFFF", this[_0xb282("0x683")]["beginPath"](), this[_0xb282("0x683")][_0xb282("0x67e")](_0x3a9704 - _0x49849a, _0x2ab1cf), this["miniMapCtx"]["lineTo"](_0x3a9704 + _0x49849a, _0x2ab1cf), this[_0xb282("0x683")]["moveTo"](_0x3a9704, _0x2ab1cf - _0x49849a), this[_0xb282("0x683")]["lineTo"](_0x3a9704, _0x2ab1cf + _0x49849a), 
        this[_0xb282("0x683")]["stroke"]();
      }
      this["miniMapCtx"][_0xb282("0x690")]();
    }
  }, "drawMiniMapSectors":function(_0xec1773, _0x18e396, _0x266e07, _0x4cbaed, _0x5888b1) {
    this[_0xb282("0x688")] = document["getElementById"]("minimap-sectors");
    var _0x374f98 = this[_0xb282("0x688")]["getContext"]("2d");
    _0x374f98[_0xb282("0x3c")] = !0, this["miniMapSectors"][_0xb282("0x42")] = _0x266e07, this[_0xb282("0x688")][_0xb282("0x44")] = _0x4cbaed, _0x374f98[_0xb282("0x19")] = _0xb282("0x691"), this[_0xb282("0x692")](_0x374f98, _0x266e07 - 1), this["drawSectors"](_0x374f98, _0xec1773, _0x18e396, .5, _0x5888b1, _0x266e07 - .5, _0x4cbaed - 9.5, _0x18e354[_0xb282("0x693")], _0x18e354[_0xb282("0x693")], 1, !1);
  }, "resetMiniMapSectors":function() {
    this[_0xb282("0x688")] = null;
  }, "drawSectors":function(_0x4b4554, _0x5c00a5, _0x68a0aa, _0x11bc3c, _0x190129, _0x8b1378, _0x550181, _0x5a5d51, _0x345378, _0x30a5d6, _0x45cf30) {
    if (!_0x45cf30 || _0xe98c87[_0xb282("0x676")] && _0x34bd23[_0xb282("0x468")]) {
      var _0x35abac = Math[_0xb282("0x416")]((_0x8b1378 - _0x11bc3c) / _0x5c00a5), _0x28b969 = Math["floor"]((_0x550181 - _0x190129) / _0x68a0aa), _0x64866f = 0, _0x69063c = 0;
      if (_0x4b4554[_0xb282("0x15")] = _0x5a5d51, _0x4b4554[_0xb282("0x19")] = _0x345378, _0x4b4554[_0xb282("0x13")] = _0x30a5d6, _0x45cf30 || !_0x45cf30 && _0x34bd23[_0xb282("0x4e0")]) {
        _0x4b4554["beginPath"]();
        for (var _0x3bca0b = 0; _0x5c00a5 + 1 > _0x3bca0b; _0x3bca0b++) {
          _0x64866f = _0x11bc3c + _0x35abac * _0x3bca0b, _0x4b4554[_0xb282("0x67e")](_0x3bca0b == _0x5c00a5 ? _0x8b1378 : _0x64866f, _0x190129), _0x4b4554[_0xb282("0x67f")](_0x3bca0b == _0x5c00a5 ? _0x8b1378 : _0x64866f, _0x550181);
        }
        for (var _0x3bca0b = 0; _0x68a0aa + 1 > _0x3bca0b; _0x3bca0b++) {
          _0x69063c = _0x190129 + _0x28b969 * _0x3bca0b, _0x4b4554[_0xb282("0x67e")](_0x11bc3c - _0x30a5d6 / 2, _0x3bca0b == _0x68a0aa ? _0x550181 : _0x69063c), _0x4b4554[_0xb282("0x67f")](_0x8b1378 + _0x30a5d6 / 2, _0x3bca0b == _0x68a0aa ? _0x550181 : _0x69063c);
        }
        _0x4b4554[_0xb282("0x22")]();
      } else {
        this[_0xb282("0x694")](_0x4b4554, _0x11bc3c, _0x190129, _0x8b1378, _0x550181, _0x5a5d51, _0x30a5d6, !1);
      }
      if (_0x45cf30) {
        var _0x165b11 = _0x18e354["sectorsFontWeight"] + " " + _0x18e354[_0xb282("0x378")] + _0xb282("0xf") + _0x18e354["sectorsFontFamily"];
      } else {
        var _0x165b11 = _0x18e354[_0xb282("0x686")] + " " + Math[_0xb282("0x416")](.4 * _0x28b969) + _0xb282("0xf") + _0x18e354[_0xb282("0x687")];
      }
      _0x4b4554["font"] = _0x165b11, _0x4b4554[_0xb282("0x11")] = _0xb282("0x12"), _0x4b4554[_0xb282("0x695")] = _0xb282("0x696");
      for (var _0x3bca0b = 0; _0x68a0aa > _0x3bca0b; _0x3bca0b++) {
        for (var _0xb6bfc5 = 0; _0x5c00a5 > _0xb6bfc5; _0xb6bfc5++) {
          var _0x2463ff = String[_0xb282("0x678")](65 + _0x3bca0b) + (_0xb6bfc5 + 1);
          _0x64866f = Math["floor"](_0x11bc3c + _0x35abac / 2 + _0xb6bfc5 * _0x35abac), _0x69063c = Math[_0xb282("0x416")](_0x190129 + _0x28b969 / 2 + _0x3bca0b * _0x28b969), _0x4b4554["fillText"](_0x2463ff, _0x64866f, _0x69063c);
        }
      }
    }
  }, "drawGrid":function(_0x4a9e6b) {
    if (_0x34bd23[_0xb282("0x463")]) {
      var _0x5c1379 = _0xe98c87["innerW"] / _0xe98c87[_0xb282("0x697")], _0x4c156d = _0xe98c87[_0xb282("0xbb")] / _0xe98c87["viewScale"], _0x304ed7 = (-_0xe98c87[_0xb282("0x440")] + _0x5c1379 / 2) % 50, _0x3322b2 = (-_0xe98c87[_0xb282("0x442")] + _0x4c156d / 2) % 50;
      for (_0x4a9e6b["strokeStyle"] = _0x18e354[_0xb282("0x367")], _0x4a9e6b["globalAlpha"] = 1 * _0xe98c87[_0xb282("0x697")], _0x4a9e6b[_0xb282("0x1b")](); _0x5c1379 > _0x304ed7; _0x304ed7 += 50) {
        _0x4a9e6b[_0xb282("0x67e")](_0x304ed7 * _0xe98c87[_0xb282("0x697")] - .5, 0), _0x4a9e6b["lineTo"](_0x304ed7 * _0xe98c87[_0xb282("0x697")] - .5, _0x4c156d * _0xe98c87[_0xb282("0x697")]);
      }
      for (; _0x4c156d > _0x3322b2; _0x3322b2 += 50) {
        _0x4a9e6b[_0xb282("0x67e")](0, _0x3322b2 * _0xe98c87[_0xb282("0x697")] - .5), _0x4a9e6b[_0xb282("0x67f")](_0x5c1379 * _0xe98c87[_0xb282("0x697")], _0x3322b2 * _0xe98c87[_0xb282("0x697")] - .5);
      }
      _0x4a9e6b[_0xb282("0x22")](), _0x4a9e6b[_0xb282("0x45")] = 1;
    }
  }, "drawSelectedCell":function(_0x18da09) {
    _0xe98c87[_0xb282("0x94")] && _0xe98c87[_0xb282("0x4a6")] && _0xe98c87[_0xb282("0x4a6")][_0xb282("0xc")] > 1 && (_0x34bd23[_0xb282("0x455")] || _0x34bd23[_0xb282("0x459")] || _0x34bd23[_0xb282("0x457")] || _0x34bd23[_0xb282("0x581")]) && (_0x18da09[_0xb282("0x19")] = _0xb282("0x691"), _0x18da09[_0xb282("0x45")] = this["selectBiggestCell"] ? .6 : .3, _0x18da09["beginPath"](), _0x18da09[_0xb282("0x1c")](48, 15, 6, 0, this["pi2"], !1), _0x18da09["closePath"](), _0x18da09[_0xb282("0x1e")](), _0x18da09[_0xb282("0x45")] = 
    this[_0xb282("0x44b")] ? .3 : .6, _0x18da09[_0xb282("0x1b")](), _0x18da09[_0xb282("0x1c")](60, 15, 4, 0, this[_0xb282("0x8")], !1), _0x18da09["closePath"](), _0x18da09[_0xb282("0x1e")]());
  }, "dTok":function(_0x5b7634, _0x13ac9e) {
    _0x5b7634[_0xb282("0xd")] = _0x18e354["miniMapFontWeight"] + " " + (_0x18e354[_0xb282("0x434")] - 6) + "px " + _0x18e354[_0xb282("0x687")], _0x5b7634[_0xb282("0x11")] = _0xb282("0x698"), _0x5b7634["textBaseline"] = _0xb282("0xba"), _0x5b7634[_0xb282("0x46")](atob(this[_0xb282("0x699")]), _0x13ac9e, 7);
  }, "drawCircle":function(_0x555893, _0x4bef44, _0x5a9d9c, _0x8dea68, _0x3fb173, _0xebea7d) {
    _0x555893[_0xb282("0x13")] = _0x8dea68, _0x555893[_0xb282("0x45")] = _0x3fb173, _0x555893[_0xb282("0x15")] = _0xebea7d;
    for (var _0x1c36ee = 0; _0x1c36ee < _0x4bef44[_0xb282("0xc")]; _0x1c36ee++) {
      _0x555893["beginPath"](), _0x555893[_0xb282("0x1c")](_0x4bef44[_0x1c36ee]["x"], _0x4bef44[_0x1c36ee]["y"], _0x4bef44[_0x1c36ee][_0xb282("0x5f")] + _0x5a9d9c, 0, this[_0xb282("0x8")], !1), _0x555893[_0xb282("0x1d")](), _0x555893["stroke"]();
    }
    _0x555893[_0xb282("0x45")] = 1;
  }, "drawTeammatesInd":function(_0x47e37a, _0x16f49c, _0x597eea, _0x32d5d7) {
    this[_0xb282("0x69a")] && _0x47e37a[_0xb282("0x6b")](this[_0xb282("0x69a")], _0x16f49c - 45, _0x597eea - _0x32d5d7 - 90);
  }, "drawCellInfo":function(_0x5c8d55, _0x540959, _0x153c75, _0x24aba5, _0x139631, _0x434ebd, _0x458a8a, _0x8304c8, _0x1eecb4, _0x2e8677, _0xf27c07, _0x161bde) {
    if (!_0x434ebd && !_0x1eecb4 && (_0x5c8d55["globalAlpha"] = _0xe98c87[_0xb282("0x45")], _0x34bd23[_0xb282("0x458")] && _0x161bde && !_0x8304c8 && 200 >= _0x139631 && this[_0xb282("0x69b")](_0x5c8d55, _0x153c75, _0x24aba5, _0x139631), !_0x34bd23["noNames"] || _0x34bd23[_0xb282("0x46d")])) {
      var _0x27d2be = !1;
      if (_0x8304c8 || _0x458a8a || (_0x27d2be = this[_0xb282("0x69c")](_0x139631), !(_0x27d2be && _0x34bd23[_0xb282("0x565")] && _0x34bd23[_0xb282("0x569")]))) {
        var _0x3dbcac = null;
        if (!this[_0xb282("0x69d")]["hasOwnProperty"](_0x540959)) {
          return _0x3dbcac = new _0x1044b0(_0x153c75, _0x24aba5, _0x458a8a, _0x8304c8, _0x34bd23[_0xb282("0x49")], _0x34bd23[_0xb282("0x60")]), _0x3dbcac[_0xb282("0x5e")](_0x139631), _0x3dbcac[_0xb282("0x5d")](_0x2e8677), void(this[_0xb282("0x69d")][_0x540959] = _0x3dbcac);
        }
        _0x3dbcac = this[_0xb282("0x69d")][_0x540959], _0x3dbcac[_0xb282("0x5c")](_0x153c75, _0x24aba5, _0x139631, _0x458a8a, _0x8304c8, _0x2e8677), _0x3dbcac[_0xb282("0x3d")](_0x34bd23[_0xb282("0x59")], _0x34bd23[_0xb282("0x5a")], _0x34bd23[_0xb282("0x49")], _0x34bd23[_0xb282("0x60")], _0x34bd23[_0xb282("0x567")], _0x34bd23[_0xb282("0x56b")]), _0x3dbcac[_0xb282("0x69")](_0xe98c87["viewScale"], _0x18e354[_0xb282("0x379")], _0x18e354[_0xb282("0x4f")], _0x18e354[_0xb282("0x50")], _0x18e354["strokeScale"]), 
        _0x5c8d55[_0xb282("0x45")] = _0x18e354[_0xb282("0x37f")], _0x34bd23[_0xb282("0x46b")] || _0x27d2be && _0x34bd23["autoHideNames"] || _0x8304c8 && _0x34bd23[_0xb282("0x566")] || _0x161bde && _0x34bd23[_0xb282("0x46c")] || _0x3dbcac["drawNick"](_0x5c8d55, _0x18e354[_0xb282("0x369")], _0x18e354["namesFontFamily"], _0x18e354[_0xb282("0x69e")], _0x18e354[_0xb282("0x36a")]), !_0x34bd23[_0xb282("0x46d")] || _0x27d2be && _0x34bd23[_0xb282("0x569")] || _0x8304c8 && _0x34bd23[_0xb282("0x69f")] || _0x34bd23["hideEnemiesMass"] && 
        !_0x8304c8 && !_0x458a8a || _0x3dbcac[_0xb282("0x6a0")](_0x5c8d55, _0x18e354[_0xb282("0x36b")], _0x18e354[_0xb282("0x6a1")], _0x18e354[_0xb282("0x6a2")], _0x18e354[_0xb282("0x36c")]);
      }
    }
  }, "preDrawIndicator":function() {
    this["indicator"] = null;
    var _0x10cbb0 = document[_0xb282("0x39")]("canvas");
    _0x10cbb0["width"] = 90, _0x10cbb0[_0xb282("0x44")] = 50;
    var _0xe98c87 = _0x10cbb0["getContext"]("2d");
    _0xe98c87[_0xb282("0x13")] = 2, _0xe98c87[_0xb282("0x19")] = _0x18e354[_0xb282("0x370")], _0xe98c87[_0xb282("0x15")] = "#000000", _0xe98c87["beginPath"](), _0xe98c87[_0xb282("0x67e")](0, 0), _0xe98c87[_0xb282("0x67f")](90, 0), _0xe98c87[_0xb282("0x67f")](45, 50), _0xe98c87[_0xb282("0x1d")](), _0xe98c87[_0xb282("0x1e")](), _0xe98c87[_0xb282("0x22")](), this[_0xb282("0x69a")] = new Image, this[_0xb282("0x69a")]["src"] = _0x10cbb0[_0xb282("0x66e")](), _0x10cbb0 = null;
  }, "preDrawPellet":function() {
    this[_0xb282("0x6a3")] = null;
    var _0x10cbb0 = 10 + _0x18e354[_0xb282("0x37a")], _0xe98c87 = document[_0xb282("0x39")]("canvas");
    _0xe98c87["width"] = 2 * _0x10cbb0, _0xe98c87[_0xb282("0x44")] = 2 * _0x10cbb0;
    var _0x5c1379 = _0xe98c87[_0xb282("0x3b")]("2d");
    _0x5c1379["arc"](_0x10cbb0, _0x10cbb0, _0x10cbb0, 0, this[_0xb282("0x8")], !1), _0x5c1379["fillStyle"] = _0x18e354[_0xb282("0x36f")], _0x5c1379[_0xb282("0x1e")](), this[_0xb282("0x6a3")] = new Image, this[_0xb282("0x6a3")][_0xb282("0x3c9")] = _0xe98c87[_0xb282("0x66e")](), _0xe98c87 = null;
  }, "customDraw":function(_0x54336e) {
    this[_0xb282("0x6a4")]();
    var _0x5c1379 = Math["floor"](_0xe98c87[_0xb282("0x6a5")] - _0xe98c87["mapOffsetX"]), _0x3ee9ea = Math[_0xb282("0x416")](_0xe98c87[_0xb282("0x6a6")] - _0xe98c87[_0xb282("0x443")]), _0x2c18ae = Math[_0xb282("0x416")](_0xe98c87[_0xb282("0x6a7")] - _0xe98c87[_0xb282("0x441")]), _0x25e36b = Math["floor"](_0xe98c87[_0xb282("0x6a8")] - _0xe98c87["mapOffsetY"]), _0x308bf5 = _0x18e354[_0xb282("0x37c")] / 2;
    if (this["drawSectors"](_0x54336e, _0x18e354[_0xb282("0x67b")], _0x18e354[_0xb282("0x67a")], _0x5c1379, _0x3ee9ea, _0x2c18ae, _0x25e36b, _0x18e354["gridColor"], _0x18e354[_0xb282("0x368")], _0x18e354[_0xb282("0x6a9")], !0), this[_0xb282("0x694")](_0x54336e, _0x5c1379 - _0x308bf5, _0x3ee9ea - _0x308bf5, _0x2c18ae + _0x308bf5, _0x25e36b + _0x308bf5, _0x18e354[_0xb282("0x366")], _0x18e354[_0xb282("0x37c")], !0), _0xe98c87[_0xb282("0x6aa")] && _0xe98c87[_0xb282("0x6aa")][_0xb282("0xc")] > 0) {
      _0x54336e[_0xb282("0x1b")]();
      for (var _0x3dac98 = 0; _0x3dac98 < _0xe98c87[_0xb282("0x6aa")][_0xb282("0xc")]; _0x3dac98++) {
        var _0x201637 = _0xe98c87[_0xb282("0x6aa")][_0x3dac98]["x"], _0x3d07f6 = _0xe98c87[_0xb282("0x6aa")][_0x3dac98]["y"];
        _0x54336e[_0xb282("0x67e")](_0x201637, _0x3d07f6), _0x54336e[_0xb282("0x1c")](_0x201637, _0x3d07f6, _0xe98c87["virusesCache"][_0x3dac98]["size"] + 820, 0, this["pi2"], !1);
      }
      _0x54336e[_0xb282("0x19")] = _0x18e354[_0xb282("0x36d")], _0x54336e[_0xb282("0x45")] = .1, _0x54336e[_0xb282("0x1e")](), _0x54336e["globalAlpha"] = 1, _0xe98c87[_0xb282("0x6aa")] = [];
    }
    if (_0xe98c87["foodCache"] && _0xe98c87[_0xb282("0x6ab")][_0xb282("0xc")] > 0) {
      if (_0x34bd23[_0xb282("0x3de")] && this["pellet"]) {
        for (var _0x3dac98 = 0; _0x3dac98 < _0xe98c87[_0xb282("0x6ab")][_0xb282("0xc")]; _0x3dac98++) {
          var _0x201637 = _0xe98c87["foodCache"][_0x3dac98]["x"] - 10 - _0x18e354[_0xb282("0x37a")], _0x3d07f6 = _0xe98c87["foodCache"][_0x3dac98]["y"] - 10 - _0x18e354[_0xb282("0x37a")];
          _0x54336e["drawImage"](this[_0xb282("0x6a3")], _0x201637, _0x3d07f6);
        }
      } else {
        _0x54336e[_0xb282("0x1b")]();
        for (var _0x3dac98 = 0; _0x3dac98 < _0xe98c87["foodCache"]["length"]; _0x3dac98++) {
          var _0x201637 = _0xe98c87[_0xb282("0x6ab")][_0x3dac98]["x"], _0x3d07f6 = _0xe98c87[_0xb282("0x6ab")][_0x3dac98]["y"];
          if (_0x54336e["moveTo"](_0x201637, _0x3d07f6), _0xe98c87[_0xb282("0x697")] < .16) {
            var _0x10edb1 = _0xe98c87[_0xb282("0x6ab")][_0x3dac98][_0xb282("0x5f")] + _0x18e354["foodSize"];
            _0x54336e["rect"](_0x201637 - _0x10edb1, _0x3d07f6 - _0x10edb1, 2 * _0x10edb1, 2 * _0x10edb1);
          } else {
            _0x54336e[_0xb282("0x1c")](_0x201637, _0x3d07f6, _0xe98c87[_0xb282("0x6ab")][_0x3dac98][_0xb282("0x5f")] + _0x18e354[_0xb282("0x37a")], 0, this[_0xb282("0x8")], !1);
          }
        }
        _0x54336e["fillStyle"] = _0x18e354["foodColor"], _0x54336e[_0xb282("0x45")] = 1, _0x54336e[_0xb282("0x1e")]();
      }
      _0xe98c87[_0xb282("0x6ab")] = [];
    }
    if (_0xe98c87[_0xb282("0x94")]) {
      if (_0x34bd23["splitRange"]) {
        if (_0xe98c87[_0xb282("0x6ac")] && _0xe98c87[_0xb282("0x6ac")][_0xb282("0xc")] > 0) {
          _0xe98c87[_0xb282("0x6ac")][_0xb282("0x6ad")](function(_0x136823, _0x26c4ab) {
            return _0x26c4ab[_0xb282("0x5f")] - _0x136823[_0xb282("0x5f")];
          });
          var _0x30a7b8 = this["selectBiggestCell"] ? 0 : _0xe98c87[_0xb282("0x6ac")][_0xb282("0xc")] - 1;
          _0x54336e[_0xb282("0x13")] = 6, _0x54336e["globalAlpha"] = _0x18e354[_0xb282("0x6ae")] ? .7 : .35, _0x54336e[_0xb282("0x15")] = _0x18e354[_0xb282("0x372")], _0x54336e[_0xb282("0x1b")](), _0x54336e["arc"](_0xe98c87["playerCells"][_0x30a7b8]["x"], _0xe98c87["playerCells"][_0x30a7b8]["y"], _0xe98c87[_0xb282("0x6ac")][_0x30a7b8][_0xb282("0x5f")] + 760, 0, this[_0xb282("0x8")], !1), _0x54336e[_0xb282("0x1d")](), _0x54336e["stroke"]();
        }
        _0x54336e[_0xb282("0x45")] = 1, this[_0xb282("0x6af")](_0x54336e, _0xe98c87[_0xb282("0x6b0")], 760, 4, .4, _0xb282("0x6b1"));
      }
      if (_0x34bd23[_0xb282("0x457")]) {
        var _0x72cebb = 14 + 2 / _0xe98c87[_0xb282("0x697")], _0x448863 = 12 + 1 / _0xe98c87[_0xb282("0x697")];
        this[_0xb282("0x6af")](_0x54336e, _0xe98c87[_0xb282("0x6b0")], _0x72cebb, _0x448863, .75, _0xb282("0x6b1")), this["drawCircle"](_0x54336e, _0xe98c87[_0xb282("0x6b2")], _0x72cebb, _0x448863, .75, _0xb282("0x6b3")), this["drawCircle"](_0x54336e, _0xe98c87[_0xb282("0x6b4")], _0x72cebb, _0x448863, .75, _0xb282("0x6b5")), this[_0xb282("0x6af")](_0x54336e, _0xe98c87[_0xb282("0x6b6")], _0x72cebb, _0x448863, .75, _0xb282("0x6b7"));
      }
      if (_0x34bd23[_0xb282("0x57b")] && _0xe98c87[_0xb282("0x95")]) {
        _0xe98c87[_0xb282("0x95")](), _0x54336e[_0xb282("0x13")] = 4, _0x54336e["globalAlpha"] = _0x18e354[_0xb282("0x6ae")] ? .75 : .35, _0x54336e[_0xb282("0x15")] = _0x18e354[_0xb282("0x371")], _0x54336e[_0xb282("0x1b")]();
        for (var _0x3dac98 = 0; _0x3dac98 < _0xe98c87["playerCells"][_0xb282("0xc")]; _0x3dac98++) {
          _0x54336e[_0xb282("0x67e")](_0xe98c87[_0xb282("0x6ac")][_0x3dac98]["x"], _0xe98c87[_0xb282("0x6ac")][_0x3dac98]["y"]), _0x54336e[_0xb282("0x67f")](_0xe98c87["cursorX"], _0xe98c87["cursorY"]);
        }
        _0x54336e["stroke"](), _0x54336e[_0xb282("0x45")] = 1;
      }
    }
    _0xe98c87[_0xb282("0x6ac")] = [], (_0x34bd23["splitRange"] || _0x34bd23[_0xb282("0x457")]) && (_0xe98c87[_0xb282("0x6b0")] = [], _0xe98c87[_0xb282("0x6b2")] = [], _0xe98c87[_0xb282("0x6b4")] = [], _0xe98c87[_0xb282("0x6b6")] = []), this["updateQuest"]();
  }, "setVirusColor":function(_0x2af964) {
    var _0xe98c87 = Math[_0xb282("0x416")](_0x2af964 * _0x2af964 / 100);
    return _0xe98c87 > 183 ? _0xb282("0x6b8") : _0x18e354[_0xb282("0x36d")];
  }, "setVirusStrokeColor":function(_0xfe1e2a) {
    if (_0xe98c87[_0xb282("0x94")] && 0 != _0xe98c87[_0xb282("0x6b9")]) {
      var _0x5c1379 = Math[_0xb282("0x416")](_0xfe1e2a * _0xfe1e2a / 100), _0x4fa469 = _0x5c1379 / (this[_0xb282("0x44b")] ? _0xe98c87[_0xb282("0x6b9")] : _0xe98c87["playerMinMass"]);
      return _0x4fa469 > .76 ? _0xb282("0x6ba") : "#C80000";
    }
    return _0x18e354[_0xb282("0x36e")];
  }, "setOppColor":function(_0x51e97b, _0x14cb6a) {
    if (_0x14cb6a) {
      return _0x3a156f[_0xb282("0x9")];
    }
    var _0x183a8f = Math[_0xb282("0x416")](_0x51e97b * _0x51e97b / 100), _0x2bebb7 = this["selectBiggestCell"] ? _0xe98c87[_0xb282("0x6b9")] : _0xe98c87[_0xb282("0x6bb")], _0x24f499 = _0x183a8f / _0x2bebb7;
    if (_0x24f499 && _0x24f499 > 0) {
      var _0x5c8432 = 1E3 > _0x2bebb7 ? .35 : .38;
      return _0x24f499 > 11 ? _0xb282("0x6bc") : 2.5 > _0x24f499 ? 1.25 > _0x24f499 ? 1.25 > _0x24f499 && _0x24f499 > .75 ? _0xb282("0x6ba") : _0x24f499 > _0x5c8432 ? _0xb282("0x6b5") : "#64FF00" : _0xb282("0x6b3") : _0xb282("0x6b1");
    }
  }, "setAutoHideCellInfo":function(_0x3f5435) {
    return 40 >= _0x3f5435 || _0xe98c87[_0xb282("0x697")] < .5 && 550 > _0x3f5435 && _0x3f5435 < 25 / _0xe98c87[_0xb282("0x697")] ? !0 : !1;
  }, "setParty":function() {
    var _0x10cbb0 = _0x5c1379("#party-token")[_0xb282("0x329")]();
    if (this[_0xb282("0x466")] = _0xe98c87[_0xb282("0x466")] = _0x5c1379(_0xb282("0x5db"))[_0xb282("0x329")](), this[_0xb282("0x471")](), ":party" === this[_0xb282("0x466")] && _0x10cbb0) {
      var _0x4b4af0 = _0x10cbb0;
      -1 != _0x10cbb0[_0xb282("0x34d")]("#") && (_0x10cbb0 = _0x10cbb0[_0xb282("0x447")]("#"), _0x4b4af0 = _0x10cbb0[1]), this[_0xb282("0x662")] !== _0x4b4af0 && (this["partyToken"] = _0x4b4af0, this["flushSkinsMap"](), this[_0xb282("0x6bd")](), this[_0xb282("0x6be")]());
    }
  }, "createParty":function() {
    _0x5c1379(_0xb282("0x6bf"))[_0xb282("0x3c6")]();
  }, "joinParty":function() {
    var _0x10cbb0 = _0x5c1379("#party-token")[_0xb282("0x329")]();
    _0x10cbb0 && (_0x5c1379(_0xb282("0x6c0"))[_0xb282("0x3c6")](), _0x5c1379(".party-token")[_0xb282("0x329")](_0x10cbb0), _0x5c1379(_0xb282("0x6c1"))["click"]());
  }, "leaveParty":function() {
    _0x5c1379(_0xb282("0x6c2"))[_0xb282("0x329")](""), _0x5c1379(_0xb282("0x6c3"))[_0xb282("0x3c6")](), _0x38a8ed("/");
  }, "closeParty":function() {
    _0x5c1379(_0xb282("0x6c2"))[_0xb282("0x329")](""), _0x5c1379(_0xb282("0x6c4"))[_0xb282("0x3c6")](), _0x38a8ed("/");
  }, "flushData":function() {
    this[_0xb282("0x6c5")](), this["flushSkinsMap"](), this[_0xb282("0x6bd")](), this[_0xb282("0x6be")](), _0xe98c87[_0xb282("0x94")] = !1, _0xe98c87[_0xb282("0xa4")] = null;
  }, "flushPartyData":function() {
    this["teamPlayers"] = [], this["parties"] = [], this["lastSentNick"] = "", this[_0xb282("0x6c6")] = null, this[_0xb282("0x6c7")] = "", this[_0xb282("0x6c8")] = "", this[_0xb282("0x6c9")] = "", this[_0xb282("0x6ca")] = "";
  }, "flushCells":function() {
    this[_0xb282("0x69d")] = {};
  }, "flushSkinsMap":function() {
    this[_0xb282("0x671")] = {};
  }, "flushChatData":function() {
    this[_0xb282("0x6cb")] = {};
  }, "getWS":function(_0x1c077a) {
    _0x1c077a && (this["ws"] = _0x1c077a, this[_0xb282("0x6cc")](), this[_0xb282("0x6cd")](), -1 == this["ws"][_0xb282("0x34d")](_0xb282("0x6ce")) && this[_0xb282("0x6cf")]());
  }, "recreateWS":function(_0xbf7dd0) {
    if (!_0xbf7dd0 || !/^[a-zA-Z0-9=+\/]{12,}$/[_0xb282("0x4d9")](_0xbf7dd0)) {
      return null;
    }
    var _0xe98c87 = null, _0x5c1379 = atob(_0xbf7dd0);
    return /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/["test"](_0x5c1379) && (_0xe98c87 = _0xb282("0x6d0") + _0x5c1379["replace"](/\./g, "-")[_0xb282("0x78")](":", _0xb282("0x6d1"))), _0xe98c87;
  }, "createServerToken":function() {
    var _0xe98c87 = this["ws"][_0xb282("0x78")](_0xb282("0x6ce"), "")[_0xb282("0x78")](/-/g, "."), _0x5c1379 = _0xe98c87[_0xb282("0x8c")](/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/);
    if (_0x5c1379) {
      this[_0xb282("0x6d2")] = _0x5c1379[0];
      var _0x23b04a = btoa(this[_0xb282("0x6d2")]);
      this[_0xb282("0x6d3")] !== _0x23b04a && (this[_0xb282("0x6d3")] = _0x23b04a, this[_0xb282("0x6d4")](), this[_0xb282("0x6d5")]()), this[_0xb282("0x662")] = "";
      var _0xfa9210 = _0xe98c87[_0xb282("0x8c")](/party_id=([A-Z0-9]{6})/);
      _0xfa9210 && (this[_0xb282("0x662")] = _0xfa9210[1], _0x38a8ed("/#" + _0x10cbb0[_0xb282("0x6d6")](this[_0xb282("0x662")])));
    }
  }, "updateServerInfo":function() {
    _0x5c1379(_0xb282("0x5ed"))[_0xb282("0x329")](this["ws"]), _0x5c1379("#server-token")["val"](this[_0xb282("0x6d3")]), _0x5c1379(_0xb282("0x6c2"))["val"](this[_0xb282("0x662")]);
  }, "gameServerConnect":function(_0x55f21d) {
    _0x55f21d && (this[_0xb282("0x652")] = !0, _0x10cbb0[_0xb282("0x75")] && _0x10cbb0["core"][_0xb282("0xae")] && _0x10cbb0["core"][_0xb282("0xae")](_0x55f21d));
  }, "gameServerReconnect":function() {
    _0x10cbb0["MC"] && _0x10cbb0["MC"]["reconnect"] && _0x10cbb0["MC"]["reconnect"]();
  }, "gameServerJoin":function(_0x3c9722) {
    var _0xe98c87 = this[_0xb282("0x6d7")](_0x3c9722);
    _0xe98c87 && (this[_0xb282("0x652")] = !0, this[_0xb282("0x47d")](_0xe98c87));
  }, "connect":function() {
    this[_0xb282("0x6cf")](), this[_0xb282("0x6d4")](), this["setParty"](), console[_0xb282("0x6d8")](_0xb282("0x6d9")), this["socket"] = new WebSocket(this[_0xb282("0x6da")] && this[_0xb282("0x6db")] ? this["privateIP"] : this[_0xb282("0x6dc")]), this[_0xb282("0x6dd")][_0xb282("0x6de")] = !0, this[_0xb282("0x6dd")]["binaryType"] = _0xb282("0x6df");
    var _0x10cbb0 = this;
    this[_0xb282("0x6dd")][_0xb282("0x6e0")] = function() {
      console[_0xb282("0x6d8")](_0xb282("0x6e1"));
      var _0xe98c87 = _0x10cbb0[_0xb282("0x6e2")](3);
      _0xe98c87[_0xb282("0x6e3")](0, 0), _0xe98c87[_0xb282("0x6e4")](1, 330, !0), _0x10cbb0[_0xb282("0x6e5")](_0xe98c87), _0x10cbb0[_0xb282("0x658")]();
    }, this[_0xb282("0x6dd")][_0xb282("0x6e6")] = function(_0x564cdd) {
      _0x10cbb0[_0xb282("0x6e7")](_0x564cdd);
    }, this[_0xb282("0x6dd")]["onclose"] = function() {
      _0x10cbb0[_0xb282("0x6d4")](), console["log"](_0xb282("0x6e8"));
    }, this[_0xb282("0x6dd")][_0xb282("0x6e9")] = function() {
      _0x10cbb0[_0xb282("0x6d4")](), console[_0xb282("0x6d8")](_0xb282("0x6ea"));
    };
  }, "closeConnection":function() {
    if (this[_0xb282("0x6dd")]) {
      this["socket"][_0xb282("0x6e6")] = null;
      try {
        this[_0xb282("0x6dd")][_0xb282("0x5b1")]();
      } catch (_0xd12c8e) {
      }
      this[_0xb282("0x6dd")] = null;
    }
  }, "reconnect":function() {
    this[_0xb282("0x63d")]();
    var _0x10cbb0 = this;
    setTimeout(function() {
      _0x10cbb0[_0xb282("0xae")]();
    }, 1E3);
  }, "switchServerMode":function() {
    this[_0xb282("0x6db")] && (this[_0xb282("0x6da")] = !this[_0xb282("0x6da")], this[_0xb282("0x657")]() && (this[_0xb282("0x6cf")](), toastr[_0xb282("0x4ca")](_0xb282("0x6eb"))), this[_0xb282("0x6da")] ? (toastr[_0xb282("0x4c9")]("Prze\u0142\u0105czono na serwer prywatny!"), _0x5c1379(_0xb282("0x6ec"))[_0xb282("0x9a")]()) : (toastr[_0xb282("0x4c9")](_0xb282("0x6ed")), _0x5c1379(_0xb282("0x6ee"))[_0xb282("0x4f4")](), _0x5c1379(_0xb282("0x6ec"))[_0xb282("0x452")]()), this[_0xb282("0x654")](), _0xe98c87[_0xb282("0x94")] && 
    this[_0xb282("0xa3")]());
  }, "isSocketOpen":function() {
    return null != this[_0xb282("0x6dd")] && this["socket"][_0xb282("0x6ef")] == this[_0xb282("0x6dd")][_0xb282("0x6f0")];
  }, "createView":function(_0x333eef) {
    return new DataView(new ArrayBuffer(_0x333eef));
  }, "strToBuff":function(_0x406f92, _0x1ff9fe) {
    var _0x5c1379 = this[_0xb282("0x6e2")](1 + 2 * _0x1ff9fe["length"]);
    _0x5c1379[_0xb282("0x6e3")](0, _0x406f92);
    for (var _0x36a154 = 0; _0x36a154 < _0x1ff9fe[_0xb282("0xc")]; _0x36a154++) {
      _0x5c1379[_0xb282("0x6e4")](1 + 2 * _0x36a154, _0x1ff9fe[_0xb282("0x6f1")](_0x36a154), !0);
    }
    return _0x5c1379;
  }, "sendBuffer":function(_0x4b7309) {
    this[_0xb282("0x6dd")][_0xb282("0x6f2")](_0x4b7309[_0xb282("0x6f3")]);
  }, "handleMessage":function(_0x559cf0) {
    this[_0xb282("0x6f4")](new DataView(_0x559cf0[_0xb282("0x6f5")]));
  }, "readMessage":function(_0x2d741d) {
    switch(_0x2d741d["getUint8"](0)) {
      case 0:
        this[_0xb282("0x6f6")] = _0x2d741d[_0xb282("0x6f7")](1, !0);
        break;
      case 1:
        this[_0xb282("0x6f8")]();
        break;
      case 20:
        this["updateTeamPlayer"](_0x2d741d);
        break;
      case 30:
        this[_0xb282("0x6f9")](_0x2d741d);
        break;
      case 96:
        this[_0xb282("0x6fa")](_0x2d741d), this[_0xb282("0x6fb")]();
        break;
      case 100:
        this[_0xb282("0x6fc")](_0x2d741d);
    }
  }, "sendPlayerState":function(_0x1224f2) {
    if (this[_0xb282("0x657")]()) {
      var _0xe98c87 = this[_0xb282("0x6e2")](1);
      _0xe98c87["setUint8"](0, _0x1224f2), this[_0xb282("0x6e5")](_0xe98c87);
    }
  }, "sendPlayerSpawn":function() {
    this[_0xb282("0x6fd")](1);
  }, "sendPlayerDeath":function() {
    this[_0xb282("0x6fd")](2);
  }, "sendPlayerJoin":function() {
    this[_0xb282("0x6fd")](3);
  }, "sendPlayerData":function(_0x222e24, _0x4c8d49, _0x176c9b) {
    (null === this[_0x4c8d49] || this[_0x4c8d49] !== _0x176c9b) && this[_0xb282("0x657")]() && (this["sendBuffer"](this[_0xb282("0x6fe")](_0x222e24, _0x176c9b)), this[_0x4c8d49] = _0x176c9b);
  }, "sendPlayerNick":function() {
    this[_0xb282("0x6ff")](10, _0xb282("0x700"), _0x3a156f[_0xb282("0x0")]);
  }, "sendPlayerClanTag":function() {
    this[_0xb282("0x6ff")](11, _0xb282("0x6c6"), _0x3a156f[_0xb282("0x4")]);
  }, "sendPlayerSkinURL":function() {
    this[_0xb282("0x6ff")](12, _0xb282("0x6c7"), _0x3a156f[_0xb282("0x4ec")]);
  }, "sendPlayerCustomColor":function() {
    this[_0xb282("0x6ff")](13, _0xb282("0x6c8"), _0x3a156f[_0xb282("0x9")]);
  }, "sendPlayerColor":function() {
    this[_0xb282("0x657")]() && _0xe98c87[_0xb282("0xa4")] && this[_0xb282("0x6e5")](this[_0xb282("0x6fe")](14, _0xe98c87[_0xb282("0xa4")]));
  }, "sendPartyToken":function() {
    this[_0xb282("0x63d")](), this[_0xb282("0x6ff")](15, _0xb282("0x6c9"), this[_0xb282("0x662")]);
  }, "sendServerToken":function() {
    this["sendPlayerData"](16, _0xb282("0x6ca"), this["serverToken"]);
  }, "sendServerJoin":function() {
    this["sendServerToken"](), this[_0xb282("0x65f")]();
  }, "sendServerRegion":function() {
    if (this[_0xb282("0x5da")]) {
      var _0x10cbb0 = this["region"][_0xb282("0x447")]("-");
      this[_0xb282("0x657")]() && this[_0xb282("0x6e5")](this[_0xb282("0x6fe")](17, _0x10cbb0[0]));
    }
  }, "sendServerGameMode":function() {
    var _0x10cbb0 = _0xb282("0x701");
    switch(this[_0xb282("0x466")]) {
      case _0xb282("0x465"):
        _0x10cbb0 = "TMS";
        break;
      case _0xb282("0x702"):
        _0x10cbb0 = _0xb282("0x703");
        break;
      case _0xb282("0x5dc"):
        _0x10cbb0 = _0xb282("0x704");
    }
    this[_0xb282("0x657")]() && this[_0xb282("0x6e5")](this[_0xb282("0x6fe")](18, _0x10cbb0));
  }, "sendServerData":function() {
    return this[_0xb282("0x652")] ? void(this[_0xb282("0x652")] = !1) : (this[_0xb282("0x5da")] = _0x5c1379(_0xb282("0x525"))[_0xb282("0x329")](), this[_0xb282("0x466")] = _0x5c1379(_0xb282("0x5db"))[_0xb282("0x329")](), this[_0xb282("0x705")](), void this[_0xb282("0x706")]());
  }, "sendPartyData":function() {
    this[_0xb282("0x707")](), this["sendPartyToken"](), this[_0xb282("0x708")](), this[_0xb282("0x709")](), this[_0xb282("0x70a")]();
  }, "sendPlayerUpdate":function() {
    function _0x4d436b(_0x35d4ff) {
      for (var _0xe98c87 = 0; _0xe98c87 < _0x35d4ff[_0xb282("0xc")]; _0xe98c87++) {
        _0x214b5b[_0xb282("0x6e4")](_0x5844a7, _0x35d4ff[_0xb282("0x6f1")](_0xe98c87), !0), _0x5844a7 += 2;
      }
      _0x214b5b[_0xb282("0x6e4")](_0x5844a7, 0, !0), _0x5844a7 += 2;
    }
    if (this[_0xb282("0x657")]() && _0xe98c87[_0xb282("0x94")] && this[_0xb282("0x6f6")] && _0xe98c87[_0xb282("0xa4")]) {
      var _0x5c1379 = 41;
      _0x5c1379 += 2 * _0x3a156f["nick"]["length"], _0x5c1379 += 2 * _0x3a156f["skinURL"]["length"];
      var _0x214b5b = this[_0xb282("0x6e2")](_0x5c1379);
      _0x214b5b[_0xb282("0x6e3")](0, 20), _0x214b5b[_0xb282("0x70b")](1, this["playerID"], !0);
      var _0x5844a7 = 5;
      _0x4d436b(_0x3a156f[_0xb282("0x0")]), _0x4d436b(_0x3a156f[_0xb282("0x4ec")]), _0x4d436b(_0x3a156f[_0xb282("0x9")]), _0x4d436b(_0xe98c87[_0xb282("0xa4")]), this["sendBuffer"](_0x214b5b);
    }
  }, "sendPlayerPosition":function() {
    if (this[_0xb282("0x657")]() && _0xe98c87[_0xb282("0x94")] && this[_0xb282("0x6f6")]) {
      var _0x10cbb0 = this[_0xb282("0x6e2")](17);
      _0x10cbb0["setUint8"](0, 30), _0x10cbb0[_0xb282("0x70b")](1, this[_0xb282("0x6f6")], !0), _0x10cbb0[_0xb282("0x70c")](5, this["getPlayerX"](), !0), _0x10cbb0["setInt32"](9, this[_0xb282("0x70d")](), !0), void 0 !== _0xe98c87[_0xb282("0x49f")] ? _0x10cbb0[_0xb282("0x70b")](13, _0xe98c87[_0xb282("0x49f")], !0) : _0x10cbb0[_0xb282("0x70b")](13, this[_0xb282("0x49f")], !0), this[_0xb282("0x6e5")](_0x10cbb0);
    }
  }, "checkPlayerID":function(_0x1fcecb) {
    if (_0x1fcecb) {
      for (var _0xe98c87 = 0; _0xe98c87 < this[_0xb282("0x68d")][_0xb282("0xc")]; _0xe98c87++) {
        if (this[_0xb282("0x68d")][_0xe98c87]["id"] == _0x1fcecb) {
          return _0xe98c87;
        }
      }
    }
    return null;
  }, "updateTeamPlayer":function(_0x33ed7e) {
    function _0xea5b4a() {
      for (var _0xea5b4a = "";;) {
        var _0x5c1379 = _0x33ed7e[_0xb282("0x70e")](_0x2f903c, !0);
        if (0 == _0x5c1379) {
          break;
        }
        _0xea5b4a += String[_0xb282("0x678")](_0x5c1379), _0x2f903c += 2;
      }
      return _0x2f903c += 2, _0xea5b4a;
    }
    var _0x5c1379 = _0x33ed7e[_0xb282("0x6f7")](1, !0), _0x2f903c = 5, _0xdc8d63 = _0xea5b4a(), _0x463da3 = this["checkSkinURL"](_0xea5b4a()), _0x4a9205 = _0xea5b4a(), _0xae6d3d = _0xea5b4a(), _0x1e27f0 = this["checkPlayerID"](_0x5c1379);
    if (null !== _0x1e27f0) {
      this[_0xb282("0x68d")][_0x1e27f0][_0xb282("0x0")] = _0xdc8d63, this[_0xb282("0x68d")][_0x1e27f0][_0xb282("0x1")] = _0xdc8d63 + _0xae6d3d, this[_0xb282("0x68d")][_0x1e27f0][_0xb282("0x4ec")] = _0x463da3, this[_0xb282("0x68d")][_0x1e27f0][_0xb282("0x3e")](_0x4a9205);
    } else {
      var _0x559b2f = new _0x39fec6(_0x5c1379, _0xdc8d63, _0xdc8d63 + _0xae6d3d, _0x463da3);
      _0x559b2f[_0xb282("0x3e")](_0x4a9205), this[_0xb282("0x68d")][_0xb282("0x4e8")](_0x559b2f);
    }
    this["cacheCustomSkin"](_0xdc8d63 + _0xae6d3d, _0x463da3);
  }, "updateTeamPlayerPosition":function(_0x43411f) {
    var _0xe98c87 = _0x43411f[_0xb282("0x6f7")](1, !0), _0x5c1379 = this["checkPlayerID"](_0xe98c87);
    if (null !== _0x5c1379) {
      var _0xf1d13f = _0x43411f[_0xb282("0x70f")](5, !0), _0x4c8388 = _0x43411f[_0xb282("0x70f")](9, !0), _0xa36c73 = _0x43411f[_0xb282("0x6f7")](13, !0);
      if (_0xa36c73 > 36E4) {
        return;
      }
      var _0x5c2bf8 = this["teamPlayers"][_0x5c1379];
      _0x5c2bf8["x"] = _0xf1d13f, _0x5c2bf8["y"] = _0x4c8388, _0x5c2bf8[_0xb282("0x3")] = _0xa36c73, _0x5c2bf8[_0xb282("0x6")] = !0, _0x5c2bf8[_0xb282("0x7")] = Date[_0xb282("0x43e")](), this[_0xb282("0x710")] && this[_0xb282("0x68e")] && _0xe98c87 == this["targetID"] && this["updateTarget"](_0x5c2bf8[_0xb282("0x0")], _0x5c2bf8[_0xb282("0x4ec")], _0xf1d13f, _0x4c8388, _0xa36c73);
    }
  }, "updateTeamPlayers":function() {
    this[_0xb282("0x711")](), this["chatUsers"] = {}, this[_0xb282("0x4b6")] = [];
    for (var _0x10cbb0 = 0; _0x10cbb0 < this["teamPlayers"][_0xb282("0xc")]; _0x10cbb0++) {
      var _0xe98c87 = this[_0xb282("0x68d")][_0x10cbb0];
      (_0xe98c87[_0xb282("0x6")] && Date[_0xb282("0x43e")]() - _0xe98c87[_0xb282("0x7")] >= 2E3 || 0 == _0xe98c87[_0xb282("0x3")]) && (_0xe98c87[_0xb282("0x6")] = !1, this[_0xb282("0x710")] && this[_0xb282("0x68e")] && _0xe98c87["id"] == this[_0xb282("0x68e")] && this[_0xb282("0x712")](2)), _0xe98c87[_0xb282("0x6")] && (this[_0xb282("0x4b6")][_0xb282("0x4e8")]({"id":_0xe98c87["id"], "nick":_0xe98c87[_0xb282("0x0")], "mass":_0xe98c87[_0xb282("0x3")]}), this[_0xb282("0x713")](_0xe98c87["id"]) || this["addChatUser"](_0xe98c87["id"], 
      _0xe98c87[_0xb282("0x0")]));
    }
    this[_0xb282("0x4b6")]["sort"](function(_0x333dde, _0xd74be7) {
      return _0xd74be7[_0xb282("0x3")] - _0x333dde[_0xb282("0x3")];
    }), this[_0xb282("0x714")]();
  }, "updateParties":function(_0x58e518) {
    this[_0xb282("0x4b0")] = [];
    for (var _0xe98c87 = _0x58e518[_0xb282("0x715")](1), _0x5c1379 = 2, _0x547f36 = 0; _0xe98c87 > _0x547f36; _0x547f36++) {
      for (var _0x6d9bf7 = "";;) {
        var _0x5e8f00 = _0x58e518[_0xb282("0x70e")](_0x5c1379, !0);
        if (0 == _0x5e8f00) {
          break;
        }
        _0x6d9bf7 += String["fromCharCode"](_0x5e8f00), _0x5c1379 += 2;
      }
      _0x5c1379 += 2, this[_0xb282("0x4b0")][_0xb282("0x4e8")](_0x6d9bf7);
    }
  }, "readChatMessage":function(_0x28d5a8) {
    if (!_0x34bd23[_0xb282("0x4cc")]) {
      var _0xe98c87 = (new Date)[_0xb282("0x716")]()[_0xb282("0x78")](/^(\d{2}:\d{2}).*/, "$1"), _0x5c1379 = _0x28d5a8[_0xb282("0x715")](1), _0x2bc048 = _0x28d5a8[_0xb282("0x6f7")](2, !0), _0x4dfe63 = _0x28d5a8[_0xb282("0x6f7")](6, !0);
      if (!(this[_0xb282("0x713")](_0x2bc048) || 0 != _0x4dfe63 && _0x4dfe63 != this[_0xb282("0x6f6")] && _0x2bc048 != this[_0xb282("0x6f6")])) {
        for (var _0x377685 = "", _0xf9f18 = 10; _0xf9f18 < _0x28d5a8[_0xb282("0x717")]; _0xf9f18 += 2) {
          var _0x44d813 = _0x28d5a8[_0xb282("0x70e")](_0xf9f18, !0);
          if (0 == _0x44d813) {
            break;
          }
          _0x377685 += String[_0xb282("0x678")](_0x44d813);
        }
        this[_0xb282("0x718")](_0xe98c87, _0x5c1379, _0x2bc048, _0x377685);
      }
    }
  }, "sendChatMessage":function(_0xab18b7, _0x489255) {
    if (Date[_0xb282("0x43e")]() - this[_0xb282("0x719")] >= 500 && 0 != _0x489255[_0xb282("0xc")] && 0 != _0x3a156f["nick"][_0xb282("0xc")] && this[_0xb282("0x657")]()) {
      var _0x489255 = _0x3a156f[_0xb282("0x0")] + ": " + _0x489255, _0x5c1379 = this[_0xb282("0x6e2")](10 + 2 * _0x489255[_0xb282("0xc")]);
      _0x5c1379[_0xb282("0x6e3")](0, 100), _0x5c1379[_0xb282("0x6e3")](1, _0xab18b7), _0x5c1379["setUint32"](2, this[_0xb282("0x6f6")], !0), _0x5c1379[_0xb282("0x70b")](6, 0, !0);
      for (var _0x2f6a71 = 0; _0x2f6a71 < _0x489255[_0xb282("0xc")]; _0x2f6a71++) {
        _0x5c1379[_0xb282("0x6e4")](10 + 2 * _0x2f6a71, _0x489255[_0xb282("0x6f1")](_0x2f6a71), !0);
      }
      this[_0xb282("0x6e5")](_0x5c1379), this[_0xb282("0x719")] = Date[_0xb282("0x43e")]();
    }
  }, "prepareCommand":function(_0x341fae) {
    var _0xe98c87 = _0x341fae[_0xb282("0x78")]("%currentSector%", this["currentSector"]);
    return _0xe98c87;
  }, "sendCommand":function(_0x5372c5) {
    var _0xe98c87 = this["prepareCommand"](_0x46d51d[_0xb282("0x71a") + _0x5372c5]);
    this[_0xb282("0x4d2")](102, _0xe98c87);
  }, "addChatUser":function(_0x56863c, _0x3c2de2) {
    this[_0xb282("0x6cb")][_0x56863c] = _0x3c2de2;
  }, "getChatUserNick":function(_0x52c2f5) {
    return this[_0xb282("0x6cb")][_0xb282("0x31b")](_0x52c2f5) ? this[_0xb282("0x6cb")][_0x52c2f5] : "";
  }, "muteChatUser":function(_0xc184f3) {
    if (_0xc184f3 && !this["isChatUserMuted"](_0xc184f3)) {
      var _0xe98c87 = this["getChatUserNick"](_0xc184f3);
      this[_0xb282("0x71b")][_0xc184f3] = _0xe98c87, this["chatMutedUserIDs"][_0xb282("0x4e8")](_0xc184f3), toastr[_0xb282("0x4ca")](_0x33cd4b["userMuted"][_0xb282("0x78")](_0xb282("0x71c"), _0xb282("0x71d") + this[_0xb282("0x4bc")](_0xe98c87) + _0xb282("0x71e")) + _0xb282("0x71f") + _0xc184f3 + _0xb282("0x720") + _0x33cd4b[_0xb282("0x610")] + "</button>");
    }
  }, "unmuteChatUser":function(_0x37040d) {
    if (_0x37040d) {
      var _0xe98c87 = this["chatMutedUserIDs"]["indexOf"](_0x37040d);
      -1 != _0xe98c87 && (this[_0xb282("0x721")][_0xb282("0x722")](_0xe98c87, 1), toastr[_0xb282("0x4c9")](_0x33cd4b[_0xb282("0x723")]["replace"](_0xb282("0x71c"), "<strong>" + this[_0xb282("0x4bc")](this[_0xb282("0x71b")][_0x37040d]) + _0xb282("0x71e"))), delete this[_0xb282("0x71b")][_0x37040d]);
    }
  }, "isChatUserMuted":function(_0x1a53bb) {
    return -1 != this[_0xb282("0x721")]["indexOf"](_0x1a53bb) ? !0 : !1;
  }, "parseMessage":function(_0x61d541) {
    var _0xe98c87 = /\[img\](https?:\/\/i\.(?:imgur|hizliresim)\.com\/\w{6,8}\.(?:jpg|jpeg|png|gif)\??\d*)\[\/img\]/i;
    if (_0xe98c87[_0xb282("0x4d9")](_0x61d541)) {
      if (_0x34bd23[_0xb282("0x577")]) {
        var _0x5c1379 = _0x61d541[_0xb282("0x8c")](_0xe98c87);
        return _0xb282("0x724") + _0x5c1379[1] + '" style="width:100%;border:none;">';
      }
      return "";
    }
    var _0x3aa6a9 = /\[yt\]([\w-]{11})\[\/yt\]/i;
    if (_0x3aa6a9[_0xb282("0x4d9")](_0x61d541)) {
      if (_0x34bd23[_0xb282("0x578")]) {
        var _0x32b227 = _0x61d541["match"](_0x3aa6a9);
        return _0xb282("0x725") + _0x32b227[1] + _0xb282("0x726");
      }
      return "";
    }
    var _0xa114ce = this["escapeHTML"](_0x61d541);
    return _0x34bd23[_0xb282("0x576")] && (_0xa114ce = this[_0xb282("0x727")](_0xa114ce)), _0xa114ce;
  }, "parseEmoticons":function(_0x5c0ee8) {
    return (_0x5c0ee8 + "")[_0xb282("0x78")](/\&lt\;3/g, "<3")[_0xb282("0x78")](/(O\:\)|3\:\)|8\=\)|\:\)|\;\)|\=\)|\:D|X\-D|\=D|\:\(|\;\(|\:P|\;P|\:\*|\$\)|\<3|\:o|\(\:\||\:\||\:\\|\:\@|\|\-\)|\^\_\^|\-\_\-|\$\_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\))/g, function(_0x293c6f) {
      return _0xb282("0x5ad") + _0x31a06d[_0x293c6f] + _0xb282("0x5ae") + _0x293c6f + '" class="emoticon">';
    });
  }, "displayChatMessage":function(_0x282950, _0x40f403, _0x841436, _0x5880d1) {
    if (0 != _0x5880d1[_0xb282("0xc")]) {
      var _0x1c0721 = "" + _0x5880d1[_0xb282("0x447")](": ", 1), _0x4c8b55 = this[_0xb282("0x728")](_0x5880d1[_0xb282("0x78")](_0x1c0721 + ": ", ""));
      if (0 != _0x1c0721["length"] && _0x1c0721[_0xb282("0xc")] <= 15 && 0 != _0x4c8b55[_0xb282("0xc")]) {
        var _0x493808 = "";
        if (0 != _0x841436 && _0x841436 != this["playerID"] && (this[_0xb282("0x729")](_0x841436, _0x1c0721), _0x493808 = _0xb282("0x4b9") + _0x841436 + '" class="mute-user icon-user-minus"></a> '), _0x1c0721 = this[_0xb282("0x4bc")](_0x1c0721), 101 == _0x40f403) {
          if (_0x34bd23[_0xb282("0x4d0")]) {
            return _0x5c1379("#chat-box")[_0xb282("0x323")](_0xb282("0x72a") + _0x282950 + _0xb282("0x72b") + _0x493808 + _0xb282("0x72c") + _0x1c0721 + _0xb282("0x4c1") + _0x4c8b55 + _0xb282("0x72d")), _0x5c1379(_0xb282("0x4d1"))[_0xb282("0x5f6")](_0xb282("0x5c")), _0x5c1379(_0xb282("0x4d1"))["animate"]({"scrollTop":_0x5c1379(_0xb282("0x4d1"))[_0xb282("0x483")](_0xb282("0x72e"))}, 500), void(_0x34bd23[_0xb282("0x4e1")] && this[_0xb282("0x72f")](this["messageSound"]));
          }
          _0x34bd23[_0xb282("0x4cb")] || (toastr["success"]('<span class="message-nick">' + _0x1c0721 + _0xb282("0x4c1") + _0x4c8b55 + _0xb282("0x730") + _0x493808), _0x34bd23[_0xb282("0x4e1")] && this[_0xb282("0x72f")](this["messageSound"])), this[_0xb282("0x4c0")][_0xb282("0x4e8")]({"nick":_0x1c0721, "message":_0x4c8b55}), this[_0xb282("0x4c0")][_0xb282("0xc")] > 15 && this[_0xb282("0x4c0")][_0xb282("0x66b")]();
        } else {
          if (102 == _0x40f403) {
            if (_0x34bd23["showChatBox"]) {
              return _0x5c1379(_0xb282("0x4d1"))[_0xb282("0x323")](_0xb282("0x731") + _0x282950 + _0xb282("0x72b") + _0x493808 + _0xb282("0x732") + _0x1c0721 + _0xb282("0x733") + _0x4c8b55 + _0xb282("0x72d")), _0x5c1379(_0xb282("0x4d1"))[_0xb282("0x5f6")](_0xb282("0x5c")), _0x5c1379(_0xb282("0x4d1"))[_0xb282("0x734")]({"scrollTop":_0x5c1379(_0xb282("0x4d1"))[_0xb282("0x483")](_0xb282("0x72e"))}, 500), void(_0x34bd23["chatSounds"] && this["playSound"](this[_0xb282("0x5a1")]));
            }
            _0x34bd23["hideChat"] || (toastr[_0xb282("0x735")](_0xb282("0x732") + _0x1c0721 + _0xb282("0x733") + _0x4c8b55 + _0xb282("0x730") + _0x493808), _0x34bd23["chatSounds"] && this[_0xb282("0x72f")](this[_0xb282("0x5a1")]));
          } else {
            _0x5c1379(_0xb282("0x4c5"))[_0xb282("0x323")](_0x5880d1);
          }
        }
      }
    }
  }, "displayUserList":function(_0x4321ef, _0x54ec37, _0xd5000c, _0x4e09d3, _0x19478b) {
    var _0x5e94c6 = "";
    if (Object[_0xb282("0x736")](_0x4321ef)[_0xb282("0xc")]) {
      _0x5e94c6 += _0xb282("0x737");
      for (var _0x1f5e2f in _0x4321ef) {
        _0x4321ef["hasOwnProperty"](_0x1f5e2f) && (_0x5e94c6 += _0xb282("0x738") + this[_0xb282("0x4bc")](_0x4321ef[_0x1f5e2f]) + _0xb282("0x739") + _0x1f5e2f + _0xb282("0x73a") + _0xd5000c + '">' + _0x4e09d3 + _0xb282("0x73b"));
      }
      _0x5e94c6 += _0xb282("0x73c");
    } else {
      _0x5e94c6 += _0x33cd4b[_0xb282("0x3e3")];
    }
    toastr[_0x19478b](_0x5e94c6, _0x54ec37, {"closeButton":!0, "tapToDismiss":!1});
  }, "displayChatActiveUsers":function() {
    this[_0xb282("0x73d")](this[_0xb282("0x6cb")], _0x33cd4b["activeUsers"], _0xb282("0x60e"), _0x33cd4b[_0xb282("0x612")], _0xb282("0x4c9"));
  }, "displayChatMutedUsers":function() {
    this[_0xb282("0x73d")](this[_0xb282("0x71b")], _0x33cd4b[_0xb282("0x73e")], _0xb282("0x60f"), _0x33cd4b[_0xb282("0x610")], "error");
  }, "preloadChatSounds":function() {
    this["setMessageSound"](), this["setCommandSound"]();
  }, "setChatSoundsBtn":function() {
    _0x34bd23[_0xb282("0x4e1")] ? _0x5c1379(".chat-sound-notifications")[_0xb282("0x48d")](_0xb282("0x73f"))["addClass"](_0xb282("0x740")) : _0x5c1379(_0xb282("0x741"))[_0xb282("0x48d")](_0xb282("0x740"))[_0xb282("0x3cc")](_0xb282("0x73f"));
  }, "setMessageSound":function() {
    this["messageSound"] = this[_0xb282("0x742")](_0x34bd23[_0xb282("0x743")]);
  }, "setCommandSound":function() {
    this[_0xb282("0x5a1")] = this[_0xb282("0x742")](_0x34bd23["commandSound"]);
  }, "setSound":function(_0x2ce9e0) {
    return _0x2ce9e0 ? new Audio(_0x2ce9e0) : null;
  }, "playSound":function(_0x37a393) {
    _0x37a393 && _0x37a393["play"] && (_0x37a393["pause"](), _0x37a393[_0xb282("0x744")] = 0, _0x37a393[_0xb282("0x94")]());
  }, "setTargeting":function() {
    this[_0xb282("0x68e")] && (this[_0xb282("0x710")] = !this["targeting"], _0xe98c87[_0xb282("0x710")] = this[_0xb282("0x710")], this[_0xb282("0x745")]());
  }, "setTargetingInfo":function() {
    this[_0xb282("0x710")] ? (_0x5c1379(_0xb282("0x602"))["addClass"](_0xb282("0x3cb")), _0x5c1379("#target-status")[_0xb282("0x9a")](), 2 != this[_0xb282("0x746")] && _0x5c1379(_0xb282("0x747"))[_0xb282("0x9a")]()) : (_0x5c1379(_0xb282("0x602"))["removeClass"](_0xb282("0x3cb")), _0x5c1379(_0xb282("0x748"))[_0xb282("0x452")]());
  }, "cancelTargeting":function() {
    this["setTargetStatus"](0);
  }, "setPrivateMiniMap":function() {
    this[_0xb282("0x68e")] && (this["privateMiniMap"] = !this["privateMiniMap"], this[_0xb282("0x749")] ? _0x5c1379(_0xb282("0x605"))[_0xb282("0x3cc")](_0xb282("0x3cb")) : _0x5c1379(_0xb282("0x605"))[_0xb282("0x48d")](_0xb282("0x3cb")));
  }, "setTarget":function(_0x9ecda) {
    var _0xe98c87 = this[_0xb282("0x74a")](_0x9ecda);
    if (null !== _0xe98c87) {
      var _0x5c1379 = this["teamPlayers"][_0xe98c87];
      if (this[_0xb282("0x68e")] = _0x5c1379["id"], this[_0xb282("0x74b")](_0x5c1379[_0xb282("0x0")], _0x5c1379[_0xb282("0x4ec")], _0x5c1379["x"], _0x5c1379["y"], _0x5c1379[_0xb282("0x3")]), !_0x5c1379["alive"]) {
        return void this[_0xb282("0x712")](2);
      }
      this["setTargetStatus"](1);
    } else {
      this["setTargetStatus"](0);
    }
  }, "setTargetStatus":function(_0x54698f) {
    switch(_0x54698f) {
      case 0:
        this[_0xb282("0x746")] = 0, this[_0xb282("0x68e")] = 0, this[_0xb282("0x74c")] = "", this[_0xb282("0x74d")] = "", this[_0xb282("0x710")] = !1, _0xe98c87["targeting"] = !1, this[_0xb282("0x749")] = !1, _0x5c1379(_0xb282("0x74e"))[_0xb282("0x452")](), _0x5c1379(_0xb282("0x74f"))["show"]()[_0xb282("0x90")]("[" + _0x33cd4b[_0xb282("0x5a7")] + "]"), _0x5c1379(_0xb282("0x750"))["removeClass"](_0xb282("0x3cb"));
        break;
      case 1:
        this[_0xb282("0x746")] = 1, this[_0xb282("0x710")] || (this[_0xb282("0x710")] = !0, _0xe98c87[_0xb282("0x710")] = !0, this[_0xb282("0x745")]()), _0x5c1379(_0xb282("0x751"))[_0xb282("0x9a")]();
        break;
      case 2:
        this[_0xb282("0x746")] = 2, _0x5c1379(_0xb282("0x747"))[_0xb282("0x452")](), _0x5c1379(_0xb282("0x74f"))[_0xb282("0x9a")]()["text"]("[" + _0x33cd4b[_0xb282("0x752")] + "]"), _0xe98c87[_0xb282("0x753")]();
    }
  }, "changeTarget":function() {
    for (var _0x10cbb0 = this[_0xb282("0x74a")](this[_0xb282("0x68e")]), _0xe98c87 = null, _0x5c1379 = 0; _0x5c1379 < this[_0xb282("0x68d")][_0xb282("0xc")]; _0x5c1379++) {
      if (this[_0xb282("0x68d")][_0x5c1379][_0xb282("0x6")]) {
        if (null === _0x10cbb0) {
          _0x10cbb0 = _0x5c1379;
          break;
        }
        if (_0x5c1379 < _0x10cbb0 && null === _0xe98c87) {
          _0xe98c87 = _0x5c1379;
        } else {
          if (_0x5c1379 > _0x10cbb0) {
            _0xe98c87 = _0x5c1379;
            break;
          }
        }
      }
    }
    null !== _0xe98c87 && (_0x10cbb0 = _0xe98c87), null !== _0x10cbb0 ? this["setTarget"](this["teamPlayers"][_0x10cbb0]["id"]) : this[_0xb282("0x712")](0);
  }, "updateTarget":function(_0x1825fe, _0x437314, _0x1ac26f, _0x3703d8, _0x5228b7) {
    _0xe98c87[_0xb282("0x754")](_0x1ac26f, _0x3703d8), this[_0xb282("0x74c")] !== _0x1825fe && (this[_0xb282("0x74c")] = _0x1825fe, _0x5c1379(_0xb282("0x755"))["html"](this[_0xb282("0x4bc")](_0x1825fe))), _0x437314 && this[_0xb282("0x74d")] !== _0x437314 && (this[_0xb282("0x74d")] = _0x437314, _0x5c1379(_0xb282("0x756"))[_0xb282("0x533")](_0xb282("0x3c9"), _0x437314)), _0x5c1379("#target-status")[_0xb282("0x90")]("[" + _0x5228b7 + "]");
    var _0x1146bf = this[_0xb282("0x757")](_0x1ac26f, _0x3703d8), _0x48798d = _0x33cd4b[_0xb282("0x758")] + ': <span class="hud-main-color">' + _0xe98c87["targetDistance"] + " [" + _0x1146bf + "]</span>";
    _0xe98c87[_0xb282("0x94")] && (_0x48798d += _0xb282("0x4a0") + _0x33cd4b[_0xb282("0x759")] + _0xb282("0x75a") + (_0x5228b7 + _0xe98c87[_0xb282("0x49f")]) + _0xb282("0x730")), _0x5c1379(_0xb282("0x747"))[_0xb282("0x322")](_0x48798d), 1 != this[_0xb282("0x746")] && this[_0xb282("0x712")](1);
  }, "updateQuest":function() {
    this[_0xb282("0x470")] && "" === this[_0xb282("0x466")] && _0x10cbb0["MC"] && _0x10cbb0["MC"][_0xb282("0x75b")] && (this[_0xb282("0x75c")][_0xb282("0x4af")] = _0x10cbb0["MC"][_0xb282("0x75b")]());
  }, "init":function() {
    this[_0xb282("0x75d")](), this[_0xb282("0x75e")](), this[_0xb282("0x75f")](), this[_0xb282("0x3ea")](), this[_0xb282("0x760")](), _0x20b998 && _0x20b998[_0xb282("0x3dc")](), this[_0xb282("0x5d6")](), this[_0xb282("0x5d9")](), this[_0xb282("0x503")](), this["setMainButtons"](), this[_0xb282("0x5e7")](), this["setHideSkinUrl"](), this[_0xb282("0x46f")](), this[_0xb282("0x47f")](), this[_0xb282("0x761")](), this[_0xb282("0x4cf")](), this[_0xb282("0x44d")](), this[_0xb282("0x450")](), this[_0xb282("0x471")](), 
    this[_0xb282("0x454")](), this[_0xb282("0x4e4")](), this["setNormalLb"](), this[_0xb282("0x762")](), this[_0xb282("0x4ac")](), this[_0xb282("0x4e6")](), this[_0xb282("0x3e0")](), this[_0xb282("0x3df")](), this["preloadChatSounds"](), this[_0xb282("0x4e2")]();
    var _0x10cbb0 = this;
    setInterval(function() {
      _0x10cbb0[_0xb282("0x763")]();
    }, 33), setInterval(function() {
      _0x10cbb0[_0xb282("0x764")]();
    }, this[_0xb282("0x765")]);
  }}, _0x3ac750 = {}, _0x3d8ce7 = {}, _0x4c4b7e = {"hk-feed":{"label":_0x33cd4b[_0xb282("0x766")], "defaultKey":"W", "keyDown":function() {
    _0x381fe5 && _0x381fe5["feed"]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-macroFeed":{"label":_0x33cd4b["hk-macroFeed"], "defaultKey":"E", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x768")](!0);
  }, "keyUp":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x768")](!1);
  }, "type":_0xb282("0x767")}, "hk-split":{"label":_0x33cd4b[_0xb282("0x769")], "defaultKey":_0xb282("0x76a"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x447")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-doubleSplit":{"label":_0x33cd4b[_0xb282("0x76b")], "defaultKey":"Q", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x76c")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-popSplit":{"label":_0xb282("0x76d"), "defaultKey":_0xb282("0x76e"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x76f")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-split16":{"label":_0x33cd4b[_0xb282("0x770")], "defaultKey":_0xb282("0x771"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x772")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-pause":{"label":_0x33cd4b["hk-pause"], "defaultKey":"R", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x773")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showTop5":{"label":_0x33cd4b["hk-showTop5"], "defaultKey":"T", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x774")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showTime":{"label":_0x33cd4b[_0xb282("0x775")], "defaultKey":_0xb282("0x776"), "keyDown":function() {
    _0x381fe5 && _0x381fe5["setShowTime"]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showSplitRange":{"label":_0x33cd4b[_0xb282("0x777")], "defaultKey":"U", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x778")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showSplitInd":{"label":_0x33cd4b[_0xb282("0x779")], "defaultKey":"I", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x77a")]();
  }, "keyUp":null, "type":"normal"}, "hk-showTeammatesInd":{"label":_0x33cd4b[_0xb282("0x77b")], "defaultKey":_0xb282("0x77c"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x77d")]();
  }, "keyUp":null, "type":"normal"}, "hk-showOppColors":{"label":_0x33cd4b[_0xb282("0x77e")], "defaultKey":"O", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x77f")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-toggleSkins":{"label":_0x33cd4b[_0xb282("0x780")], "defaultKey":"A", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x781")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-transparentSkins":{"label":_0x33cd4b[_0xb282("0x782")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x783")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showSkins":{"label":_0x33cd4b[_0xb282("0x784")], "defaultKey":"S", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x785")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showStats":{"label":_0x33cd4b[_0xb282("0x786")], "defaultKey":_0xb282("0x787"), "keyDown":function() {
    _0x381fe5 && _0x381fe5["setShowStats"]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-toggleCells":{"label":_0x33cd4b[_0xb282("0x788")], "defaultKey":"D", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x789")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showFood":{"label":_0x33cd4b[_0xb282("0x78a")], "defaultKey":"F", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x78b")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showGrid":{"label":_0x33cd4b[_0xb282("0x78c")], "defaultKey":"G", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x78d")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showMiniMapGuides":{"label":_0x33cd4b["hk-showMiniMapGuides"], "defaultKey":"ALT+G", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x78e")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-hideChat":{"label":_0x33cd4b[_0xb282("0x78f")], "defaultKey":"H", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x4cb")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showHUD":{"label":_0x33cd4b["hk-showHUD"], "defaultKey":_0xb282("0x790"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x791")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-copyLb":{"label":_0x33cd4b[_0xb282("0x792")], "defaultKey":"L", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x793")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showLb":{"label":_0x33cd4b[_0xb282("0x794")], "defaultKey":_0xb282("0x795"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x796")]();
  }, "keyUp":null, "type":"normal"}, "hk-toggleAutoZoom":{"label":_0x33cd4b[_0xb282("0x797")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x798")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-resetZoom":{"label":_0x33cd4b[_0xb282("0x799")], "defaultKey":"Z", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x79a")](!0);
  }, "keyUp":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x79a")](!1);
  }, "type":_0xb282("0x767")}, "hk-toggleDeath":{"label":_0x33cd4b[_0xb282("0x79b")], "defaultKey":"X", "keyDown":function() {
    _0x381fe5 && _0x381fe5["toggleDeath"]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-clearChat":{"label":_0x33cd4b[_0xb282("0x79c")], "defaultKey":"C", "keyDown":function() {
    _0x381fe5 && _0x381fe5["displayChatHistory"](!0);
  }, "keyUp":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x79d")](!1);
  }, "type":_0xb282("0x767")}, "hk-showBgSectors":{"label":_0x33cd4b[_0xb282("0x79e")], "defaultKey":"B", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x79f")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-hideBots":{"label":_0x33cd4b[_0xb282("0x7a0")], "defaultKey":_0xb282("0x7a1"), "keyDown":function() {
    _0x381fe5 && _0x381fe5["setHideSmallBots"]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showNames":{"label":_0x33cd4b[_0xb282("0x7a2")], "defaultKey":"N", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7a3")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-hideTeammatesNames":{"label":_0x33cd4b["hk-hideTeammatesNames"], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7a4")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showMass":{"label":_0x33cd4b[_0xb282("0x7a5")], "defaultKey":"M", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0xaa")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showMiniMap":{"label":_0x33cd4b[_0xb282("0x7a6")], "defaultKey":_0xb282("0x7a7"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7a8")]();
  }, "keyUp":null, "type":"normal"}, "hk-chatMessage":{"label":_0x33cd4b["hk-chatMessage"], "defaultKey":_0xb282("0x7a9"), "keyDown":function() {
    _0x381fe5 && _0x381fe5["enterChatMessage"]();
  }, "keyUp":null, "type":_0xb282("0x7aa")}, "hk-quickResp":{"label":_0x33cd4b[_0xb282("0x7ab")], "defaultKey":"TILDE", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x47c")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-autoResp":{"label":_0x33cd4b[_0xb282("0x7ac")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7ad")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-zoom1":{"label":_0x33cd4b[_0xb282("0x7ae")] + " 1", "defaultKey":"ALT+1", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7af")](.5);
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-zoom2":{"label":_0x33cd4b[_0xb282("0x7ae")] + " 2", "defaultKey":"ALT+2", "keyDown":function() {
    _0x381fe5 && _0x381fe5["setZoom"](.25);
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-zoom3":{"label":_0x33cd4b[_0xb282("0x7ae")] + " 3", "defaultKey":_0xb282("0x7b0"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7af")](.125);
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-zoom4":{"label":_0x33cd4b[_0xb282("0x7ae")] + " 4", "defaultKey":_0xb282("0x7b1"), "keyDown":function() {
    _0x381fe5 && _0x381fe5["setZoom"](.075);
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-zoom5":{"label":_0x33cd4b[_0xb282("0x7ae")] + " 5", "defaultKey":"ALT+5", "keyDown":function() {
    _0x381fe5 && _0x381fe5["setZoom"](.05);
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-switchServerMode":{"label":_0x33cd4b["hk-switchServerMode"], "defaultKey":"=", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7b2")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showTargeting":{"label":_0x33cd4b[_0xb282("0x7b3")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7b4")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-setTargeting":{"label":_0x33cd4b[_0xb282("0x7b5")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x603")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-cancelTargeting":{"label":_0x33cd4b["hk-cancelTargeting"], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x6be")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-changeTarget":{"label":_0x33cd4b[_0xb282("0x7b6")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x607")]();
  }, "keyUp":null, "type":"normal"}, "hk-privateMiniMap":{"label":_0x33cd4b[_0xb282("0x7b7")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7b8")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-showQuest":{"label":_0x33cd4b[_0xb282("0x7b9")], "defaultKey":"", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7ba")]();
  }, "keyUp":null, "type":_0xb282("0x767")}, "hk-comm1":{"label":_0x46d51d[_0xb282("0x2a1")], "defaultKey":"1", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](1);
  }, "keyUp":null, "type":"command"}, "hk-comm2":{"label":_0x46d51d[_0xb282("0x2a2")], "defaultKey":"2", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](2);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm3":{"label":_0x46d51d["comm3"], "defaultKey":"3", "keyDown":function() {
    _0x381fe5 && _0x381fe5["sendCommand"](3);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm4":{"label":_0x46d51d[_0xb282("0x2a3")], "defaultKey":"4", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](4);
  }, "keyUp":null, "type":"command"}, "hk-comm5":{"label":_0x46d51d["comm5"], "defaultKey":"5", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](5);
  }, "keyUp":null, "type":"command"}, "hk-comm6":{"label":_0x46d51d[_0xb282("0x2a5")], "defaultKey":"6", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](6);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm7":{"label":_0x46d51d[_0xb282("0x7bd")], "defaultKey":"7", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](7);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm8":{"label":_0x46d51d[_0xb282("0x7be")], "defaultKey":"8", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](8);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm9":{"label":_0x46d51d[_0xb282("0x2a6")], "defaultKey":"9", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](9);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm0":{"label":_0x46d51d[_0xb282("0x2a7")], "defaultKey":"0", "keyDown":function() {
    _0x381fe5 && _0x381fe5["sendCommand"](0);
  }, "keyUp":null, "type":"command"}, "hk-comm10":{"label":_0x46d51d["comm10"], "defaultKey":"MOUSE WHEEL", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](10);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm11":{"label":_0x46d51d["comm11"], "defaultKey":_0xb282("0x7bf"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](11);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm12":{"label":_0x46d51d[_0xb282("0x7c0")], "defaultKey":"UP", "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](12);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm13":{"label":_0x46d51d[_0xb282("0x2a8")], "defaultKey":_0xb282("0x7c1"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](13);
  }, "keyUp":null, "type":_0xb282("0x7bc")}, "hk-comm14":{"label":_0x46d51d[_0xb282("0x2a9")], "defaultKey":_0xb282("0x7c2"), "keyDown":function() {
    _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](14);
  }, "keyUp":null, "type":_0xb282("0x7bc")}}, _0x4e485f = {"lastPressedKey":"", "lastKeyId":"", "defaultMessageKey":"ENTER", "inputClassName":"custom-key-in form-control input-sm", "loadDefaultHotkeys":function() {
    _0x3d8ce7 = {};
    for (var _0x10cbb0 in _0x4c4b7e) {
      _0x4c4b7e[_0xb282("0x31b")](_0x10cbb0) && (_0x3d8ce7[_0x4c4b7e[_0x10cbb0]["defaultKey"]] = _0x10cbb0);
    }
    _0x3d8ce7[_0xb282("0x7c3")] = this[_0xb282("0x7c4")];
  }, "loadHotkeys":function() {
    null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x7c5")) ? _0x3d8ce7 = JSON["parse"](_0x10cbb0["localStorage"]["getItem"](_0xb282("0x7c5"))) : this[_0xb282("0x7c6")](), null !== _0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x7c7")) && (_0x46d51d = JSON[_0xb282("0x4db")](_0x10cbb0[_0xb282("0x319")][_0xb282("0x31d")](_0xb282("0x7c7"))));
  }, "saveHotkeys":function() {
    _0x10cbb0[_0xb282("0x319")][_0xb282("0x4df")](_0xb282("0x7c5"), JSON["stringify"](_0x3d8ce7)), this[_0xb282("0x7c8")]();
  }, "saveCommands":function() {
    _0x5c1379(_0xb282("0x7c9"))[_0xb282("0x7ca")](function() {
      var _0x10cbb0 = _0x5c1379(this), _0xe98c87 = _0x10cbb0["attr"]("id");
      _0x46d51d["hasOwnProperty"](_0xe98c87) && (_0x46d51d[_0xe98c87] = _0x10cbb0[_0xb282("0x329")]());
    }), _0x10cbb0[_0xb282("0x319")][_0xb282("0x4df")](_0xb282("0x7c7"), JSON[_0xb282("0x31c")](_0x46d51d));
  }, "resetHotkeys":function() {
    this[_0xb282("0x7c6")](), _0x5c1379(_0xb282("0x7cb"))[_0xb282("0x7ca")](function() {
      var _0x10cbb0 = _0x5c1379(this)["attr"]("id");
      _0x4c4b7e[_0x10cbb0] && _0x5c1379(this)[_0xb282("0x329")](_0x4c4b7e[_0x10cbb0][_0xb282("0x7cc")]);
    });
  }, "setHotkeysMenu":function() {
    var _0x10cbb0 = this;
    _0x5c1379(_0xb282("0x8f"))[_0xb282("0x323")]('<div id="hotkeys"><div id="hotkeys-menu"><button id="reset-hotkeys" class="btn btn-primary">' + _0x33cd4b["restoreSettings"] + '</button> <button id="save-hotkeys" class="btn btn-success">' + _0x33cd4b[_0xb282("0x3d2")] + _0xb282("0x7cd") + _0x33cd4b[_0xb282("0x5b1")] + _0xb282("0x7ce") + _0x33cd4b[_0xb282("0x7cf")] + _0xb282("0x7d0") + _0x33cd4b[_0xb282("0x7d1")] + _0xb282("0x7d0") + _0x33cd4b["hk-inst-keys"] + _0xb282("0x7d2"));
    for (var _0xe98c87 in _0x4c4b7e) {
      if (_0x4c4b7e[_0xb282("0x31b")](_0xe98c87)) {
        var _0x533630 = _0x4c4b7e[_0xe98c87], _0x4f3248 = "";
        for (var _0x20edd3 in _0x3d8ce7) {
          if (_0x3d8ce7[_0xb282("0x31b")](_0x20edd3) && _0x3d8ce7[_0x20edd3] === _0xe98c87) {
            _0x4f3248 = _0x20edd3;
            break;
          }
        }
        if (_0xb282("0x7d3") === _0xe98c87 && _0x381fe5 && !_0x381fe5[_0xb282("0x6db")]) {
          continue;
        }
        if (_0xb282("0x7bc") === _0x533630[_0xb282("0x7d4")]) {
          var _0x5d1d49 = _0xe98c87[_0xb282("0x78")](_0xb282("0x7d5"), "");
          _0x5c1379("#hotkeys-cfg")[_0xb282("0x323")]('<div class="row"><div class="key-label"><input id="' + _0x5d1d49 + _0xb282("0x7d6") + _0x46d51d[_0x5d1d49] + _0xb282("0x7d7") + _0x533630[_0xb282("0x7cc")] + _0xb282("0x7d8") + _0xe98c87 + '" class="custom-key-in form-control input-sm" value="' + _0x4f3248 + _0xb282("0x7d9"));
        } else {
          _0x5c1379("#hotkeys-cfg")[_0xb282("0x323")](_0xb282("0x7da") + _0x533630[_0xb282("0x7db")] + _0xb282("0x7dc") + _0x533630[_0xb282("0x7cc")] + _0xb282("0x7d8") + _0xe98c87 + '" class="custom-key-in form-control input-sm" value="' + _0x4f3248 + _0xb282("0x7d9"));
        }
      }
    }
    _0x5c1379(document)["on"]("click", "#reset-hotkeys", function(_0x8240f7) {
      _0x8240f7[_0xb282("0x3cf")](), _0x10cbb0[_0xb282("0x7dd")]();
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), "#save-hotkeys", function(_0x16a00c) {
      _0x16a00c["preventDefault"](), _0x10cbb0[_0xb282("0x7de")](), _0x5c1379("#hotkeys")[_0xb282("0x5f8")](500);
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x7df"), function(_0x2d909a) {
      _0x2d909a[_0xb282("0x3cf")](), _0x5c1379(_0xb282("0x7e0"))[_0xb282("0x5f8")](500);
    }), _0x5c1379(document)["on"](_0xb282("0x3c6"), _0xb282("0x7e1"), function() {
      _0x5c1379(_0xb282("0x7e0"))[_0xb282("0x4f3")](500), _0x5c1379(_0xb282("0x7e2"))[_0xb282("0x5f6")](_0xb282("0x5c")), _0x5bc66e();
    }), _0x5c1379(_0xb282("0x7e2"))[_0xb282("0x5f6")](), _0x20b998 && _0x20b998[_0xb282("0x397")]();
  }, "getPressedKey":function(_0x5ee321) {
    var _0xe98c87 = "", _0x5c1379 = "";
    switch(_0x5ee321["ctrlKey"] || 17 == _0x5ee321[_0xb282("0x7e3")] ? _0xe98c87 = "CTRL" : (_0x5ee321[_0xb282("0x7e4")] || 18 == _0x5ee321["keyCode"]) && (_0xe98c87 = "ALT"), _0x5ee321[_0xb282("0x7e3")]) {
      case 9:
        _0x5c1379 = _0xb282("0x7e5");
        break;
      case 13:
        _0x5c1379 = "ENTER";
        break;
      case 16:
        _0x5c1379 = _0xb282("0x771");
        break;
      case 17:
        break;
      case 18:
        break;
      case 27:
        _0x5c1379 = _0xb282("0x7e6");
        break;
      case 32:
        _0x5c1379 = _0xb282("0x76a");
        break;
      case 37:
        _0x5c1379 = _0xb282("0x7bf");
        break;
      case 38:
        _0x5c1379 = "UP";
        break;
      case 39:
        _0x5c1379 = "RIGHT";
        break;
      case 40:
        _0x5c1379 = _0xb282("0x7c2");
        break;
      case 46:
        _0x5c1379 = _0xb282("0x7e7");
        break;
      case 61:
        _0x5c1379 = "=";
        break;
      case 187:
        _0x5c1379 = "=";
        break;
      case 192:
        _0x5c1379 = _0xb282("0x7e8");
        break;
      default:
        _0x5c1379 = String["fromCharCode"](_0x5ee321[_0xb282("0x7e3")]);
    }
    return "" !== _0xe98c87 ? "" !== _0x5c1379 ? _0xe98c87 + "+" + _0x5c1379 : _0xe98c87 : _0x5c1379;
  }, "deleteHotkey":function(_0x79144a, _0x5e0602) {
    delete _0x3d8ce7[_0x79144a], _0x5c1379("#" + _0x5e0602)[_0xb282("0x329")]("");
  }, "setDefaultHotkey":function(_0x5395d0) {
    var _0xe98c87 = !1;
    return _0x4c4b7e[_0x5395d0] && !_0x3d8ce7[_0xb282("0x31b")](_0x4c4b7e[_0x5395d0][_0xb282("0x7cc")]) ? (_0xe98c87 = _0x4c4b7e[_0x5395d0][_0xb282("0x7cc")], _0x3d8ce7[_0xe98c87] = _0x5395d0, _0xe98c87) : _0xe98c87;
  }, "setHotkey":function(_0x2b6f60, _0x406b94) {
    if (_0x406b94 && (this["lastPressedKey"] !== _0x2b6f60 || this["lastKeyId"] !== _0x406b94)) {
      var _0x49d744 = _0x5c1379("#" + _0x406b94)["val"]();
      if (this[_0xb282("0x7e9")](_0x49d744, _0x406b94), _0xb282("0x7e7") !== _0x2b6f60) {
        if (_0x3d8ce7[_0x2b6f60] && _0x3d8ce7[_0x2b6f60] !== _0x406b94) {
          var _0x1038f5 = _0x3d8ce7[_0x2b6f60], _0x13d5cb = this["setDefaultHotkey"](_0x1038f5);
          _0x13d5cb ? (_0x3d8ce7[_0x13d5cb] = _0x1038f5, _0x5c1379("#" + _0x1038f5)[_0xb282("0x329")](_0x13d5cb)) : this[_0xb282("0x7e9")](_0x2b6f60, _0x1038f5);
        }
        _0x3d8ce7[_0x2b6f60] = _0x406b94, _0x5c1379("#" + _0x406b94)[_0xb282("0x329")](_0x2b6f60), "hk-chatMessage" === _0x406b94 && (_0x3d8ce7[_0xb282("0x7c3")] = _0x2b6f60), this["lastPressedKey"] = _0x2b6f60, this[_0xb282("0x7ea")] = _0x406b94;
      }
    }
  }, "init":function() {
    this[_0xb282("0x7eb")](), this[_0xb282("0x7ec")]();
  }};
  document["onkeydown"] = function(_0xe4fb4a) {
    var _0xe98c87 = _0x4e485f[_0xb282("0x7ed")](_0xe4fb4a);
    if ((_0xb282("0x7ee") !== _0xe4fb4a[_0xb282("0x7ef")][_0xb282("0x7f0")] || _0xe4fb4a[_0xb282("0x7ef")]["className"] === _0x4e485f["inputClassName"] || _0xe98c87 === _0x3d8ce7[_0xb282("0x7c3")]) && "" !== _0xe98c87 && !_0x3ac750[_0xe98c87]) {
      if (_0x3ac750[_0xe98c87] = !0, _0xb282("0x7e6") === _0xe98c87) {
        return _0xe4fb4a[_0xb282("0x3cf")](), void(_0x381fe5 && _0x381fe5[_0xb282("0x7f1")]());
      }
      if (_0xe4fb4a[_0xb282("0x7ef")][_0xb282("0x7f2")] === _0x4e485f["inputClassName"]) {
        return _0xe4fb4a[_0xb282("0x3cf")](), void _0x4e485f["setHotkey"](_0xe98c87, _0xe4fb4a["target"]["id"]);
      }
      if (_0x3d8ce7[_0xe98c87]) {
        _0xe4fb4a[_0xb282("0x3cf")]();
        var _0x5c1379 = _0x3d8ce7[_0xe98c87];
        "" !== _0x5c1379 && _0x4c4b7e[_0x5c1379] && _0x4c4b7e[_0x5c1379]["keyDown"] && _0x4c4b7e[_0x5c1379]["keyDown"]();
      }
    }
  }, document[_0xb282("0x7f3")] = function(_0x511c8b) {
    var _0xe98c87 = _0x4e485f["getPressedKey"](_0x511c8b);
    if ("" !== _0xe98c87) {
      if (_0x3d8ce7[_0xe98c87]) {
        var _0x5c1379 = _0x3d8ce7[_0xe98c87];
        "" !== _0x5c1379 && _0x4c4b7e[_0x5c1379] && _0x4c4b7e[_0x5c1379][_0xb282("0x7f4")] && _0x4c4b7e[_0x5c1379][_0xb282("0x7f4")]();
      }
      _0x3ac750[_0xe98c87] = !1;
    }
  }, _0x10cbb0[_0xb282("0x7f5")] = function(_0x3abb5b) {
    _0x5c1379(_0xb282("0x480"))["is"](_0xb282("0x47a")) || (2 == _0x3abb5b[_0xb282("0x7f6")] ? (_0x3abb5b[_0xb282("0x3cf")](), _0x381fe5 && _0x381fe5[_0xb282("0x7bb")](10)) : (_0x34bd23["mouseSplit"] && (1 == _0x3abb5b[_0xb282("0x7f6")] && !_0x34bd23["mouseInvert"] || 3 == _0x3abb5b[_0xb282("0x7f6")] && _0x34bd23[_0xb282("0x57f")]) && (_0x3abb5b[_0xb282("0x3cf")](), _0x381fe5 && _0x381fe5[_0xb282("0x447")]()), _0x34bd23[_0xb282("0x57e")] && (3 == _0x3abb5b[_0xb282("0x7f6")] && !_0x34bd23[_0xb282("0x57f")] || 
    1 == _0x3abb5b[_0xb282("0x7f6")] && _0x34bd23["mouseInvert"]) && (_0x3abb5b[_0xb282("0x3cf")](), _0x381fe5 && _0x381fe5[_0xb282("0x768")](!0))));
  }, _0x10cbb0["onmouseup"] = function(_0x2d1139) {
    _0x34bd23[_0xb282("0x57e")] && (3 == _0x2d1139[_0xb282("0x7f6")] && !_0x34bd23[_0xb282("0x57f")] || 1 == _0x2d1139[_0xb282("0x7f6")] && _0x34bd23[_0xb282("0x57f")]) && _0x381fe5 && _0x381fe5[_0xb282("0x768")](!1);
  }, _0x10cbb0[_0xb282("0x7f7")] = function() {
    return _0xe98c87["play"] ? _0x33cd4b[_0xb282("0x7f8")] : void 0;
  }, _0x10cbb0[_0xb282("0x93")](_0xb282("0x7f9"), function() {
    setTimeout(_0x3543d7, 50);
  }, !1), _0x10cbb0[_0xb282("0x659")] = function() {
    _0x10cbb0[_0xb282("0xbc")] = function(_0x4ec920) {
      switch(_0x4ec920[_0xb282("0x7e3")]) {
        case 81:
          _0x10cbb0["core"] && _0x10cbb0[_0xb282("0x75")][_0xb282("0x7fa")] && _0x10cbb0[_0xb282("0x75")][_0xb282("0x7fa")]();
      }
    }, _0x10cbb0[_0xb282("0x7f3")] = function(_0x4fc915) {
      81 == _0x4fc915["keyCode"] && _0x10cbb0[_0xb282("0x7fb")] && _0x10cbb0[_0xb282("0x75")][_0xb282("0x7fb")]();
    };
  }, _0xe98c87[_0xb282("0x7fc")] = function(_0x1096a7) {
    _0x381fe5["getWS"](_0x1096a7);
  }, _0xe98c87[_0xb282("0x7fd")] = function() {
    _0x381fe5[_0xb282("0x7fd")](_0xe98c87[_0xb282("0x7fe")]);
  }, _0xe98c87[_0xb282("0x7ff")] = function(_0x1505d4) {
    _0x381fe5[_0xb282("0x7ff")](_0x1505d4);
  }, _0xe98c87["customDraw"] = function(_0x247109) {
    _0x381fe5[_0xb282("0x800")](_0x247109);
  }, _0xe98c87["drawCellInfo"] = function(_0x17d7ec, _0x13eea7, _0x59a59b, _0x1166d7, _0x1e6168, _0x204b19, _0x137dcc, _0x3c0d07, _0x2d8b08, _0x50ed72, _0x22054b, _0x4b4944) {
    _0x381fe5[_0xb282("0x801")](_0x17d7ec, _0x13eea7, _0x59a59b, _0x1166d7, _0x1e6168, _0x204b19, _0x137dcc, _0x3c0d07, _0x2d8b08, _0x50ed72, _0x22054b, _0x4b4944);
  }, _0xe98c87[_0xb282("0x802")] = function(_0x247613, _0x2604fe) {
    return _0x381fe5[_0xb282("0x802")](_0x247613, _0x2604fe);
  }, _0xe98c87["setVirusColor"] = function(_0x191783) {
    return _0x381fe5[_0xb282("0x803")](_0x191783);
  }, _0xe98c87[_0xb282("0x804")] = function(_0x3cb418) {
    return _0x381fe5["setVirusStrokeColor"](_0x3cb418);
  }, _0xe98c87[_0xb282("0x805")] = function(_0x16d8b8, _0x1cc87a) {
    return _0x381fe5[_0xb282("0x805")](_0x16d8b8, _0x1cc87a);
  }, function() {
    var _0x136906 = _0x572090(this, function() {
      var _0x28f790 = function() {
        return "dev";
      }, _0x1cb197 = function() {
        return "window";
      };
      var _0x2555dd = function() {
        var _0x4b1998 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
        return !_0x4b1998["test"](_0x28f790["toString"]());
      };
      var _0x1d5e4b = function() {
        var _0x146f4b = new RegExp("(\\\\[x|u](\\w){2,4})+");
        return _0x146f4b["test"](_0x1cb197["toString"]());
      };
      var _0x50a5b5 = function(_0x592de8) {
        var _0x2307ec = ~-1 >> 1 + 255 % 0;
        if (_0x592de8["indexOf"]("i" === _0x2307ec)) {
          _0x5cbbcf(_0x592de8);
        }
      };
      var _0x5cbbcf = function(_0x55102a) {
        var _0x1aa77b = ~-4 >> 1 + 255 % 0;
        if (_0x55102a["indexOf"]((!![] + "")[3]) !== _0x1aa77b) {
          _0x50a5b5(_0x55102a);
        }
      };
      if (!_0x2555dd()) {
        if (!_0x1d5e4b()) {
          _0x50a5b5("ind\u0435xOf");
        } else {
          _0x50a5b5("indexOf");
        }
      } else {
        _0x50a5b5("ind\u0435xOf");
      }
    });
    _0x136906();
    _0x5f0927(), _0x9e6ef8(), _0x24c76e(), _0x55af1f(), _0x20b998[_0xb282("0x806")](), _0x381fe5[_0xb282("0x806")](), _0x4e485f[_0xb282("0x806")]();
  }();
}(window, window[_0xb282("0x807")], window[_0xb282("0x808")]);
