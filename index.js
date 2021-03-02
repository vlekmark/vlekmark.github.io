AFRAME.registerComponent('change-material', {
	init: function () {
		this.el.addEventListener('model-loaded', () => {
			const obj = this.el.getObject3D('mesh');
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