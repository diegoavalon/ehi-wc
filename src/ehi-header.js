import {
	brandAssets
} from './assets/brand-assets'
import {
	findHealthInsuranceTemplate,
	learnTemplate,
	aboutTemplate,
	invocaTemplate,
	mobileTemplate
} from './header-templates'

const navLinks = [{
	title: `Find Health Insurance`,
	template: findHealthInsuranceTemplate,
	hasDropdown: true,
	visibilityClasses: `d-none d-lg-block`
}, {
	title: `Learn`,
	template: learnTemplate,
	hasDropdown: true,
	visibilityClasses: `d-none d-xl-block position-relative learn`
}, {
	title: `About`,
	template: aboutTemplate,
	hasDropdown: true,
	visibilityClasses: `d-none d-xl-block position-relative about`
}, {
	title: `Sign In`,
	hasDropdown: false,
	url: `/ehi/core/login`,
	visibilityClasses: `d-none d-lg-block`
}, {
	title: `(855) 844-9308`,
	template: invocaTemplate,
	hasDropdown: true,
	visibilityClasses: `d-none d-md-block position-relative invoca`
}, {
	title: `
        <svg aria-label="Checkout" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 0.75H3.75V12.75H14.25L17.25 5.25H3.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 18C5.32843 18 6 17.3284 6 16.5C6 15.6716 5.32843 15 4.5 15C3.67157 15 3 15.6716 3 16.5C3 17.3284 3.67157 18 4.5 18Z" fill="#111111"/>
            <path d="M15 18C15.8284 18 16.5 17.3284 16.5 16.5C16.5 15.6716 15.8284 15 15 15C14.1716 15 13.5 15.6716 13.5 16.5C13.5 17.3284 14.1716 18 15 18Z" fill="#111111"/>
        </svg>
    `,
	hasDropdown: false,
	url: `/ehi/individual/cart-summary`,
	visibilityClasses: `d-none d-md-block pr-lg-0`
}]

export class EhiHeader extends HTMLElement {
	static get observedAttributes() {
		return ['is-transparent']
	}

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = this._render()
		this.isTransparent = this.getAttribute("is-transparent") === "true" || false
		this.setAttribute('role', "banner")

		this.$mainNav = this.querySelector('nav[aria-label="main navigation"]')
		this.$mainLinkDropdowns = Array.from(this.$mainNav.querySelectorAll('.nav-item--main.has-dropdown'))

		this.$mainNav.addEventListener('click', e => {
			e.target.blur()
			// Detect if click is mobile menu trigger
			if (e.target.closest('.nav-item--mobile')) {
				this.$mobileNavEl = e.target.closest('.nav-item--mobile');
				document.body.classList.toggle('scroll-locked')
				this.$mobileNavEl.classList.toggle('is-open')
				// Set a flag to reference mobile menus is open
				this.mobileMenuIsActive = true
				this.$mobileMenu = this.$mobileNavEl.querySelector('.menu-overlay')
			}

			// Detect if main nav link is clicked or triggered by keyboard
			if (e.target.classList.contains('button--reset')) {
				// Add class to open dropdown
				e.target.closest('.nav-item--main').classList.add('is-open')
				// Set a flag to reference a dropdown is open
				this.dropdownIsActive = true

				if (e.detail === 0) {
					setTimeout(() => this.focusNextElement(e.target.nextElementSibling), 60)
				}
			}
			return;
		})

		// Remove dropdown when clicking outside of opened dropdown 
		document.addEventListener('click', e => {
			if (!this.dropdownIsActive) return

			if (this.dropdownIsActive && !e.target.closest('.is-open')) {
				this.closeAllDropdowns()
			}
		})

		// Add mouseover event also to remove dropdowns when one already open
		this.$mainNav.addEventListener('mouseover', e => {
			if (!this.dropdownIsActive) return

			if (this.dropdownIsActive && !e.target.closest('.is-open')) {
				this.closeAllDropdowns()
			}
			return
		})

		// Remove open dropdown when focus leaves entire dropdown
		document.addEventListener('focus', e => {
			if (this.dropdownIsActive && !e.target.closest('.is-open')) {
				this.closeAllDropdowns()
			}
			if (this.mobileMenuIsActive && !e.target.closest('.is-open')) {
				this.$mobileNavEl.classList.remove('is-open')
				document.body.classList.remove('scroll-locked')
			}
			return
		}, true)


		this.$elHeight = this.offsetHeight;

		// Logic to properly handle layout and main nav pinning to top
		window.addEventListener('scroll', () => {
			requestAnimationFrame(() => {
				const scrollPos = pageYOffset;

				if (scrollPos > 1) {
					this.classList.add('is-fixed');

					if (this.isTransparent) {
						this.removeAttribute('is-transparent')
					} else {
						document.body.style.marginTop = `${this.$elHeight}px`;
					}
				} else {
					this.classList.remove('is-fixed');

					if (this.isTransparent) {
						this.setAttribute('is-transparent', true)
					} else {
						document.body.style.marginTop = `0px`;
					}
				}
			})
		})
	}

	closeAllDropdowns() {
		this.$mainLinkDropdowns.forEach(link => link.classList.remove('is-open'))
		this.dropdownIsActive = false
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
			<a
				href="#main-content"
				class="sr-only skip-content"
			>Skip to content ↓</a>
			<div class="container">
				<div class="row no-gutters justify-content-between">
					<div class="col d-flex align-items-center">
						<a
							href="/"
							aria-label="Home page"
						>
							${brandAssets['logo']}
						</a>
					</div>
					<div class="col position-static">
						<nav aria-label="main navigation">
							<ul class="list-unstyled d-flex justify-content-end align-items-center mb-0">
								${navLinks.map((link) => (`
								<li
									class="nav-item--main px-md py-md py-md-lg ${link.visibilityClasses}${link.hasDropdown ? ` has-dropdown` : ''}">
									${link.hasDropdown ? `
									<button class="button--reset nav-link">
										${link.title}
									</button>
									<div class="nav-item__dropdown bg-gray-lighter">
										${link.template}
									</div>
									`
									: `
									<a
										class="nav-link"
										href="${link.url}"
									>${link.title}</a>
									`
									}
								</li>
								`)).join('')}
								<li class="nav-item--main nav-item--mobile d-flex align-items-center pl-md py-md py-md-lg d-lg-none">
									<button
										class="button--reset nav-link"
										aria-label="mobile menu navigation"
									>
										<div class="hamburger">
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</div>
									</button>
									<div class="menu-overlay bg-gray-lightest">${mobileTemplate}</div>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		`;
	}
}