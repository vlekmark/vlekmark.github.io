AFRAME.registerComponent('change-material', {
	init: function () {
		this.el.addEventListener('model-loaded', () => {
			const obj = this.el.getObject3D('mesh');
			if (!obj) return;

			obj.traverse(node => {
				if (node.isMesh) {
					node.material = this.material;
					console.log(this.material)
				};
			});
		});
	}
});