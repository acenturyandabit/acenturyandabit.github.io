function _mousePanCamera(scene,root) {
    //camera
    this.camRad = 5;
    this.camPolAng = 0;
    this.camEqAng = 0;
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.mpX;
    this.mpY;
    let me=this;
    //mouse events


    this.rFactor = 0.1;

    this.movCam = function (e) {
        if (e.buttons) {
            me.camPolAng += (e.clientX - me.mpX) * me.rFactor;
            me.mpX = e.clientX;
            me.camEqAng += (e.clientY - me.mpY) * me.rFactor;
            me.mpY = e.clientY;
            /*camera.position.z=camRad*Math.sin(camPolAng*0.01);
            camera.position.x=camRad*Math.cos(camPolAng*0.01)*Math.cos(camEqAng*0.01);
            camera.position.y=camRad*Math.cos(camPolAng*0.01)*Math.sin(camEqAng*0.01);
            camera.lookAt(scene.position);*/
        }
    }
    root.addEventListener('mousemove', this.movCam);
    this.storpos = function (e) {
        me.mpX = e.clientX;
        me.mpY = e.clientY;
    }
    root.addEventListener('mousedown', this.storpos);
    this.zoom = function (e) {
        me.camRad += e.deltaY / 100;
        /*camera.position.z=camRad*Math.sin(camPolAng*0.01);
        camera.position.x=camRad*Math.cos(camPolAng*0.01)*Math.cos(camEqAng*0.01);
        camera.position.y=camRad*Math.cos(camPolAng*0.01)*Math.sin(camEqAng*0.01);
        camera.lookAt(scene.position);*/
    }
    root.addEventListener('wheel', this.zoom);
    //camera initial setup
    this.update = function () {
        this.camera.position.z = this.camRad * Math.sin(this.camPolAng * 0.01);
        this.camera.position.x = this.camRad * Math.cos(this.camPolAng * 0.01) * Math.cos(this.camEqAng * 0.01);
        this.camera.position.y = this.camRad * Math.cos(this.camPolAng * 0.01) * Math.sin(this.camEqAng * 0.01);
        this.camera.lookAt(scene.position);
    }
    //first call
    this.update();
    /*

    //touchscreen events
    var touchList = [];
    var touchMode = 0;
    document.addEventListener("touchstart", handleStart);
    document.addEventListener("touchend", handleEnd);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchcancel", handleEnd);

    function handleStart(e) {
        var touches = e.changedTouches;
        for (var i = 0; i < touches.length; i++) {
            touchList.push(copyTouch(touches[i]));
            touchMode = 3;
            if (touchList.length > 1) touchMode = 4;
        }
        event.preventDefault();
    }
    var preDist = 0;

    function handleMove(e) {
        var touches = e.changedTouches;
        for (var i = 0; i < touches.length; i++) {
            if (touchMode == 3) {
                touchList = [];
                touchList.push(copyTouch(touches[i]));
                touchMode = 1;
            } else if (touchMode == 1) { //drag
                camPolAng += (touches[0].pageX - touchList[0].pageX) * rFactor;
                camEqAng += (touches[0].pageY - touchList[0].pageY) * rFactor;
            } else if (touchMode == 4 || touchMode == 2) { // zoom events
                //just copy the touches to the list; we'll post-process.
                var tid = idx(touches[i].identifier);
                touchList[tid].pageX = touches[i].pageX;
                touchList[tid].pageY = touches[i].pageY;
            }
        }
        //for zoom events
        if (touchMode == 4 || touchMode == 2) {
            //calculate average distance
            var dist = 0;
            var dcount = 0;
            for (var j = 0; j < touchList.length; j++) {
                for (var i = j + 1; i < touchList.length; i++) {
                    dcount++;
                    dist += Math.sqrt((touchList[i].pageX - touchList[j].pageX) * (touchList[i].pageX - touchList[j].pageX) + (touchList[i].pageY - touchList[j].pageY) * (touchList[i].pageY - touchList[j].pageY));
                }
            }
            dist /= dcount;
            if (touchMode == 2) {
                camRad += dist - preDist;
            } else {
                touchMode = 2;
            }
            preDist = dist;
        }
        event.preventDefault();
    }

			function handleEnd(e){
				var touches=e.changedTouches;
				for (var i=0;i<touches.length;i++){
					touchList.splice(idx(touches[i].identifier),1);
					if (touchList.length==1){
						//rehash the remaining touches at the next opportunity
						touchMode=3;
					}else if (touchList.length>1)touchMode=4;
					else touchMode=0;//no remaining touches
				}
				event.preventDefault();
			}
			
			function idx(id){
				for (var i=0;i<touchList.length;i++){
					if (id==touchList[i].identifier)return i;
				}
			}
			
			function copyTouch(touch) {
				return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
			}
    */
}