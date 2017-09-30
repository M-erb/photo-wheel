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
          <transition name="fadeBoth">
            <div class="wh_instructions" v-if="featuredItem.fill === ''">
              <p>Click on an image to view it</p>
            </div>
          </transition>
          <transition name="fadeIn">
            <div class="wh_featuredItem" v-if="featuredItem.fill === 'one'" :style="{backgroundImage: 'url(' + featuredItem.lgImgUrl + ')'}">
            <p class="pro_title">{{featuredItem.name}}</p>
            <a class="pro_link" :href="featuredItem.url">See More</a>
            </div>
          </transition>
          <transition name="fadeIn">
            <div class="wh_featuredItem" v-if="featuredItem.fill === 'two'" :style="{backgroundImage: 'url(' + featuredItem.lgImgUrl + ')'}">
              <p class="pro_title">{{featuredItem.name}}</p>
              <a class="pro_link" :href="featuredItem.url">See More</a>
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
        url: '',
        details: '',
        type: '',
        fill: ''
      },
      wheelImgs: [
        {
          miniImgUrl: 'content/img/200_christopher-ruel-221920.jpg',
          lgImgUrl: 'content/img/600_christopher-ruel-221920.jpg',
          name: 'Project One',
          url: '#projectOne',
          details: 'Some details for project one',
          type: 'Mechanical',
          position: 0
        }, {
          miniImgUrl: 'content/img/200_elena-saharova-215516.jpg',
          lgImgUrl: 'content/img/600_elena-saharova-215516.jpg',
          name: 'Project Two',
          url: '#projectTwo',
          details: 'Some details for project Two',
          type: 'Mechanical',
          position: 45
        }, {
          miniImgUrl: 'content/img/200_img3.jpg',
          lgImgUrl: 'content/img/600_img3.jpg',
          name: 'Project Three',
          url: '#projectThree',
          details: 'Some details for project Three',
          type: 'Mechanical',
          position: 90
        }, {
          miniImgUrl: 'content/img/200_joel-filipe-226909.jpg',
          lgImgUrl: 'content/img/600_joel-filipe-226909.jpg',
          name: 'Project Four',
          url: '#projectFour',
          details: 'Some details for project Four',
          type: 'Mechanical',
          position: 135
        }, {
          miniImgUrl: 'content/img/200_jonas-jacobsson-344603.jpg',
          lgImgUrl: 'content/img/600_jonas-jacobsson-344603.jpg',
          name: 'Project Five',
          url: '#projectFive',
          details: 'Some details for project Five',
          type: 'Mechanical',
          position: 180
        }, {
          miniImgUrl: 'content/img/200_img6.jpg',
          lgImgUrl: 'content/img/600_img6.jpg',
          name: 'Project Six',
          url: '#projectSix',
          details: 'Some details for project Six',
          type: 'Mechanical',
          position: 225
        }, {
          miniImgUrl: 'content/img/200_img7.jpg',
          lgImgUrl: 'content/img/600_img7.jpg',
          name: 'Project Seven',
          url: '#projectSeven',
          details: 'Some details for project Seven',
          type: 'Mechanical',
          position: 270
        }, {
          miniImgUrl: 'content/img/200_img8.jpg',
          lgImgUrl: 'content/img/600_img8.jpg',
          name: 'Project Eight',
          url: '#projectEight',
          details: 'Some details for project Eight',
          type: 'Mechanical',
          position: 315
        }
      ],
    }
  },
  props: {},
  methods: {
    selectItem(item) {
      var vm = this
      vm.curPosition = item.position
      vm.featuredItem = Object.assign(vm.featuredItem, item)
      if (vm.featuredItem.fill === '' || vm.featuredItem.fill === 'one') {
        vm.featuredItem.fill = 'two'
      } else if (vm.featuredItem.fill === 'two') {
        vm.featuredItem.fill = 'one'
      }
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
