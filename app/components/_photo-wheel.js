Vue.component('photo-wheel', {
  template: `
    <div class="wh_area">
      <!--<pre>{{wheelImgs}}</pre>-->
      <div class="wh_outer">
        <ul class="wh_img_list">
          <li v-for="(item, index) in wheelImgs" :class="['wh_img', 'wh_' + (index + 1)]">
            <a v-on:click="selectItem(item)">
              <!--<img :src="item.miniImgUrl" :alt="item.name">-->
            </a>
          </li>
        </ul>
        <div class="wh_inner">
          <div class="wh_instructions" v-if="!featuredItem.filled">
            <p>Click on an image to view it</p>
          </div>
          <div class="wh_featuredItem" v-if="featuredItem.filled" :style="{backgroundImage: 'url(' + featuredItem.lgImgUrl + ')'}">
            <!-- <img :src="featuredItem.lgImgUrl" :alt="featuredItem.name"> -->
            <p>{{featuredItem.name}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  data: function() {
    return {
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
          miniImgUrl: 'content/img/img1.jpg',
          lgImgUrl: 'content/img/img1.jpg',
          name: 'Project One',
          details: 'Some details for project one',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img2.jpg',
          lgImgUrl: 'content/img/img2.jpg',
          name: 'Project Two',
          details: 'Some details for project Two',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img3.jpeg',
          lgImgUrl: 'content/img/img3.jpeg',
          name: 'Project Three',
          details: 'Some details for project Three',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img4.jpg',
          lgImgUrl: 'content/img/img4.jpg',
          name: 'Project Four',
          details: 'Some details for project Four',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img5.jpg',
          lgImgUrl: 'content/img/img5.jpg',
          name: 'Project Five',
          details: 'Some details for project Five',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img6.jpeg',
          lgImgUrl: 'content/img/img6.jpeg',
          name: 'Project Six',
          details: 'Some details for project Six',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img7.jpeg',
          lgImgUrl: 'content/img/img7.jpeg',
          name: 'Project Seven',
          details: 'Some details for project Seven',
          type: 'Mechanical'
        }, {
          miniImgUrl: 'content/img/img8.jpeg',
          lgImgUrl: 'content/img/img8.jpeg',
          name: 'Project Eight',
          details: 'Some details for project Eight',
          type: 'Mechanical'
        }
      ],
    }
  },
  methods: {
    selectItem(item) {
      var vm = this
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
