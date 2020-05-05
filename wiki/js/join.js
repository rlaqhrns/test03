var id = $("#id").val();
var name = $("#name").val();
var email = $("#email").val();
var password1 = $("#pw1").val();
var password2 = $("#pw2").val();




$(document).ready(function validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
return re.test(email);
});
function subcheck() {
  if(join.name.value === "") {
    $("#message").html("이름을 입력해 주세요.").css("color","red")
    join.name.focus();
    return false;
  }
  else if(join.id.value === "") {
    $("#message").html("아이디를 입력해 주세요.").css("color","red")
    join.id.focus();
    return false;
  }
  else if(join.email.value === "") {
    $("#message").html("이메일을 확인해 주세요.").css("color","red")
    join.email.focus();
    return false;
  }
  else if(join.pw1.value === "") {
    $("#message").html("비밀번호를 입력해 주세요.").css("color","red")
    join.pw1.focus();
    return false;
  }
  else if(join.pw2.value === "") {
    $("#message").html("비밀번호확인 해 주세요.").css("color","red")
    join.pw2.focus();
    return false;
  }
  else if(join.pw1.value !== join.pw2.value){
    $("#message").html("비밀번호가 일치하지않습니다.").css("color","red")
    join.pw2.focus();
    return false;
  }
  else if(join.gender.value === ""){
    $("#message").html("성별을 입력해주세요.").css("color","red")
    return false;
  }
  else if(join.birthday.value === ""){
    $("#message").html("생년월일을 입력해주세요.").css("color","red")
    join.birthday.focus();
    return false;
  }

  else return true;
}

// $(document).ready(
//
//   function(){
//
//   if (password1 !== password2){
//     alert("비밀번호가 일치하지않습니다.")
//     join.pw2.focus();
//     return false;
//   }
//
//
//   else {
//     return true;
//   }
// });
// $(document).ready(function () {
//   $('#email').keyup(function () {
//       var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//       if (re.test($(this).val())) {
//
//           $(this).css("borderColor", "green");
//
//       } else {
//
//           $(this).css("borderColor", "red");
//
//       }
//   });
// });
//
// $(document).ready(function () {
//   $('#pw1, #pw2').on('keyup', function () {
//       if ($('#pw1').val() === $('#pw2').val()) {
//           $('#message').html('일치').css('color', 'green');
//
//       } else
//           $('#message').html('비밀번호가 일치 하지않습니다.').css('color', 'red');
//
//   });
// });
//
//
// ////////////////////////
