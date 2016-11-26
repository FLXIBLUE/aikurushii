
$(function(){
    var map="";
    var mode="";


$('#memberInput').click(function(){
    var member=$('#member').val().split(/\s+/);

    var vil1=(member[0]);
    var vil2=(member[1]);
    var vil3=(member[2]);
    var vil4=(member[3]);
    var vil5=(member[5]);
    var vil6=(member[6]);
    var vil7=(member[7]);
    var vil8=(member[8]);



$("#vil1").text(vil1);
$("#vil2").text(vil2);
$("#vil3").text(vil3);
$("#vil4").text(vil4);
$("#vil5").text(vil5);
$("#vil6").text(vil6);
$("#vil7").text(vil7);
$("#vil8").text(vil8);


$("#vil1b").text(vil1);
$("#vil2b").text(vil2);
$("#vil3b").text(vil3);
$("#vil4b").text(vil4);
$("#vil5b").text(vil5);
$("#vil6b").text(vil6);
$("#vil7b").text(vil7);
$("#vil8b").text(vil8);
})


$(".innerBox").click(function(){
    var execute="#"+this.id;
    var executeText=$(this).text();
    
    if(mode=='death'){
        $(".villegers:contains("+executeText+")").appendTo('#death_list');
    }else if(mode=='job'){
        $(".villegers:contains("+executeText+")").appendTo('#job_list');
    }

    
    
    $(execute).click(function(){
        $(map).text(executeText);
    });
    modalClose();
});


$(".modalOpen").click(function(){
    map="#"+this.id;
    mode="death";
    var navClass = $(this).attr("class"),
        href = $(this).attr("href");
        $(href).fadeIn();
    $(this).addClass("open");
    return false;
});

$(".jobOpen").click(function(){
    map="#"+this.id;
    mode="job";
    var navClass = $(this).attr("class"),
        href = $(this).attr("href");
        $(href).fadeIn();
    $(this).addClass("open");
    return false;
});


function modalClose(){
    $(".modalClose").click(function(){
        $(this).parents(".modal").fadeOut();
        $(".modalOpen").removeClass("open");
        return false;
    }); 
}


});