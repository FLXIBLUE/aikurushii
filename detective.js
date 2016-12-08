$(function(){
    console.log('success!');

//村人登録
$('#memberInput').click(function(){
    var member=$('#member').val().split(/\s+/);
    $("#vil1").text(member[0]);
    $("#vil2").text(member[1]);
    $("#vil3").text(member[2]);
    $("#vil4").text(member[3]);
    $("#vil5").text(member[4]);
    $("#vil6").text(member[5]);
    $("#vil7").text(member[6]);
    $("#vil8").text(member[7]);
    $("#vil9").text(member[8]);
    $("#vil10").text(member[9]);
    $("#vil11").text(member[10]);
});


$('#testbtn').click(function(){
    console.log('start');
    var alive=$("#death_table").children().length;
    alive=18-alive;
    $('#alive').text(alive);
    var gray = $("#gray_table").children().length;
    gray=gray-1;
    $('#gray').text(gray);
});



$('.vil_button').click(function(){
    var name=$(this).closest('tr').children('td').eq(0).text();
    $('.modal-title').text(name);
});

$('.co').click(function(){
    var name=$('.modal-title').text();
    var select=$(".villagers:contains("+name+")");
        select.each(function(){
        if($(this).text() == name){
        select = $(this);    
        }
        });
    var act=this.id;

    if(act=='cancel'){
        if($('.fortune1:first-child').text()==name){
            $('.fortune1').text("");
        }else if($('.fortune2:first-child').text()==name){
            $('.fortune2').text("");
        }else if($('.fortune3').text()==name){
            $('.fortune3').text("");
        }
        if($('#spiritual1:first-child').text()==name){
            $('.spiritual1').text("");
        }else if($('#spiritual2:first-child').text()==name){
            $('.spiritual2').text("");
        }        
     $(select).closest('tr').children('td').eq(2).text('');
     $((select).closest('tr')).insertAfter('#grayList');
     return;
    }
    
    if(act=='fortune'){
        $(select).closest('tr').children('td').eq(2).text('占い師');
        if($('.fortune1').text()==""){
            $('.fortune1').text(name);
        }else if($('.fortune2').text()==""){
            $('.fortune2').text(name);
        }else if($('.fortune3').text()==""){
            $('.fortune3').text(name);
        }
    }
    
    if(act=='spiritual'){
        $(select).closest('tr').children('td').eq(2).text('霊能');
        if($('#spiritual1').text()==""){
            $('.spiritual1').text(name);
        }else if($('#spiritual2').text()==""){
            $('.spiritual2').text(name);
        }
    }
    
    if(act=='share'){
     $(select).closest('tr').children('td').eq(2).text('共有');       
    }
    if(act=='hunter'){
     $(select).closest('tr').children('td').eq(2).text('狩人');       
    }
    if(act=='fox'){
     $(select).closest('tr').children('td').eq(2).text('狐');
    }
    if(act=='werewolf'){
     $(select).closest('tr').children('td').eq(2).text('狼');       
    }
    if(act=='madness'){
     $(select).closest('tr').children('td').eq(2).text('狂人');       
    }
    $((select).closest('tr')).insertAfter('#jobList');
});






$('.death').click(function(){
    var name=$('.modal-title').text();
    var select=$(".villagers:contains("+name+")")
    var act=this.id;
    var row = $(this).closest('tr').index()-1;
    console.log(row);

    if(act=='hanged'){
        $(select).closest('tr').children('td').eq(8).text(row+'日目');
    }else if(act=='bite'){
        $(select).closest('tr').children('td').eq(9).text(row+'日目');
    }
    $((select).closest('tr')).insertAfter('#deathList');
});


$('.fortune').click(function(){
    var name=$('.modal-title').text();
    var select=$(".villagers:contains("+name+")")
    var act=this.id;
    var row = $(this).closest('tr').index()-1;
    
    if(act=='white'){
        $(select).closest('tr').children('td').eq(3).text(row+'日目○');
        name+="○";
    }else if(act=='black'){
        $(select).closest('tr').children('td').eq(3).text(row+'日目●');
        name+="●";
    }else if(act=='white2'){
        $(select).closest('tr').children('td').eq(4).text(row+'日目○');
        name+="○";
    }else if(act=='black2'){
        $(select).closest('tr').children('td').eq(4).text(row+'日目●');
        name+="●";
    }else if(act=='white3'){
        $(select).closest('tr').children('td').eq(5).text(row+'日目○');
        name+="○";
    }else if(act=='black3'){
        $(select).closest('tr').children('td').eq(5).text(row+'日目●');
        name+="●";
    }
    $(this).parent('th').html('<button type="button" class="btn-primary btn-xm fortune" id="cancel">name</button>');
});

$('.spiritual').click(function(){
    var name=$('.modal-title').text();
    var select=$(".villagers:contains("+name+")")
    var act=this.id;
    var row = $(this).closest('tr').index()-1;

    if(act=='w'){
        $(select).closest('tr').children('td').eq(6).text(row+'日目○');
        name+="○";
    }else if(act=='b'){
        $(select).closest('tr').children('td').eq(6).text(row+'日目●');
        name+="●";
    }else if(act=='w2'){
        $(select).closest('tr').children('td').eq(7).text(row+'日目○');
        name+="○";
    }else if(act=='b2'){
        $(select).closest('tr').children('td').eq(7).text(row+'日目●');
        name+="●";
    }
});


    
});



