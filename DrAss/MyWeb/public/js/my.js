$(document).ready(function () {
    $('#member_insert_btn').click(function () {
        const fname=$('#fname').val();
        const lname=$('#lname').val();
        const email=$('#email').val();
        const subject=$('#subject').val();
        const message=$('#message').val();
        const send_params={
            fname,
            lname,
            email,
            subject,
            message
        };
        
        $.post("/member_insert",send_params,function (data,status) {
            const parsed_data=JSON.parse(data);
           // alert(parsed_data.msg);
            //console.log("fname" + fname);
            $('#result_div').html(`<h1>${parsed_data.msg}</h1>`);
        });
    });

    $('#login_btn').click(function () {        
        const email=$('#login_email').val();        
        const send_params={   
            email
        };    
        $.post("/login",send_params,function (data,status) {
            try {
                alert(JSON.parse(data).msg);
                $('#login_email').val()="";
                
            } catch (err) {
                window.location.reload(true);
                
            }
        });     
    });

    $("#logout_btn").click(function() {
        console.log("로그아웃");
        $.get("/logout", function(data, status) {
          location.reload();
        });
      });

    $('#candidateInfoSearch_btn').click(function () {        
        const searchType=$('#searchType').val();    
        const car_num_input=$('#car_num_input').val();     
        const send_params={           
            searchType,
            car_num_input
        };        
        $.post("/search_candidate",send_params,function (data,status) {
            //alert(data+":"+status);
            const parsed_data=JSON.parse(data);
            if(parsed_data.msg=='기호 번호 또는 이름이 입력되지 않았습니다.') {
                alert(parsed_data.msg);
            }else{
                let printData='<table border=1>';
                for(key in parsed_data.msg) {
                    printData += `<tr><td>${key}</td><td>${parsed_data.msg[key]}</td></tr>`;
                }
                printData += '</table>';         
                $('#carBasicInfoSearch_div').html(`기호 1번 문재인${printData}<br><br><br><br><br>`);
            

            }


        });        
    });


    

});