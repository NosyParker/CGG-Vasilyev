
	window.onload=function(){
        var camera, scene, renderer;
        var geometry, material, mesh;
        var idAnimateFrame;
     
        init();
        animate();

        var stopButton = document.getElementById("stopButton");
        var startButton = document.getElementById("runButton");

        stopButton.addEventListener("click", stopAnimate)
        startButton.addEventListener("click", runAnimateAgain)

        startButton.disabled=true
  
        function init() {

            camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);
 
            camera.position.z = 600;
 
            scene = new THREE.Scene();
            geometry = new THREE.CylinderGeometry( 1, 80*3, 80*3, 4 );
            material = new THREE.MeshBasicMaterial( {color: 0x00ff00 , wireframe:true} );
            mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
        }
 
        function animate() {
     
            idAnimateFrame = requestAnimationFrame(animate);
       
            mesh.rotation.y += 0.01;      
            renderer.render(scene, camera);
        }

        function stopAnimate() {
            cancelAnimationFrame( idAnimateFrame );
            stopButton.disabled = true
            runButton.disabled = false
        }

        function runAnimateAgain() {
            idAnimateFrame = requestAnimationFrame(animate);
            renderer.render(scene, camera);
            runButton.disabled = true
            stopButton.disabled = false
        }
    }