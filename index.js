AFRAME.registerComponent('modify-materials', {
	init: function () {
		this.el.addEventListener('model-loaded', () => {
			const obj = this.el.getObject3D('mesh');
			// Go over the submeshes and modify materials we want.
			obj.traverse(node => {
				if (node.name === "Shoe") {
					console.log(node.material);
					try {
						node.material.set(1);
					} catch {
						(e => console.warn('cant do that'+ e));
					};

					try {
						node.material = 1;
					} catch {
						(e => console.warn('cant do that' + e));
					};

					try {
						node.material.color.set('red');
					} catch {
						(e => console.warn('cant do that' + e));
					};
				}
			});
		});
    }
});