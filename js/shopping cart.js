window.onload=function(){
	

	
	
	
	
	
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
	
	//	判断是否登录
	var homepageRegister=document.getElementsByClassName("homepageRegister")[0];
	var homepageLogin=document.getElementsByClassName("homepageLogin")[0];
	var welcome=document.querySelector(".roof-content-left-login span");
	var unislogin=cookieObj.get("islogin");
//	console.log(unislogin!=undefined)
	if (unislogin!=undefined) {
		var isloginUser=cookieObj.get("islogin").slice(0,11);
		var isloginReturn=cookieObj.get("islogin").slice(11);
		if (isloginReturn) {
			console.log(cookieObj.get("carPcount"))
			document.getElementsByClassName("shoppingCart-Pcount")[0].innerHTML=cookieObj.get("carPcount");
			welcome.innerHTML="您好，";
			homepageRegister.innerHTML="退出";
			homepageLogin.href="";
			homepageLogin.innerHTML=isloginUser;
			homepageRegister.onclick=function(){				
				var isloginUser=cookieObj.get("islogin").slice(0,11);
				cookieObj.set({name:"islogin",value:isloginUser});
				location.reload()
			}		
		}
	}
	
	
	
	//	生成列表
	var tableContent = document.getElementsByClassName("table-content")[0];
	var shoppingCartContent=document.getElementsByClassName("shoppingCart-content")[0];
	var noGoods=document.getElementsByClassName("no-goods")[0];
	
	//判断cookie中 是否 有 datas:[]
	var cookie=cookieObj.get("datas");
	var cookiearr=JSON.parse(cookie);
	if(cookie==undefined||cookiearr==0){		
		shoppingCartContent.style.display = "none";
		noGoods.style.display = "block";
	}else{
		shoppingCartContent.style.display = "block";
		noGoods.style.display = "none";
	}
	var cookiearr=JSON.parse(cookie);
//	console.log(cookiearr)
	// 动态生成列表
	var str = "";
	for (var i = 0; i < cookiearr.length; i++) {
		str+='<tr class="goods-tr" pid="'+cookiearr[i].pid+'">'
					+'<td class="goods-tr-oneTd">'
						+'<input type="checkbox" class="checks" value="" />'
						+'<div class="goods-img">'
							+'<img src="'+cookiearr[i].imgsrc+'"/>'
						+'</div>'
						+'<div class="goods-text">'
							+'<h3><a href="">'+cookiearr[i].pname+'</a></h3>'
							+'<div class="goods-color">'
								+'<span>颜色: </span><span>'+cookiearr[i].color+'</span><br />'
							+'</div>'
							+'<span>套装: </span><span>官方标配</span>'
						+'</div>'
					+'</td>'	
					+'<td class="goods-tr-twoTd">'+cookiearr[i].price+'</td>'
					+'<td class="goods-tr-threeTd">'
						+'<div class="wrapper-quantity">'
							+'<button class="minus">-</button>'
							+'<input type="text" name="" class="goods-quantity" value="'+cookiearr[i].pcount+'" />'
							+'<button class="add">+</button>'
						+'</div>'
					+'</td>'
					+'<td class="goods-tr-fourTd">'+Number(cookiearr[i].pcount*cookiearr[i].price)+'</td>'
					+'<td class="goods-tr-fiveTd"><span class="goods-tr-fiveTd-span">删除</span></td>'
				+'</tr>'
	}
	tableContent.innerHTML=str;
	
	var checks = document.getElementsByClassName("checks");
	//计算总价函数
	function TotalPrice() {
		var sums = 0;		
		for(var i = 0; i < checks.length; i++) {
			if(checks[i].checked == true) {				
				sums += Number(checks[i].parentNode.parentNode.children[3].innerHTML);
			}
		}
		return sums		
	}
	//计算商品总数量函数
	function TotalGoods() {
		var sumGoods = 0;		
		for(var i = 0; i < checks.length; i++) {
			if(checks[i].checked == true) {				
				sumGoods += Number(checks[i].parentNode.parentNode.children[2].children[0].children[1].value);
			}
		}
		return sumGoods		
	}
	var topTotal=document.getElementsByClassName("top-total")[0];
	var bottomTotal=document.getElementsByClassName("bottom-total")[0];
	var goodsTopTotal=document.getElementsByClassName("goods-top-total")[0];
	var goodsBottomTotal=document.getElementsByClassName("goods-bottom-total")[0];	
//	更新商品数量和总价的函数
	function TotalGoodsPrice(){
		for (var i = 0; i < checks.length; i++) {
			if(checks[i].checked == true) {				
				bottomTotal.innerHTML=topTotal.innerHTML=TotalPrice();				
				goodsBottomTotal.innerHTML=goodsTopTotal.innerHTML=TotalGoods();
			}else{
				topTotal.innerHTML=0;
				bottomTotal.innerHTML=0;
				goodsTopTotal.innerHTML=0;
				goodsBottomTotal.innerHTML=0;
			}
		}
	}
	TotalGoodsPrice();
//  给所有的复选框绑定change事件
	for (var i = 0; i < checks.length; i++) {
		checks[i].onchange=function(){
			//判断是否全选
			checkall();
			bottomTotal.innerHTML=topTotal.innerHTML=TotalPrice();				
			goodsBottomTotal.innerHTML=goodsTopTotal.innerHTML=TotalGoods();
		}		
	}
	
//	给全选绑定change事件
	var allCheck = document.getElementsByClassName("allCheck")[0];
	allCheck.onchange = function() {
		for(var i = 0; i < checks.length; i++) {
			checks[i].checked = this.checked;
		}
		TotalGoodsPrice();		
	}
//判断复选框全选函数
	function checkall() {
		var flag = true;
		for(var i = 0; i < checks.length; i++) {
			if(checks[i].checked == false) {
				flag = false;
				break;
			}
		}
		if(flag) {
			allCheck.checked = true;
		} else {
			allCheck.checked = false;
		}
	}
	
//	减数量
	var minus=document.getElementsByClassName("minus");
	for (var i = 0; i < minus.length; i++) {
		minus[i].onclick=function(){
			this.nextSibling.value=Number(this.nextSibling.value)-1;
			this.parentNode.parentNode.nextSibling.innerHTML=this.nextSibling.value*this.parentNode.parentNode.previousSibling.innerHTML;
			var firstchecked=this.parentNode.parentNode.parentNode.firstChild.firstChild;
			if (firstchecked.checked) {
				if (this.nextSibling.value>=1) {
					goodsBottomTotal.innerHTML=goodsTopTotal.innerHTML=Number(goodsTopTotal.innerHTML)-1;
				    bottomTotal.innerHTML=topTotal.innerHTML=Number(topTotal.innerHTML)-Number(this.parentNode.parentNode.previousSibling.innerHTML);		
				}
			}
			var goodsTopTotalval=goodsTopTotal.innerHTML;
			var topTotalval=topTotal.innerHTML
			if (this.nextSibling.value<1) {		
				this.nextSibling.value=1;				
				this.parentNode.parentNode.nextSibling.innerHTML=this.parentNode.parentNode.previousSibling.innerHTML;
				alert("购买商品数量不能小于1");
			}
			
			
			
			
		}
	}
			
//	加数量
	var add=document.getElementsByClassName("add");
	for (var i = 0; i < add.length; i++) {
		add[i].onclick=function(){
			this.previousSibling.value=Number(this.previousSibling.value)+1;
			this.parentNode.parentNode.nextSibling.innerHTML=this.previousSibling.value*this.parentNode.parentNode.previousSibling.innerHTML;
			var firstchecked=this.parentNode.parentNode.parentNode.firstChild.firstChild;
			if (firstchecked.checked) {		
				goodsBottomTotal.innerHTML=goodsTopTotal.innerHTML=Number(goodsTopTotal.innerHTML)+1;
				bottomTotal.innerHTML=topTotal.innerHTML=Number(topTotal.innerHTML)+Number(this.parentNode.parentNode.previousSibling.innerHTML)			
			}
		}
	}

//	直接输入数量
	$(".goods-quantity").blur(function(){		
		if ($(this).val()<1) {
			$(this).val(1);
			alert("商品的数量不能小于1")
		}else{
			$(this).parent().parent().next().html($(this).val()*$(this).parent().parent().prev().html());	
		}
		
	})
//	删除操作
	var shanchu=document.getElementsByClassName("goods-tr-fiveTd-span");
	for (var i = 0; i < shanchu.length; i++) {
		shanchu[i].onclick=function(){					
			var goodsPid = this.parentNode.parentNode.getAttribute("pid");
			var goodsColor = this.parentNode.parentNode.children[0].children[2].children[1].children[1].innerHTML;
			var goodsSuit = this.parentNode.parentNode.children[0].children[2].children[3].innerHTML;			
			var cookie = getAll();
			for (var i = 0; i < cookie.length; i++) {
				if (cookie[i].pid==goodsPid&&cookie[i].color==goodsColor&&cookie[i].suit==goodsSuit) {
					cookie.splice(i,1)					
				}
			}
			var cookiestr = JSON.stringify(cookie);
			cookieObj.set({name:"datas",value:cookiestr})			
			var tr = this.parentNode.parentNode;
			tr.remove();
			tr=null;
			var cookiearr = getAll();
			// 删除完了购物车为空时
			if(cookiearr.length == 0) {
				noGoods.style.display = "block";
				shoppingCartContent.style.display = "none";				
			}	
			//  删除的时候随便页把  数量和总价  删除
			var carPcount=cookieObj.get("carPcount");
			var cartotalPrices=cookieObj.get("cartotalPrices");	
			carPcount1=Number(carPcount)-Number(this.parentNode.parentNode.children[2].children[0].children[1].value);
			cartotalPrices1=Number(cartotalPrices)-Number(this.parentNode.parentNode.children[3].innerHTML);
			cookieObj.set({name: "carPcount",value: carPcount1});
			cookieObj.set({name: "cartotalPrices",value: cartotalPrices1});									
	    }		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
