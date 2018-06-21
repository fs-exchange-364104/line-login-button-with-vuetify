<template lang="pug">
  v-btn.line-login-button(
    :large="large"
    :small="small"
    :disabled="disabled"
    :style="style['buttonStyle']"
    :ripple="false"
    depressed
    )
    img(:src="style['imgSrc']")
    div.vertical-line
    p(:style="style['pStyle']")
      | {{ text }}
</template>

<script>
const settings = {
  large: {
    imgSrc: require('@/assets/line_44.png'),
    buttonStyle: {
      margin: '6px',
    },
    pStyle: {
      fontSize: '12px',
      lineHeight: '12px',
      margin: '16px 32px',
    },
  },
  normal: {
    imgSrc: require('@/assets/line_44.png'),
    buttonStyle: {
      margin: '5px',
    },
    pStyle: {
      fontSize: '10px',
      lineHeight: '10px',
      margin: '13px 26px',
    },
  },
  small: {
    imgSrc: require('@/assets/line_32.png'),
    buttonStyle: {
      margin: '4px',
    },
    pStyle: {
      fontSize: '8px',
      lineHeight: '8px',
      margin: '10px 20px',
    },
  },
}
export default {
  name: 'LineLoginButton',
  props: {
    large: Boolean,
    small: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      text: 'Log in with LINE',
    }
  },
  computed: {
    style () {
      let data
      if (this.large) {
        data = settings['large']
      } else if (this.small) {
        data = settings['small']
      } else {
        data = settings['normal']
      }
      return data
    },
  },
}
</script>

<style lang="sass" scoped>
button.line-login-button.btn.btn--depressed
  display: inline-block
  background-color: #00c300 !important
  padding: 0px
  word-break: keep-all
  border-radius: 5px
  *
    display: inline-block
    vertical-align: middle
    padding: 0px
    border: 0px
  img
    max-height: 100%
  div.vertical-line
    width: 1px
    height: 100%
    margin: 0px !important
    border-right: 1px solid #00b300 !important
  p
    font-family: sans-serif
    font-weight: bold
    color: white
    text-transform: none
  &:hover
    background-color: #00e000 !important
    div.vertical-line
      border-right-color: #00c900 !important
  &:active
    background-color: #00b300 !important
    div.vertical-line
      border-right-color: #009800 !important
  &:disabled
    background-color: #b5b5b5 !important
    div.vertical-line
      border-right-color: #c6c6c6 !important
</style>

<style lang="sass">
button.line-login-button
  .btn__content
    padding: 0px !important
    // fix mouse over color
    &:before
      background-color: unset !important
</style>
