window.onload=function(){
	
	
//	固定头部(fixedHead)导航logo后面的全国
	var fixedHeadCity = document.getElementsByClassName("fixedHead-city")[0];
	var fixedHeadCityIco = document.getElementsByClassName("fixedHead-city-ico")[0];
	var fixedHeadNationwide = document.getElementsByClassName("fixedHead-nationwide")[0];
	var fixedHeadCityUl = document.getElementsByClassName("fixedHead-city-ul")[0];
	fixedHeadCity.onmouseenter=function(){
		fixedHeadCityUl.style.display="block";
		fixedHeadNationwide.style.borderBottom="none";
		fixedHeadCityIco.style.transform="rotateX(180deg)";
	}
	fixedHeadCity.onmouseleave=function(){
		fixedHeadCityUl.style.display="none";
		fixedHeadNationwide.style.borderBottom="";
		fixedHeadCityIco.style.transform="";
	}


//导航下的轮播图(nav-slideshow)
		var navSlideshowContent =document.getElementsByClassName("nav-slideshow-content")[0];
		var navSlideshowContentImg =navSlideshowContent.getElementsByTagName("img");
		var navSlideshowContentLis =navSlideshowContent.getElementsByTagName("li");
		var navSlideshowPrevious =document.getElementsByClassName("nav-slideshow-previous")[0];
		var navSlideshowNext =document.getElementsByClassName("nav-slideshow-next")[0];
		var index = 0;
		var timers = null;
//		设置轮播
		timers=setInterval(function(){
			index++
			slideshow()	
		},2500)
		
		navSlideshowContent.onmouseenter=function(){
			clearInterval(timers);
			navSlideshowPrevious.style.opacity=".5"		
			navSlideshowNext.style.opacity=".5"	
		}
		navSlideshowContent.onmouseleave=function(){
			navSlideshowPrevious.style.opacity="0";		
			navSlideshowNext.style.opacity="0";
			timers=setInterval(function(){
			    index++
			    slideshow()	
		    },2500)	
		}
//	         小圆点的点击事件
		for (var k = 0; k < navSlideshowContentLis.length; k++) {
			navSlideshowContentLis[k].index=k;
			navSlideshowContentLis[k].onclick=function(){
				index=this.index;
				slideshow()	
				
			}
		}	
//		前后按钮点击事件
		navSlideshowPrevious.onclick=function(){
			index--
			slideshow()	
		}
		navSlideshowNext.onclick=function(){
			index++
			slideshow()	
		}				
//		轮播函数
		function slideshow(){
			for (var i = 0; i < navSlideshowContentImg.length; i++) {
				navSlideshowContentImg[i].style.display="none";
				navSlideshowContentLis[i].style.background="white";
			}
			if (index>navSlideshowContentImg.length-1) {
				index=0
			}
			if (index<0) {
				index=navSlideshowContentImg.length-1
			}
			navSlideshowContentImg[index].style.display="block";
			navSlideshowContentLis[index].style.background="blue";
		}					
//导航下的轮播图(nav-slideshow)【结束】					
					
//全部分类下的分类(category)鼠标进入之后显示的下拉菜单					
	var items = document.getElementsByClassName("item");			
	var categoryLis = document.querySelectorAll(".nav-category-body li");
	var categoryAs = document.querySelectorAll(".nav-category-body a");
	var icoTwo = document.getElementsByClassName("ico-two");
	for(var i=0;i<categoryLis.length;i++){
		categoryLis[i].index=i;
		categoryLis[i].onmouseenter=function(){
			this.style.cssText="background-color: white;color: #333;"
			categoryAs[this.index].style.color="#666";
			icoTwo[this.index].style.display="none";
			items[this.index].style.display="block";
		}
		categoryLis[i].onmouseleave=function(){
			this.style.cssText="background-color: #454545;"
			categoryAs[this.index].style.color="white"
			icoTwo[this.index].style.display="block"
			items[this.index].style.display="none"			
		}
		items[i].onmouseenter=function(){this.style.display="block";}
		items[i].onmouseleave=function(){this.style.display="none"}
		categoryAs[i].onmouseenter=function(){this.style.color="red"}
		categoryAs[i].onmouseleave=function(){this.style.color="#666"}	
	}

//团购头部的更多   
	var groupPurchaseHeaderRight = document.getElementsByClassName("groupPurchase-header-right")[0];
	groupPurchaseHeaderRight.onmouseenter=function(){
		this.children[0].style.color="red"
		this.children[1].style.backgroundPosition="100% -316px"
	}
    groupPurchaseHeaderRight.onmouseleave=function(){
    	this.children[0].style.color="#666"
		this.children[1].style.backgroundPosition="100% -284px"
	}
    
    
//团购的遮盖层 
    var groupPurchaseContentOneLi = document.querySelectorAll(".groupPurchase-content-oneUl li");
    var groupPurchaseContentWareMask = document.getElementsByClassName("groupPurchase-content-ware-mask");
    for (var i = 0; i < groupPurchaseContentOneLi.length; i++) {
    	groupPurchaseContentOneLi[i].index=i;
    	groupPurchaseContentOneLi[i].onmouseenter=function(){
    		groupPurchaseContentWareMask[this.index].style.top="0px";
    	}
    	groupPurchaseContentOneLi[i].onmouseleave=function(){
    		groupPurchaseContentWareMask[this.index].style.top="150px";
    	}
    }
    
//智选的内容下的(影音·穿戴·家居·出行·美护)的鼠标进入事件				
	var ppContentOneLeftLis = document.querySelectorAll(".pp-content-one-left li");
	var ppContentOneLeftAs = document.querySelectorAll(".pp-content-one-left-pic a");
	for (var i = 0; i < ppContentOneLeftLis.length; i++) {
		ppContentOneLeftLis[i].index=i;
		ppContentOneLeftLis[i].onmouseenter=function(){			
			for (var i = 0; i < ppContentOneLeftAs.length; i++) {
				ppContentOneLeftAs[i].style.display="none";
				ppContentOneLeftLis[i].style.background="#f7f7f7";
				ppContentOneLeftLis[i].style.color="black";
			}
			this.style.background="#ce1a1b";
			this.style.color="#fff";
			ppContentOneLeftAs[this.index].style.display="block";
		}		
	}
					
//智选的内容下的(pp-content-one-right)的鼠标进入后	transform="scale(1,1.02)缩放				
	var ppContentOneRightImg = document.querySelectorAll(".pp-content-one-right img")				
	var ppContentOneRightAs = document.querySelectorAll(".pp-content-one-right a")				
	for (var i = 0; i < ppContentOneRightAs.length; i++) {
		ppContentOneRightAs[i].index=i;
		ppContentOneRightAs[i].onmouseenter=function(){
			ppContentOneRightImg[this.index].style.transform="scale(1,1.04)";
		}
		ppContentOneRightAs[i].onmouseleave=function(){
			ppContentOneRightImg[this.index].style.transform="scale(1,1)";
		}
	}
					
//智选下的(pp-content-two-left)的遮罩层					
	var ppContentTwoLeftLis=document.querySelectorAll(".pp-content-two-left li");				
	var ppContentTwoLeftMask = document.getElementsByClassName("pp-content-two-left-mask");
	for (var i = 0; i < ppContentTwoLeftLis.length; i++) {
		ppContentTwoLeftLis[i].index=i;
		ppContentTwoLeftLis[i].onmouseenter=function(){
			ppContentTwoLeftMask[this.index].style.top="0px";
			
		}
		ppContentTwoLeftLis[i].onmouseleave=function(){
			ppContentTwoLeftMask[this.index].style.top="140px";			
		}
	}				
					
//智选下的(pp-content-two-right)的鼠标进入后transform="scale(1.02,1)缩放	
    var ppContentTwoRightImg = document.querySelectorAll(".pp-content-two-right img")[0];
	var ppContentTwoRight = document.getElementsByClassName("pp-content-two-right")[0];
	ppContentTwoRight.onmouseenter=function(){
		ppContentTwoRightImg.style.transform="scale(1.04,1)";
	}
	ppContentTwoRight.onmouseleave=function(){
		ppContentTwoRightImg.style.transform="scale(1,1)";
	}				

//品牌精选的内容(brand-content)下的(brand-content-item)鼠标进出事件
    var brandContentItem = document.getElementsByClassName("brand-content-item");
    var brandContentItemImg = document.querySelectorAll(".brand-content-item-img img")
    for (var i = 0; i < brandContentItem.length; i++) {
    	brandContentItem[i].index=i;
    	brandContentItem[i].onmouseenter=function(){
    		this.style.boxShadow=" 1px 1px 5px black";
    		brandContentItemImg[this.index].style.transform="scale(1.04,1.04)";
    	}
    	brandContentItem[i].onmouseleave=function(){
    		this.style.boxShadow="";
    		brandContentItemImg[this.index].style.transform="scale(1,1)";
    	}
    }
    
//电子竞技头部的更多   
	var eSportsHeaderRight = document.getElementsByClassName("eSports-header-right")[0];
	eSportsHeaderRight.onmouseenter=function(){
		this.children[0].style.color="red"
		this.children[1].style.backgroundPosition="100% -316px"
	}
    eSportsHeaderRight.onmouseleave=function(){
    	this.children[0].style.color="#666"
		this.children[1].style.backgroundPosition="100% -284px"
	}
        
//  电子竞技的(电竞主机·电竞外设·游戏本)的点击事件改变(图片地址;商品名;商品价格)
//   图片地址(数组)
    var eSportsLfetTopImgArr = ["img/eSports-content-left-top-mainframe-pic.jpg","img/eSports-content-left-top-pci-pic.jpg","img/eSports-content-left-top-game-pic.jpg"];
    var eSportsLfetBottomImgArr = [["img/eSports-content-left-bottom-mainframe-pic1.jpg","img/eSports-content-left-bottom-mainframe-pic2.jpg","img/eSports-content-left-bottom-mainframe-pic3.jpg"],
    ["img/eSports-content-left-bottom-pci-pic1.jpg","img/eSports-content-left-bottom-pci-pic2.jpg","img/eSports-content-left-bottom-pci-pic3.jpg"],
    ["img/eSports-content-left-bottom-game-pic1.jpg","img/eSports-content-left-bottom-game-pic2.jpg","img/eSports-content-left-bottom-game-pic3.jpg"]]
//  商品名(数组)
    var eSportsLfetWareNameArr = [["甲骨龙 G3900四核心/120G SSD家用办公DIY组电脑","I5 400/GTX1050Ti G/游戏主机","甲骨龙6G独显DIY游戏电脑"],
    ["鑫谷散热风扇","大号鼠标垫限时抢","AOC 23.8英寸IPS窄边HDMI高清显示器"],
    ["联想小新潮7000 窄边框笔记本I5 8G 双硬盘","戴尔 游匣 15P-2648B大屏游戏本 四核 4G独显","联想 小新 潮5000超极本 酷睿i7+2G独显 IPS屏幕"]]
//  商品价格的(数组)
    var eSportsLfetWarePriceArr = [["¥1159.00","¥3389.00","¥5099.00"],
    ["¥69.00","¥29.00","¥759.00"],
    ["¥5499.00","¥4829.00","¥4388.00"]]
//  电子竞技的(电竞主机·电竞外设·游戏本)的点击事件   
    var eSportsContentLeftheaderLi = document.querySelectorAll(".eSports-content-left-header li");
    var eSportsContentLeftTopImg = document.querySelector(".eSports-content-left-top-pic img");
    var eSportsContentLeftBottomImg =document.querySelectorAll(".eSports-content-left-bottom-ul img");
    var eSportsContentLeftBottomPicWareName = document.querySelectorAll(".eSports-content-left-bottom-pic-ware-name a");
    var eSportsContentLeftBottomPicWarePrice = document.getElementsByClassName("eSports-content-left-bottom-pic-ware-price");   
    for (var i = 0; i < eSportsContentLeftheaderLi.length; i++) {
    	eSportsContentLeftheaderLi[i].index=i;
    	eSportsContentLeftheaderLi[i].onclick=function(){
    		eSportsContentLeftTopImg.src=eSportsLfetTopImgArr[this.index];
    		for (var a=0; a<eSportsContentLeftBottomPicWareName.length; a++) {
    			eSportsContentLeftheaderLi[a].style.borderBottom="";
    			eSportsContentLeftBottomImg[a].src=eSportsLfetBottomImgArr[this.index][a];
    			eSportsContentLeftBottomPicWareName[a].innerHTML=eSportsLfetWareNameArr[this.index][a];
    			eSportsContentLeftBottomPicWarePrice[a].innerHTML=eSportsLfetWarePriceArr[this.index][a];
    		}
    		this.style.borderBottom="3px solid #fff";
    	}
    }

//  家电优选的(彩电colorTV·冰箱refrigerator·洗衣机washing·厨卫kitchen·小家电smallHomeAppliance)的点击事件  (图片地址;商品名;商品价格)
//   图片地址(数组)	
	var HomeApplianceRightImgArr = [["img/HomeAppliance-content-right-colorTV1.jpg","img/HomeAppliance-content-right-colorTV2.jpg","img/HomeAppliance-content-right-colorTV3.jpg","img/HomeAppliance-content-right-colorTV4.jpg","img/HomeAppliance-content-right-colorTV5.jpg","img/HomeAppliance-content-right-colorTV6.jpg"],
	["img/HomeAppliance-content-right-refrigerator1.jpg","img/HomeAppliance-content-right-refrigerator2.jpg","img/HomeAppliance-content-right-refrigerator3.jpg","img/HomeAppliance-content-right-refrigerator4.jpg","img/HomeAppliance-content-right-refrigerator5.jpg","img/HomeAppliance-content-right-refrigerator6.jpg"],
	["img/HomeAppliance-content-right-washing1.jpg","img/HomeAppliance-content-right-washing2.jpg","img/HomeAppliance-content-right-washing3.jpg","img/HomeAppliance-content-right-washing4.jpg","img/HomeAppliance-content-right-washing5.jpg","img/HomeAppliance-content-right-washing6.jpg"],
	["img/HomeAppliance-content-right-kitchen1.jpg","img/HomeAppliance-content-right-kitchen2.jpg","img/HomeAppliance-content-right-kitchen3.jpg","img/HomeAppliance-content-right-kitchen4.jpg","img/HomeAppliance-content-right-kitchen5.jpg","img/HomeAppliance-content-right-kitchen6.jpg"],
	["img/HomeAppliance-content-right-smallHomeAppliance1.jpg","img/HomeAppliance-content-right-smallHomeAppliance2.jpg","img/HomeAppliance-content-right-smallHomeAppliance3.jpg","img/HomeAppliance-content-right-smallHomeAppliance4.jpg","img/HomeAppliance-content-right-smallHomeAppliance5.jpg","img/HomeAppliance-content-right-smallHomeAppliance6.jpg"]]
//  商品名(数组)	
	var HomeApplianceRightWareNameArr = [["创维  32X3  32英寸 窄边蓝光高清节能平板液晶电视机（黑色）","Apple 创维  50M9 50英寸 人工智能HDR 4K超高清 互联网液晶电视机","创维  55V8E 55英寸 人工智能4色HDR 4K超高清智能网络液晶电视机","TCL电视 D32A810 32英寸高清 八核观影王 网络智能LED液晶电视","TCL电视 D43A810 43英寸全高清 八核观影王 网络智能LED液晶电视","TCL电视 49A810 49英寸全高清 八核观影 金属边框 智能LED液晶电视"],
	["美的冰箱（Midea） BCD-535WKZM(E) 535L 对开门 风冷无霜 智能 冰箱","美的冰箱（Midea） BCD-520WKM(E) 520升 对开门 风冷无霜 电脑温控","美的冰箱（Midea）BCD-318WTPZM(E) 318升 多门式 变频智能家用电冰箱","美的冰箱（Midea）BCD-468WTPM(E) 468升十字对开门家用节能变频风冷","美的冷柜（Midea） BD/BC-96KM(E) 96L 顶开门 冷冻冷藏 节能家用","美的冷柜（Midea）BD/BC-203KM(E) 203升 单温 小型 冷柜"],
	["美的洗衣机（Midea）MD80-11WDX 8公斤 变频滚筒洗烘一体智能操控节能","美的洗衣机(Midea)MB80-1020H 8公斤 定频 波轮 家用大容量 洗衣机","小天鹅洗衣机（Littleswan）TD80V80WDG 8公斤洗烘一体变频滚筒全自动","小天鹅（LittleSwan） TD80-Mute60WDX智能洗烘一体滚筒洗衣机","小天鹅洗衣机（Littleswan）TG80V80WDG 8公斤 变频 滚筒 智能 全自动","小天鹅（LittleSwan） TB80V80WDCLG8公斤水魔方智能变频波轮洗衣机"],
	["方太 CXW-200-EH40QE","方太 JQ22TS","方太 CXW-189-JX78","方太 HC26BE","方太 FD23BE","方太 ZTD100J-J45E  家用100L嵌入式 消毒柜/消毒碗柜"],
	["美的电压力锅WQC50A1P 一锅双胆 智能预约 5L高压锅","美的电磁炉 WT2121S  哑光防滑触控面板 八档火力  黑色","美的 电饭煲 4L 多功能家用智能电饭锅 MB-WFS4017TM 巧克力色","美的电饭煲 拉丝不锈钢机身 立体加热 聚能釜内胆4LMB-WFS4029","美的  KJ500G-E31 家用除甲醛除雾霾除PM2.5空净 空气净化器","美的家用电水壶"]]	
//  商品价格的(数组)	
	var HomeApplianceRightWarePriceArr = [["¥999.00","¥2499.00","¥3299.00","¥1399.00","¥1899.00","¥2399.00"],
	["¥3199.00","¥2999.00","¥3099.00","¥3999.00","¥799.00","¥1129.00"],
	["¥3399.00","¥1199.00","¥3499.00","¥3499.00","¥2799.00","¥2299.00"],
	["¥2490.00","¥5390.00","¥2990.00","¥1999.00","¥1490.00","¥1999.00"],
	["¥249.00","¥239.00","¥299.00","¥279.00","¥3998.00","¥169.00"]]
	
//家电优选的(彩电colorTV·冰箱refrigerator·洗衣机washing·厨卫kitchen·小家电smallHomeAppliance)的点击事件 	
	var HomeApplianceContentRightHeaderLi = document.querySelectorAll(".HomeAppliance-content-right-header-ul li");
	var HomeApplianceContentRightContentImg = document.querySelectorAll(".HomeAppliance-content-right-content-ul img");
	var HomeApplianceContentRightWareName = document.querySelectorAll(".HomeAppliance-content-right-colorTV-ware-name a");
//	console.log(HomeApplianceContentRightWareName)
	var HomeApplianceContentRightWarePrice = document.getElementsByClassName("HomeAppliance-content-right-colorTV-ware-price");	
	 for (var i = 0; i < HomeApplianceContentRightHeaderLi.length; i++) {
    	HomeApplianceContentRightHeaderLi[i].index=i;
    	HomeApplianceContentRightHeaderLi[i].onclick=function(){
    		for (var b = 0; b < HomeApplianceContentRightHeaderLi.length; b++) {
    			HomeApplianceContentRightHeaderLi[b].style.borderBottom="";
    		}
    		for (var a=0; a<HomeApplianceContentRightContentImg.length; a++) {
    			HomeApplianceContentRightContentImg[a].src=HomeApplianceRightImgArr[this.index][a];
    			HomeApplianceContentRightWareName[a].innerHTML=HomeApplianceRightWareNameArr[this.index][a];
    			HomeApplianceContentRightWarePrice[a].innerHTML=HomeApplianceRightWarePriceArr[this.index][a];
    		}
    		this.style.borderBottom="3px solid #fff";
    	}
    }
	
//楼层跳转
    var floorContent = document.getElementsByClassName("floor-content")[0];
	var floorContentLi = document.querySelectorAll(".floor-content li");
	var floors = document.getElementsByClassName("floor");	
	var wrapperFixedHead = document.getElementsByClassName("wrapper-fixedHead")[0];
	var wrapperGroupPurchaseHeader = document.getElementsByClassName("wrapper-groupPurchase-header")[0];
	window.onscroll=function(){
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		if (top>wrapperGroupPurchaseHeader.offsetTop) {
			floorContent.style.display="block";
			wrapperFixedHead.style.top="0px"	
		}else{
			floorContent.style.display="none";
			wrapperFixedHead.style.top="-50px"
		}		
		var bodyele=document.documentElement.scrollTop==0?document.body:document.documentElement;
		for (var i = 0; i < floorContentLi.length-1; i++) {
			floorContentLi[i].index=i;
			floorContentLi[i].onclick=function(){
				animate(bodyele,{scrollTop:floors[this.index].offsetTop},500,function(){})
			}
		}		
		floorContentLi[8].onclick=function(){
			animate(bodyele,{scrollTop:0},1000,function(){})		
		}		
		for (var i = 0; i < floors.length; i++) {
			floors[i].indenx=i;
			if (top >= floors[i].offsetTop) {
				for (var a=0;a<floors.length;a++) {
					floorContentLi[a].style.background=""
				}
				floorContentLi[floors[i].indenx].style.background="#ec3639"
			}
		}
	}
		
//	判断是否登录
	var homepageRegister=document.getElementsByClassName("homepageRegister")[0];
	var homepageLogin=document.getElementsByClassName("homepageLogin")[0];
	var welcome=document.querySelector(".roof-content-left-login span");
	var islogin=cookieObj.get("islogin");
	var isloginUser,
	    isloginReturn;
	if (islogin) {
		isloginUser=islogin.slice(0,11);
		isloginReturn=islogin.slice(11);
	}
	if (isloginReturn) {
		
		document.getElementsByClassName("roof-shoppingCart-span")[0].innerHTML=cookieObj.get("carPcount");
		document.getElementsByClassName("roof-shoppingCart")[0].href="shopping cart.html"
		document.getElementsByClassName("head-car")[0].href="shopping cart.html"				
		welcome.innerHTML="您好，";
		homepageRegister.innerHTML="退出";
		homepageRegister.href="";						
		homepageLogin.innerHTML=isloginUser;
		homepageLogin.href="";
		homepageRegister.onclick=function(){			
			var isloginUser=cookieObj.get("islogin").slice(0,11);
			cookieObj.set({name:"islogin",value:isloginUser});			
			location.reload()
		}		
			
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}	
