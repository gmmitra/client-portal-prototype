<template>
    <div class="campaign-list-wrap">
        <ul class="list-reset">
            <!-- <li v-for="(campaign, index) in campaigns" class="border-b-1 border-grey-superlightest">
                <button type="button"
                        class="w-full p-4 block text-left text-xs border-b-2 border-transparent font-medium focus:outline-none hover:border-blue"
                        @click="setActive(campaign)"
                        :class="{selectedmenu: isActive(campaign.code)}"
                >
                    <span v-if="!isEditingBrand">
                        <span class="uppercase">{{campaign.sub_panel.panel.name}}</span> ({{campaign.code}})
                    </span>

                    <span v-else>
                        <span class="uppercase">{{campaign.sub_panel.descriptionName}}</span>
                    </span>
                </button>
            </li> -->
            <li class="border-b-1 border-grey-superlightest">
                <button type="button"
                        class="w-full p-4 block text-left text-xs border-b-2 border-transparent font-medium focus:outline-none hover:border-blue"
                        @click="setActive('code1'); " :class="{active: isActive('code1')}"
                >
                    <span class="uppercase">
                        <span>Toluna</span> <span class="inline-block">(AU-12345)</span>
                    </span>

                </button>
            </li>
            <li class="border-b-1 border-grey-superlightest">
                <button type="button"
                        class="w-full p-4 block text-left text-xs border-b-2 border-transparent font-medium focus:outline-none hover:border-blue"
                        @click="setActive('code2'); " :class="{active: isActive('code2')}"
                >
                    <span class="uppercase">
                        <span>Toluna</span> <span class="inline-block">(CN-12345)</span>
                    </span>

                </button>
            </li>
            <li class="border-b-1 border-grey-superlightest">
                <button type="button"
                        class="w-full p-4 block text-left text-xs border-b-2 border-transparent font-medium focus:outline-none hover:border-blue"
                        @click="setActive('code3'); " :class="{active: isActive('code3')}"
                >
                    <span class="uppercase">
                        <span>Toluna</span> <span class="inline-block">(PH-12345)</span>
                    </span>

                </button>
            </li>
            <li class="border-b-1 border-grey-superlightest">
                <button type="button"
                        class="w-full p-4 block text-left text-xs border-b-2 border-transparent font-medium focus:outline-none hover:border-blue"
                        @click="setActive('code4')" :class="{active: isActive('code4')}"
                >
                    <span class="uppercase">
                        <span>Toluna</span> <span class="inline-block">(SG-12345)</span>
                    </span>

                </button>
            </li>
        </ul>
    </div>
</template>


<script>
   

    export default {
        // props: {
        //     isEditingBrand: {
        //         type: Boolean,
        //         default: false,
        //     }
        // },

        // components: {},

        data() {
            return {
                activeItem: 'code1',
               // adPreview: false
            }
        },

        methods: {
            isActive: function (menuItem) {
                return this.activeItem === menuItem
            },

            setActive: function (menuItem) {
                this.activeItem = menuItem
            }

        }

        // computed: {
        //     ...mapGetters({
        //         previewVisibility: 'campaigns/getPreviewVisibility',
        //         currentView: 'campaigns/getCurrentView',
        //         campaigns: 'campaigns/getList',
        //         active: 'campaigns/getActive',
        //     })
        // }
    }
</script>

<style lang="scss" scoped>
    .campaign-list-wrap {
        li {
            button {
                &.active {
                    border-bottom: 2px solid #1888C9;
                }
            }

        }
    }
</style>
