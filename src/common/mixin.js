import {debounce} from "./utils"
import BackTop from "components/content/backTop/BackTop";
import {BACK_POSITION} from "common/const"

export const itemListenerMixin={
  data(){
    return {
      itemImgListener:null,
      newRefresh:null,
    }
  },
  mounted(){
    // 1.图片加载完成的事件监听
    // this.$refs.scroll.refresh对这个函数进行防抖操作
    this.newRefresh=debounce(this.$refs.scroll.refresh,100) 
    // 对监听的事件进行保存
    this.itemImgListener=()=>{
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const backTopMixin={
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop: false,
    }
  },
  methods:{
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 2000);
    },
    listenShowBackTop(position){
      this.isShowBackTop = (-position.y) > BACK_POSITION;
    }
  }
}