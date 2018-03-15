<template>
  <cms-layout>
    <cms-header slot="header"></cms-header>
    <cms-aside slot="aside"></cms-aside>
    <cms-main slot="main">
      <router-view></router-view>
    </cms-main>
  </cms-layout>
</template>