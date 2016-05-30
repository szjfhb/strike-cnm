import Ember from 'ember';
var TextInfo = Ember.Object.extend({
	tag:'',
	text: '',
	html: Ember.computed('tag', 'text',function(){
		var tag = this.get('tag');
		var text = this.get('text');
		return `<${tag}>  ${text} </${tag}>`;
	})
});
var t1 = TextInfo.create({tag:'h1', text:'nothing'});
console.log(t1.get('html'));
var Infos = [
	'<h2>Welcome to <b>Chinese National Ally</b> <small><abbr title="Chinese National Ally">CNA</abbr></small></h2>',
	'<h3>欢迎来到<b>华人玩家联盟</b></h3>',
	'<h4>我们的联盟: <b>China National Mass</b> <small>CNM</small></h4>',
	'寻找活跃玩家',
	'寻找华人玩家',
	'寻找一些对中国感兴趣的玩家',
	'不要使用默认BaseXXXX的名称',
	'申请加入联盟请先更改名称',
	'联盟实力值长期不动者会被踢',
			];

// 1:looking for chinese player 
// 2:open to anyone who are interesting in chinese culture and language.
// 3:be active everyday 
// 4: no default base XXXX name 
// 5:chose your own base name before apply, default base XXXX name will NOT be accepted by alliance 
// 6:degree of active can be quantified by power growth，inactive player will be kicked within one week.

export default Ember.Route.extend({
	classname: ['mobilestrike'],
	model:function(){
		return Infos;
	},
});
