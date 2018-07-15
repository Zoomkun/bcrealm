import Cheader from '@/components/header.vue';
import Cbanner from '@/components/banner.vue';
import Cindex from '@/components/contentIndex.vue';
import Cidea from '@/components/contentIdea.vue';
import Cteam from '@/components/contentTeam.vue';
import Cbusiness from '@/components/contentBusiness.vue';
import bus from '@/js/event'

export default {
    name: 'Index',
    mounted() {
        var self = this
        bus.$on('toChangePage', function (index) {
            self.$forceUpdate()
            self.$set(self.page, 'pageNow', index)
        })
    },
    data() {
        return {
            page: {
                pageNow:0
            }
        }
    },
    methods: {
    },
    components: {
        Cheader,
        Cbanner,
        Cindex,
        Cidea,
        Cteam,
        Cbusiness,
    },
}
