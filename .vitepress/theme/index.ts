import DefaultTheme from 'vitepress/theme'
import './style.css'
import TipCard from './components/TipCard.vue'
import WarningCard from './components/WarningCard.vue'
import DangerCard from './components/DangerCard.vue'
import GitHubAuth from './components/GitHubAuth.vue'
import GiscusComments from './components/GiscusComments.vue'
import ContentTracker from './components/ContentTracker.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('TipCard', TipCard)
    app.component('WarningCard', WarningCard)
    app.component('DangerCard', DangerCard)
    app.component('GitHubAuth', GitHubAuth)
    app.component('GiscusComments', GiscusComments)
    app.component('ContentTracker', ContentTracker)
  }
}