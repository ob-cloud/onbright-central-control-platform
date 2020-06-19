<template>
  <div>
    <div class="breadcrumb">
      <a-breadcrumb :routes="routeList">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
          <span v-if="routes.indexOf(route) === routes.length - 1">
            {{ route.breadcrumbName }}
          </span>
          <router-link v-else :to="paths.join('/')">
            {{ route.breadcrumbName }}
          </router-link>
        </template>
      </a-breadcrumb>
      <div class="operator">
        <a-button shape="circle" icon="left" size="small" @click="$router.go(-1)" />
        <a-button shape="circle" icon="reload" size="small" />
      </div>
    </div>
    <div class="content">
       <a-card title="Default size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
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
  mounted () {
    console.log(this.$route)
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
