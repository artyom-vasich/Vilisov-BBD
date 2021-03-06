import Unit from 'libs/engines/3d/Unit'


const lightDistanceToModel = 5


export default class Lowpoly extends Unit {
  constructor(props) {
    super(props)

    const { scene, THREE } = props

    // this.light0 = new THREE.HemisphereLight( 0xffffff, 0x444444, 5.25 )
    // this.light0.position.set( 0, lightDistanceToModel * 3, 0 )
    // scene.add( this.light0 )

    // this.light1 = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.95 )
    // this.light1.position.set( 0, -lightDistanceToModel, 0 )
    // scene.add( this.light1 )
    
    this.light2 = new THREE.DirectionalLight( 0xee55ee, 2.95 )
    this.light2.position.set( lightDistanceToModel, lightDistanceToModel, 0 )
    // this.light2.castShadow = true
    scene.add( this.light2 )

    this.light3 = new THREE.DirectionalLight( 0x77bbee, 2.95 )
    this.light3.position.set( lightDistanceToModel * Math.cos(Math.PI * 2 / 3), lightDistanceToModel, lightDistanceToModel * Math.sin(Math.PI * 2 / 3) )
    // this.light3.castShadow = true
    scene.add( this.light3 )

    this.light4 = new THREE.DirectionalLight( 0x0088ff, 2.95 )
    this.light4.position.set( lightDistanceToModel * Math.cos(Math.PI * 4 / 3), 3, lightDistanceToModel * Math.sin(Math.PI * 4 / 3) )
    // this.light4.castShadow = true
    scene.add( this.light4 )
  }

  animate = props => {
    // this.light0.position
    //   .lerp(props.controls.target, .025)
    //   .setY(lightDistanceToModel * 3)

    const angle2 = props.frameNumber * 10 / props.maxFrameNumber * Math.PI * 2
    const angle3 = angle2 + Math.PI * 2 / 3
    const angle4 = angle3 + Math.PI * 2 / 3

    // this.light0.position
    //   .set(0, lightDistanceToModel * 2, 0)
    //   // .add(props.controls.target)
    this.light2.position
      .set(lightDistanceToModel * Math.cos(angle2), 5, lightDistanceToModel * Math.sin(angle2))
      // .add(props.controls.target)
    this.light3.position
      .set(lightDistanceToModel * Math.cos(angle3), 5, lightDistanceToModel * Math.sin(angle3))
      // .add(props.controls.target)
    this.light4.position
      .set(lightDistanceToModel * Math.cos(angle4), 5, lightDistanceToModel * Math.sin(angle4))
      // .add(props.controls.target)
  }

  dispose = () => {}
}
