      AFRAME.registerComponent('set-light', {
        schema: {
          intensity: { type: 'number', default: 1 },
          lights: { type: 'array', default: [] }
        },
        init: function() {
          this.el.addEventListener('click', () => {
            const intensity = this.data.intensity;
            const lightIds = this.data.lights;

            const lights = document.querySelectorAll('a-light');

            for (let i = 0; i < lights.length; i++) {
              const light = lights[i];
              const lightId = light.getAttribute('id');

              if (lightIds.length === 0 || lightIds.includes(lightId)) {
                light.setAttribute('intensity', intensity);
              }
            } 
          });
        }
      });
