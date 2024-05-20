<template>
  <router-view :key="$route.path"/>
</template>

<script>
const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
};

const ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class extends ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
};

export default {
  name: 'App',
  // your other code here
};
</script>