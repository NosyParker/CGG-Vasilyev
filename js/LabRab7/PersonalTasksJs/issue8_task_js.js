window.onload=function(){
    var camera, scene, renderer;
    var geometry, material, materials, light, mesh, R, G, B;
    var idAnimateFrame;
 
    init();
    animate();

    document.getElementById("ambientRed").addEventListener("input", changeAmbientLightColoring, false);
    document.getElementById("ambientGreen").addEventListener("input", changeAmbientLightColoring, false);
    document.getElementById("ambientBlue").addEventListener("input", changeAmbientLightColoring, false); 

    function init() {

        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);

        camera.position.z = 600;

        scene = new THREE.Scene();

        geometry = new THREE.BoxGeometry( 250, 250, 250, 1, 1, 1 )

        var loader = new THREE.TextureLoader();

        var materials = [
            material1 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/1.jpg')
            }),
            material2 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/2.jpg')
            }),
            material3 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/3.jpg')
            }),
            material4 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/4.jpg')
            }),
            material5 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/5.jpg')
            }),
            material6 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/cube_textures/6.png')
            }),

        ];

        for (var material in materials) {
                materials[material].needsUpdate = true;
        }

        mesh = new THREE.Mesh( geometry, materials );

        light = new THREE.AmbientLight( new THREE.Color("rgb(255, 255, 255)"))
        scene.add( mesh );
        scene.add(light)
     
        container = document.getElementById( 'container-block' );
        
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(800, 600);
        container.appendChild(renderer.domElement);
    }


    function animate() {
 
        idAnimateFrame = requestAnimationFrame(animate);
   
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.02;      
        renderer.render(scene, camera);
    };


    function changeAmbientLightColoring() {
        scene.remove(light)
        R=document.getElementById("ambientRed").value;
        G=document.getElementById("ambientGreen").value;
        B=document.getElementById("ambientBlue").value;  

        light = new THREE.AmbientLight( new THREE.Color("rgb("+R+","+G+","+B+")") )
        
        scene.add( light )

    };


}