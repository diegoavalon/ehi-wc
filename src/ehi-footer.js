import {
	mobileFooter,
	desktopFooter
} from "./footer-templates";

export class EhiFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = this._render()
		this.setAttribute('role', 'contentinfo')

		this.addEventListener('click', e => {
			if (e.target.closest('button.accordion-trigger')) {
				if (e.detail === 1) e.target.blur()
				const $button = e.target.closest('button.accordion-trigger');
				const $panel = $button.nextElementSibling;
				$button.classList.toggle("is-active");

				if ($panel.style.maxHeight) {
					$panel.style.maxHeight = null;
				} else {
					$panel.style.maxHeight = $panel.scrollHeight + "px";
				}

				if (e.detail === 0) {
					this.focusNextElement($panel)
				}
			}
		})
	}

	focusNextElement(containerEl) {
		const focusable = [].slice.call(containerEl.querySelectorAll("a, button, input, select, textarea, [tabindex], [contenteditable]"))
			.filter(function ($e) {
				if ($e.disabled || ($e.getAttribute("tabindex") && parseInt($e.getAttribute("tabindex")) < 0)) return false;
				return true;
			}).sort(function ($a, $b) {
				return (parseFloat($a.getAttribute("tabindex") || 99999) || 99999) - (parseFloat($b.getAttribute("tabindex") || 99999) || 99999);
			});

		focusable[0].focus()
	};

	_render() {
		return `
			<div class="container px-0 px-lg-md py-0 pt-lg-xxl pb-lg-xl border-top">
				<div class="d-lg-none">
					${mobileFooter}
				</div>
				<div class="d-none d-lg-flex justify-content-between">
					${desktopFooter}
				</div>
			</div>
		`;
	}
}