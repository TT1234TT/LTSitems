window.onload=function(){
	
	var btns=document.querySelectorAll(".login-content-right input")[2];
	var user=document.querySelectorAll(".login-content-right input")[0];
	var pass=document.querySelectorAll(".login-content-right input")[1];
	
	//取出cookie值
	if (cookieObj.get("user")!=undefined) {
		var userstr=cookieObj.get("user");	
//  	console.log(userstr)
		var userarr=JSON.parse(userstr);
		btns.onclick=function(){		
	        if(user.value&&pass.value){
				for(var i=0;i<userarr.length;i++){					
					if(user.value==userarr[i].user){
						if(userarr[i].pass==pass.value){
							//判断是否登录
							cookieObj.set({name:"islogin",value:user.value+"true"});
							var carPcount = 0;
							cookieObj.set({
								name: "carPcount",
								value: carPcount
							});
							
							location.href="homepage.html";
							alert("登录成功");
							return ;
						}else{
							alert("密码错误");
							return ;
						}
						
					}
				}
				alert("用户名不存在");	
			}else{
				alert("用户名或密码不能为空");
			}	
		}
	}else{
		btns.onclick=function(){
			alert("请先注册")
		}		
	}
	

		
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

