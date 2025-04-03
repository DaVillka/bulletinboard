<template>
	<div v-if="isVisible">
		<div
			class="modalOverlay"
			@click="closeModal"
		></div>
		<div class="modalWindow">
			<div class="modalWrapper">
				<div class="modalTittle">
					<span>вы уверены?</span>
				</div>
				<div class="modalText">
					<span></span>
				</div>
				<div class="modalImg">
					<img :src="image">
				</div>
				<div class="modalButtonBlock">
					<!-- <button class="modalButton" @click="sendPurchaseConfirmation"> -->
					<button
						class="modalButton"
						@click="purchase(true)"
					>
						<span class="modalButtonText">Банк</span>
					</button>
					<button
						class="modalButton"
						@click="purchase(false)"
					>
						<span class="modalButtonText">Наличные</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { searchScript } from "./scripts/searchScript.js";

	export default {
		...searchScript,
		props: {
			isVisible: Boolean,
			image: String,
			id: String,
		},
		methods: {
			...searchScript.methods,

			purchase(isBank) {
				//executeClient('sendPurchaseConfirmation', JSON.stringify(purchaseData));
				//console.log(`test: ${searchScript.data().selectedId}`)
				window.events.callEvent("sendPurchaseConfirmation", isBank);
				this.closeModal();
			},
		},
	};
</script>

<style>
	@import './style/modalWindow.css';
</style>
  