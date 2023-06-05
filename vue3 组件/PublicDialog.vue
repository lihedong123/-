<template>
	<div class="PublicDialogPage">
		<el-dialog
			custom-class="public-dialog"
			v-model="dialogVisible"
			:title="title"
			:width="width"
			:show-close="false"
      :before-close="handleClose"
		>
			<template #header>
				<div class="header-wrap d-flex a-center j-center">
					<span>{{ title }}</span>
					<div
						class="close_icon-box d-flex a-center j-center"
						@click="handleClose"
					>
						<el-icon class="close_icon"><CloseBold /></el-icon>
					</div>
				</div>
			</template>
			<template #default>
				<slot></slot>
			</template>
			<template #footer>
				<div class="d-flex a-center j-center" v-if="footerButton">
					<el-button
						color="#ffffff"
						style="color: #666666; border-color: #666666"
						@click="onCancel"
						>取消</el-button
					>
					<el-button
						:disabled="confirmDisabled"
						color="#FC7018"
						style="color: #ffffff"
						@click="onConfirm"
						>{{ confirmButtonTitle }}</el-button
					>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { ElDialog } from "element-plus";
import { CloseBold } from "@element-plus/icons-vue";

const props = defineProps({
	visible: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: "提示",
	},
	width: {
		type: String,
		default: "40%",
	},
	confirmButtonTitle: {
		type: String,
		default: "保存",
	},
	footerButton: {
		type: Boolean,
		default: true,
	},
	confirmDisabled: {
		type: Boolean,
		default: false,
	},
});

const emits = defineEmits(["update:visible","update:confirmDisabled", "onConfirm"]);
const dialogVisible = ref(props.visible);

const handleClose = () => {
	emits("update:visible", false);
	emits("update:confirmDisabled", false);
};

const onCancel = () => {
  handleClose();
  console.log();
};

const onConfirm = () => {
	emits("onConfirm");
};

// 监听visible的变化 只能监听第一次的变化
watch(
	() => props.visible,
	(value) => {
		dialogVisible.value = value;
	}
);

// 监听组件内部的dialogVisible变化
watch(
	() => dialogVisible.value,
	(value) => {
		emits("update:visible", value);
	}
);
</script>

<style lang="scss">
.public-dialog .el-dialog__header {
	padding: 0 !important;
	margin-right: 0 !important;
}
</style>

<style lang="scss" scoped>
.PublicDialogPage {
	.header-wrap {
		position: relative;
		width: 100%;
		background-color: #f7f7fa;
		height: 52px;

		span {
			font-size: 16px;
			font-family: SourceHanSansCN-Medium, SourceHanSansCN;
			font-weight: 500;
			color: #1a1a1a;
		}

		.close_icon-box {
			width: 24px;
			height: 24px;
			border: 1px solid #353535;
			border-radius: 50%;
			cursor: pointer;
			position: absolute;
			right: 20px;
			.close_icon {
				font-size: 16px;
			}
		}
	}
}
</style>
