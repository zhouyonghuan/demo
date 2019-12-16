$(function(){
  $('#fullpage').fullpage({
    sectionsColor:['red','blue','pink','yellow','#d04759','#84d9ed','red'],
    navigation:true,
    afterLoad: function(anchorLink,index){
    //  if(index==2){
    //    $(".qbh-list-computer .search-box").animate({"opacity": 1,"right":180},1000,function(){
    //        $(this).hide();
    //        $(".qbh-list-word img:first-child").animate({"opacity":0},1000);
    //        $(".qbh-list-word img:last-child").animate({"opacity":0},1000);
    //        $(".qbh-list-search-finish").show().animate({"right": 39,"bottom": 428,"width":156、},1000,function(){
    //            $(".qbh-list-sofas").animate({"width":441},1000);
    //        })   
    //      })
    //     }
      },onLeave:function(index,nextIndex,direction){
        //  index 现在的页面的 下标  nextIndex是先一个页面的下标


        //  if(index == 2 && nextIndex == 3){
        //   $(".qbh-list .qbh-list-sofa-pic").show().animate({
        //     "right":290,
        //      "bottom":-410,
        //       "width":200,
        //       "z-index":300,
        //   },1000,function () {
        //     $(".qbh-buy .qbh-buy-main .no-choose").animate({"opacity": 0});
        //     $(".qbh-buy .qbh-buy-main .choose").animate({"opacity": 1});
        //    })
        //  };

        //  if(index == 3 && nextIndex == 4){
        //    $(".sofa-list .qbh-list-sofa-pic").hide(); 
        //    $(".qbh-info-rotate-sofa").show().animate({"left": 150,"bottom": 270},1000,function(){
        //     $(".qbh-info-box").animate({"left":2000},500,function(){
        //       $(".qbh-info-address-box").animate({"opacity":1},1000,function(){
        //         $(".qbh-info-address").animate({"opacity":1},1000);
        //         $(".qbh-info-worda").animate({"opacity":0},1000);
        //       })
        //     })
        //    })
        //  }

      }

  });











});