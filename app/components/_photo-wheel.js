Vue.component('photo-wheel', {
  template: `
    <div class="wh_area">
      <!--<pre>{{wheelImgs}}</pre>-->
      <div class="wh_outer">
        <ul class="wh_img_list" :style="{transform: 'rotate(-' + curPosition + 'deg)'}">
          <li v-for="(item, index) in wheelImgs" :class="['wh_img', 'wh_' + (index + 1)]">
            <a v-on:click="selectItem(item)">
              <img :src="item.miniImgUrl" :alt="item.name">
            </a>
          </li>
        </ul>
        <div class="wh_inner">
          <div class="wh_instructions" v-if="!featuredItem.filled">
            <p>Click on an image to view it</p>
          </div>
          <transition name="fade">
            <div class="wh_featuredItem" v-if="featuredItem.filled" :style="{backgroundImage: 'url(' + featuredItem.lgImgUrl + ')'}">
              <!-- <img :src="featuredItem.lgImgUrl" :alt="featuredItem.name"> -->
              <p>{{featuredItem.name}}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  `,
  data: function() {
    return {
      curPosition: 0,
      featuredItem: {
        miniImgUrl: '',
        lgImgUrl: '',
        name: '',
        details: '',
        type: '',
        filled: false
      },
      wheelImgs: [
        {
          miniImgUrl: 'content/img/200_christopher-ruel-221920.jpg',
          lgImgUrl: 'content/img/600_christopher-ruel-221920.jpg',
          name: 'Project One',
          details: 'Some details for project one',
          type: 'Mechanical',
          position: 0
        }, {
          miniImgUrl: 'content/img/200_elena-saharova-215516.jpg',
          lgImgUrl: 'content/img/600_elena-saharova-215516.jpg',
          name: 'Project Two',
          details: 'Some details for project Two',
          type: 'Mechanical',
          position: 45
        }, {
          miniImgUrl: 'content/img/200_img3.jpg',
          lgImgUrl: 'content/img/600_img3.jpg',
          name: 'Project Three',
          details: 'Some details for project Three',
          type: 'Mechanical',
          position: 90
        }, {
          miniImgUrl: 'content/img/200_joel-filipe-226909.jpg',
          lgImgUrl: 'content/img/600_joel-filipe-226909.jpg',
          name: 'Project Four',
          details: 'Some details for project Four',
          type: 'Mechanical',
          position: 135
        }, {
          miniImgUrl: 'content/img/200_jonas-jacobsson-344603.jpg',
          lgImgUrl: 'content/img/600_jonas-jacobsson-344603.jpg',
          name: 'Project Five',
          details: 'Some details for project Five',
          type: 'Mechanical',
          position: 180
        }, {
          miniImgUrl: 'content/img/200_img6.jpg',
          lgImgUrl: 'content/img/600_img6.jpg',
          name: 'Project Six',
          details: 'Some details for project Six',
          type: 'Mechanical',
          position: 225
        }, {
          miniImgUrl: 'content/img/200_img7.jpg',
          lgImgUrl: 'content/img/600_img7.jpg',
          name: 'Project Seven',
          details: 'Some details for project Seven',
          type: 'Mechanical',
          position: 270
        }, {
          miniImgUrl: 'content/img/200_img8.jpg',
          lgImgUrl: 'content/img/600_img8.jpg',
          name: 'Project Eight',
          details: 'Some details for project Eight',
          type: 'Mechanical',
          position: 315
        }
      ],
    }
  },
  methods: {
    selectItem(item) {
      var vm = this
      vm.featuredItem.filled =false
      vm.curPosition = item.position
      vm.featuredItem = Object.assign(vm.featuredItem, item)
      vm.featuredItem.filled = true
    }
  }
})

/*
<ul class="wh_img_list">
  <li class="wh_img wh_1"></li>
  <!--<li class="wh_img wh_2"></li>-->
  <li class="wh_img wh_3"></li>
  <!--<li class="wh_img wh_4"></li>-->
  <li class="wh_img wh_5"></li>
  <!--<li class="wh_img wh_6"></li>-->
  <li class="wh_img wh_7"></li>
  <!--<li class="wh_img wh_8"></li>-->
  <li class="wh_img wh_9"></li>
  <!--<li class="wh_img wh_10"></li>-->
  <li class="wh_img wh_11"></li>
  <!--<li class="wh_img wh_12"></li>-->
  <li class="wh_img wh_13"></li>
  <!--<li class="wh_img wh_14"></li>-->
  <li class="wh_img wh_15"></li>
  <!--<li class="wh_img wh_16"></li>-->
</ul>
*/
