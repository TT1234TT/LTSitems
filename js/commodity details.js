window.onload = function() {

	//	当点击主页面的品牌精选下的li时跳转到该页面时获取location.search
	var mysearch = location.search.substr(1);
	var mysearcharr = mysearch.split("=");
	//	console.log(mysearcharr[1]);
	var dealWareColorStr = "";
	$.ajax({
		type: "get",
		url: "detail page.json",
		async: true
	}).done(function(res) {
		//		console.log(res)
		$.each(res, function(index, ele) {
			if(mysearcharr[1] == ele.pagepid) {
				//				console.log(ele.dealTitleSpan)
				$("#fixationImg").attr("src", ele.fixationImgsrc)
				$("#moveImg").attr("src", ele.moveImgsrc)
				$("#thumbnail1").attr("src", ele.thumbnail1)
				$("#thumbnail2").attr("src", ele.thumbnail3)
				$("#thumbnail3").attr("src", ele.thumbnail4)
				$("#thumbnail4").attr("src", ele.thumbnail5)
				$("#thumbnail5").attr("src", ele.thumbnail6)
				$("#deal-title-h3").text(ele.dealTitle)
				$("#deal-title-span").text(ele.dealTitleSpan)
				//				console.log($("#deal-title-span").text())
				$(".deal-ware-price").text(ele.dealWarePrice)
				//				$("#deal-ware-color1").text(ele.dealWareColor1)
				$(".deal-ware-suit-infor").text(ele.dealWareSuitInfor)
				$.each(ele.dealWareColor, function(tindex, tele) {
					//					console.log(tindex,tele)
					dealWareColorStr += '<li id="deal-ware-color' + (tindex + 1) + '">' + tele + '</li>'
				});
				$(".deal-ware-color-ul").html(dealWareColorStr)
				$(".deal-ware-color-ul li").eq(0).addClass("redBorder")
				//				点击商品颜色下的li,让其添加class(加上外边框)  deal-ware-color-addClass{border: 2px solid #c00;}
				$(".deal-ware-color-ul li").click(function() {
					$(this).css("border", "2px solid #c00").siblings().css("border", "2px solid #e6e6e6");
					$(this).addClass("redBorder").siblings().removeClass("redBorder")
				})
				//				点击事件加减商品数量
				var buyQuantityVal = $("#buy-quantity").val()
				$(".buy-quantity-add").click(function() {
					console.log(buyQuantityVal)
					buyQuantityVal++
					$("#buy-quantity").val(buyQuantityVal)
				})
				$(".buy-quantity-sub").click(function() {
					console.log(buyQuantityVal)
					buyQuantityVal--
					if(buyQuantityVal <= 1) {
						buyQuantityVal = 1
					}
					$("#buy-quantity").val(buyQuantityVal)
				})
			}
		});
	});

	//	顶部(买家中心·手机商城·联系客服)
	var roofContentRight = document.querySelectorAll(".roof-content-right li");
	var concerned = document.getElementsByClassName("concerned")[0];
	var roofBuyerCenterIco = document.getElementsByClassName("roof-buyer-center-ico")[0];
	var wrapperRoofPhoneMallImg = document.getElementsByClassName("wrapper-roof-phone-mall-img")[0];
	var roofPhoneMallIco = document.getElementsByClassName("roof-phone-mall-ico")[0];
	var roofContactServiceIco = document.getElementsByClassName("roof-contact-service-ico")[0];
	var roofContactServiceText = document.getElementsByClassName("roof-contact-service-text")[0];
	//	console.log(concerned)
	roofContentRight[1].onmouseenter = function() {
		this.style.background = "#fff";
		this.getElementsByClassName("roof-buyer-center")[0].style.color = "#666";
		this.getElementsByClassName("roof-buyer-center")[0].style.textDecoration = "none"
		concerned.style.display = "block";
		roofBuyerCenterIco.style.transform = "rotateX(180deg)";
	}
	roofContentRight[1].onmouseleave = function() {
		this.style.background = "";
		concerned.style.display = "none";
		roofBuyerCenterIco.style.transform = "";
	}
	roofContentRight[5].onmouseenter = function() {
		this.style.background = "#fff";
		this.getElementsByClassName("roof-phone-mall")[0].style.color = "#666";
		this.getElementsByClassName("roof-phone-mall")[0].style.textDecoration = "none"
		wrapperRoofPhoneMallImg.style.display = "block";
		roofPhoneMallIco.style.transform = "rotateX(180deg)";
	}
	roofContentRight[5].onmouseleave = function() {
		this.style.background = "";
		wrapperRoofPhoneMallImg.style.display = "none";
		roofPhoneMallIco.style.transform = "";
	}
	roofContentRight[8].onmouseenter = function() {
		this.style.background = "#fff";
		this.getElementsByClassName("roof-contact-service")[0].style.color = "#666";
		this.getElementsByClassName("roof-contact-service")[0].style.textDecoration = "none"
		roofContactServiceText.style.display = "block";
		roofContactServiceIco.style.transform = "rotateX(180deg)";
	}
	roofContentRight[8].onmouseleave = function() {
		this.style.background = "";
		roofContactServiceText.style.display = "none";
		roofContactServiceIco.style.transform = "";
	}

	//	头部logo后面的全国
	var headCity = document.getElementsByClassName("head-city")[0];
	var headCityIco = document.getElementsByClassName("head-city-ico")[0];
	var nationwide = document.getElementsByClassName("nationwide")[0];
	var headCityUl = document.getElementsByClassName("head-city-ul")[0];

	headCity.onmouseenter = function() {
		headCityUl.style.display = "block";
		nationwide.style.borderBottom = "none";
		headCityIco.style.transform = "rotateX(180deg)";
	}
	headCity.onmouseleave = function() {
		headCityUl.style.display = "none";
		nationwide.style.borderBottom = "";
		headCityIco.style.transform = "";
	}

	//鼠标进入全部分类(nav-category-body)显示
	$(".nav-left").hover(function() {
		$(".nav-category-body").css("display", "block")
	}, function() {
		$(".nav-category-body").css("display", "none")
	})

	//全部分类下的分类(category)鼠标进入之后显示的下拉菜单					
	var items = document.getElementsByClassName("item");
	var categoryLis = document.querySelectorAll(".nav-category-body li");
	var categoryAs = document.querySelectorAll(".nav-category-body a");
	var icoTwo = document.getElementsByClassName("ico-two");
	for(var i = 0; i < categoryLis.length; i++) {
		categoryLis[i].index = i;
		categoryLis[i].onmouseenter = function() {
			this.style.cssText = "background-color: white;color: #333;"
			categoryAs[this.index].style.color = "#666";
			icoTwo[this.index].style.display = "none";
			items[this.index].style.display = "block";
		}
		categoryLis[i].onmouseleave = function() {
			this.style.cssText = "background-color: #454545;"
			categoryAs[this.index].style.color = "white"
			icoTwo[this.index].style.display = "block"
			items[this.index].style.display = "none"
		}
		items[i].onmouseenter = function() {
			this.style.display = "block";
		}
		items[i].onmouseleave = function() {
			this.style.display = "none"
		}
		categoryAs[i].onmouseenter = function() {
			this.style.color = "red"
		}
		categoryAs[i].onmouseleave = function() {
			this.style.color = "#666"
		}
	}

	//放大镜
	$(".deal-bigimg").mouseenter(function() {
		$(".deal-mask").show();
		$(".motionImg").show();
	}).mouseleave(function() {
		$(".deal-mask").hide();
		$(".motionImg").hide();
	}).mousemove(function(e) {
		//		e.pageX--e.pageY--鼠标相对于整个页面的距离
		//遮罩x，y
		var mx = e.pageX - $(this).offset().left - $(".deal-mask").width() / 2;
		var my = e.pageY - $(this).offset().top - $(".deal-mask").height() / 2;
		//限制边界
		mx < 0 ? mx = 0 : mx;
		my < 0 ? my = 0 : my;
		var maxX = $(".deal-bigimg").width() - $(".deal-mask").width();
		var maxY = $(".deal-bigimg").height() - $(".deal-mask").height();
		mx > maxX ? mx = maxX : mx;
		my > maxY ? my = maxY : my;
		$(".deal-mask").css("left", mx);
		$(".deal-mask").css("top", my);
		//算出比例
		var bilix = $(".motionImg img").width() / $(this).width();
		var biliy = $(".motionImg img").height() / $(this).height();
		$(".motionImg").scrollLeft(bilix * mx);
		$(".motionImg").scrollTop(biliy * my);

	})
	$(".thumbnail li").click(function() {
		$(".deal-bigimg img:eq(0)").attr("src", $(this).find("img").attr("src"));
		$(".motionImg img").attr("src", $(this).find("img").attr("src"));
		//外部轮廓
		$(this).css("outline", "2px solid red").siblings().css("outline", "none")
	})

	//	点击商品颜色下的li,让其添加class(加上外边框)  deal-ware-color-addClass{border: 2px solid #c00;}
	$(".deal-ware-color-ul li").click(function() {
		$(this).css("border", "2px solid #c00").siblings().css("border", "2px solid #e6e6e6")
	})

	//	商品详情(xq)的主体内容(main)的头部的手机购买二维码
	$("#xq-main-head-telBuy").hover(function() {
		$("#telBuy-img").css("display", "block")
	}, function() {
		$("#telBuy-img").css("display", "none")
	})

	//	商品详情(xq)的主体内容(main)的头部
	$(".xq-main-head-ul li").hover(function() {
		$(this).css("color", "#c00")
	}, function() {
		$(this).css("color", "")
	})
	//	让商品详情(xq)的主体内容(main)的右边的高度继承父元素的高度
	var xqMainRightHeight = document.getElementsByClassName("xq-main-right")[0];
	var xqMainHeight = document.getElementsByClassName("xq-main")[0];
	xqMainRightHeight.style.height = xqMainHeight.offsetHeight + "px"

	//	商品详情·购买评价·成交记录·购买咨询·服务承诺  (点击事件)
	$(".xq-main-head").click(function() {
		$(this).css({
			"background": "white",
			"border-bottom": "none",
			"border-top": "2px solid #c00"
		}).siblings().css({
			"background": "#f7f7f7",
			"border-bottom": "1px solid #ededed",
			"border-top": "1px solid #ededed"
		})
		$(".xq-main-head-nowBuy").css("background", "#c00")
		$(".main-container").css("display", "none")
		$(".main-container").eq($(this).index()).css("display", "block")

		//	让商品详情(xq)的主体内容(main)的右边的高度继承父元素的高度
		var serviceGuaranteeRightHeight = document.getElementsByClassName("service-guarantee-right")[0];
		var serviceGuaranteeMainHeight = document.getElementsByClassName("service-guarantee-main")[0];
		serviceGuaranteeRightHeight.style.height = serviceGuaranteeMainHeight.offsetHeight + "px"

	})

	$("#serviceGuaranteeMain").click(function() {

		var xq0 = $(".quality-goods").offset().top - 37;
		var xq1 = $(".compensation-in-advance").offset().top - 37;
		var xq2 = $(".twenty-four").offset().top - 37;
		var xq3 = $(".logistics").offset().top - 37;
		var xq4 = $(".invoice-to-ensure").offset().top - 37;
		var xq5 = $(".after-sales-service").offset().top - 37;
		var xq6 = $(".serve-commitment").offset().top - 37;
		//		console.log(xq1,xq2,xq3,xq4,xq5,xq6)

		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();
			//			console.log(xq1,xq2,xq3,xq4,xq5,xq6)
			if(scrollTop < xq0) {
				$(".service-guarantee-right-ul li").css("color", "")
			}
			if(scrollTop >= xq0 && scrollTop < xq1) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(0).css("color", "red")
			}
			if(scrollTop >= xq1 && scrollTop < xq2) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(1).css("color", "red")
			}
			if(scrollTop >= xq2 && scrollTop < xq3) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(2).css("color", "red")
			}
			if(scrollTop >= xq3 && scrollTop < xq4) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(3).css("color", "red")
			}
			if(scrollTop >= xq4 && scrollTop < xq5) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(4).css("color", "red")
			}
			if(scrollTop >= xq5 && scrollTop < xq6) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(5).css("color", "red")
			}
			if(scrollTop >= xq6) {
				$(".service-guarantee-right-ul li").css("color", "")
				$(".service-guarantee-right-ul li").eq(6).css("color", "red")
			}
		})

	})

	//	吸顶菜单
	var aa = $(".xq-main-head-ul").offset().top;
	var cc = $(".xq-side").offset().left + 200;
	var flag = true;
	var bb = $("body").outerWidth()
	var dd = cc + 700;
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
		if(flag && scrollTop >= aa) {
			$(".wrapper-ceiling").addClass("fixedMenu")
			$(".wrapper-ceiling").css("width", bb + "px")
			$(".wrapper-ceiling").css("background", "#f7f7f7")
			$(".xq-main-head-nowBuy").css("display", "block")
			$(".xq-main-head-ul").css("margin-left", cc + "px")
			$(".xq-main-right-ul").css({
				"position": "fixed",
				"left": dd + "px",
				"top": "37px",
			})
			$(".service-guarantee-right-ul").css({
				"position": "fixed",
				"left": dd + "px",
				"top": "20px",
			})

		} else {
			$(".wrapper-ceiling").removeClass("fixedMenu")
			$(".wrapper-ceiling").css("width", "")
			$(".xq-main-head-nowBuy").css("display", "none")
			$(".wrapper-ceiling").css("background", "")
			$(".xq-main-head-ul").css("margin-left", "")
			$(".xq-main-right-ul").css("position", "")
			$(".service-guarantee-right-ul").css("position", "")
		}

		if(flag && scrollTop >= aa) {
			$("#stickBtn").css("display", "block")
		} else {
			$("#stickBtn").css("display", "none")
		}
	})

	$("#stickBtn").click(function() {
		$("this").css("display", "none")
		var timer = setInterval(function() {
			flag = false;
			var scrollTop = $(document).scrollTop();
			window.scrollBy(0, -100);
			if(scrollTop <= 0) {
				clearInterval(timer);
				flag = true;
			}
		}, 20)

	})
	console.log(cookieObj.get("islogin"))
	if (cookieObj.get("islogin")!=undefined) {
		var isloginUser = cookieObj.get("islogin").slice(0, 11);
		var isloginReturn = cookieObj.get("islogin").slice(11);
		console.log(isloginReturn)
	}	
	//	登录了的时候
	if(isloginReturn) {
		document.getElementsByClassName("roof-shoppingCart")[0].href = "shopping cart.html";
		document.getElementsByClassName("head-car")[0].href = "shopping cart.html";
		document.getElementsByClassName("roof-shoppingCart-span")[0].innerHTML = cookieObj.get("carPcount");
		
		//	是否登录时页面顶部的登录和注册
		document.querySelector(".roof-content-left-login span").innerHTML = "您好，";
		document.getElementsByClassName("roof-content-left-register")[0].innerHTML = "退出";
		document.getElementsByClassName("homepageLogin")[0].innerHTML = isloginUser;
		document.querySelector(".roof-content-left-register").onclick = function() {
			var isloginUser = cookieObj.get("islogin").slice(0, 11);
			cookieObj.set({
				name: "islogin",
				value: isloginUser
			});
			location.reload()
		}
		//点击加入购物车
		var storeBuy = document.getElementsByClassName("store-buy")[0];
		var popupContent = document.getElementsByClassName("popup-content")[0];
		storeBuy.onclick = function() {
			popupContent.style.display = "block";
			// 判断cookie中 是否含有   datas:[]					
			if(cookieObj.get("datas") == undefined) {
				cookieObj.set({
					name: "datas",
					value: "[]"
				});
			}
			var fixationImg = document.getElementById("fixationImg");
			var dealTitleH3 = document.getElementById("deal-title-h3");
			var redBorder = document.getElementsByClassName("redBorder")[0];
			var suit1 = document.getElementById("suit1");
			var dealWarePrice = document.getElementsByClassName("deal-ware-price")[0];
			var buyQuantity = document.getElementById("buy-quantity");
			//	把商品信息提出出来并放到cookie中
			//	商品ID·商品图片·商品名称·商品颜色·商品套装·商品价格·商品数量
			//	ID·名称·颜色·套装·价格·数量
			var obj = {};
			obj.pid = mysearcharr[1].slice(5)
			obj.imgsrc = fixationImg.getAttribute("src");
			obj.pname = dealTitleH3.innerHTML;
			obj.color = redBorder.innerHTML;
			obj.suit = suit1.innerHTML;
			obj.price = dealWarePrice.innerHTML;
			obj.pcount = buyQuantity.value;
			// 把商品信息的json添加到cookie						
			var cookiearr = JSON.parse(cookieObj.get("datas"))
			//	如果cookie中的datas的length为0时直接把商品信息obj设置进cookie
			if(cookiearr.length == 0) {
				var cookiearr = JSON.parse(cookieObj.get("datas"))
				cookiearr.push(obj);
				var cookiestr = JSON.stringify(cookiearr);
				cookieObj.set({
					name: "datas",
					value: cookiestr
				});
			} else {
				//如果cookie中的datas的length 不 为0时判断该商品的id、颜色、套餐
				//是否和cookie中的datas相同，如同就只加数量，不同直接添加						
				var cookiearr = JSON.parse(cookieObj.get("datas"))
				var ddd = null;
				console.log(!ddd)
				var k = 1;
				for(var i = 0; i < cookiearr.length; i++) {
					if(obj.pid == cookiearr[i].pid && obj.color == cookiearr[i].color && obj.suit == cookiearr[i].suit) {
						var ddd = JSON.parse(cookieObj.get("datas"));
						k = i;
						break;
					}
				}
				if(!ddd) {
					var cookiearr2 = JSON.parse(cookieObj.get("datas"));
					cookiearr2.push(obj);
					var cookiestr2 = JSON.stringify(cookiearr2);
					cookieObj.set({
						name: "datas",
						value: cookiestr2
					});

				} else {
					ddd[k].pcount = Number(cookiearr[k].pcount) + Number(buyQuantity.value);
					var addstr = JSON.stringify(ddd);
					cookieObj.set({
						name: "datas",
						value: addstr
					});
				}

			}
			// 购物车中的商品总数
			var carPcount = cookieObj.get("carPcount");
			var cookiearr1 = JSON.parse(cookieObj.get("datas"));
			console.log(cookiearr1)
			for(var i = 0; i < cookiearr1.length; i++) {
				carPcount = Number(carPcount) + Number(cookiearr1[i].pcount);
			}
			cookieObj.set({
				name: "carPcount",
				value: carPcount
			});
			// 商品中的总价
			var cartotalPrices=0;
			for(var i = 0; i < cookiearr1.length; i++) {
				cartotalPrices = Number(cartotalPrices) + Number(cookiearr1[i].pcount)*cookiearr1[i].price;
			}
			cookieObj.set({
				name: "cartotalPrices",
				value: cartotalPrices
			});
			document.getElementsByClassName("xq-goods-quantity")[0].innerHTML = cookieObj.get("carPcount");
			document.getElementsByClassName("xq-goods-total")[0].innerHTML = cookieObj.get("cartotalPrices");
		}
		//	点击加入购物车弹出的div
		$(".continue-shopping").click(function() {
			$(".popup-content").css("display", "none")
		})
		$(".close-popup-ico").hover(function() {
			$(this).css("background-position", "-8px -309px")
		}, function() {
			$(this).css("background-position", "-8px -282px")
		})
		$(".close-popup-ico").click(function() {
			$(".popup-content").css("display", "none")
		})

	} else {
		//没有登录的时候
		$(".store-buy").click(function() {
			alert("请先登录")
			location.href = "login.html"
		})
	}

}