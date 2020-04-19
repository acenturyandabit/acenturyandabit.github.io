/*
structure:
engine{
	axis{
		children[
			circle (= donut, segmented circle, flaeron)
			radial
			hexhive
			text
			vector (= chevron, etc)
			axis
		]
	}
}
*/


/*
function templateChild(){
	this.centreX;
	this.centreY;
	this.centreZ;
	this.update=function(){

	}
	this.fromData=function(){

	}
}

*/

var elements = {
	axis: function (scene) {
		this.centreX = 0;
		this.centreY = 0;
		this.centreZ = 0;
		this.children = [];
		this.geometry = new THREE.BufferGeometry();
		this.points = new Float32Array(6); // start and end
		//tie position to geometry
		this.geometry.addAttribute("position", new THREE.BufferAttribute(this.points, 3));
		this.material = new THREE.LineBasicMaterial({
			color: [255, 255, 255],
			linewidth: 2
		});
		this.line = new THREE.Line(this.geometry, this.material);
		scene.add(this.line);
		this.update = function (t) {
			for (let i = 0; i < this.children.length; i++) {
				//change the cx, cy, cz of relevant children
				if (this.children[i].radialOffset) {
					this.children[i].element.centreY = this.centreY + this.children[i].radialOffset * Math.sin(this.children[i].angularOffset + t * this.children[i].offsetVelocity);
					this.children[i].element.centreZ = this.centreZ + this.children[i].radialOffset * Math.cos(this.children[i].angularOffset + t * this.children[i].offsetVelocity);
				} else {
					this.children[i].element.centreY = this.centreY;
					this.children[i].element.centreZ = this.centreZ;
				}
				this.children[i].element.centreX = this.centreX + this.children[i].start;
				this.children[i].element.update(t);
			} //draw the line itself
			positions = this.line.geometry.attributes.position.array;
			positions[0] = this.centreX + this.start;
			positions[1] = this.centreY;
			positions[2] = this.centreZ;
			positions[3] = this.centreX + this.end;
			positions[4] = this.centreY;
			positions[5] = this.centreZ;
			this.line.geometry.attributes.position.needsUpdate = true;
		}
		this.fromData = function (data) {
			for (let i = 0; i < data.children.length; i++) {
				let nc = {};
				nc.element = new elements[data.children[i].type](scene);
				nc.element.fromData(data.children[i]);
				nc.start = data.children[i].start;
				if (data.children[i].radialOffset) {
					nc.radialOffset = data.children[i].radialOffset || 0;
					nc.angularOffset = data.children[i].angularOffset || 0;
					nc.offsetVelocity = data.children[i].offsetVelocity || 0;
				}
				this.children.push(nc);
			}
			this.start = data.start;
			this.end = data.end;
		}
	},
	circle: function (scene) {
		this.vertexCount = 100;
		this.centreX = 0;
		this.centreY = 0;
		this.centreZ = 0;
		this.children = [];
		this.geometry = new THREE.BufferGeometry();
		this.points = new Float32Array(3 * (this.vertexCount + 1));
		this.geometry.addAttribute("position", new THREE.BufferAttribute(this.points, 3));
		//also colors yay
		this.cols = new Float32Array(3 * (this.vertexCount + 1));
		this.geometry.addAttribute("color", new THREE.BufferAttribute(this.cols, 3));
		this.material = new THREE.LineBasicMaterial({
			vertexColors: THREE.VertexColors,
			linewidth: 2
		});
		this.line = new THREE.Line(this.geometry, this.material);
		scene.add(this.line);
		this.update = function (t) {
			positions = this.line.geometry.attributes.position.array;
			for (let i = 0; i < this.vertexCount + 1; i++) {
				let _radius = this.radius;
				if (typeof _radius == "function") _radius = _radius(t);
				let angularVelocity = this.angularVelocity;
				if (typeof angularVelocity == "function") angularVelocity = angularVelocity(t);
				else angularVelocity = t * this.angularVelocity;
				positions[i * 3] = this.centreX;
				positions[i * 3 + 1] = this.centreY + _radius * Math.cos(i * 2 * Math.PI / this.vertexCount + angularVelocity);
				positions[i * 3 + 2] = this.centreZ + _radius * Math.sin(i * 2 * Math.PI / this.vertexCount + angularVelocity);
				if (this.pattern) {
					let col = i / this.vertexCount;
					col = col / (this.pattern.repetition || 1);
					col = col - Math.floor(col);
					col = Math.floor(this.pattern.sequence.length * col);
					col = this.pattern.sequence[col];
					this.line.geometry.attributes.color.setXYZ(i, col, col, col);
				} else {
					this.line.geometry.attributes.color.setXYZ(i, 1, 1, 1);
				}

			}
			this.line.geometry.attributes.position.needsUpdate = true;
		}
		this.fromData = function (data) {
			this.radius = data.radius;
			this.pattern = data.pattern;
			this.angularVelocity = data.angularVelocity;
		}
	},
	flare: function (scene) {
		this.centreX = 0;
		this.centreY = 0;
		this.centreZ = 0;
		this.children = [];
		this.update = function (t) {
			positions = this.line.geometry.attributes.position.array;
			for (let i = 0; i < this.pattern.count + 1; i++) {
				//outer radius points
				positions[i * 15] = this.centreX;
				positions[i * 15 + 1] = this.centreY + this.radius * Math.cos(i * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 2] = this.centreZ + this.radius * Math.sin(i * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 3] = this.centreX;
				positions[i * 15 + 4] = this.centreY + this.radius * Math.cos((i + 1) * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 5] = this.centreZ + this.radius * Math.sin((i + 1) * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				//inner radius points
				positions[i * 15 + 6] = this.centreX;
				positions[i * 15 + 7] = this.centreY + this.innerRadius * Math.cos((i + 1) * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 8] = this.centreZ + this.innerRadius * Math.sin((i + 1) * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 9] = this.centreX;
				positions[i * 15 + 10] = this.centreY + this.innerRadius * Math.cos(i * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 11] = this.centreZ + this.innerRadius * Math.sin(i * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				//closing point
				positions[i * 15 + 12] = this.centreX;
				positions[i * 15 + 13] = this.centreY + this.radius * Math.cos(i * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				positions[i * 15 + 14] = this.centreZ + this.radius * Math.sin(i * 2 * Math.PI / this.pattern.count + t * this.angularVelocity);
				let col = i % this.pattern.sequence.length;
				col = this.pattern.sequence[col];
				for (let j = 0; j < 5; j++) {
					this.line.geometry.attributes.color.setXYZ(i * 5 + j, col, col, col);
				}
			}
			this.line.geometry.attributes.position.needsUpdate = true;
		}
		this.fromData = function (data) {
			this.radius = data.radius;
			this.innerRadius = data.innerRadius;
			this.pattern = {};
			if (data.pattern) {
				this.pattern.cycleCount = Math.floor(1 / data.pattern.repetition) * data.pattern.sequence.length;
				this.pattern.sequence = data.pattern.sequence;
				this.pattern.count = this.pattern.cycleCount * this.pattern.sequence.length;
			}
			this.vertexCount = this.pattern.count * this.pattern.sequence.length * 5;
			this.angularVelocity = data.angularVelocity;
			this.geometry = new THREE.BufferGeometry();
			this.points = new Float32Array(3 * (this.vertexCount + 1));
			this.geometry.addAttribute("position", new THREE.BufferAttribute(this.points, 3));
			//also colors yay
			this.cols = new Float32Array(3 * (this.vertexCount + 1));
			this.geometry.addAttribute("color", new THREE.BufferAttribute(this.cols, 3));
			this.material = new THREE.LineBasicMaterial({
				vertexColors: THREE.VertexColors,
				linewidth: 2
			});
			this.line = new THREE.Line(this.geometry, this.material);
			scene.add(this.line);
		}
	}
}







// process the data
function _engine() {
	let me = this;
	this.time = 0;
	this.processedData = {};
	this.processData = function (data) {
		//reset.
		let cleanedData = {
			start: 0,
			end: 0,
			children: []
		}; // an 'axis'
		//for all elements in data:
		for (let i = 0; i < data.length; i++) {
			//polish the current data element.
			if (!data.end) {
				data.end = data.start
			};
			if (data[i].start < cleanedData.start) {
				cleanedData.start = data[i].start;
			}
			if (data[i].start > cleanedData.end) {
				cleanedData.end = data[i].start;
			}
			if (data[i].end < cleanedData.start) {
				cleanedData.start = data[i].end;
			}
			if (data[i].end > cleanedData.end) {
				cleanedData.end = data[i].end;
			}
			cleanedData.children.push(data[i]);
		}
		//return a cleaned up dataset.
		return cleanedData;
	}
	this.init = function () {
		//Cleanup
		this.time = 0;

		//create a scene
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer();
		//Todo: make it run in a div
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);
		this.camera = new _mousePanCamera(this.scene, document);
	}

	//update cycle
	function animate() {
		me.camera.update();
		me.time++;
		me.axis.update(me.time);
		requestAnimationFrame(animate);
		me.renderer.render(me.scene, me.camera.camera);
	}

	this.beginRender = function (processedData) {
		//TODO: detect if not processed and auto process.
		//set this data to the specified data
		this.activeData = processedData;
		//clean up all previous elements.

		//draw the axis

		//recursively do stuff
		this.axis = new elements.axis(this.scene);
		this.axis.fromData(processedData);
		animate();
	}



}

var engine = new _engine();
document.addEventListener("DOMContentLoaded", function () {
	engine.init();
	var data = {
		type: "axis",
		start: 0,
		end: 1,
		children: [{
			start: 0,
			type: "circle",
			radius: (t) => {
				return Math.sin(t / 100) * 0.25 + 0.75
			},
			angularVelocity: 0.01,
			pattern: {
				repetition: 0.5,
				sequence: [1, 0]
			}
		}]
	};
	//ok stuff that we're randomly generating circles
	function generateSequence() {
		let seq = [];
		let amt = Math.random() * 5 + 2;
		for (let i = 0; i < amt; i++) {
			seq.push(Math.random());
		}
		return seq;
	}
	/*
		for (let i = 0; i < 10; i++) {
			data.children.push({
				start: Math.random(),
				end: Math.random(),
				type: (Math.random()>0.5)?"circle":"flare",
				radius: Math.random() * (0.5 + (i < 4) * 0.5),
				innerRadius: Math.random() * (0.5 + (i < 4) * 0.5),
				angularVelocity: (Math.random() - 0.5) * 0.03,
				pattern: {
					repetition: 1 / Math.floor(Math.random() * 4 + 3),
					sequence: generateSequence()
				},
				radialOffset: (i > 4) * Math.random(),
				angularOffset: Math.random(),
				offsetVelocity: (Math.random() - 0.5) * 0.03,
			})
		}*/
	for (let i = 0; i < 10; i++) {
		function goalSeeker() {
			let me=this;
			this.pos = 1;
			this.target = 0;
			this.rrate = 1;
			this.pause=0;
			this.get = function (t) {
				//iterate and get
				if (me.pause>0)me.pause--;
				else if ((me.target - me.pos) * me.rrate > 0) {
					me.pos += me.rrate;
				} else {
					if (Math.random()>0.99){
					//pick a new target
					me.target = Math.random();
					me.rrate = Math.random()*0.0001;
					if ((me.target - me.pos) * me.rrate < 0) me.rrate *= -1;
					}else{
						me.pause=Math.random()*100+100;
					}
				}
				return me.pos;
			}
		}
		data.children.push({
			start: (Math.random()) - 0.5,
			end: Math.random(),
			type: "circle",
			radius: new goalSeeker().get,
			innerRadius: new goalSeeker().get,
			angularVelocity: new goalSeeker().get,
			pattern: {
				repetition: 1 / Math.floor(Math.random() * 4 + 3),
				sequence: generateSequence()
			},
			radialOffset: (i > 4) * Math.random(),
			angularOffset: Math.random(),
			offsetVelocity: (Math.random() - 0.5) * 0.03,
		})
	}
	engine.beginRender(data);
})