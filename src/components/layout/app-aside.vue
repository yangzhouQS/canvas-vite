<template>
  <div class="app-aside bg-gray-600">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <icon-location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item :index="`${index+100}`" v-for="(menu,index) in routes" :key="index">
        <el-icon>
          <icon-setting/>
        </el-icon>
        <template #title>
          <router-link :to="menu.path">
            {{ menu.meta.title }}
          </router-link>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { routes } from '../../router'

export default {
  name: 'app-aside',
  data() {
    return {
      routes,
      isCollapse: false
    }
  },
  computed: {},
  mounted() {
    console.log(routes)
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    }
  }
}
</script>

<style scoped>
.app-aside {
  width: 240px;
}
</style>
