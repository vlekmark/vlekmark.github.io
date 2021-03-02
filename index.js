AFRAME.registerComponent('modify-materials', {
	init: function () {
		this.el.addEventListener('model-loaded', () => {
			const obj = this.el.getObject3D('mesh');
			// Go over the submeshes and modify materials we want.
			obj.traverse(node => {
				console.log(node.name);
				console.log(node.primitives[0].material);

				try {
					node.primitives[0].material = 1;
				} catch {
					(e => console.warn(e));
				};
				try {
					node.primitives[0].material.set(1);
				} catch {
					(e => console.warn(e));
				}
				/*if (node.name.indexOf('ship') !== -1) {
					node.material.color.set('red');
				}*/
			});
		});
    }
});