

(function($){
    //定义小组件  第一个参数为命名空间 .点后面的为插件名称 ，第二个参数为原型
    $.widget('peachyy.simpletable',{
        options:{
                className:"cmp",
                baseCss:'ui-widget-simpletable',
               width:500,
               height:300

        },
        _create:function(){
            var options=this.options;
            var ele=this.element;
            ele.addClass(options.baseCss+"-"+options.className);
            ele.width(options.width);
            ele.height(options.height);
            //设置头部tr的样式ui-widget-simpletable-header
            ele.find("thead tr").addClass(options.baseCss+"-header-"+options.className);
            ele.find("tbody tr").addClass(options.baseCss+"-tr-"+options.className);

            ele.find("tbody tr").on("mouseover",function(){
               $(this).addClass(options.baseCss+"-houre-"+options.className);
            }).on("mouseout",function(){
                $(this).removeClass(options.baseCss+"-houre-"+options.className);
            });

        },
        _destory:function(){

        }

    });

})(jQuery)