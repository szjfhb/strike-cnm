import Ember from 'ember';
console.log("navigator.language: " + window.navigator.language);
console.log("navigator.browserLanguage: " + window.navigator.browserLanguage);
console.log("navigator.userLanguage: " + window.navigator.userLanguage);
console.log("navigator.systemLanguage: " + window.navigator.systemLanguage);
// console.log("navigator.userAgent: " + window.navigator.userAgent);

var qaList = [
	{Q:'如何加入联盟', A:'本联盟位于23号服务器, 比如我的坐标是<code>#23:77:119</code>。联盟缩写为<code>CMN</code>, 搜索<code>CMN</code>就可以找到我们了! <br><b>PS</b>: 点击上方<code>加入微信群</code>可加入微信群!'},
	{Q: '如何改名', A: '点击<code>物品</code>，打开后就看到了<code>特殊</code>类别。这里可以看到各种改名卡。 我们需要的是<code>基地更名</code>以及<code>更改玩家名称</code>这两种卡片。',},
	{Q: '有什么诀窍', A: '前期一直按照游戏指导进行就可以了。而且有如下的说法: 每种建筑能建的都建10座, 最后留7个左右训练营, 4个左右医院/银行, 10个农场,7~8个其它矿场。大家可以试试。 <br>为了后期粮食能上去，大家尽量多升级农场。'}
];
export default Ember.Route.extend({
	getLanguage:function (argument) {
		// body...
	},
	model: function()
	{
		return qaList;
	}
});
