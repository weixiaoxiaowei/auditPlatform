<template>
  <div id="app">
    <transition name="router">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.router-enter {
  position: absolute;
  opacity: 0;
  transform: translateX(100%);
}
.router-enter-active {
  position: absolute;

  transition: all 1s ease;
}
.router-enter-to {
  position: absolute;
  opacity: 0.4;
  transform: translateX(0);
}
.router-leave {
  position: absolute;
  opacity: 0.4;
  transform: translateX(0);
}
.router-leave-active {
  position: absolute;
  transition: all 1s ease;
}

.router-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(100%);
}
</style>
