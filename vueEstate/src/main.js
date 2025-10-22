import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

import BaseButton from './components/element/BaseButton.vue'
import BaseTitle from './components/element/BaseTitle.vue'
import HeroTitle from './components/element/HeroTitle.vue'
import SubTitle from './components/element/SubTitle.vue'
import SelectDropdown from './components/element/SelectDropdown.vue'
import BaseImage from './components/element/BaseImage.vue'
import BaseParagraph from './components/element/BaseParagraph.vue'
import BaseTextArea from './components/element/BaseTextArea.vue'
import ListItem from './components/element/ListItem.vue'
import TableHeader from './components/element/TableHeader.vue'
import BaseTable from './components/element/BaseTable.vue'
import TableRow from './components/element/TableRow.vue'
import InputField from './components/element/InputField.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseTitle', BaseTitle)
app.component('HeroTitle', HeroTitle)
app.component('SubTitle', SubTitle)
app.component('InputField', InputField)
app.component('SelectDropdown', SelectDropdown)
app.component('BaseImage', BaseImage)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseTextArea', BaseTextArea)
app.component('ListItem', ListItem)
app.component('TableHeader', TableHeader)
app.component('BaseTable', BaseTable)
app.component('TableRow', TableRow)

createApp(App).mount('#app')
