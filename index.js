AFRAME.registerComponent('change-material', {
	init: function () {
		this.el.addEventListener('model-loaded', () => {
			const obj = this.el.getObject3D('mesh');
			if (!obj) return;

			obj.traverse(node => {
				if (node.isMesh) {

					let button = document.getElementById('button');

					let materials = ["diffuseMidnight.jpg", "diffuseBeach.jpg", "diffuseStreet.jpg"];
					let i = 0;
					let j = materials.length;

					button.addEventListener('click', () => {

						// cycle materials on click, reset on end
						i++;
						if (i === j) i = 0;

						node.material.map = new THREE.TextureLoader().load(`MaterialsVariantsShoe/glTF/${materials[i]}`);
					});
				};
			});
		});
	}
});