/**
 * Created by peach on 2014/12/21.
 */



//闭包开始

//扩展$内置函数
/**
 * 此类依赖 libs/jqueryui1.9.2/css/redmond/jquery-ui-1.9.2.custom.css
 *          libs/jqueryui1.9.2/js/jquery-1.8.3.js
 */
(function($){
    //param1 命名空间 param2指定一个父组件 param3原型对象
  ///*  $.widget('ui.alert', $.ui.dialog,{
  //    //参数设置
  //      options:{
  //          title:this.title || "系统提示",
  //          message:null,
  //          modal:true,
  //          width:400,
  //          height:300,
  //          buttons:{
  //              '确定':function() {
  //                  this.hide();
  //              }
  //          }
  //      },
  //      ////创建
  //      //open:function(){
  //       // this._handlerUI();
  //
  //     // }
  //      open: function() {
  //
  //
  //          // Invoke the parent widget's open().
  //          return $( "<div>I am red</div>" )._super();
  //      }
  //      ////销毁组件
  //      //_destory:function(){
  //      //
  //      //},
  //      ////处理试图UI
  //      //_handlerUI:function(){
  //      //    var opts=this.options;
  //      //    var msgDiv="<div name='alertMsgDialog' title='"+opts.title+"' style='display:none;'>"+
  //      //        "<p>"+
  //      //        "<span class='ui-icon ui-icon-circle-check' style='float: left; margin: 0 7px 50px 0;'></span>"+
  //      //        "<span name='message'>"+opts.message+"</span>"+
  //      //        "</p>"+
  //      //        "</div>";
  //      //    this.element.append(msgDiv);
  //      //}
  //  });
  //  $.widget( "custom.superDialog", $.ui.dialog, {
  //      red: function() {
  //          this.element.css( "color", "red" );
  //      }
  //  });*/

    $.extend($, {
        _alert: function(options) {
            //默认参数
            var defaultOptions={
                base:"custom-dialog-_alert",
                icon:"ui-icon-circle-check",
                message:null,
                title:null,
                modal:true,
                resizable:false,
                callFun: $.noop()
            };
            var opts = $.extend({}, defaultOptions, options);
            var html =
                '<div class="dialog" id="'+opts.base+'">' +
                ' <p>' +
                ' <span class="'+handlerIcon()+'" style="float: left; margin: 0 7px 0 0;"></span>' + opts.message +
                ' </p>' +
                '</div>';
            return $(html).dialog({
                resizable: opts.resizable,
                modal: opts.modal,
                show: {
                    effect: 'fade',
                    duration: 300
                },
                title: opts.title || "提示信息",
                buttons:{
                    "确定": function() {
                        var dlg = $(this).dialog("close");
                        var callfun=opts.callFun;
                        if(callfun!=undefined && typeof(callfun)=='function'){
                            callfun.call(dlg);
                        }
                    }
                }
            });
            //private function define
            function handlerIcon(){
                return "ui-icon "+opts.icon;
            }
        },
        _confirm: function(options) {
            var defaultOptions={
                base:"custom-dialog-_confirm",
                icon:"ui-icon-circle-check",
                message:null,
                title:null,
                modal:true,
                resizable:false,
                callFun:null
            };
            var opts = $.extend({}, defaultOptions, options);
            var html =
                '<div class="dialog" id="'+opts.base+'">' +
                ' <p>' +
                ' <span class="'+handlerIcon()+'" style="float: left; margin: 0 7px 20px 0;"></span>' + opts.message +
                ' </p>' +
                '</div>';
            return $(html).dialog({
                resizable: opts.resizable,
                modal: opts.modal,
                show: {
                    effect: 'fade',
                    duration: 300
                },
                title: opts.title || "提示信息",
                buttons: {
                    "确定": function() {
                        var dlg = $(this).dialog("close");
                        handlerCall('yes',dlg);
                    },
                    "取消": function() {
                        var dlg = $(this).dialog("close");
                        handlerCall('no',dlg);
                    }
                }
            });
            //private function define
            function handlerIcon(){
                return "ui-icon "+opts.icon;
            }
            //private
            function handlerCall(resultBtn,cmp){
                var callfun=opts.callFun;
                if(callfun!=undefined && typeof(callfun)=='function'){
                    callfun(resultBtn,cmp);
                }
            }
        },
        /**
         * 打开一个URL链接
         * @returns {*}
         * @private
         */
        _openUrl:function(options){
                var defaultOptions={
                    base:"custom-dialog-_openUrl",
                    modal: true,
                    closeOnEscape: false,
                    draggable: true,
                    resizable:true,
                    callFun:null,
                    width: 700,
                    height: 500 ,
                    title:this.title || "打开了一个新窗口",
                    url:'http://www.peachyy.com',
                    close: function(event, ui) {
                        $(this).dialog("destroy");
                    }
                };
              //copy pro
               var opts = $.extend({}, defaultOptions, options);
                var html =
                    '<div class="dialog" id="'+opts.base+'" title="'+opts.title+'">' +
                    ' <iframe src="' + opts.url + '" frameBorder="0" style="border: 0; " scrolling="auto" width="100%" height="100%"></iframe>' +
                    '</div>';
                return $(html).dialog(opts);
        }
    });


})(jQuery);