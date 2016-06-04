import Ember from 'ember';
console.log("navigator.language: " + window.navigator.language);
console.log("navigator.browserLanguage: " + window.navigator.browserLanguage);
console.log("navigator.userLanguage: " + window.navigator.userLanguage);
console.log("navigator.systemLanguage: " + window.navigator.systemLanguage);
// console.log("navigator.userAgent: " + window.navigator.userAgent);

var qaList = [{
		Q: '部分常识',
		A:[
		'1. 游戏里发送坐标用<code>数字:数字</code>,比如<code>23:77:119</code>这样发送, 其它玩家可以点击你的消息直接跳转到该坐标.',
		'2. 几点基本规则:不可以攻击采矿兵;采矿不要留尾巴;撞矿以先发兵的为准,不是以先到为准;',
		'3. 如果有被打或者想攻击谁, 记得先和联盟报备一下, 避免外交纠纷...',
		]},
		{
		Q:'如何加入联盟?', 
		A:[
		'本联盟位于23号服务器, 联盟缩写为<code>CMN</code>, 搜索<code>CMN</code>就可以找到我们!',
		'<b>PS</b>: 点击上方<code>加入微信群</code>可扫二维码加入我们的微信群!'
		]},
		{
		Q: '如何改名?', 
		A: [
		'点击<code>物品</code>，打开后就看到了<code>特殊</code>类别。这里可以看到各种改名卡。 我们需要的是<code>基地更名</code>以及<code>更改玩家名称</code>这两种卡片。'
		]},
		{
		Q: '有什么诀窍?', 
		A: [
		'前期一直按照游戏指导进行就可以了。而且为了冲任务,有如下的说法: 每种建筑能建的都建10座, 最后留4-5个左右训练营/医院, 5-6个银行, 10个农场,4~5个其它矿场。大家可以试试。',
		'为了军粮能跟上军费增长，大家尽量多升级农场。'
		]},
		{Q : '来自高手的建议<font style="color:red;font-weight: bold;">!!!</font>',
		 A: [
		 '首先, 采集全部用1级兵, 优先把部署上限的兵做满。比如我 3部署,每部署上限6W兵, 那么采集就先优先做18万1级兵. 前期1,2等级的兵没太大意义!',
		 '其次, 技能方向好像说科研-经济-建设优先... 指挥官技能/研究技能.都可以优先点满研究/建设/采集. 这个信息需要确认...',
		 '还有, 晚上睡觉如果怕被人打兵, 假集结, 把兵都集结出去,假装攻击某个人.',
		 '其它, 期待各位协助补充...'
		 ]}
];
export default Ember.Route.extend({
	model: function()
	{
		return qaList;
	}
});
