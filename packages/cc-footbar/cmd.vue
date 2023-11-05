<template>
    <div class="cmd" @click.prevent.stop="onClick">
        {{ data.label }}
    </div>
</template>
<script lang="ts">
import { FootCmd } from './const'
import { showCommand } from '../cc-command/const'
import { ref, defineComponent, PropType } from "vue"
export default defineComponent({
    name: "cmd",
    props: {
        data: {
            type: Object as PropType<FootCmd>,
            required: true,
        }
    },
    setup(props, ctx) {
        return {
            onClick() {
                if (props.data && props.data.cmds && props.data.cmds.length > 0) {
                    showCommand(props.data.cmds);
                }
            }
        }
    },
})

</script>
<style lang="less">
.cmd {
    user-select: none;
    color: white;
    cursor: pointer;
    padding: 0 3px;

    &:hover {
        background-color: rgb(152, 152, 152);
    }
}
</style>