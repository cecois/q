<template>
  <div class="">
    <div class=""></div>
    <div id="navInternal" class="">
      <ul>
        <li class="logo-text" v-for="p in panes">
          <a v-if="pane!==p" @click.prevent="pane=p" href="">{{p}}</a>
          <span v-else>{{p}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const PROPS = defineProps({ panes: Array, pane: String })
  // const emit = defineEmits(['set-panel'])

/*
                          ______
                         / ____ `.
 _   __  __   _   .---.  `'  __) |
[ \ [  ][  | | | / /__\\ _  |__ '.
 \ \/ /  | \_/ |,| \__.,| \____) |
  \__/   '.__.'_/ '.__.' \______.'
*/
onMounted(() => {
  nav(PROPS.pane)
})

watch(() => [PROPS.pane], (newp, oldp) => {
  nav(PROPS.pane)
})

const nav = (el) => {
  let element = document.querySelector(`#${el}`);
  element.scrollIntoView({ block: 'end', behavior: 'smooth' })
}
</script>

<style scoped>
#navInternal ul {
  float: right;
}

#navInternal li {
  display: inline;
  list-style-type: none;
  padding-right: 20px;
}

#navInternal li a {
  text-decoration: none;
  /*text-shadow: 2px 2px 8px rgba(255, 255, 255, 1);*/
  text-shadow: 2px 4px 1px pink, 2px 4px 1px pink, 2px 4px 1px pink, 2px 4px 1px pink;
}
</style>
