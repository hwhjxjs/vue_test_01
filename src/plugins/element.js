/*
 * @Author: your name
 * @Date: 2020-08-26 15:51:19
 * @LastEditTime: 2020-08-28 11:08:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_test_01/src/plugins/element.js
 */
import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
