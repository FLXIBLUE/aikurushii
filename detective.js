$(function(){
    console.log('success!');

//村人登録
$('#memberInput').click(function(){
    var member=$('#member').val().split(/\s+/);
    $(".vil1").text(member[0]);
    $(".vil2").text(member[1]);
    $(".vil3").text(member[2]);
    $(".vil4").text(member[3]);
    $(".vil5").text(member[4]);
    $(".vil6").text(member[5]);
    $(".vil7").text(member[6]);
    $(".vil8").text(member[7]);
    $(".vil9").text(member[8]);
    $(".vil10").text(member[9]);
    $(".vil11").text(member[10]);
    $(".vil12").text(member[11]);
    $(".vil13").text(member[12]);
    $(".vil14").text(member[13]);
    $(".vil15").text(member[14]);
    $(".vil16").text(member[15]);
    $(".vil17").text(member[16]);
});

$('#testbtn').click(function(){
    var alive=$("#death_table").children().length;
    alive=18-alive;
    $('#alive').text(alive);
    var gray = $("#gray_table").children().length;
    gray=gray-1;
    $('#gray').text(gray);
});


$('.co').click(function(){
    var title=$(this).closest('tr').children('th').eq(0).text();
    $('#co-title').text(title);
});

$('.co_b').click(function(){
    var title=$('#co-title').text();
    var name=$(this).text();

      if(title=='占い1'){
            $('#job1').text(name);
            $('#predict1').text(name);
      }else if(title=='占い2'){
            $('#job2').text(name);
            $('#predict2').text(name);
      }else if(title=='占い3'){
            $('#job3').text(name);
            $('#predict3').text(name);
      }else if(title=='霊能1'){
            $('#job4').text(name);
      }else if(title=='霊能2'){
            $('#job5').text(name);
      }else if(title=='共有1'){
            $('#job6').text(name);
      }else if(title=='共有2'){
            $('#job7').text(name);
      }else if(title=='狩人1'){
            $('#job8').text(name);
      }else if(title=='狩人2'){
            $('#job9').text(name);
      }
    $(".gray").removeClass("add_co");
    $(".gray:contains("+$('#job1').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job2').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job3').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job4').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job5').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job6').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job7').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job8').text()+")").addClass("add_co");
    $(".gray:contains("+$('#job9').text()+")").addClass("add_co");
});




$('.death').on('click',function(){
      var day=$(this).closest('tr').children('th').eq(0).text();
      $('#death-title').text(day);
});

$('.bite_b').on('click',function(){
    var title=$('#death-title').text();
    var name=$(this).text();

      if($('input[name=options]:checked').val()=='2死体目'){
            if(title=='2日目'){
                  $('#bite2').text($('#bite2').text()+"/"+name);
            }else if(title=='3日目'){
                  $('#bite3').text($('#bite3').text()+"/"+name);
            }else if(title=='4日目'){
                  $('#bite4').text($('#bite4').text()+"/"+name);
            }else if(title=='5日目'){
                  $('#bite5').text($('#bite5').text()+"/"+name);
            }else if(title=='6日目'){
                  $('#bite6').text($('#bite6').text()+"/"+name);
            }else if(title=='7日目'){
                  $('#bite7').text($('#bite7').text()+"/"+name);
            }else if(title=='8日目'){
                  $('#bite8').text($('#bite8').text()+"/"+name);
            }else if(title=='9日目'){
                  $('#bite9').text($('#bite9').text()+"/"+name);
            }         
      }else{
            if(title=='2日目'){
                  $('#bite2').text(name);
            }else if(title=='3日目'){
                  $('#bite3').text(name);
            }else if(title=='4日目'){
                  $('#bite4').text(name);
            }else if(title=='5日目'){
                  $('#bite5').text(name);
            }else if(title=='6日目'){
                  $('#bite6').text(name);
            }else if(title=='7日目'){
                  $('#bite7').text(name);
            }else if(title=='8日目'){
                  $('#bite8').text(name);
            }else if(title=='9日目'){
                  $('#bite9').text(name);
            }
      }
      var bite2=$('#bite2').text().split("/");
      var bite3=$('#bite3').text().split("/");
      var bite4=$('#bite4').text().split("/");
      var bite5=$('#bite5').text().split("/");
      var bite6=$('#bite6').text().split("/");
      var bite7=$('#bite7').text().split("/");
      var bite8=$('#bite8').text().split("/");
      var bite9=$('#bite9').text().split("/");

      $(".gray").removeClass('add_bite')
      $(".gray:contains("+bite2[0]+")").addClass("add_bite");
      $(".gray:contains("+bite2[1]+")").addClass("add_bite");
      $(".gray:contains("+bite3[0]+")").addClass("add_bite");
      $(".gray:contains("+bite3[1]+")").addClass("add_bite");
      $(".gray:contains("+bite4[0]+")").addClass("add_bite");
      $(".gray:contains("+bite4[1]+")").addClass("add_bite");
      $(".gray:contains("+bite5[0]+")").addClass("add_bite");
      $(".gray:contains("+bite5[1]+")").addClass("add_bite");
      $(".gray:contains("+bite6[0]+")").addClass("add_bite");
      $(".gray:contains("+bite6[1]+")").addClass("add_bite");
      $(".gray:contains("+bite7[0]+")").addClass("add_bite");
      $(".gray:contains("+bite7[1]+")").addClass("add_bite");
      $(".gray:contains("+bite8[0]+")").addClass("add_bite");
      $(".gray:contains("+bite8[1]+")").addClass("add_bite");
      $(".gray:contains("+bite9[0]+")").addClass("add_bite");
      $(".gray:contains("+bite9[1]+")").addClass("add_bite");
});


$('.hang_b').on('click',function(){
    var title=$('#death-title').text();
    var name=$(this).text();

      if($('input[name=options]:checked').val()=='2死体目'){    
            if(title=='1日目'){
                  $('#hang1').text($('#hang1').text()+"/"+name);
            }else if(title=='2日目'){
                  $('#hang2').text($('#hang2').text()+"/"+name);
            }else if(title=='3日目'){
                  $('#hang3').text($('#hang3').text()+"/"+name);
            }else if(title=='4日目'){
                  $('#hang4').text($('#hang4').text()+"/"+name);
            }else if(title=='5日目'){
                  $('#hang5').text($('#hang5').text()+"/"+name);
            }else if(title='6日目'){
                  $('#hang6').text($('#hang6').text()+"/"+name);
            }else if(title=='7日目'){
                  $('#hang7').text($('#hang7').text()+"/"+name);
            }else if(title=='8日目'){
                  $('#hang8').text($('#hang8').text()+"/"+name);
            }else if(title=='9日目'){
                  $('#hang9').text($('#hang9').text()+"/"+name);
            }
      }else{
            if(title=='1日目'){
                  $('#hang1').text(name);
            }else if(title=='2日目'){
                  $('#hang2').text(name);
            }else if(title=='3日目'){
                  $('#hang3').text(name);
            }else if(title=='4日目'){
                  $('#hang4').text(name);
            }else if(title=='5日目'){
                  $('#hang5').text(name);
            }else if(title='6日目'){
                  $('#hang6').text(name);
            }else if(title=='7日目'){
                  $('#hang7').text(name);
            }else if(title=='8日目'){
                  $('#hang8').text(name);
            }else if(title=='9日目'){
                  $('#hang9').text(name);
            }
      }
            
      var hang2=$('#hang2').text().split("/");
      var hang3=$('#hang3').text().split("/");
      var hang4=$('#hang4').text().split("/");
      var hang5=$('#hang5').text().split("/");
      var hang6=$('#hang6').text().split("/");
      var hang7=$('#hang7').text().split("/");
      var hang8=$('#hang8').text().split("/");
      var hang9=$('#hang9').text().split("/");

      $(".gray").removeClass('add_hang')
      $(".gray:contains("+hang2[0]+")").addClass("add_hang");
      $(".gray:contains("+hang2[1]+")").addClass("add_hang");
      $(".gray:contains("+hang3[0]+")").addClass("add_hang");
      $(".gray:contains("+hang3[1]+")").addClass("add_hang");
      $(".gray:contains("+hang4[0]+")").addClass("add_hang");
      $(".gray:contains("+hang4[1]+")").addClass("add_hang");
      $(".gray:contains("+hang5[0]+")").addClass("add_hang");
      $(".gray:contains("+hang5[1]+")").addClass("add_hang");
      $(".gray:contains("+hang6[0]+")").addClass("add_hang");
      $(".gray:contains("+hang6[1]+")").addClass("add_hang");
      $(".gray:contains("+hang7[0]+")").addClass("add_hang");
      $(".gray:contains("+hang7[1]+")").addClass("add_hang");
      $(".gray:contains("+hang8[0]+")").addClass("add_hang");
      $(".gray:contains("+hang8[1]+")").addClass("add_hang");
      $(".gray:contains("+hang9[0]+")").addClass("add_hang");
      $(".gray:contains("+hang9[1]+")").addClass("add_hang")
});


$('.predict').on('click',function(){
      var day=$(this).val();
      console.log(day);
      var fortune="";
      if($(this).hasClass('predict1')){
            fortune='占い1';
      }else if($(this).hasClass('predict2')){
            fortune='占い2';
      }else if($(this).hasClass('predict3')){
            fortune='占い3';
      }
      fortune=fortune+'/'+day;
      $('#predict-title').text(fortune);
});


$(document).on('click','.predict_b',function(){
      var title=$('#predict-title').text();
      title=title.split("/");
      var fortune=title[0];
      var day=title[1];
      var name=$(this).text();
      var select="";
      
      $('#table1-1').removeClass("siro kuro blank");
      if(fortune=="占い1"){
            select=$(".gray1:contains("+name+")");
                  if(day=='1日目'){
                        $('#predict1-1').text(name);
                        if($(this).hasClass('black')){
                              $('#result1-1').text("●");
                              $('#table1-1').addClass("kuro");
                        }else{
                              $('#result1-1').text("○");
                              $('#table1-1').addClass("siro");
                        }
                  }else if(day=='2日目'){
                        $('#predict1-2').text(name);
                        if($(this).hasClass('black')){
                              $('#result1-2').text("●");
                              $('#table1-2').addClass("kuro");
                        }else{
                              $('#result1-2').text("○");
                              $('#table1-2').addClass("siro");
                        }

                  }else if(day=='3日目'){
                        $('#predict1-3').text(name);
                        if($(this).hasClass('black')){
                              $('#result1-3').text("●");
                              $('#table1-3').addClass("kuro");
                        }else{
                              $('#result1-3').text("○");
                              $('#table1-3').addClass("siro");
                        }
                  }else if(day=='4日目'){
                        $('#predict1-4').text(name);
                        if($(this).hasClass('black')){
                              $('#result1-4').text("●");
                              $('#table1-4').addClass("kuro");
                        }else{
                              $('#result1-4').text("○");
                              $('#table1-4').addClass("siro");
                        }
                  }
      }
      if(fortune=="占い2"){
            select=$(".gray2:contains("+name+")");
                  if(day=='1日目'){
                  }else if(day=='2日目'){
                  }else if(day=='3日目'){
                  }else if(day=='4日目'){
                  }
      }
      if(fortune=="占い3"){
            select=$(".gray3:contains("+name+")");
                  if(day=='1日目'){
                  }else if(day=='2日目'){
                  }else if(day=='3日目'){
                  }else if(day=='4日目'){
                  }
      }
      $(".gray1").removeClass('add_predict')
      $(".gray1:contains("+$('#predict1-1').text()+")").addClass("add_predict");
      $(".gray1:contains("+$('#predict1-2').text()+")").addClass("add_predict");
      $(".gray1:contains("+$('#predict1-3').text()+")").addClass("add_predict");
      $(".gray1:contains("+$('#predict1-4').text()+")").addClass("add_predict");
    
});


});