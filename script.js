// if you are using library directly from CDN
// just don't forget to access default prop
// https://unpkg.com/vue-draggable@1.0.9/lib/vue-draggable.js
Vue.use(VueDraggable.default);

new Vue({
  template: `
  <div v-drag-and-drop:options="options" class="drag-wrapper">
    <ul>
      <li>
       <div class="ui active tab segment" data-tab="first">
                <div class=" column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-5.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

      </li>
      <li>
      <div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-6.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
      </li>
      <li>
      <div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-7.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
      </li>
    </ul>
    <ul>
      <li>
      <div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-5.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
      </li>
      <li>
      <div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-6.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
      </li>
      <li>
      <div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-7.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
      </li>
    </ul>
    <ul>
      <li><div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-5.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
      </li>
      <li><div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-6.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div></li>
      <li><div class="ui active tab segment" data-tab="first">
                <div class="ten wide column grid">
                  <div class="ui divided items">
                   
                      <div class="item">
                        
                            <div class="ui">
                              <i class=" big ellipsis vertical icon"></i>
                            </div>
                        <div class="ui small image">
                          <img src="img/tp-7.jpg" alt="">
                        </div>
                        <div class="middle aligned content">
                          <div class="header">
                           Chinese Meat Duplings
                          </div>
                          <div class="description">
                            <p>672 Kcal per amet </p>
                          </div>
                         
                          <div class="extra">
                            <button class="circular ui olive right floated icon button">
                              <i class="icon add"></i>
                            </button>
                          </div>
                       </div>
                       <div class="header">
                          <label><h2>$4,99</h2></label> 
                        </div>
                      </div>

                    </div>
                  </div>
                </div></li>
    </ul>
  </div>
  `,
  data() {
    const componentInstance = this;
    
    return {
      options: {
        // dropzoneSelector: 'ul',
        // draggableSelector: 'li',
        // showDropzoneAreas: true,
        // multipleDropzonesItemsDraggingEnabled: true,
        // onDrop(event) {
        //   console.log(event);
        // },
        // onDragstart(event) {
        //   event.stop();
        // },
        onDragend(event) {
          // if you need to stop d&d
          // event.stop();

          // you can call component methods, just don't forget 
          // that here `this` will not reference component scope,
          // so out from this returned data object make reference
          // to component instance
          componentInstance.someDummyMethod();

          // to detect if draggable element is dropped out
          if (!event.droptarget) {
            console.log('event is dropped out');
          }
        }
      }
    }
  },
  methods: {
    someDummyMethod() {
      console.log('Hello from someDummyMethod');
    }
  }
}).$mount("#app");