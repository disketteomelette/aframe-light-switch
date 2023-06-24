# aframe-light-switch
A light switch for a-frame. --- Aframe-light-switch is a component for the A-Frame library that enables you to adjust the intensity of one or all <a-light> elements in a scene using clickable objects. It provides a straightforward schema where the clickable object references the "set-light" component. Within this component, users can specify the desired intensity value using the "intensity" parameter. Additionally, the "lights" parameter allows you to select the lights to be affected by the action. You can choose to modify all lights in the scene (by leaving the parameter empty), a specific light, or multiple lights by separating their IDs with commas.

Example:
        
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="aframe-light-switch.js" ></script> 
  
  [...]

  
    <a-scene background="color: #000000">
          <a-entity camera look-controls position="0 1.6 0">
      <a-cursor></a-cursor>
    </a-entity>
       
      <a-light id="light1" type="spot" position="-5 5 -5" intensity="10" angle="45" penumbra="1" target="#ground" color="red"></a-light>
      <a-light id="light2" type="spot" position="5 5 -5" intensity="13" angle="60" penumbra="1" target="#ground" color="blue"></a-light>
      <a-light id="light3" type="spot" position="0 5 5" intensity="4" angle="75" penumbra="1" target="#ground" color="white"></a-light>      
      <a-plane id="ground" position="0 0 0" rotation="-90 0 0" width="50" height="50" color="#111111"></a-plane>
    
      <a-box set-light="intensity: 0.1, lights: light1" color="green" scale="0.2 0.2 0.1" position="0 1.6 -3"></a-box>
      <a-box set-light="intensity: 0.5, lights: light2, light3" color="red" scale="0.2 0.2 0.1" position="0 1.3 -3" ></a-box>
      <a-box set-light="intensity: 12" color="blue" scale="0.2 0.2 0.1" position="0 1.0 -3" ></a-box>

    </a-scene>
