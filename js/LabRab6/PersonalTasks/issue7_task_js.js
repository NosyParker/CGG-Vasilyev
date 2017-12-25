window.onload=function(){
    var camera, scene, renderer;
    var geometry, material, materials, mesh;
    var idAnimateFrame;
 
    init();
    animate();

    
    function init() {

        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);

        camera.position.z = 600;

        scene = new THREE.Scene();

        geometry = new THREE.BoxGeometry( 250, 250, 250, 1, 1, 1 )

        var loader = new THREE.TextureLoader();

        var materials = [
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/1.jpg')
            }),
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/2.jpg')
            }),
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/3.jpg')
            }),
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/4.jpg')
            }),
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/5.jpg')
            }),
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/6.png')
            }),

        ];
        mesh = new THREE.Mesh( geometry, materials );
        
        scene.add( mesh );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }


    function animate() {
 
        idAnimateFrame = requestAnimationFrame(animate);
   
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.02;      
        renderer.render(scene, camera);
    }

}