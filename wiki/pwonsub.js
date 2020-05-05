var  subcheck = function subcheck() {
  if(join.id.value == "") {
    alert("값을 입력해 주세요.");
    join.id.focus();
    return false;
  }
  else if(join.pw.value == "") {
    alert("값을 입력해 주세요.");
    join.pw.focus();
    return false;
  }
  else if(join.pw2.value == "") {
    alert("값을 입력해 주세요.");
    join.pw2.focus();
    return false;
  }
  else if(join.email.value == "") {
    alert("값을 입력해 주세요.");
    join.email.focus();
    return false;
  }
  else return true;
}
