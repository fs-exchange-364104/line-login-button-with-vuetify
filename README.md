# Line Login Button with Vuetify

> Vue single file component

# Read and agree this, before install
[Usage Guidelines for the LINE Login Button](https://terms2.line.me/LINE_Developers_Guidelines_for_Login_Button)

## Install and Build Setup

``` bash
# install
npm install --save-dev https://github.com/tpywao/line-login-button-with-vuetify.git
cd path/to/node_modules/line-login-button-with-vuetify
# install dependencies
npm install
# build for production with minification
npm run build
```

## Usage

```js
import Vue from 'vue'
import Vuetify from 'vuetify'
import LineLoginButton from 'line-login-button-with-vuetify'

Vue.use(Vuetify)
Vue.use(LineLoginButton)
```

```vue
<line-login-button></line-login-button>
<line-login-button large></line-login-button>
<line-login-button small></line-login-button>
<line-login-button disabled></line-login-button>
```
