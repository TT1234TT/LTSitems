//注册页面的生成验证码
window.onload=function(){
	
	var codes="";
	//函数---生成验证码--生成四位验证码
	function makeCode(){
		//清空
		codes="";
		var arr=["1","2","3","a","b","c","A","B","C"];
		
//			每次选择出4个组成验证码
		for(var i=0;i<4;i++){
			var index=parseInt(Math.random()*arr.length);
			//验证码+=
			codes+=arr[index];
		}
		return codes;
		
	}
		
//	1.页面加载完成 调用验证码函数---显示验证码
	var code=document.getElementById("code");
	code.value=makeCode();
		
		
//	2.给验证码绑定点击事件  ----点击从新生成验证码
	code.onclick=function(){
		this.value=makeCode();
	}
	
	
//	验证手机号码
	var registerPhone=document.getElementsByClassName("register-phone")[0];
	var	iphoneIco0=document.getElementsByClassName("iphone-ico")[0];
	var	iphoneMistake0=document.getElementsByClassName("iphone-mistake")[0];
	registerPhone.onblur=function(){
		var phoneReg=/^1[3|4|5|7|8]\d{9}$/;
		if(!phoneReg.test(this.value)){
			iphoneIco0.innerHTML="×";
			iphoneMistake0.innerHTML="请填写有效的11位手机号码"
		}else{
			iphoneIco0.innerHTML="√";
			iphoneMistake0.innerHTML=""
		}
	}
	//	验证验证码
	var registerCode=document.getElementsByClassName("register-code")[0];
	var code=document.getElementById("code");
	var	iphoneIco1=document.getElementsByClassName("iphone-ico")[1];
	var	iphoneMistake1=document.getElementsByClassName("iphone-mistake")[1];
		registerCode.onblur=function(){	
			if(registerCode.value==code.value){
				iphoneIco1.innerHTML="√";
				iphoneMistake1.innerHTML=""
			}else{
				
				code.value=makeCode();
				iphoneIco1.innerHTML="×";
				iphoneMistake1.innerHTML="请填写验证码"
			}
		}
		
//	验证第一次密码
	var registerPassOne=document.getElementsByClassName("register-passOne")[0];
	var	iphoneIco2=document.getElementsByClassName("iphone-ico")[2];
	var	iphoneMistake2=document.getElementsByClassName("iphone-mistake")[2];
		registerPassOne.onblur=function(){
			// a-z或0-9 开头并6到10位
			var phoneReg=/^[a-z0-9]{6,10}$/;
			if(phoneReg.test(registerPassOne.value)){
				iphoneIco2.innerHTML="√";
				iphoneMistake2.innerHTML=""
			}else{
				iphoneIco2.innerHTML="×";
				iphoneMistake2.innerHTML="请填写a-z或0-9 开头并6到10位的密码"
			}
		}
//	验证第二次密码	
	var registerPassTwo=document.getElementsByClassName("register-passTwo")[0];
	var	iphoneIco3=document.getElementsByClassName("iphone-ico")[3];
	var	iphoneMistake3=document.getElementsByClassName("iphone-mistake")[3];
	registerPassTwo.onblur=function(){
		if (registerPassTwo.value==registerPassOne.value) {
			iphoneIco3.innerHTML="√";
			iphoneMistake3.innerHTML=""
		} else{
			iphoneIco3.innerHTML="×";
			iphoneMistake3.innerHTML="前后两次密码不一致"
		}		
	}
	
//	点击注册 所有iphone-ico内都显示√可以提交 --否则不能提交
	var	iphoneIco=document.getElementsByClassName("iphone-ico");
	var registerSubmit=document.getElementById("register-submit");

	registerSubmit.onclick=function(){
		var x=true;
		for(var i=0;i<iphoneIco.length;i++){
			if(iphoneIco[i].innerHTML!="√"){
				x=false;
			}
		}
		//  如果没有user=[]--设置一下
	if(cookieObj.get("user")==undefined){
		cookieObj.set({name:"user",value:"[]"});
	}
		var userval=document.getElementsByClassName("register-phone")[0].value;
		var passval=document.getElementsByClassName("register-passOne")[0].value;		
		if(userval&&passval&&x){			
			var userstr=cookieObj.get("user");		
			var userarr=JSON.parse(userstr);
			//判断用户名是否出现
			for(var i=0;i<userarr.length;i++){
				if(userarr[i].user==userval){
					alert("用户名已存在");
					return 
				}				
			}
			//添加新用户
			userarr.push({user:userval,pass:passval});
			console.log(userarr)
			//添加好的数组转回字符串 
			var newstr=JSON.stringify(userarr);
			console.log(newstr)
			//转回的字符串  设置回cookie
			cookieObj.set({name:"user",value:newstr});			
			alert("注册成功");
			console.log(document.cookie)
			location.href="login.html";			
		}else{
			alert("请正确输入内容");
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}