$(function(){
    $('#fullpage').fullpage({
        //options here
        anchors:["sec01","sec02","sec03","sec04","sec05","sec06"],
		autoScrolling:true,
        afterLoad:function(anchorLink,index){
            console.log("섹션번호"+index);
            if(index==2){
                $(".navimenu01").css("color","#f2d88f");
                $(".navimenu02").css("color","#fff");
                $(".navimenu03").css("color","#fff");
                $(".navimenu04").css("color","#fff");
                $(".navimenu05").css("color","#fff");
            
                
            }else if(index==3){
                $(".navimenu01").css("color","#fff");
                $(".navimenu02").css("color","#f2d88f");
                $(".navimenu03").css("color","#fff");
                $(".navimenu04").css("color","#fff");
                $(".navimenu05").css("color","#fff");

               
            }else if(index==4){
                $(".navimenu01").css("color","#fff");
                $(".navimenu02").css("color","#fff");
                $(".navimenu03").css("color","#f2d88f");
                $(".navimenu04").css("color","#fff");
                $(".navimenu05").css("color","#fff");


               
            }else if(index==6){
                $(".navimenu01").css("color","#fff");
                $(".navimenu02").css("color","#fff");
                $(".navimenu03").css("color","#fff");
                $(".navimenu04").css("color","#fff");
                $(".navimenu05").css("color","#f2d88f");

            
            }
        }
	    });
    });