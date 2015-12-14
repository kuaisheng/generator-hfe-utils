module.exports = {
	//这里可以配置一些公共参数
	exec: {
		prepub: function (branch, msg) {
			var add = this.add();
			var commit = this.commit(branch, msg);
			return add + ' && ' + commit + ' && ' + 'git push origin daily/' + branch + ':daily/' + branch;
		},
		publish: function (branch) {
			var tag = this.tag(branch);
			return tag + ' && ' + 'git push origin publish/' + branch + ':publish/' + branch;
		},
		tag: function (branch) {
			return 'git tag publish/' + branch;
		},
		add: function () {
			return 'git add . -A';
		},
		commit: function (branch, msg) {
			var msg = msg || 'prepub branch version: ' + branch;
			return "git commit -m '" + msg + "'";
		}
	},
	pubConfig: {
		"vip": ['pc:vip:publish', 'pc:vip:prepub'],
		"h5": ['h5:publish', 'h5:prepub'],
		"pc": ['pc:publish', 'pc:prepub'],
		"test01": ['test01'],
		"test02": ['test02']
	}
}
