AFRAME.registerComponent('change-material', {
	init: function () {
		console.log('init')
		this.el.addEventListener('model-loaded', () => {
			console.log('model loaded')
			const obj = this.el.getObject3D('mesh');
			console.log(obj)
			if (!obj) return;

			obj.traverse(node => {
				console.log(node);
				if (node.isMesh) {
					//node.material = targetEl.material;
					console.log(node)
				};
			});
		});
	}
});