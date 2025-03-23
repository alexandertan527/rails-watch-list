// chosen-js@1.8.7 downloaded from https://ga.jspm.io/npm:chosen-js@1.8.7/chosen.jquery.js

var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var e={};(function(){var e,s,i,n,bind=function(t,e){return function(){return t.apply(e,arguments)}},extend=function(e,s){for(var i in s)r.call(s,i)&&(e[i]=s[i]);function ctor(){(this||t).constructor=e}ctor.prototype=s.prototype;e.prototype=new ctor;e.__super__=s.prototype;return e},r={}.hasOwnProperty;n=function(){function SelectParser(){(this||t).options_index=0;(this||t).parsed=[]}SelectParser.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)};SelectParser.prototype.add_group=function(e){var s,i,n,r,o,h;s=(this||t).parsed.length;(this||t).parsed.push({array_index:s,group:true,label:e.label,title:e.title?e.title:void 0,children:0,disabled:e.disabled,classes:e.className});o=e.childNodes;h=[];for(i=0,n=o.length;i<n;i++){r=o[i];h.push(this.add_option(r,s,e.disabled))}return h};SelectParser.prototype.add_option=function(e,s,i){if("OPTION"===e.nodeName.toUpperCase()){if(""!==e.text){null!=s&&((this||t).parsed[s].children+=1);(this||t).parsed.push({array_index:(this||t).parsed.length,options_index:(this||t).options_index,value:e.value,text:e.text,html:e.innerHTML,title:e.title?e.title:void 0,selected:e.selected,disabled:true===i?i:e.disabled,group_array_index:s,group_label:null!=s?(this||t).parsed[s].label:null,classes:e.className,style:e.style.cssText})}else(this||t).parsed.push({array_index:(this||t).parsed.length,options_index:(this||t).options_index,empty:true});return(this||t).options_index+=1}};return SelectParser}();n.select_to_array=function(t){var e,s,i,r,o;r=new n;o=t.childNodes;for(s=0,i=o.length;s<i;s++){e=o[s];r.add_node(e)}return r.parsed};s=function(){function AbstractChosen(e,s){(this||t).form_field=e;(this||t).options=null!=s?s:{};(this||t).label_click_handler=bind((this||t).label_click_handler,this||t);if(AbstractChosen.browser_is_supported()){(this||t).is_multiple=(this||t).form_field.multiple;this.set_default_text();this.set_default_values();this.setup();this.set_up_html();this.register_observers();this.on_ready()}}AbstractChosen.prototype.set_default_values=function(){(this||t).click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this||t);(this||t).activate_action=function(t){return function(e){return t.activate_field(e)}}(this||t);(this||t).active_field=false;(this||t).mouse_on_container=false;(this||t).results_showing=false;(this||t).result_highlighted=null;(this||t).is_rtl=(this||t).options.rtl||/\bchosen-rtl\b/.test((this||t).form_field.className);(this||t).allow_single_deselect=null!=(this||t).options.allow_single_deselect&&null!=(this||t).form_field.options[0]&&""===(this||t).form_field.options[0].text&&(this||t).options.allow_single_deselect;(this||t).disable_search_threshold=(this||t).options.disable_search_threshold||0;(this||t).disable_search=(this||t).options.disable_search||false;(this||t).enable_split_word_search=null==(this||t).options.enable_split_word_search||(this||t).options.enable_split_word_search;(this||t).group_search=null==(this||t).options.group_search||(this||t).options.group_search;(this||t).search_contains=(this||t).options.search_contains||false;(this||t).single_backstroke_delete=null==(this||t).options.single_backstroke_delete||(this||t).options.single_backstroke_delete;(this||t).max_selected_options=(this||t).options.max_selected_options||Infinity;(this||t).inherit_select_classes=(this||t).options.inherit_select_classes||false;(this||t).display_selected_options=null==(this||t).options.display_selected_options||(this||t).options.display_selected_options;(this||t).display_disabled_options=null==(this||t).options.display_disabled_options||(this||t).options.display_disabled_options;(this||t).include_group_label_in_selected=(this||t).options.include_group_label_in_selected||false;(this||t).max_shown_results=(this||t).options.max_shown_results||Number.POSITIVE_INFINITY;(this||t).case_sensitive_search=(this||t).options.case_sensitive_search||false;return(this||t).hide_results_on_select=null==(this||t).options.hide_results_on_select||(this||t).options.hide_results_on_select};AbstractChosen.prototype.set_default_text=function(){(this||t).form_field.getAttribute("data-placeholder")?(this||t).default_text=(this||t).form_field.getAttribute("data-placeholder"):(this||t).is_multiple?(this||t).default_text=(this||t).options.placeholder_text_multiple||(this||t).options.placeholder_text||AbstractChosen.default_multiple_text:(this||t).default_text=(this||t).options.placeholder_text_single||(this||t).options.placeholder_text||AbstractChosen.default_single_text;(this||t).default_text=this.escape_html((this||t).default_text);return(this||t).results_none_found=(this||t).form_field.getAttribute("data-no_results_text")||(this||t).options.no_results_text||AbstractChosen.default_no_result_text};AbstractChosen.prototype.choice_label=function(e){return(this||t).include_group_label_in_selected&&null!=e.group_label?"<b class='group-name'>"+this.escape_html(e.group_label)+"</b>"+e.html:e.html};AbstractChosen.prototype.mouse_enter=function(){return(this||t).mouse_on_container=true};AbstractChosen.prototype.mouse_leave=function(){return(this||t).mouse_on_container=false};AbstractChosen.prototype.input_focus=function(e){if((this||t).is_multiple){if(!(this||t).active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this||t),50)}else if(!(this||t).active_field)return this.activate_field()};AbstractChosen.prototype.input_blur=function(e){if(!(this||t).mouse_on_container){(this||t).active_field=false;return setTimeout(function(t){return function(){return t.blur_test()}}(this||t),100)}};AbstractChosen.prototype.label_click_handler=function(e){return(this||t).is_multiple?this.container_mousedown(e):this.activate_field()};AbstractChosen.prototype.results_option_build=function(e){var s,i,n,r,o,h,l;s="";l=0;h=(this||t).results_data;for(r=0,o=h.length;r<o;r++){i=h[r];n="";n=i.group?this.result_add_group(i):this.result_add_option(i);if(""!==n){l++;s+=n}(null!=e?e.first:void 0)&&(i.selected&&(this||t).is_multiple?this.choice_build(i):i.selected&&!(this||t).is_multiple&&this.single_set_selected_text(this.choice_label(i)));if(l>=(this||t).max_shown_results)break}return s};AbstractChosen.prototype.result_add_option=function(e){var s,i;if(!e.search_match)return"";if(!this.include_option_in_results(e))return"";s=[];e.disabled||e.selected&&(this||t).is_multiple||s.push("active-result");!e.disabled||e.selected&&(this||t).is_multiple||s.push("disabled-result");e.selected&&s.push("result-selected");null!=e.group_array_index&&s.push("group-option");""!==e.classes&&s.push(e.classes);i=document.createElement("li");i.className=s.join(" ");e.style&&(i.style.cssText=e.style);i.setAttribute("data-option-array-index",e.array_index);i.innerHTML=e.highlighted_html||e.html;e.title&&(i.title=e.title);return this.outerHTML(i)};AbstractChosen.prototype.result_add_group=function(t){var e,s;if(!(t.search_match||t.group_match))return"";if(!(t.active_options>0))return"";e=[];e.push("group-result");t.classes&&e.push(t.classes);s=document.createElement("li");s.className=e.join(" ");s.innerHTML=t.highlighted_html||this.escape_html(t.label);t.title&&(s.title=t.title);return this.outerHTML(s)};AbstractChosen.prototype.results_update_field=function(){this.set_default_text();(this||t).is_multiple||this.results_reset_cleanup();this.result_clear_highlight();this.results_build();if((this||t).results_showing)return this.winnow_results()};AbstractChosen.prototype.reset_single_select_options=function(){var e,s,i,n,r;i=(this||t).results_data;r=[];for(e=0,s=i.length;e<s;e++){n=i[e];n.selected?r.push(n.selected=false):r.push(void 0)}return r};AbstractChosen.prototype.results_toggle=function(){return(this||t).results_showing?this.results_hide():this.results_show()};AbstractChosen.prototype.results_search=function(e){return(this||t).results_showing?this.winnow_results():this.results_show()};AbstractChosen.prototype.winnow_results=function(e){var s,i,n,r,o,h,l,c,a,_,u,d,f,p,g;this.no_results_clear();_=0;l=this.get_search_text();s=l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");a=this.get_search_regex(s);c=(this||t).results_data;for(n=0,r=c.length;n<r;n++){o=c[n];o.search_match=false;u=null;d=null;o.highlighted_html="";if(this.include_option_in_results(o)){if(o.group){o.group_match=false;o.active_options=0}if(null!=o.group_array_index&&(this||t).results_data[o.group_array_index]){u=(this||t).results_data[o.group_array_index];0===u.active_options&&u.search_match&&(_+=1);u.active_options+=1}g=o.group?o.label:o.text;if(!(o.group&&!(this||t).group_search)){d=this.search_string_match(g,a);o.search_match=null!=d;o.search_match&&!o.group&&(_+=1);if(o.search_match){if(l.length){f=d.index;h=g.slice(0,f);i=g.slice(f,f+l.length);p=g.slice(f+l.length);o.highlighted_html=this.escape_html(h)+"<em>"+this.escape_html(i)+"</em>"+this.escape_html(p)}null!=u&&(u.group_match=true)}else null!=o.group_array_index&&(this||t).results_data[o.group_array_index].search_match&&(o.search_match=true)}}}this.result_clear_highlight();if(_<1&&l.length){this.update_results_content("");return this.no_results(l)}this.update_results_content(this.results_option_build());if(!(null!=e?e.skip_highlight:void 0))return this.winnow_results_set_highlight()};AbstractChosen.prototype.get_search_regex=function(e){var s,i;i=(this||t).search_contains?e:"(^|\\s|\\b)"+e+"[^\\s]*";(this||t).enable_split_word_search||(this||t).search_contains||(i="^"+i);s=(this||t).case_sensitive_search?"":"i";return new RegExp(i,s)};AbstractChosen.prototype.search_string_match=function(e,s){var i;i=s.exec(e);!(this||t).search_contains&&(null!=i?i[1]:void 0)&&(i.index+=1);return i};AbstractChosen.prototype.choices_count=function(){var e,s,i,n;if(null!=(this||t).selected_option_count)return(this||t).selected_option_count;(this||t).selected_option_count=0;n=(this||t).form_field.options;for(e=0,s=n.length;e<s;e++){i=n[e];i.selected&&((this||t).selected_option_count+=1)}return(this||t).selected_option_count};AbstractChosen.prototype.choices_click=function(e){e.preventDefault();this.activate_field();if(!((this||t).results_showing||(this||t).is_disabled))return this.results_show()};AbstractChosen.prototype.keydown_checker=function(e){var s,i;i=null!=(s=e.which)?s:e.keyCode;this.search_field_scale();8!==i&&(this||t).pending_backstroke&&this.clear_backstroke();switch(i){case 8:(this||t).backstroke_length=this.get_search_field_value().length;break;case 9:(this||t).results_showing&&!(this||t).is_multiple&&this.result_select(e);(this||t).mouse_on_container=false;break;case 13:(this||t).results_showing&&e.preventDefault();break;case 27:(this||t).results_showing&&e.preventDefault();break;case 32:(this||t).disable_search&&e.preventDefault();break;case 38:e.preventDefault();this.keyup_arrow();break;case 40:e.preventDefault();this.keydown_arrow();break}};AbstractChosen.prototype.keyup_checker=function(e){var s,i;i=null!=(s=e.which)?s:e.keyCode;this.search_field_scale();switch(i){case 8:if((this||t).is_multiple&&(this||t).backstroke_length<1&&this.choices_count()>0)this.keydown_backstroke();else if(!(this||t).pending_backstroke){this.result_clear_highlight();this.results_search()}break;case 13:e.preventDefault();(this||t).results_showing&&this.result_select(e);break;case 27:(this||t).results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search();break}};AbstractChosen.prototype.clipboard_event_checker=function(e){if(!(this||t).is_disabled)return setTimeout(function(t){return function(){return t.results_search()}}(this||t),50)};AbstractChosen.prototype.container_width=function(){return null!=(this||t).options.width?(this||t).options.width:(this||t).form_field.offsetWidth+"px"};AbstractChosen.prototype.include_option_in_results=function(e){return!((this||t).is_multiple&&!(this||t).display_selected_options&&e.selected)&&(!(!(this||t).display_disabled_options&&e.disabled)&&!e.empty)};AbstractChosen.prototype.search_results_touchstart=function(e){(this||t).touch_started=true;return this.search_results_mouseover(e)};AbstractChosen.prototype.search_results_touchmove=function(e){(this||t).touch_started=false;return this.search_results_mouseout(e)};AbstractChosen.prototype.search_results_touchend=function(e){if((this||t).touch_started)return this.search_results_mouseup(e)};AbstractChosen.prototype.outerHTML=function(t){var e;if(t.outerHTML)return t.outerHTML;e=document.createElement("div");e.appendChild(t);return e.innerHTML};AbstractChosen.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+(this||t).default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'};AbstractChosen.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+(this||t).default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'};AbstractChosen.prototype.get_no_results_html=function(e){return'<li class="no-results">\n  '+(this||t).results_none_found+" <span>"+this.escape_html(e)+"</span>\n</li>"};AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))};AbstractChosen.default_multiple_text="Select Some Options";AbstractChosen.default_single_text="Select an Option";AbstractChosen.default_no_result_text="No results match";return AbstractChosen}();e=jQuery;e.fn.extend({chosen:function(n){return s.browser_is_supported()?this.each((function(s){var r,o;r=e(this||t);o=r.data("chosen");"destroy"!==n?o instanceof i||r.data("chosen",new i(this||t,n)):o instanceof i&&o.destroy()})):this||t}});i=function(s){extend(Chosen,s);function Chosen(){return Chosen.__super__.constructor.apply(this||t,arguments)}Chosen.prototype.setup=function(){(this||t).form_field_jq=e((this||t).form_field);return(this||t).current_selectedIndex=(this||t).form_field.selectedIndex};Chosen.prototype.set_up_html=function(){var s,i;s=["chosen-container"];s.push("chosen-container-"+((this||t).is_multiple?"multi":"single"));(this||t).inherit_select_classes&&(this||t).form_field.className&&s.push((this||t).form_field.className);(this||t).is_rtl&&s.push("chosen-rtl");i={class:s.join(" "),title:(this||t).form_field.title};(this||t).form_field.id.length&&(i.id=(this||t).form_field.id.replace(/[^\w]/g,"_")+"_chosen");(this||t).container=e("<div />",i);(this||t).container.width(this.container_width());(this||t).is_multiple?(this||t).container.html(this.get_multi_html()):(this||t).container.html(this.get_single_html());(this||t).form_field_jq.hide().after((this||t).container);(this||t).dropdown=(this||t).container.find("div.chosen-drop").first();(this||t).search_field=(this||t).container.find("input").first();(this||t).search_results=(this||t).container.find("ul.chosen-results").first();this.search_field_scale();(this||t).search_no_results=(this||t).container.find("li.no-results").first();if((this||t).is_multiple){(this||t).search_choices=(this||t).container.find("ul.chosen-choices").first();(this||t).search_container=(this||t).container.find("li.search-field").first()}else{(this||t).search_container=(this||t).container.find("div.chosen-search").first();(this||t).selected_item=(this||t).container.find(".chosen-single").first()}this.results_build();this.set_tab_index();return this.set_label_behavior()};Chosen.prototype.on_ready=function(){return(this||t).form_field_jq.trigger("chosen:ready",{chosen:this||t})};Chosen.prototype.register_observers=function(){(this||t).container.on("touchstart.chosen",function(t){return function(e){t.container_mousedown(e)}}(this||t));(this||t).container.on("touchend.chosen",function(t){return function(e){t.container_mouseup(e)}}(this||t));(this||t).container.on("mousedown.chosen",function(t){return function(e){t.container_mousedown(e)}}(this||t));(this||t).container.on("mouseup.chosen",function(t){return function(e){t.container_mouseup(e)}}(this||t));(this||t).container.on("mouseenter.chosen",function(t){return function(e){t.mouse_enter(e)}}(this||t));(this||t).container.on("mouseleave.chosen",function(t){return function(e){t.mouse_leave(e)}}(this||t));(this||t).search_results.on("mouseup.chosen",function(t){return function(e){t.search_results_mouseup(e)}}(this||t));(this||t).search_results.on("mouseover.chosen",function(t){return function(e){t.search_results_mouseover(e)}}(this||t));(this||t).search_results.on("mouseout.chosen",function(t){return function(e){t.search_results_mouseout(e)}}(this||t));(this||t).search_results.on("mousewheel.chosen DOMMouseScroll.chosen",function(t){return function(e){t.search_results_mousewheel(e)}}(this||t));(this||t).search_results.on("touchstart.chosen",function(t){return function(e){t.search_results_touchstart(e)}}(this||t));(this||t).search_results.on("touchmove.chosen",function(t){return function(e){t.search_results_touchmove(e)}}(this||t));(this||t).search_results.on("touchend.chosen",function(t){return function(e){t.search_results_touchend(e)}}(this||t));(this||t).form_field_jq.on("chosen:updated.chosen",function(t){return function(e){t.results_update_field(e)}}(this||t));(this||t).form_field_jq.on("chosen:activate.chosen",function(t){return function(e){t.activate_field(e)}}(this||t));(this||t).form_field_jq.on("chosen:open.chosen",function(t){return function(e){t.container_mousedown(e)}}(this||t));(this||t).form_field_jq.on("chosen:close.chosen",function(t){return function(e){t.close_field(e)}}(this||t));(this||t).search_field.on("blur.chosen",function(t){return function(e){t.input_blur(e)}}(this||t));(this||t).search_field.on("keyup.chosen",function(t){return function(e){t.keyup_checker(e)}}(this||t));(this||t).search_field.on("keydown.chosen",function(t){return function(e){t.keydown_checker(e)}}(this||t));(this||t).search_field.on("focus.chosen",function(t){return function(e){t.input_focus(e)}}(this||t));(this||t).search_field.on("cut.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this||t));(this||t).search_field.on("paste.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this||t));return(this||t).is_multiple?(this||t).search_choices.on("click.chosen",function(t){return function(e){t.choices_click(e)}}(this||t)):(this||t).container.on("click.chosen",(function(t){t.preventDefault()}))};Chosen.prototype.destroy=function(){e((this||t).container[0].ownerDocument).off("click.chosen",(this||t).click_test_action);(this||t).form_field_label.length>0&&(this||t).form_field_label.off("click.chosen");(this||t).search_field[0].tabIndex&&((this||t).form_field_jq[0].tabIndex=(this||t).search_field[0].tabIndex);(this||t).container.remove();(this||t).form_field_jq.removeData("chosen");return(this||t).form_field_jq.show()};Chosen.prototype.search_field_disabled=function(){(this||t).is_disabled=(this||t).form_field.disabled||(this||t).form_field_jq.parents("fieldset").is(":disabled");(this||t).container.toggleClass("chosen-disabled",(this||t).is_disabled);(this||t).search_field[0].disabled=(this||t).is_disabled;(this||t).is_multiple||(this||t).selected_item.off("focus.chosen",(this||t).activate_field);return(this||t).is_disabled?this.close_field():(this||t).is_multiple?void 0:(this||t).selected_item.on("focus.chosen",(this||t).activate_field)};Chosen.prototype.container_mousedown=function(s){var i;if(!(this||t).is_disabled){!s||"mousedown"!==(i=s.type)&&"touchstart"!==i||(this||t).results_showing||s.preventDefault();if(!(null!=s&&e(s.target).hasClass("search-choice-close"))){if((this||t).active_field){if(!(this||t).is_multiple&&s&&(e(s.target)[0]===(this||t).selected_item[0]||e(s.target).parents("a.chosen-single").length)){s.preventDefault();this.results_toggle()}}else{(this||t).is_multiple&&(this||t).search_field.val("");e((this||t).container[0].ownerDocument).on("click.chosen",(this||t).click_test_action);this.results_show()}return this.activate_field()}}};Chosen.prototype.container_mouseup=function(e){if("ABBR"===e.target.nodeName&&!(this||t).is_disabled)return this.results_reset(e)};Chosen.prototype.search_results_mousewheel=function(e){var s;e.originalEvent&&(s=e.originalEvent.deltaY||-e.originalEvent.wheelDelta||e.originalEvent.detail);if(null!=s){e.preventDefault();"DOMMouseScroll"===e.type&&(s*=40);return(this||t).search_results.scrollTop(s+(this||t).search_results.scrollTop())}};Chosen.prototype.blur_test=function(e){if(!(this||t).active_field&&(this||t).container.hasClass("chosen-container-active"))return this.close_field()};Chosen.prototype.close_field=function(){e((this||t).container[0].ownerDocument).off("click.chosen",(this||t).click_test_action);(this||t).active_field=false;this.results_hide();(this||t).container.removeClass("chosen-container-active");this.clear_backstroke();this.show_search_field_default();this.search_field_scale();return(this||t).search_field.blur()};Chosen.prototype.activate_field=function(){if(!(this||t).is_disabled){(this||t).container.addClass("chosen-container-active");(this||t).active_field=true;(this||t).search_field.val((this||t).search_field.val());return(this||t).search_field.focus()}};Chosen.prototype.test_active_click=function(s){var i;i=e(s.target).closest(".chosen-container");return i.length&&(this||t).container[0]===i[0]?(this||t).active_field=true:this.close_field()};Chosen.prototype.results_build=function(){(this||t).parsing=true;(this||t).selected_option_count=null;(this||t).results_data=n.select_to_array((this||t).form_field);if((this||t).is_multiple)(this||t).search_choices.find("li.search-choice").remove();else{this.single_set_selected_text();if((this||t).disable_search||(this||t).form_field.options.length<=(this||t).disable_search_threshold){(this||t).search_field[0].readOnly=true;(this||t).container.addClass("chosen-container-single-nosearch")}else{(this||t).search_field[0].readOnly=false;(this||t).container.removeClass("chosen-container-single-nosearch")}}this.update_results_content(this.results_option_build({first:true}));this.search_field_disabled();this.show_search_field_default();this.search_field_scale();return(this||t).parsing=false};Chosen.prototype.result_do_highlight=function(e){var s,i,n,r,o;if(e.length){this.result_clear_highlight();(this||t).result_highlight=e;(this||t).result_highlight.addClass("highlighted");n=parseInt((this||t).search_results.css("maxHeight"),10);o=(this||t).search_results.scrollTop();r=n+o;i=(this||t).result_highlight.position().top+(this||t).search_results.scrollTop();s=i+(this||t).result_highlight.outerHeight();if(s>=r)return(this||t).search_results.scrollTop(s-n>0?s-n:0);if(i<o)return(this||t).search_results.scrollTop(i)}};Chosen.prototype.result_clear_highlight=function(){(this||t).result_highlight&&(this||t).result_highlight.removeClass("highlighted");return(this||t).result_highlight=null};Chosen.prototype.results_show=function(){if((this||t).is_multiple&&(this||t).max_selected_options<=this.choices_count()){(this||t).form_field_jq.trigger("chosen:maxselected",{chosen:this||t});return false}(this||t).container.addClass("chosen-with-drop");(this||t).results_showing=true;(this||t).search_field.focus();(this||t).search_field.val(this.get_search_field_value());this.winnow_results();return(this||t).form_field_jq.trigger("chosen:showing_dropdown",{chosen:this||t})};Chosen.prototype.update_results_content=function(e){return(this||t).search_results.html(e)};Chosen.prototype.results_hide=function(){if((this||t).results_showing){this.result_clear_highlight();(this||t).container.removeClass("chosen-with-drop");(this||t).form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this||t})}return(this||t).results_showing=false};Chosen.prototype.set_tab_index=function(e){var s;if((this||t).form_field.tabIndex){s=(this||t).form_field.tabIndex;(this||t).form_field.tabIndex=-1;return(this||t).search_field[0].tabIndex=s}};Chosen.prototype.set_label_behavior=function(){(this||t).form_field_label=(this||t).form_field_jq.parents("label");!(this||t).form_field_label.length&&(this||t).form_field.id.length&&((this||t).form_field_label=e("label[for='"+(this||t).form_field.id+"']"));if((this||t).form_field_label.length>0)return(this||t).form_field_label.on("click.chosen",(this||t).label_click_handler)};Chosen.prototype.show_search_field_default=function(){if((this||t).is_multiple&&this.choices_count()<1&&!(this||t).active_field){(this||t).search_field.val((this||t).default_text);return(this||t).search_field.addClass("default")}(this||t).search_field.val("");return(this||t).search_field.removeClass("default")};Chosen.prototype.search_results_mouseup=function(s){var i;i=e(s.target).hasClass("active-result")?e(s.target):e(s.target).parents(".active-result").first();if(i.length){(this||t).result_highlight=i;this.result_select(s);return(this||t).search_field.focus()}};Chosen.prototype.search_results_mouseover=function(t){var s;s=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(s)return this.result_do_highlight(s)};Chosen.prototype.search_results_mouseout=function(t){if(e(t.target).hasClass("active-result")||e(t.target).parents(".active-result").first())return this.result_clear_highlight()};Chosen.prototype.choice_build=function(s){var i,n;i=e("<li />",{class:"search-choice"}).html("<span>"+this.choice_label(s)+"</span>");if(s.disabled)i.addClass("search-choice-disabled");else{n=e("<a />",{class:"search-choice-close","data-option-array-index":s.array_index});n.on("click.chosen",function(t){return function(e){return t.choice_destroy_link_click(e)}}(this||t));i.append(n)}return(this||t).search_container.before(i)};Chosen.prototype.choice_destroy_link_click=function(s){s.preventDefault();s.stopPropagation();if(!(this||t).is_disabled)return this.choice_destroy(e(s.target))};Chosen.prototype.choice_destroy=function(e){if(this.result_deselect(e[0].getAttribute("data-option-array-index"))){(this||t).active_field?(this||t).search_field.focus():this.show_search_field_default();(this||t).is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1&&this.results_hide();e.parents("li").first().remove();return this.search_field_scale()}};Chosen.prototype.results_reset=function(){this.reset_single_select_options();(this||t).form_field.options[0].selected=true;this.single_set_selected_text();this.show_search_field_default();this.results_reset_cleanup();this.trigger_form_field_change();if((this||t).active_field)return this.results_hide()};Chosen.prototype.results_reset_cleanup=function(){(this||t).current_selectedIndex=(this||t).form_field.selectedIndex;return(this||t).selected_item.find("abbr").remove()};Chosen.prototype.result_select=function(e){var s,i;if((this||t).result_highlight){s=(this||t).result_highlight;this.result_clear_highlight();if((this||t).is_multiple&&(this||t).max_selected_options<=this.choices_count()){(this||t).form_field_jq.trigger("chosen:maxselected",{chosen:this||t});return false}(this||t).is_multiple?s.removeClass("active-result"):this.reset_single_select_options();s.addClass("result-selected");i=(this||t).results_data[s[0].getAttribute("data-option-array-index")];i.selected=true;(this||t).form_field.options[i.options_index].selected=true;(this||t).selected_option_count=null;(this||t).is_multiple?this.choice_build(i):this.single_set_selected_text(this.choice_label(i));if((this||t).is_multiple&&(!(this||t).hide_results_on_select||e.metaKey||e.ctrlKey))if(e.metaKey||e.ctrlKey)this.winnow_results({skip_highlight:true});else{(this||t).search_field.val("");this.winnow_results()}else{this.results_hide();this.show_search_field_default()}((this||t).is_multiple||(this||t).form_field.selectedIndex!==(this||t).current_selectedIndex)&&this.trigger_form_field_change({selected:(this||t).form_field.options[i.options_index].value});(this||t).current_selectedIndex=(this||t).form_field.selectedIndex;e.preventDefault();return this.search_field_scale()}};Chosen.prototype.single_set_selected_text=function(e){null==e&&(e=(this||t).default_text);if(e===(this||t).default_text)(this||t).selected_item.addClass("chosen-default");else{this.single_deselect_control_build();(this||t).selected_item.removeClass("chosen-default")}return(this||t).selected_item.find("span").html(e)};Chosen.prototype.result_deselect=function(e){var s;s=(this||t).results_data[e];if((this||t).form_field.options[s.options_index].disabled)return false;s.selected=false;(this||t).form_field.options[s.options_index].selected=false;(this||t).selected_option_count=null;this.result_clear_highlight();(this||t).results_showing&&this.winnow_results();this.trigger_form_field_change({deselected:(this||t).form_field.options[s.options_index].value});this.search_field_scale();return true};Chosen.prototype.single_deselect_control_build=function(){if((this||t).allow_single_deselect){(this||t).selected_item.find("abbr").length||(this||t).selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>');return(this||t).selected_item.addClass("chosen-single-with-deselect")}};Chosen.prototype.get_search_field_value=function(){return(this||t).search_field.val()};Chosen.prototype.get_search_text=function(){return e.trim(this.get_search_field_value())};Chosen.prototype.escape_html=function(t){return e("<div/>").text(t).html()};Chosen.prototype.winnow_results_set_highlight=function(){var e,s;s=(this||t).is_multiple?[]:(this||t).search_results.find(".result-selected.active-result");e=s.length?s.first():(this||t).search_results.find(".active-result").first();if(null!=e)return this.result_do_highlight(e)};Chosen.prototype.no_results=function(e){var s;s=this.get_no_results_html(e);(this||t).search_results.append(s);return(this||t).form_field_jq.trigger("chosen:no_results",{chosen:this||t})};Chosen.prototype.no_results_clear=function(){return(this||t).search_results.find(".no-results").remove()};Chosen.prototype.keydown_arrow=function(){var e;if(!(this||t).results_showing||!(this||t).result_highlight)return this.results_show();e=(this||t).result_highlight.nextAll("li.active-result").first();return e?this.result_do_highlight(e):void 0};Chosen.prototype.keyup_arrow=function(){var e;if(!(this||t).results_showing&&!(this||t).is_multiple)return this.results_show();if((this||t).result_highlight){e=(this||t).result_highlight.prevAll("li.active-result");if(e.length)return this.result_do_highlight(e.first());this.choices_count()>0&&this.results_hide();return this.result_clear_highlight()}};Chosen.prototype.keydown_backstroke=function(){var e;if((this||t).pending_backstroke){this.choice_destroy((this||t).pending_backstroke.find("a").first());return this.clear_backstroke()}e=(this||t).search_container.siblings("li.search-choice").last();if(e.length&&!e.hasClass("search-choice-disabled")){(this||t).pending_backstroke=e;return(this||t).single_backstroke_delete?this.keydown_backstroke():(this||t).pending_backstroke.addClass("search-choice-focus")}};Chosen.prototype.clear_backstroke=function(){(this||t).pending_backstroke&&(this||t).pending_backstroke.removeClass("search-choice-focus");return(this||t).pending_backstroke=null};Chosen.prototype.search_field_scale=function(){var s,i,n,r,o,h,l;if((this||t).is_multiple){o={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"};h=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"];for(i=0,n=h.length;i<n;i++){r=h[i];o[r]=(this||t).search_field.css(r)}s=e("<div />").css(o);s.text(this.get_search_field_value());e("body").append(s);l=s.width()+25;s.remove();(this||t).container.is(":visible")&&(l=Math.min((this||t).container.outerWidth()-10,l));return(this||t).search_field.width(l)}};Chosen.prototype.trigger_form_field_change=function(e){(this||t).form_field_jq.trigger("input",e);return(this||t).form_field_jq.trigger("change",e)};return Chosen}(s)}).call(e);export default e;

