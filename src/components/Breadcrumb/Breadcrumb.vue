<script>
export default {
  computed: {
    routeList() {
      const routes = this.$route.matched.slice(1)
      const breadcrumb = routes.map(route => {
        return {
          path: route.path,
          breadcrumbName: route.meta.title
        }
      })
      return breadcrumb
    }
  },
  mounted() {
  },
  props: {
    action: {
      type: Boolean,
      default: true
    },
    actionFn: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    itemRender ({route, routes, paths}) {
      return routes.indexOf(route) === routes.length - 1 ? (
        <span>{route.breadcrumbName}</span>
      ) : (
        <router-link to={paths.join('/')}>{route.breadcrumbName}</router-link>
      )
    },
    renderOperator () {
      const action = (
        <div class="operator">
          <a-button type="primary" size="small" {...{on: {click: this.actionFn}}}>确认</a-button>
          <a-button size="small" {...{on: {click: this.$router.go(-1)}}}>取消</a-button>
        </div>
      )
      const noaction = (
        <div class="operator">
          <a-button shape="circle" icon="left" size="small" {...{on: {click: this.$router.go(-1)}}} />
          <a-button shape="circle" icon="reload" size="small" />
        </div>
      )
      return (action ? action : noaction)
    },
  },
  render () {
    return (
      <div class="breadcrumb">
        <a-breadcrumb routes={this.routeList} itemRender={this.itemRender}>
        </a-breadcrumb>
        {this.renderOperator()}
      </div>
    )
  },
}
</script>

<style lang="less" scoped>
.breadcrumb{
  position: relative;
  background: #fff;
  padding: 10px;

  .operator{
    position: absolute;
    top: 8px;
    right: 20px;

    button{
      margin-left: 5px;
    }
  }
}
</style>
