$(document).ready(function () {
        $("#fullpage").fullpage({
            //可以为每个section项分配一个颜色
            sectionsColor:["","","","",""],
            //控制箭头是否消失
            controlArrows:true,
            verticalCentered:false,
            //滑动滚动速度
            scrollingSpeed:1000,
            //锚链接,可以快速定位到某个页面
            //anchors:["page1","page2","page3","page4"],
            //滚动到最顶部后是否连续滚动到地步
            //loopTop:true,
            //滚动到最底部后是否连续滚动到顶步
            //loopBottom:true,
            //横向slide幻灯片是否循环滚动
//            loopHorizontal:false,
            //如果设为false,将会使用浏览器自带的滚动条,不会按页滚动
            autoScrolling:true,
            //控制小圆点是否出现
            navigation:true,
            navigationPosition:"right",
            //navigationTooltips:["page1","page2","page3","page4"],
            //是否显示当前页面的导航信息
            showActiveTooltip:true,
    //是否显示横向幻灯片的导航
            slidesNavigation:true,
                afterLoad: function(anchorLink, index){
            
                        if(index==1){
                            
                        }
                        if(index==2){
                         
                        }
                        if(index==3){
                           
                        }
                        if(index==4){
                          
                        }

                }
        })
})

