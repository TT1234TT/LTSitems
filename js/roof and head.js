
//	顶部(买家中心·手机商城·联系客服)
	var roofContentRight = document.querySelectorAll(".roof-content-right li");
	var concerned = document.getElementsByClassName("concerned")[0];
	var roofBuyerCenterIco = document.getElementsByClassName("roof-buyer-center-ico")[0];
	var wrapperRoofPhoneMallImg = document.getElementsByClassName("wrapper-roof-phone-mall-img")[0];
	var roofPhoneMallIco = document.getElementsByClassName("roof-phone-mall-ico")[0];
	var roofContactServiceIco = document.getElementsByClassName("roof-contact-service-ico")[0];
	var roofContactServiceText = document.getElementsByClassName("roof-contact-service-text")[0];
//	console.log(concerned)
	roofContentRight[1].onmouseenter=function(){
		this.style.background="#fff";
		this.getElementsByClassName("roof-buyer-center")[0].style.color="#666";
		this.getElementsByClassName("roof-buyer-center")[0].style.textDecoration="none"
		concerned.style.display="block";
		roofBuyerCenterIco.style.transform="rotateX(180deg)";
	}
	roofContentRight[1].onmouseleave=function(){
		this.style.background="";
		concerned.style.display="none";
		roofBuyerCenterIco.style.transform="";
	}
	roofContentRight[5].onmouseenter=function(){
		this.style.background="#fff";
		this.getElementsByClassName("roof-phone-mall")[0].style.color="#666";
		this.getElementsByClassName("roof-phone-mall")[0].style.textDecoration="none"
		wrapperRoofPhoneMallImg.style.display="block";
		roofPhoneMallIco.style.transform="rotateX(180deg)";
	}
	roofContentRight[5].onmouseleave=function(){
		this.style.background="";
		wrapperRoofPhoneMallImg.style.display="none";
		roofPhoneMallIco.style.transform="";
	}
	roofContentRight[8].onmouseenter=function(){
		this.style.background="#fff";
		this.getElementsByClassName("roof-contact-service")[0].style.color="#666";
		this.getElementsByClassName("roof-contact-service")[0].style.textDecoration="none"
		roofContactServiceText.style.display="block";
		roofContactServiceIco.style.transform="rotateX(180deg)";
	}
	roofContentRight[8].onmouseleave=function(){
		this.style.background="";
		roofContactServiceText.style.display="none";
		roofContactServiceIco.style.transform="";
	}
	
//	头部logo后面的全国
	var headCity = document.getElementsByClassName("head-city")[0];
	var headCityIco = document.getElementsByClassName("head-city-ico")[0];
	var nationwide = document.getElementsByClassName("nationwide")[0];
	var headCityUl = document.getElementsByClassName("head-city-ul")[0];
	
	
	headCity.onmouseenter=function(){
		headCityUl.style.display="block";
		nationwide.style.borderBottom="none";
		headCityIco.style.transform="rotateX(180deg)";
	}
	headCity.onmouseleave=function(){
		headCityUl.style.display="none";
		nationwide.style.borderBottom="";
		headCityIco.style.transform="";
	}
	
	
	//	判断是否登录
//	var isloginUser=cookieObj.get("islogin").slice(0,11);
//	var isloginReturn=cookieObj.get("islogin").slice(11);
//	console.log(isloginReturn)
//	if (isloginReturn) {		
//		document.querySelector(".roof-content-left-login span").innerHTML="您好，";
//		document.getElementsByClassName("roof-content-left-register")[0].innerHTML="退出";
//		document.getElementsByClassName("homepageLogin")[0].innerHTML=isloginUser;
//		document.querySelector(".roof-content-left-register").onclick=function(){
//			
//			var isloginUser=cookieObj.get("islogin").slice(0,11);
//			cookieObj.set({name:"islogin",value:isloginUser});
//			location.reload()
//		}		
//		document.getElementsByClassName("homepageLogin")[0].href="";	
//	}
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

