<script>
export default {
  onLaunch: function() {
    // this.preloadHomeImages()
  },
  methods: {
    // 预加载首页图片
    preloadHomeImages() {
      const homeImages = [
        '/static/home/plus.png',
        '/static/home/scan.png',
        '/static/home/money.png',
        '/static/home/location.png',
        '/static/home/card.png',
        '/static/homeIcon/acconut.png',
        '/static/homeIcon/yuebao.png',
        '/static/me/welfare.png',
        '/static/homeIcon/bank.png',
        '/static/homeIcon/believe.png',
        '/static/homeIcon/credict.png',
        '/static/homeIcon/life.png',
        '/static/homeIcon/mobile.png',
        '/static/homeIcon/little.png',
        '/static/homeIcon/more.png',
        '/static/homeIcon/house.png',
        '/static/home/shouye.svg'
      ]
      
      homeImages.forEach(src => {
        this.preloadImage(src)
      })
    },
    
    // 预加载单个图片
    preloadImage(src) {
      // #ifdef H5
      const img = new Image()
      img.src = src
      // #endif
      
      // #ifdef APP-PLUS
      uni.getImageInfo({
        src: src,
        success: (res) => {
          console.log('预加载成功:', src)
        },
        fail: (err) => {
          console.log('预加载失败:', src, err)
        }
      })
      // #endif
      
      // #ifdef MP
      uni.getImageInfo({
        src: src,
        success: (res) => {
        
        }
      })
      // #endif
    }
  }
}
</script>

<style>
/*每个页面公共css */
</style>

