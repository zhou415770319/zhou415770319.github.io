var bokeInfos = new Array("iOS开发经常用到的国外网站，让我们接轨国外的最新技术吧！",
	"知名应用背后的第三方开源项目",
	"Create an Embedded Framework in Xcode with Swift",
	"Use Swift Dynamic Framework （如何科学地引用第三方 Swift 库)",
	"用workspace管理工程，并解决多静态库依赖",
	"揭秘 iOS App Extension 开发 —— Today 篇");
var bokeUrls = new Array("http://www.cnblogs.com/feiyu-mdm/p/5731603.html",
	"http://www.cnblogs.com/feiyu-mdm/p/5711617.html",
	"http://www.cnblogs.com/feiyu-mdm/p/5632479.html",
	"http://www.cnblogs.com/feiyu-mdm/p/5630528.html",
	"http://www.cnblogs.com/feiyu-mdm/p/5629417.html",
	"http://www.cnblogs.com/feiyu-mdm/p/5613192.html"
);

function loadCellInfo() {
	alert("kjsk");
	for(var i = 0; i < bokeInfos.length; i++) {
		var str = "<li class='mui-table-view-cell'>" + "<a class='mui-navigate-right' href=" + "html/bokeinfo.html" + ">" + bokeInfos[i] + "</a></li>";
		document.write(str);
	}
}